import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import PageNotFound from "./pages/PageNotFound";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Classes from "./pages/Classes";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Members from "./pages/Members";
import { Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route
                            index
                            element={<Navigate replace to="/dashboard" />}
                        />
                        <Route path="/account" element={<Account />} />
                        <Route path="/bookings" element={<Bookings />} />
                        <Route path="/classes" element={<Classes />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/members" element={<Members />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
