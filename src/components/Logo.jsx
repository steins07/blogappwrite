 import bloglogo from '../assets/bloglogo.png'
function Logo({ width = '100px' }) {
    return (
    <div className="h-full flex items-center">
        <img
            src={bloglogo}
            style={{ width: "100px", maxHeight: "100%" }}
            className="object-contain rounded-lg"
            alt="Logo"
        />
    </div>
    )
}

export default Logo
