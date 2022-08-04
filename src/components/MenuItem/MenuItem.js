import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Styles from "./MenuItem.module.scss";

export const MenuItem = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: uuidv4(),
      title: "Vertical Timeline",
      flag: "timeline",
      isClick: true,
    },
    { id: uuidv4(), title: "Stepper", flag: "stepper", isClick: false },
    { id: uuidv4(), title: "Page 404", flag: "404", isClick: false },
    { id: uuidv4(), title: "Box With Flip", flag: "box", isClick: false },
    { id: uuidv4(), title: "Poll", flag: "poll", isClick: false },
    { id: uuidv4(), title: "Digital Clock", flag: "clock", isClick: false },
    {
      id: uuidv4(),
      title: "Social Media Buttons",
      flag: "social_media",
      isClick: false,
    },
    {
      id: uuidv4(),
      title: "Calendar",
      flag: "calendar",
      isClick: false,
    },
  ];

  return (
    <nav className={Styles.navbar}>
      {menuItems.map(({ id, title, flag, isClick }) => (
        <div
          key={id}
          className={Styles.navbar_item}
          onClick={() => navigate(`/${flag}`)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {title}
        </div>
      ))}
    </nav>
  );
};
