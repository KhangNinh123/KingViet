import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Share2, Link as LinkIcon } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { api } from "../../services/api";

const NewsDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  const fetchArticle = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/news/${slug}`);
      setArticle(response.data);
    } catch (err) {
      setError("Không tìm thấy bài viết hoặc bài viết đã bị xóa.");
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Đã copy đường dẫn bài viết!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-gray-50">
        <Header />
        <main className="flex-grow flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E2954]"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-gray-50">
        <Header />
        <main className="flex-grow flex flex-col justify-center items-center py-20 px-4">
          <div className="text-5xl mb-4">😢</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Rất tiếc!</h1>
          <p className="text-gray-600 mb-6 text-center max-w-md">{error}</p>
          <button 
            onClick={() => navigate("/tin-tuc")}
            className="px-6 py-2.5 bg-[#1E2954] text-white rounded-lg hover:bg-blue-900 transition-colors"
          >
            Quay lại Tin tức
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Banner Ảnh bìa (nếu có) */}
        {article.thumbnail && (
          <div className="w-full h-[30vh] md:h-[50vh] relative bg-gray-900">
            <img 
              src={article.thumbnail.startsWith("http") ? article.thumbnail : `https://api.kingvietedu.vn${article.thumbnail}`} 
              alt={article.title} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        )}

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <Link 
            to="/tin-tuc" 
            className="inline-flex items-center text-gray-500 hover:text-[#1E2954] font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Trở về danh sách
          </Link>

          {/* Tiêu đề & Meta */}
          <header className="mb-10 border-b border-gray-100 pb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center text-gray-500 text-sm">
                <Clock size={16} className="mr-2" />
                <span>{new Date(article.created_at).toLocaleDateString('vi-VN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
                <span className="mx-3">•</span>
                <span>{article.category === "general" ? "Tin chung" : article.category}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-500 hidden sm:inline-block">Chia sẻ:</span>
                <button onClick={handleShare} className="p-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-full transition-colors" title="Copy Link">
                  <LinkIcon size={18} />
                </button>
              </div>
            </div>
          </header>

          {/* Tóm tắt */}
          {article.summary && (
            <div className="text-lg md:text-xl text-gray-600 font-medium italic mb-10 leading-relaxed border-l-4 border-[#E5B034] pl-6 py-2 bg-gray-50 rounded-r-lg">
              {article.summary}
            </div>
          )}

          {/* Nội dung bài viết */}
          <div 
            className="article-content text-gray-800 leading-relaxed text-[17px] md:text-lg break-words"
            dangerouslySetInnerHTML={{ __html: article.content ? article.content.replace(/&nbsp;/g, ' ') : '' }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;
