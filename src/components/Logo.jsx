import PropTypes from 'prop-types'
import blogsitelogo from '../assets/blogsitelogo.png'
function Logo({ width = '100px',height = '100px' }) {
    return (
    <div className="h-full flex items-center">
        <img
            src={blogsitelogo}
            className="object-contain rounded-lg"
            alt="Logo"
            width={width}
            height={height}
        />
    </div>
    )
}

export default Logo
 Logo.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
 }