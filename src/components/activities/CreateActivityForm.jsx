import { useReducer } from "react";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { createActivity } from "../../services/APIactivities";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";

const initialState = {
    name: "",
    maxCapacity: 1,
    regularPrice: 0,
    discount: 0,
    description: "",
    image: "",
    type: "",
};

function reducer(state, action) {
    console.log(state, "ACTION: ", action);
    switch (action.type) {
        case "name":
            return { ...state, name: action.payload };
        case "maxCapacity":
            return { ...state, maxCapacity: action.payload };
        case "regularPrice":
            return { ...state, regularPrice: action.payload };
        case "discount":
            return { ...state, discount: action.payload };
        case "description":
            return { ...state, description: action.payload };
        case "image":
            return { ...state, image: action.payload };
        case "type":
            return { ...state, type: action.payload };
        case "errors":
            return { ...state, errors: action.payload };
        case "reset":
            return initialState;
        default:
            throw new Error("Unknown action type");
    }
}

function CreateActivityForm() {
    const queryClient = useQueryClient();
    const { isPending: isCreating, mutate } = useMutation({
        mutationFn: (data) => createActivity(data),
        onSuccess: () => {
            toast.success("Activity created successfully");
            // refresh the list of activities in ActivityTable refetching the data
            queryClient.invalidateQueries({
                queryKey: ["activities"],
            });
            dispatch({ type: "reset" });
        },
        onError: (error) => toast.error(error.message),
    });

    const [state, dispatch] = useReducer(reducer, initialState);

    function isFormValid() {
        const errors = {};
        let isValid = true;

        if (state.name.length < 3) {
            errors.name = "Activity name must be at least 3 characters long";
            isValid = false;
        }
        if (state.maxCapacity < 1) {
            errors.maxCapacity = "Max capacity must be at least 1 person";
            isValid = false;
        }

        if (state.description.length < 5) {
            errors.description =
                "Description must be at least 5 characters long";
            isValid = false;
        }
        if (state.discount > state.regularPrice) {
            errors.discount = "Discount must be less than regular price";
            isValid = false;
        }

        if (state.type.length < 3) {
            errors.type = "Type of activity must be at least 3 characters long";
            isValid = false;
        }
        !isValid && dispatch({ type: "errors", payload: errors });

        return isValid;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!isFormValid()) return;
        mutate(state);
    }

    if (isCreating) {
        return <Spinner />;
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormRow error={state?.errors?.name} label="Activity name">
                <Input
                    type="text"
                    id="name"
                    value={state.name}
                    required
                    disabled={isCreating}
                    onChange={(e) =>
                        dispatch({ type: "name", payload: e.target.value })
                    }
                />
            </FormRow>

            <FormRow error={state?.errors?.type} label="Activity type">
                <Input
                    type="text"
                    id="type"
                    value={state.type}
                    required
                    disabled={isCreating}
                    onChange={(e) =>
                        dispatch({ type: "type", payload: e.target.value })
                    }
                />
            </FormRow>

            <FormRow error={state?.errors?.maxCapacity} label="Max capacity">
                <Input
                    type="number"
                    id="maxCapacity"
                    value={state.maxCapacity}
                    required
                    disabled={isCreating}
                    onChange={(e) =>
                        dispatch({
                            type: "maxCapacity",
                            payload: Number(e.target.value),
                        })
                    }
                />
            </FormRow>

            <FormRow error={state?.errors?.regularPrice} label="Regular price">
                <Input
                    type="number"
                    id="regularPrice"
                    value={state.regularPrice}
                    onChange={(e) =>
                        dispatch({
                            type: "regularPrice",
                            payload: Number(e.target.value),
                        })
                    }
                />
            </FormRow>

            <FormRow error={state?.errors?.discount} label="Discount">
                <Input
                    type="number"
                    id="discount"
                    value={state.discount}
                    disabled={isCreating}
                    onChange={(e) =>
                        dispatch({
                            type: "discount",
                            payload: Number(e.target.value),
                        })
                    }
                />
            </FormRow>

            <FormRow
                error={state?.errors?.description}
                label="Activity description"
            >
                <Textarea
                    type="number"
                    id="description"
                    value={state.description}
                    required
                    disabled={isCreating}
                    onChange={(e) =>
                        dispatch({
                            type: "description",
                            payload: e.target.value,
                        })
                    }
                />
            </FormRow>

            <FormRow error={state?.errors?.image} label="Activity image">
                <FileInput
                    id="image"
                    accept="image/*"
                    value={state.image}
                    required
                    disabled={isCreating}
                    onChange={(e) =>
                        dispatch({ type: "image", payload: e.target.value })
                    }
                />
            </FormRow>

            <FormRow>
                <Button
                    variation="secondary"
                    type="reset"
                    onClick={() => dispatch({ type: "reset" })}
                >
                    Cancel
                </Button>
                <Button disabled={isCreating}>Add Activity</Button>
            </FormRow>
        </Form>
    );
}

export default CreateActivityForm;
