import NavBar from "../../components/NavBar/NavBar";
import "./Showcase.scss";
import background from "../../assets/learning-background.jpg";
import boombox from "../../assets/boombox-fill.svg";

const Showcase = () => {
  return (
    <div className="showcase">
      <img className="showcase__background" src={background} alt="" />
      <div className="showcase__cover">
        <div className="showcase__container">
          <img className="showcase__icon" src={boombox} alt="" />
          <h1 className="showcase__header">Welcome to Coursology!</h1>
        </div>        
        <NavBar styles="navbar__showcase" itemStyle="navbar__showcase--item" />
      </div>
    </div>
  )
}

export default Showcase