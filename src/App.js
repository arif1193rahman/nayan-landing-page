import './App.css';
import ContractMe from './Components/ContractMe/ContractMe';
import EightVideo from './Components/EightVideo/EightVideo';
import ElevenImage from './Components/ElevenImage/ElevenImage';
import FifthImage from './Components/FifthImage/FifthImage';
import ForthIImage from './Components/ForthIImage/ForthIImage';
import NineImageSection from './Components/NineImageSection/NineImageSection';
import SecondSectioon from './Components/SecondSection/SecondSectioon';
import SecondVideo from './Components/SecondVideo/SecondVideo';
import SeventhSection from './Components/SeventhSection/SeventhSection';
import SixthImage from './Components/SixthImage/SixthImage';
import TenText from './Components/TenText/TenText';
import ThirdText from './Components/ThirdText/ThirdText';
import TwelveText from './Components/TwelveText/TwelveText';
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
      <EightVideo></EightVideo>
      <NineImageSection></NineImageSection>
      <TenText></TenText>
      <ElevenImage></ElevenImage>
      <TwelveText></TwelveText>
      <ContractMe></ContractMe>
    </div>
  );
}

export default App;
