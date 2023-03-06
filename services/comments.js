const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function createComments(postid,comment){
  const result=await db.query(
      `INSERT INTO comments 
      (author,content,post)
      VALUES 
      (${comment.author},${comment.content},${postid})`
  );
  
} 
async function getComments(postID){ //renvoie tous les commentaires liés à un post particulier, je pense pas utile d'avoir la liste brute de commentaires
  const rows = await db.query(
    `SELECT * from comments
    Where postID=${postID}`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data,
  }
}

async function updateComment(id,comment){
  const rows=await db.query(
    `UPDATE comments
    Set content=${comment.content}
    Where commentID=${id}`
  )
}

async function deleteComment(id){
  const rows= await db.query(
    `DELETE FROM comment
    where commentID=${id}`
  )
}

module.exports = {
  getComments,
  createComments,
  updateComment,
  deleteComment
}