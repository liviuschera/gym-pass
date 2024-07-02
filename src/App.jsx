import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";
import PageNotFound from "./pages/PageNotFound";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Activities from "./pages/Activities";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Staff from "./pages/Staff";
import { Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Settings from "./pages/Settings";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000, // data will be refetch after 1 min
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route
                        element={
                            <ProtectedRoute>
                                <AppLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route
                            index
                            element={<Navigate replace to="/dashboard" />}
                        />
                        <Route path="/bookings" element={<Bookings />} />
                        <Route
                            path="/bookings/:bookingId"
                            element={<Booking />}
                        />
                        <Route
                            path="/checkin/:bookingId"
                            element={<Checkin />}
                        />
                        <Route path="/activities" element={<Activities />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/staff" element={<Staff />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/account" element={<Account />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
            <Toaster
                position="top-center"
                gutter={12}
                toastOptions={{
                    success: { duration: 3000 },
                    error: { duration: 7000 },
                    style: {
                        fontSize: "1.6rem",
                        maxWidth: "50rem",
                        padding: "1.6rem 2.4rem",
                        backgroundColor: "var(--color-grey-0)",
                        color: "var(--color-grey-700)",
                        border: "1px solid var(--color-grey-100)",
                    },
                }}
            />
        </QueryClientProvider>
    );
}

export default App;
