import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

let ViewContact=()=>{

  const {contactId}=useParams();

  const[state,setState] =useState({
    loading:true,
    contact:{},
    errorMassage:''
  })

  useEffect(()=>{
    let promise=new Promise((res,rej)=>{
      setState({...state,loading:true,contact:{}});
      let response=ContactService.getContact(contactId)
      res(response)
    })

    promise.then((res1)=>{
      setState({...state,loading:false,contact:res1.data});
    }).catch(()=>{
      setState({...state,loading:false,errorMassage:alert('data not found')});
    })
  },[contactId])

  console.log(state.contact);

  let {loading,contact,errorMassage}=state

  return(
    <>
    {/* <section className="view-contact-intro">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3 text-warning fw-bold">View Contact</p>
            <p className="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, praesentium.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="view-contact mt-3">
         <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
                <img src="https://img.freepik.com/premium-photo/drawing-girl-with-yellow-jacket_487986-40433.jpg" alt="" className="contact-img"/>
            </div>
            <div className="col-md-8">
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
                                    <li className="list-group-item list-group-item-action">
                                        Company : <span className="fw-bold">Anushka@gmail.com</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                        Title : <span className="fw-bold">Anushka@gmail.com</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                        Group : <span className="fw-bold">Anushka@gmail.com</span>
                                    </li>
                     </ul>
            </div>
          </div>
          <div className="row">
              <div className="col">
                <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
              </div>
            </div>
         </div>
    </section> */}

<section className='view-contact'>
      <div className="container p-3">
        <div className="row">
        <div className="col">
            <p className="h3 text-primary fw-bold">View Contact</p>
            <p className='fst-italic'>Lorem ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eveniet. dolor sit amet consectetur adipisicing elit. In natus ipsum doloribus rerum aperiam est quibusdam? Quam unde eligendi delectus veritatis molestias officiis omnis illum, soluta at. Deserunt, aliquid harum.</p>
        </div>
        </div>
        {
          <React.Fragment>
            {
              Object.keys(contact).length &&<section>
                <div className="row justify-content-center mt-2">
          <div className="col-md-6">
            <img src={contact.photo} alt="" className='contact-img'/>
          </div>
        </div>
        <div className="row mt-2 justify-content-center">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item list-group-item-action">Name : <span className='fw-bold'>{contact.name}</span></li>
              <li className="list-group-item list-group-item-action">Email : <span className='fw-bold'>{contact.email}</span></li>
              <li className="list-group-item list-group-item-action">Mobile : <span className='fw-bold'>{contact.mobile}</span></li>
              <li className="list-group-item list-group-item-action">Company : <span className='fw-bold'>{contact.company}</span></li>
              <li className="list-group-item list-group-item-action">Title : <span className='fw-bold'>{contact.title}</span></li>
              <li className="list-group-item list-group-item-action">Group : <span className='fw-bold'>{contact.groupId}</span></li>
            </ul>
          </div>
        </div>
        <div className="row mt-2 d-flex justify-content-center my-2">
          <div className="col-md-6">
            <Link to={'/contacts/list'} className='btn btn-warning btn-action'>Back</Link>
          </div>
        </div>
              </section>
            }
          </React.Fragment>
        }
      </div>
    </section>
    </>
  )
}
export default ViewContact;