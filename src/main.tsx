import React from 'react'
import ReactDOM from 'react-dom/client'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom"
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

///// components import
// import ErrorPage from "./custom_components/ErrorPage/error_page.jsx"
// import About from './custom_components/About/About.tsx'
// import Presentation from './custom_components/Presentation/Presentation.tsx'
// import Root from './custom_components/Root/root.tsx'
// import TestComponent from './custom_components/test_component/test.jsx'

// import './index.css'

//text contents
// import aboutContent from './text_contents/about-content.ts'
// import presentationContent from './text_contents/presentation-content.ts'


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     // children:[
//     //   {
//     //     path:"about",
//     //     // element: <About content={aboutContent} language='english'/>,
//     //     element: <TestComponent />,
//     //     // errorElement: <ErrorPage />,
//     //   },
//     //   {
//     //     path: "presentation",
//     //     // element: <Presentation content={presentationContent} language='english'/>,
//     //     element: <TestComponent />
//     //   },
//     // ],
//   },
// ])


