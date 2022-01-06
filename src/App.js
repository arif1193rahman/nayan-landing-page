import './App.css';
import SecondSectioon from './Components/SecondSection/SecondSectioon';
import SecondVideo from './Components/SecondVideo/SecondVideo';
import ThirdText from './Components/ThirdText/ThirdText';
import UpperSection from './Components/UpperSection/UpperSection';
import VedioPlayer from './Components/UpperSection/VedioPlayer/VedioPlayer';

function App() {
  return (
    <div className="App">
      <UpperSection></UpperSection>
      {/* <VedioPlayer></VedioPlayer> */}
      <SecondSectioon></SecondSectioon>
      <SecondVideo></SecondVideo>
      <ThirdText></ThirdText>
    </div>
  );
}

export default App;
