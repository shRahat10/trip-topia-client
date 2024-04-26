import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Error from "../pages/Error";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TouristsSpots from "../pages/tourist-spots/TouristsSpots";
import AddTouristSpot from "../pages/tourist-spots/AddTouristSpot";
import MyLists from "../pages/tourist-spots/MyLists";

const Router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/tourists-spots',
                element: <TouristsSpots></TouristsSpots>,
            },
            {
                path: '/add-tourists-spots',
                element: <AddTouristSpot></AddTouristSpot>,
            },
            {
                path: '/my-lists',
                element: <MyLists></MyLists>,
            },
        ]
    }
])

export default Router;