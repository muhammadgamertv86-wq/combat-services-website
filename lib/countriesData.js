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
                description: 'Iconic symbol of freedom and democracy',
                image: '/images/tourist-spots/statue-of-liberty.png'
            },
            {
                name: 'Grand Canyon, Arizona',
                description: 'Breathtaking natural wonder carved by the Colorado River',
                image: '/images/tourist-spots/grand-canyon.png'
            },
            {
                name: 'Golden Gate Bridge, San Francisco',
                description: 'Stunning suspension bridge and engineering marvel',
                image: '/images/tourist-spots/golden-gate-bridge.png'
            },
            {
                name: 'Times Square, New York',
                description: 'Vibrant hub of entertainment and culture',
                image: '/images/tourist-spots/times-square.png'
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
                description: 'Majestic waterfalls on the US-Canada border',
                image: '/images/tourist-spots/niagara-falls.png'
            },
            {
                name: 'Banff National Park',
                description: 'Stunning Rocky Mountain scenery and turquoise lakes',
                image: '/images/tourist-spots/banff-national-park.png'
            },
            {
                name: 'CN Tower, Toronto',
                description: 'Iconic landmark with panoramic city views',
                image: '/images/tourist-spots/cn-tower-toronto.jpg'
            },
            {
                name: 'Old Quebec City',
                description: 'Charming European-style historic district',
                image: '/images/tourist-spots/old-quebec-city.jpg'
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
                description: 'Architectural masterpiece and cultural icon',
                image: '/images/tourist-spots/sydney-opera-house.png'
            },
            {
                name: 'Great Barrier Reef',
                description: 'World\'s largest coral reef system',
                image: '/images/tourist-spots/great-barrier-reef.png'
            },
            {
                name: 'Uluru (Ayers Rock)',
                description: 'Sacred Aboriginal site in the heart of Australia',
                image: '/images/tourist-spots/uluru.jpg'
            },
            {
                name: 'Great Ocean Road',
                description: 'Scenic coastal drive with the Twelve Apostles',
                image: '/images/tourist-spots/great-ocean-road.jpg'
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
                description: 'Stunning fjord with waterfalls and rainforests',
                image: '/images/tourist-spots/milford-sound.jpg'
            },
            {
                name: 'Hobbiton, Matamata',
                description: 'Lord of the Rings movie set in rolling hills',
                image: '/images/tourist-spots/hobbiton.png'
            },
            {
                name: 'Queenstown',
                description: 'Adventure sports capital with lake and mountain views',
                image: '/images/tourist-spots/queenstown.jpg'
            },
            {
                name: 'Tongariro National Park',
                description: 'Volcanic landscapes and the Emerald Lakes',
                image: '/images/tourist-spots/tongariro.jpg'
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
                description: 'Iconic clock tower and seat of British government',
                image: '/images/tourist-spots/big-ben.png'
            },
            {
                name: 'Stonehenge',
                description: 'Mysterious prehistoric stone circle',
                image: '/images/tourist-spots/stonehenge.jpg'
            },
            {
                name: 'Edinburgh Castle',
                description: 'Historic fortress on Castle Rock',
                image: '/images/tourist-spots/edinburgh-castle.jpg'
            },
            {
                name: 'Lake District',
                description: 'Stunning national park with lakes and mountains'
            },
            {
                name: 'Buckingham Palace',
                description: 'Official residence of the British monarch',
                image: '/images/tourist-spots/buckingham-palace.jpg'
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
                description: 'Iconic pyramid-shaped mountain peak',
                image: '/images/tourist-spots/matterhorn.jpg'
            },
            {
                name: 'Lake Geneva',
                description: 'Beautiful lake surrounded by Alps and vineyards',
                image: '/images/tourist-spots/lake-geneva.jpg'
            },
            {
                name: 'Jungfraujoch',
                description: 'Top of Europe with glacier views',
                image: '/images/tourist-spots/jungfraujoch.jpg'
            },
            {
                name: 'Lucerne',
                description: 'Charming medieval city with Chapel Bridge',
                image: '/images/tourist-spots/lucerne.jpg'
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
                name: 'Brandenburg Gate',
                description: 'Iconic neoclassical monument in Berlin',
                image: '/images/tourist-spots/brandenburg-gate.jpg'
            },
            {
                name: 'Neuschwanstein Castle',
                description: 'Fairy-tale castle in the Bavarian Alps',
                image: '/images/tourist-spots/neuschwanstein-castle.jpg'
            },
            {
                name: 'Rhine Valley',
                description: 'Picturesque river valley with castles',
                image: '/images/tourist-spots/rhine-valley.jpg'
            },
            {
                name: 'Black Forest',
                description: 'Dense forest region famous for cuckoo clocks',
                image: '/images/tourist-spots/black-forest.jpg'
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
                description: 'Iconic iron lattice tower and symbol of France',
                image: '/images/tourist-spots/eiffel-tower.png'
            },
            {
                name: 'Louvre Museum',
                description: 'World\'s largest art museum with Mona Lisa'
            },
            {
                name: 'French Riviera',
                description: 'Glamorous Mediterranean coastline',
                image: '/images/tourist-spots/french-riviera.jpg'
            },
            {
                name: 'Mont Saint-Michel',
                description: 'Medieval abbey on a tidal island',
                image: '/images/tourist-spots/mont-saint-michel.jpg'
            },
            {
                name: 'Arc de Triomphe',
                description: 'Monumental arch honoring French victories',
                image: '/images/tourist-spots/arc-de-triomphe.jpg'
            },
        ],
        visaTypes: ['Student Visa', 'Schengen Visa', 'Long-Stay Visa']
    },
    {
        id: 'spain',
        name: 'Spain',
        flag: '🇪🇸',
        continent: 'Europe',
        tagline: 'Passion & Sunshine',
        description: 'Spain offers vibrant culture, beautiful beaches, world-class cuisine, and a relaxed Mediterranean lifestyle.',
        whyLoved: [
            'Beautiful beaches and sunny weather',
            'Rich cultural heritage and festivals',
            'Delicious tapas and paella',
            'Affordable cost of living',
            'Vibrant nightlife and friendly people'
        ],
        touristSpots: [
            {
                name: 'Sagrada Familia, Barcelona',
                description: 'Gaudí\'s masterpiece basilica',
                image: '/images/tourist-spots/sagrada-familia.png'
            },
            {
                name: 'Alhambra, Granada',
                description: 'Stunning Moorish palace and fortress',
                image: '/images/tourist-spots/alhambra.jpg'
            },
            {
                name: 'Park Güell, Barcelona',
                description: 'Colorful mosaic park by Gaudí',
                image: '/images/tourist-spots/park-guell.jpg'
            },
            {
                name: 'Plaza de España, Seville',
                description: 'Grand plaza with ornate tilework',
                image: '/images/tourist-spots/plaza-de-espana.jpg'
            },
            {
                name: 'Plaza Mayor, Madrid',
                description: 'Historic central square',
                image: '/images/tourist-spots/plaza-mayor.jpg'
            }
        ],
        visaTypes: ['Student Visa', 'Schengen Visa', 'Work Visa']
    },
    {
        id: 'italy',
        name: 'Italy',
        flag: '🇮🇹',
        continent: 'Europe',
        tagline: 'La Dolce Vita',
        description: 'Italy is the heart of art, history, fashion, and cuisine with stunning landscapes and ancient ruins.',
        whyLoved: [
            'World-renowned cuisine (pizza, pasta, gelato)',
            'Rich art and history',
            'Fashion capital of the world',
            'Beautiful coastlines and countryside',
            'Warm and passionate culture'
        ],
        touristSpots: [
            {
                name: 'Trevi Fountain, Rome',
                description: 'Baroque fountain and wishing well',
                image: '/images/tourist-spots/trevi-fountain.jpg'
            },
            {
                name: 'Colosseum, Rome',
                description: 'Ancient Roman amphitheater',
                image: '/images/tourist-spots/colosseum.png'
            },
            {
                name: 'Venice Canals',
                description: 'Romantic waterways and gondolas',
                image: '/images/tourist-spots/venice-canals.jpg'
            },
            {
                name: 'Leaning Tower of Pisa',
                description: 'Iconic tilted bell tower',
                image: '/images/tourist-spots/leaning-tower-pisa.jpg'
            },
            {
                name: 'Amalfi Coast',
                description: 'Stunning coastal cliffs and villages',
                image: '/images/tourist-spots/amalfi-coast.jpg'
            }
        ],
        visaTypes: ['Student Visa', 'Schengen Visa', 'Work Visa']
    },
    {
        id: 'netherlands',
        name: 'Netherlands',
        flag: '🇳🇱',
        continent: 'Europe',
        tagline: 'Land of Tulips & Windmills',
        description: 'The Netherlands offers charming canals, cycling culture, tulip fields, and progressive society.',
        whyLoved: [
            'Bicycle-friendly cities',
            'Beautiful tulip fields',
            'Progressive and tolerant society',
            'Excellent English proficiency',
            'High quality of life'
        ],
        touristSpots: [
            {
                name: 'Amsterdam Canals',
                description: 'UNESCO World Heritage waterways',
                image: '/images/tourist-spots/amsterdam-canals.png'
            },
            {
                name: 'Keukenhof Gardens',
                description: 'World\'s largest flower garden',
                image: '/images/tourist-spots/keukenhof.jpg'
            },
            {
                name: 'Windmills of Kinderdijk',
                description: 'Historic Dutch windmills',
                image: '/images/tourist-spots/kinderdijk.jpg'
            },
            {
                name: 'Anne Frank House',
                description: 'Historic museum and memorial',
                image: '/images/tourist-spots/anne-frank-house.jpg'
            }
        ],
        visaTypes: ['Student Visa', 'Schengen Visa', 'Highly Skilled Migrant Visa']
    },
    {
        id: 'portugal',
        name: 'Portugal',
        flag: '🇵🇹',
        continent: 'Europe',
        tagline: 'Europe\'s Best Kept Secret',
        description: 'Portugal offers stunning coastlines, historic cities, delicious cuisine, and affordable living.',
        whyLoved: [
            'Affordable European destination',
            'Beautiful beaches and surf spots',
            'Delicious seafood and pastéis de nata',
            'Warm and welcoming people',
            'Rich maritime history'
        ],
        touristSpots: [
            { name: 'Belém Tower, Lisbon', description: 'Iconic fortified tower', image: '/images/tourist-spots/belem-tower.jpg' },
            { name: 'Douro Valley', description: 'Scenic wine region', image: '/images/tourist-spots/douro-valley.jpg' },
            { name: 'Algarve Beaches', description: 'Golden cliffs and turquoise waters', image: '/images/tourist-spots/algarve-beaches.jpg' },
            { name: 'Sintra Palaces', description: 'Fairy-tale castles and palaces', image: '/images/tourist-spots/sintra-palaces.jpg' }
        ],
        visaTypes: ['Student Visa', 'Schengen Visa', 'D7 Visa']
    },
    {
        id: 'greece',
        name: 'Greece',
        flag: '🇬🇷',
        continent: 'Europe',
        tagline: 'Cradle of Western Civilization',
        description: 'Greece combines ancient history, stunning islands, Mediterranean cuisine, and warm hospitality.',
        whyLoved: [
            'Ancient ruins and mythology',
            'Beautiful Greek islands',
            'Delicious Mediterranean food',
            'Crystal-clear waters',
            'Warm and hospitable people'
        ],
        touristSpots: [
            { name: 'Acropolis, Athens', description: 'Ancient citadel with Parthenon', image: '/images/tourist-spots/acropolis.jpg' },
            {
                name: 'Santorini',
                description: 'Iconic white-washed island',
                image: '/images/tourist-spots/santorini.png'
            },
            { name: 'Mykonos', description: 'Vibrant island nightlife', image: '/images/tourist-spots/mykonos.jpg' },
            { name: 'Meteora', description: 'Monasteries on rock pillars', image: '/images/tourist-spots/meteora.jpg' }
        ],
        visaTypes: ['Student Visa', 'Schengen Visa', 'Golden Visa']
    },
    {
        id: 'ireland',
        name: 'Ireland',
        flag: '🇮🇪',
        continent: 'Europe',
        tagline: 'Emerald Isle',
        description: 'Ireland offers stunning green landscapes, rich literary heritage, friendly pubs, and Celtic culture.',
        whyLoved: [
            'Friendly and welcoming people',
            'Beautiful green countryside',
            'Rich literary and musical heritage',
            'Cozy pubs and Guinness',
            'English-speaking country'
        ],
        touristSpots: [
            { name: 'Cliffs of Moher', description: 'Dramatic coastal cliffs', image: '/images/tourist-spots/cliffs-of-moher.jpg' },
            { name: 'Trinity College, Dublin', description: 'Historic university and Book of Kells', image: '/images/tourist-spots/trinity-college.jpg' },
            { name: 'Ring of Kerry', description: 'Scenic coastal route', image: '/images/tourist-spots/ring-of-kerry.jpg' },
            { name: 'Giant\'s Causeway', description: 'Unique basalt columns', image: '/images/tourist-spots/giants-causeway.jpg' }
        ],
        visaTypes: ['Student Visa', 'Work Permit', 'Critical Skills Visa']
    },
    {
        id: 'poland',
        name: 'Poland',
        flag: '🇵🇱',
        continent: 'Europe',
        tagline: 'Heart of Europe',
        description: 'Poland offers rich history, beautiful medieval cities, affordable living, and growing tech industry.',
        whyLoved: [
            'Affordable European destination',
            'Beautiful medieval old towns',
            'Rich history and culture',
            'Growing tech and startup scene',
            'Delicious pierogi and Polish cuisine'
        ],
        touristSpots: [
            { name: 'Kraków Old Town', description: 'Medieval market square and castle', image: '/images/tourist-spots/krakow-old-town.jpg' },
            { name: 'Auschwitz-Birkenau', description: 'Historic memorial and museum', image: '/images/tourist-spots/auschwitz-birkenau.jpg' },
            { name: 'Warsaw Old Town', description: 'Rebuilt historic center', image: '/images/tourist-spots/warsaw-old-town.jpg' },
            { name: 'Wieliczka Salt Mine', description: 'Underground salt cathedral', image: '/images/tourist-spots/wieliczka-salt-mine.jpg' }
        ],
        visaTypes: ['Student Visa', 'Schengen Visa', 'Work Permit']
    },
    {
        id: 'czech-republic',
        name: 'Czech Republic',
        flag: '🇨🇿',
        continent: 'Europe',
        tagline: 'Fairy Tale Kingdom',
        description: 'Czech Republic offers stunning Prague, medieval castles, world-famous beer, and affordable living.',
        whyLoved: [
            'Beautiful Prague architecture',
            'World-class beer culture',
            'Affordable cost of living',
            'Rich medieval history',
            'Central European location'
        ],
        touristSpots: [
            { name: 'Prague Castle', description: 'Largest ancient castle complex', image: '/images/tourist-spots/prague-castle.jpg' },
            { name: 'Charles Bridge', description: 'Historic bridge with statues', image: '/images/tourist-spots/charles-bridge.jpg' },
            { name: 'Český Krumlov', description: 'Fairy-tale medieval town', image: '/images/tourist-spots/cesky-krumlov.jpg' },
            { name: 'Karlovy Vary', description: 'Famous spa town', image: '/images/tourist-spots/karlovy-vary.jpg' }
        ],
        visaTypes: ['Student Visa', 'Schengen Visa', 'Employee Card']
    },
    {
        id: 'hungary',
        name: 'Hungary',
        flag: '🇭🇺',
        continent: 'Europe',
        tagline: 'Pearl of the Danube',
        description: 'Hungary offers beautiful Budapest, thermal baths, rich history, and vibrant culture.',
        whyLoved: [
            'Stunning Budapest architecture',
            'Famous thermal baths',
            'Affordable European destination',
            'Delicious Hungarian cuisine',
            'Rich cultural heritage'
        ],
        touristSpots: [
            { name: 'Parliament Building, Budapest', description: 'Iconic riverside parliament', image: '/images/tourist-spots/parliament-budapest.jpg' },
            { name: 'Széchenyi Thermal Bath', description: 'Historic thermal spa', image: '/images/tourist-spots/szechenyi-bath.jpg' },
            { name: 'Fisherman\'s Bastion', description: 'Neo-Gothic terrace with views', image: '/images/tourist-spots/fishermans-bastion.jpg' },
            { name: 'Lake Balaton', description: 'Central Europe\'s largest lake', image: '/images/tourist-spots/lake-balaton.jpg' }
        ],
        visaTypes: ['Student Visa', 'Schengen Visa', 'Work Permit']
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
                image: '/images/tourist-spots/burj-khalifa.png'
            },
            {
                name: 'Dubai Marina',
                description: 'Stunning waterfront with luxury yachts and skyscrapers',
                image: '/images/tourist-spots/dubai-marina.png'
            },
            {
                name: 'Sheikh Zayed Grand Mosque',
                description: 'Magnificent white marble mosque in Abu Dhabi',
                image: '/images/tourist-spots/sheikh-zayed-grand-mosque.jpg'
            },
            {
                name: 'Palm Jumeirah',
                description: 'Iconic man-made island with luxury resorts',
                image: '/images/tourist-spots/palm-jumeirah.jpg'
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
                image: '/images/tourist-spots/sultan-qaboos-mosque.png'
            },
            {
                name: 'Wahiba Sands',
                description: 'Golden desert dunes perfect for adventure',
                image: '/images/tourist-spots/wahiba-sands.jpg'
            },
            {
                name: 'Muscat Coastline',
                description: 'Beautiful beaches and crystal-clear waters',
                image: '/images/tourist-spots/muscat-coastline.jpg'
            },
            {
                name: 'Nizwa Fort',
                description: 'Historic fort showcasing Omani heritage',
                image: '/images/tourist-spots/nizwa-fort.jpg'
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
                description: 'Luxury artificial island with Mediterranean-style marinas',
                image: '/images/tourist-spots/the-pearl-qatar.jpg'
            },
            {
                name: 'Museum of Islamic Art',
                description: 'Stunning architecture and priceless artifacts',
                image: '/images/tourist-spots/museum-islamic-art.jpg'
            },
            {
                name: 'Souq Waqif',
                description: 'Traditional market with authentic Arabian atmosphere',
                image: '/images/tourist-spots/souq-waqif.jpg'
            },
            {
                name: 'Katara Cultural Village',
                description: 'Cultural hub with galleries, theaters, and restaurants',
                image: '/images/tourist-spots/katara-cultural-village.jpg'
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
                image: '/images/tourist-spots/hagia-sophia.png'
            },
            {
                name: 'Cappadocia',
                description: 'Fairy chimneys and hot air balloon rides',
                image: '/images/tourist-spots/cappadocia-balloons.png'
            },
            {
                name: 'Blue Mosque, Istanbul',
                description: 'Stunning Ottoman architecture with blue tiles',
                image: '/images/tourist-spots/blue-mosque.jpg'
            },
            {
                name: 'Pamukkale',
                description: 'White travertine terraces and thermal pools',
                image: '/images/tourist-spots/pamukkale.jpg'
            }
        ],
        visaTypes: ['Tourist Visa (e-Visa)', 'Student Visa', 'Work Permit']
    },
    {
        id: 'saudi-arabia',
        name: 'Saudi Arabia',
        flag: '🇸🇦',
        continent: 'Middle East',
        tagline: 'Kingdom of Heritage',
        description: 'Saudi Arabia is opening up to tourism, offering ancient heritage sites, modern cities, and unique desert experiences.',
        whyLoved: [
            'Rich Islamic heritage',
            'Modern mega-projects (NEOM, The Line)',
            'Vast desert landscapes',
            'Tax-free income',
            'Growing tourism sector'
        ],
        touristSpots: [
            { name: 'Masjid al-Haram, Mecca', description: 'Holiest site in Islam', image: '/images/tourist-spots/masjid-al-haram.jpg' },
            { name: 'Al-Ula', description: 'Ancient archaeological wonder', image: '/images/tourist-spots/al-ula.jpg' },
            { name: 'Riyadh Skyline', description: 'Modern capital with skyscrapers', image: '/images/tourist-spots/riyadh-skyline.jpg' },
            { name: 'Edge of the World', description: 'Dramatic cliff formations', image: '/images/tourist-spots/edge-of-the-world.jpg' }
        ],
        visaTypes: ['Tourist Visa (e-Visa)', 'Work Visa', 'Hajj Visa']
    },
    {
        id: 'jordan',
        name: 'Jordan',
        flag: '🇯🇴',
        continent: 'Middle East',
        tagline: 'Ancient Kingdom',
        description: 'Jordan offers ancient wonders like Petra, desert landscapes, and warm Bedouin hospitality.',
        whyLoved: [
            'Ancient city of Petra',
            'Safe and stable country',
            'Friendly and welcoming people',
            'Diverse landscapes',
            'Rich biblical history'
        ],
        touristSpots: [
            {
                name: 'Petra',
                description: 'Ancient rose-red city carved in stone',
                image: '/images/tourist-spots/petra.png'
            },
            { name: 'Wadi Rum', description: 'Martian-like desert landscape', image: '/images/tourist-spots/wadi-rum.jpg' },
            { name: 'Dead Sea', description: 'Lowest point on Earth', image: '/images/tourist-spots/dead-sea.jpg' },
            { name: 'Jerash', description: 'Well-preserved Roman ruins', image: '/images/tourist-spots/jerash.jpg' }
        ],
        visaTypes: ['Tourist Visa', 'Work Permit']
    },
    {
        id: 'bahrain',
        name: 'Bahrain',
        flag: '🇧🇭',
        continent: 'Middle East',
        tagline: 'Pearl of the Gulf',
        description: 'Bahrain offers modern infrastructure, rich history, Formula 1 racing, and a liberal Gulf lifestyle.',
        whyLoved: [
            'Liberal and progressive Gulf state',
            'Formula 1 Grand Prix',
            'Rich pearl diving history',
            'Modern infrastructure',
            'Gateway to Saudi Arabia'
        ],
        touristSpots: [
            { name: 'Bahrain Fort', description: 'Ancient UNESCO World Heritage fort', image: '/images/tourist-spots/bahrain-fort.jpg' },
            { name: 'Bahrain International Circuit', description: 'F1 racing track', image: '/images/tourist-spots/bahrain-international-circuit.jpg' },
            { name: 'Al Fateh Grand Mosque', description: 'One of the largest mosques', image: '/images/tourist-spots/al-fateh-grand-mosque.jpg' },
            { name: 'Manama Souq', description: 'Traditional market', image: '/images/tourist-spots/manama-souq.jpg' }
        ],
        visaTypes: ['Tourist Visa (e-Visa)', 'Work Visa']
    },
    {
        id: 'kuwait',
        name: 'Kuwait',
        flag: '🇰🇼',
        continent: 'Middle East',
        tagline: 'Modern Gulf State',
        description: 'Kuwait offers modern architecture, rich oil heritage, shopping malls, and Arabian hospitality.',
        whyLoved: [
            'Tax-free income',
            'Modern infrastructure',
            'Shopping paradise',
            'Safe and stable',
            'Rich cultural heritage'
        ],
        touristSpots: [
            { name: 'Kuwait Towers', description: 'Iconic water towers', image: '/images/tourist-spots/kuwait-towers.jpg' },
            { name: 'The Avenues Mall', description: 'One of the largest malls', image: '/images/tourist-spots/the-avenues-mall.jpg' },
            { name: 'Grand Mosque', description: 'Largest mosque in Kuwait', image: '/images/tourist-spots/grand-mosque.jpg' },
            { name: 'Failaka Island', description: 'Historic island with ruins', image: '/images/tourist-spots/failaka-island.jpg' }
        ],
        visaTypes: ['Tourist Visa', 'Work Visa']
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
                image: '/images/tourist-spots/maldives-bungalows.png'
            },
            {
                name: 'Coral Reefs',
                description: 'Vibrant underwater world with tropical fish',
                image: '/images/tourist-spots/maldives-reef.png'
            },
            {
                name: 'Malé City',
                description: 'Colorful capital with local markets',
                image: '/images/tourist-spots/male-city.jpg'
            },
            {
                name: 'Bioluminescent Beaches',
                description: 'Magical glowing plankton at night',
                image: '/images/tourist-spots/bioluminescent-beach.jpg'
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
                image: '/images/tourist-spots/grand-palace.png'
            },
            {
                name: 'Phi Phi Islands',
                description: 'Stunning limestone cliffs and turquoise waters',
                image: '/images/tourist-spots/phi-phi-islands.jpg'
            },
            {
                name: 'Floating Markets',
                description: 'Traditional markets on canals',
                image: '/images/tourist-spots/floating-markets.jpg'
            },
            {
                name: 'Chiang Mai Temples',
                description: 'Ancient Buddhist temples in the mountains',
                image: '/images/tourist-spots/chiang-mai-temples.jpg'
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
                description: 'Iconic hotel with rooftop infinity pool',
                image: '/images/tourist-spots/marina-bay-sands.png'
            },
            {
                name: 'Gardens by the Bay',
                description: 'Futuristic Supertree Grove and Cloud Forest',
                image: '/images/tourist-spots/gardens-by-the-bay.jpg'
            },
            {
                name: 'Sentosa Island',
                description: 'Beach resort with Universal Studios',
                image: '/images/tourist-spots/sentosa-island.jpg'
            },
            {
                name: 'Chinatown & Little India',
                description: 'Vibrant cultural neighborhoods',
                image: '/images/tourist-spots/chinatown-little-india.jpg'
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
                description: 'Iconic twin skyscrapers in Kuala Lumpur',
                image: '/images/tourist-spots/petronas-towers.png'
            },
            {
                name: 'Langkawi Island',
                description: 'Tropical paradise with beaches and cable car',
                image: '/images/tourist-spots/langkawi-island.jpg'
            },
            {
                name: 'Batu Caves',
                description: 'Hindu temple in limestone caves',
                image: '/images/tourist-spots/batu-caves.jpg'
            },
            {
                name: 'Penang',
                description: 'Food capital with colonial architecture',
                image: '/images/tourist-spots/penang.jpg'
            }
        ],
        visaTypes: ['Tourist Visa', 'Student Pass', 'Work Permit']
    },
    {
        id: 'japan',
        name: 'Japan',
        flag: '🇯🇵',
        continent: 'Asia',
        tagline: 'Land of the Rising Sun',
        description: 'Japan blends ancient traditions with cutting-edge technology, offering unique culture, cuisine, and natural beauty.',
        whyLoved: [
            'Unique blend of tradition and modernity',
            'Delicious and diverse cuisine',
            'Safe and clean cities',
            'Beautiful cherry blossoms',
            'Advanced technology and innovation'
        ],
        touristSpots: [
            {
                name: 'Mount Fuji',
                description: 'Iconic volcano and cultural symbol',
                image: '/images/tourist-spots/mount-fuji.png'
            },
            {
                name: 'Tokyo Shibuya Crossing',
                description: 'World\'s busiest intersection',
                image: '/images/tourist-spots/shibuya-crossing.png'
            },
            {
                name: 'Kyoto Temples',
                description: 'Ancient temples and geishas',
                image: '/images/tourist-spots/kyoto-temples.png'
            },
            { name: 'Osaka Castle', description: 'Historic Japanese castle', image: '/images/tourist-spots/osaka-castle.jpg' }
        ],
        visaTypes: ['Tourist Visa', 'Student Visa', 'Work Visa']
    },
    {
        id: 'south-korea',
        name: 'South Korea',
        flag: '🇰🇷',
        continent: 'Asia',
        tagline: 'K-Culture Hub',
        description: 'South Korea offers K-pop culture, advanced technology, delicious food, and beautiful palaces.',
        whyLoved: [
            'K-pop and K-drama culture',
            'Delicious Korean BBQ and street food',
            'Advanced technology',
            'Beautiful palaces and temples',
            'Vibrant nightlife'
        ],
        touristSpots: [
            { name: 'Gyeongbokgung Palace, Seoul', description: 'Grand royal palace', image: '/images/tourist-spots/gyeongbokgung-palace.jpg' },
            { name: 'Jeju Island', description: 'Volcanic island paradise', image: '/images/tourist-spots/jeju-island.jpg' },
            { name: 'Bukchon Hanok Village', description: 'Traditional Korean houses', image: '/images/tourist-spots/bukchon-hanok-village.jpg' },
            { name: 'DMZ', description: 'Korean Demilitarized Zone', image: '/images/tourist-spots/dmz.jpg' }
        ],
        visaTypes: ['Tourist Visa (K-ETA)', 'Student Visa', 'Work Visa']
    },
    {
        id: 'vietnam',
        name: 'Vietnam',
        flag: '🇻🇳',
        continent: 'Asia',
        tagline: 'Hidden Gem of Southeast Asia',
        description: 'Vietnam offers stunning landscapes, rich history, delicious cuisine, and affordable travel.',
        whyLoved: [
            'Affordable travel destination',
            'Delicious pho and banh mi',
            'Stunning natural landscapes',
            'Rich history and culture',
            'Friendly and welcoming people'
        ],
        touristSpots: [
            {
                name: 'Ha Long Bay',
                description: 'UNESCO limestone karsts and islands',
                image: '/images/tourist-spots/ha-long-bay.png'
            },
            { name: 'Hoi An Ancient Town', description: 'Charming lantern-lit streets', image: '/images/tourist-spots/hoi-an-ancient-town.jpg' },
            { name: 'Cu Chi Tunnels', description: 'Historic war tunnels', image: '/images/tourist-spots/cu-chi-tunnels.jpg' },
            { name: 'Sapa Rice Terraces', description: 'Stunning mountain terraces', image: '/images/tourist-spots/sapa-rice-terraces.jpg' }
        ],
        visaTypes: ['Tourist Visa (e-Visa)', 'Business Visa']
    },
    {
        id: 'indonesia',
        name: 'Indonesia',
        flag: '🇮🇩',
        continent: 'Asia',
        tagline: 'Emerald of the Equator',
        description: 'Indonesia is a tropical paradise with thousands of islands, diverse culture, and stunning beaches.',
        whyLoved: [
            'Beautiful tropical islands',
            'Diverse culture and traditions',
            'Affordable paradise',
            'World-class surfing and diving',
            'Friendly and hospitable people'
        ],
        touristSpots: [
            {
                name: 'Bali Beaches',
                description: 'Tropical paradise island',
                image: '/images/tourist-spots/bali-beaches.png'
            },
            {
                name: 'Borobudur Temple',
                description: 'Ancient Buddhist temple',
                image: '/images/tourist-spots/borobudur.png'
            },
            { name: 'Komodo National Park', description: 'Home of Komodo dragons', image: '/images/tourist-spots/komodo-national-park.jpg' },
            { name: 'Raja Ampat', description: 'World\'s best diving spot', image: '/images/tourist-spots/raja-ampat.jpg' }
        ],
        visaTypes: ['Tourist Visa (Visa on Arrival)', 'Business Visa']
    },
    {
        id: 'sri-lanka',
        name: 'Sri Lanka',
        flag: '🇱🇰',
        continent: 'Asia',
        tagline: 'Pearl of the Indian Ocean',
        description: 'Sri Lanka offers ancient temples, tea plantations, wildlife, and beautiful beaches.',
        whyLoved: [
            'Affordable tropical destination',
            'Rich Buddhist heritage',
            'Beautiful tea plantations',
            'Diverse wildlife',
            'Delicious Sri Lankan cuisine'
        ],
        touristSpots: [
            { name: 'Sigiriya Rock Fortress', description: 'Ancient rock palace', image: '/images/tourist-spots/sigiriya-rock-fortress.jpg' },
            { name: 'Temple of the Tooth, Kandy', description: 'Sacred Buddhist temple', image: '/images/tourist-spots/temple-of-the-tooth.jpg' },
            { name: 'Ella', description: 'Scenic hill country', image: '/images/tourist-spots/ella.jpg' },
            { name: 'Yala National Park', description: 'Leopard and elephant safari', image: '/images/tourist-spots/yala-national-park.jpg' }
        ],
        visaTypes: ['Tourist Visa (ETA)', 'Business Visa']
    },
    {
        id: 'china',
        name: 'China',
        flag: '🇨🇳',
        continent: 'Asia',
        tagline: 'Ancient Civilization Meets Modern Power',
        description: 'China offers ancient wonders, modern cities, diverse landscapes, and rich cultural heritage.',
        whyLoved: [
            'Great Wall and ancient wonders',
            'Modern megacities',
            'Delicious and diverse cuisine',
            'Affordable travel',
            'Rich cultural heritage'
        ],
        touristSpots: [
            {
                name: 'Great Wall of China',
                description: 'Ancient fortification and world wonder',
                image: '/images/tourist-spots/great-wall.png'
            },
            { name: 'Forbidden City, Beijing', description: 'Imperial palace complex', image: '/images/tourist-spots/forbidden-city.jpg' },
            { name: 'Terracotta Army, Xi\'an', description: 'Ancient warrior sculptures', image: '/images/tourist-spots/terracotta-army.jpg' },
            { name: 'Li River, Guilin', description: 'Stunning karst landscape', image: '/images/tourist-spots/li-river.jpg' }
        ],
        visaTypes: ['Tourist Visa (L)', 'Business Visa', 'Student Visa']
    },
    {
        id: 'azerbaijan',
        name: 'Azerbaijan',
        flag: '🇦🇿',
        continent: 'Asia',
        tagline: 'Land of Fire',
        description: 'Azerbaijan offers modern Baku, ancient history, Caspian Sea coastline, and visa-free entry for Pakistanis.',
        whyLoved: [
            'Visa-free for Pakistani passport holders',
            'Modern Baku architecture',
            'Affordable destination',
            'Rich Silk Road history',
            'Friendly to Pakistani visitors'
        ],
        touristSpots: [
            { name: 'Flame Towers, Baku', description: 'Iconic modern skyscrapers', image: '/images/tourist-spots/flame-towers.jpg' },
            { name: 'Old City (Icherisheher)', description: 'UNESCO World Heritage site', image: '/images/tourist-spots/old-city-baku.jpg' },
            { name: 'Gobustan National Park', description: 'Ancient rock art and mud volcanoes', image: '/images/tourist-spots/gobustan-national-park.jpg' },
            { name: 'Caspian Sea Boulevard', description: 'Beautiful waterfront promenade', image: '/images/tourist-spots/caspian-sea-boulevard.jpg' }
        ],
        visaTypes: ['Visa-free (30 days)', 'e-Visa']
    },
    {
        id: 'georgia',
        name: 'Georgia',
        flag: '🇬🇪',
        continent: 'Asia',
        tagline: 'Cradle of Wine',
        description: 'Georgia offers stunning mountains, ancient churches, wine culture, and visa-free entry for Pakistanis.',
        whyLoved: [
            'Visa-free for Pakistani passport holders',
            'Beautiful Caucasus mountains',
            'Ancient wine culture',
            'Affordable and safe',
            'Warm hospitality'
        ],
        touristSpots: [
            { name: 'Tbilisi Old Town', description: 'Charming historic quarter', image: '/images/tourist-spots/tbilisi-old-town.jpg' },
            { name: 'Kazbegi Mountains', description: 'Stunning mountain scenery', image: '/images/tourist-spots/kazbegi-mountains.jpg' },
            { name: 'Vardzia Cave Monastery', description: 'Ancient cave complex', image: '/images/tourist-spots/vardzia-cave-monastery.jpg' },
            { name: 'Batumi', description: 'Black Sea resort city', image: '/images/tourist-spots/batumi.jpg' }
        ],
        visaTypes: ['Visa-free (365 days)', 'e-Visa']
    },
    {
        id: 'armenia',
        name: 'Armenia',
        flag: '🇦🇲',
        continent: 'Asia',
        tagline: 'First Christian Nation',
        description: 'Armenia offers ancient monasteries, Mount Ararat views, rich history, and easy visa for Pakistanis.',
        whyLoved: [
            'Easy e-Visa for Pakistanis',
            'Ancient Christian heritage',
            'Beautiful mountain landscapes',
            'Affordable destination',
            'Rich history and culture'
        ],
        touristSpots: [
            { name: 'Geghard Monastery', description: 'UNESCO cave monastery', image: '/images/tourist-spots/geghard-monastery.jpg' },
            { name: 'Lake Sevan', description: 'High-altitude alpine lake', image: '/images/tourist-spots/lake-sevan.jpg' },
            { name: 'Yerevan', description: 'Pink city with ancient history', image: '/images/tourist-spots/yerevan.jpg' },
            { name: 'Khor Virap', description: 'Monastery with Ararat views', image: '/images/tourist-spots/khor-virap.jpg' }
        ],
        visaTypes: ['e-Visa', 'Visa on Arrival']
    },

    // NORTH AMERICA - Adding Mexico
    {
        id: 'mexico',
        name: 'Mexico',
        flag: '🇲🇽',
        continent: 'North America',
        tagline: 'Colorful Culture & Beaches',
        description: 'Mexico offers vibrant culture, ancient ruins, beautiful beaches, and delicious cuisine.',
        whyLoved: [
            'Rich Aztec and Mayan history',
            'Delicious tacos and authentic cuisine',
            'Beautiful Caribbean beaches',
            'Colorful festivals and traditions',
            'Affordable paradise'
        ],
        touristSpots: [
            {
                name: 'Chichen Itza',
                description: 'Ancient Mayan pyramid',
                image: '/images/tourist-spots/chichen-itza.png'
            },
            { name: 'Cancun Beaches', description: 'Turquoise Caribbean waters', image: '/images/tourist-spots/cancun-beaches.jpg' },
            { name: 'Mexico City', description: 'Vibrant capital with museums', image: '/images/tourist-spots/mexico-city.jpg' },
            { name: 'Tulum', description: 'Beachside Mayan ruins', image: '/images/tourist-spots/tulum.jpg' }
        ],
        visaTypes: ['Tourist Visa (FMM)', 'Temporary Resident Visa']
    },

    // OCEANIA - Adding Fiji
    {
        id: 'fiji',
        name: 'Fiji',
        flag: '🇫🇯',
        continent: 'Oceania',
        tagline: 'Paradise Islands',
        description: 'Fiji is a tropical paradise with crystal-clear waters, coral reefs, and warm island hospitality.',
        whyLoved: [
            'Pristine tropical beaches',
            'World-class diving and snorkeling',
            'Warm and friendly Fijian culture',
            'Luxury island resorts',
            'Untouched natural beauty'
        ],
        touristSpots: [
            { name: 'Yasawa Islands', description: 'Remote island paradise' },
            { name: 'Coral Coast', description: 'Beautiful coral reefs' },
            { name: 'Suva', description: 'Vibrant capital city' },
            { name: 'Garden of the Sleeping Giant', description: 'Orchid garden' }
        ],
        visaTypes: ['Tourist Visa (on arrival)', 'Work Permit']
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
