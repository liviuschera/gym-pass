import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";
import { HiTrash } from "react-icons/hi2";

function DeleteBooking({ bookingId, size, options = {} }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { isDeleting, deleteBooking } = useDeleteBooking();
    return (
        <div>
            <Button
                size={size}
                $variation="danger"
                onClick={() => {
                    setIsOpenModal((show) => !show);
                }}
            >
                {Object.keys(options).length > 0 ? (
                    `Delete booking #${bookingId}`
                ) : (
                    <HiTrash />
                )}
            </Button>
            {isOpenModal && (
                <Modal onClose={() => setIsOpenModal(false)}>
                    <ConfirmDelete
                        onClose={() => setIsOpenModal(false)}
                        disabled={isDeleting}
                        resourceName={"booking"}
                        onConfirm={() => deleteBooking(bookingId, options)}
                    />
                </Modal>
            )}
        </div>
    );
}

export default DeleteBooking;
