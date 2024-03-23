import { useState } from "react";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteActivity } from "../../services/APIactivities";
import toast from "react-hot-toast";
import Button from "../../ui/Button";
import CreateActivityForm from "./CreateActivityForm";

const TableRow = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1.8fr 2fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 2.4rem;
    align-items: center;
    padding: 1.4rem 2.4rem;
    font-family: inherit;

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;

const Img = styled.img`
    display: block;
    width: 6.4rem;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5) translateX(-7px);
`;

const Description = styled.div`
    font-size: 1.1rem;
    color: var(--color-grey-500);
    line-height: 1.1;
    font-weight: 500;
`;

const Activity = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
`;

const Price = styled.div`
    font-weight: 600;
`;

const Discount = styled.div`
    font-weight: 500;
    color: var(--color-green-700);
`;

const Percent = styled.span`
    font-weight: 700;
`;

function ActivityRow({ activity }) {
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
    const queryClient = useQueryClient();
    const [showForm, setShowForm] = useState(false);

    function trimDescription() {
        if (description.length > 55) {
            return `${description.slice(0, 55)}` + "...";
        }
        return description;
    }

    const { isPending: isDeleting, mutate } = useMutation({
        mutationFn: (id) => deleteActivity(id),
        onSuccess: () => {
            toast.success("Activity deleted successfully");
            queryClient.invalidateQueries({
                queryKey: ["activities"],
            });
        },
        onError: (error) => toast.error(error.message),
    });
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
                            -{Math.floor((discount / regularPrice) * 100)}
                            &#65285;
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
                        onClick={() => mutate(activityId)}
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
