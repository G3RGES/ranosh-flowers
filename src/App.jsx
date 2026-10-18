import { Routes, Route } from "react-router";

import MainLayout from "./Components/Layout/MainLayout";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
      </Route>
    </Routes>
  );
}

export default App;
