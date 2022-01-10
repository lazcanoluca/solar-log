const API_BASE_URL = 'https://source.unsplash.com';
const FEATURED_URL = `${API_BASE_URL}/featured`;

// returns the featured image of the search term
export const featuredImage = (search_term) =>
    `${FEATURED_URL}/?${search_term}`