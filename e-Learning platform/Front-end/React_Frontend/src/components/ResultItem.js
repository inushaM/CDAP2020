import React, { Component } from 'react'

class ResultItem extends Component {
  render() {
    return (
        <tr>
           {/* <th scope="row">{index + 1}</th> */}
           <td>{this.props.codeLineItem.codeNumber}</td>
           <td>{this.props.codeLineItem.lineNumber}</td>
           <td>{this.props.codeLineItem.pStatement}</td>
        </tr>
    )
  }
}

export default ResultItem;
