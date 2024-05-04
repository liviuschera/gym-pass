import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";
import { HiTrash } from "react-icons/hi2";

function DeleteBooking({ bookingId }) {
    console.log("🚀 ~ DeleteBooking ~ bookingId:", bookingId);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { isDeleting, deleteBooking } = useDeleteBooking();
    return (
        <div>
            <Button
                size="small"
                variation="danger"
                onClick={() => {
                    setIsOpenModal((show) => !show);
                }}
            >
                Delete booking #${bookingId}
            </Button>
            {isOpenModal && (
                <Modal onClose={() => setIsOpenModal(false)}>
                    <ConfirmDelete
                        onClose={() => setIsOpenModal(false)}
                        disabled={isDeleting}
                        resourceName={"booking"}
                        onConfirm={() => deleteBooking(bookingId)}
                    />
                </Modal>
            )}
        </div>
    );
}

export default DeleteBooking;
