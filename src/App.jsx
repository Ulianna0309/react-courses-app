import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/forbidden" element={<div>ForbiddenPage</div>} />
            <Route path="/addquestion" element={<div>AddQuestionPageLazy</div>} />
            <Route path="/" element={<div>Home</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
