import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options, type }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get("sortBy") || "";
    function handleChange(event) {
        // console.log(searchParams);
        // console.log(event.target.value);
        searchParams.set("sortBy", event.target.value);
        setSearchParams(searchParams);
    }
    return (
        <Select
            value={sortBy}
            options={options}
            type={type}
            onChange={(e) => handleChange(e)}
        />
    );
}

export default SortBy;
