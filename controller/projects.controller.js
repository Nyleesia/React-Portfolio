const Projects = require("../model/projects.model");

module.exports = {
    findAllProjects: function(req, res) {
        Projects
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findProjectById: function (req, res){
        Projects
        .findOne({_id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
        
    findProjectsByLanguages: function(req, res) {
        Projects
          .find({type: req.params.languages || req.job.languages})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    
    AddProject: function(req, res) {
        return Projects
        .create(req.body)
        .catch(err => res.status(422).json(err));
    },

    updateProject: function(req, res) {
        Projects
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    
      deleteProject: function(req, res) {
        Projects
          .deleteOne({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
    };
