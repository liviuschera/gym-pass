import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm.jsx";
function Staff() {
    return (
        <>
            <Heading as="h1">Add new staff member</Heading>
            <SignupForm />
        </>
    );
}

export default Staff;
