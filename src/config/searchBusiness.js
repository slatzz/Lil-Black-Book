// import axios from 'axios';

// const searchBusiness = ( {query, max = 10, key}, callback) =>{
//     axios.get('https://api.yelp.com/v3/businesses/search/location', {
//         key: key, 
//         max: max,
//         query: query, 
//         maxResults: 10
//     })
//     .done( query => {
//         callback(query);
//     })
//     .fail( responseJSON => {
//         responseJSON.error.errors.forEach( err => console.error("ERROR: ", err))   
//      })
// }
// export default searchBusiness;