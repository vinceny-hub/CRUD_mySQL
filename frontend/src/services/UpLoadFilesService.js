import http from "../http-common";

class UploadFilesService {
//   upload(file, onUploadProgress) {
//     let formData = new FormData();

//     formData.append("file", file);

//     return http.post("/upload", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data"
//       },
//       onUploadProgress
//     });
//   }

//   getFiles() {
//     return http.get("/imageUrl");
//   }


upload(formData) {
  return http.post("/posts", formData);
}
update(id, formData) {
  return http.put(`/posts/${id}`, formData);
}
 }

export default new UploadFilesService()