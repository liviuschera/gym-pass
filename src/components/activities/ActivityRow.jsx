import { useState } from "react";
import {
    TableRow,
    Img,
    Description,
    Activity,
    Percent,
    Discount,
    Price,
} from "./activities.sytles";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import CreateActivityForm from "./CreateActivityForm";
import { useDeleteActivity } from "./useDeleteActivty";

function ActivityRow({ activity }) {
    const [showForm, setShowForm] = useState(false);
    const { isDeleting, deleteActivity } = useDeleteActivity();

    const {
        id: activityId,
        image,
        name,
        regularPrice,
        discount,
        description,
        type,
        maxCapacity,
    } = activity;

    function trimDescription() {
        if (description.length > 55) {
            return `${description.slice(0, 55)}` + "...";
        }
        return description;
    }

    return (
        <>
            <TableRow role="row">
                <Img src={image} alt={name} />
                <Activity>{name}</Activity>
                <Description>{trimDescription()}</Description>
                <p>{type}</p>
                <p>{maxCapacity}</p>
                {regularPrice > 0 ? (
                    <Price>{formatCurrency(regularPrice)}</Price>
                ) : (
                    <span>&mdash;</span>
                )}
                {discount > 0 ? (
                    <Discount>
                        {formatCurrency(discount)}(
                        <Percent>
                            &minus;{Math.floor((discount / regularPrice) * 100)}
                            &#37;
                        </Percent>
                        )
                    </Discount>
                ) : (
                    <span>&mdash;</span>
                )}
                <div>
                    <Button
                        // disabled={isDeleting}
                        onClick={() => setShowForm((show) => !show)}
                        size="small"
                    >
                        Edit
                    </Button>
                    <Button
                        disabled={isDeleting}
                        onClick={() => deleteActivity(activityId)}
                        size="small"
                        variation="danger"
                    >
                        Delete
                    </Button>
                </div>
            </TableRow>
            {showForm && (
                <CreateActivityForm
                    activityToEdit={activity}
                    isEditForm={true}
                />
            )}
            {}
        </>
    );
}

export default ActivityRow;
