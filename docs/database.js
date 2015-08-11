db.schools.update(
	{ code : {$in: ["DDP", "DDY", "DDQ","DDS","DDK", "DDF"]}},    
	{ $set: { status : 1 } },    
	{ upsert: true , multi: true,} 
);

//db.schools.insert({ code: "DDK", name : "Trường Đại học Bách Khoa - ĐH Đà Nẵng", status : 1});
db.schools.insert({ code: "DDC", name : "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng", status : 1});
db.schools.insert({ code: "DDI", name : "Trường Cao đẳng Công nghệ Thông tin - ĐH Đà Nẵng", status : 1});

db.faculties.remove( { school_code : "DDK" });
db.faculties.insert([{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D420201", name : "Công nghệ Sinh", group : ["Toán-Lý-Hóa","Toán-Hóa-Anh"], quota : 60},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D420201LT", name : "Công nghệ Sinh (LT)", group : ["Toán-Lý-Hóa","Toán-Hóa-Anh"], quota : 0},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D480201", name : "Công nghệ thông tin", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 190},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D480201CLC1", name : "Công nghệ thông tin (CLC Ngoại ngữ Anh)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 40},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D480201CLC2", name : "Công nghệ thông tin (CLC Ngoại ngữ Nhật + Anh)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 40},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D480201LT", name : "Công nghệ thông tin (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 0},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D540101", name : "Công nghệ thực phẩm", group : ["Toán-Lý-Hóa","Toán-Hóa-Anh"], quota : 120},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D540101LT", name : "Công nghệ thực phẩm (LT)", group : ["Toán-Lý-Hóa","Toán-Hóa-Anh"], quota : 0},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D510202", name : "Công nghệ chế tạo máy", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 140},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D510202LT", name : "Công nghệ chế tạo máy (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 0},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D510105", name : "Công nghệ kỹ thuật vật liệu xây dựng", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 60},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "PFIEV", name : "Ch.trình đào tạo Kỹ sư CLC Việt - Pháp", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 80},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D905206", name : "Ch.trình tiên tiến ngành Điện tử viễn thông", group : ["Toán-Lý-Anh","Toán-Hóa-Anh"], quota : 80},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D905216", name : "Ch.trình tiên tiến ngành Hệ thống nhúng", group : ["Toán-Lý-Anh","Toán-Hóa-Anh"], quota : 40},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D580102", name : "Kiến trúc", group : ["Toán-Văn-Vẽ"], quota : 140},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D580301", name : "Kinh tế xây dựng", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 100},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D580205", name : "KT xây dựng công trình giao thông", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 160},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D580205CLC", name : "KT xây dựng công trình giao thông (CLC)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 40},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D580205LT", name : "KT xây dựng công trình giao thông (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 0},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520201CLC", name : "Kỹ thuật điện-điện tử (CLC)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 40},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520216", name : "Kỹ thuật điều khiển và tự động hóa", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 80},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520216CLC", name : "Kỹ thuật điều khiển và tự động hóa (CLC)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 40},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520201", name : "Kỹ thuật điện-điện tử", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 160},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520201LT", name : "Kỹ thuật điện-điện tử (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 0},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520301", name : "Kỹ thuật Hóa", group : ["Toán-Lý-Hóa","Toán-Hóa-Anh"], quota : 60},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520301LT", name : "Kỹ thuật Hóa (LT)", group : ["Toán-Lý-Hóa","Toán-Hóa-Anh"], quota : 0},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520122", name : "Kỹ thuật tàu thủy", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 50},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D580202", name : "Kỹ thuật công trình thủy", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 60},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D580201", name : "Kỹ thuật công trình xây dựng", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 240},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D580201LT", name : "Kỹ thuật công trình xây dựng (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 0},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520114", name : "Kỹ thuật cơ - điện tử", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 80},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520114LT", name : "Kỹ thuật cơ - điện tử (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 0},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520103", name : "Kỹ thuật cơ khí", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 150},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520103LT", name : "Kỹ thuật cơ khí (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 0},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520604", name : "Kỹ thuật dầu khí", group : ["Toán-Lý-Hóa","Toán-Hóa-Anh"], quota : 80},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520209", name : "Kỹ thuật điện tử và viễn thông", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 220},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520209LT", name : "Kỹ thuật điện tử và viễn thông (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 0},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520320", name : "Kỹ thuật môi trường", group : ["Toán-Lý-Hóa","Toán-Hóa-Anh"], quota : 70},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520320LT", name : "Kỹ thuật môi trường (LT)", group : ["Toán-Lý-Hóa","Toán-Hóa-Anh"], quota : 0},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520115", name : "Kỹ thuật nhiệt", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 150},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D520115LT", name : "Kỹ thuật nhiệt (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 0},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D580208", name : "Kỹ thuật xây dựng", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 60},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D510601", name : "Quản lý công nghiệp", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 60},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D850101", name : "Quản lý tài nguyên và môi trường", group : ["Toán-Lý-Hóa","Toán-Hóa-Anh"], quota : 60},
{ school_name: "Trường Đại học Bách Khoa - ĐH Đà Nẵng",school_code: "DDK", code: "D140214", name : "Sư phạm kỹ thuật công nghiệp", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 50},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340405", name : "Hệ thống thông tin quản lý", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 120},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340405LT", name : "Hệ thống thông tin quản lý (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 0},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340301", name : "Kế toán", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 200},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340301LT", name : "Kế toán (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 0},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340302", name : "Kiểm toán", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 110},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340120", name : "Kinh doanh quốc tế", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 150},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340121", name : "Kinh doanh thương mại", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 100},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340121LT", name : "Kinh doanh thương mại (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 0},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D310101", name : "Kinh tế", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 190},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D380101", name : "Luật", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 90},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D380107", name : "Luật kinh tế", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 80},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340115", name : "Marketing", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 95},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D310205", name : "Quản lý Nhà nước", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 75},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340103", name : "Quản trị dịch vụ du lịch và lữ hành", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 150},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340103LT", name : "Quản trị dịch vụ du lịch và lữ hành (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 0},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340101", name : "Quản trị kinh doanh", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 250},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340107", name : "Quản trị khách sạn", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 90},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340404", name : "Quản trị nhân lực", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 70},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340201", name : "Tài chính - Ngân hàng", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 230},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D340201LT", name : "Tài chính - Ngân hàng (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 0},
{ school_name: "Trường Đại học Kinh tế - ĐH Đà Nẵng",school_code: "DDQ", code: "D460201", name : "Thống kê", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 40},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D320101", name : "Báo chí", group : ["Văn-Sử-Địa","Văn-Toán-Anh"], quota : 120},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D420201", name : "Công nghệ Sinh", group : ["Toán-Hóa-Sinh"], quota : 65},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D480201", name : "Công nghệ thông tin", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 120},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D760101", name : "Công tác xã hội", group : ["Văn-Sử-Địa","Văn-Toán-Anh"], quota : 70},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D310501", name : "Địa lý học", group : ["Văn-Sử-Địa","Văn-Toán-Anh"], quota : 70},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D440217", name : "Địa lý tự nhiên", group : ["Toán-Lý-Hóa","Toán-Hóa-Sinh học"], quota : 70},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D140205", name : "Giáo dục Chính trị", group : ["Văn-Sử-Địa","Văn-Toán-Anh"], quota : 50},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D140201", name : "Giáo dục Mầm non", group : ["Văn-Toán-Năng khiếu"], quota : 60},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D140202", name : "Giáo dục Tiểu học", group : ["Văn-Toán-Anh"], quota : 60},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D440112", name : "Hóa học", group : ["Toán-Lý-Hóa","Toán-Hóa-Anh"], quota : 200},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D440301", name : "Khoa học môi trường", group : ["Toán-Lý-Hóa"], quota : 70},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D220310", name : "Sử", group : ["Văn-Sử-Địa","Văn-Toán-Anh"], quota : 50},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D850101", name : "Quản lý tài nguyên và môi trường", group : ["Toán-Hóa-Sinh"], quota : 65},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "C140221", name : "Sư phạm Âm nhạc", group : ["Văn-Kiến thức Âm nhạc-Năng khiếu Âm nhạc"], quota : 40},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D140219", name : "Sư phạm Địa lý", group : ["Văn-Sử-Địa"], quota : 50},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D140212", name : "Sư phạm Hoá học", group : ["Toán-Lý-Hóa"], quota : 50},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D140218", name : "Sư phạm Sử", group : ["Văn-Sử-Địa"], quota : 50},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D140217", name : "Sư phạm Văn", group : ["Văn-Sử-Địa"], quota : 50},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D140213", name : "Sư phạm Sinh", group : ["Toán-Hóa-Sinh"], quota : 50},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D140210", name : "Sư phạm Tin học", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 50},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D140209", name : "Sư phạm Toán học", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 50},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D140211", name : "Sư phạm Vật lý", group : ["Toán-Lý-Hóa"], quota : 50},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D310401", name : "Tâm lý học", group : ["Toán-Hóa-Sinh","Văn-Sử-Địa"], quota : 70},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D460112", name : "Toán ứng dụng", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 130},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D440102", name : "Vật lý học", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 65},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D220340", name : "Văn hoá học", group : ["Văn-Sử-Địa","Văn-Toán-Anh"], quota : 65},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D220330", name : "Văn học", group : ["Văn-Sử-Địa","Văn-Toán-Anh"], quota : 110},
{ school_name: "Trường Đại học Sư phạm - ĐH Đà nẵng",school_code: "DDS", code: "D220113", name : "Việt Nam học", group : ["Văn-Sử-Địa","Văn-Toán-Anh"], quota : 80},
{ school_name: "Trường Đại học Ngoại ngữ - ĐH Đà Nẵng",school_code: "DDF", code: "D220213", name : "Đông phương học", group : ["Toán-Lý-Anh","Văn-Toán-Anh"], quota : 80},
{ school_name: "Trường Đại học Ngoại ngữ - ĐH Đà Nẵng",school_code: "DDF", code: "D220201", name : "Ngôn ngữ Anh", group : ["Văn-Toán-Anh"], quota : 640},
{ school_name: "Trường Đại học Ngoại ngữ - ĐH Đà Nẵng",school_code: "DDF", code: "D220210", name : "Ngôn ngữ Hàn Quốc", group : ["Văn-Toán-Anh"], quota : 100},
{ school_name: "Trường Đại học Ngoại ngữ - ĐH Đà Nẵng",school_code: "DDF", code: "D220202", name : "Ngôn ngữ Nga", group : ["Toán-Lý-Anh","Văn-Toán-Anh","Văn-Toán-Nga"], quota : 70},
{ school_name: "Trường Đại học Ngoại ngữ - ĐH Đà Nẵng",school_code: "DDF", code: "D220209", name : "Ngôn ngữ Nhật", group : ["Văn-Toán-Anh","Văn-Toán-Nhật"], quota : 100},
{ school_name: "Trường Đại học Ngoại ngữ - ĐH Đà Nẵng",school_code: "DDF", code: "D220203", name : "Ngôn ngữ Pháp", group : ["Văn-Toán-Anh","Văn-Toán-Pháp"], quota : 70},
{ school_name: "Trường Đại học Ngoại ngữ - ĐH Đà Nẵng",school_code: "DDF", code: "D220204", name : "Ngôn ngữ Trung Quốc", group : ["Văn-Toán-Anh","Văn-Toán-Trung"], quota : 105},
{ school_name: "Trường Đại học Ngoại ngữ - ĐH Đà Nẵng",school_code: "DDF", code: "D220212", name : "Quốc tế học", group : ["Toán-Lý-Anh","Văn-Toán-Anh"], quota : 135},
{ school_name: "Trường Đại học Ngoại ngữ - ĐH Đà Nẵng",school_code: "DDF", code: "D140231", name : "Sư phạm Anh", group : ["Văn-Toán-Anh"], quota : 140},
{ school_name: "Trường Đại học Ngoại ngữ - ĐH Đà Nẵng",school_code: "DDF", code: "D140233", name : "Sư phạm Pháp", group : ["Văn-Toán-Anh","Văn-Toán-Pháp"], quota : 30},
{ school_name: "Trường Đại học Ngoại ngữ - ĐH Đà Nẵng",school_code: "DDF", code: "D140234", name : "Sư phạm Trung Quốc", group : ["Văn-Toán-Anh","Văn-Toán-Trung"], quota : 30},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510102", name : "Công nghệ kỹ thuật công trình xây dựng", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 80},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510301", name : "Công nghệ kỹ thuật điện-điện tử", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 280},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510301LT", name : "Công nghệ kỹ thuật điện-điện tử (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 0},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510302", name : "Công nghệ kỹ thuật điện tử - truyền thông", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 110},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510302LT", name : "Công nghệ kỹ thuật điện tử - truyền thông (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 0},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510401", name : "Công nghệ kỹ thuật hoá học", group : ["Toán-Lý-Hóa","Toán-Hóa-Sinh","Toán-Hóa-Anh"], quota : 70},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510101", name : "Công nghệ kỹ thuật kiến trúc", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Toán-Văn-Vẽ","Văn-Toán-Lý"], quota : 70},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510205", name : "Công nghệ Kỹ thuật ô tô", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 170},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510205LT", name : "Công nghệ Kỹ thuật ô tô (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 0},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510201", name : "Công nghệ kỹ thuật cơ khí", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 180},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510201LT", name : "Công nghệ kỹ thuật cơ khí (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 0},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C480201", name : "Công nghệ Thông tin", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 220},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C480201LT", name : "Công nghệ Thông tin (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 0},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510406", name : "Công nghệ kỹ thuật môi trường", group : ["Toán-Lý-Hóa","Toán-Hóa-Sinh","Toán-Hóa-Anh"], quota : 100},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510203", name : "Công nghệ kỹ thuật cơ điện tử", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 120},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510104", name : "Công nghệ kỹ thuật giao thông", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 110},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510104LT", name : "Công nghệ kỹ thuật giao thông (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 0},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510206", name : "Công nghệ kỹ thuật nhiệt", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 100},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510103", name : "Công nghệ kỹ thuật xây dựng", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 160},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C510103LT", name : "Công nghệ kỹ thuật xây dựng (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 0},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C420201", name : "Công nghệ sinh học", group : ["Toán-Lý-Hóa","Toán-Hóa-Sinh","Toán-Hóa-Anh","Toán-Sinh-Anh"], quota : 90},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C540102", name : "Công nghệ thực phẩm", group : ["Toán-Lý-Hóa","Toán-Hóa-Sinh","Toán-Hóa-Anh"], quota : 90},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C340405", name : "Hệ thống thông tin quản lý", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 90},
{ school_name: "Trường Cao đẳng Công nghệ - ĐH Đà Nẵng",school_code: "DDC", code: "C580302", name : "Quản lý xây dựng", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Lý"], quota : 60},
{ school_name: "Trường Cao đẳng Công nghệ Thông tin",school_code: "DDI", code: "C510304", name : "Công nghệ kỹ thuật máy tính", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh","Toán-Hóa-Anh"], quota : 50},
{ school_name: "Trường Cao đẳng Công nghệ Thông tin",school_code: "DDI", code: "C480201", name : "Công nghệ thông tin", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh","Toán-Hóa-Anh"], quota : 340},
{ school_name: "Trường Cao đẳng Công nghệ Thông tin",school_code: "DDI", code: "C480201LT", name : "Công nghệ thông tin (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh","Toán-Hóa-Anh"], quota : 0},
{ school_name: "Trường Cao đẳng Công nghệ Thông tin",school_code: "DDI", code: "C480104", name : "Hệ thống thông tin", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh","Toán-Hóa-Anh"], quota : 60},
{ school_name: "Trường Cao đẳng Công nghệ Thông tin",school_code: "DDI", code: "C340301", name : "Kế toán", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh","Toán-Hóa-Anh"], quota : 180},
{ school_name: "Trường Cao đẳng Công nghệ Thông tin",school_code: "DDI", code: "C340301LT", name : "Kế toán (LT)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh","Toán-Hóa-Anh"], quota : 0},
{ school_name: "Trường Cao đẳng Công nghệ Thông tin",school_code: "DDI", code: "C480101", name : "Khoa học máy tính", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh","Toán-Hóa-Anh"], quota : 70},
{ school_name: "Trường Cao đẳng Công nghệ Thông tin",school_code: "DDI", code: "C340115", name : "Marketing", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh","Toán-Hóa-Anh"], quota : 50},
{ school_name: "Trường Cao đẳng Công nghệ Thông tin",school_code: "DDI", code: "C340101", name : "Quản trị kinh doanh", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh","Toán-Hóa-Anh"], quota : 120},
{ school_name: "Trường Cao đẳng Công nghệ Thông tin",school_code: "DDI", code: "C480202", name : "Tin học ứng dụng", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh","Toán-Hóa-Anh"], quota : 110},
{ school_name: "Trường Cao đẳng Công nghệ Thông tin",school_code: "DDI", code: "C480102", name : "Truyền thông và mạng máy tính", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh","Toán-Hóa-Anh"], quota : 70},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "C420201", name : "Công nghệ Sinh (Cao đẳng)", group : ["Toán-Lý-Hóa","Toán-Hóa-Sinh"], quota : 20},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "D480201", name : "Công nghệ thông tin", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Toán-Hóa-Anh"], quota : 40},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "C510102", name : "Công nghệ kỹ thuật công trình xây dựng (Cao đẳng)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh"], quota : 20},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "D140202", name : "Giáo dục Tiểu học", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 60},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "C340301", name : "Kế toán (Cao đẳng)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 20},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "D340301", name : "Kế toán (Đại học)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 20},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "D620114", name : "Kinh doanh nông nghiệp", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 15},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "C340121", name : "Kinh doanh thương mại (Cao đẳng)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 20},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "D340121", name : "Kinh doanh thương mại (Đại học)", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 15},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "D580301", name : "Kinh tế xây dựng", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Toán-Hóa-Anh"], quota : 40},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "D520201", name : "Kỹ thuật điện-điện tử", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Toán-Hóa-Anh"], quota : 40},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "D580205", name : "Kỹ thuật xây dựng công trình giao thông", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Toán-Hóa-Anh"], quota : 40},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "D380107", name : "Luật kinh tế", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 20},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "D340103", name : "Quản trị dịch vụ du lịch và lữ hành", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 15},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "D340101", name : "Quản trị kinh doanh", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 40},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "D140209", name : "Sư phạm Toán học", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 40},
{ school_name: "Phân hiệu Đại học Đà Nẵng tại Kon Tum",school_code: "DDP", code: "D340201", name : "Tài chính - ngân hàng", group : ["Toán-Lý-Hóa","Toán-Lý-Anh","Văn-Toán-Anh"], quota : 30},
{ school_name: "Khoa Y Dược – ĐH Đà Nẵng",school_code: "DDY", code: "D720501", name : "Điều dưỡng", group : ["Toán-Hóa-Sinh"], quota : 60},
{ school_name: "Khoa Y Dược – ĐH Đà Nẵng",school_code: "DDY", code: "D720101", name : "Y đa khoa", group : ["Toán-Hóa-Sinh"], quota : 140}]);