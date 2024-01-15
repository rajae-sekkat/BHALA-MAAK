const db = require("../DataBase/db");

class taskController {
    
  getAllTasks = (req, res) => {
    const query = "SELECT * FROM calendar2";
    db.query(query, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(result);
      }
    });
  };

  addTask = (req, res) => {
    const { description, date } = req.body;
    console.log("Received task data:", { description, date });

    const formattedDate = db.escape(date);

    const sql = `INSERT INTO calendar2 (description, date) VALUES (${db.escape(
      description
    )}, DATE_FORMAT(${formattedDate}, '%Y-%m-%d')) ORDER BY id ASC LIMIT 1`;

    db.query(sql, [description, date], (err, result) => {
      if (err) {
        console.error("Error inserting into Calendrier:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        console.log("Task added successfully");
        res.status(200).json({ message: "Task added successfully" });
      }
    });
  };

  deleteTask = (req, res) => {
    const taskId = req.params.taskId;

    const sql = `DELETE FROM calendar2 WHERE id = ${taskId}`;

    db.query(sql, (error, results) => {
      if (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ message: "Internal server error" });
      } else {
        res.json({ message: "Task deleted successfully" });
      }
    });
  };
}

module.exports = new taskController();
