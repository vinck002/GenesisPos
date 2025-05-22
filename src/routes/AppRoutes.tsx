import {Routes, Route, createBrowserRouter} from 'react-router-dom'
import Root from "./root";
import ErrorPage from "../shared/pages/notFoundError.tsx";
import Contact from "../shared/pages/contacts.tsx";
import SalesScreen from "../feactures/sales/pages/SalesScreem";

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/sales",
                element: <SalesScreen />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/contacts',
                element: <Contact />,
                errorElement: <ErrorPage />,

            }
        ]
    }
    // {
    //     path: "contacts/:contactId",
    //     element: <Contact />,
    //     errorElement: <ErrorPage />,
    // }
]);


export default AppRouter;