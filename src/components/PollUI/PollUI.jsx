import React from "react";
import { useEffect } from "react";
import Styles from "./PollUI.module.scss";
//необходимо рефакторить - код нерабочий

export const PollUI = () => {
  useEffect(() => {
    const options = document.getElementsByTagName("label");

    if (options?.length > 0) {
      for (let index = 0; index < options.length; index++) {
        options[index].addEventListener("click", () => {
          options[index].classList.add("selected");
          options[index].style.borderColor = "#6665ee";

          // for (let j = 0; j < options.length; j++) {
          //   if (options[j].classList.contains("selected")) {
          //     options[j].classList.remove("selected");
          //   }
          // }
          // options[index].classList.add("selected");
          // for (let k = 0; k < options.length; k++) {
          //   options[k].classList.add("selectall");
          // }
          // let forVal = options[index].getAttribute("for");
          // let selectInput = document.getElementById(forVal);
          // let getAtt = selectInput.getAttribute("type");
          // if (getAtt === "checkbox") {
          //   selectInput.setAttribute("type", "radio");
          // } else if (selectInput.checked === true) {
          //   options[index].classList.remove("selected");
          //   selectInput.setAttribute("type", "checkbox");
          // }
          // let array = [];
          // for (let l = 0; l < options.length; l++) {
          //   if (options[l].classList.contains("selected")) {
          //     array.push(l);
          //   }
          // }
          // if (array.length === 0) {
          //   for (let m = 0; m < options.length; m++) {
          //     options[m].removeAttribute("className");
          //   }
          // }
        });
      }
    }
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <header>Poll UI Design</header>
        <div className={Styles.poll_area}>
          <input type="checkbox" name="poll" id="opt-1" />
          <input type="checkbox" name="poll" id="opt-2" />
          <input type="checkbox" name="poll" id="opt-3" />
          <input type="checkbox" name="poll" id="opt-4" />
          <label htmlFor="opt-1">
            <div className={Styles.row}>
              <div className={Styles.column}>
                <span className={Styles.circle}></span>
                <span className={Styles.text}>HTML</span>
              </div>
              <span className={Styles.percent}>30%</span>
            </div>
            <div className={Styles.progress} style={{ "--w": "30" }}></div>
          </label>
          <label htmlFor="opt-2" className={Styles.opt_2}>
            <div className={Styles.row}>
              <div className={Styles.column}>
                <span className={Styles.circle}></span>
                <span className={Styles.text}>jQuery</span>
              </div>
              <span className={Styles.percent}>10%</span>
            </div>
            <div className={Styles.progress} style={{ "--w": "10" }}></div>
          </label>
          <label htmlFor="opt-3" className={Styles.opt_3}>
            <div className={Styles.row}>
              <div className={Styles.column}>
                <span className={Styles.circle}></span>
                <span className={Styles.text}>Java</span>
              </div>
              <span className={Styles.percent}>20%</span>
            </div>
            <div className={Styles.progress} style={{ "--w": "20" }}></div>
          </label>
          <label htmlFor="opt-4" className={Styles.opt_4}>
            <div className={Styles.row}>
              <div className={Styles.column}>
                <span className={Styles.circle}></span>
                <span className={Styles.text}>Python</span>
              </div>
              <span className={Styles.percent}>40%</span>
            </div>
            <div className={Styles.progress} style={{ "--w": "40" }}></div>
          </label>
        </div>
      </div>
    </div>
  );
};
