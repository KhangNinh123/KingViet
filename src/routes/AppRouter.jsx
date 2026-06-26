import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EducationTech from "../pages/EducationTech";
import InternationalExperience from "../pages/InternationalExperience";
import BooksAndMagazines from "../pages/BooksAndMagazines";
import EmpoweringChildren from "../pages/EmpoweringChildren";
import Contact from "../pages/Contact";
import NewsPage from "../pages/News";
import NewsDetail from "../pages/News/NewsDetail";

// Admin Imports
import ProtectedRoute from "../components/ProtectedRoute";
import AdminLayout from "../components/layout/AdminLayout";
import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import NewsList from "../pages/admin/news/NewsList";
import NewsForm from "../pages/admin/news/NewsForm";

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
      <Route path="/tin-tuc" element={<NewsPage />} />
      <Route path="/tin-tuc/:slug" element={<NewsDetail />} />
      <Route path="/liên-hệ" element={<Contact />} />
      {/* Admin Routes */}
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="news" element={<NewsList />} />
        <Route path="news/create" element={<NewsForm />} />
        <Route path="news/edit/:id" element={<NewsForm />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
