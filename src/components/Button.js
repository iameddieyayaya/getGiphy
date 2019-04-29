import './Button.css';
import React from 'react';

class Button extends React.Component {
  state = { term: this.props.value };

  buttonClicked = e => {
    this.props.whenItSubmits(this.state.term);
  };

  render() {
    let { items, value } = this.props;
    return (
      <div className='btn'>
        <button
          onClick={this.buttonClicked}
          className='mybtn ui button'
          value={value}
        >
          {items}
        </button>
      </div>
    );
  }
}

export default Button;
