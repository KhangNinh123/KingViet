  const products = [
    {
        "id": 1,
        "name": "Bàn cờ thông minh ChessUp Version 2",
        "price": "13.500.000đ",
        "desc": "Bàn cờ thông minh tích hợp AI đến từ Mỹ phân tích nước đi tức thời bằng hệ thống đèn LED, hỗ trợ chơi online, chơi với máy mượt mà đa thể loại.",
        "imgDefault": "/images/products/ban-co-thong-minh-chessup-v2.png"
    },
    {
        "id": 2,
        "name": "Áo Happy Chess trắng cổ tròn",
        "price": "290.000đ",
        "desc": "Chất liệu cotton cao cấp, tone trắng cực kỳ dễ phối đồ. Phiên bản cổ tròn trẻ trung thoải mái.",
        "imgDefault": "/images/products/ao-happy-chess-trang-co-tron-1.png",
        "imgHover": "/images/products/ao-happy-chess-trang-co-tron-2.png"
    },
    {
        "id": 3,
        "name": "Áo Happy Chess trắng polo",
        "price": "290.000đ",
        "desc": "Chất liệu cotton cao cấp, tone trắng cực kỳ dễ phối đồ. Phiên bản polo lịch sự, phù hợp đi học, thi đấu, và sự kiện.",
        "imgDefault": "/images/products/ao-happy-chess-trang-polo-1.png",
        "imgHover": "/images/products/ao-happy-chess-trang-polo-2.png"
    },
    {
        "id": 4,
        "name": "Áo Happy Chess Mùa 5 - Xanh",
        "price": "290.000đ",
        "desc": "BST Hè 2026 mang phong cách thể thao, chất liệu vải thoáng mát phối màu xanh trắng hiện đại, tôn lên sự trẻ trung và bản lĩnh của kỳ thủ Việt.",
        "imgDefault": "/images/products/ao-happy-chess-mua-5-xanh-1.png",
        "imgHover": "/images/products/ao-happy-chess-mua-5-xanh-2.png"
    },
    {
        "id": 5,
        "name": "Áo Happy Chess Mùa 5 - Hồng",
        "price": "290.000đ",
        "desc": "BST Hè 2026 mang phong cách thể thao, chất liệu vải thoáng mát phối màu hồng đen hiện đại, tôn lên sự trẻ trung và bản lĩnh của kỳ thủ Việt.",
        "imgDefault": "/images/products/ao-happy-chess-mua-5-hong-1.png",
        "imgHover": "/images/products/ao-happy-chess-mua-5-hong-2.png"
    },
    {
        "id": 6,
        "name": "Áo Rise - Đỏ",
        "price": "290.000đ",
        "desc": "Áo polo phối màu đỏ trắng, chất liệu cotton thoáng mát, lưu niệm Giải Vô địch Cúp Cờ vua Quốc gia năm 2026.",
        "imgDefault": "/images/products/ao-rise-do-1.png",
        "imgHover": "/images/products/ao-rise-do-2.png"
    },
    {
        "id": 7,
        "name": "Áo Live Well Your Way - Đen",
        "price": "290.000đ",
        "desc": "Áo polo phối màu đen xanh mang đậm nét cờ vua cá tính cùng thông điệp sống khỏe theo cách của bạn.",
        "imgDefault": "/images/products/ao-live-well-your-way-den-1.png",
        "imgHover": "/images/products/ao-live-well-your-way-den-2.png"
    },
    {
        "id": 8,
        "name": "Áo Knight Move - Trắng",
        "price": "150.000đ",
        "desc": "Áo polo trắng lưu niệm Giải vô địch Cờ vua Cúp CLB Quốc gia Năm 2026, chất liệu cotton cao cấp thoáng mát, phù hợp đi học và thi đấu.",
        "imgDefault": "/images/products/ao-knight-move-trang-1.png",
        "imgHover": "/images/products/ao-knight-move-trang-2.png"
    },
    {
        "id": 9,
        "name": "Áo Knight Move - Xanh dương",
        "price": "150.000đ",
        "desc": "Áo polo xanh lưu niệm Giải vô địch Cờ vua Cúp CLB Quốc gia Năm 2026, chất liệu cá sấu bền bỉ, thoáng mát, phù hợp đi học và thi đấu.",
        "imgDefault": "/images/products/ao-knight-move-xanh-duong-1.png",
        "imgHover": "/images/products/ao-knight-move-xanh-duong-2.png"
    },
    {
        "id": 10,
        "name": "Áo Knight Move - Xanh lá",
        "price": "150.000đ",
        "desc": "Áo cổ tròn xanh lá lưu niệm Giải vô địch Cờ vua Cúp CLB Quốc gia Năm 2026, chất liệu cotton thoáng mát, dễ mặc, phù hợp đi chơi, đi thi đấu.",
        "imgDefault": "/images/products/ao-knight-move-xanh-la-1.png",
        "imgHover": "/images/products/ao-knight-move-xanh-la-2.png"
    },
    {
        "id": 11,
        "name": "Túi tote- Xanh Rêu",
        "price": "150.000đ",
        "desc": "Túi tote kỷ niệm Giải vô địch Cờ vua Cúp CLB Quốc gia Năm 2026, chất liệu canvas dày dặn, rộng rãi, phối màu xanh rêu thời trang, phù hợp đi thư viện, cà phê hẹn hò cuối tuần.",
        "imgDefault": "/images/products/tui-tote-xanh-reu.png"
    },
    {
        "id": 12,
        "name": "Túi đeo Happy Chess - Be",
        "price": "150.000đ",
        "desc": "Túi đeo phối màu be trung tính, thiết kế hiện đại, tiện lợi mang cả thế giới đi theo.",
        "imgDefault": "/images/products/tui-deo-happy-chess-be.png"
    },
    {
        "id": 13,
        "name": "Bàn cờ gấp gọn nâm châm",
        "price": "250.000đ",
        "desc": "Bàn cờ nhỏ gọn, thiết kế thông minh tiện lợi, dễ dàng mang đi cà phê, du lịch.",
        "imgDefault": "/images/products/ban-co-gap-gon-nam-cham-1.png",
        "imgHover": "/images/products/ban-co-gap-gon-nam-cham-2.png"
    },
    {
        "id": 14,
        "name": "Nón Live Well Your Way - Trắng",
        "price": "190.000đ",
        "desc": "Hoàn thiện outfit với nón lưỡi trai Live Well Your Way. Form nón cứng cáp, che nắng tốt, phù hợp du lịch, thể thao và sử dụng hằng ngày.",
        "imgDefault": "/images/products/non-live-well-your-way-trang.png"
    },
    {
        "id": 15,
        "name": "Nón Live Well Your Way - Xanh",
        "price": "190.000đ",
        "desc": "Hoàn thiện outfit với nón lưỡi trai Live Well Your Way. Form nón cứng cáp, che nắng tốt, phù hợp du lịch, thể thao và sử dụng hằng ngày.",
        "imgDefault": "/images/products/non-live-well-your-way-xanh.png"
    },
    {
        "id": 16,
        "name": "Bình giữ nhiệt USFD",
        "price": "190.000đ",
        "desc": "Bình giữ nhiệt thuộc BST A Unified System Fitness Design, thiết kế thời trang thể thao cá tính, giữ lạnh cả ngày dài.",
        "imgDefault": "/images/products/binh-giu-nhiet-usfd.png"
    },
    {
        "id": 17,
        "name": "Khăn thể thao hiệu Polo Beverly Hills",
        "price": "200.000đ",
        "desc": "Khăn lông mềm mịn, thấm hút tốt. Mang lại cảm giác thoải mái và tiện dụng trong mọi hoạt động hằng ngày.",
        "imgDefault": "/images/products/khan-the-thao-polo-beverly-hills.png"
    },
    {
        "id": 18,
        "name": "Huy hiệu Happy Chess",
        "price": "25.000đ",
        "desc": "Pin cài balo, túi xách, các bé nhỏ xinh, sành điệu, lan tỏa tinh thần Happy Chess: vui, tự tin, yêu cờ.",
        "imgDefault": "/images/products/huy-hieu-happy-chess.png"
    },
    {
        "id": 19,
        "name": "Móc khóa Happy Chess",
        "price": "35.000đ",
        "desc": "Móc khóa Happy Chess – nhỏ xinh, tiện dụng, mang năng lượng tích cực và tinh thần yêu cờ mỗi ngày.",
        "imgDefault": "/images/products/moc-khoa-happy-chess.png"
    }
];
