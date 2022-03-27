import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <Link href='/' passHref>GoalSetter</Link>
            </div>
            <ul>
                <li>
                    <Link href='/login' passHref>
                        <a>
                            <FaSignInAlt />
                            Login
                        </a>
                    </Link>
                    <Link href='/register' passHref>
                        <a>
                            <FaUser />
                            Register
                        </a>
                    </Link>
                </li>
            </ul>

        </header>
    )
}

export default Header