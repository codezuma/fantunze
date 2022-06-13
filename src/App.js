import './App.css';
import Footer from './components/shared/Footer/Footer';
import Navbar from './components/shared/Navbar/NavBar';
import FaqSection from './components/shared/FaqSection/FaqSection';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CollectionPage from './components/shared/Pages/CollectionPage';
import TokenPage from './components/shared/Pages/TokenPage';
import BookGames from './components/shared/Pages/BookGames';
import HomePage from './components/shared/Pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="token" element={<TokenPage />} />
          <Route path="collection" element={<CollectionPage />} />
          <Route path="" element={<HomePage />} />
          <Route path="book" element={<BookGames />} />
        </Routes>
        <FaqSection></FaqSection>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
