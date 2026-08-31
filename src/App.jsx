import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/forbidden" element={<div>ForbiddenPage</div>} />
            <Route path="/addquestion" element={<div>AddQuestionPageLazy</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
