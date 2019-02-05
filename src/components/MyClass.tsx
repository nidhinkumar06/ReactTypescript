import * as React from 'react';

export interface MyClassProps {name?: string; isAvailable: boolean;}
export interface MyClassState {age: number;}

class MyClass extends React.Component<MyClassProps, MyClassState> {

  static defaultProps: Partial<MyClassProps> = {
    name: 'kumar'
  };

  state = {
    age: 26
  };

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h1>My name is {this.props.name} and i am {this.state.age} old!</h1>
      </div>
    );
  }

}

export default MyClass;
