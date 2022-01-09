import logo from './logo.svg';
import './App.css';
import React from 'react';
import AddSection from "./Components/AddSection"





class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      general: ['name', 'email', 'phone'],
      education: ['school', 'degree'],
      experience: ['job', 'years']
    };
  }
  render(){
  return (
    <div className="App">
     <AddSection title={'General Section'}  arrayProp={this.state.general}/>
     <AddSection title={'Education'} arrayProp={this.state.education}/>
     <AddSection title={'Experience'}  arrayProp={this.state.experience}/>
    </div>
  );
}
}
export default App;
