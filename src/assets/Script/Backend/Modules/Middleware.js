const { Validate_User } = require("./User");
const { Validate_BD_RPC } = require("./Region");

module.exports = {
  ValidateRegistration: async (reg, res, next) => {
    const { Usuario, Nombre, Apellido, Email, Perfil, Password } = reg.body;

    if (
      Usuario !== "" &&
      Nombre !== "" &&
      Apellido !== "" &&
      Email !== "" &&
      Perfil !== "" &&
      Password !== ""
    ) {
      await Validate_User(Usuario)
        .then((RespuestaValidar) => {
          if (RespuestaValidar.length === 0) {
            next();
          } else {
            res.json({ estado: "Usuario Invalido" });
          }
        })
        .catch((error) => {
          res.json({ estado: " Error: " + error });
        });
    } else {
      res.send({ estado: "Por favor NO Dejar Campos Vacios!" });
    }
  },

  ValidateLogin: (reg, res, next) => {
    const { Usuario, Password } = reg.body;
    if (Usuario === "" && Password === "") {
      res.send({ Estado: "Por favor NO Dejar Campos Vacios!" });
    } else {
      next();
    }
  },

  ValidarPermisos: async (reg, res, next) => {
    const Token = reg.headers.autenticacion;

    if (!Token) {
      res.json({ estado: "No Tienes Permisos " });
    } else {
    }
  },

  ValidateRPC: async (reg, res, next) => {
    const { Etiqueta } = reg.body;
    let fila = "";

    let nombre = "";

    switch (Etiqueta) {
      case "Region":
        nombre = reg.body.NombreRegion;
        fila = "NombreRegion";
        Validate_BD_RPC(Etiqueta, fila, nombre).then((Resultado) => {
          if (Resultado.length === 0) {
            next();
          } else {
            res.json({ estado: "Fallo", msj: "Ya existe" });
          }
        });
        break;

      case "Pais":
        reg.body.NombrePais === undefined
          ? (nombre = reg.body.NOMBRE)
          : (nombre = reg.body.NombrePais);
        fila = "NombrePais";
        Validate_BD_RPC(Etiqueta, fila, nombre).then((Resultado) => {
          if (Resultado.length === 0) {
            next();
          } else {
            res.json({ estado: "Fallo", msj: "Ya existe" });
          }
        });
        break;

      default:
        reg.body.NombreCiudad === undefined
          ? (nombre = reg.body.NOMBRE)
          : (nombre = reg.body.NombreCiudad);
        fila = "NombreCiudad";
        Validate_BD_RPC(Etiqueta, fila, nombre).then((Resultado) => {
          if (Resultado.length === 0) {
            next();
          } else {
            res.json({ estado: "Fallo", msj: "Ya existe" });
          }
        });
        break;
    }
  },
};
