import axios from "axios";

export class ContactService{
//    static serverURL='http://localhost:9000'

//    static getAllContacts(){
//     let dataURL=`${this.serverURL}/contacts`
//     return axios.get(dataURL)
//    }

//    static getContact(contactId){
//       let dataUrl= `${this.serverURL}/contacts/${contactId}`
//       return axios.get(dataUrl)
//   }

//   static createContact(contact){
//       let dataURL=`${this.serverURL}/contacts`;
//       return axios.post(dataURL,contact)
//   }

//   static updateContact(contact,contactId){
//       let dataURL=`${this.serverURL}/contacts/${contactId}`;
//       return axios.put(dataURL,contact)
//   }

//   static deleteContact(contactId){
//       let dataUrl= `${this.serverURL}/contacts/${contactId}`;
//       return axios.delete(dataUrl)
//     }

static serverURL = 'http://localhost:8081/api/contacts';

    static getAllContacts() {
        let dataURL = `${this.serverURL}`;
        return axios.get(dataURL);
    }

    static getContact(contactId) {
        let dataURL = `${this.serverURL}/${contactId}`;
        return axios.get(dataURL);
    }

    static createContact(contact) {
        let dataURL = `${this.serverURL}`;
        return axios.post(dataURL, contact);
    }

    static updateContact(contact, contactId) {
        let dataURL = `${this.serverURL}/${contactId}`;
        return axios.put(dataURL, contact);
    }

    static deleteContact(contactId) {
        let dataURL = `${this.serverURL}/${contactId}`;
        return axios.delete(dataURL);
    }

}