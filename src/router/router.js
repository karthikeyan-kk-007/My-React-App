import { Navigate, createBrowserRouter } from "react-router-dom";
import SignInPage from "../SignInPage"
import Dashboard from "../Dashboard"
import Message from "../Message"
import ErrorPage from "../ErrorPage";
import Layout from "../dashboard/Layout";
import BestSeller from "../dashboard/pages/BestSeller";
import LatestPage from "../dashboard/pages/LatestPage";
import FruitDetailsPage from "../dashboard/pages/FruitDetailsPage";
import SignUpPage from "../SignUpPage";
import DucoDashboradPage from "../DucoDashboradPage";
import PlanDetailsPage from "../ducoDashboard/planDetails/PlanDetailsPage";




export const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Navigate to="/ducodashboard" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ducodashboard",
    element: <DucoDashboradPage />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/ducodashboard/planDetails",
        element:<PlanDetailsPage/>,
        errorElement:<ErrorPage/>
      },
    ]
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Message />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/home",
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/home",
        element:<Navigate to ="/home/fruitshop"/>,
        errorElement:<ErrorPage/>
      },
      {
        path: "/home/fruitshop",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/home/fruitshop",
            element: <Navigate to="/home/fruitshop/latest" />, 
            errorElement: <ErrorPage />,
          },
          {
            path: "/home/fruitshop/latest",
            element: <LatestPage />,
            errorElement: <ErrorPage />,
            children:[
              {
                path: `/home/fruitshop/latest/:fruitName`,
                element: <FruitDetailsPage />, 
                errorElement: <ErrorPage />,
              },
            ]
          }, 
          {
            path: "/home/fruitshop/bestseller",
            element: <BestSeller />,
            errorElement: <ErrorPage />,
          },    
        ]
      }
    ]
  }



]);