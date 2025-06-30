import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './home';
import ProjectsPage from './projects';
import Header from './header';

function App() {
  return (
    <div className='min-h-screen bg-[#ddd]'>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
