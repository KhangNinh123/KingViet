import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EducationTech from "../pages/EducationTech";
import InternationalExperience from "../pages/InternationalExperience";
import BooksAndMagazines from "../pages/BooksAndMagazines";
import EmpoweringChildren from "../pages/EmpoweringChildren";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cong-nghe-giao-duc" element={<EducationTech />} />
      <Route
        path="/trai-nghiem-quoc-te"
        element={<InternationalExperience />}
      />
      <Route path="/sach-va-tap-chi" element={<BooksAndMagazines />} />
      <Route
        path="/trao-quyen-tre-em-trong-the-thao"
        element={<EmpoweringChildren />}
      />
      <Route
        path="/lĩnh-vực"
        element={
          <div className="p-20 text-center text-2xl">
            Lĩnh vực (Coming soon)
          </div>
        }
      />
      <Route
        path="/collection"
        element={
          <div className="p-20 text-center text-2xl">
            Collection (Coming soon)
          </div>
        }
      />
      <Route
        path="/về-chúng-tôi"
        element={
          <div className="p-20 text-center text-2xl">
            Về chúng tôi (Coming soon)
          </div>
        }
      />
      <Route path="/liên-hệ" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
