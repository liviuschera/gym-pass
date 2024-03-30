import { useState } from "react";
import Button from "../../ui/Button";
import CreateActivityForm from "./CreateActivityForm";
import Modal from "../../ui/Modal";

function EditActivity(activityToEdit) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <div>
            <Button
                size="small"
                onClick={() => setIsOpenModal((show) => !show)}
            >
                Edit
            </Button>
            {isOpenModal && (
                <Modal
                    onClose={() => setIsOpenModal(false)}
                    activityToEdit={activityToEdit}
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
