import { Routes, Route } from "react-router-dom";

import "./App.scss";
import SignInPage from "./pages/signin.page/signin.component";
import SignUpPage from "./pages/signup.page/signup.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;	