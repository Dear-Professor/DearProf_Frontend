import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import WritePage from "./pages/WritePage";
import Templates from "./pages/Templates";
import Mailbox from "./pages/Mailbox";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/mailbox" element={<Mailbox />} />
        <Route path="/my" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
