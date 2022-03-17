import Image from 'next/image'
import servicesStyles from '../styles/Services.module.css'

export default function Services() {

    return (
        <div className={servicesStyles.services} id="services">

            <h2 className='py-4'>OUR SERVICES</h2>

            <div className={servicesStyles.servicesList}>

                <div className={servicesStyles.listItem}>
                    <h5>Services activities related to copying, printing and scanning</h5>
                    <span className='w-50 mb-3 border border-bottom border-secondary'></span>
                    <Image src="/images/4025190.jpg" alt='printing' width={400} height={280} />
                </div>

                <div className={servicesStyles.listItem}>
                    <h5>Repair of machinery, tools and electrical equipments</h5>
                    <span className='w-50 mb-3 border border-bottom border-secondary'></span>
                    <Image src="/images/machinetools.jpg" alt='printing' width={400} height={280} />
                </div>

                <div className={servicesStyles.listItem}>
                    <h5>Repair of electronic devices and optical equipments</h5>
                    <span className='w-50 mb-3 border border-bottom border-secondary'></span>
                    <Image src="/images/rack.jpg" alt='printing' width={400} height={280} />
                </div>

                <div className={servicesStyles.listItem}>
                    <h5>Repair of printers, computers and peripheral equipments</h5>
                    <span className='w-50 mb-3 border border-bottom border-secondary'></span>
                    <Image src="/images/motherboard.jpg" alt='printing' width={400} height={280} />
                </div>

                <div className={servicesStyles.listItem}>
                    <h5>Repair of communication equipments and consumer electronics</h5>
                    <span className='w-50 mb-3 border border-bottom border-secondary'></span>
                    <Image src="/images/switch.jpg" alt='printing' width={400} height={280} />
                </div>

                <div className={servicesStyles.listItem}>
                    <h5>Installation of industrial machinery and equipments</h5>
                    <span className='w-50 mb-3 border border-bottom border-secondary'></span>
                    <Image src="/images/installation2.jpg" alt='printing' width={400} height={280} />
                </div>

            </div>
        </div>)
};
