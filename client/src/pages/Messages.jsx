export const Messages = () => {
    const messages = [
        {
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
            date: "2023-07-10",
            message: "Lorem ipsum dolor sit amet."
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "janesmith@example.com",
            date: "2023-07-09",
            message: "Nullam nec tincidunt ipsum."
        },
        {
            id: 3,
            name: "David Johnson",
            email: "davidjohnson@example.com",
            date: "2023-07-08",
            message: "Integer placerat metus quis nisl."
        }
    ];
    return (
        <main className="mb-5">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <h1 className="text-center mb-5">Your Messages</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">İsim</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gönderilme Tarihi</th>
                                <th scope="col">Mesaj</th>
                                <th scope="col">İşlem</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message) => (
                                <tr key={message.id} className="align-middle" >
                                    <td>{message.name}</td>
                                    <td>{message.email}</td>
                                    <td>{message.date}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#message_modal_${message.id}`}>
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <div className="modal fade" id={`message_modal_${message.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Message</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        {message.message}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger"><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}