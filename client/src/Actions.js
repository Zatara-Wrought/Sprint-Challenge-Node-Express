import React from "react";

const Actions = props => {
  return (
    <div>
      {props.actions.map(action => {
        return (
          <div key={action.id}>
            <p>Description: {action.description}</p>
            <p>Notes: {action.notes}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Actions;
