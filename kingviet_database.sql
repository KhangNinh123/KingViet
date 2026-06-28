-- MySQL dump 10.13  Distrib 9.6.0, for macos26.4 (arm64)
--
-- Host: localhost    Database: kingviet
-- ------------------------------------------------------
-- Server version	9.6.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
-- SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
-- SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` text COLLATE utf8mb4_unicode_ci,
  `content` longtext COLLATE utf8mb4_unicode_ci,
  `thumbnail` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT 'general',
  `is_published` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `idx_category` (`category`),
  KEY `idx_is_published` (`is_published`),
  KEY `idx_created_at` (`created_at`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (5,'tft hay','tft-hay','tft Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn','<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">&nbsp;văn&nbsp;bản&nbsp;với&nbsp;nhau&nbsp;để&nbsp;tạo&nbsp;thành&nbsp;một&nbsp;bản&nbsp;mẫu&nbsp;văn&nbsp;bản.&nbsp;Đoạn&nbsp;văn&nbsp;bản&nbsp;này&nbsp;không&nbsp;những&nbsp;đã&nbsp;tồn&nbsp;tại&nbsp;năm&nbsp;thế&nbsp;kỉ,&nbsp;mà&nbsp;khi&nbsp;được&nbsp;áp&nbsp;dụng&nbsp;vào&nbsp;tin&nbsp;học&nbsp;văn&nbsp;phòng,&nbsp;nội&nbsp;dung&nbsp;của&nbsp;nó&nbsp;vẫn&nbsp;không&nbsp;hề&nbsp;bị&nbsp;thay&nbsp;đổi.&nbsp;Nó&nbsp;đã&nbsp;được&nbsp;phổ&nbsp;biến&nbsp;trong&nbsp;những&nbsp;năm&nbsp;1960&nbsp;nhờ&nbsp;việc&nbsp;bán&nbsp;những&nbsp;bản&nbsp;giấy&nbsp;Letraset&nbsp;in&nbsp;những&nbsp;đoạn&nbsp;Lorem&nbsp;Ipsum,&nbsp;và&nbsp;gần&nbsp;đây&nbsp;hơn,&nbsp;được&nbsp;sử&nbsp;dụng&nbsp;trong&nbsp;các&nbsp;ứng&nbsp;dụng&nbsp;dàn&nbsp;trang,&nbsp;như&nbsp;Aldus&nbsp;PageMaker.</span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">Lorem&nbsp;Ipsum</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">&nbsp;chỉ&nbsp;đơn&nbsp;giản&nbsp;là&nbsp;một&nbsp;đoạn&nbsp;văn&nbsp;bản&nbsp;giả,&nbsp;được&nbsp;dùng&nbsp;vào&nbsp;việc&nbsp;trình&nbsp;bày&nbsp;và&nbsp;dàn&nbsp;trang&nbsp;phục&nbsp;vụ&nbsp;cho&nbsp;in&nbsp;ấn.&nbsp;Lorem&nbsp;Ipsum&nbsp;đã&nbsp;được&nbsp;sử&nbsp;dụng&nbsp;như&nbsp;một&nbsp;văn&nbsp;bản&nbsp;chuẩn&nbsp;cho&nbsp;ngành&nbsp;công&nbsp;nghiệp&nbsp;in&nbsp;ấn&nbsp;từ&nbsp;những&nbsp;năm&nbsp;1500,&nbsp;khi&nbsp;một&nbsp;họa&nbsp;sĩ&nbsp;vô&nbsp;danh&nbsp;ghép&nbsp;nhiều&nbsp;đoạn&nbsp;văn&nbsp;bản&nbsp;với&nbsp;nhau&nbsp;để&nbsp;tạo&nbsp;thành&nbsp;một&nbsp;bản&nbsp;mẫu&nbsp;văn&nbsp;bản.&nbsp;Đoạn&nbsp;văn&nbsp;bản&nbsp;này&nbsp;không&nbsp;những&nbsp;đã&nbsp;tồn&nbsp;tại&nbsp;năm&nbsp;thế&nbsp;kỉ,&nbsp;mà&nbsp;khi&nbsp;được&nbsp;áp&nbsp;dụng&nbsp;vào&nbsp;tin&nbsp;học&nbsp;văn&nbsp;phòng,&nbsp;nội&nbsp;dung&nbsp;của&nbsp;nó&nbsp;vẫn&nbsp;không&nbsp;hề&nbsp;bị&nbsp;thay&nbsp;đổi.&nbsp;Nó&nbsp;đã&nbsp;được&nbsp;phổ&nbsp;biến&nbsp;trong&nbsp;những&nbsp;năm&nbsp;1960&nbsp;nhờ&nbsp;việc&nbsp;bán&nbsp;những&nbsp;bản&nbsp;giấy&nbsp;Letraset&nbsp;in&nbsp;những&nbsp;đoạn&nbsp;Lorem&nbsp;Ipsum,&nbsp;và&nbsp;gần&nbsp;đây&nbsp;hơn,&nbsp;được&nbsp;sử&nbsp;dụng&nbsp;trong&nbsp;các&nbsp;ứng&nbsp;dụng&nbsp;dàn&nbsp;trang,&nbsp;như&nbsp;Aldus&nbsp;PageMaker.</span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">Lorem&nbsp;Ipsum</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">&nbsp;chỉ&nbsp;đơn&nbsp;giản&nbsp;là&nbsp;một&nbsp;đoạn&nbsp;văn&nbsp;bản&nbsp;giả,&nbsp;được&nbsp;dùng&nbsp;vào&nbsp;việc&nbsp;trình&nbsp;bày&nbsp;và&nbsp;dàn&nbsp;trang&nbsp;phục&nbsp;vụ&nbsp;cho&nbsp;in&nbsp;ấn.&nbsp;Lorem&nbsp;Ipsum&nbsp;đã&nbsp;được&nbsp;sử&nbsp;dụng&nbsp;như&nbsp;một&nbsp;văn&nbsp;bản&nbsp;chuẩn&nbsp;cho&nbsp;ngành&nbsp;công&nbsp;nghiệp&nbsp;in&nbsp;ấn&nbsp;từ&nbsp;những&nbsp;năm&nbsp;1500,&nbsp;khi&nbsp;một&nbsp;họa&nbsp;sĩ&nbsp;vô&nbsp;danh&nbsp;ghép&nbsp;nhiều&nbsp;đoạn&nbsp;văn&nbsp;bản&nbsp;với&nbsp;nhau&nbsp;để&nbsp;tạo&nbsp;thành&nbsp;một&nbsp;bản&nbsp;mẫu&nbsp;văn&nbsp;bản.&nbsp;Đoạn&nbsp;văn&nbsp;bản&nbsp;này&nbsp;không&nbsp;những&nbsp;đã&nbsp;tồn&nbsp;tại&nbsp;năm&nbsp;thế&nbsp;kỉ,&nbsp;mà&nbsp;khi&nbsp;được&nbsp;áp&nbsp;dụng&nbsp;vào&nbsp;tin&nbsp;học&nbsp;văn&nbsp;phòng,&nbsp;nội&nbsp;dung&nbsp;của&nbsp;nó&nbsp;vẫn&nbsp;không&nbsp;hề&nbsp;bị&nbsp;thay&nbsp;đổi.&nbsp;Nó&nbsp;đã&nbsp;được&nbsp;phổ&nbsp;biến&nbsp;trong&nbsp;những&nbsp;năm&nbsp;1960&nbsp;nhờ&nbsp;việc&nbsp;bán&nbsp;những&nbsp;bản&nbsp;giấy&nbsp;Letraset&nbsp;in&nbsp;những&nbsp;đoạn&nbsp;Lorem&nbsp;Ipsum,&nbsp;và&nbsp;gần&nbsp;đây&nbsp;hơn,&nbsp;được&nbsp;sử&nbsp;dụng&nbsp;trong&nbsp;các&nbsp;ứng&nbsp;dụng&nbsp;dàn&nbsp;trang,&nbsp;như&nbsp;Aldus&nbsp;PageMaker.</span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">Lorem&nbsp;Ipsum</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">&nbsp;chỉ&nbsp;đơn&nbsp;giản&nbsp;là&nbsp;một&nbsp;đoạn&nbsp;văn&nbsp;bản&nbsp;giả,&nbsp;được&nbsp;dùng&nbsp;vào&nbsp;việc&nbsp;trình&nbsp;bày&nbsp;và&nbsp;dàn&nbsp;trang&nbsp;phục&nbsp;vụ&nbsp;cho&nbsp;in&nbsp;ấn.&nbsp;Lorem&nbsp;Ipsum&nbsp;đã&nbsp;được&nbsp;sử&nbsp;dụng&nbsp;như&nbsp;một&nbsp;văn&nbsp;bản&nbsp;chuẩn&nbsp;cho&nbsp;ngành&nbsp;công&nbsp;nghiệp&nbsp;in&nbsp;ấn&nbsp;từ&nbsp;những&nbsp;năm&nbsp;1500,&nbsp;khi&nbsp;một&nbsp;họa&nbsp;sĩ&nbsp;vô&nbsp;danh&nbsp;ghép&nbsp;nhiều&nbsp;đoạn&nbsp;văn&nbsp;bản&nbsp;với&nbsp;nhau&nbsp;để&nbsp;tạo&nbsp;thành&nbsp;một&nbsp;bản&nbsp;mẫu&nbsp;văn&nbsp;bản.&nbsp;Đoạn&nbsp;văn&nbsp;bản&nbsp;này&nbsp;không&nbsp;những&nbsp;đã&nbsp;tồn&nbsp;tại&nbsp;năm&nbsp;thế&nbsp;kỉ,&nbsp;mà&nbsp;khi&nbsp;được&nbsp;áp&nbsp;dụng&nbsp;vào&nbsp;tin&nbsp;học&nbsp;văn&nbsp;phòng,&nbsp;nội&nbsp;dung&nbsp;của&nbsp;nó&nbsp;vẫn&nbsp;không&nbsp;hề&nbsp;bị&nbsp;thay&nbsp;đổi.&nbsp;Nó&nbsp;đã&nbsp;được&nbsp;phổ&nbsp;biến&nbsp;trong&nbsp;những&nbsp;năm&nbsp;1960&nbsp;nhờ&nbsp;việc&nbsp;bán&nbsp;những&nbsp;bản&nbsp;giấy&nbsp;Letraset&nbsp;in&nbsp;những&nbsp;đoạn&nbsp;Lorem&nbsp;Ipsum,&nbsp;và&nbsp;gần&nbsp;đây&nbsp;hơn,&nbsp;được&nbsp;sử&nbsp;dụng&nbsp;trong&nbsp;các&nbsp;ứng&nbsp;dụng&nbsp;dàn&nbsp;trang,&nbsp;như&nbsp;Aldus&nbsp;PageMaker.</span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">Lorem&nbsp;Ipsum</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">&nbsp;chỉ&nbsp;đơn&nbsp;giản&nbsp;là&nbsp;một&nbsp;đoạn&nbsp;văn&nbsp;bản&nbsp;giả,&nbsp;được&nbsp;dùng&nbsp;vào&nbsp;việc&nbsp;trình&nbsp;bày&nbsp;và&nbsp;dàn&nbsp;trang&nbsp;phục&nbsp;vụ&nbsp;cho&nbsp;in&nbsp;ấn.&nbsp;Lorem&nbsp;Ipsum&nbsp;đã&nbsp;được&nbsp;sử&nbsp;dụng&nbsp;như&nbsp;một&nbsp;văn&nbsp;bản&nbsp;chuẩn&nbsp;cho&nbsp;ngành&nbsp;công&nbsp;nghiệp&nbsp;in&nbsp;ấn&nbsp;từ&nbsp;những&nbsp;năm&nbsp;1500,&nbsp;khi&nbsp;một&nbsp;họa&nbsp;sĩ&nbsp;vô&nbsp;danh&nbsp;ghép&nbsp;nhiều&nbsp;đoạn&nbsp;văn&nbsp;bản&nbsp;với&nbsp;nhau&nbsp;để&nbsp;tạo&nbsp;thành&nbsp;một&nbsp;bản&nbsp;mẫu&nbsp;văn&nbsp;bản.&nbsp;Đoạn&nbsp;văn&nbsp;bản&nbsp;này&nbsp;không&nbsp;những&nbsp;đã&nbsp;tồn&nbsp;tại&nbsp;năm&nbsp;thế&nbsp;kỉ,&nbsp;mà&nbsp;khi&nbsp;được&nbsp;áp&nbsp;dụng&nbsp;vào&nbsp;tin&nbsp;học&nbsp;văn&nbsp;phòng,&nbsp;nội&nbsp;dung&nbsp;của&nbsp;nó&nbsp;vẫn&nbsp;không&nbsp;hề&nbsp;bị&nbsp;thay&nbsp;đổi.&nbsp;Nó&nbsp;đã&nbsp;được&nbsp;phổ&nbsp;biến&nbsp;trong&nbsp;những&nbsp;năm&nbsp;1960&nbsp;nhờ&nbsp;việc&nbsp;bán&nbsp;những&nbsp;bản&nbsp;giấy&nbsp;Letraset&nbsp;in&nbsp;những&nbsp;đoạn&nbsp;Lorem&nbsp;Ipsum,&nbsp;và&nbsp;gần&nbsp;đây&nbsp;hơn,&nbsp;được&nbsp;sử&nbsp;dụng&nbsp;trong&nbsp;các&nbsp;ứng&nbsp;dụng&nbsp;dàn&nbsp;trang,&nbsp;như&nbsp;Aldus&nbsp;PageMaker.</span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">Lorem&nbsp;Ipsum</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">&nbsp;chỉ&nbsp;đơn&nbsp;giản&nbsp;là&nbsp;một&nbsp;đoạn&nbsp;văn&nbsp;bản&nbsp;giả,&nbsp;được&nbsp;dùng&nbsp;vào&nbsp;việc&nbsp;trình&nbsp;bày&nbsp;và&nbsp;dàn&nbsp;trang&nbsp;phục&nbsp;vụ&nbsp;cho&nbsp;in&nbsp;ấn.&nbsp;Lorem&nbsp;Ipsum&nbsp;đã&nbsp;được&nbsp;sử&nbsp;dụng&nbsp;như&nbsp;một&nbsp;văn&nbsp;bản&nbsp;chuẩn&nbsp;cho&nbsp;ngành&nbsp;công&nbsp;nghiệp&nbsp;in&nbsp;ấn&nbsp;từ&nbsp;những&nbsp;năm&nbsp;1500,&nbsp;khi&nbsp;một&nbsp;họa&nbsp;sĩ&nbsp;vô&nbsp;danh&nbsp;ghép&nbsp;nhiều&nbsp;đoạn&nbsp;văn&nbsp;bản&nbsp;với&nbsp;nhau&nbsp;để&nbsp;tạo&nbsp;thành&nbsp;một&nbsp;bản&nbsp;mẫu&nbsp;văn&nbsp;bản.&nbsp;Đoạn&nbsp;văn&nbsp;bản&nbsp;này&nbsp;không&nbsp;những&nbsp;đã&nbsp;tồn&nbsp;tại&nbsp;năm&nbsp;thế&nbsp;kỉ,&nbsp;mà&nbsp;khi&nbsp;được&nbsp;áp&nbsp;dụng&nbsp;vào&nbsp;tin&nbsp;học&nbsp;văn&nbsp;phòng,&nbsp;nội&nbsp;dung&nbsp;của&nbsp;nó&nbsp;vẫn&nbsp;không&nbsp;hề&nbsp;bị&nbsp;thay&nbsp;đổi.&nbsp;Nó&nbsp;đã&nbsp;được&nbsp;phổ&nbsp;biến&nbsp;trong&nbsp;những&nbsp;năm&nbsp;1960&nbsp;nhờ&nbsp;việc&nbsp;bán&nbsp;những&nbsp;bản&nbsp;giấy&nbsp;Letraset&nbsp;in&nbsp;những&nbsp;đoạn&nbsp;Lorem&nbsp;Ipsum,&nbsp;và&nbsp;gần&nbsp;đây&nbsp;hơn,&nbsp;được&nbsp;sử&nbsp;dụng&nbsp;trong&nbsp;các&nbsp;ứng&nbsp;dụng&nbsp;dàn&nbsp;trang,&nbsp;như&nbsp;Aldus&nbsp;PageMaker.</span></p><p><img src=\"http://localhost:5001/uploads/1782308108777-image-6.png\"></p>','/uploads/1782308120431-05cdc1e6-0904-4dbb-8b3b-08f8f95c821b.jpeg','general',1,'2026-06-24 13:35:20','2026-06-26 07:20:53'),(6,'Khai mạc giải cờ vua thanh thiếu niên toàn quốc 2026','khai-mac-giai-co-vua-thanh-thieu-nien-toan-quoc-2026','Giải đấu thường niên lớn nhất dành cho các kỳ thủ trẻ chính thức khởi tranh tại Hà Nội với sự tham gia của hàng nghìn vận động viên.','<h1>Khai mạc giải đấu lịch sử</h1><p>Sáng nay, giải cờ vua thanh thiếu niên toàn quốc năm 2026 đã chính thức được khai mạc. Đây là giải đấu nhằm tuyển chọn các tài năng trẻ để đào tạo chuẩn bị cho các giải đấu quốc tế. Hơn 1200 kỳ thủ từ 40 tỉnh thành tham dự.</p><p>Tại lễ khai mạc, đại diện ban tổ chức nhấn mạnh tầm quan trọng của việc rèn luyện tư duy cho thế hệ trẻ thông qua môn thể thao trí tuệ này.</p>',NULL,'general',1,'2026-06-26 07:26:26','2026-06-26 07:26:26'),(7,'Lợi ích của việc học cờ vua từ độ tuổi mầm non','loi-ich-cua-viec-hoc-co-vua-tu-do-tuoi-mam-non','Nhiều nghiên cứu chỉ ra rằng trẻ em tiếp xúc với cờ vua từ 4-5 tuổi có khả năng tập trung và giải quyết vấn đề tốt hơn.','<h2>Học cờ vua sớm giúp phát triển trí não</h2><p>Các nghiên cứu khoa học mới nhất cho thấy việc chơi cờ vua ở độ tuổi mầm non (từ 4 đến 5 tuổi) không chỉ là một trò chơi giải trí mà còn đóng vai trò rất lớn trong việc kích thích sự phát triển của não bộ.</p><ul><li>Tăng khả năng tập trung</li><li>Phát triển tư duy logic</li><li>Rèn luyện tính kiên nhẫn</li></ul><p>KingViet tự hào là đơn vị tiên phong trong việc đưa cờ vua vào chương trình giáo dục mầm non.</p>',NULL,'education',1,'2026-06-26 07:26:26','2026-06-26 07:26:26'),(8,'Bí quyết giúp con học giỏi Toán thông qua Cờ vua','bi-quyet-giup-con-hoc-gioi-toan-thong-qua-co-vua','Toán học và Cờ vua có một sự liên kết kỳ diệu. Học cờ vua không chỉ rèn tư duy logic mà còn cải thiện rõ rệt điểm số môn Toán.','<h2>Toán học và Cờ Vua: Cặp bài trùng</h2><p>Trên bàn cờ 64 ô vuông, các con số và hình học không gian được ứng dụng liên tục. Từ việc tính toán số bước đi của quân Mã, đường chéo của quân Tượng cho đến việc thiết lập chiến thuật phòng thủ, tất cả đều yêu cầu sự vận động của tư duy toán học.</p><p>Rất nhiều phụ huynh tại KingViet chia sẻ rằng sau 6 tháng học cờ vua, thành tích môn Toán của các bé ở trường đã cải thiện đáng kinh ngạc.</p>',NULL,'education',1,'2026-06-26 07:26:26','2026-06-26 07:26:26'),(9,'KingViet ra mắt nền tảng thi đấu cờ vua trực tuyến mới','kingviet-ra-mat-nen-tang-thi-dau-co-vua-truc-tuyen-moi','Nền tảng thi đấu trực tuyến hoàn toàn mới của KingViet mang đến trải nghiệm mượt mà, tích hợp AI phân tích ván đấu.','<h1>Trải nghiệm công nghệ AI trong Cờ Vua</h1><p>KingViet vừa chính thức tung ra phiên bản beta của hệ thống thi đấu cờ vua trực tuyến. Nổi bật nhất là tính năng <strong>Phân tích ván đấu bằng AI</strong>, giúp các kỳ thủ nhí dễ dàng nhận ra nước đi sai lầm và học hỏi từ các đại kiện tướng.</p><p>Hệ thống dự kiến sẽ được áp dụng cho giải đấu nội bộ cuối năm nay.</p>',NULL,'tech',1,'2026-06-26 07:26:26','2026-06-26 07:26:26'),(10,'Giao lưu cùng Đại kiện tướng Lê Quang Liêm tại KingViet','giao-luu-cung-dai-kien-tuong-le-quang-liem-tai-kingviet','Cơ hội hiếm có để các học viên KingViet được gặp gỡ, trò chuyện và thi đấu cờ chớp cùng Đại kiện tướng số 1 Việt Nam.','<h2>Sự kiện đặc biệt tháng 7</h2><p>Vào chủ nhật tuần này, đại kiện tướng Lê Quang Liêm sẽ có buổi ghé thăm và giao lưu cùng các học viên xuất sắc tại cơ sở KingViet. Chương trình bao gồm phần hỏi đáp kinh nghiệm thi đấu quốc tế và màn thi đấu cờ chớp đồng loạt với 20 học viên.</p><p>Phụ huynh và các em học sinh quan tâm có thể đăng ký tham gia trực tiếp tại quầy lễ tân.</p>',NULL,'event',1,'2026-06-26 07:26:26','2026-06-26 07:26:26'),(11,'Khóa học Cờ Vua kết hợp Kỹ năng sống mùa hè 2026','khoa-hoc-co-vua-ket-hop-ky-nang-song-mua-he-2026','Mùa hè này, KingViet mang đến chương trình đào tạo đặc biệt, kết hợp rèn luyện tư duy cờ vua và các kỹ năng sinh tồn, làm việc nhóm.','<h1>Hè sôi động cùng KingViet</h1><p>Để mùa hè của các bé không chỉ quanh quẩn với iPad và tivi, KingViet ra mắt khóa học đặc biệt kéo dài 8 tuần. Các bé không chỉ được nâng cao trình độ cờ vua mà còn tham gia các buổi ngoại khóa kỹ năng sống.</p><h3>Nội dung khóa học:</h3><ol><li>Khai cuộc và Tàn cuộc cơ bản</li><li>Kỹ năng tự bảo vệ bản thân</li><li>Trại hè dã ngoại làm việc nhóm</li></ol><p>Số lượng đăng ký có hạn, quý phụ huynh vui lòng liên hệ hotline để được tư vấn.</p>',NULL,'event',1,'2026-06-26 07:26:26','2026-06-26 07:26:26');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('admin','editor') COLLATE utf8mb4_unicode_ci DEFAULT 'admin',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','$2b$10$8NjiIeEuqdmU8EUuuL0.A.JzgOf8RRSBMZ8M/riJa1ql/uyhkpok.','Quản trị viên','admin','2026-06-24 12:41:49','2026-06-24 12:41:49');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
-- SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-26 14:37:25
