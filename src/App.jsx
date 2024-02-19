import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Classes from "./pages/Classes";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Members from "./pages/Members";

function App() {
    return (
        <BrowserRouter>
            <h1>App</h1>
            <Routes>
                <Route path="/account" element={<Account />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/members" element={<Members />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
