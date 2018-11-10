import React, { Component } from 'react';
import data from './data';
import { max } from 'd3-array';
import { scaleLinear, scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

class App extends Component {
  render() {
    const colorScale = scaleOrdinal(schemeCategory10);
    const widthScale = scaleLinear().domain([0, max(data, d => d.wages)]).range([0, 320]);

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
          {data.map((d, i) => (
            <tr key={d.country}>
              <td>
                {d.country}
              </td>
              <td>
                {d.wages.toFixed(2)}
              </td>
              <td>
                <svg height="50">
                  <rect width={widthScale(d.wages)} height="50" fill={colorScale(i)} />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default App;
