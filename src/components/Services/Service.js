import React from 'react';

import SingleItem from '../SingleItem/SingleItem';
import './Service.css';

import Wordpress from '../../assets/icons/wordpress-filled.svg';
import Vector from '../../assets/icons/vector.svg';
import Research from '../../assets/icons/keyword-research.svg';
import Mobile from '../../assets/icons/mobile.svg';
import List from '../../assets/icons/list.svg';
import Bulb from '../../assets/icons/bulb.svg';

const Service = () => {
    const serviceItems = [
        {
            id: 1,
            icon: Wordpress,
            title: 'WordPress',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam.'
        },
        {
            id: 2,
            icon: Vector,
            title: 'Logo Design',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam.'
        },
        {
            id: 3,
            icon: Research,
            title: 'Online Seo',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam.'
        },
        {
            id: 4,
            icon: Mobile,
            title: 'Mobile Apps',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam.'
        },
        {
            id: 5,
            icon: List,
            title: 'Copywriting',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam.'
        },
        {
            id: 6,
            icon: Bulb,
            title: 'Brand Strategy',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam.'
        }
    ];
    return (
        <section className="about-section services-section bg-gray" id="services">
            <div className="main-container">
                <div className="inner-container">
                    <div className="title-section">
                        <p className="purple-color uppercase">SERVICES</p>
                        <h3>Choose what</h3>
                        <h3>you like our services</h3>
                    </div>
                    <div className="items-listing">
                        {serviceItems.map(item => (
                            <SingleItem key={item.id} icon={item.icon} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service;

