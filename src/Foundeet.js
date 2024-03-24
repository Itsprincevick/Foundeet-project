import React, {Component} from "react";
import "./Foundeet.css";
import Logo from "./components/logo";
import Countdown from "./components/Countdown";
import logo from "./assets/gear.svg";
import Title from "./components/Title";
import Description  from "./components/discription";
import title from "./assets/g10.png";


class Foundeet extends Component {
  state = {
    countdownState: {
      futureDate: "2024-09-01T00:00:00",
    },
    logo: {
      alt: "spinning gear",
      src: logo,
    },
   title: {
    alt: "foundeet logo",
    src: title,
   },
   description: {
    text: "coming soon..."
   }
  };
  render() {
    const {
      countdownState,
      logo,
      title,
      description
    } = this.state;
  return (
    <div className="background">
      <div className="counter">
      <Countdown futureDate={countdownState.futureDate} />
      </div>
      <Logo alt={logo.alt} src={logo.src}/>
      <Title src={title.src} alt={title.alt}/>
      <Description text={description.text}/>
    </div>
  )};
};

export default Foundeet;