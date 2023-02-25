import React, { useState } from "react";
import { BoxContactForm } from "./ContactForm.stiled";
import { InputContactForm } from "./ContactForm.stiled";
import { LabelContactForm } from "./ContactForm.stiled";
import { ButtonContactForm } from "./ContactForm.stiled";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [statusButtomForm, setStatusButtomForm] = useState('false');


const handleChange = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.name);
    if (event.currentTarget.name === 'name'){setName(event.currentTarget.value);}
    if (event.currentTarget.name === 'number'){setNumber(event.currentTarget.value);}
      
   // this.setState({ [event.currentTarget.name]: event.currentTarget.value })
    }
 const   hendleSubmit = (event) => {
        
       event.preventDefault();
        setStatusButtomForm(true);
     setTimeout(() => { setStatusButtomForm(false) }, 1000);
     let data = { name: `${name}`, number: `${number}` }
     console.log(data);
     this.props.onSubmit( {data}); 
       //event.currentTarget.name.value = '';
       resetForm();
    }
    const resetForm = () => { setName(''); setNumber(''); };

  return (
        <>
                 <BoxContactForm action="/action_page.php" method="get" onSubmit={hendleSubmit}>
                    <LabelContactForm htmlFor="fname">Name</LabelContactForm>
                    < InputContactForm
                        type="text"
                        name="name"
                        width="100px"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChange}
                        value = {name}
                    />
                    <LabelContactForm htmlFor="fname">Namber</LabelContactForm>
                    < InputContactForm
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                        value = {number}
                        
                    />
                    <ButtonContactForm type="submit" value={statusButtomForm}> Add contact </ButtonContactForm>
                </BoxContactForm>
                    
        </> )   
 };



