// Country data organized by continents with tourist information
export const CONTINENTS = {
    'North America': {
        name: 'North America',
        icon: '🌎',
        description: 'World-class education and diverse opportunities'
    },
    'Europe': {
        name: 'Europe',
        icon: '🇪🇺',
        description: 'Rich history, culture, and prestigious universities'
    },
    'Asia': {
        name: 'Asia',
        icon: '🌏',
        description: 'Vibrant cultures and tropical paradises'
    },
    'Middle East': {
        name: 'Middle East',
        icon: '🕌',
        description: 'Luxury, tradition, and modern marvels'
    },
    'Oceania': {
        name: 'Oceania',
        icon: '🏝️',
        description: 'Natural beauty and adventure awaits'
    }
};

export const COUNTRIES_DATA = [
    // NORTH AMERICA
    {
        id: 'usa',
        name: 'United States',
        flag: '🇺🇸',
        continent: 'North America',
        tagline: 'Land of Opportunity',
        description: 'The USA offers world-class education, diverse culture, and endless opportunities for students and tourists alike.',
        whyLoved: [
            'Top-ranked universities (Harvard, MIT, Stanford)',
            'Diverse landscapes from beaches to mountains',
            'Innovation hub and tech capital',
            'Cultural melting pot with global cuisine',
            'Strong economy and job opportunities'
        ],
        touristSpots: [
            {
                name: 'Statue of Liberty, New York',
                description: 'Iconic symbol of freedom and democracy'
            },
            {
                name: 'Grand Canyon, Arizona',
                description: 'Breathtaking natural wonder carved by the Colorado River'
            },
            {
                name: 'Golden Gate Bridge, San Francisco',
                description: 'Stunning suspension bridge and engineering marvel'
            },
            {
                name: 'Times Square, New York',
                description: 'The heart of NYC with dazzling lights and energy'
            }
        ],
        visaTypes: ['Student Visa (F-1)', 'Tourist Visa (B-2)', 'Work Visa (H-1B)']
    },
    {
        id: 'canada',
        name: 'Canada',
        flag: '🇨🇦',
        continent: 'North America',
        tagline: 'True North Strong and Free',
        description: 'Canada is known for its welcoming culture, stunning natural beauty, and excellent education system.',
        whyLoved: [
            'Friendly and multicultural society',
            'High quality of life and safety',
            'Beautiful natural landscapes',
            'Excellent healthcare and education',
            'Pathway to permanent residency'
        ],
        touristSpots: [
            {
                name: 'Niagara Falls',
                description: 'Majestic waterfalls on the US-Canada border'
            },
            {
                name: 'Banff National Park',
                description: 'Stunning Rocky Mountain scenery and turquoise lakes'
            },
            {
                name: 'CN Tower, Toronto',
                description: 'Iconic landmark with panoramic city views'
            },
            {
                name: 'Old Quebec City',
                description: 'Charming European-style historic district'
            }
        ],
        visaTypes: ['Study Permit', 'Visitor Visa', 'Work Permit']
    },

    // OCEANIA
    {
        id: 'australia',
        name: 'Australia',
        flag: '🇦🇺',
        continent: 'Oceania',
        tagline: 'The Lucky Country',
        description: 'Australia combines world-class education with an outdoor lifestyle and vibrant cities.',
        whyLoved: [
            'Laid-back lifestyle and friendly people',
            'Stunning beaches and Great Barrier Reef',
            'High-quality education system',
            'Safe and clean cities',
            'Year-round sunshine and outdoor activities'
        ],
        touristSpots: [
            {
                name: 'Sydney Opera House',
                description: 'Architectural masterpiece and cultural icon'
            },
            {
                name: 'Great Barrier Reef',
                description: 'World\'s largest coral reef system'
            },
            {
                name: 'Uluru (Ayers Rock)',
                description: 'Sacred Aboriginal site in the heart of Australia'
            },
            {
                name: 'Great Ocean Road',
                description: 'Scenic coastal drive with the Twelve Apostles'
            }
        ],
        visaTypes: ['Student Visa (500)', 'Tourist Visa (600)', 'Working Holiday Visa']
    },
    {
        id: 'new-zealand',
        name: 'New Zealand',
        flag: '🇳🇿',
        continent: 'Oceania',
        tagline: 'Land of the Long White Cloud',
        description: 'New Zealand offers pristine nature, adventure sports, and a high standard of living.',
        whyLoved: [
            'Breathtaking natural scenery',
            'Adventure capital of the world',
            'Friendly and welcoming culture',
            'Clean and green environment',
            'Work-life balance paradise'
        ],
        touristSpots: [
            {
                name: 'Milford Sound',
                description: 'Stunning fjord with waterfalls and rainforests'
            },
            {
                name: 'Hobbiton, Matamata',
                description: 'Lord of the Rings movie set in rolling hills'
            },
            {
                name: 'Queenstown',
                description: 'Adventure sports capital with lake and mountain views'
            },
            {
                name: 'Tongariro National Park',
                description: 'Volcanic landscapes and the Emerald Lakes'
            }
        ],
        visaTypes: ['Student Visa', 'Visitor Visa', 'Working Holiday Visa']
    },

    // EUROPE
    {
        id: 'uk',
        name: 'United Kingdom',
        flag: '🇬🇧',
        continent: 'Europe',
        tagline: 'Heritage Meets Innovation',
        description: 'The UK offers prestigious universities, rich history, and cultural diversity.',
        whyLoved: [
            'World-renowned universities (Oxford, Cambridge)',
            'Rich history and royal heritage',
            'Gateway to Europe',
            'Vibrant arts and culture scene',
            'English language immersion'
        ],
        touristSpots: [
            {
                name: 'Big Ben & Parliament',
                description: 'Iconic clock tower and seat of British government'
            },
            {
                name: 'Stonehenge',
                description: 'Mysterious prehistoric monument'
            },
            {
                name: 'Edinburgh Castle',
                description: 'Historic fortress overlooking Scotland\'s capital'
            },
            {
                name: 'Lake District',
                description: 'Stunning national park with lakes and mountains'
            }
        ],
        visaTypes: ['Student Visa (Tier 4)', 'Standard Visitor Visa', 'Graduate Route']
    },
    {
        id: 'switzerland',
        name: 'Switzerland',
        flag: '🇨🇭',
        continent: 'Europe',
        tagline: 'Alpine Paradise',
        description: 'Switzerland is famous for its Alps, chocolate, watches, and high quality of life.',
        whyLoved: [
            'Stunning Alpine scenery',
            'Extremely safe and clean',
            'Multilingual culture',
            'World-class skiing and hiking',
            'High standard of living'
        ],
        touristSpots: [
            {
                name: 'Matterhorn',
                description: 'Iconic pyramid-shaped mountain peak'
            },
            {
                name: 'Lake Geneva',
                description: 'Beautiful lake surrounded by Alps and vineyards'
            },
            {
                name: 'Jungfraujoch',
                description: 'Top of Europe with glacier views'
            },
            {
                name: 'Lucerne',
                description: 'Charming medieval city with Chapel Bridge'
            }
        ],
        visaTypes: ['Student Visa (Type D)', 'Schengen Visa', 'Work Permit']
    },
    {
        id: 'germany',
        name: 'Germany',
        flag: '🇩🇪',
        continent: 'Europe',
        tagline: 'Innovation & Tradition',
        description: 'Germany offers free education, strong economy, and rich cultural heritage.',
        whyLoved: [
            'Tuition-free education at public universities',
            'Strong economy and job market',
            'Central location in Europe',
            'Rich history and culture',
            'Excellent public transportation'
        ],
        touristSpots: [
            {
                name: 'Brandenburg Gate, Berlin',
                description: 'Historic monument symbolizing German unity'
            },
            {
                name: 'Neuschwanstein Castle',
                description: 'Fairy-tale castle in the Bavarian Alps'
            },
            {
                name: 'Rhine Valley',
                description: 'Scenic river valley with castles and vineyards'
            },
            {
                name: 'Black Forest',
                description: 'Dense forest region famous for cuckoo clocks'
            }
        ],
        visaTypes: ['Student Visa', 'Schengen Visa', 'Job Seeker Visa']
    },
    {
        id: 'france',
        name: 'France',
        flag: '🇫🇷',
        continent: 'Europe',
        tagline: 'Art, Culture & Cuisine',
        description: 'France is the epitome of culture, fashion, and culinary excellence.',
        whyLoved: [
            'World capital of art and fashion',
            'Exceptional cuisine and wine',
            'Rich historical heritage',
            'Beautiful countryside and coastlines',
            'Central European location'
        ],
        touristSpots: [
            {
                name: 'Eiffel Tower, Paris',
                description: 'Iconic iron lattice tower and symbol of France'
            },
            {
                name: 'Louvre Museum',
                description: 'World\'s largest art museum with Mona Lisa'
            },
            {
                name: 'French Riviera',
                description: 'Glamorous Mediterranean coastline'
            },
            {
                name: 'Mont Saint-Michel',
                description: 'Medieval abbey on a tidal island'
            }
        ],
        visaTypes: ['Student Visa', 'Schengen Visa', 'Long-Stay Visa']
    },

    // MIDDLE EAST
    {
        id: 'uae',
        name: 'United Arab Emirates',
        flag: '🇦🇪',
        continent: 'Middle East',
        tagline: 'Where Luxury Meets Tradition',
        description: 'The UAE combines ultra-modern cities with rich Arabian heritage, offering world-class tourism and business opportunities.',
        whyLoved: [
            'Tax-free income and luxury lifestyle',
            'World\'s tallest building (Burj Khalifa)',
            'Safest cities in the world',
            'Shopping paradise with mega malls',
            'Perfect blend of tradition and modernity'
        ],
        touristSpots: [
            {
                name: 'Burj Khalifa, Dubai',
                description: 'World\'s tallest building with breathtaking views',
                image: '/Users/muhammadbinwaqas/.gemini/antigravity/brain/1cd6cb18-3d83-4fba-a596-aad479e0ceb2/burj_khalifa_dubai_1764367648764.png'
            },
            {
                name: 'Dubai Marina',
                description: 'Stunning waterfront with luxury yachts and skyscrapers',
                image: '/Users/muhammadbinwaqas/.gemini/antigravity/brain/1cd6cb18-3d83-4fba-a596-aad479e0ceb2/dubai_marina_night_1764367737864.png'
            },
            {
                name: 'Sheikh Zayed Grand Mosque',
                description: 'Magnificent white marble mosque in Abu Dhabi'
            },
            {
                name: 'Palm Jumeirah',
                description: 'Iconic man-made island with luxury resorts'
            }
        ],
        visaTypes: ['Tourist Visa', 'Business Visa', 'Work Visa', 'Golden Visa']
    },
    {
        id: 'oman',
        name: 'Oman',
        flag: '🇴🇲',
        continent: 'Middle East',
        tagline: 'The Hidden Gem of Arabia',
        description: 'Oman offers pristine beaches, dramatic mountains, and authentic Arabian culture in a safe and welcoming environment.',
        whyLoved: [
            'Untouched natural beauty',
            'Rich cultural heritage',
            'Friendly and hospitable people',
            'Safe and peaceful country',
            'Stunning desert landscapes'
        ],
        touristSpots: [
            {
                name: 'Sultan Qaboos Grand Mosque',
                description: 'Architectural masterpiece with stunning Islamic design',
                image: '/Users/muhammadbinwaqas/.gemini/antigravity/brain/1cd6cb18-3d83-4fba-a596-aad479e0ceb2/sultan_qaboos_mosque_1764367676660.png'
            },
            {
                name: 'Wahiba Sands',
                description: 'Golden desert dunes perfect for adventure'
            },
            {
                name: 'Muscat Coastline',
                description: 'Beautiful beaches and crystal-clear waters'
            },
            {
                name: 'Nizwa Fort',
                description: 'Historic fort showcasing Omani heritage'
            }
        ],
        visaTypes: ['Tourist Visa', 'Business Visa', 'Work Visa']
    },
    {
        id: 'qatar',
        name: 'Qatar',
        flag: '🇶🇦',
        continent: 'Middle East',
        tagline: 'Where Tradition Meets the Future',
        description: 'Qatar is a modern marvel with futuristic architecture, world-class museums, and rich cultural experiences.',
        whyLoved: [
            'Ultra-modern infrastructure',
            'Tax-free salaries',
            'World Cup 2022 host',
            'Safe and family-friendly',
            'Growing education hub'
        ],
        touristSpots: [
            {
                name: 'The Pearl-Qatar',
                description: 'Luxury artificial island with Mediterranean-style marinas'
            },
            {
                name: 'Museum of Islamic Art',
                description: 'Stunning architecture and priceless artifacts'
            },
            {
                name: 'Souq Waqif',
                description: 'Traditional market with authentic Arabian atmosphere'
            },
            {
                name: 'Katara Cultural Village',
                description: 'Cultural hub with galleries, theaters, and restaurants'
            }
        ],
        visaTypes: ['Tourist Visa', 'Business Visa', 'Work Visa']
    },
    {
        id: 'turkey',
        name: 'Turkey',
        flag: '🇹🇷',
        continent: 'Middle East',
        tagline: 'Where East Meets West',
        description: 'Turkey bridges Europe and Asia, offering rich history, stunning landscapes, and vibrant culture.',
        whyLoved: [
            'Affordable cost of living',
            'Rich historical sites',
            'Delicious Turkish cuisine',
            'Beautiful coastlines and beaches',
            'Warm and welcoming people'
        ],
        touristSpots: [
            {
                name: 'Hagia Sophia, Istanbul',
                description: 'Iconic Byzantine masterpiece turned mosque',
                image: '/Users/muhammadbinwaqas/.gemini/antigravity/brain/1cd6cb18-3d83-4fba-a596-aad479e0ceb2/hagia_sophia_istanbul_1764367706028.png'
            },
            {
                name: 'Cappadocia',
                description: 'Fairy chimneys and hot air balloon rides',
                image: '/Users/muhammadbinwaqas/.gemini/antigravity/brain/1cd6cb18-3d83-4fba-a596-aad479e0ceb2/cappadocia_balloons_1764367752531.png'
            },
            {
                name: 'Blue Mosque, Istanbul',
                description: 'Stunning Ottoman architecture with blue tiles'
            },
            {
                name: 'Pamukkale',
                description: 'White travertine terraces and thermal pools'
            }
        ],
        visaTypes: ['Tourist Visa (e-Visa)', 'Student Visa', 'Work Permit']
    },

    // ASIA
    {
        id: 'maldives',
        name: 'Maldives',
        flag: '🇲🇻',
        continent: 'Asia',
        tagline: 'Paradise on Earth',
        description: 'The Maldives is a tropical paradise with crystal-clear waters, white sand beaches, and luxury resorts.',
        whyLoved: [
            'World\'s most beautiful beaches',
            'Luxury overwater bungalows',
            'Incredible diving and snorkeling',
            'Romantic honeymoon destination',
            'Pristine coral reefs'
        ],
        touristSpots: [
            {
                name: 'Overwater Bungalows',
                description: 'Luxury villas on stilts over turquoise lagoons',
                image: '/Users/muhammadbinwaqas/.gemini/antigravity/brain/1cd6cb18-3d83-4fba-a596-aad479e0ceb2/maldives_overwater_bungalows_1764367663168.png'
            },
            {
                name: 'Coral Reefs',
                description: 'Vibrant underwater world with tropical fish',
                image: '/Users/muhammadbinwaqas/.gemini/antigravity/brain/1cd6cb18-3d83-4fba-a596-aad479e0ceb2/maldives_coral_reef_1764367752531.png'
            },
            {
                name: 'Malé City',
                description: 'Colorful capital with local markets'
            },
            {
                name: 'Bioluminescent Beaches',
                description: 'Magical glowing plankton at night'
            }
        ],
        visaTypes: ['Tourist Visa (on arrival)', 'Business Visa']
    },
    {
        id: 'thailand',
        name: 'Thailand',
        flag: '🇹🇭',
        continent: 'Asia',
        tagline: 'Land of Smiles',
        description: 'Thailand offers tropical beaches, ancient temples, vibrant street life, and world-famous cuisine.',
        whyLoved: [
            'Affordable paradise destination',
            'Delicious and diverse cuisine',
            'Friendly and welcoming culture',
            'Beautiful islands and beaches',
            'Rich Buddhist heritage'
        ],
        touristSpots: [
            {
                name: 'Grand Palace, Bangkok',
                description: 'Ornate royal complex with golden spires',
                image: '/Users/muhammadbinwaqas/.gemini/antigravity/brain/1cd6cb18-3d83-4fba-a596-aad479e0ceb2/thailand_grand_palace_1764367691601.png'
            },
            {
                name: 'Phi Phi Islands',
                description: 'Stunning limestone cliffs and turquoise waters'
            },
            {
                name: 'Floating Markets',
                description: 'Traditional markets on canals'
            },
            {
                name: 'Chiang Mai Temples',
                description: 'Ancient Buddhist temples in the mountains'
            }
        ],
        visaTypes: ['Tourist Visa', 'Education Visa', 'Business Visa']
    },
    {
        id: 'singapore',
        name: 'Singapore',
        flag: '🇸🇬',
        continent: 'Asia',
        tagline: 'The Lion City',
        description: 'Singapore is a modern city-state known for its cleanliness, safety, and futuristic architecture.',
        whyLoved: [
            'Safest city in Asia',
            'World-class education system',
            'Multicultural food paradise',
            'Efficient public transportation',
            'Green city with parks and gardens'
        ],
        touristSpots: [
            {
                name: 'Marina Bay Sands',
                description: 'Iconic hotel with rooftop infinity pool'
            },
            {
                name: 'Gardens by the Bay',
                description: 'Futuristic Supertree Grove and Cloud Forest'
            },
            {
                name: 'Sentosa Island',
                description: 'Beach resort with Universal Studios'
            },
            {
                name: 'Chinatown & Little India',
                description: 'Vibrant cultural neighborhoods'
            }
        ],
        visaTypes: ['Tourist Visa', 'Student Pass', 'Work Visa']
    },
    {
        id: 'malaysia',
        name: 'Malaysia',
        flag: '🇲🇾',
        continent: 'Asia',
        tagline: 'Truly Asia',
        description: 'Malaysia blends modern cities with rainforests, beaches, and diverse cultural heritage.',
        whyLoved: [
            'Affordable living and travel',
            'Diverse multicultural society',
            'Delicious street food',
            'Beautiful islands and beaches',
            'Modern cities and nature combined'
        ],
        touristSpots: [
            {
                name: 'Petronas Twin Towers',
                description: 'Iconic twin skyscrapers in Kuala Lumpur'
            },
            {
                name: 'Langkawi Island',
                description: 'Tropical paradise with beaches and cable car'
            },
            {
                name: 'Batu Caves',
                description: 'Hindu temple in limestone caves'
            },
            {
                name: 'Penang',
                description: 'Food capital with colonial architecture'
            }
        ],
        visaTypes: ['Tourist Visa', 'Student Pass', 'Work Permit']
    }
];

// Helper function to get countries by continent
export function getCountriesByContinent(continent) {
    return COUNTRIES_DATA.filter(country => country.continent === continent);
}

// Helper function to get all continents with country counts
export function getContinentsWithCounts() {
    return Object.keys(CONTINENTS).map(continentName => ({
        ...CONTINENTS[continentName],
        count: COUNTRIES_DATA.filter(c => c.continent === continentName).length
    }));
}
