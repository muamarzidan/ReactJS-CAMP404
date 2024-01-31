import React, { useEffect, useState } from 'react';
import TabelBuku from './TabelBuku';
import axios from 'axios';

function ManejemenBuku() {
    const [formMode, setFormMode] = useState("");
    const [books, setBooks] = useState([]);
    const [inputForm, setInputForm] = useState();

    function showcreateFrom() {
        setInputForm("");
        setFormMode("create");
    }
    function showEditForm(book) {
        setInputForm(book);
        setFormMode("edit");
    }
    function handleJudul(event) {
        setInputForm({ ...inputForm, judul: event.target.value });
    }
    function handlePengarang(event) {
        setInputForm({ ...inputForm, pengarang: event.target.value });
    }
    function submitForm(event) {
        event.preventDefault();
        if (formMode === "create") {
            axios.post("http://localhost:3000/book/add", inputForm)
                .then(() => {
                    alert("Data berhasil di buat");
                    retrieveBooks();
                }).catch((error) => {
                    console.log(error.response)
                })
        }
        if (formMode === "edit") {
            axios.put("http://localhost:3000/book/update/" + inputForm._id, inputForm)
                .then(() => {
                    retrieveBooks();
                    alert("Data berhasil di ubah");
                }).catch((error) => {
                    console.log(error.response)
                })
        }
    }

    useEffect(() => {
        retrieveBooks();
    }, []);
    function retrieveBooks() {
        axios.get("http://localhost:3000/book")
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center">Manejemen Buku</h1>
            <button className='btn btn-sm btn-primary' onClick={showcreateFrom} >Tambah Buku</button>
            {formMode !== "" && (
                <div id='form' className='card py-2 my-3 bg-secondary'>
                    <div className='card-body'>
                        <h5 className='card-title text-white'>Form</h5>
                        <form className='row' onSubmit={submitForm}>
                            <div className='col-6'>
                                <input type='text' name='judul' className='form-control mx-2' placeholder='judul' onChange={handleJudul} value={inputForm.judul || ""} />
                            </div>
                            <div className='col-4'>
                                <input type='text' name='pengarang' className='form-control mx-2' placeholder='pengarang' onChange={handlePengarang} value={inputForm.pengarang || ""} />
                            </div>
                            <div className='col-2'>
                                <button className='btn btn-primary'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <TabelBuku showEdit={showEditForm} books={books} />
        </div>
    );
}

export default ManejemenBuku;