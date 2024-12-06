import PropTypes from "prop-types"

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <button
            className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`}
            type={type}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    className: PropTypes.string
}