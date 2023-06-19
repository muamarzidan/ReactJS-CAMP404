import React from 'react';
import TabelBuku from './TabelBuku';

function ManejemenBuku () {
    return (
        <div className="container mt-3">
            <h1 className="text-center">Manejemen Buku</h1>
            <button className='btn btn-sm btn-primary' >Tambah Buku</button>

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
            <TabelBuku />
        </div>
    );
}

export default ManejemenBuku;