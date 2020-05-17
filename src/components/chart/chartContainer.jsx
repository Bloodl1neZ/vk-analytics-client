import React, {Component} from 'react';
import Chart from 'chart.js';
import {generateColors} from './utils';

class ChartContainer extends Component {
  state = {};

  componentDidMount() {
    const {data, type} = this.props;
    const chart = this.createChart(data, type);
    this.setState({
      chart,
    });
  }

  getCanvasId = () => `canvas-${this.props.id}`;

  createChart = (data, type) => {
    const {dataset, labels} = data;
    const colors = generateColors(dataset.data.length);
    const context = this.refs[this.getCanvasId()].getContext('2d');
    return new Chart(context, {
      type,
      data: {
        labels,
        datasets: [
          {
            ...dataset,
            ...colors,
            borderWidth: 1,
          },
        ],
      },
      options: {
        animation: {
          easing: 'linear',
        },
        legend: {
          display: false,
        },
        onHover: null,
      },
    });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.type !== this.props.type) {
      this.setState({
        chart: this.createChart(nextProps.data, nextProps.type),
      });
    }
  }

  render() {
    return (
        <div>
          <canvas ref={this.getCanvasId()}/>
        </div>
    );
  }
}

export default ChartContainer;
