const express= require("express");
const router= express.Router();
const alertData= require('../model/alert');
const mongoose = require('mongoose')



router.post(`/`,async (req,res)=>{
      const alertDataList=new alertData({
            email:req.body.email,
            msg:req.body.msg,
            bookID:req.body.bookID,
            date:req.body.date,


      });
      alertDataList.save().then((create)=>{
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
      const alertDataList = await alertData.find();
      if (!alertDataList) {
            res.status(500).json({
                  success: false,
            });
      } else {
            res.status(200).send(alertDataList);
      }
      res.send(alertDataList);
});

// list of available blood in dublin
router.post(`/end-date`,async(req,res)=>{
      const endQuery= await alertData.find(
            {
                  date:req.body.date,
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
      // res.send(alertDataList);
});

// list of available blood in dublin
router.post(`/email`,async(req,res)=>{
      const endQuery= await alertData.find(
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
      // res.send(alertDataList);
});
//
// // filter on the home page
// router.post(`/name`,async(req,res)=>{
//       const requestQuery1= await alertData.find(
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
      const alertQuery1= await alertData.findOne({_id:req.body.id}, function(err, book){
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
//       "alertDate":"alertDate",