import { Route, Routes } from "react-router-dom";
import { MenuItem } from "./components/MenuItem/MenuItem";
import { SocialMediaButtons } from "./components/SocialMediaButtons/SocialMediaButtons";
import { StepperContent } from "./components/Stepper/Stepper";
import { DigitalClock } from "./components/DigitalClock/DigitalClock";
import { PollUI } from "./components/PollUI/PollUI";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MenuItem />
      <div>
        <Routes>
          <Route path="/" element={<div>HELLO PAGE</div>} />
          <Route path="/timeline" element={<div>TIMELINE</div>} />
          <Route path="/stepper" element={<StepperContent />} />
          <Route path="/404" element={<div>Page 404</div>} />
          <Route path="/box" element={<div>BOX WITH FLIP</div>} />
          <Route path="/poll" element={<PollUI />} />
          <Route path="/clock" element={<DigitalClock />} />
          <Route path="/social_media" element={<SocialMediaButtons />} />
          <Route path="/calendar" element={<div>CALENDAR</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
