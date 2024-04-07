import Tag from "../../ui/Tag";

function DisplayStatus({ status, paymentStatus = "", children }) {
    const statusToTagName = {
        unconfirmed: "blue",
        "checked-in": "green",
        paid: "green",
        unpaid: "red",
        guest: "silver",
        noShows: "yellow",
        free: "silver",
    };

    if (status === 0) {
        return <Tag type={statusToTagName["free"]}>{"free"}</Tag>;
    } else if (status > 0 && paymentStatus !== "") {
        return <Tag type={statusToTagName[paymentStatus]}>{children}</Tag>;
    }

    return <Tag type={statusToTagName[status]}>{children}</Tag>;
}

export default DisplayStatus;
