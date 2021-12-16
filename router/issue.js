const express= require("express");
const router= express.Router();
const issueData= require('../model/issue');
const mongoose = require('mongoose')



router.post(`/`,async (req,res)=>{
      const issueDataList=new issueData({
            email:req.body.email,
            bookID:req.body.bookID,
            subDate:req.body.subDate,
            issueDate:req.body.issueDate,


      });
      issueDataList.save().then((create)=>{
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
      const issueDataList = await issueData.find();
      if (!issueDataList) {
            res.status(500).json({
                  success: false,
            });
      } else {
            res.status(200).send(issueDataList);
      }
      res.send(issueDataList);
});

// list of available blood in dublin
router.post(`/end-date`,async(req,res)=>{
      const endQuery= await issueData.find(
            {
                  subDate:req.body.subDate,
            }
      )
      console.log(endQuery)
      if (!endQuery) {
            res.status(500).json({
                  success: false,
            });
      } else {
            res.status(200).send(endQuery);
      }
      // res.send(issueDataList);
});
// list of available blood in dublin
router.post(`/search-email`,async(req,res)=>{
      const endQuery= await issueData.find(
            {
                  email:req.body.email,
            }
      )
      console.log(endQuery)
      if (!endQuery) {
            res.status(500).json({
                  success: false,
            });
      } else {
            res.status(200).send(endQuery);
      }
      // res.send(issueDataList);
});
//
// // filter on the home page
// router.post(`/name`,async(req,res)=>{
//       const requestQuery1= await issueData.find(
//             {
//                   name:req.body.name,
//             }
//       );
//       console.log(requestQuery1);
//       if(!requestQuery1){
//             res.status(500).json({
//                   success:false
//             });
//       }else{
//             res.status(200).send(requestQuery1);
//       }
// });
//

// filter on the home page
router.post(`/id`,async(req,res)=>{
      const issueQuery1= await issueData.findOne({_id:req.body.id}, function(err, book){
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


// "email":"email",
//       "bookID":"bookID",
//       "subDate":"subDate",
//       "issueDate":"issueDate",