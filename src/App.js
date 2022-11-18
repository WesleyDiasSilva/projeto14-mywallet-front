import RegisterPage from "./pages/RegisterPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import GlobalStyles from "../src/assets/reset";
import MainPage from "./pages/MainPage";
import RevenuePage from "./pages/RevenuePage";
import ExpensePage from "./pages/ExpensePage";
import { UserContext } from "./contexts/UserContext";
import React from "react";
import HomePage from "./pages/HomePage";

function App() {
  const [user, setUser] = React.useState({});

  return (
    <BrowserRouter>
      <GlobalStyles />
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/myWallet" element={<MainPage />} />
          <Route path="/newRevenue" element={<RevenuePage />} />
          <Route path="/newExpense" element={<ExpensePage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
