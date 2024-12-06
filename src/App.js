import './App.css';
import EventList from './components/EventList';

function App() {
  const e = [{
    name: 'Event 1',
    date: '12/9, 18:00',
    description: 'GungHo Collab: Another Story Returns!',
    image: 'https://static.wixstatic.com/media/31ba33_ada481322b5549c3931a04b35e915719~mv2.png/v1/fill/w_940,h_411,fp_0.50_0.50,q_95,enc_auto/31ba33_ada481322b5549c3931a04b35e915719~mv2.png'
  }, {
    name: 'Event 2',
    date: '12/9, 18:00',
    description: 'New Evolutions & Upgrades!',
    image: 'https://static.wixstatic.com/media/31ba33_f4f39022704b4df9a649014332d019ce~mv2.png/v1/fill/w_940,h_411,fp_0.50_0.50,q_95,enc_auto/31ba33_f4f39022704b4df9a649014332d019ce~mv2.png'
  }, {
    name: 'Event 3',
    date: '12/5, 18:00',
    description: '12th Anniversary Extravaganza Event Arrives!',
    image: 'https://static.wixstatic.com/media/31ba33_ff6539855b1d42d6a9dbec18c870a67c~mv2.png/v1/fill/w_940,h_411,fp_0.50_0.50,q_95,enc_auto/31ba33_ff6539855b1d42d6a9dbec18c870a67c~mv2.png'
  }]

  return (
    <div className="App">
      <header className="App-header">
        <EventList events={e}/>
      </header>
    </div>
  );
}

export default App;
