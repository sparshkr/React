import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employees from "./Pages/Employees";
import Header from "./components/Header";
import Customer from "./Pages/Customer";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
