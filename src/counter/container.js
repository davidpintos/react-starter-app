import { connect } from 'react-redux';
import { Component } from './component';

const mapStateToProps = state => {
  return {
    count: state.countReducer
  };
};

const mapDispatchToProps = dispatch => ({
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
});

export const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
