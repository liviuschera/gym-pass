export function isFormValid(state, setErrors) {
    // const errors = {};
    let isValid = true;
    const { name, maxCapacity, regularPrice, discount, description, type } =
        state;

    if (name.length < 3) {
        setErrors({ name: "Activity name must be at least 3 characters long" });
        isValid = false;
    }
    if (maxCapacity < 1) {
        setErrors({ maxCapacity: "Max capacity must be at least 1 person" });
        isValid = false;
    }

    if (description.length < 5) {
        setErrors({
            description: "Description must be at least 5 characters long",
        });
        isValid = false;
    }
    if (discount > regularPrice) {
        setErrors({ discount: "Discount must be less than regular price" });
        isValid = false;
    }

    if (type.length < 3) {
        setErrors({
            type: "Type of activity must be at least 3 characters long",
        });
        isValid = false;
    }

    return isValid;
}
