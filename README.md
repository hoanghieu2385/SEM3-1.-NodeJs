# SEM3-2: Node.js Learning Journey

## Buổi 1: Làm quen với Node.js
- **Tải và cài đặt Node.js**: [Download Prebuilt Installer](https://nodejs.org/en/download/prebuilt-installer)
- **Cài đặt để chạy code trong terminal**: 
  - Vào **Settings**, tìm kiếm **Run in terminal**, bật tùy chọn.
- **Cài đặt Express**: 
  ```bash
  npm i express
  ```
- **Tạo template Node.js Express**: 
  - Tùy chọn 1: 
    ```bash
    npx express-generator <tên_project>
    ```
  - Tùy chọn 2 (tạo thư mục trước): 
    ```bash
    cd <tên_thư_mục>
    npx express-generator
    ```
  - Cài đặt dependencies:
    ```bash
    npm install
    ```
- **Chạy ứng dụng**:
  ```bash
  npm start
  ```
  Truy cập tại: [http://localhost:3000](http://localhost:3000)

---

## Buổi 2: Kết nối MongoDB với Mongoose
- Cài đặt Mongoose:
  ```bash
  npm i mongoose
  ```
- Sử dụng Postman để kiểm tra các phương thức **POST** và **GET**.

---

## Buổi 3: Mô hình MVC
1. **Model**: Chuyển code quản lý user từ `server.js` sang file `userModel`.
2. **Method**: Định nghĩa các phương thức cần thiết.
3. **Route**: Tạo các tuyến đường xử lý logic.

---

## Buổi 4: Tìm hiểu về EJS (Embedded JavaScript Templating)
- **Tạo template project với Express**:
  ```bash
  npx express-generator <tên_project>
  npm install
  ```
- **Cài đặt EJS**:
  ```bash
  npm install ejs
  ```
- **Cấu hình view engine** trong `app.js`:
  ```javascript
  app.set('view engine', 'jade'); // sửa thành
  app.set('view engine', 'ejs');
  ```
- **Sử dụng Bootstrap**:
  - **Cách 1**: Thêm link CDN vào file `.ejs`.
  - **Cách 2**: Cài trực tiếp bằng npm:
    ```bash
    npm install bootstrap@5.3.3
    ```
    - Thêm cấu hình trong `app.js`:
      ```javascript
      app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
      ```

⚠️ **Khuyến nghị**: Nên sử dụng Bootstrap bằng link CDN để dễ quản lý.

---

## Buổi 5: Kết hợp MVC và EJS
- **Cài đặt cần thiết**:
  ```bash
  npm i mongoose
  npx express-generator
  npm install
  npm install ejs
  ```
- **Cấu hình view engine** trong `app.js`:
  ```javascript
  app.set('view engine', 'jade'); // sửa thành
  app.set('view engine', 'ejs');
  ```
- **Tổ chức file view**:
  - Tạo thư mục `views/user` chứa:
    - `index.ejs` (hiển thị danh sách user).
    - `error.ejs` (hiển thị lỗi).

### CRUD
- Cài đặt `method-override` để hỗ trợ **PUT** và **DELETE**:
  ```bash
  npm install method-override
  ```
- Thêm cấu hình trong `app.js`:
  ```javascript
  var methodOverride = require('method-override');
  app.use(methodOverride('_method'));
  ```
- Ví dụ form HTML với PUT:
  ```html
  <form action="/users/<%= user._id %>?_method=PUT" method="POST">
  ```

---

## Buổi 6: Node.js Basics
- **Biến trong JavaScript**:
  - `var`, `let`, `const` và cách sử dụng.

---

### Notes
- **Các công cụ hỗ trợ**: Postman, MongoDB Compass.
- **Khuyến nghị**: Đẩy file README.md này lên GitHub để dễ theo dõi.
