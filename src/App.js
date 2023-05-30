import "./sass/main.scss";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Relators from "./components/Relators";
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
      <Relators />
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
