import React, { Component } from 'react';



// not componentDidMount only executes initially
class LifeCycleInClassComp extends Component {
  // 1. The constructor method is called when the component is first created.
  // This is the place to initialize state and bind methods if necessary.
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('1. Constructor: Component is being created');
  }

  // 2. componentDidMount is called after the component is mounted (inserted into the tree).
  // This is a good place to initiate API calls or set up any subscriptions.
  componentDidMount() {
    console.log('3. componentDidMount: Component has been mounted');
    // Example of setting up a timer (not required for interview demo)
    this.interval = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  // 3. componentDidUpdate is called after the component is updated.
  // This is a good place to perform side effects based on the updated state or props.
  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate: Component has been updated');
    console.log('Previous state:', prevState.count);
    console.log('Current state:', this.state.count);
  }

  // 4. componentWillUnmount is called right before the component is unmounted and destroyed.
  // This is a good place to clean up any subscriptions, timers, or other side effects.
  componentWillUnmount() {
    console.log('6. componentWillUnmount: Component is about to be unmounted');
    clearInterval(this.interval);
  }

  // 5. render is the only required method in a class component.
  // It returns the JSX that represents the component's UI.
  render() {
    console.log('2. 4. Render: Component is being rendered');
    return (
      <div>
        <h1>React Lifecycle Methods Demo</h1>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default LifeCycleInClassComp;
