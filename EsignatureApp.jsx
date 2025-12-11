import React from 'react';
import Title from './components/Title';
import { useState } from 'react';


export default function EsignatureApp() {
  
  let [name,setName] =useState("Your signature");
  let [date,setDate] =useState("Your date");

  const handelDateChange = (e) =>{
    setDate(e.target.value);
  }
  
  const handelNameChange = (e) =>{
    setName(e.target.value);
  }

  const inputStyle ={
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: "0.35rem 0",
  }

  return (
    <div className='container text-center'>
      {/* Use proper class names */}
      <Title classes="title" text={name}/>
      <Title classes="title main" text={!date ? "DoB" : date}/> 
      
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolor et quod! Delectus sunt, fugiat recusandae sint neque iure ex temporibus aliquam nisi vero vel cupiditate non porro? Sapiente, repellat!</p>

      <footer className='d-flex' style={{justifyContent: "space-around",position:"relative",top:"40vh" }}>      
        <input type='date' value={date} onChange={handelDateChange} style={inputStyle}></input>
        <input type='text' value={name} onChange={handelNameChange} style={inputStyle}></input>
      </footer>

    </div>
  );
}