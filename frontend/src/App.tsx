import { Suspense, lazy } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import PrivateLayout from "./layouts/PrivateLayout";

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        } />
        <Route path="/" element={<PrivateLayout />} >
          <Route path="/home" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          } />
        </Route>
      </Routes>
    </>
  )
}

export default App
