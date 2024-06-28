import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { login } from "../../services/apiAuth";
import Spinner from "../../ui/Spinner";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";

function LoginForm() {
    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("Test1234");
    const { login, isPending } = useLogin();

    function handleSubmit(event) {
        event.preventDefault();
        if (!email || !password) return;
        login(
            { email, password },
            {
                onSettled: () => {
                    // on successful login, reset the form
                    setEmail("");
                    setPassword("");
                },
            }
        );
    }

    if (isPending) return <Spinner />;

    return (
        <Form onSubmit={handleSubmit}>
            <FormRowVertical label="Email address">
                <Input
                    type="email"
                    id="email"
                    // for password managers
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isPending}
                />
            </FormRowVertical>
            <FormRowVertical label="Password">
                <Input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isPending}
                />
            </FormRowVertical>
            <FormRowVertical>
                <Button size="large" disabled={isPending}>
                    {!isPending ? "Login" : <SpinnerMini />}
                </Button>
            </FormRowVertical>
        </Form>
    );
}

export default LoginForm;
