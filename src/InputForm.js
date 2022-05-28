// @flow
import * as React from 'react';

type Props = {
  inputValue: string,
  onChange: Function,
};

const InputForm: React.ComponentType<Props> = React.memo(function (props: Props) {
  return <input value={props.inputValue} onChange={props.onChange} />
});

export default InputForm;
