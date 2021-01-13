import React, { Component } from 'react';
import '../App.css';

class SearchField extends React.Component{

constructor()
{

super();

this.state = {

    search: "",
    isCkecked: false

};
this.handleChange = this.handleChange.bind(this);

}

handleChange(event) {
    
    const value = event.target.value;
    this.setState({
      [event.target.name]: value
      
    });
  }

  

render()
{
    
        return (
          <form>
            <br />
            {/* 1 */}
            <input
              type="text"
              name="search"
              placeholder="Gift Search"
              onChange={this.handleChange}
            />
           
           
          </form>
        );
      }
    }
    


export default SearchField;
