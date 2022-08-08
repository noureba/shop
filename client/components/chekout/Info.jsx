import React from "react";

function Info(props) {
  return (
    <form className="contactForm" >
      <input
        type="text"
        value={props.data.FirstName}
        onChange={(e)=> props.onChange(e)}
        placeholder="First Name"
        name="FirstName"
        required
      />
      <input
        type="text"
        value={props.data.LastName}
        onChange={(e)=> props.onChange(e)}
        placeholder="Last Name"
        name="LastName"
        required
      />
      <input 
        type="text"
        value={props.data.City} 
        placeholder="City" 
        name="City"
        onChange={(e)=> props.onChange(e)}
        required 
      />
      <input
        type="text"
        value={props.data.Address}
        placeholder="Address"
        name="Address"
        onChange={(e)=> props.onChange(e)}
        required
      />
      <input
        type="number"
        value={props.data.Telephone}
        placeholder="Telephone"
        name="Telephone"
        onChange={(e)=> props.onChange(e)}
        required
      />
      <input
        type="email"
        value={props.data.Email}
        placeholder="Email"
        name="Email"
        onChange={(e)=> props.onChange(e)}
        required
      />
    </form>
  );
}

export default Info;
