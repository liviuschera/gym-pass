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

function UpdatePasswordForm() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [errors, setErrors] = useState({});
    const { signup, isLoading } = useSignup();
    const { fullName, email, password, passwordConfirm } = state;

    console.log("🚀 ~ UpdatePasswordForm ~ state:", state);
    function handleSubmit(e) {
        e.preventDefault();
        if (!isFormValid(state, setErrors)) return;
        // signup(
        //     { password },
        //     {
        //         onSettled: dispatch({ type: "reset" }),
        //     }
        // );
        // isFormValid(state, setErrors);
        console.log("🚀 ~ UpdatePasswordForm ~ errors:", errors);
        // if (Object.keys(errors).length === 0) {
        //     // isFormValid(state, setErrors) && dispatch({ type: "reset" });
        //     return;
        // }
    }

    return (
        <Form onSubmit={handleSubmit}>
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
                    Update password
                </Button>
            </FormRow>
        </Form>
    );
}

export default UpdatePasswordForm;
