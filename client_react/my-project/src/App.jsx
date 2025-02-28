import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import Main from "./components/layout/main";

const App = () => {
  // 시작 애니메이션 나중에 넣기

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
