import React, { useState } from 'react'
import "./AddUser.css"
import axios from "axios";

const AddUser = () => {
    const [formData,setFormData]=useState({
        name:"",
        mobile:"",
        email:"",
        password:"",

    })

    const handleFormSubmit=async(e)=>{
        let response=await axios.post("http://localhost:4000/posts",formData);

        if(response){
            alert("Data submitted successful")
        }
        else{
            alert("Something went wrong")
        }
        setFormData({
            name:"",
            mobile:"",
            email:"",
            password:"",

        })
    }
  return (
    <div className="container">
      <div clasName="row">
        <div className="col-md-7">
            <h1 className='text-center'>Add User Form</h1>
        </div>

        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" 
  value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}
  />
</div>
             
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" value={formData.mobile} onChange={(e)=>setFormData({...formData,mobile:e.target.value})} />
</div>

        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" 
  value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
</div>

<div class="mb-3">
  <button className='btn btn-success' onClick={handleFormSubmit} >Add User</button>
</div>
        </div>  
    </div>
  )
}

export default AddUser