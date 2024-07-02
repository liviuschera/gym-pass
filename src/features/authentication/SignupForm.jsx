import { useReducer, useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { isFormValid } from "./isFormValid";
import { useSignup } from "./useSignup";

const initialState = {
    fullName: "",
    email: "",
    password: "",
    passwordConfirm: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "setFullName":
            return { ...state, fullName: action.payload };
        case "setEmail":
            return { ...state, email: action.payload };
        case "setPassword":
            return { ...state, password: action.payload };
        case "setPasswordConfirm":
            return { ...state, passwordConfirm: action.payload };
        case "reset":
            return initialState;
        default:
            throw new Error("Unknown action type");
    }
};

function SignupForm() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [errors, setErrors] = useState({});
    const { signup, isLoading } = useSignup();
    const { fullName, email, password, passwordConfirm } = state;

    console.log("🚀 ~ SignupForm ~ state:", state);
    function handleSubmit(e) {
        e.preventDefault();
        if (!isFormValid(state, setErrors)) return;
        signup(
            { fullName, email, password },
            {
                onSettled: dispatch({ type: "reset" }),
            }
        );
        // isFormValid(state, setErrors);
        console.log("🚀 ~ SignupForm ~ errors:", errors);
        // if (Object.keys(errors).length === 0) {
        //     // isFormValid(state, setErrors) && dispatch({ type: "reset" });
        //     return;
        // }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRow label="Full name" error={errors?.fullName}>
                <Input
                    type="text"
                    id="fullName"
                    // disabled={isPending}
                    required
                    value={fullName}
                    onChange={(e) =>
                        dispatch({
                            type: "setFullName",
                            payload: e.target.value,
                        })
                    }
                />
            </FormRow>

            <FormRow label="Email address" error={errors?.email}>
                <Input
                    type="email"
                    id="email"
                    // disabled={isPending}
                    required
                    value={email}
                    onChange={(e) =>
                        dispatch({ type: "setEmail", payload: e.target.value })
                    }
                />
            </FormRow>

            <FormRow
                label="Password (min 8 characters)"
                error={errors?.password}
            >
                <Input
                    type="password"
                    id="password"
                    // disabled={isPending}
                    required
                    value={password}
                    onChange={(e) =>
                        dispatch({
                            type: "setPassword",
                            payload: e.target.value,
                        })
                    }
                />
            </FormRow>

            <FormRow label="Repeat password" error={errors?.passwordConfirm}>
                <Input
                    type="password"
                    id="passwordConfirm"
                    // disabled={isPending}
                    required
                    value={passwordConfirm}
                    onChange={(e) =>
                        dispatch({
                            type: "setPasswordConfirm",
                            payload: e.target.value,
                        })
                    }
                />
            </FormRow>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button
                    $variation="secondary"
                    type="reset"
                    // disabled={isPending}
                    // onClick={reset}
                >
                    Cancel
                </Button>
                <Button
                // disabled={isPending}
                >
                    Create new user
                </Button>
            </FormRow>
        </Form>
    );
}

export default SignupForm;
