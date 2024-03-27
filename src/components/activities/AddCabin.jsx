import { useState } from "react";
import Button from "../../ui/Button";
import CreateActivityForm from "./CreateActivityForm";
import Modal from "../../ui/Modal";

function AddCabin() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <div>
            <Button onClick={() => setIsOpenModal((show) => !show)}>
                Add new activity
            </Button>
            {isOpenModal && (
                <Modal onClose={() => setIsOpenModal(false)}>
                    <CreateActivityForm
                        onCloseModal={() => setIsOpenModal(false)}
                    />
                </Modal>
            )}
        </div>
    );
}

export default AddCabin;
