import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine } from 'victory';

class TwitterChart extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <section className="center-content clearfix">
        <div className="row">
          <div className="graph column--heavy col-md-8">
            <VictoryChart />
          </div>
          <section className="trends col-md-4">
            <div className="row">
              <article className="orange col-sm-6">
                <span className="">796</span>
                <p>Tweets around the world</p>
              </article>
              <article className="red col-sm-6">
                <span className="">Sad</span>
                <p>Overall feeling</p>
              </article>
            </div>

            <div className="row">
              <article className="brown col-sm-6">
                <p>Some interesting content</p>
                <span className=""></span>
              </article>
              <article className="gray col-sm-6">
                <p>Some interesting content</p>
                <span className=""></span>
              </article>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default TwitterChart;
