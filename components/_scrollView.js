import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'

const ScrollTopView = (props) => {
    const { onScroll, onVisible, visible } = props

    if (typeof window === 'object') window.addEventListener('scroll', onVisible)

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    bottom: 35,
                    right: 10
                }}>

                <button
                    onClick={onScroll}
                    style={{ padding: '5px 12px', border: '1px solid grey', borderRadius: '50%', background: 'transparent', display: visible ? 'inline-block' : 'none', color: 'brown' }}>
                    <FontAwesomeIcon icon={faArrowUpLong} />
                </button>
            </div>
        </>
    )
}

export default ScrollTopView