//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const myBioSchema = new Schema({
    name: {
      type: String,
      trim: true,
      minlength: [200, 'Name length must be greater than 200'],
      required: [true, 'Authors name is required'],
      unique: true
    },
    about: {
      type: String,
      trim: true,
      minlength: [1000, 'About must be at least 1000 charaters long.'],
      required: [true, 'Pet type is required']
    },
    desc: {
      type: String,
      trim: true,
      minlength: [1000, 'Description must be at least 1000 charaters long.'],
      required: [true, 'Description is required']
    },
    skills: [],
    completed: {
      type: Boolean,
      required: true,
      default: false
    },
  }, {
    timestamps: true
  });
  
  //taskSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
  
  module.exports = mongoose.model('Bio', myBioSchema);