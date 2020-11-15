import data from './data.js';

let addPlace = (name, city, state, rating, review) => {
    data.push({name: name, city: city, state: state, rating: rating, review: review});
}
let getAllPlaces = () => {
    return data;
}
let server = {addPlace: addPlace, getAllPlaces: getAllPlaces};
export default server;