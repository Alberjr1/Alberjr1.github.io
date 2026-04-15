import React from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>Any questions or proposals? Feel free to reach out!</p>
          
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            {/* OPCIÓN 1: Un texto simple con tu correo */}
            <h3 style={{ marginBottom: '20px' }}>alberortegacabrera@gmail.com</h3>

            {/* OPCIÓN 2: Un botón que abre automáticamente el programa de correo */}
            <Button 
              variant="contained" 
              startIcon={<EmailIcon />} 
              href="mailto:alberortegacabrera@gmail.com"
              size="large"
            >
              Enviar correo
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;