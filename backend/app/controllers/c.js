const db = require("../models/");
require('../middleware/auth')
const fs = require('fs')
// const userId = decodedToken.userId;
const Post = db.posts;
const Op = db.Sequelize.Op;

// exports.create = (req, res, next) => {
//   const newComment = new Comment ({
//     user_id: req.body.user_id,
//     message_id: req.body.message_id,
//     comment: req.body.commentInput,
//     createdAt: Utils.getSqlDate(),
//     updatedAt: Utils.getSqlDate(),
//   });

//   Comment.create(newComment, (err, data) => {
//     if(err) {
//         return res.status(400).json({ message: "From Back Impossible de créer le commentaire" });
//     }



// exports.create = (req, res) => {
  // if (!req.body.description) {
  //   res.status(425).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  exports.create = (req, res, next) => {
    // const postObject = JSON.parse(req.body)

    // let filename;
    
    

    const postObject = {

        description: req.body.description,
        user_Id: req.body.user_Id,
        username:  req.body.username,
        published: req.body.published ? req.body.published : false
      }


    


    delete postObject._id
    const post = new Post({
        ...postObject,
        //répertoire images
        imageUrl: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null,
        // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
         //initialisation des likes
        // likes: 0,
        // dislikes: 0,
        // usersLiked: [],
        // usersDisliked:[] 
    })
    post.save()
    .then(() => res.status(201).json({message: 'sauce enregistrée !'}))
    .catch(error => res.status(400).json({error}))
}
 





  // if (req.file) {
  //   imageUrl = `${req.protocol}://${req.get("host")}/images/${
  //     req.file.filename
  //   }`;
  // } else {
  //   imageUrl = null;
  // }
  
    // Validate request
    // if (!req.body.description) {
    //   res.status(400).send({
    //     message: "Content can not be empty!"
    //   });
    //   return;
    // }
    // const userID = res.locals.userID;
    // Create a Post


    // const post = {
      
      // post_id: req.body.post.id,
      // title: req.body.title,
      // imageUrl: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : 'no',
      // imageUrl: `${req.protocol}://${req.get("host")}/images/${ req.file.filename}`,



    //   description: req.body.description,
    //   user_Id: req.body.user_Id,
    //   username:  req.body.username,
    //   published: req.body.published ? req.body.published : false
    // };
  
    // Save Post in the database
  //   Post.create(post)
  //     .then(data => {
  //       res.send(data);
  //     })
  //     .catch(err => {
  //       res.status(503).send({
  //         message:
  //           err.message || "Some error occurred while creating the Post."
  //       });
  //     });
  // };

  exports.findAll = (req, res) => {
    const description = req.query.description;
    var condition = description ? { description: { [Op.like]: `%${description}%` } } : null;
  
    Post.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving posts."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Post.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Post with id=" + id
        });
      });
  };

//   exports.modifySauce = (req, res, next) => {
//     const sauceObject = req.file ?
//     {
//       ...JSON.parse(req.body.sauce),
//       imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//     }: {...req.body}
//     Sauce.updateOne({_id: req.params.id}, {...sauceObject, _id: req.params.id})
//     .then(sauce => res.status(200).json({message:'sauce modifié !'}))
//     .catch(error => res.status(400).json({ error }))
// }

// exports.update = (req, res, next) => {
 
//   const postObject = {

//      description: req.body.description,
//      user_Id: req.body.user_Id,
//      username:  req.body.username,
//     //  published: req.body.published ? req.body.published : false
//    }

//  delete postObject._id
//  const id = req.params.id;
//  const post = new Post({
//      ...postObject,
//      //répertoire images
//      imageUrl: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null,
   
//  })
//  post.update(req.body, {
//   where: { id: id }})
//  .then(() => res.status(201).json({message: 'sauce enregistrée !'}))
//  .catch(error => res.status(400).json({error}))
//  }


  // exports.update = (req, res) => {
  //   const id = req.params.id;
  //   const postObject = {

  //     description: req.body.description,
  //     // user_Id: req.body.user_Id,
  //     // username:  req.body.username,
  //     // published: req.body.published ? req.body.published : false
  //   }
  //   delete postObject._id
   
  //   const post = new Post({
  //     ...postObject,
  //     //répertoire images
  //     imageUrl: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null,
  //     // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  //      //initialisation des likes
  //     // likes: 0,
  //     // dislikes: 0,
  //     // usersLiked: [],
  //     // usersDisliked:[] 
  //   })
  //   post.update(req.body, {
  //     where: { id: id }
  //   })
  //     .then(num => {
  //       if (num == 1) {
  //         res.send({
  //           message: "Post was updated successfully."
  //         });
  //       } else {
  //         res.send({
  //           message: `Cannot update Post with id=${id}. Maybe Post was not found or req.body is empty!`
  //         });
  //       }
  //     })
  //     .catch(err => {
  //       res.status(500).send({
  //         message: "Error updating Post with id=" + id
  //       });
  //     });
  // };

//   exports.update = (req, res) => {

//     const postObject = {

//       description: req.body.description,
//       user_Id: req.body.user_Id,
//       username:  req.body.username,
//       published: req.body.published ? req.body.published : false
//     }
//     const id = req.params.id;
  
//     postObject.update(req.body, {
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Post was updated successfully."
//           });
//         } else {
//           res.send({
//             message: `Cannot update Comment with id=${id}. Maybe Comment was not found or req.body is empty!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error updating Post with id=" + id
//         });
//       });
//   };

  // exports.deleteSauce = (req, res, next) => {
  //   Sauce.findOne({ _id: req.params.id })
  //     .then(sauce => {
  //       const filename = sauce.imageUrl.split('/images/')[1]
  //       fs.unlink(`images/${filename}`, () => {
  //         Sauce.deleteOne({ _id: req.params.id })
  //           .then(() => res.status(200).json({ message: 'Sauce supprimée !'}))
  //           .catch(error => res.status(400).json({ error }))
  //       })
  //     })
  //     .catch(error => res.status(500).json({ error }))
  // }




  exports.delete = (req, res) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {
          const filename = post.imageUrl.split('/images/')[1]
          fs.unlink(`images/${filename}`, () => {
    const id = req.params.id;
  
    Post.destroy({
      where: { id: id }
    })
 
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Post was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Post with id=" + id
        });
      });
       })})
  };

  exports.deleteAll = (req, res) => {
    Post.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Posts were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all posts."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Post.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving posts."
        });
      });
  };