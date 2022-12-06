import React, { useEffect, useState } from 'react'
import "./AddUser.css"
import axios from "axios";
const AddUser = () => {
  const [data,setData]=useState([{}])

  useEffect(()=>{
    getUser();
  console.log(data)

  },[])

  const getUser =async()=>{
    await axios.get("http://localhost:4000/posts")
    .then((res)=>setData(res.data))
  }

  
    const [formData,setFormData]=useState({
        name:"",
        mobile:"",
        email:"",
        password:"",

    })
    const [updateData,setUpdateData]=useState({
      name:"",
      mobile:"",
      email:"",
      password:"",
      id:""

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

        getUser();
      }
          const handleDelete =async(id)=>{
    await axios.delete("http://localhost:4000/posts/"+id)
    .then((res)=>alert("Deleted Successfully"))
    getUser();
  }
    
  const handleUpdate =async()=>{
    await axios.put(`http://localhost:4000/posts/${updateData.id}`,updateData)
    .then((res)=>{
      alert("Updated Success");
    getUser();
  });
    
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
            <h1 className='text-center'>Add User Form</h1>
        </div>

        <div className="mb-3">
  <label  className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" 
  value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}
  />
</div>
             
<div className="mb-3">
  <label  className="form-label">Mobile Number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" value={formData.mobile} onChange={(e)=>setFormData({...formData,mobile:e.target.value})} />
</div>

        <div className="mb-3">
  <label className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} />
</div>

<div className="mb-3">
  <label  className="form-label">Password</label>
  <input type="password" className="form-control" id="exampleFormControlInput1" 
  value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
</div>

<div className="mb-3">
  <button className='btn btn-success' onClick={handleFormSubmit} >Add User</button>
</div>
        </div>  
        <div>
        <h1>User Dashboard</h1>
        <table className="table table-dark table-hover">
        
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
    {data && data?.map((user)=>(
      <tr key={user.id}>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.mobile}</td>
      <td>{user.email}</td>
      <td style={{display:"flex",justifyContent:"space-between"}}>

        <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setUpdateData({
          name:user.name,
          mobile:user.mobile,
          email:user.email,
          password:user.password,
          id:user.id
})}>Edit</button>

        <button className="btn btn-danger" onClick={()=>handleDelete(user.id)}>Delete</button>
      </td>

    </tr>
    )
    )}
    
  </tbody>

        </table>
    </div>
    

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"    aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title fs-5" id="exampleModalLabel">Update User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="mb-3">
  <label  className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" 
  value={updateData.name} onChange={(e)=>setUpdateData({...updateData,name:e.target.value})}
  />
 </div>
             
      <div className="mb-3">
        <label  className="form-label">Mobile Number</label>
        <input type="number" className="form-control" id="exampleFormControlInput1" value={updateData.mobile} onChange={(e)=>setUpdateData({...updateData,mobile:e.target.value})} />
      </div>

              <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" value={updateData.email} onChange={(e)=>setUpdateData({...updateData,email:e.target.value})} />
      </div>

      <div className="mb-3">
        <label  className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleFormControlInput1" 
        value={updateData.password} onChange={(e)=>setUpdateData({...updateData,password:e.target.value})}/>
      </div>



        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={()=>handleUpdate()}>Update User</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AddUser