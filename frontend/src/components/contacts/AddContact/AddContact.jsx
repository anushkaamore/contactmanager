import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

let AddContact=()=>{

  let navigate=useNavigate()
  let [state,setState]=useState({
    loading:true,
    contact:{
      name:"",
      photo:"",
      mobile:"",
      email:"",
      title:"",
      company:"",
      groupId:""
    },
    errorMessage:""
  })

  const updateHandle=(event)=>{
    setState({...state,contact:{
      ...state.contact,[event.target.name]:event.target.value
    }})
  }
  let{loading,contact}=state

  const submitHandle=(event)=>{
    event.preventDefault()
    let promise=new Promise((res,rej)=>{
      setState({...state,loading:true})
      let postData=ContactService.createContact(contact)
      res(postData)
    })
    
    promise.then((res1)=>{
      if (res1) {
        setState({...state,loading:false})
        navigate('/contacts/list',{replace:true})

      } else {
        setState({...state,loading:false})
        navigate('/contacts/add',{replace:false})
      }
    }).catch(()=>{
      setState({...state,loading:false,errorMessage:alert('data is not posted')})
    })
  }


  return(
    <>
    {/* <section className="add-contact p-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3 text-success fw-bold">create contact</p>
            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, incidunt.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <form action="">
              <div className="mb-2">
                <input type="text" name="" id="" className="form-control" placeholder="Name" />
              </div>
              <div className="mb-2">
                <input type="text" name="" id="" className="form-control" placeholder="photo url" />
              </div>
              <div className="mb-2">
                <input type="number" name="" id="" className="form-control" placeholder="Mobile" />
              </div>
              <div className="mb-2">
                <input type="email" name="" id="" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-2">
                <input type="text" name="" id="" className="form-control" placeholder="Company" />
              </div>
              <div className="mb-2">
                <input type="text" name="" id="" className="form-control" placeholder="Title" />
              </div>
              <div className="mb-2">
                <select name="" id="" className="form-control">
                  <option value="">select a group</option>
                </select>
              </div>
              <div className="mb-2">
                <input type="submit" name="" id="" className="btn btn-success" value="create" />
                <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section> */}

    <pre>
      {/* {JSON.stringify(contact)} */}
    </pre>
    <section className='add-contact'>
    <div className="container p-3">
      <div className="row">
        <div className="col">
          <p className="h3 text-success">Create Contact</p>
          <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus ipsum doloribus rerum aperiam est quibusdam? Quam unde eligendi delectus veritatis molestias officiis omnis illum, soluta at. Deserunt, aliquid harum.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <form action="" onSubmit={submitHandle}>
              <div className="mb-2">
                <input type="text" name='name' placeholder='NAME' value={contact.name} onChange={updateHandle} className='form-control' />
              </div>
              <div className="mb-2">
                <input type="text" name='photo' placeholder='Photo Url' value={contact.photo} onChange={updateHandle} className='form-control' />
              </div>
              <div className="mb-2">
                <input type="number" name='mobile' placeholder='Mobile' value={contact.mobile} onChange={updateHandle} className='form-control' />
              </div>
              <div className="mb-2">
                <input type="email" name='email' placeholder='Email' value={contact.email} onChange={updateHandle} className='form-control' />
              </div>
              <div className="mb-2">
                <input type="text" name='company' placeholder='Company' value={contact.company} onChange={updateHandle} className='form-control' />
              </div>
              <div className="mb-2">
                <input type="text" name='title' placeholder='Title' value={contact.title} onChange={updateHandle} className='form-control' />
              </div>
              <div className="mb-2">
              <input type="text" name='groupId' placeholder='Group' value={contact.groupId} onChange={updateHandle} className='form-control' />
                {/* <select name="" id="" className='form-control'>
                  <option value="">Select A Group</option>
                </select> */}
              </div>

              <div>
                <input type="submit" value="Create" className="btn btn-success"/>
                <Link to={'/contacts/list'} className='btn btn-danger ms-2'>Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

export default AddContact;