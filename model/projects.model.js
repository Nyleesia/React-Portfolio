const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema ({
    name : {
        type :  String, 
        required : true,
        trim: true
    },

    URL : {
        type : String, 
        required : true, 
    },
    
    repo : {
        type :  String, 
        required : true,
        trim: true, 
        default:false
    },

    languages : {
        type :  String, 
        required : true,
        trim: true, 
        default: false
    },

    photo : {
        type :  String, 
        required : false,
        data: Buffer
    },

    addedOn : {
        type : Date, 
        required : true, 
        default: Date.now
    }
})

const Projects = mongoose.model("Projects", ProjectsSchema);

module.exports = Projects;