import axios from 'axios';

export async function getLocations(address){
    if(address === ""){
        alert("Please input an address.");
        return [];
    }
    return axios(`https://api.foursquare.com/v2/venues/explore?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&query=lunch&near=${address}&v=20190724&limit=3`)
    .then(async (response) => {
        let ids = response.data.response.groups[0].items.map((item) => item.venue.id);
        return await getLocationsData(ids);
    }).catch(error => {
        console.log(error);
    });   
};

async function getLocationsData(ids){
    let locationsData = [];
    for(let a = 0; a < ids.length; a++){
        let locationData = await getSingleLocationData(ids[a]);
        locationsData.push(locationData);
    }
    return locationsData;
};

const getSingleLocationData = (locationId) => {
    return axios.get(`https://api.foursquare.com/v2/venues/${locationId}?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=20190724`)
    .then((response) => {
        return {
            name: response.data.response.venue.name,
            link: response.data.response.venue.shortUrl,
            rating: response.data.response.venue.rating,
            category: response.data.response.venue.categories[0].name 
        };
    }).catch((error) => {
        console.log(locationId, error);
    })
}
