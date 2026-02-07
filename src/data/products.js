
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





import Coriander from "../ProductImages/Coriander.png"
import Cardamom from "../ProductImages/Cardamom.png"
import Tomato from "../ProductImages/Tomato.jpg"
import Carrot from "../ProductImages/Carrot.jpg"
import Cabbage from "../ProductImages/Cabbage.jpg"
import Cauliflower from "../ProductImages/Cauliflower.jpg"
import Apple from "../ProductImages/apple.webp"
import Orange from "../ProductImages/Orange.jpg"
import Grapes from "../ProductImages/Grapes.jpg"
import Papaya from "../ProductImages/Papaya.png"
import Watermelon from "../ProductImages/Watermelon.jpg"
import Ginger from "../ProductImages/Ginger.jpg"
import Garlic from "../ProductImages/Garlic.png"
import Cloves from "../ProductImages/Cloves.png"
import Almond from "../ProductImages/almond.jpg"
import BlackPepper from "../ProductImages/blackpepper.png"
import BrinjiLeaf from "../ProductImages/brinji leaf.webp"
import Cashews from "../ProductImages/cashwes.jpg"
import Clapasi from "../ProductImages/clapasi.jpg"
import Dates from "../ProductImages/dates.jpg"
import Fig from "../ProductImages/fig.jpg"
import Pista from "../ProductImages/pista.webp"
import DryGinger from "../ProductImages/dry ginger.jpg"
import DryOrange from "../ProductImages/dryorange.jpg"
import DryPlums from "../ProductImages/dryplums.jpg"
import Raisins from "../ProductImages/Raisins.webp"
import Walnuts from "../ProductImages/walnuts.jpg"


