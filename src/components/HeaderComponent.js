import React, { useState }from 'react'
import { NavLink } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/outline';
import HeaderLink from './HeaderLink';

function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <HeaderLink title="HOME" Icon={HomeIcon}/>

        </header>
    )
}

export default HeaderComponent
