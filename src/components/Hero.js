import React from 'react'


const Hero = () => {

    const links = [
        {href: './pages/Home.js', text: 'Home'},
        {href: './pages/About.js', text: 'About'},
        {href: './pages/Merch.js', text: 'Merch'},
        {href: './pages/Tours.js', text: 'Tours'},
        {href:'./pages/Press.js', text: 'Press Interviews'},
        {href: './pages/Distography.js', text: 'Distorgraphy'},
    ];

    return (
        <header>
            <div className='hero-image-a'>
                <div className='hero-text'>
                    <h1 className='a'>Shattered Silence</h1>
                    <h2 className='a'>Raise Your Voice!</h2>
                </div>
            </div>
            <br />
            <nav className='navbar'>
                <ul className='nav-links'>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>
                            {link.text}
                        </a>
                    </li>
                ))}
                </ul>
            </nav>
        </header>
    )
};

export default Hero;