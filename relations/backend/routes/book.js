const akses = require("express").Router();
const BookModel = require("../models/book");

akses.route("/").get((req, res) => {
    BookModel.find()
        .then((databook) => res.json(databook))
        .catch((err) => res.status(400).json({ error: true, message: "Error adding book", details: err.message }));
    }
);

akses.route("/add").post((req, res) => {
    BookModel.create(req.body)
        .then((datacreatebook) => res.status(200).json({ message: "Data buku berhasil ditambahkan", data: datacreatebook }))
        .catch((err) => res.status(400).json({ error: true, message: "Error adding book", details: err.message }));    }
);

akses.route("/update/:id").put((req, res) => {
    BookModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((dataupdatebook) => res.status(200).json({message: "Data buku berhasil diupdate", data: dataupdatebook}))
        .catch((err) => res.status(400).json({ error: true, message: "Error adding book", details: err.message }));
    }
);

akses.route("/delete/:id").delete((req, res) => {
    BookModel.findByIdAndDelete(req.params.id)
        .then((datadeletebook) => res.json(datadeletebook, "Data buku berhasil dihapus"))
        .catch((err) => res.status(400).json({ error: true, message: "Error adding book", details: err.message }));
    }
);

module.exports = akses;