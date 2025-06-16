import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home/index";
import { Portfolio } from "../pages/portfolio/index";
import { ContactUs } from "../pages/contact/index";
import { About } from "../pages/about/index";
import { Socialicons } from "../components/socialicons/index";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import VacuumChamber from "../pages/projects/VacuumChamber";
import SiCRing from "../pages/projects/SiCRing";
import SEMicroscopy from "../pages/projects/SEMicroscopy";
import ElementalAnalysis from "../pages/projects/ElementalAnalysis";
import LaserComposites from "../pages/projects/LaserComposites";
import CustomTrucks from "../pages/projects/CustomTrucks";
import EmagArray from "../pages/projects/EmagArray";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects/vacuum-chamber" element={<VacuumChamber />} />
        <Route path="/projects/sic-ring" element={<SiCRing />} />
        <Route path="/projects/sem-microscopy" element={<SEMicroscopy />} />
        <Route path="/projects/elemental-analysis" element={<ElementalAnalysis />} />
        <Route path="/projects/laser-composites" element={<LaserComposites />} />
        <Route path="/projects/custom-trucks" element={<CustomTrucks />} />
        <Route path="/projects/emag-array" element={<EmagArray />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
