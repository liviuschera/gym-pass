import { useState } from "react";
import Button from "../../ui/Button";
import CreateActivityForm from "./CreateActivityForm";
import Modal from "../../ui/Modal";
import { HiPencil } from "react-icons/hi2";

function EditActivity({ activityToEdit }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <div>
            <Button
                size="small"
                onClick={() => setIsOpenModal((show) => !show)}
            >
                <HiPencil />
            </Button>
            {isOpenModal && (
                <Modal
                    onClose={() => setIsOpenModal(false)}
                    activityToEdit={activityToEdit}
                    isEditForm={true}
                >
                    <CreateActivityForm
                        onCloseModal={() => setIsOpenModal(false)}
                    />
                </Modal>
            )}
        </div>
    );
}

export default EditActivity;
