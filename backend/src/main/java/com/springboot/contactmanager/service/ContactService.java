package com.springboot.contactmanager.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.contactmanager.entity.Contact;
import com.springboot.contactmanager.repository.ContactRepository;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    // Get all contacts
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    // Get contact by ID
    public Optional<Contact> getContactById(Long id) {
        return contactRepository.findById(id);
    }

    // Create a new contact
    public Contact createContact(Contact contact) {
        return contactRepository.save(contact);
    }

    // Update an existing contact
    public Contact updateContact(Long id, Contact updatedContact) {
        Optional<Contact> optionalContact = contactRepository.findById(id);
        if (optionalContact.isPresent()) {
            Contact contact = optionalContact.get();
            contact.setName(updatedContact.getName());
            contact.setPhoto(updatedContact.getPhoto());
            contact.setMobile(updatedContact.getMobile());
            contact.setEmail(updatedContact.getEmail());
            contact.setCompany(updatedContact.getCompany());
            contact.setTitle(updatedContact.getTitle());
            contact.setGroupId(updatedContact.getGroupId());
            return contactRepository.save(contact);
        }
        return null; // Or handle this scenario differently
    }

    // Delete a contact by ID
    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }
}