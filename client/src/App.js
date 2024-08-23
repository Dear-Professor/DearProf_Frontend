import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import WritePage from "./pages/WritePage";
import Templates from "./pages/Templates";
import Mailbox from "./pages/Mailbox";
import Mypage from "./pages/Mypage";
import TemplatesCheck from "./pages/TemplatesCheck";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/write" element={<WritePage />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/mailbox" element={<Mailbox />} />
        <Route path="/my" element={<Mypage />} />

        <Route path="/templates-check" element={<TemplatesCheck />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
