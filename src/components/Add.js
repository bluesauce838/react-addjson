import React, {useState} from 'react'
const Add =({employees,setEmployees,setIsAdding})=>{
  const[firstName,seFirstname]=useState('')

}
return (
  <div className='small-container'>
    <form onSubmit={handleAdd}>
      <h1>
        Add Employee
        </h1>
        <label htmlFor="firstNAme">FirstName </label>
        <Input 
        id="lastName"
        type = "text"
        name="FirstName"
        value={firstName}
        onChange={e=>setFirstName(e.target.value)}
        />
        </form>
        </div>
)
export default Add;