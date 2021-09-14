import React from 'react';

import './About.css';
import SingleItem from '../SingleItem/SingleItem';

import Bulb from '../../assets/icons/bulb.svg';
import Sun from '../../assets/icons/sun.svg';
import Comment from '../../assets/icons/comments.svg';


const About = () => {
    const aboutItems = [
        {
            id: 1,
            icon: Bulb,
            title: 'Create Idea',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam.'
        },
        {
            id: 2,
            icon: Sun,
            title: 'Smart Solutions',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam.'
        },
        {
            id: 3,
            icon: Comment,
            title: 'Free Support',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam.'
        }
    ];
    return (
        <section className="about-section bg-gray" id="about">
            <div className="main-container">
                <div className="inner-container">
                    <div className="title-section">
                        <p className="purple-color uppercase">ABOUT US</p>
                        <h3>Our goal is to</h3>
                        <h3>make your life easier</h3>
                    </div>
                    <div className="items-listing">
                        {aboutItems.map(item => (
                            <SingleItem key={item.id} icon={item.icon} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

