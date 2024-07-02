import Heading from "../ui/Heading";
import SignUpForm from "../features/authentication/SignUpForm.jsx";
function Staff() {
    return (
        <>
            <Heading as="h1">Add new staff member</Heading>
            <SignUpForm />
        </>
    );
}

export default Staff;
