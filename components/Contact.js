import { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import contactStyles from '../styles/Contact.module.css'
import MapContainer from './MapContainer'

export default function Contact() {

    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    })

    const onChangeHandler = e => {
        const { name, value } = e.target
        setState(state => ({ ...state, [name]: value }))
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const { name, email, message } = state;

        // Create user object
        const contactMsg = {
            name,
            email,
            message
        };

        fetch('https://nide-portfolio-server.herokuapp.com/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactMsg),
        })

        console.log(contactMsg);

        // Reset fields
        setState({
            name: '',
            email: '',
            message: ''
        })
    }

    return (
        <div className={contactStyles.contact} id="contact">

            <h2 className='py-0 py-sm-5'>CONTACT US</h2>

            <div className={contactStyles.contactContainer}>

                <div className={contactStyles.contactForm}>

                    <form onSubmit={onSubmitHandler}>

                        <div className="inputRow">
                            <input name="name" type="text" className="name" placeholder='Your Name ...' onChange={onChangeHandler} value={state.name || ""} required />

                            <input name="email" type="email" className="email" placeholder='Your Email ...' onChange={onChangeHandler} value={state.email || ""} required />

                            <textarea name="message" id="" cols="30" rows="6" className="message" placeholder='Your Message ...' onChange={onChangeHandler} value={state.message || ""} required></textarea>

                            <button className="send-message">Send Message</button>
                            {/* <button className="send-message" onClick={onSubmitHandler}>Send Message</button> */}
                        </div>
                    </form>
                </div>

                <div className={contactStyles.contactDetails}>

                    <div className={contactStyles.contactMap}>
                        <MapContainer />
                    </div>

                </div>
            </div>

            <div className={contactStyles.reachMe}>

                <div className={contactStyles.reachMeImg}>
                    <FontAwesomeIcon icon={faLocationDot} style={{color: 'green'}} />
                    <span className={contactStyles.imgSpan}>Kigali, Rwanda</span>
                </div>

                <div className={contactStyles.reachMeImg}>
                    <FontAwesomeIcon icon={faEnvelope} style={{color: '#4285F4'}} />
                    <span className={contactStyles.imgSpan}>nkeshimanajeanpaul402@gmail.com</span>
                </div>
                <div className={contactStyles.reachMeImg}>
                    <FontAwesomeIcon icon={faWhatsapp} style={{color: '#25D366'}} />
                    <span className={contactStyles.imgSpan}>+250783284669</span>
                </div>
            </div>

        </div>
    )
};
