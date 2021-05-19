const db = require("../models/");
require('../middleware/auth')
const fs = require('fs')

const Post = db.posts;
const Op = db.Sequelize.Op;


  exports.create = (req, res, next) => {
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
      
    })
    post.save()
    .then(() => res.status(201).json({message: 'sauce enregistrée !'}))
    .catch(error => res.status(400).json({error}))
  }
 
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

  exports.update = (req, res) => {
    const id = req.params.id;
    if (req.body.description != null){ 
     
    Post.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Post was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Post with id=${id}. Maybe Post was not found or req.body is empty!`
          });
        }
      })
      
      .catch(err => {
        res.status(500).send({
          message: "Error updating Post with id=" + id
        });
      });
    }else{
    //   const postObject = {

    //     description: req.body.description,
    //   }
    
    //   const post = new Post({
    //     ...postObject,
  
    //     //répertoire images
    //     // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` ,
    //     imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`           
      
    // })

    // exports.modifySauce = (req, res, next) => {
      // const postObject = req.file ?
      // {
      
      //   imageUrl : `${req.protocol}://${req.get('host')}/images/${req.file.filename}` 

      // }: {...req.body}

      const post = new Post({
        //     ...postObject,
   
        //     //répertoire images
            // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` ,
        //     imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`           
          
         })
         let imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        console.log(imageUrl)
      let newImageUrl =  `${req.protocol}://${req.get('host')}/images/${req.file.filename}` 
      let id = req.params.id
      console.log(id)
      if (newImageUrl) {
        const filename = imageUrl.split("/images")[1];
        fs.unlink( {
          where: { imageUrl : id }(`images/${filename}`, (err) => {
          if (err) console.log(err);
          else {
            console.log(`Deleted file: images/${filename}`);
          }
        })
      })}
  
    Post.destroy({
      where: { id: id }
    })
    
      .then(post => res.status(200).json({message:'sauce modifié !'}))
      .catch(error => res.status(400).json({ error }))
  }






    // post.update(req.body, {
    //   where: { id: id }
    // })
    //   .then(num => {
    //     if (num == 1) {
    //       res.send({
    //         message: "Post was updated successfully."
    //       });
    //     } else {
    //       res.send({
    //         message: `Cannot update IMAGE with id=${id}. Maybe IMAGE was not found or req.body is empty!`
    //       });
    //     }
    //   })
      
    //   .catch(err => {
    //     res.status(500).send({
    //       message: "Error updating Post with id=" + id
    //     });
    //   });
  }
  

  exports.delete = (req, res) => {
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