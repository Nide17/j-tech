import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const AboutCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop>
            <div>
                <Image src="/images/laptopdesktop.jpg" alt="laptopdesktop" width={724} height={480} />
                <p className="legend" style={{background: "#ff6666"}}>Laptop and Desktop Repair</p>
            </div>
            <div>
                <Image src="/images/ac.jpg" alt="ac" width={724} height={480} />
                <p className="legend" style={{background: "#ff6666"}}>Air Conditioners Installation and Repair</p>
            </div>
            <div>
                <Image src="/images/upsapc.jpg" alt="upsapc" width={724} height={480} />
                <p className="legend" style={{background: "#ff6666"}}>UPS Installation and Repair</p>
            </div>
            <div>
                <Image src="/images/camera.jpg" alt="camera" width={724} height={480} />
                <p className="legend" style={{background: "#ff6666"}}>CCTV Camera Installation and Repair</p>
            </div>
        </Carousel>
    )
}

export default AboutCarousel