import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
//import Grocery from "./Components/Grocery";

const Grocery = lazy(() => import("./Components/Grocery"));

const Applayout = () => {
  const [userName, setusername] = useState();
  //authentication
  useEffect(() => {
    //make api call sendusername and password
    const data = {
      name: "Rambabu",
    };
    setusername(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ LoggedInUser: userName, setusername }}>
      <div className="Appcontainer m-2">
        <Header />

        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/", element: <Body /> },
      {
        path: "Grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);
console.log(Applayout);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
