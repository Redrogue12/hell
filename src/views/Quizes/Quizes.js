import React from 'react';
import { Strider, Step } from "react-strider";
import cx from "classnames";

import "../../index.scss";

import data from "./data";
import Button from "./button";

import QuizSingle from "./single";

import fulgrimImg from "./images/edgar.jpeg"
import adnanImg from "./images/adnan.jpeg"
import albertoImg from "./images/alberto.jpeg"
import cesarImg from "./images/cesar.jpeg"
import christianImg from "./images/christian.jpeg"
import chuchoImg from "./images/chucho.jpeg"
import gabyImg from "./images/gaby.jpeg"
import jedielImg from "./images/jediel.jpeg"
import joseanImg from "./images/josean.jpeg"
import juanImg from "./images/juan.jpeg"
import radaImg from "./images/rada.jpeg"
import steveImg from "./images/steve.jpeg"
import tiffanyImg from "./images/tiffany.jpeg"

class Quizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      christian: 0,
      rada: 0,
      juan: 0,
      tiffany: 0,
      cesar: 0,
      gaby: 0,
      chucho: 0,
      alberto: 0,
      steve: 0,
      josean: 0,
      jedy: 0,
      edgar: 0,
      adnan: 0,
    };
  }

  renderScore() {
    console.log("render")
    const { christian,rada,tiffany,cesar,gaby,chucho,alberto,steve,josean,jedy,edgar,adnan, juan } = this.state;

    if (edgar > christian && edgar > rada && edgar > tiffany && edgar > cesar && edgar > gaby && edgar > chucho && edgar > alberto && edgar > steve && edgar > josean && edgar > jedy && edgar > adnan && edgar > juan) {
      return (
        <div>
          <h3>You are Fulgrim, Primarch of the III Legion!</h3>
          <p>Perfection is your highest aim</p>
          <img 
            className="resultImage"
            src={fulgrimImg}
            alt="Fulgrim"
          />
        </div>
      )
    } else if (christian > edgar && christian > rada && christian > tiffany && christian > cesar && christian > gaby && christian > chucho && christian > alberto && christian > steve && christian > josean && christian > jedy && christian > adnan && christian > juan) {
      return (
        <div>
          <h3>You are Leman Russ, Primarch of the VI Legion, The Space Wolves!</h3>
          <p>Humping, howling and fighting are your passions.</p>
          <img
            className="resultImage"
            src={christianImg}
            alt="Christian"
          />
        </div>
      )
    } else if (rada > edgar && rada > christian && rada > tiffany && rada > cesar && rada > gaby && rada > chucho && rada > alberto && rada > steve && rada > josean && rada > jedy && rada > adnan && rada > juan) {
      return (
        <div>
          <h3>You are Roboute Guilliman, Primarch of the VIII Legion, The Ultramarines!</h3>
          <p>Lorem Ipsum</p>
          <img
            className="resultImage"
            src={radaImg}
            alt="rada"
          />
        </div>
      )
    } else if (tiffany > edgar && tiffany > christian && tiffany > rada && tiffany > cesar && tiffany > gaby && tiffany > chucho && tiffany > alberto && tiffany > steve && tiffany > josean && tiffany > jedy && tiffany > adnan && tiffany > juan) {
      return (
        <div>
          <h3>You are an Adeptas Sororitas!</h3>
          <p>You play videogames, worship The Emperor and wonder if life would be better if some old rich man took interest in you.</p>
          <img
            className="resultImage"
            src={tiffanyImg}
            alt="tiffany"
          />
        </div>
      )
    } else if (cesar > edgar && cesar > christian && cesar > rada && cesar > tiffany && cesar > gaby && cesar > chucho && cesar > alberto && cesar > steve && cesar > josean && cesar > jedy && cesar > adnan && cesar > juan) {
      return (
        <div>
          <h3>You are a member of the Raven Guard!</h3>
          <p>You rarely speak a word, it seems like you are never there and as soon as your presence is known, you disappear.</p>
          <img
            className="resultImage"
            src={cesarImg}
            alt="cesar"
          />
        </div>
      )
    } else if (gaby > edgar && gaby > christian && gaby > rada && gaby > cesar && gaby > tiffany && cesar > chucho && gaby > alberto && gaby > steve && gaby > josean && gaby > jedy && gaby > adnan && gaby > juan) {
      return (
        <div>
          <h3>You are a member of the Adeptus Mechanicus!</h3>
          "There is no truth in flesh, only betrayal."
          "There is no strength in flesh, only weakness."
          "There is no constancy in flesh, only decay."
          "There is no certainty in flesh but death."
          — Credo Omnissiah
          <img
            className="resultImage"
            src={gabyImg}
            alt="gaby"
          />
        </div>
      )
    } else if (chucho > edgar && chucho > christian && chucho > rada && chucho > tiffany && chucho > juan && chucho > cesar && chucho > alberto && chucho > steve && chucho > josean && chucho > jedy && chucho > adnan && chucho > gaby) {
      return (
        <div>
          <h3>You are Jaghatai Khan, Primarch of the V Legion, the White Scars!</h3>
          <img
            className="resultImage"
            src={chuchoImg}
            alt="chucho"
          />
        </div>
      )
    } else if (alberto > edgar && alberto > christian && alberto > rada && alberto > tiffany && alberto > juan && alberto > cesar && alberto > chucho && alberto > steve && alberto > josean && alberto > jedy && alberto > adnan && alberto > gaby) {
      return (
        <div>
          <h3>You are Vulkan, Primarch of the XVIII Legion, the Salamanders!</h3>
          <img
            className="resultImage"
            src={albertoImg}
            alt="alberto"
          />
        </div>
      )
    } else if (steve > edgar && steve > christian && steve > rada && steve > tiffany && steve > juan && steve > cesar && steve > chucho && steve > alberto && steve > josean && steve > jedy && steve > adnan && steve > gaby) {
      return (
        <div>
          <h3>You are a Noise Marine!</h3>
          <p>A sick and depraved Chaos Space Marine bent on seeking pleasure.</p>
          <img
            className="resultImage"
            src={steveImg}
            alt="steve"
          />
        </div>
      )
    } else if (josean > edgar && josean > christian && josean > rada && josean > tiffany && josean > juan && josean > cesar && josean > chucho && josean > alberto && josean > steve && josean > jedy && josean > adnan && josean > gaby) {
      return (
        <div>
          <h3>You are a servant of Nurgle.</h3>
          <img
            className="resultImage"
            src={joseanImg}
            alt="josean"
          />
        </div>
      )
    } else if (adnan > edgar && adnan > christian && adnan > rada && adnan > tiffany && adnan > juan && adnan > cesar && adnan > chucho && adnan > alberto && adnan > steve && adnan > jedy && adnan > josean && adnan > gaby) {
      return (
        <div>
          <h3>You are Kharn!</h3>
          <img
            className="resultImage"
            src={adnanImg}
            alt="adnan"
          />
        </div>
      )
    } else if (jedy > edgar && jedy > christian && jedy > rada && jedy > tiffany && jedy > juan && jedy > cesar && jedy > chucho && jedy > alberto && jedy > steve && jedy > adnan && jedy > josean && jedy > gaby) {
      return (
        <div>
          <h3>You are Jediel!</h3>
          <img
            className="resultImage"
            src={jedielImg}
            alt="jediel"
          />
        </div>
      )
    } else if (juan > edgar && juan > christian && juan > rada && juan > tiffany && juan > adnan && juan > cesar && juan > chucho && juan > alberto && juan > steve && juan > jedy && juan > josean && juan > gaby) {
      return (
        <div>
          <h3>You are Juan!</h3>
          <img
            className="resultImage"
            src={juanImg}
            alt="juan"
          />
        </div>
      )
    }
  }

  setScore(s) {
    if (s === "Christian") this.setState({ christian: this.state.christian+1 })
    else if (s === "Rada") this.setState({ rada: this.state.rada+1 })
    else if (s === "Juan") this.setState({ juan: this.state.juan+1 })
    else if (s === "Tiffany") this.setState({ tiffany: this.state.tiffany+1 })
    else if (s === "Cesar") this.setState({ cesar: this.state.cesar+1 })
    else if (s === "Gaby") this.setState({ gaby: this.state.gaby+1 })
    else if (s === "Chucho") this.setState({ chucho: this.state.chucho+1 })
    else if (s === "Alberto") this.setState({ alberto: this.state.alberto+1 })
    else if (s === "Steve") this.setState({ steve: this.state.steve+1 })
    else if (s === "Josean") this.setState({ josean: this.state.josean+1 })
    else if (s === "Jedy") this.setState({ jedy: this.state.jedy+1 })
    else if (s === "Edgar") this.setState({ edgar: this.state.edgar+1 })
    else if (s === "Adnan") this.setState({ adnan: this.state.adnan+1 })
  }

  renderQuestions(data) {
    return data.map((question, i) => {
      return <Step key={`question-${i+1}`}>
        {({ next, goTo, active, hiding, activeIndex }) => (
          <div
            key={activeIndex}
            className={cx("step__wrapper", {
              "is-active": active,
              "is-hiding": hiding
            })}
          >
            <QuizSingle
              {...this.props}
              pushAnswer={(selected) => {
                  this.setScore(selected)
                }
              }
              number={i+1}
              next={next}
              item={data[i]}
              total={data.length}
            />
          </div>
        )}
      </Step>
    })
  }
  
  render() {
    return (
      <div className="f jcc aic site">
        <div>
          <h1>Which Hell 40k Character Are You?</h1>
          <Strider activeIndex="0" transitionSpeed={300}>
            <Step key={`question-0`}>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  <QuizStart next={next} />
                </div>
              )}
            </Step>
            {this.renderQuestions(data)}
            <Step key={`question-${data.length+1}`}>
              {({ active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  {active ? this.renderScore() : null}
                </div>
              )}
            </Step>
          </Strider>
        </div>
      </div>
    );
  }
}

class QuizStart extends React.Component {
  render() {
    return (
      <div>
        <Button
          classes={`f jcb mt1 regular bold cw`}
          clickHandle={() => this.props.next()}
        >
          Start Quiz
        </Button>
      </div>
    );
  }
}

export default Quizes;
