const db = require('../DataBase/db');

class newUsers {
  signup(req, res) {
    const sql = "INSERT INTO new_users (FirstName, LastName, Type, Email, Phone, Location, Description) VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    db.query(sql, [req.body.firstName, req.body.lastName, req.body.careType, req.body.email, req.body.phone, req.body.Location, req.body.message], (err) => {
      if (err) {
        console.error("Error during signup:", err);
        return res.json("failed");
      } else {
        return res.json("success");
      }
    });
  }
}

module.exports = new newUsers();