export const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Rice', name: 'Rice' },
    { id: 'spices', name: 'Spices' },
    { id: 'freshvegetables', name: 'Freshvegetables' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'dryfruits', name: 'Dry Fruits & Nuts' },
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

    // New Products Added
    {
        id: 16,
        name: 'Coriander',
        category: 'spices',
        image: Coriander,
        description: 'Fresh aromatic coriander seeds with citrusy notes.',
        price: '$12 / kg'
    },
    {
        id: 17,
        name: 'Cardamom',
        category: 'spices',
        image: Cardamom,
        description: 'Premium green cardamom pods with intense flavor and aroma.',
        price: '$45 / kg'
    },
    {
        id: 18,
        name: 'Cloves',
        category: 'spices',
        image: Cloves,
        description: 'Whole cloves with strong aromatic properties for cooking.',
        price: '$35 / kg'
    },
    {
        id: 19,
        name: 'Ginger',
        category: 'spices',
        image: Ginger,
        description: 'Fresh ginger root with pungent flavor, great for cooking and tea.',
        price: '$8 / kg'
    },
    {
        id: 20,
        name: 'Garlic',
        category: 'spices',
        image: Garlic,
        description: 'High quality garlic bulbs with strong flavor and health benefits.',
        price: '$6 / kg'
    },
    {
        id: 21,
        name: 'Tomato',
        category: 'freshvegetables',
        image: Tomato,
        description: 'Fresh and juicy tomatoes, perfect for salads and cooking.',
        price: '$3 / kg'
    },
    {
        id: 22,
        name: 'Carrot',
        category: 'freshvegetables',
        image: Carrot,
        description: 'Crunchy and sweet carrots rich in vitamins and minerals.',
        price: '$4 / kg'
    },
    {
        id: 23,
        name: 'Cabbage',
        category: 'freshvegetables',
        image: Cabbage,
        description: 'Fresh green cabbage, great for salads and stir-fry dishes.',
        price: '$2.5 / kg'
    },
    {
        id: 24,
        name: 'Cauliflower',
        category: 'freshvegetables',
        image: Cauliflower,
        description: 'White cauliflower heads, versatile vegetable for various dishes.',
        price: '$5 / kg'
    },
    {
        id: 25,
        name: 'Apple',
        category: 'fruits',
        image: Apple,
        description: 'Crisp and sweet apples, packed with nutrients and fiber.',
        price: '$8 / kg'
    },
    {
        id: 26,
        name: 'Orange',
        category: 'fruits',
        image: Orange,
        description: 'Juicy oranges loaded with vitamin C and refreshing flavor.',
        price: '$6 / kg'
    },
    {
        id: 27,
        name: 'Grapes',
        category: 'fruits',
        image: Grapes,
        description: 'Sweet and seedless grapes, perfect snack and dessert option.',
        price: '$10 / kg'
    },
    {
        id: 28,
        name: 'Papaya',
        category: 'fruits',
        image: Papaya,
        description: 'Tropical papaya with sweet orange flesh and digestive enzymes.',
        price: '$4 / kg'
    },
    {
        id: 29,
        name: 'Watermelon',
        category: 'fruits',
        image: Watermelon,
        description: 'Large watermelons with sweet red flesh, perfect for summer.',
        price: '$3 / kg'
    },
    {
        id: 30,
        name: 'Almond',
        category: 'dryfruits',
        image: Almond,
        description: 'Premium quality almonds rich in protein, fiber, and healthy fats.',
        price: '$22 / kg'
    },
    {
        id: 31,
        name: 'Black Pepper',
        category: 'spices',
        image: BlackPepper,
        description: 'Bold black peppercorns with sharp flavor and aroma.',
        price: '$18 / kg'
    },
    {
        id: 32,
        name: 'Brinji Leaf',
        category: 'spices',
        image: BrinjiLeaf,
        description: 'Aromatic bay leaves perfect for flavoring curries and rice dishes.',
        price: '$10 / kg'
    },
    {
        id: 33,
        name: 'Cashews',
        category: 'dryfruits',
        image: Cashews,
        description: 'Premium whole cashew nuts, creamy and delicious.',
        price: '$28 / kg'
    },
    {
        id: 34,
        name: 'Clapasi',
        category: 'spices',
        image: Clapasi,
        description: 'Traditional stone flower spice for authentic Indian cuisine.',
        price: '$15 / kg'
    },
    {
        id: 35,
        name: 'Dates',
        category: 'dryfruits',
        image: Dates,
        description: 'Sweet and nutritious dates, natural energy booster.',
        price: '$14 / kg'
    },
    {
        id: 36,
        name: 'Fig',
        category: 'dryfruits',
        image: Fig,
        description: 'Dried figs packed with fiber, minerals, and natural sweetness.',
        price: '$20 / kg'
    },
    {
        id: 37,
        name: 'Pista (Pistachio)',
        category: 'dryfruits',
        image: Pista,
        description: 'Premium pistachios with rich flavor and nutritional benefits.',
        price: '$35 / kg'
    },
    {
        id: 38,
        name: 'Dry Ginger',
        category: 'spices',
        image: DryGinger,
        description: 'Premium dried ginger with intense flavor for cooking and medicinal use.',
        price: '$16 / kg'
    },
    {
        id: 39,
        name: 'Dry Orange',
        category: 'dryfruits',
        image: DryOrange,
        description: 'Dehydrated orange slices, perfect for tea and healthy snacking.',
        price: '$18 / kg'
    },
    {
        id: 40,
        name: 'Dry Plums (Prunes)',
        category: 'dryfruits',
        image: DryPlums,
        description: 'Nutritious dried plums rich in fiber and antioxidants.',
        price: '$16 / kg'
    },
    {
        id: 41,
        name: 'Raisins',
        category: 'dryfruits',
        image: Raisins,
        description: 'Sweet and chewy raisins, natural source of energy and nutrients.',
        price: '$12 / kg'
    },
    {
        id: 42,
        name: 'Walnuts',
        category: 'dryfruits',
        image: Walnuts,
        description: 'Premium walnuts rich in omega-3 fatty acids and antioxidants.',
        price: '$30 / kg'
    },

    

];
