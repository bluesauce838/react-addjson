import React, { useState } from 'react';
import swal from 'sweetalert2';
// function Add ()=>{
//   const[firstName,seFirstname]=useState('')
//   const handleAdd = e =>{
//   e.preventDefault();
//   if (!firstName)
//   return(
//     'dont call'
//   )
// }
// return (
//   <div className='small-container'>
//     <form onSubmit={ handleAdd }>
//       <h1>
//         Add Employee
//         </h1>
//         <label htmlFor="firstNAme">FirstName </label>
//         <Input
//         id="lastName"
//         type = "text"
//         name="FirstName"
//         value={firstName}
//         onChange={e=>setFirstName(e.target.value)}
//         />
//         </form>
//         </div>
// )
// };

function Add() {
  return (
    <div>
      <form>
      
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />

      </form>
      {/* x {props.name} */}
    </div>
  );
}
export default Add;
