import {Routes, Route, createBrowserRouter} from 'react-router-dom'
import Root from "./root.jsx";
import ErrorPage from "../shared/pages/notFoundError.jsx";
import Contact from "../shared/pages/contacts.jsx";
import SalesScreen from "../feactures/sales/pages/SalesScreem.jsx";

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact />,
                errorElement: <ErrorPage />,
            },{
                path: "sales",
                element: <SalesScreen />,
                errorElement: <ErrorPage />,
            }
        ]
    },
    {
        path: '/contacts',
        element: <Root />,
        errorElement: <ErrorPage />,

    }
]);


export default AppRouter;