import axios from 'axios';

// axios.post('http://localhost:3000/users', {
//   name: "Rayyan",
//   age: 26
// });

axios.get('http://localhost:3000/users/1')
  .then(res => {
    console.log("Hi: ", res.data)
  })

