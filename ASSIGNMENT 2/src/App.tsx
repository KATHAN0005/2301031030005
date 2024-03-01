import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Screen1 from "./pages/screen1";
import Screen2 from "./pages/screen2";
import Screen3 from "./pages/screen3";
import Screen4 from "./pages/screen4";
import Screen5 from "./pages/screen5";
import Screen6 from "./pages/screen6";
import Screen7 from "./pages/screen7";
import Screen8 from "./pages/screen8";
import Screen9 from "./pages/screen9";
import Screen10 from "./pages/screen10";
import Screen11 from "./pages/screen11";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/screen-2":
        title = "";
        metaDescription = "";
        break;
      case "/screen-3":
        title = "";
        metaDescription = "";
        break;
      case "/screen-4":
        title = "";
        metaDescription = "";
        break;
      case "/screen-5":
        title = "";
        metaDescription = "";
        break;
      case "/screen-6":
        title = "";
        metaDescription = "";
        break;
      case "/screen-7":
        title = "";
        metaDescription = "";
        break;
      case "/screen-8":
        title = "";
        metaDescription = "";
        break;
      case "/screen-9":
        title = "";
        metaDescription = "";
        break;
      case "/screen-10":
        title = "";
        metaDescription = "";
        break;
      case "/screen-11":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Screen1 />} />
      <Route path="/screen-2" element={<Screen2 />} />
      <Route path="/screen-3" element={<Screen3 />} />
      <Route path="/screen-4" element={<Screen4 />} />
      <Route path="/screen-5" element={<Screen5 />} />
      <Route path="/screen-6" element={<Screen6 />} />
      <Route path="/screen-7" element={<Screen7 />} />
      <Route path="/screen-8" element={<Screen8 />} />
      <Route path="/screen-9" element={<Screen9 />} />
      <Route path="/screen-10" element={<Screen10 />} />
      <Route path="/screen-11" element={<Screen11 />} />
    </Routes>
  );
}
export default App;
