
import React from 'react';
import { Product, Testimonial, TeamMember, ProductCategory, NavLink, ValueProposition, Offer, FAQ, GalleryImage, ProcessStep, Milestone, Achievement, Value, VideoTestimonial, SocialMediaMention } from './types';

export const NAV_LINKS: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
];

export const PRODUCTS: Product[] = [
    { 
        id: 1, 
        name: 'Velvet Dream Cake', 
        description: 'A rich red velvet cake with a creamy cheese frosting. Perfect for birthdays and celebrations.', 
        price: 45.00, 
        image: 'https://picsum.photos/seed/shop/600/400', 
        category: ProductCategory.Cakes, 
        featured: true,
        rating: 4.8,
        reviewCount: 28,
        allergens: ['Gluten', 'Dairy', 'Eggs'],
        dietaryTags: [],
        ingredients: 'Flour, Sugar, Cocoa, Buttermilk, Cream Cheese, Butter, Vanilla Extract',
        servingSize: 'Serves 8-10 people',
        sizes: [
            { weight: '500g', price: 25.00 },
            { weight: '1kg', price: 45.00 },
            { weight: '2kg', price: 85.00 }
        ],
        isBestseller: true,
        isPopular: true
    },
    { 
        id: 2, 
        name: 'Chocolate Fudge Pastry', 
        description: 'Decadent chocolate fudge with a moist sponge base. Rich and indulgent.', 
        price: 8.50, 
        image: 'https://picsum.photos/seed/shop/600/400', 
        category: ProductCategory.Pastries, 
        featured: true,
        rating: 4.6,
        reviewCount: 45,
        allergens: ['Gluten', 'Dairy', 'Eggs', 'Nuts'],
        dietaryTags: [],
        ingredients: 'Chocolate, Flour, Sugar, Butter, Eggs, Cocoa Powder',
        servingSize: '1 piece',
        isBestseller: true,
        isPopular: true
    },
    { 
        id: 3, 
        name: 'Strawberry Shortcake Cupcake', 
        description: 'Classic vanilla cupcake with fresh strawberries and whipped cream.', 
        price: 5.00, 
        image: 'https://picsum.photos/seed/shop/600/400', 
        category: ProductCategory.Cupcakes, 
        featured: false,
        rating: 4.5,
        reviewCount: 32,
        allergens: ['Gluten', 'Dairy', 'Eggs'],
        dietaryTags: [],
        ingredients: 'Flour, Sugar, Butter, Eggs, Fresh Strawberries, Whipped Cream',
        servingSize: '1 cupcake',
        isPopular: true
    },
    { 
        id: 4, 
        name: 'Lemon Meringue Tart', 
        description: 'Zesty lemon curd topped with fluffy meringue. Refreshing and tangy.', 
        price: 7.00, 
        image: 'https://picsum.photos/seed/shop/600/400', 
        category: ProductCategory.Desserts, 
        featured: true,
        rating: 4.7,
        reviewCount: 19,
        allergens: ['Gluten', 'Eggs'],
        dietaryTags: [],
        ingredients: 'Lemon, Sugar, Eggs, Butter, Flour, Vanilla',
        servingSize: '1 tart (serves 2)',
        isBestseller: true
    },
    { 
        id: 5, 
        name: 'Black Forest Gateau', 
        description: 'Layers of chocolate, cherries, and whipped cream. A classic favorite.', 
        price: 50.00, 
        image: 'https://picsum.photos/seed/shop/600/400', 
        category: ProductCategory.Cakes, 
        featured: false,
        rating: 4.9,
        reviewCount: 56,
        allergens: ['Gluten', 'Dairy', 'Eggs'],
        dietaryTags: [],
        ingredients: 'Chocolate, Cherries, Whipped Cream, Flour, Sugar, Cocoa',
        servingSize: 'Serves 10-12 people',
        sizes: [
            { weight: '1kg', price: 50.00 },
            { weight: '2kg', price: 95.00 }
        ],
        isBestseller: true,
        isPopular: true
    },
    { 
        id: 6, 
        name: 'Classic Tiramisu', 
        description: 'Coffee-soaked ladyfingers with mascarpone cream. Italian perfection.', 
        price: 9.00, 
        image: 'https://picsum.photos/seed/shop/600/400', 
        category: ProductCategory.Desserts, 
        featured: true,
        rating: 4.8,
        reviewCount: 67,
        allergens: ['Gluten', 'Dairy', 'Eggs'],
        dietaryTags: [],
        ingredients: 'Mascarpone, Coffee, Ladyfingers, Cocoa, Sugar, Eggs',
        servingSize: '1 portion (serves 2)',
        isBestseller: true,
        isPopular: true
    },
    { 
        id: 7, 
        name: 'Blueberry Cheesecake', 
        description: 'Creamy cheesecake with a sweet blueberry topping. Smooth and delightful.', 
        price: 55.00, 
        image: 'https://picsum.photos/seed/shop/600/400', 
        category: ProductCategory.Cakes, 
        featured: true,
        rating: 4.7,
        reviewCount: 41,
        allergens: ['Gluten', 'Dairy', 'Eggs'],
        dietaryTags: [],
        ingredients: 'Cream Cheese, Blueberries, Graham Cracker, Sugar, Butter',
        servingSize: 'Serves 8-10 people',
        sizes: [
            { weight: '1kg', price: 55.00 },
            { weight: '2kg', price: 105.00 }
        ],
        isBestseller: true
    },
    { 
        id: 8, 
        name: 'Vanilla Bean Cupcake', 
        description: 'Simple yet elegant vanilla cupcake with buttercream. Classic and timeless.', 
        price: 4.50, 
        image: 'https://picsum.photos/seed/shop/600/400', 
        category: ProductCategory.Cupcakes, 
        featured: true,
        rating: 4.4,
        reviewCount: 38,
        allergens: ['Gluten', 'Dairy', 'Eggs'],
        dietaryTags: [],
        ingredients: 'Flour, Sugar, Vanilla Bean, Butter, Eggs, Milk',
        servingSize: '1 cupcake',
        isPopular: true
    },
    { 
        id: 9, 
        name: 'Eggless Chocolate Cake', 
        description: 'Rich chocolate cake made without eggs. Moist and delicious.', 
        price: 42.00, 
        image: 'https://picsum.photos/seed/shop/600/400', 
        category: ProductCategory.Cakes, 
        featured: false,
        rating: 4.6,
        reviewCount: 24,
        allergens: ['Gluten', 'Dairy'],
        dietaryTags: ['Eggless'],
        ingredients: 'Flour, Sugar, Cocoa, Oil, Yogurt, Baking Soda, Vanilla',
        servingSize: 'Serves 8-10 people',
        sizes: [
            { weight: '500g', price: 22.00 },
            { weight: '1kg', price: 42.00 },
            { weight: '2kg', price: 80.00 }
        ],
        isPopular: true
    },
    { 
        id: 10, 
        name: 'Vegan Carrot Cake', 
        description: 'Moist carrot cake with vegan cream cheese frosting. Plant-based perfection.', 
        price: 48.00, 
        image: 'https://picsum.photos/seed/shop/600/400', 
        category: ProductCategory.Cakes, 
        featured: false,
        rating: 4.5,
        reviewCount: 15,
        allergens: ['Gluten', 'Nuts'],
        dietaryTags: ['Vegan', 'Eggless'],
        ingredients: 'Flour, Carrots, Sugar, Oil, Plant-based Milk, Nuts, Spices',
        servingSize: 'Serves 8-10 people',
        sizes: [
            { weight: '1kg', price: 48.00 },
            { weight: '2kg', price: 90.00 }
        ]
    },
];

