import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

let ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }))
    }} className="btn btn-danger">Remove</button>
  </div>
);

export default connect()(ExpenseListItem);