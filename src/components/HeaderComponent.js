import React from 'react'
import { NavLink } from 'react-router-dom';
import { HomeIcon, StarIcon, MailIcon, UserIcon} from '@heroicons/react/outline';
import HeaderLink from './HeaderLink';

function HeaderComponent() {

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-evenly">
            <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderLink title="HOME" Icon={HomeIcon}/>
            <HeaderLink title="POPULAR" Icon={StarIcon}/>
            <HeaderLink title="SUBMIT" Icon={MailIcon}/>
            <HeaderLink title="LOGIN" Icon={UserIcon}/>
            </div>
            <div className="">
                This is an image
            </div>

        </header>
    )
}

export default HeaderComponent
