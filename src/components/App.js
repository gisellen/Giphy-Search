import React from 'react';
import '../App.css';
import SearchField from '../SearchField/SearchField';

class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
     <SearchField />
      </div>
    );
  }
}

export default App;
