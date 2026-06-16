// import LandingPage from "./pages/landingPage";
// import Introduction from "./pages/introduction";
// import TitlePage from "./pages/titlePage";
// import Map from "./pages/map";
// import Poem from "./pages/poem";

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const LandingPage = lazy(() => import("./pages/landing_page"));
const TitlePage = lazy(() => import("./pages/title_page"));
const Map = lazy(() => import("./pages/map"));
const Poem = lazy(() => import("./pages/poem"));
const Tina = lazy(() => import("./pages/Women/tina"));
const IRememberTina = lazy(() => import("./pages/Women/i_remember_Tina"));

const Domenica = lazy(() => import("./pages/Women/domenica"));
const IRememberDomenica = lazy(
  () => import("./pages/Women/i_remember_Domenica"),
);

const Letizia = lazy(() => import("./pages/Women/letizia"));
const IRememberLetizia = lazy(
  () => import("./pages/Women/i_remember_Letizia.jsx"),
);

const Loredana = lazy(() => import("./pages/Women/loredana"));
const IRememberLoredana = lazy(
  () => import("./pages/Women/i_remember_Loredana.jsx"),
);

const Marisa = lazy(() => import("./pages/Women/marisa"));
const IRememberMarisa = lazy(
  () => import("./pages/Women/i_remember_Marisa.jsx"),
);

const Rina = lazy(() => import("./pages/Women/rina"));
const IRememberRina = lazy(() => import("./pages/Women/i_remember_Rina.jsx"));

const Renata = lazy(() => import("./pages/Women/renata"));
const IRememberRenata = lazy(
  () => import("./pages/Women/i_remember_Renata.jsx"),
);

const Marilde = lazy(() => import("./pages/Women/marilde"));
const IRememberMarilde = lazy(
  () => import("./pages/Women/i_remember_Marilde.jsx"),
);

const Unrecognition = lazy(() => import("./pages/Words/unrecognition"));
const Unrecognition_Follow_Up = lazy(
  () => import("./pages/Words/unrecognition_follow_up"),
);

const Birth_and_Abort = lazy(() => import("./pages/Words/birth_and_abort"));
const Birth_and_Abort_Follow_Up = lazy(
  () => import("./pages/Words/birth_and_abort_follow_up"),
);

const Community_and_Support = lazy(
  () => import("./pages/Words/community_and_support"),
);
const Community_and_Support_Follow_Up = lazy(
  () => import("./pages/Words/community_and_support_follow_up"),
);

const Doctor_Relationship = lazy(
  () => import("./pages/Words/doctor_relationship"),
);
const Doctor_Relationship_Follow_Up = lazy(
  () => import("./pages/Words/doctor_relationship_follow_up"),
);

const Double_Labor = lazy(() => import("./pages/Words/double_labor"));
const Double_Labor_Follow_Up = lazy(
  () => import("./pages/Words/double_labor_follow_up"),
);

const Expectations = lazy(() => import("./pages/Words/expectations"));
const Expectations_Follow_Up = lazy(
  () => import("./pages/Words/expectations_follow_up"),
);

const Motherhood = lazy(() => import("./pages/Words/motherhood"));
const Motherhood_Follow_Up = lazy(
  () => import("./pages/Words/motherhood_follow_up"),
);

const Sexuality = lazy(() => import("./pages/Words/sexuality"));
const Sexuality_Follow_Up = lazy(
  () => import("./pages/Words/sexuality_follow_up"),
);

const Inequality_Equality_Misoginy = lazy(
  () => import("./pages/Words/inequality_equality_misoginy"),
);
const Inequality_Equality_Misoginy_Follow_Up = lazy(
  () => import("./pages/Words/inequality_equality_misoginy_follow_up"),
);

const Work_and_Health = lazy(() => import("./pages/Words/work_and_health"));
const Work_and_Health_Follow_Up = lazy(
  () => import("./pages/Words/work_and_health_follow_up"),
);

const AboutPage = lazy(() => import("./pages/about.jsx"));
const CreditsPage = lazy(() => import("./pages/credtis.jsx"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/title" element={<TitlePage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/poem" element={<Poem />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/credits" element={<CreditsPage />} />
        <Route path="/tina" element={<Tina />} />
        <Route path="/rememberTina" element={<IRememberTina />} />

        <Route path="/domenica" element={<Domenica />} />
        <Route path="/rememberDomenica" element={<IRememberDomenica />} />

        <Route path="/letizia" element={<Letizia />} />
        <Route path="/rememberLetizia" element={<IRememberLetizia />} />

        <Route path="/loredana" element={<Loredana />} />
        <Route path="/rememberLoredana" element={<IRememberLoredana />} />

        <Route path="/marisa" element={<Marisa />} />
        <Route path="/rememberMarisa" element={<IRememberMarisa />} />

        <Route path="/rina" element={<Rina />} />
        <Route path="/rememberRina" element={<IRememberRina />} />

        <Route path="/renata" element={<Renata />} />
        <Route path="/rememberRenata" element={<IRememberRenata />} />

        <Route path="/marilde" element={<Marilde />} />
        <Route path="/rememberMarilde" element={<IRememberMarilde />} />

        <Route path="/unrecognition" element={<Unrecognition />} />
        <Route
          path="/unrecognition-follow-up"
          element={<Unrecognition_Follow_Up />}
        />

        <Route path="/birth-and-abort" element={<Birth_and_Abort />} />
        <Route
          path="/birth-and-abort-follow-up"
          element={<Birth_and_Abort_Follow_Up />}
        />

        <Route
          path="/community-and-support"
          element={<Community_and_Support />}
        />
        <Route
          path="/community-and-support-follow-up"
          element={<Community_and_Support_Follow_Up />}
        />

        <Route path="/doctor-relationship" element={<Doctor_Relationship />} />
        <Route
          path="/doctor-relationship-follow-up"
          element={<Doctor_Relationship_Follow_Up />}
        />

        <Route path="/double-labor" element={<Double_Labor />} />
        <Route
          path="/double-labor-follow-up"
          element={<Double_Labor_Follow_Up />}
        />
        <Route path="/expectations" element={<Expectations />} />
        <Route
          path="/expectations-follow-up"
          element={<Expectations_Follow_Up />}
        />

        <Route path="/motherhood" element={<Motherhood />} />
        <Route
          path="/motherhood-follow-up"
          element={<Motherhood_Follow_Up />}
        />

        <Route path="/sexuality" element={<Sexuality />} />
        <Route path="/sexuality-follow-up" element={<Sexuality_Follow_Up />} />

        <Route
          path="/inequality_equality_misoginy"
          element={<Inequality_Equality_Misoginy />}
        />
        <Route
          path="/inequality_equality_misoginy_follow_up"
          element={<Inequality_Equality_Misoginy_Follow_Up />}
        />

        <Route path="/work-and-health" element={<Work_and_Health />} />
        <Route
          path="/work-and-health-follow-up"
          element={<Work_and_Health_Follow_Up />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
