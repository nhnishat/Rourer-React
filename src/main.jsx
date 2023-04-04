import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import First from './component/First/First';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Friends from './component/Friends/Friends';
import Home from './component/Home/Home';
import './index.css';
// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <App></App>,
// 	},
// 	{
// 		path: '/about',
// 		element: <About></About>,
// 	},
// 	{
// 		path: '/contact',
// 		element: <Contact></Contact>,
// 	},
// ]);
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home></Home>,
		children: [
			{
				path: '/',
				element: <First></First>,
			},
			{
				path: 'friends',
				element: <Friends></Friends>,
				loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
			},
			{
				path: 'friend/:friendId',
				element: <FriendDetails></FriendDetails>,
				loader: ({ params }) =>
					fetch(
						`https://jsonplaceholder.typicode.com/users/${params.friendId}`
					),
			},
			{
				path: 'about',
				element: <About></About>,
			},
			{
				path: 'contact',
				element: <Contact></Contact>,
			},
			{
				path: '*',
				element: <div>not found</div>,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
