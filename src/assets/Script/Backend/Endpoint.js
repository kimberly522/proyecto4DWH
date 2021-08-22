const express = require("express");
const PORT = 3001;
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const { Conexion } = require("./Services/Conexion");
const {
  Insert_User,
  Validate_UserPass,
  Show_Users,
  Show_User,
  Delete_User,
  Update_User,
} = require("./Modules/User");

const {
  Insert_Company,
  Show_Company,
  Delete_Company,
  ShowEdit_Company,
  Edit_Company,
  ShowName_Company,
} = require("./Modules/Company");

const {
  Insert_Contact,
  Insert_Canal,
  Show_Contact,
  Show_Contact_Canal,
  Show_ContactCanal_All,
  Show_Contacts,
  Show_A_Contact,
  ShowDelete_Canal,
  Delete_A_Contact,
  Update_Contact,
} = require("./Modules/Contact");

const {
  ValidateRegistration,
  ValidateLogin,
  ValidateRPC,
} = require("./Modules/Middleware");

const {
  Validate_Region_Company,
  Show_BD_RPC,
  Insert_RPC,
  Delete_PC,
  Update_PC,
} = require("./Modules/Region");

Conexion();

app.post("/login", ValidateLogin, Validate_UserPass);
app.post("/Insert_User", ValidateRegistration, Insert_User);
app.get("/Read_R", Show_BD_RPC);
app.get("/Read_User", Show_Users);
app.post("/Update_User", Show_User);
app.delete("/Delete_User", Delete_User);
app.put("/Actualizar_User", Update_User);
app.post("/Read_PC", Show_BD_RPC);
app.post("/Insert_RPC", ValidateRPC, Insert_RPC);
app.post("/Delete_PC", Delete_PC);
app.post("/Update_PC", ValidateRPC, Update_PC);
app.get("/Validate_Employe", Validate_Region_Company);
app.post("/Insert_Employe", Insert_Company);
app.post("/Delete_Employes", Delete_Company);
app.post("/Read-Edit_Employes", ShowEdit_Company);
app.post("/Edit_Employes", Edit_Company);
app.get("/Name_Employes", ShowName_Company);
app.post("/Insert_Contac", Insert_Contact);
app.post("/Insert_Canal", Insert_Canal);
app.put("/Edit_Contac", Update_Contact);
app.get("/Read_Contac", Show_Contact);
app.post("/Read_Contac_Canal", Show_Contact_Canal);
app.post("/Search_Contac", Show_Contacts);
app.post("/Search_A_Contac", Show_A_Contact);
app.post("/Read_Contac_Canal_All", Show_ContactCanal_All);
app.post("/Update_Delete_Canal", ShowDelete_Canal);
app.post("/Delete_A_Contac", Delete_A_Contact);
app.get("/Read_Employes", Show_Company);

app.listen(PORT, () => {
  console.log("servidor OK!, Puerto: " + PORT);
});
