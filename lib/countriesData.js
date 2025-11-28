// Country data with tourist information
export const COUNTRIES_DATA = [
    {
        id: 'usa',
        name: 'United States',
        flag: '🇺🇸',
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
                description: 'Iconic symbol of freedom and democracy',
                image: 'statue-of-liberty'
            },
            {
                name: 'Grand Canyon, Arizona',
                description: 'Breathtaking natural wonder carved by the Colorado River',
                image: 'grand-canyon'
            },
            {
                name: 'Golden Gate Bridge, San Francisco',
                description: 'Stunning suspension bridge and engineering marvel',
                image: 'golden-gate'
            },
            {
                name: 'Times Square, New York',
                description: 'The heart of NYC with dazzling lights and energy',
                image: 'times-square'
            }
        ],
        visaTypes: ['Student Visa (F-1)', 'Tourist Visa (B-2)', 'Work Visa (H-1B)']
    },
    {
        id: 'canada',
        name: 'Canada',
        flag: '🇨🇦',
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
                description: 'Majestic waterfalls on the US-Canada border',
                image: 'niagara-falls'
            },
            {
                name: 'Banff National Park',
                description: 'Stunning Rocky Mountain scenery and turquoise lakes',
                image: 'banff'
            },
            {
                name: 'CN Tower, Toronto',
                description: 'Iconic landmark with panoramic city views',
                image: 'cn-tower'
            },
            {
                name: 'Old Quebec City',
                description: 'Charming European-style historic district',
                image: 'quebec'
            }
        ],
        visaTypes: ['Study Permit', 'Visitor Visa', 'Work Permit']
    },
    {
        id: 'australia',
        name: 'Australia',
        flag: '🇦🇺',
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
                description: 'Architectural masterpiece and cultural icon',
                image: 'opera-house'
            },
            {
                name: 'Great Barrier Reef',
                description: 'World\'s largest coral reef system',
                image: 'great-barrier-reef'
            },
            {
                name: 'Uluru (Ayers Rock)',
                description: 'Sacred Aboriginal site in the heart of Australia',
                image: 'uluru'
            },
            {
                name: 'Great Ocean Road',
                description: 'Scenic coastal drive with the Twelve Apostles',
                image: 'great-ocean-road'
            }
        ],
        visaTypes: ['Student Visa (500)', 'Tourist Visa (600)', 'Working Holiday Visa']
    },
    {
        id: 'new-zealand',
        name: 'New Zealand',
        flag: '🇳🇿',
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
                description: 'Stunning fjord with waterfalls and rainforests',
                image: 'milford-sound'
            },
            {
                name: 'Hobbiton, Matamata',
                description: 'Lord of the Rings movie set in rolling hills',
                image: 'hobbiton'
            },
            {
                name: 'Queenstown',
                description: 'Adventure sports capital with lake and mountain views',
                image: 'queenstown'
            },
            {
                name: 'Tongariro National Park',
                description: 'Volcanic landscapes and the Emerald Lakes',
                image: 'tongariro'
            }
        ],
        visaTypes: ['Student Visa', 'Visitor Visa', 'Working Holiday Visa']
    },
    {
        id: 'uk',
        name: 'United Kingdom',
        flag: '🇬🇧',
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
                description: 'Iconic clock tower and seat of British government',
                image: 'big-ben'
            },
            {
                name: 'Stonehenge',
                description: 'Mysterious prehistoric monument',
                image: 'stonehenge'
            },
            {
                name: 'Edinburgh Castle',
                description: 'Historic fortress overlooking Scotland\'s capital',
                image: 'edinburgh-castle'
            },
            {
                name: 'Lake District',
                description: 'Stunning national park with lakes and mountains',
                image: 'lake-district'
            }
        ],
        visaTypes: ['Student Visa (Tier 4)', 'Standard Visitor Visa', 'Graduate Route']
    },
    {
        id: 'switzerland',
        name: 'Switzerland',
        flag: '🇨🇭',
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
                description: 'Iconic pyramid-shaped mountain peak',
                image: 'matterhorn'
            },
            {
                name: 'Lake Geneva',
                description: 'Beautiful lake surrounded by Alps and vineyards',
                image: 'lake-geneva'
            },
            {
                name: 'Jungfraujoch',
                description: 'Top of Europe with glacier views',
                image: 'jungfraujoch'
            },
            {
                name: 'Lucerne',
                description: 'Charming medieval city with Chapel Bridge',
                image: 'lucerne'
            }
        ],
        visaTypes: ['Student Visa (Type D)', 'Schengen Visa', 'Work Permit']
    },
    {
        id: 'germany',
        name: 'Germany',
        flag: '🇩🇪',
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
                description: 'Historic monument symbolizing German unity',
                image: 'brandenburg-gate'
            },
            {
                name: 'Neuschwanstein Castle',
                description: 'Fairy-tale castle in the Bavarian Alps',
                image: 'neuschwanstein'
            },
            {
                name: 'Rhine Valley',
                description: 'Scenic river valley with castles and vineyards',
                image: 'rhine-valley'
            },
            {
                name: 'Black Forest',
                description: 'Dense forest region famous for cuckoo clocks',
                image: 'black-forest'
            }
        ],
        visaTypes: ['Student Visa', 'Schengen Visa', 'Job Seeker Visa']
    },
    {
        id: 'france',
        name: 'France',
        flag: '🇫🇷',
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
                description: 'Iconic iron lattice tower and symbol of France',
                image: 'eiffel-tower'
            },
            {
                name: 'Louvre Museum',
                description: 'World\'s largest art museum with Mona Lisa',
                image: 'louvre'
            },
            {
                name: 'French Riviera',
                description: 'Glamorous Mediterranean coastline',
                image: 'french-riviera'
            },
            {
                name: 'Mont Saint-Michel',
                description: 'Medieval abbey on a tidal island',
                image: 'mont-saint-michel'
            }
        ],
        visaTypes: ['Student Visa', 'Schengen Visa', 'Long-Stay Visa']
    }
];
