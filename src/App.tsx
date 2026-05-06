 // ROOT of the component tree

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/themeProvider";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

import LayoutWrapper from "./components/layout/LayoutWrapper";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<LayoutWrapper />}>
            <Route index element={<Home />} />
            <Route path="country/:countryCode" element={<Detail />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;