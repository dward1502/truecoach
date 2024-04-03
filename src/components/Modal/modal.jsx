import React, {useState} from 'react'
import { Modal} from "react-responsive-modal"
import 'react-responsive-modal/styles.css';
import styles from './modal.module.css'
const EmailModal = (props) => {
    const {open, onCloseModal, workshop} = props;
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const validateEmail = () => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email)) {
        setEmailError('Please enter a valid email address');
        return false;
      }
      setEmailError('');
      return true;
    };
  
    const handleSend = (workshopNum) => {
      if (validateEmail()) {
        setEmail('');
        console.log(workshopNum)
        console.log("email")
        onCloseModal();
      }
    };


  return (
    <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.container}>
            {workshop === 1 ? <h2>Win from Within Workshop One</h2> : <h2>Win from Within Workshop Two</h2> }
            <p>Enter email below and we will get back to you shortly with information for registering for this workshop.</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className={styles.emailInput}
            />
            {emailError && <p className={styles.error}>{emailError}</p>}
            <button className={styles.sendBtn} onClick={() => handleSend(workshop)}>
              Send
            </button>
        </div>
    </Modal>
  )
}

export default EmailModal