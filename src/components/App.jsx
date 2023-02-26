import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
//import shortid from "shortid";
import { AllBox } from "./App.stiled";

//let filtrContactss = [{id: '', name: '', number: ''}];

export default function App() {
  
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],)
  

  const [activIdContact, setActivIdContact] = useState(NaN);
  const[filter, setFilter] = useState('');
  const firstReflection = useRef(false);
  const [update,setUpdate] = useState(true);

  useEffect(() => {
      if (firstReflection.current) {
          localStorage.setItem('contacts', JSON.stringify(contacts));
          }
      else {
      const saveData = JSON.parse(localStorage.getItem('contacts'));  
      if (saveData.length>0) {console.log('CompDidMount false'); setContacts(saveData); firstReflection.current=true;} 
      }
    }, [update,contacts]
  );
  const updateContacts = data => {
   console.log(data);
    let nowArr = contacts;
    let arrLength = nowArr.length;
    let Contact = { id: `id-${data.name}`, name: `${data.name}`, number: `${data.number}` };
     console.log( Contact);
    let statusIncludeName = nowArr.find(contact => contact.name === Contact.name);
   // console.log(statusIncludeName);console.log(Contact);
    arrLength > 1 ? (!statusIncludeName ? nowArr.splice(arrLength, 0, Contact,) : alert(`${data.name}  is already in contacts`)) :
      (nowArr[0].name === '' ? nowArr.splice(arrLength-1, 1, Contact,) : (!statusIncludeName ? nowArr.splice(arrLength, 0, Contact,) : alert(`${data.name}  is already in contacts`)))
    setContacts(nowArr); setUpdate(!update);
          
    }
  const filterContact = (event) => { setFilter(event.currentTarget.value); }
   const deleteContact = (event) => {
    let nowArr = [];
    filter === '' ? nowArr = contacts: nowArr= contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    let deleteContact = nowArr[event.target.id];
    nowArr = contacts;
    let ActivElement = Number(nowArr.indexOf(deleteContact));
    setActivIdContact(ActivElement);
    setTimeout(() => {
    setActivIdContact(NaN);
      nowArr.length > 1 ? nowArr.splice(ActivElement, 1) : nowArr = [{ id: '', name: '', number: '' }]; 
      setContacts(nowArr); setUpdate(!update);
    }, 200);
  } 
        return (         
           <  AllBox >
              <h1>Phonebook</h1>
              <ContactForm onSubmit={updateContacts}> </ContactForm>
              <h2>Contacts</h2>
            <Filter filterContact={filterContact}  />
              <ContactList contacts={contacts } activIdContact={activIdContact} filter = {filter} deleteContact={deleteContact}  />
            </ AllBox >
           )  
}

App.propTypes = {
  deleteContact:PropTypes.func,
  contacts: PropTypes.array,
  activIdContact: PropTypes.string,
  onSubmit: PropTypes.func,
  filterContact:PropTypes.func
}


