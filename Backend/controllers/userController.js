// userController.js
const db = require('../DataBase/db');

class UserController {
  login(req, res) {
    const sql = "SELECT * FROM users WHERE `username`=? AND `password`=?";
    
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
      if (err) {
        return res.json("error");
      }
      if (data.length > 0) {
        return res.json("success");
      } else {
        return res.json("failed");
      }
    });
  }
}

module.exports = new UserController();
