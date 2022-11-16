import RegisterPage from "./pages/RegisterPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import GlobalStyles from '../src/assets/reset'

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Routes>
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="/sign-in" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
