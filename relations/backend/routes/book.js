const akses = require("express").Router();
const BukuModel = require("../models/book");

akses.route("/").get((req, res) => {
    BukuModel.find()
        .then((databook) => res.json(databook))
        .catch((err) => res.status(400).json("Error: " + err));
    }
);

akses.route("/add").post((req, res) => {
    BukuModel.create(req.body)
        .then((dataceatebook) => res.status(200).json(dataceatebook, "Data buku berhasil ditambahkan"))
        .catch((err) => res.status(400).json("Error: " + err));
    }
);

akses.route("/update/:id").get((req, res) => {
    BukuModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((dataupdatebook) => res.json(dataupdatebook, "Data buku berhasil diupdate"))
        .catch((err) => res.status(400).json("Error: " + err));
    }
);

akses.route("/delete/:id").delete((req, res) => {
    BukuModel.findByIdAndDelete(req.params.id)
        .then((datadeletebook) => res.json(datadeletebook, "Data buku berhasil dihapus"))
        .catch((err) => res.status(400).json("Error: " + err));
    }
);