import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MenuItem } from "./components/MenuItem/MenuItem";
import { SocialMediaButtons } from "./components/SocialMediaButtons/SocialMediaButtons";
import { StepperContent } from "./components/Stepper/Stepper";

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
          <Route path="/poll" element={<div>POLL UI</div>} />
          <Route path="/clock" element={<div>CLock UI</div>} />
          <Route path="/social_media" element={<SocialMediaButtons />} />
          <Route path="/calendar" element={<div>CALENDAR</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
