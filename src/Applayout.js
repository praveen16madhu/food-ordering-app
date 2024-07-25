import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import { ErrorPage } from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import { AppLayoutContent } from "./components/AppLayoutContent";

// Create a heading element

/*

 * header
 * -logo
 * -nav-items
 * body
 * -search bar
 * -restaurantcard container
 *   -restaurent cards
 *    - img
 *    -time,cusines
 * footer
 * -money page
 * -previous order page

*/
const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <AppLayoutContent />
        </Provider>
    );
};

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: 'restaurant/:resid',
                element: <RestaurantMenu />
            }
        ]
    }
]);

// Render the heading into the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={browserRouter} />);
