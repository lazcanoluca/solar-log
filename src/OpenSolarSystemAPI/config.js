const API_URL = 'https://api.le-systeme-solaire.net/rest/';
const ALL_BODIES_URL = `${API_URL}bodies`;

// returns all objects with their data
export const fetchObjects = async () => {
    return await fetch(ALL_BODIES_URL)
        .then(response => response.json())
        .then(response => response.bodies)
};

// returns the object with its data
export const fetchObject = async (object_id) => {
    return await fetch(`${ALL_BODIES_URL}/${object_id}`)
        .then(response => response.json())
};

// returns array with type
export const fetchType = async (body_type) => {
    return await fetch(`${ALL_BODIES_URL}/?filter[]=bodyType`)
        .then(response => response.json())
        .then(response => response.bodies)
        .then(response => response.filter(object => object.bodyType === body_type))
};

/* FILTERS:
1. Include: Star, Planets, Moons, Dwarf planets, Asteroids, Comets.
2. Order by perihelion, aphelion, eccentricity, inclination, mass, volume, density, gravity, escape velocity, meanRadius, orbit period, rotation period.
3. Orbits which object: [search bar]
4. Search Bar (name).
5. Max-min  perihelion, aphelion, eccentricity, inclination, mass, volume, density, gravity, escape velocity, meanRadius, orbit period, rotation period.
6. Has moons. (has no moons, no, has moons)
*/

/*
filters = {
    include_body_types = {
        'star' = bool,              // use neq to filter out in api call
        'planets' = bool,
        'dwarf_planets' = bool,
        'asteroids' = bool,
        'comets' = bool,
        'moons' = bool,
    },
    order_by = string,
    order_direction = bool, (true = asc, false = desc)
    current_page = int,
    min_perihelion = int,
    max_perihelion = int,
    min_aphelion = int,
    max_aphelion = int,
    min_eccentricity = int,
    max_eccentricity = int,
    min_inclination = int,
    max_inclination = int,
    min_mass = int,
    max_mass = int,
    min_volume = int,
    max_volume = int,
    min_density = int,
    max_density = int,
    min_gravity = int,
    max_gravity = int,
    min_escape = int,
    max_escape = int,
    min_radius = int,
    max_radius = int,
    min_orbit = int,
    max_orbit = int,
    min_rotation = int,
    max_rotation = int,
    search_term = string, (id,eq,search_term&id,st,search_term)
    has_moons = int, (-1: only moonless, 0: not filter, 1: has moons)
}
*/

export const fetchFilteredObjects = async (
    page,
    {
        filters: {
            include_body_types: { star, planets, dwarf_planets, asteroids, comets, moons },
            order_by,
            order_direction,
            min_radius,
            max_radius,
            min_orbit,
            max_orbit,
            // min_mass,
            // max_mass,
            search_term
        
        }
    }
    ) => {

    // const page = 1;

    const url = `${ALL_BODIES_URL}/?`
        +`${!star ? '&filter[]=bodyType,neq,Star' : ''}`
        +`${!planets ? '&filter[]=bodyType,neq,Planet' : ''}`
        +`${!dwarf_planets ? '&filter[]=bodyType,neq,Dwarf%20planet' : ''}`
        +`${!asteroids ? '&filter[]=bodyType,neq,Asteroid' : ''}`
        +`${!comets ? '&filter[]=bodyType,neq,Comet' : ''}`
        +`${!moons ? '&filter[]=bodyType,neq,Moon' : ''}`
        +`${min_radius ? `&filter[]=meanRadius,ge,${min_radius}` : ''}`
        +`${max_radius ? `&filter[]=meanRadius,le,${max_radius}` : ''}`
        +`${min_orbit ? `&filter[]=sideralOrbit,ge,${min_radius}` : ''}`
        +`${max_orbit ? `&filter[]=sideralOrbit,le,${max_radius}` : ''}`
        +`${search_term ? `&filter[]=englishName,sw,${search_term}` : ''}`
        +`&order=${order_by},${order_direction ? 'desc' : 'asc'}`
        +`&page=${page},20`;

    // console.log(url);

    return await fetch(url)
        .then(response => response.json())
        .then(response => response.bodies)
};


