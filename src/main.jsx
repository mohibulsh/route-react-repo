import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Contract from './components/contract/Contract';
import First from './components/first/First';
import Friends from './components/friends/Friends';
import FriendDetails from './components/friendDetails/FriendDetails';
import Poster from './components/poster/Poster';
import ShowDetail from './components/showDetails/ShowDetail';


const router =createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:"/",
        element:<First></First>
      },
      {
        path:"friends",
        element:<Friends></Friends>,
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
       path:"friend/:friendId",
       element:<FriendDetails></FriendDetails>,
       loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"poster",
        element:<Poster></Poster>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:"showDetails/:detailsId",
        element:<ShowDetail></ShowDetail>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.detailsId}`)
      },
      {
        path:"contract",
        element:<Contract></Contract>
      },
      {
        path:'*',
        element: <div>not found page please give me a real link</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
