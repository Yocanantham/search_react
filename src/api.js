/* Axios is a library for making the HTTP requests and response as recat isn't reponsible for any kind of 
request related entities in an application. */

// * 'FETCH'is also a library but it is not widely used.

import axios from "axios";
// -> Async and await methods should be used.
const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization:
                "Client-ID ouoyBETadyW9T53026pT7LBW9P9U3If1B0jX5vmj52U",
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
    // * The term we are returning are from the object the api returned here.
};

export default searchImages;

/*  
! Default axios get request can be defined

*    axios.get('url',{
*      headers: {
?        ? The authorization format varies depends on the api used.
->       -> For unsplash.com.
*            Authorization: 'Client-ID (ACCESS KEY)',  
*        },
*        params: {
*            query : '(search term)'
*        },
*    }); 

*/
