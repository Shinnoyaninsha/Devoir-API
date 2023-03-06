const express = require('express');
const router = express.Router();
const users = require('../services/user');

//cree un user dans la base
  router.post('/', async function(req, res, next) {
      try {
        res.status(200).json(await users.create(req.body));
      } catch (err) {
        console.error(`Error while creating user`, err.message);
        next(err);
      }
    });

 //essaye de vérifier le user/mdp    
 router.get('/',async function(req,res,next){
    try {
        res.status(200).json(await users.getUser(req.body));
    } catch (err) {
      console.error(`Error while getting users `, err.message);
      next(err);
    }
  });

 //modifie le user
 router.patch('/:id', async function(req,res,next){
    try {
        res.status(200).json(await users.updateUser(req.params.id,req.body));
    } catch (err) {
      console.error(`Error while updating users `, err.message);
      next(err);
    }
  });
 
  //supprime le user
  router.delete('/id',async function (req,res,next){
    try {
        res.status(200).json(await users.deleteUser(req.params.id));
    } catch (err) {
      console.error(`Error while deleting users `, err.message);
      next(err);
    }
  });
  module.exports = router;  