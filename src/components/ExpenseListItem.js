import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>
        {description}
      </h3>
    </Link>
    <p>
      {amount} - {
        new Date(createdAt)
          .toString()
          .match(/^\w{3}(\s*.)+\s\d{4}/)[0]
        }
    </p>
  </div>
);

export default ExpenseListItem;