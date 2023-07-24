import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Footer, Navbar } from "./common/navbar";
import AboutCompany from "./pages/AboutCompany";
import OurStrength from "./pages/OurStrength";
import OurAwards from "./pages/OurAwards";
import IndustrialApplication from "./pages/IndustrialApplication";
import Solutions from "./pages/Solutions";
import ReplacementPart from "./pages/ReplacementPart";
import Contact from "./pages/Contact";
import BusinessInquery from "./pages/BusinessInquery";
import PartnerWithUs from "./pages/PartnerWithUs";
import FeedbackSuggestion from "./pages/FeedbackSuggestion";
import MissionVissionValues from "./pages/MissionVissionValues";
import ProductConveyorBelt from "./pages/ConveyorBelt";
import ConveyorBelt from "./pages/ConveyorBelt";
import PowerTransmission from "./pages/PowerTransmission";
import IndustrialOil from "./pages/IndustrialOil";
import IndustrialGrease from "./pages/IndustrialGrease";
import Tools from "./pages/Tools";
import Tarpaulin from "./pages/Tarpaulin";
import AgricultureHose from "./pages/AgricultureHose";
import FlatBelt from "./pages/FlatBelt";
import AirMultiplepuposeHose from "./pages/AirMultiplepuposeHose";
import RuperConveyorBeltSing from "./pages/RuperConveyorBeltSing";
import Pulley from "./pages/Pulley";
import PlasticModular from "./pages/PlasticModularSing";
import PlasticModularSing from "./pages/PlasticModularSing";
import CottonBeltSing from "./pages/CottonBeltSing";
import PUConveyorBelt from "./pages/PUConveyorBeltSing";
import PUConveyorBeltSing from "./pages/PUConveyorBeltSing";
import PrintingBlanketSing from "./pages/PrintingBlanketSing";
import { CuttingOilBrandSing, VBeltInfoSing } from "./components";
import VBelt from "./pages/VBelt";
import TimmingBeltSing from "./pages/TimmingBeltSing";
import PolyVBelt from "./pages/PolyVBelt";
import SpecializedBeltSing from "./pages/SpecializedBeltSing";
import SyntheticGreaseSing from "./pages/SyntheticGreaseSing";
import GenralPurposeGreseSing from "./pages/GenralPurposeGreseSing";
import FoodGradeGreaseSing from "./pages/FoodGradeGreaseSing";
import HighTemperatureGreaseSing from "./pages/HighTemperatureGreaseSing";
import CuttingOilSing from "./pages/CuttingOilSing";
import GearOilSing from "./pages/GearOilSing";
import HydrolicOilSing from "./pages/HydrolicOilSing";
import EngineOil from "./pages/EngineOil";
import SpecialiyuOil from "./pages/SpecialiyuOil";
import FoodGradeOilSing from "./pages/FoodGradeOilSing";
import HandToolSing from "./pages/HandToolSing";
import PowerToolSing from "./pages/PowerToolSing";
import HDPETarpaulin from "./pages/HDPETarpaulin";
import LaminatedTarpaulinSing from "./pages/LaminatedTarpaulinSing";
import ShadeNetSing from "./pages/ShadeNetSing";
import PondLiners from "./pages/PondLiners";
import MulchingFilmSing from "./pages/MulchingFilmSing";
import PVCLeftFlatHoseSing from "./pages/PVCLeftFlatHoseSing";
import PVCSolutionHose from "./pages/PVCSolutionHose";
import PVCGardenHoseSing from "./pages/PVCGardenHoseSing";
import ElevatorBeltSing from "./pages/ElevatorBeltSing";
import NylonBelt from "./pages/NylonBelt";
import CanvasBeltSing from "./pages/CanvasBeltSing";
import TaperBushVBelt from "./pages/TaperBushVBelt";
import TaperBushVBeltSing from "./pages/TaperBushVBeltSing";
import TimmingPulletVBelt from "./pages/TimmingPulletVBelt";
import SteamHoseSing from "./pages/SteamHoseSing";
import SandBlastSing from "./pages/SandBlastSing";
import RockDrillHose from "./pages/RockDrillHose";
import AirWaterHoseOneSing from "./pages/AirWaterHoseOneSing";
import PneumaticToolHoseSing from "./pages/PneumaticToolHoseSing";
import AirWaterHoseSec from "./pages/AirWaterHoseSec";
import CarbonFreeHoseSing from "./pages/CarbonFreeHoseSing";

