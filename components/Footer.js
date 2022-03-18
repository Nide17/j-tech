import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faTwitter, faFacebook, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import footerStyles from '../styles/footer.module.css'

export default function Footer() {
    return (

        <div className={`${footerStyles.footer} row mx-0`}>


            <div className={`${footerStyles.sitemap} col-12 col-sm-6`}>

                <div className={footerStyles.sitemapBorder}>
                    <h2>N<span>avigate</span></h2>
                    <ul>
                        <li><Link href="#home"><a>Home</a></Link></li>
                        <li><Link href="#about"><a>About us</a></Link></li>
                        <li><Link href="#services"><a>Services</a></Link></li>
                        <li><Link href="#contact"><a>Contact us</a></Link></li>
                    </ul>
                </div>
            </div>

            <div className={`${footerStyles.rightPart} col-12 col-sm-6`}>
                <small>
                    <blockquote>~ Good customer service costs less than bad customer service. ~ <i>Sally Gronow</i></blockquote>
                </small>

                <div className={footerStyles.socialIcons}>

                    <Link href="#"><a className="mx-2">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a></Link>

                    <Link href="#"><a className="mx-2">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a></Link>

                    <Link href="#"><a className="mx-2">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a></Link>

                    <Link href="#"><a className="mx-2">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a></Link>

                    <Link href="#"><a className="mx-2">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a></Link>

                </div>
            </div>

            <div className={`${footerStyles.copyright} col-12`}>
                <span>
                    Copyright © J-TECH Technology Ltd. {new Date().getFullYear()}
                </span>

                <strong>
                    Designed and Developed by
                    <Link href="#">
                        <a href="http://nide-portfolio.vercel.app/" className='text-info text-underline'>
                            &nbsp;<u>Niyomwungeri Parmenide Ishimwe</u>
                        </a>
                    </Link>
                </strong>
            </div>
        </div>)
};
