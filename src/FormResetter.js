// @flow
import * as React from 'react';

type Props = {
  onClick: Function,
};

const FormResetter: React.ComponentType<Props> = React.memo(function (props: Props) {
  return <button onClick={props.onClick}>Reset Form</button>
});

export default FormResetter;
