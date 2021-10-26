import React from 'react'
import { NavLink } from 'react-router-dom';
import { HomeIcon, StarIcon, MailIcon, UserIcon} from '@heroicons/react/outline';
import logo from '../assets/logo.png';
import HeaderLink from './HeaderLink';

function HeaderComponent() {

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-evenly">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <NavLink to="/home"><HeaderLink title="HOME" Icon={HomeIcon}/></NavLink>
                <HeaderLink title="POPULAR" Icon={StarIcon}/>
                <NavLink to="/contact"><HeaderLink title="SUBMIT" Icon={MailIcon}/></NavLink>
                <NavLink to="/newjoke"><HeaderLink title="LOGIN" Icon={UserIcon}/></NavLink>
            </div>
            <div className="object-contain flex justify-evenly dad-logo">
                <img src={logo} alt="logo"/>
            </div>

        </header>
    )
}

export default HeaderComponent
