const express = require('express');
const router = express.Router();
const Projects = require("../controller/projects.controller");

router.get('/projects', (req, res) => {
    console.log(req.params);
    if (Projects) {
        Projects.findAllProjects(req, res)
    }      
    else {
        res.render("Could not load projects.").send();
    }
})

router.get('/getProject/:id', (req, res) => {
    console.log(req.params);
    let id = req.params.id;
    if (id) {
        Projects.findProjectById(req, res)
    }      
    else {
        res.render("Could not find that project.").send();
    }
})

router.get('/findProjects/:languages', (req, res) => {
    console.log(req.params);
    let languages = req.params.languages;
    if (languages) {
        Projects.findProjectsByLanguages(req, res)
    }      
    else {
        res.render("Could not find a project with that/those language(s).").send();
    }
})

router.post('/createProject', (req, res) => {
    console.log(req.body)
    Projects
    .AddProject(req,res)
    .then(dbModel => res.json(dbModel))
})

router.delete('/deleteProject/:id', (req, res) => {
    console.log(req.params)
    let id = req.params.id;
    if (id) {
        Projects.deleteProject(req, res)
    } 
    else {
        res.render("Could not delete that project.").send();
    }     
})

router.put('/updateProject/:id', (req, res) => {
    console.log(req.params)
    let id = req.params.id;
    if (id) {
        Projects.updateProject(req, res)
    } 
    else {
        res.render("Could not update that project.").send();
    }     
})


module.exports = router;
