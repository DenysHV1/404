import "./App.css";
import bannerVideo from "./assets/ooonooo.mp4";

const App = () => {
  return (
    <>
      <div className="headerBanner">
        <p className="error">404</p>
        <video autoPlay loop muted>
          <source src={bannerVideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default App;
