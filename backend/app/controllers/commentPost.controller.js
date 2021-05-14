const db = require("../models/");
require('../middleware/auth')
// const userId = decodedToken.userId;
const Comment = db.comments;
const Op = db.Sequelize.Op;


exports.deletePostComment = (req, res) => {
    const id = req.params.id;
    // comment.findOne({ where: { post_id : req.params.id } })
    console.log(id)
    Comment.destroy({
      where: { id : id}
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
          message: "Could not delete Post1 with id=" + id
        });
      });
  };
