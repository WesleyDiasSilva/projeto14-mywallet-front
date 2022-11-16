import RegisterPage from "./pages/RegisterPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import GlobalStyles from '../src/assets/reset'
import MainPage from "./pages/MainPage";
import RevenuePage from "./pages/RevenuePage";
import ExpensePage from "./pages/ExpansePage";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Routes>
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/myWallet" element={<MainPage />} />
        <Route path="/newRevenue" element={<RevenuePage />} />
        <Route path="/newExpense" element={<ExpensePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
