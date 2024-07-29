import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import MainLayout from './layout/MainLayout';
import Courses from './components/Courses';
import SingleCourses from './components/SingleCourses';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseSlug" element={<SingleCourses />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
