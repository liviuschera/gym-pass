import { useState } from "react";
import Button from "../../ui/Button";
import CreateActivityForm from "./CreateActivityForm";

function AddCabin() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <div>
            <Button onClick={() => setIsOpenModal((show) => !show)}>
                Add new activity
            </Button>
            ;{isOpenModal && <CreateActivityForm />}
        </div>
    );
}

export default AddCabin;
