import './App.css';
import FifthImage from './Components/FifthImage/FifthImage';
import ForthIImage from './Components/ForthIImage/ForthIImage';
import SecondSectioon from './Components/SecondSection/SecondSectioon';
import SecondVideo from './Components/SecondVideo/SecondVideo';
import SeventhSection from './Components/SeventhSection/SeventhSection';
import SixthImage from './Components/SixthImage/SixthImage';
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
      <ForthIImage></ForthIImage>
      <FifthImage></FifthImage>
      <SixthImage></SixthImage>
      <SeventhSection></SeventhSection>
    </div>
  );
}

export default App;
