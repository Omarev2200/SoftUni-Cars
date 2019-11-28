const userService = {
    register: function (data) {
      return fetch(`http://localhost:9999/api/user/register`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.json())
      .then(data => {
        localStorage.setItem('username',data.username)
      })
    },
  
    login: function (data) {
      return fetch(`http://localhost:9999/api/user/login`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      }).then(res => res.text())
      .then(data=>{
        console.log(data)
      })
      .catch(err => {
        // console.log(err)
      })
    },
  
    logout: function () {
      return fetch(`http://localhost:9999/api/user/logout`, {
        method: 'POST',
        credentials: 'include'
      }).then(res => res.text());
    }
  
  };
  
  export default userService;