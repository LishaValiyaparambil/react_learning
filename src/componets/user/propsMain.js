import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import LogChart from './props';
import FormData from './forms'


function FormDataDisplay(props) {
  const [logDesc, setlogDesc] = useState([]);
  const addLogDesc = (log) => {
    let logs = [...logDesc, log];
    setlogDesc(logs);
  }
  return (
    <section>
      <FormData addLogDesc={addLogDesc}/>
      <LogChart chores={logDesc}/>
    </section>
  );
}

export default FormDataDisplay;