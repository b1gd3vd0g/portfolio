import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import ProjectsPage from './pages/projects';
import Header from './header';
import FourOhFour from './pages/404';

function App() {
  return (
    <div className='min-h-screen bg-[#ddd]'>
      <Header />
      <main className='p-[25px] font-[vt323] text-xl'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='*' element={<FourOhFour />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
