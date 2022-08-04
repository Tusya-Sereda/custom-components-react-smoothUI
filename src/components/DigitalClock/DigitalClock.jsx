import { useEffect, useState } from "react";
import Styles from "./DigitalClock.module.scss";

export const DigitalClock = () => {
  const [time, setTime] = useState("");

  const refreshClock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";

    if (hours > 12) {
      day_night = "PM";

      hours = hours - 12;
    }

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    setTime(hours + ":" + minutes + ":" + seconds + " " + day_night);
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.display}>
          <div id="time" className={Styles.time}>
            {time}
          </div>
        </div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
