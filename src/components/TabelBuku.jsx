function TabelBuku({ showEdit, books }) {
    function editData(book) {
        showEdit(book);
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
                    {
                        books.map((book, index) => (
                            <tr key={index} >
                                <td>{index + 1}</td>
                                <td>{book.judul}</td>
                                <td>{book.pengarang}</td>
                                <td>
                                    <button className='btn btn-sm btn-warning mx-2' onClick={()=> editData(book)}>Edit</button>
                                    <button className='btn btn-sm btn-danger mx-2'>Hapus</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TabelBuku;