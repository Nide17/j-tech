import Image from 'next/image'
import aboutStyles from '../styles/About.module.css'

export default function About() {

    return (

        <div className={aboutStyles.about} id="about">

            <h2 className='py-3 py-sm-5'>ABOUT US</h2>

            <div className={`${aboutStyles.bio} d-flex justify-content-around align-items-center`}>
                <div className={aboutStyles.aboutDet}>

                    <p className='pb-1 pb-sm-4'>
                        J-TECH TECHNOLOGY has been established in February 2022 to provide various ICT and technology solutions including
                        Services activities related to copying, printing and scanning, Repair of machinery, tools and electrical equipments,
                        Repair of electronic and optical equipments, Repair of computers and peripheral equipments,
                        Repair of communication equipments and consumer electronics, Installation of industrial machinery and equipments, ICT
                        Consultancy, vending and supplying ICT tools, devices and equipments.
                    </p>

                    <strong>The company is organized by team of professionals, who are very experienced in the field of ICT, 
                    electricity and electronics in order to provide full package of solutions and hence quality services.
                    </strong>

                </div>
                <div className={aboutStyles.profilePic}>
                    <Image src="/images/jtechltd.jpg" alt="profilepic" width={560} height={480} />
                </div>

            </div>
        </div>)
};