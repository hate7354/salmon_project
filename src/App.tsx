import NOTFOUND from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Layout from "contents/layout/Layout";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/main/:abcId" element={<Home />} />
          </Route>
          <Route path="*" element={<NOTFOUND />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
