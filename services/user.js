const db = require('./db');
const helper = require('../helper');

const config = require('../config');


async function createUser(user){
    const result = await db.query(
      `INSERT INTO users 
      (username, password) 
      VALUES 
      ('${user.username}', '${user.password}')`
    )
}

async function getUser(user){
    const rows = await db.query(
      `SELECT * from users WHERE Email="${(user.username)}" and Password="${user.password}"`
    );
    const data = helper.emptyOrRows(rows);
    
    return {
        data
      }
    
  }

async function updateUser(id,user){
    const rows=await db.query(
        `UPDATE users
        SET password=${user.password}
        WHERE userID=${id}`
    )

}

async function deleteUser(id){
    const rows=await db.query(
        `Delete from users
        where userID=${id}`
    )
}

module.exports[
    createUser,
    getUser,
    updateUser,
    deleteUser
]