export const TESTIMONIALS: Testimonial[] = [
    { 
        id: 1, 
        name: 'Priya Sharma', 
        quote: 'The birthday cake was not only beautiful but absolutely delicious! It was the star of the party. Thank you, Mrunali Cake Shop!', 
        image: 'https://picsum.photos/seed/shop/600/400',
        rating: 5,
        cakePhoto: 'https://picsum.photos/seed/shop/600/400',
        date: 'December 2024',
        location: 'Pune',
        isFeatured: true
    },
    { 
        id: 2, 
        name: 'Rahul Verma', 
        quote: 'I order pastries from here every week. The quality is consistently amazing. The chocolate fudge is to die for!', 
        image: 'https://picsum.photos/seed/shop/600/400',
        rating: 5,
        cakePhoto: 'https://picsum.photos/seed/shop/600/400',
        date: 'November 2024',
        location: 'Pune'
    },
    { 
        id: 3, 
        name: 'Anjali Mehta', 
        quote: 'The custom cake for our anniversary exceeded all our expectations. The attention to detail was incredible. Highly recommended!', 
        image: 'https://picsum.photos/seed/shop/600/400',
        rating: 5,
        cakePhoto: 'https://picsum.photos/seed/shop/600/400',
        date: 'October 2024',
        location: 'Pune'
    },
    { 
        id: 4, 
        name: 'Rajesh Kumar', 
        quote: 'Best cake shop in Pune! Ordered for my daughter\'s birthday and everyone loved it. Will definitely order again!', 
        image: 'https://picsum.photos/seed/shop/600/400',
        rating: 5,
        cakePhoto: 'https://picsum.photos/seed/shop/600/400',
        date: 'September 2024',
        location: 'Pune'
    },
    { 
        id: 5, 
        name: 'Sneha Patel', 
        quote: 'The eggless chocolate cake was perfect! As someone with dietary restrictions, I\'m so happy to find such delicious options.', 
        image: 'https://picsum.photos/seed/shop/600/400',
        rating: 5,
        cakePhoto: 'https://picsum.photos/seed/shop/600/400',
        date: 'August 2024',
        location: 'Pune'
    },
    { 
        id: 6, 
        name: 'Vikram Singh', 
        quote: 'Corporate order for 200 people was handled perfectly. Professional service and amazing quality. Highly impressed!', 
        image: 'https://picsum.photos/seed/shop/600/400',
        rating: 5,
        cakePhoto: 'https://picsum.photos/seed/shop/600/400',
        date: 'July 2024',
        location: 'Pune',
        isFeatured: true
    },
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
    {
        id: 1,
        name: 'Priya Sharma',
        thumbnail: 'https://picsum.photos/seed/shop/600/400',
        quote: 'The birthday cake was absolutely amazing!',
        rating: 5
    },
    {
        id: 2,
        name: 'Rahul Verma',
        thumbnail: 'https://picsum.photos/seed/shop/600/400',
        quote: 'Best pastries in Pune!',
        rating: 5
    },
];

