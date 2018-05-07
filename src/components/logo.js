import React from 'react'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
// import Link from 'gatsby-link'
import logoDesk from '../images/logo-desk.jpg';
import logoTab from '../images/logo-tab.jpg';
import logoMob from '../images/logo-mob.jpg';

const Logo = () => (
    <ResponsiveImage>
        <ResponsiveImageSize
            default
            minWidth={0}
            path={logoMob}
        />
        <ResponsiveImageSize
            minWidth={768}
            path={logoTab}
        />
        <ResponsiveImageSize
            minWidth={1100}
            path={logoDesk}
        />
    </ResponsiveImage>
)
export default Logo