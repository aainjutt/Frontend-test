import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import WealthmanagementCard from './components/WealthmanagementCard';
import Leading from './components/Leading';
import Professional from './components/Professional';
import BusinessCard from './components/BusinessCard';
import Mission from './components/Mission';

function App() {
  return (
   <div>
    <Header/>
    <Section/>
    <WealthmanagementCard/>
    <Leading/>
    <Professional/>
    <BusinessCard/>
    <Mission/>
   </div>
  );
}

export default App;
