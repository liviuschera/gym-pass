import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
// import { useUser } from "../features/authentication/useUser";
// import { useNavigate } from "react-router-dom";
// import Spinner from "../ui/Spinner";

const LoginLayout = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 48rem;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);
`;

function Login() {
    // const navigate = useNavigate();
    // const { isAuthenticated, isPending } = useUser();

    // if (isPending) return <Spinner />;
    // if (isAuthenticated) navigate("/");
    return (
        <LoginLayout>
            <Logo />
            <Heading as="h4">Log in to your account</Heading>
            <LoginForm />
        </LoginLayout>
    );
}

export default Login;
