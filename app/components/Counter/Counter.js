import React, { PropTypes } from 'react';
import { Icon } from '../';
import css from './Counter.scss';

export default class Counter extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const count = this.props.count > 0 ?
      this.props.count :
      <Icon iconName="plusSmall" />;

    return (
      <div className={css.container}>
        <button className={css.counter}>
          {count}
        </button>
      </div>
    );
  }
}
