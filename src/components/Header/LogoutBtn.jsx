import { useDispatch } from "react-redux"
import authService from '../../appwrite/config'
import { logout } from '../../store/authSlice'


function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        }
        )
    }

    return (
        <button
        className="hover:bg-blue-100 rounded-full inline-block px-6 py-2 duration-200"
        onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn