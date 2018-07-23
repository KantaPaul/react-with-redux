import React from 'react';
import {Link} from 'react-router-dom';

let ExpenseListItem = ({id, description, amount, createdAt, note}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <p>{note}</p>
    <Link className="btn btn-primary" to={`/edit/${id}`}>Edit</Link>
  </div>
);

export default ExpenseListItem;