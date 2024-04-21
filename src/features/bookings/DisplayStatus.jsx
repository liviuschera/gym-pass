import Tag from "../../ui/Tag";

function DisplayStatus({ status, isPaid, children }) {
    const statusToTagName = {
        unconfirmed: "blue",
        "checked-in": "green",
        paid: "green",
        unpaid: "red",
        guest: "silver",
        noShows: "yellow",
        free: "silver",
    };
    console.log(status, isPaid);
    isPaid = isPaid ? "paid" : "unpaid";
    status = status === 0 ? "free" : status;

    if (status > 0) {
        return <Tag type={statusToTagName[isPaid]}>{children}</Tag>;
    }

    return (
        <Tag type={statusToTagName[status]}>
            {status === "free" ? "free" : children}
        </Tag>
    );
}

export default DisplayStatus;
