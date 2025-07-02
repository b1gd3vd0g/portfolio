import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import ProjectsPage from './pages/projects';
import Header from './header';
import FourOhFour from './pages/404';
import GoodBadChadProjectOverview from './pages/projects/gbc';

function App() {
  return (
    <div className='min-h-screen bg-[#ddd]'>
      <BrowserRouter>
        <Header />
        <main className='p-[25px] font-[vt323] text-xl'>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='projects'>
              <Route index element={<ProjectsPage />} />
              <Route
                path='goodbadchad'
                element={<GoodBadChadProjectOverview />}
              />
            </Route>
            <Route path='*' element={<FourOhFour />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
