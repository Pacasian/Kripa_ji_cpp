const express= require("express");
const router= express.Router();
const addBookData= require('../model/add_book_model');
const mongoose = require('mongoose')



router.post(`/`,async (req,res)=>{
      const addBookDataList=new addBookData({
            name:req.body.name,
            img:req.body.img,
            author:req.body.author,
            dept:req.body.dept,
            price:req.body.price,
  
      });
      addBookDataList.save().then((create)=>{
            console.log("__created new request___");
            res.status(200).json(create);

      }).catch(
            (err)=>{
                  res.status(500).json({
                        error:err,
                        success:false,
                  });
                  console.log(err);
            }
      )
});

router.get(`/`,async (req,res)=>{
      const addBookDataList = await addBookData.find();
      if (!addBookDataList) {
            res.status(500).json({
                  success: false,
            });
      } else {
            res.status(200).send(addBookDataList);
      }
      res.send(addBookDataList);
});

// list of available blood in dublin
router.post(`/dept`,async(req,res)=>{
      const requestQuery= await addBookData.find(
            {
                  dept:req.body.dept,
            }
      ).then((create)=>{
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            console.log(create.length);
            if (create.length > 0) {
                  // res.json(true);
                  res.json(create,);
            } else res.json(false);
      }).catch((err)=>{
            console.log("error");
      });
});

// filter on the home page
router.post(`/name`,async(req,res)=>{
      const requestQuery1= await addBookData.find(
            {
                  name:req.body.name,
            }
      );
      console.log(requestQuery1);
      if(!requestQuery1){
            res.status(500).json({
                  success:false
            });
      }else{
            res.status(200).send(requestQuery1);
      }
});


// filter on the home page
router.post(`/id`,async(req,res)=>{
      const requestQuery1= await addBookData.findOne({_id:req.body.id}, function(err, book){
            if (err){
                  console.log("errr",err);
                  //return done(err, null);
            }else{
                  res.status(200).send(book);
            }

      });
      // console.log(requestQuery1);
      // if(!requestQuery1){
      //       res.status(500).json({
      //             success:false
      //       });
      // }else{
      //       res.status(200).send(requestQuery1);
      // }
});


module.exports= router;


