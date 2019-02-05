import * as React from 'react';

export interface MyCompProps {name?: 'nidhin' | 'ragu';}

const MyComp = (props: MyCompProps) => {
  return (
      <div>
          <h1>Stateless compoenent</h1>
          <h1>{props.name}</h1>
      </div>
  );
};

export default MyComp;