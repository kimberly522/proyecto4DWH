const CONSTANTS = {
  Base: "http://localhost:3001",
  login: "/login",
  IUser: "/Insert_User",
  RRegion: "/Read_R",
  RUser: "/Read_User",
  UUser: "/Update_User",
  DUser: "/Delete_User",
  ActualizarUser: "/Actualizar_User",
  RPC: "/Read_PC",
  IPC: "/Insert_RPC",
  DPC: "/Delete_PC",
  UPC: "/Update_PC",
  ValidateCiuCompa: "/Validate_Employe",
  IEmplo: "/Insert_Employe",
  DeleteEmplo: "/Delete_Employes",
  RUEmplo: "/Read-Edit_Employes",
  UEmplo: "/Edit_Employes",
  NameEmplo: "/Name_Employes",
  InserCont: "/Insert_Contac",
  InserCanal: "/Insert_Canal",
  UpdateConta: "/Edit_Contac",
  RConta: "/Read_Contac",
  RContaCanal: "/Read_Contac_Canal",
  SearchConta: "/Search_Contac",
  Searchaconta: "/Search_A_Contac",
  RContaCanalAll: "/Read_Contac_Canal_All",
  UDCanal: "/Update_Delete_Canal",
  DAConta: "/Delete_A_Contac",
  REmplo: "/Read_Employes",
  POST: "POST",
  GET: "GET",
  DELETE: "DELETE",
  PUT: "PUT",
};

