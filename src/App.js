import "./sass/main.scss";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Realtors from "./components/Realtors";
import Features from "./components/Features";
import StoryPicture from "./components/Stories/StoryPicture";
import StoryComponent from "./components/Stories/StoryContent";
import Homes from "./components/Homes";
import Gallery  from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Header />
      <Realtors />
      <Features />
      <StoryPicture /> 
      <StoryComponent />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
