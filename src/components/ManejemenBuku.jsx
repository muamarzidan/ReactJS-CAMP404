import React, { useEffect, useState } from 'react';
import TabelBuku from './TabelBuku';
import axios from 'axios';

function ManejemenBuku () {
    const [formMode, setFormMode] = useState("");
    const [books, setBooks] = useState([]);

    function showcreateFrom() {
        setFormMode("show");
    }
    function showEditForm() {
        setFormMode("show");
    }

    useEffect(() => {
        retrieveBooks();
    }, []);

    function retrieveBooks() {
        axios.get("http://localhost:4000/book")
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
            {formMode === "show" && (
                <div id='form' className='card py-2 my-3 bg-secondary'>
                    <div className='card-body'>
                        <h5 className='card-title text-white'>Form</h5>
                        <form className='row'>
                            <div className='col-6'>
                                <input type='text' name='judul' className='form-control mx-2' placeholder='judul' />
                            </div>
                            <div className='col-4'>
                                <input type='text' name='pengarang' className='form-control mx-2' placeholder='judul' />
                            </div>
                            <div className='col-2'>
                                <button className='btn btn-primary'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <TabelBuku showEdit={showEditForm} books={books}/>
        </div>
    );
}

export default ManejemenBuku;