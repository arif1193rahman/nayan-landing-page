import './App.css';
import SecondSectioon from './Components/SecondSection/SecondSectioon';
import SecondVideo from './Components/SecondVideo/SecondVideo';
import UpperSection from './Components/UpperSection/UpperSection';
import VedioPlayer from './Components/UpperSection/VedioPlayer/VedioPlayer';

function App() {
  return (
    <div className="App">
      <UpperSection></UpperSection>
      {/* <VedioPlayer></VedioPlayer> */}
      <SecondSectioon></SecondSectioon>
      <SecondVideo></SecondVideo>
    </div>
  );
}

export default App;
