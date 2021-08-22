const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:root@127.0.0.1:3306/data_warehouse"
);
module.exports = {
  sequelize: sequelize,

  Conexion: () => {
    sequelize
      .authenticate()
      .then(() => {
        console.log("Conectado");
      })
      .catch((err) => {
        console.error("No Funciona por: ", err);
      });
  },
};
