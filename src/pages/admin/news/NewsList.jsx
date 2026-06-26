import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { api } from "../../../services/api";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchNews();
  }, [page]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      // Fetch all news (including drafts) for admin
      const data = await api.get(`/news?page=${page}&limit=10`);
      setNews(data.data || []);
      setTotalPages(data.pagination?.totalPages || 1);
    } catch (err) {
      setError("Không thể tải danh sách tin tức.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa bài viết này? Hành động này không thể hoàn tác.")) {
      return;
    }

    try {
      await api.delete(`/news/${id}`);
      fetchNews(); // Reload list
    } catch (err) {
      alert(err.message || "Lỗi khi xóa bài viết");
    }
  };

  const togglePublish = async (id, currentStatus) => {
    try {
      await api.put(`/news/${id}`, { is_published: !currentStatus });
      // Cập nhật state trực tiếp để UI nhanh hơn
      setNews(news.map(item => item.id === id ? { ...item, is_published: !currentStatus } : item));
    } catch (err) {
      alert("Lỗi khi cập nhật trạng thái");
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Quản lý Tin tức</h1>
        <Link
          to="/admin/news/create"
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} className="mr-2" />
          Tạo bài viết mới
        </Link>
      </div>

      {error && (
        <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}

      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3 w-16 text-center">ID</th>
                <th scope="col" className="px-6 py-3 w-20">Ảnh</th>
                <th scope="col" className="px-6 py-3 max-w-xs">Tiêu đề</th>
                <th scope="col" className="px-6 py-3">Ngày tạo</th>
                <th scope="col" className="px-6 py-3 text-center">Trạng thái</th>
                <th scope="col" className="px-6 py-3 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                    Đang tải dữ liệu...
                  </td>
                </tr>
              ) : news.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                    Chưa có bài viết nào.
                  </td>
                </tr>
              ) : (
                news.map((item) => (
                  <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 text-center">{item.id}</td>
                    <td className="px-6 py-4">
                      {item.thumbnail ? (
                        <img 
                          src={`http://localhost:5001${item.thumbnail}`} 
                          alt="thumbnail" 
                          className="w-12 h-12 object-cover rounded"
                          onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">
                          No img
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 truncate max-w-xs" title={item.title}>
                      {item.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(item.created_at).toLocaleDateString('vi-VN')}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => togglePublish(item.id, item.is_published)}
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          item.is_published 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                        title="Bấm để đổi trạng thái"
                      >
                        {item.is_published ? (
                          <><Eye size={12} className="mr-1" /> Đã xuất bản</>
                        ) : (
                          <><EyeOff size={12} className="mr-1" /> Bản nháp</>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                      <Link
                        to={`/admin/news/edit/${item.id}`}
                        className="inline-flex items-center p-2 text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
                        title="Sửa"
                      >
                        <Edit size={16} />
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="inline-flex items-center p-2 text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors"
                        title="Xóa"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center p-4 border-t border-gray-200">
            <div className="flex space-x-1">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50"
              >
                Trước
              </button>
              <span className="px-4 py-1 text-gray-700">
                Trang {page} / {totalPages}
              </span>
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50"
              >
                Sau
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsList;
