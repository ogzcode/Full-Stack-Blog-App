import { useDispatch, useSelector } from "react-redux";
import { fetchMessageAsyncThunk, deleteMessageAsyncThunk } from "../redux/slice/messageSlice";
import { useEffect } from "react";

export const Messages = () => {
    const { messageList } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessageAsyncThunk());
    }, []);

    const handleDelete = (id) => {
        dispatch(deleteMessageAsyncThunk(id));
    }

    return (
        <main className="my-5">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <h1 className="text-center mb-5">Your Messages</h1>
                    <div className="scrollable-table">
                        {
                            messageList.length > 0 ? (
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="px-0 py-4" scope="col">İsim</th>
                                            <th className="px-0 py-4" scope="col">Email</th>
                                            <th className="px-0 py-4" scope="col">Gönderilme Tarihi</th>
                                            <th className="px-0 py-4" scope="col">Mesaj</th>
                                            <th className="px-0 py-4" scope="col">İşlem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            messageList.map((message) => (
                                                <tr key={message._id} className="align-middle" >
                                                    <td>{message.name}</td>
                                                    <td>{message.email}</td>
                                                    <td>{message.createdAt}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target={`#message_modal_${message._id}`}>
                                                            <i className="bi bi-eye"></i>
                                                        </button>
                                                        <div className="modal fade" id={`message_modal_${message._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(message._id)}><i className="bi bi-trash"></i></button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="alert alert-warning" role="alert">
                                    <h4 className="alert-heading">No Message</h4>
                                    <p>There is no message.</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}