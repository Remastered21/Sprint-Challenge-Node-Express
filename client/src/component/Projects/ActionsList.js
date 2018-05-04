import React from "react";

const ProjAction = props => {
  return (
    <li>

        <p>item #{props}:</p>
        <p>Description: {props}</p>
        <p>Notes: {props}</p>

    </li>
  );
};

export default ProjAction;
