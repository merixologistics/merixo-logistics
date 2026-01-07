
import React from 'react'
import PL from '../ProductImages/image.png'
import TC from "../ProductImages/TC.png"
import RiceB from "../ProductImages/RiceB.jpg"
import RiceNB from "../ProductImages/RiceNB.jpg"
import RedChilli from "../ProductImages/Chilli.png"
import MasalaBlends from "../ProductImages/MasalaBlends.jpg"
import Turmeric from "../ProductImages/Turmeric.png"
import Cumin from "../ProductImages/Cumin.png"
import DragonFruit from "../ProductImages/DragonFruit.jpg"
import Banana from "../ProductImages/Banana.png"
import Pomegranate from "../ProductImages/Pomegranate.png"
import Onion from "../ProductImages/Onion.png"
import Potato from "../ProductImages/Potato.webp"
import Drumstick from "../ProductImages/Drumstick.png"
import mango from "../ProductImages/mango.jpg"


export const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Rice', name: 'Rice' },
    { id: 'spices', name: 'Spices' },
    { id: 'freshvegetables', name: 'Freshvegetables' },
    { id: 'fruits', name: 'Fruits' },
];

export const products = [

    {
        id: 1,
        name: 'Pulses and Lentils',
        category: '',
        description: 'High quality pulses and lentils sourced from trusted farms.',
        price: '$20 / kg',
        image: PL,
    },

    {
        id: 2,

        name: 'Tea & Coffee',
        category: '',
        image: TC,
        description: 'Sweet water and tender meat, freshly harvested from organic farms.',
        price: '$12 / box'
    },



    //Rice
    {
        id: 3,
        name: 'Basmati Rice',
        category: 'Rice',
        image: RiceB,
        description: 'Sweet water and tender meat, freshly harvested from organic farms.',
        price: '$12 / box'
    },
    {
        id: 4,
        name: 'Non-Basmati Rice',
        category: 'Rice',
        image: RiceNB,
        description: 'High oil content premium copra ideal for oil extraction and culinary use.',
        price: '$18 / kg'
    },

    // Spicess
    {
        id: 5,
        name: 'Chilli',
        category: 'spices',
        image: RedChilli,
        description: 'Dried red chili peppers with vibrant color and intense heat.',
        price: '$18 / kg'
    },
   
    {

        id: 6,
        name: 'Masala Blends ',
        category: 'spices',
        image: MasalaBlends,
        description: 'Bold black peppercorns from the Malabar coast.',
        price: '$15 / kg'
    },
    {

        id: 7,
        name: 'Turmeric ',
        category: 'spices',
        image: Turmeric,
        description: 'High curcumin content turmeric roots, cleaned and polished.',
        price: '$8 / kg'
    },
    {

        id: 8,
        name: 'Cumin',
        category: 'spices',
        image: Cumin,
        description: 'True Ceylon cinnamon quills with delicate flavor.',
        price: '$25 / kg'
    },

    //Friuts

    // {
    //     id: 9,
    //     name: 'Exotic Dragon Fruit',
    //     category: 'fruits',
    //     image: {DragonFruit},
    //     description: 'Vibrant pink skin with sweet, speckled flesh.',
    //     price: '$5 / pc'
    // },
    {
        id: 9,
        name: 'Banana',
        category: 'fruits',
        image: Banana,
        description: 'Vibrant pink skin with sweet, speckled flesh.',
        price: '$5 / pc'
    },

    {
        id: 10,
        name: 'Pomegranate',
        category: 'fruits',
        image: Pomegranate,
        description: 'Vibrant pink skin with sweet, speckled flesh.',
        price: '$5 / pc'
    },


    // fresh Vegetables

    {
        id: 11,
        name: 'Onion',
        category: 'freshvegetables',
        image: Onion,
        description: 'Crisp and flavorful onions, perfect for all your culinary needs.',
        price: '$2 / kg'
    },
    {
        id: 12,
        name: 'Exotic Dragon Fruit',
        category: 'fruits',
        image: DragonFruit,
        description: 'Vibrant pink skin with sweet, speckled flesh.',
        price: '$5 / pc'
    },
   
    {
        id: 13,
        name: 'Mango',
        category: 'fruits',
        image: mango,
        description: 'Vibrant pink skin with sweet, speckled flesh.',
        price: '$5 / pc'
    },
   
    // {
    //     id: 7,
    //     name: 'Desiccated Coconut',
    //     category: 'Rice',
    //     image: 'https://plus.unsplash.com/premium_photo-1675237626359-99433367b6ce?q=80&w=600&auto=format&fit=crop',
    //     description: 'Finely shredded and dried coconut meat, perfect for baking.',
    //     price: '$10 / kg'
    // },
   
    {

        id: 14,
        name: 'potato',
        category: 'freshvegetables',
        image: Potato,

        description: 'True Ceylon cinnamon quills with delicate flavor.',
        price: '$25 / kg'
    },
    {

        id: 15,
        name: 'drumstick',
        category: 'freshvegetables',
        image: Drumstick,
        description: 'True Ceylon cinnamon quills with delicate flavor.',
        price: '$25 / kg'
    },

    

];
