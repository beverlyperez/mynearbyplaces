import data from './data.js';

let addPlace = (name, city, state, rating) => {
    data.push({name: name, city: city, state: state, rating: rating});
}
let getAllPlaces = () => {
    return data;
}
let server = {addPlace: addPlace, getAllPlaces: getAllPlaces};
export default server;