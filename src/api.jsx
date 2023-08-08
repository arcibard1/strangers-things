const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const fetchAllPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching all posts:", error);
        throw error;
    }
};

// can add more API calls in the future.



// i will add other API functions as you progress with project

export default fetchAllPosts;
