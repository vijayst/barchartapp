import React, { Component } from 'react';
import data from './data';

class App extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th width="20%">Country</th>
            <th width="20%">$ /hr</th>
            <th></th> 
          </tr>  
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={d.country}>
              <td>
                {d.country}
              </td>
              <td>
                {d.wages.toFixed(2)}
              </td>
              <td>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default App;
