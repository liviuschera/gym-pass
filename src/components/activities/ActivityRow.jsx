import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteActivity } from "../../services/APIactivities";
import toast from "react-hot-toast";
import Button from "../../ui/Button";

const TableRow = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1.8fr 2fr 1fr 1fr 1fr 1fr;
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

function ActivityRow({
    activity: {
        id: activityId,
        image,
        name,
        regular_price,
        discount,
        description,
        type,
        max_capacity,
    },
}) {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate } = useMutation({
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
        <TableRow role="row">
            <Img src={image} alt={name} />
            <Activity>{name}</Activity>
            <p>{type}</p>
            {/* <div>{description}</div> */}
            <p>{max_capacity}</p>
            <Price>{formatCurrency(regular_price)}</Price>
            <Discount>{formatCurrency(discount)}</Discount>
            <Button
                disabled={isDeleting}
                onClick={() => mutate(activityId)}
                size="small"
                variation="danger"
            >
                Delete
            </Button>
        </TableRow>
    );
}

export default ActivityRow;
