import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Error from "../pages/Error";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TouristsSpots from "../pages/tourist-spots/TouristsSpots";
import AddTouristSpot from "../pages/tourist-spots/AddTouristSpot";
import MyLists from "../pages/tourist-spots/MyLists";
import TouristsSpotsDetailsPage from "../pages/TouristsSpotsDetailsPage";
import UpdateTouristsSpots from "../pages/tourist-spots/UpdateTouristsSpots";
import CountrySpots from "../pages/CountrySpots";
import PrivateRouter from "../router/PrivateRouter";

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
                element: <PrivateRouter><MyLists></MyLists></PrivateRouter>,
            },
            {
                path: '/tourists-spots-details-page/:id',
                element: <TouristsSpotsDetailsPage></TouristsSpotsDetailsPage>,
            },
            {
                path: '/update-tourists-spots/:id',
                element: <UpdateTouristsSpots></UpdateTouristsSpots>,
            },
            {
                path: '/country-spots/:country',
                element: <CountrySpots></CountrySpots>,
            },
        ]
    }
])

export default Router;