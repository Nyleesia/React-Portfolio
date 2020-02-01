// Get Dependencies
const express = require("express");
const path = require("path");
const cors = require("cors");

// Define port
const localhost = '127.0.0.1';
const PORT = process.env.PORT || 3001;

// Get the database dependency
const mongoose = require("mongoose");

// Define app
const app = express();

// Add API routes
const projectRoutes = require("./server/routes/projects.routes"); 

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

// Connect to the Mongo DB
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/React-Portfolio";
mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
  if (err) {
    console.log (`Error: Could not connect to database`)
  }
  else {
    console.log ("Database created...");
  }
});

app.use(projectRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(function(req, res) {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}

// Start the server
app.listen(PORT, localhost, () => {
  console.log(`🌎  ==> Server running at http://${localhost}:${PORT}.../`);
});