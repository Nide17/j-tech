import navbarStyles from '../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {

    return (
        <nav className={navbarStyles.navbar}>

            <Link href="/">
                <a className={navbarStyles.brand}>
                    <span className='d-flex'>
                    <Image src="/images/J-TECH.png" alt='placeholder' width={60} height={60} />
                    </span>
                </a>
            </Link>

            <ul className={navbarStyles.links}>
                <li><Link href="/#home"><a>H<span>ome</span></a></Link></li>
                <li><Link href="/#services"><a>S<span>ervices</span></a></Link></li>
                <li><Link href="/#about"><a>A<span>bout us</span></a></Link></li>
                <li><Link href="/#contact"><a>C<span>ontact us</span></a></Link></li>
            </ul>
        </nav>
    )
};
