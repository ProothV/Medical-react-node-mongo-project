const express = require("express");
const router = express.Router();
const Medicine = require("../models/Medicine");

// 🟢 GET all medicines
router.get("/", async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: "Error fetching medicines", error });
  }
});

// 🔵 GET a single medicine by ID
router.get("/:id", async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) return res.status(404).json({ message: "Medicine not found" });
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ message: "Error fetching medicine", error });
  }
});

// 🟡 ADD a new medicine
router.post("/", async (req, res) => {
  const { name, price, category, description, image } = req.body;
  const newMedicine = new Medicine({ name, price, category, description, image });

  try {
    const savedMedicine = await newMedicine.save();
    res.status(201).json(savedMedicine);
  } catch (error) {
    res.status(400).json({ message: "Error adding medicine", error });
  }
});

// 🟠 UPDATE an existing medicine
router.put("/:id", async (req, res) => {
  try {
    const updatedMedicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMedicine) return res.status(404).json({ message: "Medicine not found" });
    res.json(updatedMedicine);
  } catch (error) {
    res.status(500).json({ message: "Error updating medicine", error });
  }
});

// 🔴 DELETE a medicine
router.delete("/:id", async (req, res) => {
  try {
    const deletedMedicine = await Medicine.findByIdAndDelete(req.params.id);
    if (!deletedMedicine) return res.status(404).json({ message: "Medicine not found" });
    res.json({ message: "Medicine deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting medicine", error });
  }
});

module.exports = router;
