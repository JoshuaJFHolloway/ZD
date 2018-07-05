import React from 'react';

const Flag = (props) => {
  return (
    <div>
      <img
        src={props.image}
        width="500px"
        onClick={props.onClick}
      />
    </div>
  )
};

export default Flag;