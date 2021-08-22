import React, { Component } from "react";
import { User_CRUD } from "../consult";
import Insert_User from "./Insert_User";
import Header from "./Header";

class User extends Component {
  state = {
    AGREGAR: "",
    VALIDAR: "",
    USUARIO: "",
    EDITAR: "",
  };

  async UNSAFE_componentWillMount() {
    this.traerdatos();
  }

  async traerdatos() {
    const BaseBody = { Posicion: "MostrarUsuarios" };

    const Resulta = await User_CRUD(BaseBody);
    if (Resulta.estado === "Fallo") {
      this.setState({ USUARIO: <h1>No hay Usuario Guardadas</h1> });
    } else {
      this.setState({
        USUARIO: (
          <React.Fragment>
            <div className="contenedorUsuario">
              <div className="cuadrotitulo">
                <div className="colum-3">
                  <span>Nombre</span>
                </div>

                <div className="colum-3">
                  <span>Usuario</span>
                </div>

                <div className="colum-3">
                  <span>Perfil</span>
                </div>

                <div className="colum-3">
                  <span>Contraseña</span>
                </div>

                <div className="colum-3">
                  <span>Acciones</span>
                </div>
              </div>

              {Resulta.msj.map((elemento) => {
                const {
                  ID,
                  Usuario,
                  Nombre,
                  Apellido,
                  /* Email, */
                  Perfil,
                  Pass,
                } = elemento;
                return (
                  <div className="cuadro" key={ID}>
                    <div className="colum-3">{Nombre + " " + Apellido}</div>

                    <div className="colum-3">{Usuario}</div>

                    <div className="colum-3">
                      {Perfil === "1" ? "Administrador" : "Usuario"}
                    </div>

                    <div className="colum-3">{Pass}</div>

                    <div className="colum-3">
                      <button id={ID} onClick={this.Elimnar}>
                        X
                      </button>
                      <button id={ID} onClick={this.Editar}>
                        Edit
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        ),
      });
    }
  }

  Editar = async (e) => {
    e.preventDefault();
    const BaseBody = {
      Posicion: "MostrarEditarUsuario",
      ID: e.target.attributes.id.value,
    };
    const Result = await User_CRUD(BaseBody);
    this.setState({ EDITAR: Result, AGREGAR: "Abrir" });
  };

  Cierre = (e) => {
    if (e !== "") {
      e.preventDefault();
      this.setState({ AGREGAR: "Abrir" });
    } else {
      this.setState({ EDITAR: "", AGREGAR: "" });
    }
  };

  Actualizar = () => {
    window.location.reload(false);
  };

  Elimnar = async (e) => {
    e.preventDefault();
    const BaseBody = {
      Posicion: "EliminarUsuario",
      ID: e.target.attributes.id.value,
    };
    const Result = await User_CRUD(BaseBody);

    if (Result.estado === "Correcto") {
      this.Actualizar();
    } else {
      alert("no se elimino empresa");
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <section id="Usuario">
            {this.state.AGREGAR !== "" && (
              <Insert_User
                Editar={this.state.EDITAR}
                Valida={this.state.VALIDAR}
                Cerrar={this.Cierre}
                Actualizar={this.Actualizar}
              />
            )}

            <h1>Usuarios</h1>
            <button onClick={this.Cierre}>Agregar</button>

            {this.state.USUARIO !== "" && this.state.USUARIO}
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default User;
