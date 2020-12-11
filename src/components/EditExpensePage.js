import React from 'react';

const EditExpensePage = (props) => (
  <div>
    This page will edit the expense of id: {props.match.params.id}
  </div>
);

export default EditExpensePage;