import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

let ContactList=()=>{
   
    const[query,setQuery]=useState({
        text:""
    })

    const[state,setState] =useState({
        loading:true,
        contacts:[],
        filteredContacts:[],
        errorMassage:''
    })

    useEffect(()=>{
        let promise=new Promise((res,rej)=>{
          setState({...state,loading:true,contacts:[]});
          let response=ContactService.getAllContacts()
          res(response)
        })
    
        promise.then((res1)=>{
          setState({...state,loading:false,contacts:res1.data,filteredContacts:res1.data});
        }).catch(()=>{
          setState({...state,loading:false,errorMassage:alert('data not found')});
        })
      },[])

      //deleteContact

  let clickDelete=(contactId)=>{
    let promise= new Promise((res,rej)=>{
      let deleteContact=ContactService.deleteContact(contactId)
      res(deleteContact)
    })

    promise.then((res1)=>{
      if (res1) {
        let promise=new Promise((res,rej)=>{
          setState({...state,loading:true,contacts:[]});
          let response=ContactService.getAllContacts()
          res(response)
        })
    
        promise.then((res1)=>{
          setState({...state,loading:false,contacts:res1.data,filteredContacts:res1.data});
        }).catch(()=>{
          setState({...state,loading:false,errorMassage:alert('data not found')});
        })
      }
    })
  }

  //searchContact

  let searchContact=(event)=>{
    setQuery({...query,text:event.target.value})

    let theContacts=state.contacts.filter((contact)=>{
      return contact.name.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setState({...state,filteredContacts:theContacts})
  }
  
  let {loading,contacts,errorMassage,filteredContacts}=state


  return(
    <>
    <section className="contact-search p-3">
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="col">
                        <p className="h3 fw-bold">Contact Manager
                        <Link to={'/contacts/add'} className="btn btn-success ms-2">
                        <i className="fa fa-plus-circle me-2"/> New
                        </Link>
                        </p>
                        <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, non!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <form action="" className="row">
                    <div className="col">
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="search names" onChange={searchContact} value={query.text}  name="text"/>
                        </div>
                    </div>
                     {/* <div className="col">
                     <div className="mb-2">
                            <input type="submit" className="btn btn-outline-dark" placeholder="search" />
                        </div>
                     </div> */}
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <section className="contact-list">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center d-flex justify-content-center">
                            <div className="col-md-4">
                                <img src="https://static.vecteezy.com/system/resources/previews/005/419/157/original/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-illustration-on-a-white-isolated-background-vector.jpg" alt="" className="contact-img" />
                            </div>
                            <div className="col-md-7">
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-action">
                                        Name : <span className="fw-bold">Anushka</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                        Mobile : <span className="fw-bold">123456789</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                        Email : <span className="fw-bold">Anushka@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-1 d-flex flex-column align-items-center">
                                <Link to={'/contacts/view/:contactId'} className="btn btn-success my-1">
                                <i className="fa fa-eye"/>
                                </Link>
                                <Link to={'/contacts/edit/:contactId'} className="btn btn-info my-1">
                                <i className="fa fa-pen"/>
                                </Link>
                                <button className="btn btn-danger my-1">
                                <i className="fa fa-trash"/>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center d-flex justify-content-center">
                            <div className="col-md-4">
                                <img src="https://static.vecteezy.com/system/resources/previews/005/419/157/original/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-illustration-on-a-white-isolated-background-vector.jpg" alt="" className="contact-img" />
                            </div>
                            <div className="col-md-7">
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-action">
                                        Name : <span className="fw-bold">Anushka</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                        Mobile : <span className="fw-bold">123456789</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                        Email : <span className="fw-bold">Anushka@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-1 d-flex flex-column align-items-center">
                                <Link to={'/contacts/view/:contactId'} className="btn btn-success my-1">
                                <i className="fa fa-eye"/>
                                </Link>
                                <Link to={'/contacts/edit/:contactId'} className="btn btn-info my-1">
                                <i className="fa fa-pen"/>
                                </Link>
                                <button className="btn btn-danger my-1">
                                <i className="fa fa-trash"/>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    
    {
        <React.Fragment>
          <section className='contact-list'>
        <div className="container">
          <div className="row">
            {
              filteredContacts.length>0 &&filteredContacts.map((contact)=>{
                let{photo,name,mobile,email,id}=contact
                return(
                  <div className="col-md-6 mb-4" key={id}>
              <div className="card d-flex justify-content-around" >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <img src={photo} alt="" className='contact-img me-5' />
                    </div>
                     <div className="col-md-7">
                        <ul className="list-group">
                          <li className="list-group-item list-group-item-action"><span className='fw-bold'>Name:{name}</span></li>
                          <li className="list-group-item list-group-item-action"><span className='fw-bold'>Mobile:{mobile}</span></li>
                          <li className="list-group-item list-group-item-action "><span className='fw-bold'>Email:{email}</span></li>
                        </ul>
                     </div>
                     <div className="col-md-1 d-flex flex-column align-items-center">

                      <Link to={`/contacts/view/${contact.id}`} className='btn btn-warning my-1'><i className='fa fa-eye'/></Link>
                      <Link to={`/contacts/edit/${contact.id}`} className='btn btn-primary my-1'><i className='fa fa-pen'/></Link>
                      <button className='btn btn-danger my-1' onClick={()=>{clickDelete(contact.id)}}><i className='fa fa-trash'/></button>
                     </div>
                  </div>
                </div>
              </div>
            </div>
                )
              })
            }

          </div>
        </div>
       </section>

       </React.Fragment>
    }
    </>
  )
  
}
export default ContactList;