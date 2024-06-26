import {
    // TableRow,
    Img,
    Description,
    Activity,
    Percent,
    Discount,
    Price,
} from "./activities.sytles";
import { TableRow } from "../../ui/Table";
import { formatCurrency } from "../../utils/helpers";
import EditActivity from "./EditActivity";
import DeleteActivity from "./DeleteActivity";
import Tooltip from "../../ui/Tooltip";
import { Stacked } from "../../ui/Stacked";

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

    function trimDescription() {
        const sliceLength = 65;
        if (description.length > sliceLength) {
            return `${description.slice(0, sliceLength)}...`;
        }
        return description;
    }

    return (
        <TableRow role="row" columns="2fr 1fr 2.3fr 1fr 1fr 1fr 1fr 0.3fr">
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
            <Stacked>
                <Tooltip text="Edit">
                    <EditActivity activityToEdit={activity} isEditForm={true} />
                </Tooltip>
                <Tooltip text="Delete">
                    <DeleteActivity activityId={activityId} />
                </Tooltip>
            </Stacked>
        </TableRow>
    );
}

export default ActivityRow;
