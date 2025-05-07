// Hàm Đăng ký
function register() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
  
    if (username === '' || password === '') {
      alert('Vui lòng nhập đủ thông tin');
      return;
    }
  
    if (localStorage.getItem(username)) {
      alert('Tên người dùng đã tồn tại!');
    } else {
      localStorage.setItem(username, password);
      alert('Đăng ký thành công! Bây giờ bạn có thể đăng nhập.');
    }
  }
  
  // Hàm Đăng nhập
  function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
  
    const storedPassword = localStorage.getItem(username);
  
    if (storedPassword === null) {
      alert('Tài khoản không tồn tại. Vui lòng đăng ký!');
    } else if (storedPassword === password) {
      document.getElementById('auth-forms').style.display = 'none';
      document.getElementById('welcome').style.display = 'block';
      document.getElementById('userDisplay').innerText = username;
    } else {
      alert('Sai mật khẩu!');
    }
  }
  
  // Hàm Đăng xuất
  function logout() {
    document.getElementById('auth-forms').style.display = 'block';
    document.getElementById('welcome').style.display = 'none';
  }
  