### Series về cách tạo một CV đơn giản nhưng cực chất cho dev cực chất
1. Phần 1: Chuẩn bị và cấu trúc project **html, css, js** cùng **BEM** thần thánh ([Link](https://dev.to/nguyenthienly/create-cv-with-bem-4io1))
2. Phần 2: Thiết kế, lắp ráp **index-page** và deploy lên **github-page** ([Link](https://dev.to/nguyenthienly/create-cv-with-bem-2-29m7))
3. Phần 3:  Refactor code và các chú ý về **BEM**
3. Phần 4:  Thiết kế và fetch Gist, lắp ráp **blog-page** và deploy lên **github-page**

# 1. Phần 1: Chuẩn bị và cấu trúc project **html, css, js** cùng **BEM** thần thánh

## Mục lục
0. Vấn đề
1. Những thứ cần chuẩn bị
2. Tạo repository trên **github.com**
3. **BEM** là gì, sao phải dùng **BEM**
4. Cấu trúc Project
5. Kết bài

## 0. Vấn đề

***Heyzo what's up***

Xin chào tất cả mọi người, trước đây khi mà mình đi xin việc thì đến giai đoạn nộp CV, thì mình hay lên **topcv.vn** hay là **cvsimply.com** để tậu cho mình một cái **CV** phải không nào, việc đó rất tiện nhưng mình cảm thấy nếu mình là **dev** có thể xây dựng cho mình một **CV** theo phong cách của riêng mình thì gây **ấn tượng** mạnh hơn với **nhà tuyển dụng** nha (Biết đâu lọt vào vòng gửi xe ^^)

Hôm nay ở nhà chống dịch **deadline** cũng không nhiều, vì vậy mình sẽ viết một series về cách tạo **CV đơn giản nhưng cực chất cho dev he**, à không riêng gì dev các bạn nào muốn tạo cho mình một **CV của riêng mình** thì cứ đọc. Cái này mình chỉ muốn chia sẻ cho mọi người nên có gì đắc tội mong mọi người nhẹ tay cho em 

**Let's go** 


## 1. Những thứ cần chuẩn bị

> Nào cặp nào bút, nào sách nào vở, không không 

- Editor (Mình sài **VScode** nha ai thích thì sài không thích thì sài ^^)
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

Như vậy, sau khi thao tác xong reponsitory của bạn sẽ giống hình dưới đây, rồi chuẩn bị xong rồi đó @-@

[<img src="https://i.imgur.com/C4dLxqu.png">](my-repository)

## 3. **BEM** là gì, sao phải dùng **BEM**

[<img src="https://i.imgur.com/b41uo5R.png">](BEM-example)

> BEM — Block Element Modifier is a methodology that helps you to create reusable components and code sharing in front-end development

### Qui ước đặt tên

```
.block {}   /* Block */

.block__element {}  /* Element */

.block--modifier {}  /* Modifier */
```

Định nghĩa ở trên đây (Đọc thêm về **BEM** ở [đây](http://getbem.com/)) nhưng mình chỉ muốn nói rằng trước đây khi chúng ta đặt tên **class** trong **css** đôi khi đã xảy ra những lỗi về **mức độ ưu tiên** trong **css**, hay đặt tên không chuẩn một khi **project** lớn lên sẽ gây nhiều phiền phức ... Có nhiều quy tắc để giải quyết vấn đề này nhưng mình thấy **BEM** là dễ hiểu và thực hành mà vẫn giải quyết được các vấn đề liên quan

Cách thực hành **BEM** mình sẽ làm ứng dụng trực tiếp vào cái **Project CV** này luôn ^^

## 4. Cấu trúc Project

> Các bạn có thể tự thiết kế cho mình một bản **PSD** theo ý thích nhưng mình thiết kế không đẹp, nên mình sẽ chọn một **CV** đã có sẵn để **clone** lại nha. Từ bản clone này các bạn có thể thêm mắm, muối để biến nó thành một bản **CV** của chính mình !!

**CV** này mình được một người bạn gửi cho và thực sự mình cảm thấy nó quá đẹp và đáng để mình học hỏi nha, link đây **brittanychiang.com**

Bắt đầy với việc chia cấu trúc project như dưới đây (Mình chia như vầy để **deploy** lên **git-hub** chạy được luôn nha)

Cây thư mục sẽ trông như vậy

```
└─── images
└─── css
│     └─── page
│     │      └─── index.css
│     │      └─── blog.css
│     └─── container
│     └─── component
└─── js
│     └─── page
│     └─── container
│     └─── component
└─── index.html
└─── blog.html
```

Giờ mình sẽ bắt đầu phân tích một thành phần dưới đây trong trang web theo **BEM** nhé

[<img src="https://i.imgur.com/Sg0bW09.png">](header)

Bạn để ý rằng **block header** này có 3 **Element** gồm:

- **Logo** bên trái
- **Menu** ở giữa
- **button** bên phải

> Một chú ý là **Element button** sẽ được dùng lại trong project này vì vậy mình cũng sẽ xem **Element Button như một Block độc lập và nằm trong Block Header**


Vậy giờ sẽ thêm các file thích hợp vào cây thư mục, nó sẽ trông như vầy ^^

```
└─── images
└─── css
│     └─── page
│     │      └─── index.css
│     │      └─── blog.css
│     └─── container
│     │      └─── header.css
│     └─── component
│            └─── button.css
└─── js
│     └─── page
│     └─── container
│     └─── component
└─── index.html
└─── blog.html
```

Khi bắt đầu với **BEM** mình đã dùng sai về nguyên tắc của nó, vì vậy vào phần sau mình sẽ chia sẽ cho các bạn nghe nhé ^^

## 5. Kết bài

Đến đây cũng đã hết phần này rồi, để tiếp tục theo dõi mấy bạn kích vào [đây](https://dev.to/nguyenthienly/create-cv-with-bem-2-29m7) để đi qua phần 2 nhé

Chúc mọi người vượt qua mùa dịch an toàn, và làm những điều thật có ít nhé

> Mày không thoát được đâu con trai, tu be không tình yêu

#### Link tham khảo:
- https://www.w3schools.com/
- https://www.topcv.vn/
- https://www.cvsimply.com/
- http://getbem.com/




