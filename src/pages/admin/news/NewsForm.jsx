import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { api } from "../../../services/api";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const NewsForm = () => {
  const { id } = useParams();
  const isEditMode = !!id;
  const navigate = useNavigate();
  const quillRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    is_published: true,
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEditMode);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditMode) {
      fetchNewsDetail();
    }
  }, [id]);

  const fetchNewsDetail = async () => {
    try {
      setFetching(true);
      const response = await api.get(`/news/${id}`);
      const newsItem = response.data;
      setFormData({
        title: newsItem.title || "",
        summary: newsItem.summary || "",
        content: newsItem.content || "",
        is_published: newsItem.is_published,
      });
      if (newsItem.thumbnail) {
        setImagePreview(newsItem.thumbnail.startsWith("http") ? newsItem.thumbnail : `https://api.kingvietedu.vn${newsItem.thumbnail}`);
      }
    } catch (err) {
      setError("Không thể tải thông tin bài viết.");
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleContentChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }));
  };

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("image", file); // Tên field phải khớp với upload.single("image")

        try {
          // Upload lên server
          const response = await api.post("/news/upload-image", formData);
          const url = response.url; // URL từ backend giờ đã là link Supabase public hoàn chỉnh
          
          // Chèn link ảnh vào editor
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection(true);
          quill.insertEmbed(range.index, "image", url);
        } catch (error) {
          console.error("Lỗi upload ảnh:", error);
          alert("Lỗi khi upload ảnh. Vui lòng thử lại.");
        }
      }
    };
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  }), []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("summary", formData.summary);
      data.append("content", formData.content);
      data.append("is_published", formData.is_published ? "1" : "0");
      
      if (imageFile) {
        data.append("thumbnail", imageFile);
      }

      if (isEditMode) {
        await api.put(`/news/${id}`, data);
      } else {
        await api.post("/news", data);
      }
      
      navigate("/admin/news");
    } catch (err) {
      setError(err.message || "Đã có lỗi xảy ra khi lưu bài viết.");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return <div className="text-center py-10">Đang tải thông tin bài viết...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Link to="/admin/news" className="mr-4 p-2 text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-semibold text-gray-900">
          {isEditMode ? "Sửa Bài Viết" : "Tạo Bài Viết Mới"}
        </h1>
      </div>

      {error && (
        <div className="mb-6 p-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Tiêu đề bài viết <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập tiêu đề..."
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ảnh bìa (Cover Image)
            </label>
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-400 text-sm text-center px-2">Chưa chọn ảnh</span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="file"
                  id="cover_image"
                  accept="image/jpeg, image/png, image/webp"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Định dạng: JPG, PNG, WEBP. Tối đa 5MB.
                </p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
              Tóm tắt (Summary)
            </label>
            <textarea
              id="summary"
              name="summary"
              rows={3}
              value={formData.summary}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập đoạn tóm tắt ngắn..."
            />
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Nội dung chính <span className="text-red-500">*</span>
            </label>
            <div className="bg-white">
              <ReactQuill 
                ref={quillRef}
                theme="snow"
                modules={modules}
                value={formData.content}
                onChange={handleContentChange}
                className="h-80 mb-12"
                placeholder="Nhập nội dung chi tiết bài viết..."
              />
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center">
            <input
              id="is_published"
              name="is_published"
              type="checkbox"
              checked={formData.is_published}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="is_published" className="ml-2 block text-sm text-gray-900 font-medium">
              Xuất bản ngay lập tức
            </label>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-gray-200 flex justify-end">
            <Link
              to="/admin/news"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 mr-4 font-medium"
            >
              Hủy
            </Link>
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <Save size={18} className="mr-2" />
              {loading ? "Đang lưu..." : "Lưu bài viết"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsForm;
