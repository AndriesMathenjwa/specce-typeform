import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Content from "./pages/content/Content.jsx";
import Main from "./pages/main/Main.jsx";
import Quiz from "./pages/quiz/Quiz.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Main/>}/>
        <Route path="/content" element={<Content/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/quiz/:formName" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;