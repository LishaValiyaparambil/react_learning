import React from 'react';

export default function HeaderComponent(props) {
    return (
      <>
        <h1> Welcome {props.username}! </h1>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </>
    );
  }