import React, { Component, Fragment } from 'react';
import data from './data';
import { max } from 'd3-array';
import { scaleLinear, scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { NodeGroup } from 'react-move';

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
          <NodeGroup
            data={data}
            keyAccessor={d => d.country}
            start={d => ({
              width: 0
            })}
            enter={d => ({
              width: [widthScale(d.wages)]
            })}>
            {nodes => (
              <Fragment>
                {nodes.map(({ state, data, key }) => (
                  <tr key={key}>
                    <td>
                      {data.country}
                    </td>
                    <td>
                      {data.wages.toFixed(2)}
                    </td>
                    <td>
                      <svg height="50">
                        <rect width={state.width} height="50" fill={colorScale(key)} />
                      </svg>
                    </td>
                  </tr>
                ))}
              </Fragment>
            )}
          </NodeGroup>
        </tbody>
      </table>
    );
  }
}

export default App;
