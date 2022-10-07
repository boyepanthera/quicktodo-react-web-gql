import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage, TaskPage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/task' element={<TaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
