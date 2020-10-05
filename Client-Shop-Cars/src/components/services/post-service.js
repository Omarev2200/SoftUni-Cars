const postService = {
  load: function (id, limit) {
    return fetch(
      `http://localhost:9999/api/car${id ? `/${id}` : ""}${
        limit ? `?limit=${limit}` : ""
      }`
    ).then((res) => res.json());
  },

  create: function (data) {
    return fetch(`http://localhost:9999/api/car/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    }).then((res) => res.json());
  },

  edit: function (id, post) {
    return fetch(`http://localhost:9999/api/car/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(post),
      credentials: "include",
    }).then((res) => res.json());
  },
  
  delete: function (id, post) {
    return fetch(`http://localhost:9999/api/car/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(post),
      credentials: "include",
    }).then((res) => res.json());
  },

  myAdCars: function (id) {
    return fetch(`http://localhost:9999/api/car/my-cars/${id}`).then((res) =>
      res.json()
    );
  },

  search: function (query) {
    return fetch(
      `http://localhost:9999/api/car/search?q=${query}`
    ).then((res) => res.json());
  },
};

export default postService;
