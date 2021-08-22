import React, { Component } from "react";
import Insert_Company from "./Insert_Company";
import { Company_CRUD } from "../consult";
import Header from "./Header";

class Company extends Component {
  state = {
    AGREGAR: "",
    VALIDAR: "",
    EMPRESAS: "",
    EDITAR: "",
  };

  async UNSAFE_componentWillMount() {
    const BaseBody = { Posicion: "MostrarEmpresas" };
    const Resulta = await Company_CRUD(BaseBody);
    if (Resulta.estado === "Fallo") {
      this.setState({ EMPRESAS: <h1>No hay Empresas Guardadas</h1> });
    } else {
      this.setState({
        EMPRESAS: (
          <React.Fragment>
            <div className="contenedorEmpresa">
              <div className="cuadrotitulo">
                <div className="colum-3">
                  <span>Nombre</span>
                </div>

                <div className="colum-3">
                  <span>Pais</span>
                </div>

                <div className="colum-3">
                  <span>Direccion</span>
                </div>

                <div className="colum-3">
                  <span>Acciones</span>
                </div>
              </div>

              {Resulta.msj.map((elemento) => {
                const { ID, Direccion, NombreEmpresa, NombrePais } = elemento;
                return (
                  <div className="cuadro" key={ID}>
                    <div className="colum-3">{NombreEmpresa}</div>

                    <div className="colum-3">{NombrePais}</div>

                    <div className="colum-3">{Direccion}</div>

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

    const Base = { Posicion: "ValidarRegionCompa" };
    const Result = await Company_CRUD(Base);
    this.setState({ VALIDAR: Result.estado });
  }

  Elimnar = async (e) => {
    e.preventDefault();
    const BaseBody = {
      Posicion: "EliminarEmpresa",
      ID: e.target.attributes.id.value,
    };
    const Result = await Company_CRUD(BaseBody);

    if (Result.estado === "Correcto") {
      this.Actualizar();
    } else {
      alert("no se elimino empresa");
    }
  };

  Editar = async (e) => {
    e.preventDefault();
    const BaseBody = {
      Posicion: "MostrarEditarEmpresa",
      ID: e.target.attributes.id.value,
    };
    const Result = await Company_CRUD(BaseBody);
    this.setState({ EDITAR: Result, AGREGAR: "Abrir" });
  };

  Actualizar = () => {
    window.location.reload(false);
  };

  Cierre = (e) => {
    if (e !== "") {
      e.preventDefault();
      this.setState({ AGREGAR: "Abrir" });
    } else {
      this.setState({ EDITAR: "", AGREGAR: "" });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <section id="Compania">
            {this.state.AGREGAR !== "" && (
              <Insert_Company
                Editar={this.state.EDITAR}
                Valida={this.state.VALIDAR}
                Cerrar={this.Cierre}
                Actualizar={this.Actualizar}
              />
            )}

            <h1>Compañias</h1>
            <button onClick={this.Cierre}>Agregar</button>

            {this.state.EMPRESAS !== "" && this.state.EMPRESAS}
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Company;
