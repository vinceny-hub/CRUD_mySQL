import axios from "axios";
let user = JSON.parse(localStorage.getItem('user'));
export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    'Authorization': 'Bearer ' + user.accessToken,
    "Content-type": "application/json",
    "Content-Type": "multipart/form-data"
  }
});


// export default() 
 
//   let user = JSON.parse(localStorage.getItem('user'));
//     // if (!token) {
//     //     token = localStorage.setItem('token','')
//         // console.log(token)
//     // }
//     if (user && user.accessToken) {
//     return axios.create({
//         baseURL : 'http://localhost:8080/api',
//         headers: {
//             'Authorization': 'Bearer ' + user.accessToken,
//             'Content-type': 'application/json'
//         }
//     }
//     )}
    
//     }


    // export default function authHeader() {
    //   let user = JSON.parse(localStorage.getItem('user'));
    
    //   if (user && user.accessToken) {
    //     return { Authorization: 'Bearer ' + user.accessToken };
    //   } else {
    //     return {};
    //   }
    // }

    // const token =  JSON.parse(localStorage.getItem('user').accessToken)