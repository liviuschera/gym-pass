export function isFormValid(state, dispatch) {
    const { name, maxCapacity, regularPrice, discount, description, type } =
        state;
    const errors = {};
    let isValid = true;

    if (name.length < 3) {
        errors.name = "Activity name must be at least 3 characters long";
        isValid = false;
    }
    if (maxCapacity < 1) {
        errors.maxCapacity = "Max capacity must be at least 1 person";
        isValid = false;
    }

    if (description.length < 5) {
        errors.description = "Description must be at least 5 characters long";
        isValid = false;
    }
    if (discount > regularPrice) {
        errors.discount = "Discount must be less than regular price";
        isValid = false;
    }

    if (type.length < 3) {
        errors.type = "Type of activity must be at least 3 characters long";
        isValid = false;
    }
    !isValid && dispatch({ type: "errors", payload: errors });

    return isValid;
}