function App() {
  return (
    <>
      <BrowserRouter basename="jalaeam_marketing">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutus" element={<AboutCompany />} />
          <Route path="/OurStrength" element={<OurStrength />} />
          <Route path="/OurAwards" element={<OurAwards />} />
          <Route
            path="/IndustrialApplication"
            element={<IndustrialApplication />}
          />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/ReplacementPart" element={<ReplacementPart />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/BusinssInquery" element={<BusinessInquery />} />
          <Route path="/Partnerwithus" element={<PartnerWithUs />} />
          <Route path="/FeeedbackSuggestion" element={<FeedbackSuggestion />} />
          <Route
            path="/MissionVisssionValues"
            element={<MissionVissionValues />}
          />
          <Route path="/ProductConveyorBelt" element={<ConveyorBelt />} />
          <Route
            path="/ProductPowerTransmission"
            element={<PowerTransmission />}
          />
          <Route path="/ProductIndustrialOil" element={<IndustrialOil />} />
          <Route
            path="/ProductIndustrialGrease"
            element={<IndustrialGrease />}
          />
          <Route path="/ProductTools" element={<Tools />} />
          <Route path="/ProductTarpaulin" element={<Tarpaulin />} />
          <Route path="/ProductTarpaulin" element={<Tarpaulin />} />
          <Route path="/ProductAgricultureHose" element={<AgricultureHose />} />
          <Route path="/ProductFlatBelt" element={<FlatBelt />} />
          <Route
            path="/Air_MultipurposeHose"
            element={<AirMultiplepuposeHose />}
          />
          <Route path="/ProductPulley" element={<Pulley />} />
          {/* Single Product Page */}

          {/* <Route path="products/:slug" element={<RuperConveyorBeltSing />} /> */}
          <Route
            path="/ruberconveyorbelt"
            element={<RuperConveyorBeltSing />}
          />

          <Route path="/plasticmodule" element={<PlasticModularSing />} />
          <Route path="/cottonbelt" element={<CottonBeltSing />} />
          <Route path="/puconveyorbelt" element={<PUConveyorBeltSing />} />
          <Route path="/printingblanket" element={<PrintingBlanketSing />} />
          <Route path="/vbelt" element={<VBelt />} />
          <Route path="/timmingbelt" element={<TimmingBeltSing />} />
          <Route path="/polyvbelt" element={<PolyVBelt />} />
          <Route path="/specializedbelt" element={<SpecializedBeltSing />} />
          <Route path="/syntheticgrease" element={<SyntheticGreaseSing />} />
          <Route
            path="/genralpurposegrease"
            element={<GenralPurposeGreseSing />}
          />
          <Route
            path="/foodgradegreaseinfosing"
            element={<FoodGradeGreaseSing />}
          />
          <Route
            path="/hightemperaturegreasesing"
            element={<HighTemperatureGreaseSing />}
          />
          <Route path="/cuttingoil" element={<CuttingOilSing />} />
          <Route path="/gearoil" element={<GearOilSing />} />
          <Route path="/hydraulicoil" element={<HydrolicOilSing />} />
          <Route path="/engineoil" element={<EngineOil />} />
          <Route path="/specialityoil" element={<SpecialiyuOil />} />
          <Route path="/foodgradeoil" element={<FoodGradeOilSing />} />
          <Route path="/handtool" element={<HandToolSing />} />
          <Route path="/powertool" element={<PowerToolSing />} />
          <Route path="/hdpetarpaulin" element={<HDPETarpaulin />} />
          <Route
            path="/laminatedtarpaulin"
            element={<LaminatedTarpaulinSing />}
          />
          <Route path="/shadenet" element={<ShadeNetSing />} />
          <Route path="/pondliner" element={<PondLiners />} />
          <Route path="/mulchingfilm" element={<MulchingFilmSing />} />
          <Route path="/pvcleftflathose" element={<PVCLeftFlatHoseSing />} />
          <Route path="/pvcsolutionhose" element={<PVCSolutionHose />} />
          <Route path="/pvcgardenhose" element={<PVCGardenHoseSing />} />
          <Route path="/elevatorbelt" element={<ElevatorBeltSing />} />
          <Route path="/nylonbelt" element={<NylonBelt />} />
          <Route path="/canvasbelt" element={<CanvasBeltSing />} />
          <Route path="/taperbushvbelt" element={<TaperBushVBeltSing />} />
          <Route
            path="/timmingpulleyvbeltpulley"
            element={<TimmingPulletVBelt />}
          />
          <Route path="/steamhose" element={<SteamHoseSing />} />
          <Route path="/sandblast" element={<SandBlastSing />} />
          <Route path="/rockdrillhose" element={<RockDrillHose />} />
          <Route path="/airwaterhose" element={<AirWaterHoseOneSing />} />
          <Route
            path="/pneumatictoolhose"
            element={<PneumaticToolHoseSing />}
          />
          <Route path="/airwaterhosesec" element={<AirWaterHoseSec />} />
          <Route path="/carbonfreehose" element={<CarbonFreeHoseSing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
