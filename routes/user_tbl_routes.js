var express=require('express');
var router=express.Router();
var users=require('../models/user_model');

router.get('/:id?',function(req,res,next){

    if(req.params.id){
        users.getUserById(req.params.id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        users.getAllUsers(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});

<<<<<<< HEAD
router.post('/',function(req,res,next){
=======
router.post('/',function(req, res, next){
>>>>>>> 87f2392eae39c4e680a8098fbe5c23fd9f95b779

    users.addUser(req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
});


router.put('/:id',function(req,res,next){

    users.updateUser(req.params.id,req.body,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){

    users.deleteUser(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;