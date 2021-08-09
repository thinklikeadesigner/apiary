import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Hero from './hero/Hero.js';
import Header from './header/Header.js';
import Lead from './lead/Lead.js';
import DummyPage from './dummy-page/DummyPage.js';
import ChooseUs from './choose-us/ChooseUs.js';
import ProfessionHero from './profession-hero/ProfessionHero.js';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Lead />
      <Route path="/dummy-page">
        <DummyPage />
      </Route>
      <ChooseUs/>
      <ProfessionHero />
      <Footer></Footer>
    </div>
  );
}

export default App;