export const SOCIAL_MENTIONS: SocialMediaMention[] = [
    {
        id: 1,
        platform: 'Instagram',
        username: '@priya_sharma',
        image: 'https://picsum.photos/seed/shop/600/400',
        caption: 'Amazing birthday cake from @mrunalicakeshop! 🎂✨',
        date: '2 days ago'
    },
    {
        id: 2,
        platform: 'Instagram',
        username: '@rahul_verma',
        image: 'https://picsum.photos/seed/shop/600/400',
        caption: 'Weekly pastry fix from the best bakery in town! 🥐',
        date: '5 days ago'
    },
    {
        id: 3,
        platform: 'Facebook',
        username: 'Anjali Mehta',
        image: 'https://picsum.photos/seed/shop/600/400',
        caption: 'Our anniversary cake was perfect! Thank you Mrunali Cake Shop!',
        date: '1 week ago'
    },
];

export const TEAM_MEMBERS: TeamMember[] = [
    { 
        id: 1, 
        name: 'Mrunali Patil', 
        role: 'Founder & Head Baker', 
        image: 'https://picsum.photos/seed/shop/600/400',
        bio: 'From experimenting in her home kitchen to serving thousands of cakes across Pune, Mrunali\'s journey started with a simple dream: to spread joy through delicious cakes.',
        favoriteRecipe: 'Loves classic chocolate cake',
        hobbies: 'Baking, Recipe Development, Teaching'
    },
    { 
        id: 2, 
        name: 'Sameer Joshi', 
        role: 'Pastry Chef', 
        image: 'https://picsum.photos/seed/shop/600/400',
        bio: 'Expert in French pastries with over 8 years of experience. Known for his attention to detail and innovative flavor combinations.',
        favoriteRecipe: 'Signature lemon tart',
        hobbies: 'French Cuisine, Food Photography'
    },
    { 
        id: 3, 
        name: 'Neha Desai', 
        role: 'Cake Decorator', 
        image: 'https://picsum.photos/seed/shop/600/400',
        bio: 'Creative touch for custom cakes, passionate about festive designs. Turns every cake into a work of art.',
        favoriteRecipe: 'Festive celebration cakes',
        hobbies: 'Art, Design, Creative Decorating'
    },
];

export const MILESTONES: Milestone[] = [
    { id: 1, year: 2020, title: 'The Beginning', description: 'Started in a home kitchen with a passion for baking and a dream to spread joy' },
    { id: 2, year: 2022, title: 'New Kitchen', description: 'Moved to dedicated bakery space; reached 100+ repeat customers' },
    { id: 3, year: 2023, title: '1000+ Orders', description: 'Celebrated milestone of 1000+ successful orders and growing customer base' },
    { id: 4, year: 2024, title: 'Featured in Pune Magazine', description: 'Recognized for excellence in local business and community contribution' },
    { id: 5, year: 2025, title: 'Expansion', description: 'Expanding to serve more customers with new flavors and innovative designs' },
];

export const ACHIEVEMENTS: Achievement[] = [
    { id: 1, title: 'Featured in Pune Times', description: 'Coverage of our unique baking approach and customer success stories', year: 2024 },
    { id: 2, title: 'Best Local Bakery Award', description: 'Recognized as Best Local Bakery by Pune Food Critics Association', year: 2023 },
    { id: 3, title: '1000+ Happy Customers', description: 'Served over 1000 satisfied customers across Pune', year: 2023 },
    { id: 4, title: 'Corporate Partnerships', description: 'Trusted by leading companies for their corporate events and celebrations', year: 2024 },
];

