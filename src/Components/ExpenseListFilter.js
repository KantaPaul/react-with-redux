import React from 'react';
import {connect} from 'react-redux';
import { StaticRouter } from '../../node_modules/react-router-dom';
import {setTextFilter} from '../actions/filters';

let ExpenseListFilters = (props) => (
  <div className="mt-4">
    <input type="text" className="form-control" value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value))
      // console.log(e.target.value)
    }}/>
  </div>
);

let mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);