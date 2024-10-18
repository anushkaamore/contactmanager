import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";


let EditContact=()=>{

  let navigate=useNavigate()
  let{contactId}=useParams()
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
 
  useEffect(()=>{
    let promise=new Promise((res,rej)=>{
      setState({...state,loading:true});
      let response=ContactService.getContact(contactId)
      res(response)
    })

    promise.then((res1)=>{
      setState({...state,loading:false,contact:res1.data});
    }).catch(()=>{
      setState({...state,loading:false,errorMassage:alert('data not found')});
    })
  },[contactId])
  let {loading,contact,errorMassage}=state

  const updateHandle=(event)=>{
    setState({...state,contact:{
      ...state.contact,[event.target.name]:event.target.value
    }})
  }
  const submitHandle=(event)=>{
    event.preventDefault()
    let promise=new Promise((res,rej)=>{
      setState({...state,loading:true})
      let postData=ContactService.updateContact(contact,contactId)
      res(postData)
    })

    promise.then((res1)=>{
      if (res1) {
        setState({...state,loading:false})
        navigate("/contacts/list",{replace:true})

      } else {
        setState({...state,loading:false})
        navigate("/contacts/edit",{replace:false})
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
            <p className="h3 text-primary fw-bold">Edit contact</p>
            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, incidunt.</p>
          </div>
        </div>
        <div className="row align-items-center">
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
                <input type="submit" name="" id="" className="btn btn-primary" value="create" />
                <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
              </div>
            </form>
          </div>
          <div className="col-md-6">
              <img src="https://img.freepik.com/premium-photo/engaging-cartoon-avatar-trustworthy-girl-her-late-s-tiktok-promotions_1283595-3611.jpg" alt="" className="contact-img" />
          </div>
        </div>
      </div>
    </section> */}

   {/* <pre>{JSON.stringify(contact)}</pre> */}
   <section className='edit-contact'>
        <div className="container p-3">
          <div className="row">
            <div className="col">
              <p className="h3 text-primary">Edit Contact</p>
              <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus ipsum doloribus rerum aperiam est quibusdam? Quam unde eligendi delectus veritatis molestias officiis omnis illum, soluta at. Deserunt, aliquid harum.</p>
            </div>
            <div className="row align-items-center">
              <div className="col-md-4">
                <form action="" onSubmit={submitHandle}>
                  <div className="mb-2">
                    <input type="text" name='name' onChange={updateHandle} placeholder='NAME' value={contact.name} className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="text" name='photo' onChange={updateHandle} placeholder='Photo Url' value={contact.photo}  className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="number" name='mobile' onChange={updateHandle} placeholder='Mobile' value={contact.mobile} className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="email" name='email' onChange={updateHandle} placeholder='Email' value={contact.email} className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="text" name='company' onChange={updateHandle} placeholder='Company' value={contact.company} className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="text" name='title' onChange={updateHandle} placeholder='Title' value={contact.title} className='form-control' />
                  </div>
                  <div className="mb-2">
                  <input type="text" name='groupId'  placeholder='Group'  value={contact.groupId} onChange={updateHandle} className='form-control' />
                  </div>

                  <div>
                    <input type="submit" value="Update" className="btn btn-primary"/>
                    <Link to={'/contacts/list'} className='btn btn-danger ms-2'>Cancel</Link>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <img src={contact.photo} alt="" className='contact-img'/>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export default EditContact;