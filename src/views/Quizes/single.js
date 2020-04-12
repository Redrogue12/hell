import React, { PureComponent } from "react";
import cx from "classnames";

// import Button from "./button";
import SelectableAnswer from "./selectableAnswer";

export default class QuizSingle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      choice: false,
      disabled: false,
      answerShow: false,
      hiding: false
    };
  }

  handleSelected(e) {
    if (this.state.disabled === false) {
      this.setState({
        selected: e,
        disabled: true
      });
      this.setState({
        hiding: true
      });
      // Add a slight delay for showing the answer and pushing the selected state
      // We can use this to animate things!
      setTimeout(() => {
        this.setState({
          answerShow: true
        });
      }, 700);
      setTimeout(() => {
        this.setState({
          hiding: false
        });
      }, 500);
    }
  }

  render() {
    const { selected, hiding } = this.state;

    const { item, number, total } = this.props;

    const { question, choices } = item;

    return (
      <div className="quiz__main">
        <div className="quiz__container container--xl mha">
          <div className={cx("px1 quiz__material question container--q mha")}>
            <span className="cw quiz__material_qstep">
              Question {number} of {total}
            </span>
            <h4
              className={cx("cw quiz__material_question", {
                hiding: hiding
              })}
            >
              {question}
            </h4>
          </div>
          <div className="quiz__selections">
            <div className="quiz__selections_nest">
              <div className={cx("px1 f jcc aic mha")}>
                {choices.map(singleChoice => (
                  <SelectableAnswer
                    key={singleChoice.id}
                    topSelected={selected} // push selection back down
                    choice={singleChoice}
                    disabled={this.state.disabled}
                    size={singleChoice.fontSize}
                    onClick={e => {
                      this.handleSelected(e)
                      this.props.pushAnswer(e)
                      setTimeout(() => {
                        this.props.next();
                      }, 10);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
