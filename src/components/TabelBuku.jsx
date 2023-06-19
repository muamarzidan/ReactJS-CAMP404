import react from 'react';

function TabelBuku({ showEdit }) {
    function editData() {
        showEdit();
    }
    return (
        <div>
            <h1 className="text-center">Tabel Data Buku</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Pengarang</th>
                        <th className='col-3'>Aksi</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Belajar React</td>
                        <td>Abdul Kadir</td>
                        <td>
                            <button className='btn btn-sm btn-warning mx-2' onClick={()=> editData()}>Edit</button>
                            <button className='btn btn-sm btn-danger mx-2'>Hapus</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TabelBuku;