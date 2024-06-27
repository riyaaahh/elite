import React from 'react';
import FB from '../assets/FB.png';
import IG from '../assets/IG.png';
import Lin from '../assets/Lin.png';
import Twtr from '../assets/Twtr.png';
import Yt from '../assets/Yt.png';
import { SocialIcon } from 'react-social-icons';

const SocialLinks = ({ className, iconClassName = null }) => {
    return (
        <div className={`${className}`}>
            <a href=''><SocialIcon network='facebook' bgColor='transparent' className={`${iconClassName}`} /></a>
            <a href=''><SocialIcon network='linkedin' bgColor='transparent' className={`${iconClassName}`} /></a>
            <a href=''><SocialIcon network='instagram' bgColor='transparent' className={`${iconClassName}`} /></a>
            <a href=''><SocialIcon network='youtube' bgColor='transparent' className={`${iconClassName}`} /></a>
            <a href=''><SocialIcon network='twitter' bgColor='transparent' className={`${iconClassName}`} /></a>
        </div>
    );
}

export default SocialLinks;