async function FetchGet(Rutafetch, method) {
  const Resultado = await fetch(Rutafetch, {
    mode: "cors",
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch((erores) => console.error("Error:", erores));
  return Resultado;
}

async function Fetch(Rutafetch, method, BaseBody = "") {
  const Resultado = await fetch(Rutafetch, {
    mode: "cors",
    method: method,
    body: JSON.stringify(BaseBody),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch((erores) => console.error("Error:", erores));
  return Resultado;
}

module.exports = {
  User_CRUD: async (BaseBody) => {
    let Rutafetch = "";
    let method = "";
    let respuesta = {};

    switch (BaseBody.Posicion) {
      case "MostrarUsuarios":
        Rutafetch = CONSTANTS.Base + CONSTANTS.RUser;
        method = CONSTANTS.GET;
        respuesta = await FetchGet(Rutafetch, method);
        break;

      case "MostrarEditarUsuario":
        Rutafetch = CONSTANTS.Base + CONSTANTS.UUser;
        method = CONSTANTS.POST;
        respuesta = await Fetch(Rutafetch, method, BaseBody);
        break;

      case "AgregarUsuario":
        Rutafetch = CONSTANTS.Base + CONSTANTS.IUser;
        method = CONSTANTS.POST;
        respuesta = await Fetch(Rutafetch, method, BaseBody);
        break;

      case "ActualizarUsuario":
        Rutafetch = CONSTANTS.Base + CONSTANTS.ActualizarUser;
        method = CONSTANTS.PUT;
        respuesta = await Fetch(Rutafetch, method, BaseBody);
        break;

      case "EliminarUsuario":
        Rutafetch = CONSTANTS.Base + CONSTANTS.DUser;
        method = CONSTANTS.DELETE;
        respuesta = await Fetch(Rutafetch, method, BaseBody);

        break;

      default:
        break;
    }

    return respuesta;
  },

  login: async (BaseBody) => {
    const Rutafetch = CONSTANTS.Base + CONSTANTS.login;
    const method = CONSTANTS.POST;
    const respuesta = await Fetch(Rutafetch, method, BaseBody);
    return respuesta;
  },

  Consult_RPC: async (BaseBody) => {
    let Rutafetch = "";
    let method = "";
    let respuesta = "";

    switch (BaseBody.Posicion) {
      case "Region":
        Rutafetch = CONSTANTS.Base + CONSTANTS.RRegion;
        method = CONSTANTS.GET;
        respuesta = await FetchGet(Rutafetch, method);
        break;

      case "Pais":
        Rutafetch = CONSTANTS.Base + CONSTANTS.RPC;
        method = CONSTANTS.POST;
        respuesta = await Fetch(Rutafetch, method, BaseBody);
        break;

      default:
        Rutafetch = CONSTANTS.Base + CONSTANTS.RPC;
        method = CONSTANTS.POST;
        respuesta = await Fetch(Rutafetch, method, BaseBody);
        break;
    }
    return respuesta;
  },

  Insert_RPC: async (BaseBody) => {
    const method = CONSTANTS.POST;
    const Rutafetch = CONSTANTS.Base + CONSTANTS.IPC;
    const respuesta = await Fetch(Rutafetch, method, BaseBody);
    return respuesta;
  },

  Delete_PC: async (BaseBody) => {
    const method = CONSTANTS.POST;
    const Rutafetch = CONSTANTS.Base + CONSTANTS.DPC;
    const respuesta = await Fetch(Rutafetch, method, BaseBody);
    return respuesta;
  },

  Edit_PC: async (BaseBody) => {
    const method = CONSTANTS.POST;
    const Rutafetch = CONSTANTS.Base + CONSTANTS.UPC;
    const respuesta = await Fetch(Rutafetch, method, BaseBody);
    return respuesta;
  },

  Company_CRUD: async (BaseBody) => {
    let Rutafetch = "";
    let method = "";
    let respuesta = {};
    switch (BaseBody.Posicion) {
      case "ValidarRegionCompa":
        Rutafetch = CONSTANTS.Base + CONSTANTS.ValidateCiuCompa;
        method = CONSTANTS.GET;
        respuesta = await FetchGet(Rutafetch, method);

        break;

      case "MostrarEmpresas":
        Rutafetch = CONSTANTS.Base + CONSTANTS.REmplo;
        method = CONSTANTS.GET;
        respuesta = await FetchGet(Rutafetch, method);

        break;

      case "GuardarEmpresa":
        Rutafetch = CONSTANTS.Base + CONSTANTS.IEmplo;
        method = CONSTANTS.POST;
        respuesta = await Fetch(Rutafetch, method, BaseBody);

        break;

      case "EliminarEmpresa":
        Rutafetch = CONSTANTS.Base + CONSTANTS.DeleteEmplo;
        method = CONSTANTS.POST;
        respuesta = await Fetch(Rutafetch, method, BaseBody);

        break;

      case "MostrarEditarEmpresa":
        Rutafetch = CONSTANTS.Base + CONSTANTS.RUEmplo;
        method = CONSTANTS.POST;
        respuesta = await Fetch(Rutafetch, method, BaseBody);

        break;

      case "EditarEmpresa":
        Rutafetch = CONSTANTS.Base + CONSTANTS.UEmplo;
        method = CONSTANTS.POST;
        respuesta = await Fetch(Rutafetch, method, BaseBody);
        break;

      case "NombreEmpresa":
        Rutafetch = CONSTANTS.Base + CONSTANTS.NameEmplo;
        method = CONSTANTS.GET;
        respuesta = await FetchGet(Rutafetch, method);
        break;

      default:
        break;
    }
    return respuesta;
  },

  Insert_Contact: async (BaseBody) => {
    const method = CONSTANTS.POST;
    const Rutafetch = CONSTANTS.Base + CONSTANTS.InserCont;
    const respuesta = await Fetch(Rutafetch, method, BaseBody);
    return respuesta;
  },

  Insert_Canal: async (BaseBody) => {
    const method = CONSTANTS.POST;
    const Rutafetch = CONSTANTS.Base + CONSTANTS.InserCanal;
    const respuesta = await Fetch(Rutafetch, method, BaseBody);
    return respuesta;
  },

  Edit_Contact: async (BaseBody) => {
    const method = CONSTANTS.PUT;
    const Rutafetch = CONSTANTS.Base + CONSTANTS.UpdateConta;
    const respuesta = await Fetch(Rutafetch, method, BaseBody);
    return respuesta;
  },

  Search_Contact: async () => {
    const method = CONSTANTS.GET;
    const Rutafetch = CONSTANTS.Base + CONSTANTS.RConta;
    const respuesta = await FetchGet(Rutafetch, method);
    return respuesta;
  },

  Search_Contact_Canal: async (BaseBody) => {
    const method = CONSTANTS.POST;
    const Rutafetch = CONSTANTS.Base + CONSTANTS.RContaCanal;
    const respuesta = await Fetch(Rutafetch, method, BaseBody);
    return respuesta;
  },

  Search_Contacts: async (BaseBody) => {
    const method = CONSTANTS.POST;
    const Rutafetch = CONSTANTS.Base + CONSTANTS.SearchConta;
    const respuesta = await Fetch(Rutafetch, method, BaseBody);
    return respuesta;
  },

  Search_A_Contact: async (BaseBody) => {
    const method = CONSTANTS.POST;
    const Rutafetch = CONSTANTS.Base + CONSTANTS.Searchaconta;
    const respuesta = await Fetch(Rutafetch, method, BaseBody);
    return respuesta;
  },

  Search_Contacts_Canal_All: async (BaseBody) => {
    const method = CONSTANTS.POST;
    const Rutafetch = CONSTANTS.Base + CONSTANTS.RContaCanalAll;
    const respuesta = await Fetch(Rutafetch, method, BaseBody);
    return respuesta;
  },

  UpdateDelete_Canal: async (BaseBody) => {
    const method = CONSTANTS.POST;
    const Rutafetch = CONSTANTS.Base + CONSTANTS.UDCanal;
    const respuesta = await Fetch(Rutafetch, method, BaseBody);
    return respuesta;
  },

  Delete_A_Contact: async (BaseBody) => {
    const method = CONSTANTS.POST;
    const Rutafetch = CONSTANTS.Base + CONSTANTS.DAConta;
    const respuesta = await Fetch(Rutafetch, method, BaseBody);
    return respuesta;
  },
};
