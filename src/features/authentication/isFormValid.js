export function isFormValid(state, setErrors) {
    const { fullName, email, password, passwordConfirm } = state;
    let isValid = true;
    console.log("🚀 ~ isFormValid ~ state:", state);

    function validateEmail(emailToCheck) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailToCheck.match(emailRegex);
    }

    if (fullName.length < 3) {
        setErrors({
            fullName: "Full name must be at least 3 characters long",
        });
        isValid = false;
    }

    if (!validateEmail(email)) {
        setErrors({ email: "Invalid email address." });
        isValid = false;
    }

    if (password.length < 8) {
        setErrors({
            password: "Password must be at least 8 characters long",
        });
        isValid = false;
    }

    if (passwordConfirm.localeCompare(password) !== 0) {
        setErrors({
            passwordConfirm: "Passwords do not match",
        });
        isValid = false;
    }

    return isValid;
}
