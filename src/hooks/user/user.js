import React, { useState } from 'react'

function UserRegistration() {
 
    const [user, setUser] = useState({});
  
    const updateDetails = () => {
      setUser( {name: "Lisha",
      Designation: "Employee",
      company : "Perfomatix"});
    }
  
    return (
      <>
      <p></p>
      <button
          type="button"
          onClick={updateDetails}
        >Know Me</button>
        <h1>My Name is {user.name}</h1>
        <p>
          My Desigation is {user.Designation}.
        </p>
      </>
    )
}

export default UserRegistration;