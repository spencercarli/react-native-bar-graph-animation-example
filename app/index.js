import React, { Component } from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import AnimatedBar from './AnimatedBar';

const window = Dimensions.get('window');
const DELAY = 100;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.generateData();
    this.interval = setInterval(() => {
      this.generateData();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  generateData = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push(Math.floor(Math.random() * window.width));
    }

    this.setState({
      data,
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5FCFF', justifyContent: 'center'}}>
        <View>
          {this.state.data.map((value, index) => <AnimatedBar value={value} delay={DELAY * index} key={index} />)}
        </View>
      </View>
    );
  }
}

export default App;
