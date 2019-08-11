import React, {Component, Children} from 'react';

export default class SlideShow extends Component {
  state = {
    total: 0,
    current: 0,
  };

  componentDidMount () {
    const total = Children.count (this.props.children);
    this.setState ({
      total,
    });

    this.interval = setInterval (this.show, 2000);
  }

  show = () => {
    const {current, total} = this.state;
    this.setState ({
      current: current + 1 === total ? 0 : current + 1,
    });
  };

  componentWillMount () {
    clearInterval (this.interval);
  }

  render () {
    return (
      <div>
        {Children.toArray (this.props.children)[this.state.current]}
      </div>
    );
  }
}
