import { Routes, Route } from "react-router-dom";

import SignInPage from "./routes/signin.page/signin.component";
import SignUpPage from "./pages/signup.page/signup.page";
import Dashboard from "./routes/dashboard.route/dashboard.route";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;	