export const VALUES: Value[] = [
    { id: 1, title: 'Freshness Guaranteed', description: 'Every cake made fresh, every day', icon: '✨' },
    { id: 2, title: 'Premium Ingredients', description: '100% quality ingredients, no compromises', icon: '🌾' },
    { id: 3, title: 'Clean & Hygienic', description: 'Clean and hygienic kitchen maintained at all times', icon: '🧼' },
    { id: 4, title: 'Creative Designs', description: 'Unique and creative designs for every occasion', icon: '🎨' },
    { id: 5, title: 'Community Support', description: 'We source locally and promote sustainability', icon: '🌱' },
    { id: 6, title: 'Happy Customers', description: 'Your satisfaction is our success', icon: '❤️' },
];

export const SHOP_GALLERY: GalleryImage[] = [
    { id: 1, image: 'https://picsum.photos/seed/shop/600/400', caption: 'Our Bakery Kitchen' },
    { id: 2, image: 'https://picsum.photos/seed/shop/600/400', caption: 'Team at Work' },
    { id: 3, image: 'https://picsum.photos/seed/shop/600/400', caption: 'Fresh Baked Goods' },
    { id: 4, image: 'https://picsum.photos/seed/shop/600/400', caption: 'Popular Cakes Display' },
];

export const ShoppingCartIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
);

export const MenuIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
);

export const XIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);

export const StarIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

export const VALUE_PROPOSITIONS: ValueProposition[] = [
    { id: 1, title: 'Homemade Flavors', description: 'Fresh baked daily with traditional recipes', icon: '🍰' },
    { id: 2, title: 'Premium Ingredients', description: '100% quality ingredients, no compromises', icon: '✨' },
    { id: 3, title: 'On-time Delivery', description: 'Quick delivery across Pune city', icon: '🚚' },
    { id: 4, title: 'Custom Cakes', description: 'Designer cakes for every occasion', icon: '🎂' },
];

export const OFFERS: Offer[] = [
    { id: 1, title: 'Birthday Special', description: 'Get 15% off on all birthday cakes', discount: '15% OFF', category: 'Birthday', image: 'https://picsum.photos/seed/shop/600/400' },
    { id: 2, title: 'Festival Discount', description: 'Celebrate festivals with 20% discount', discount: '20% OFF', category: 'Festival', image: 'https://picsum.photos/seed/shop/600/400' },
    { id: 3, title: 'Corporate Events', description: 'Bulk orders get special pricing', discount: '25% OFF', category: 'Corporate', image: 'https://picsum.photos/seed/shop/600/400' },
    { id: 4, title: 'Anniversary Special', description: 'Romantic cakes for your special day', discount: '10% OFF', category: 'Anniversary', image: 'https://picsum.photos/seed/shop/600/400' },
];

export const FAQS: FAQ[] = [
    { id: 1, question: 'What are the delivery charges?', answer: 'Delivery charges vary based on location. Free delivery for orders above ₹500 within 5km radius. Contact us for specific delivery charges.' },
    { id: 2, question: 'Can I order custom cakes?', answer: 'Yes! We specialize in custom and designer cakes. Please place your order at least 2-3 days in advance for custom designs.' },
    { id: 3, question: 'What payment options do you accept?', answer: 'We accept cash on delivery, UPI, credit/debit cards, and online payment gateways. Payment is required at the time of delivery.' },
    { id: 4, question: 'How far in advance should I place an order?', answer: 'For regular cakes, 24 hours notice is sufficient. For custom cakes, we recommend 2-3 days advance booking.' },
    { id: 5, question: 'Do you deliver on weekends?', answer: 'Yes, we deliver 7 days a week. However, for weekend deliveries, please place your order at least 2 days in advance.' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
    { id: 1, image: 'https://picsum.photos/seed/shop/600/400', caption: 'Custom Birthday Cake' },
    { id: 2, image: 'https://picsum.photos/seed/shop/600/400', caption: 'Wedding Cake Design' },
    { id: 3, image: 'https://picsum.photos/seed/shop/600/400', caption: 'Anniversary Special' },
    { id: 4, image: 'https://picsum.photos/seed/shop/600/400', caption: 'Festival Celebration' },
    { id: 5, image: 'https://picsum.photos/seed/shop/600/400', caption: 'Behind the Scenes' },
    { id: 6, image: 'https://picsum.photos/seed/shop/600/400', caption: 'Fresh Baked Goods' },
];

export const PROCESS_STEPS: ProcessStep[] = [
    { id: 1, title: 'Choose', description: 'Browse our menu and select your favorite cake', icon: '📋' },
    { id: 2, title: 'Customize', description: 'Add your personal touch and special requirements', icon: '🎨' },
    { id: 3, title: 'Pay', description: 'Secure payment via multiple options available', icon: '💳' },
    { id: 4, title: 'Home Delivery', description: 'Fresh cake delivered to your doorstep', icon: '🏠' },
];
