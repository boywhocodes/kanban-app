import React from 'react';

// export default ({task}) => <div>{task}</div>;

// export default ({task, onDelete}) => (
//   <div>
//     <span>{task}</span>
//     <button onClick={onDelete}>X</button>
//   </div>
// );

export default ({children, ...props}) => (
  <div {...props}>
    {children}
  </div>
);
