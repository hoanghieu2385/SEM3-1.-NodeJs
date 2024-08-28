var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var user = {
    name: "Nguyen Van A",
    email: "demo@gmail.com",
    address: "Hanoi"
  }

  // 'index' ở đây là tên file, user là hàm tạo ở trên
  // res.render('index', user)
  //Cach 2:
  // Tạo một đối tượng mới với một thuộc tính user và gán giá trị của biến user cho nó. khi gọi phải  <%= user.name %> nếu không thì ko in ra được
  res.render('index', {user:user})

  var listUser = [{ name: 'Hieu 1', address: "HaNoi1" },
                  { name: 'Hieu 2', address: "HaNoi2" },
                  { name: 'Hieu 3', address: "HaNoi3" }
                  ];

  console.log(listUser);
  res.render('listUser', { listUser: listUser })
});

module.exports = router;
