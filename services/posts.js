const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function createPosts(post){
  const result=await db.query(
      `INSERT INTO posts 
      (author,content)
      VALUES 
      (${post.author},${post.content})`
  );
  
} 
async function getPosts(){
  const rows = await db.query(
    `SELECT * from posts`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data,
  }
}

async function updatePosts(id,post){
  const rows=await db.query(
    `UPDATE posts
    Set content=${post.content}
    Where postID=${id}`
  )
}

async function deletePosts(id){
  const rows= await db.query(
    `DELETE FROM posts
    where postID=${id}`
  )
}

module.exports = {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts
}