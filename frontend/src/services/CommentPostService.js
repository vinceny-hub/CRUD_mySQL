import http from "../http-common";

class CommentPostService {
//   getAll() {
//     return http.get("/comment");
//   }

//   get(id) {
//     return http.get(`/comment/${id}`);
//   }

//   create(data) {
//     return http.post("/comment", data);
//   }

//   update(id, data) {
//     return http.put(`/comment/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/comment/${id}`);
//   }

//   deleteComment(id) {
//     return http.delete(`/comment/${id}`);
//   }

  deletePostComment(id) {
    return http.delete(`/comments/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/comment`);
//   }

//   findByTitle(description) {
//     return http.get(`/posts?description=${description}`);
//   }
}

export default new CommentPostService();
