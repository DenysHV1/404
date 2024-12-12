import { useNavigate } from "react-router";
import "./App.css";
import bannerVideo from "./assets/ooonooo.mp4"

const App = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="headerBanner">
        <button onClick={handleGoBack}>GO BACK</button>
        <p className="error">404</p>
        <video autoPlay loop muted>
          <source src={bannerVideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default App;
