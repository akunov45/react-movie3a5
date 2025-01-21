import React from 'react';
import Layout from "../layout/Layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "../pages/HomePage/HomePage.jsx";

const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={ <Layout/>}>
              <Route index element={ <HomePage/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App;