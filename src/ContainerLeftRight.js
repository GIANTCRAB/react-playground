// @flow
import * as React from 'react';

type Props = {
  leftContent: React.Node,
  rightContent: React.Node
};

const ContainerLeftRight: React.ComponentType<Props> = React.memo(function (props: Props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">{props.leftContent}</div>
        <div className="col">{props.rightContent}</div>
      </div>
    </div>
  );
});

export default ContainerLeftRight;
