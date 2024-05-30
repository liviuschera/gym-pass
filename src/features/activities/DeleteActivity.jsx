import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteActivity } from "./useDeleteActivty";
import { HiTrash } from "react-icons/hi2";

function DeleteActivity({ activityId }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { isDeleting, deleteActivity } = useDeleteActivity();
    return (
        <div>
            <Button
                size="small"
                $variation="danger"
                onClick={() => {
                    setIsOpenModal((show) => !show);
                }}
            >
                <HiTrash />
            </Button>
            {isOpenModal && (
                <Modal onClose={() => setIsOpenModal(false)}>
                    <ConfirmDelete
                        onClose={() => setIsOpenModal(false)}
                        disabled={isDeleting}
                        resourceName={"activity"}
                        onConfirm={() => deleteActivity(activityId)}
                    />
                </Modal>
            )}
        </div>
    );
}

export default DeleteActivity;
