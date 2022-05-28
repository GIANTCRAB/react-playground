// @flow
import * as React from 'react';
import Immutable from 'immutable';
import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import ContainerLeftRight from './ContainerLeftRight';
import FormResetter from './FormResetter';
import InputForm from './InputForm';
import HistoryList from './HistoryList';

export type InputHistory = {
  id: number,
  inputValue: string,
  date: Date
};

function App(): React.Node {
  const [formValue, setFormValue]: [string, Function] = React.useState < string > ('');
  const [historyValue, setHistoryValue]: [Immutable.List<InputHistory>, Function] = React.useState < Immutable.List < InputHistory > > (new Immutable.List([]));

  function handleChange(e) {
    changeFormValue(e.target.value);
  }

  function handleReset(e) {
    e.preventDefault();
    changeFormValue('');
  }

  function handleClick(historyId: number) {
    retrieveHistory(historyId);
  }

  function changeFormValue(newValue: string) {
    setFormValue(newValue);
    const newHistoryValue = historyValue.push({ id: historyValue.size, inputValue: newValue, date: new Date() });
    setHistoryValue(newHistoryValue);
  }

  function retrieveHistory(historyId: number) {
    historyValue
      .filter((value: InputHistory) => value.id === historyId)
      .take(1)
      .forEach((filteredValue: InputHistory) => {
        changeFormValue(filteredValue.inputValue);
      })
  }

  return (
    <React.Fragment>
      <ContainerLeftRight
        leftContent={
          <React.Fragment>
            <InputForm inputValue={formValue} onChange={handleChange} />
            <FormResetter onClick={handleReset} />
          </React.Fragment>
        }
        rightContent={<React.Fragment>
          <HistoryList history={historyValue} onClick={handleClick} />
          <div>{formValue}</div>
        </React.Fragment>} />
    </React.Fragment>
  );
}

export default App;
