import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get all buyers
router.get("/", async (req, res) => {
  let collection = await db.collection("buyers");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// Get a single buyer by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("buyers");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Create a new buyer
router.post("/", async (req, res) => {
  let newDocument = {
    name: req.body.name,
    mobile_number: req.body.mobile_number,
    email: req.body.email,
    password: req.body.password,
    items: req.body.items
  };
  let collection = await db.collection("buyers");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(201);
});

// Update a buyer by id
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: {
      name: req.body.name,
      mobile_number: req.body.mobile_number,
      email: req.body.email,
      password: req.body.password,
      items: req.body.items
    }
  };

  let collection = await db.collection("buyers");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// Delete a buyer
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("buyers");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;
