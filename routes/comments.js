const express=require('express');
const router=express.Router();
const posts=require('../services/comments');


//ajouter un commentaire dans la base de données

router.post('/', async function(req,res,next){
    try{
        res.status(200).json(await comments.createComments(req.body));
    } catch (err) {
        console.error('Error while creating the comment', err.message);
    }
})

//récupérer les commentaires et leur contenu
router.get('/:postid',async function(req,res,next) {
    try{
        res.status(200).json(await comments.getComments(re.params.postid,req.body));
    } catch (err){
        console.error('Error while getting comments', err.message);
        next(err);
    }
});

//modifier un commentaire
router.patch('/:id', async function (req,res,next){
    try{
        res.status(200).json(await posts.updateComment(req.params.id,req.body))
    } catch (err) {
        console.error('Error while modifying your post',err.message);
        next(err);
    }

});

//supprimer un commentaire
router.delete('/:commentID', async function (req,res,next){
    try{
        res.status(200).json(await deleteComment(req.params.commentID))
    } catch (err) {console.error('Error in deleting your post',err.message);
    next(err);
    }
});

module.exports = router;