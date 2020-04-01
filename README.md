### Series về cách tạo một profile cho dev cực chất
1. Phần 1: Chuẩn bị và cấu trúc project **html, css, js** cùng **BEM** thần thánh
2. Phần 2: Thiết kế, lắp ráp **home-page** và deploy lên **github-page**
3. Phần 3:  Thiết kế, lắp rap **blog-page** và deploy lên **github-page**
4. Phần 4: ...

## Mục lục
0. Vấn đề
1. Những thứ cần chuẩn bị
2. Tạo repository trên **github.com**
3. **BEM** là gì, sao phải dùng **BEM**
4. Cấu trúc Project
5. Kết bài


## 0. Vấn đề

***Heyzo what's up***

Xin chào tất cả mọi người, trước đây khi mà mình đi xin việc thì đến giai đoạn nộp CV, thì mình hay lên **topcv.vn** ([Link](https://www.topcv.vn/)) hay là **cvsimply.com**([Link](https://www.cvsimply.com/)) để tậu cho mình một cái **CV** phải không nào, việc đó rất tiện nhưng mình cảm thấy nếu mình là **dev** có thể xây dựng cho mình một **CV** theo phong cách của riêng mình thì gây **ấn tượng** mạnh hơn với **nhà tuyển dụng** nha (Biết đâu lọt vào vòng gửi xe ^^)

Hôm nay ở nhà chống dịch **deadline** cũng không nhiều, vì vậy mình sẽ viết một series về cách tạo **CV cực chất cho dev he**, à không riêng gì dev các bạn nào muốn tạo cho mình một **CV của riêng mình** thì cứ đọc. Cái này mình chỉ muốn chia sẻ cho mọi người nên có gì đắc tội mong mọi người nhẹ tay cho em 

**Let's go** 


## 1. Những thứ cần chuẩn bị

> Nào cặp nào bút, nào sách nào vở, không không 

- Editor (Mình sài **VScode** nha ai thích thì sài không thích thì sài)
- Một ít kiến thức về **HTML, CSS, JS** không biết gì lên [đây](https://www.w3schools.com/) tìm nha
- Biết dùng **git** căn bản, ai chưa rành vô [đây](https://www.youtube.com/watch?v=0J2aou7Kj7s&list=PLkY6Xj8Sg8-viFVtaVps_h_Emi2wQyE7q) để học, học hết video đảm bảo biết sài **git** 
- Có một **repository** trên **git hub** không có thì xem dưới mình bày tạo

## 2. Tạo repository trên **github.com**

- Truy cập vào trang web [https://github.com/](https://github.com/), chọn đăng nhập bằng **google** hoặc đăng kí mới

- **New repository**, giao diện hiện ra như hình dưới điền tên vào nha (Mà điền tên nào liên quan tí vì cái này sẽ là **domain** của mình luôn ấy)

[<img src="https://i.imgur.com/4gRn07W.png">](create-new-repository)

- Sau đó nhấn **Create repository** và làm theo các bước dưới đây (gõ trong command line nhé)

```
mkdir MY_PROFILE 
README.md // Tạo file tên như vậy nhá
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/NguyenThienLy/MY_PROFILE.git
git push -u origin master
```

Như vậy

