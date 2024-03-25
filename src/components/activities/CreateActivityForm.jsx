import { useReducer } from "react";
import { useCreateActivity } from "./useCreateActivity";
import { useEditActivity } from "./useEditActivity";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import Spinner from "../../ui/Spinner";
import { useEffect } from "react";
import { isFormValid } from "./isFormValid";

const initialState = {
    name: "",
    maxCapacity: 1,
    regularPrice: 0,
    discount: 0,
    description: "",
    image: [],
    type: "",
};

function reducer(state, action) {
    console.log("ACTION: ", action, "STATE: ", state);
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
        case "isEditForm":
            return { ...state, ...action.payload };
        case "reset":
            return initialState;
        default:
            throw new Error("Unknown action type");
    }
}

function CreateActivityForm({ activityToEdit, isEditForm }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { isCreating, createActivity } = useCreateActivity(dispatch);
    const { isEditing, editActivity } = useEditActivity();

    const isWorking = isCreating || isEditing;

    // if isEditForm is true, set the state to the activityToEdit and use useEffect to listen to activityToEdit to prevent unnecessary (infinite) re-renders
    useEffect(() => {
        dispatch({ type: "isEditForm", payload: activityToEdit });
    }, [activityToEdit]);

    const { name, maxCapacity, regularPrice, discount, description, type } =
        state;

    console.log(`STATE ==> `, state);

    function handleSubmit(e) {
        e.preventDefault();
        if (!isFormValid(state, dispatch)) return;

        if (isEditForm) {
            editActivity({ newActivityData: state, id: activityToEdit.id });
        } else {
            createActivity(state);
        }
    }

    function handleFileInput(event) {
        dispatch({ type: "image", payload: event.target.files[0] });
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
                    value={name}
                    required
                    disabled={isWorking}
                    onChange={(e) =>
                        dispatch({ type: "name", payload: e.target.value })
                    }
                />
            </FormRow>

            <FormRow error={state?.errors?.type} label="Activity type">
                <Input
                    type="text"
                    id="type"
                    value={type}
                    required
                    disabled={isWorking}
                    onChange={(e) =>
                        dispatch({ type: "type", payload: e.target.value })
                    }
                />
            </FormRow>

            <FormRow error={state?.errors?.maxCapacity} label="Max capacity">
                <Input
                    type="number"
                    id="maxCapacity"
                    value={maxCapacity}
                    required
                    disabled={isWorking}
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
                    value={regularPrice}
                    disabled={isWorking}
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
                    value={discount}
                    disabled={isWorking}
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
                    value={description}
                    required
                    disabled={isWorking}
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
                    disabled={isWorking}
                    onChange={(e) => handleFileInput(e)}
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
                <Button disabled={isWorking}>
                    {isEditForm ? "Edit activity" : "Create new activity"}
                </Button>
            </FormRow>
        </Form>
    );
}

export default CreateActivityForm;
