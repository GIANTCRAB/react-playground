// @flow
import * as React from 'react';
import type { InputHistory } from './App';
import Immutable from 'immutable';

type Props = {
  history: Immutable.List<InputHistory>,
  onClick: Function
};

const HistoryList: React.ComponentType<Props> = React.memo(function (props: Props) {
  const mappedHistory = props.history.map((record: InputHistory) => {
    return <li key={record.id} onClick={() => props.onClick(record.id)}>{record.inputValue}</li>
  });

  return (
    <ul>{mappedHistory}</ul>
  );
});

export default HistoryList;
