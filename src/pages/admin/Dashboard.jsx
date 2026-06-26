import { Link } from "react-router-dom";
import { Newspaper, Users } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Bảng điều khiển</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
        <h2 className="text-lg font-medium text-gray-800 mb-2">Chào mừng trở lại, {user?.username}!</h2>
        <p className="text-gray-600">
          Đây là trang quản trị nội dung của website KingViet. Từ đây, bạn có thể quản lý tin tức, bài viết, và các thiết lập khác.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* News Widget */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
            <Newspaper size={32} />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Quản lý Tin tức</h3>
          <p className="text-gray-500 mb-4 text-sm">
            Thêm, sửa, xóa các bài viết tin tức hiển thị trên trang chủ.
          </p>
          <Link
            to="/admin/news"
            className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Đi đến Quản lý Tin tức
          </Link>
        </div>

        {/* Future Widget Placeholder */}
        <div className="bg-gray-50 p-6 rounded-lg border border-dashed border-gray-300 flex flex-col items-center text-center justify-center min-h-[240px]">
          <div className="p-4 text-gray-400 mb-4">
            <Users size={32} />
          </div>
          <h3 className="text-lg font-medium text-gray-500 mb-2">Tính năng khác</h3>
          <p className="text-gray-400 mb-4 text-sm">
            Sẽ cập nhật trong tương lai (Ví dụ: Collection, Liên hệ).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
