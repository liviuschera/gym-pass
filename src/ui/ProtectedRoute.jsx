import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    // 1 - load user
    const { isPending, isAuthenticated } = useUser();
    // 2 - if not, redirect to login page
    useEffect(() => {
        if (!isAuthenticated && !isPending) navigate("/login");
    }, [isAuthenticated, isPending, navigate]);
    // 3 - while loading show the spinner
    if (isPending) return <Spinner />;
    // 4 - if yes, render app
    if (isAuthenticated) return children;
}

export default ProtectedRoute;
