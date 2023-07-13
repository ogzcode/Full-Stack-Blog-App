import { useDispatch, useSelector } from "react-redux";
import { fetchMessageAsyncThunk, deleteMessageAsyncThunk } from "../redux/slice/messageSlice";
import { useEffect, useState } from "react";

import { Modal } from "../components/Modal";

export const Messages = () => {
    const { messageList } = useSelector((state) => state.message);
    const [showModal, setShowModal] = useState(false);
    const [messageId, setMessageId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessageAsyncThunk());
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm("Bu mesajı silmek istediğinizden emin misiniz?");
        if (!confirm) return;
        dispatch(deleteMessageAsyncThunk(id));
    };

    const handleView = (id) => {
        setMessageId(id);
        setShowModal(true);
    };

    return (
        <main className="my-5">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <h1 className="text-center mb-5">Mesajlarınız</h1>
                    {
                        messageList.length > 0 ? (
                            <div className="scrollable-table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="px-0 py-2" scope="col">İsim</th>
                                            <th className="px-0 py-2" scope="col">Email</th>
                                            <th className="px-0 py-2" scope="col">Gönderilme Tarihi</th>
                                            <th className="px-0 py-2" scope="col">Mesaj</th>
                                            <th className="px-0 py-2 text-end" scope="col">İşlem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            messageList.map((message) => (
                                                <tr key={message._id} className="body-row align-middle" >
                                                    <td>{message.name}</td>
                                                    <td>{message.email}</td>
                                                    <td>{message.createdAt}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-success btn-sm" onClick={() => handleView(message._id)}>
                                                            <i className="bi bi-eye"></i>
                                                        </button>
                                                    </td>
                                                    <td className="text-end">
                                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(message._id)}><i className="bi bi-trash"></i></button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>

                        ) : (
                            <div className="alert alert-warning" role="alert">
                                <h4 className="alert-heading">Mesaj Yok</h4>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                showModal && (
                    <Modal show={showModal} onClose={() => setShowModal(false)} modalTitle={"Mesaj"}>
                        <p>{messageList.find(msg => msg._id === messageId)?.message}</p>
                    </Modal>
                )
            }
        </main>
    );
}