const express = require("express");
const router = express.Router();
const Company = require("../models/company");

// request: GET all articles
router.get("/", (req, res) => {
  Company.find()
    .then((company) => res.json(company))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// request: POST new article
router.post("/add", (req, res) => {
  const newCompany = new Company({
    name: req.body.name,
    address: req.body.address,
    typename: req.body.typename
  });

  newCompany
    .save()
    .then(() => res.json("company has been created successfully."))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// request: FIND article by ID
router.get("/:id", (req, res) => {
  Company.findById(req.params.id)
    .then((company) => res.json(company))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// request: FIND article by ID and update
router.put("/update/:id", (req, res) => {
  Company.findById(req.params.id)
    .then((company) => {
      company.name = req.body.name;
      company.address = req.body.address;
      company.typename = req.body.typename;


      company
        .save()
        .then(() => res.json("company has been updated successfully."))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// request: FIND article by ID and delete
router.delete("/:id", (req, res) => {
  Company.findByIdAndDelete(req.params.id)
    .then(() => res.json("company has been deleted successfully."))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
