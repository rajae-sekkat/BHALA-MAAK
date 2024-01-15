// sugarController.js
const db = require('../DataBase/db'); // Remplacez par le module que vous utilisez pour accéder à la base de données

class pressureController {

    addPressureLevel = (req, res) => {
        const { username, date, pressureLevelValue } = req.body;
        const sql = 'INSERT INTO pressure_level (username, date, level) VALUES (?, ?, ?)';
      
        db.query(sql, [username, date, pressureLevelValue ], (err, result) => {
          if (err) {
            console.error('Error during pressure level addition:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
          }
      
          res.status(200).json({ success: true });
        });
      };
getLatestPressureLevel = (req, res) => {
  const sql = 'SELECT * FROM pressure_level ORDER BY id DESC LIMIT 1';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération du dernier niveau de sucre :', err);
      res.status(500).json({ error: 'Erreur interne du serveur' });
      return;
    }

    res.json(result[0]); // Retournez uniquement le premier (dernier) résultat
  });
};

 getAllPressureLevels = (req, res) => {
  const sql = 'SELECT date, level, description FROM pressure_level';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de tous les niveaux de sucre :', err);
      res.status(500).json({ error: 'Erreur interne du serveur' });
      return;
    }

    res.json(result);
  });
};
}
module.exports = new pressureController;
