const express=require('express');
const router=express.Router();
const posts=require('../services/posts');


//ajouter un post dans la base de données

router.post('/', async function(req,res,next){
    try{
        res.status(200).json(await posts.createPosts(req.body));
    } catch (err) {
        console.error('Error while creating the post', err.message);
    }
})

//récupérer les posts et leur contenu
router.get('/',async function(req,res,next) {
    try{
        res.status(200).json(await posts.getPosts(req.query));
    } catch (err){
        console.error('Error while getting posts', err.message);
        next(err);
    }
});

//modifier un post
router.patch('/:postid', async function (req,res,next){
    try{
        res.status(200).json(await posts.updatePosts(req.params.postid,req.body))
    } catch (err) {
        console.error('Error while modifying your post',err.message);
        next(err);
    }

});

//supprimer un post
router.delete('/:postid', async function (req,res,next){
    try{
        res.status(200).json(await deletePosts(req.params.id))
    } catch (err) {console.error('Error in deleting your post',err.message);
    next(err);
    }
});


module.exports = router;