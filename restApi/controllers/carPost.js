const models = require('../models');

module.exports = {
  get: (req, res, next) => {
    const limit = +req.query.limit;
    if (limit) {
      models.CarPost.find().populate('author').sort({ _id: -1 }).limit(limit)
        .then((CarPostes) => res.send(CarPostes))
        .catch(next);
      return;
    }
    models.CarPost.find().populate('author')
      .then((CarPostes) => res.send(CarPostes))
      .catch(next);
  },
  getOne: (req, res) => {
    const postId = req.params.id
    models.CarPost.findById(postId)
      .then(post => {
        res.status(200).json(post)
      }).catch((err) => {
        console.log(err)
    
      })
  },

  post: (req, res, next) => {
    const { model, price, imgUrl, mileage, year, description,contact, engine } = req.body;
    const { _id } = req.user;

    models.CarPost.create({model, price, imgUrl, mileage, year, description,contact, engine, author: _id })
      .then((createdCarPost) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { posts: createdCarPost } }),
          models.CarPost.findOne({ _id: createdCarPost._id })
        ]);
      })
      .then(([modifiedObj, CarPostObj]) => {
        res.send(CarPostObj);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { description } = req.body;
    models.CarPost.updateOne({ _id: id }, { description })
      .then((updatedCarPost) => res.send(updatedCarPost))
      .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.CarPost.deleteOne({ _id: id })
      .then((removedCarPost) => res.send(removedCarPost))
      .catch(next)
  }
};