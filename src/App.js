import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import SparroPage from "./components/SparroPage";
import IgvcPage from "./components/IgvcPage";
import GazeboPage from "./components/GazeboPage";
import Swerve1Page from "./components/Swerve1Page";
import FrcPage from "./components/FrcPage";
import JoystickPage from "./components/JoystickPage";
import Resume from "./components/Resume";

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/'element={<Work/>}/>
        <Route path='/work'element={<Work/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/skills'element={<Skills/>}/>
        <Route path='/sparro'element={<SparroPage/>}/>
        <Route path='/igvc'element={<IgvcPage/>}/>
        <Route path='/gazebo'element={<GazeboPage/>}/>
        <Route path='/swerve1'element={<Swerve1Page/>}/>
        <Route path='/frc'element={<FrcPage/>}/>
        <Route path='/joystick'element={<JoystickPage/>}/>
        <Route path='/resume'element={<Resume/>}/>
      </Routes>
    </div>
  );
}

export default App;
