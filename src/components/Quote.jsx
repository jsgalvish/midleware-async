import React from 'react';
import { connect } from 'react-redux';
import { getQuoteAction } from '../actions/quoteActions';

class Quote extends React.PureComponent {
  render() {
    console.log(this.props.status);
    return (
      <div>
        <button type="button" onClick={() => this.props.getQuoteAction()}>GetQuote</button>
        <h1>{this.props.data[0]}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  getQuoteAction: () => dispatch(getQuoteAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
