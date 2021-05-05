import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:8080/api';
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user', user.accessToken)


// export default axios.create({
//     baseURL: "http://localhost:8080/api",
//     headers: {
//       "Content-type": "application/json"
//     }
//   });
export default() => {
 
    let token = localStorage.getItem('token')
    if (!token) {
        token = localStorage.setItem('token','')
    }
    return axios.create({
        baseURL : 'http://localhost:8080',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-type': 'application/json'
        }
    }
    )
    }