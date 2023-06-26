//fetch api ->
initiolization()
let usersArray =[];
 function initiolization(){
    fetchusers("https://jsonplaceholder.typicode.com/users");
 }
 function fetchusers(url) {
    fetch(url)
//     .then((res) =>res.json())
//     .then((users) => {
//         usersArray.push(...users)
//     });

 }
 console.log()