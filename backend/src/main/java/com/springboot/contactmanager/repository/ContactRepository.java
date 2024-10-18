package com.springboot.contactmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.contactmanager.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long>  {

}
