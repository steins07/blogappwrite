import { Link } from 'react-router-dom'
import { Container, Logo, LogoutBtn } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import authService from '../../appwrite/auth'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const [username, setUsername] = useState(null);


    useEffect(() => {
        const fetchUser = async () => {
          const user = await authService.getCurrentUser();
          if (user) {
            setUsername(user.name);
          }
        };
    
        fetchUser();
      }, [authStatus]);
    

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: "true"
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

    return (
        <header
            className='py-3 shadow bg-gray-500'
        >
            <Container>
                <nav
                    className='flex'
                >
                    {/* Logo Section */}
                    <div className="mr-4 flex items-center">
                        <Link to="/">
                            <Logo width="50px" height="50px" />
                        </Link>

                        {/* username */}
                        <p className="flex ml-auto px-7 text-black font-bold text-sm">
                           <em>{username ? "Hello, "+username.toUpperCase() : "Guest User"}</em> 
                        </p>
                    </div>


                    <ul
                        className='flex ml-auto'
                    >
                        {navItems.map((navitem) => (
                            navitem.active ? (
                                <li key={navitem.name}>
                                    <button
                                        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                        onClick={() => navigate(navitem.slug)}
                                    >
                                        {navitem.name}
                                    </button>
                                </li>
                            ) : (null)
                        ))}
                        {authStatus && (<li >
                            <LogoutBtn />
                        </li>)}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
