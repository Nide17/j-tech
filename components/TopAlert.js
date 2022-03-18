import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebook, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import topAlertStyles from '../styles/topalert.module.css'

export default function TopAlert() {

    return (
        <nav className={`${topAlertStyles.top} px-1 px-sm-5 py-2 d-flex justify-content-around align-items-center`}>

            <Link href="/">
                <a className='d-flex text-white'>
                    <span className='mx-1 mx-sm-2'>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </span>
                    <span className='mx-1 mx-sm-2'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </span>
                    <span className='mx-1 mx-sm-2'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </span>
                    <span className='mx-1 mx-sm-2'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </span>
                </a>
            </Link>

            <Link href="/">
                <a className='text-white'>
                    <span className=''>
                        <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;
                        <span className='d-none d-sm-inline'>E-mail us</span>
                    </span>
                </a>
            </Link>

            <Link href="/">
                <a className='text-white'>
                    <span className=''>
                        <FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;Nyarugenge-Kigali
                    </span>
                </a>
            </Link>

            <Link href="/">
                <a className='text-white'>
                    <span className=''>
                        <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;0783284669
                    </span>
                </a>
            </Link>
        </nav>
    )
};
