import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lĩnh-vực" element={<div className="p-20 text-center text-2xl">Lĩnh vực (Coming soon)</div>} />
      <Route path="/collection" element={<div className="p-20 text-center text-2xl">Collection (Coming soon)</div>} />
      <Route path="/về-chúng-tôi" element={<div className="p-20 text-center text-2xl">Về chúng tôi (Coming soon)</div>} />
      <Route path="/liên-hệ" element={<div className="p-20 text-center text-2xl">Liên hệ (Coming soon)</div>} />
    </Routes>
  );
};

export default AppRouter;
