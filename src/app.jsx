import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import ProjectsPage from './pages/projects';
import Header from './header';
import FourOhFour from './pages/404';
import GoodBadChadProjectOverview from './pages/projects/gbc';
import ContactPage from './pages/contact';

function App() {
  return (
    <div className='min-h-screen bg-[var(--background)] font-[vt323]'>
      <BrowserRouter>
        <Header />
        <main className='p-[25px] text-xl text-[var(--dark-green)]'>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='projects'>
              <Route index element={<ProjectsPage />} />
              <Route
                path='goodbadchad'
                element={<GoodBadChadProjectOverview />}
              />
            </Route>
            <Route path='contact' element={<ContactPage />} />
            <Route path='*' element={<FourOhFour />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
