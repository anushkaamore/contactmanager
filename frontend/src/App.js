import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContactList from './components/contacts/ContactList/ContactList';
import AddContact from './components/contacts/AddContact/AddContact';
import ViewContact from './components/contacts/ViewContact/ViewContact';
import EditContact from './components/contacts/EditContact/EditContact';

let App=()=>{
  return(
    <>
     <NavBar/>
     <Routes>
      <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
      <Route path={'/contacts/list'} element={<ContactList/>}/>
      <Route path={'/contacts/add'} element={<AddContact/>}/>
      <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
      <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
     </Routes>
    </>
  )
}

export default App;
