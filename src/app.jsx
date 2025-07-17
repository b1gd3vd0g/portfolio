import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header';
import HomePage from './pages/home';
import ProjectsPage from './pages/projects';
import ContactPage from './pages/contact';
import FourOhFour from './pages/404';
import GoodBadChadProjectOverview from './pages/projects/gbc';

/**
 * Contains the entire app, including the BrowserRouter, and the layout.
 * Defines all routes for the entire project.
 */
export default function App() {
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
