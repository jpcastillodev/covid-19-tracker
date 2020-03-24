import React, { Component } from 'react'

class Card extends Component {

  render() {
    return (
      <div className={`col col-lg-${this.props.size <= 1 ? "12" : "4"} col-sm-12 col-xs-12`}>
        <div className={`card text-${this.props.text} ${this.props.bg}`}>
          <div className="card-body">
            <h4 className="card-title">{this.props.country}</h4>
            <p className="card-text"><span className="badge badge-warning">Confirmed</span>  : {this.props.confirmed}</p>
            <p className="card-text"><span className="badge badge-danger">Deaths</span> : {this.props.deaths}</p>
            <p className="card-text"><span className="badge badge-success">Recovered</span> : {this.props.recovered}</p>
          </div>
          <div className="card-footer">
            <small style={{ fontSize: "17px" }}>last update: {(new Date(this.props.date)).toString().slice(0, 15)}</small>
          </div>
        </div>
      </div>
    )
  }
}

export { Card };