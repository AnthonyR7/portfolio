const Bio = require("../models/bio.js");
var nodemailer = require('nodemailer');

function ValData(uName, uEmail, uMessage){
  var missing = []
  if (uName == ""){
    missing.push("Name is required.")
  }
  if (uEmail == ""){
    missing.push("Email is required.")
  }
  if (uMessage == ""){
    missing.push("Message is required.")
  }
  return missing
}

module.exports = {
    show: (req, res) => {

        Pet.find({})
        .then( author => {
            res.json(author);
        })
        .catch( error => {
            console.log("Get All Error: ", error);
            res.json(error);
        });
    },
    sendEmail: (req, res) => {
      var success = true
      if (ValData(req.body.data['subject'],req.body.data['email'],req.body.data['message']) == ""){
  
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'webdevantonyr@gmail.com',
              pass: 'hamsters28!'
            }
        });
          
        var mailOptions = {
          from: req.body.data['email'],
          to: 'webdevantonyr@gmail.com',
          subject: req.body.data['subject'],
          text: req.body.data['message']
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error, "Sorry, did not work");
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        res.json(success)
        console.log("email was sent js controller")
      }
      // The missing variable from Func ValData was hit, thus this else will render the missing input
      else{
        console.log("else was hit and no email was sent js controller",
        ValData(req.body.data['subject'],req.body.data['email'],req.body.data['message']));
        res.json(ValData(req.body.data['subject'],req.body.data['email'],req.body.data['message']))
      }
    }
}