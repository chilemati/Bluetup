import React, { Component } from 'react'

export default class Classdropdown extends Component {
    constructor({length,height}) {
        this.length = length;
        this.height = height;
    }
    area() {
        return this.length * this.height;
    }
  render() {
    return (
        <div>
            <h1>Classdropdown</h1>
            {this.area()}
            
      </div>
    )
  }
}
