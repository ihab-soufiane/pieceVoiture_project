const asyncHandler = require('express-async-handler');

// Create
exports.createOne = (Model) =>
  asyncHandler(async (req, res) => {
    const newDoc = await Model.create(req.body);
    res.status(201).json({ data: newDoc });
  });

// Read all
exports.getAll = (Model) =>
  asyncHandler(async (req, res) => {
    const docs = await Model.find();
    res.status(200).json({ data: docs });
  });

// Read one
exports.getOne = (Model) =>
  asyncHandler(async (req, res) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(200).json({ data: doc });
  });

// Update
exports.updateOne = (Model) =>
  asyncHandler(async (req, res) => {
    const updatedDoc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedDoc) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(200).json({ data: updatedDoc });
  });

// Delete
exports.deleteOne = (Model) =>
  asyncHandler(async (req, res) => {
    const deletedDoc = await Model.findByIdAndDelete(req.params.id);
    res.status(200).json({ data: 'user was deleted' });

    if (!deletedDoc) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(204).end();
  });
  exports.deleteAll = (Model) =>
  asyncHandler(async (req, res) => {
    const deletedDoc = await Model.deleteMany();
    if (!deletedDoc) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(204).end();
  });

