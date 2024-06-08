import Heading from "../ui/Heading";
import SignUpForm from "../features/authentication/SignUpForm";
function Staff() {
    return (
        <>
            <Heading as="h1">Add new staff member</Heading>
            <SignUpForm />
        </>
    );
}

export default Staff;