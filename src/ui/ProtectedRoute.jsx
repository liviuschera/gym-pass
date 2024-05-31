import { Navigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";

function ProtectedRoute({ children }) {
    // 1 - load user
    const { isPending, isAuthenticated } = useUser();
    // 2 - while loading show the spinner
    if (isPending) return <Spinner />;
    // 3 - if not, redirect to login page
    if (!isAuthenticated) return <Navigate to="login" />;
    // 4 - if yes, render app
    if (isAuthenticated) return children;
}

export default ProtectedRoute;
