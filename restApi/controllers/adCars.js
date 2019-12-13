const models = require('../models');

module.exports = {
  get: (req, res, next) => {
    const limit = +req.query.limit;
    if (limit) {
      models.AdCars.find().populate('author').sort({ _id: -1 }).limit(limit)
        .then((AdCars) => res.send(AdCars))
        .catch(next);
      return;
    }
    models.AdCars.find().populate('author')
      .then((AdCars) => res.send(AdCars))
      .catch(next);
  },
  
getAll: (req, res, next) => {
    
  console.log(req.params.id)
    
    models.AdCars.find({'author': req.params.id})
      .then((AdCars) => res.send(AdCars))
      .catch(next);
  },
  
  getOne: (req, res) => {
    
    const postId = req.params.id
    models.AdCars.findById(postId)
      .then(post => {
        res.status(200).json(post)
      }).catch((err) => {
        console.log(err)
    
      })
  },

  post: (req, res, next) => {
    const { model, price, imgUrl, mileage, year, description,contact, engine, speed, color } = req.body;
    const { _id } = req.user;

    models.AdCars.create({model, price, imgUrl, mileage, year, description,contact, engine, speed, color, author: _id })
      .then((createdAdCars) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { posts: createdAdCars } }),
          models.AdCars.findOne({ _id: createdAdCars._id })
        ]);
      })
      .then(([modifiedObj, AdCarsObj]) => {
        res.send(AdCarsObj);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { model, price, imgUrl, mileage, year, description,contact, engine, speed, color } = req.body;
    models.AdCars.updateOne({ _id: id , model, price, imgUrl, mileage, year, description,contact, engine, speed, color})
      .then((updatedAdCars) => res.send(updatedAdCars))
      .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.AdCars.deleteOne({ _id: id })
      .then((removedAdCars) => res.send(removedAdCars))
      .catch(next)
  },

  search: (req, res) => {
    const query = req.query.q;
    
    models.AdCars.find({ })
        .then((articles) => {
            const filteredArticles = articles.filter((a) => {
                return a.model.toLowerCase().includes(query.toLowerCase());
            });
            const context = {
                query: query,
                articles: filteredArticles
            };

            res.send(context);
        })
        .catch(console.error);
}
};