import React, { Component } from "react";
import { Consult_RPC } from "../consult";
import Header from "./Header";
import Region_Country from "./Region_Country";
import Insert from "./Insert";
import Delete from "./Delete";
import Edit from "./Edit";

class Region extends Component {
  state = {
    RESULTADOREGION: "",
    ETIQUETA: "",
    IDREGION: "",
    NOMBREREGION: "",
    NOMBREPAIS: "",
    IDPAIS: "",
    NOMBRE: "",
    ID: "",
  };

  async UNSAFE_componentWillMount() {
    const BaseBody = { Posicion: "Region" };
    const Result = await Consult_RPC(BaseBody);
    document.querySelector("main").style.marginTop = "50px";

    if (Result.estado === "Fallo") {
      this.setState({
        RESULTADOREGION: <h2>No Hay Regiones/Paises/Ciudades Guardadas</h2>,
      });
    } else {
      this.setState({
        RESULTADOREGION: (
          <ul id="myUL">
            {Result.msj.map((elemento) => {
              const { NombreRegion, ID } = elemento;
              return (
                <li key={ID}>
                  <button
                    numero={ID}
                    nombre={NombreRegion}
                    etiqueta="Pais"
                    id="Btn_Pais"
                    onClick={this.AgregarPais}
                    key={ID}
                  >
                    Agregar Pais
                  </button>

                  <Region_Country
                    NOMBREREGION={NombreRegion}
                    IDREGIONMOSTRAR={ID}
                    BODYEdi={this.Editar}
                    BODYEli={this.Eliminar}
                    BODY={this.AgregarCiudad}
                  />
                </li>
              );
            })}
          </ul>
        ),
      });
    }
  }

  AgregarRegion = (e) => {
    e.preventDefault();
    this.setState({ ETIQUETA: e.target.attributes.etiqueta.value });
  };

  AgregarPais = (e) => {
    if (e === "") {
      this.setState({ NOMBREREGION: "", NombreAgregarCiudad: "" });
    } else {
      e.preventDefault();
      this.setState({
        IDREGION: e.target.attributes.numero.value,
        NOMBREREGION: e.target.attributes.nombre.value,
        ETIQUETA: e.target.attributes.etiqueta.value,
      });
    }
  };

  AgregarCiudad = (e) => {
    const { ETIQUETA, NOMBREPAIS, IDPAIS } = e;
    this.setState({
      ETIQUETA: ETIQUETA,
      NOMBREPAIS: NOMBREPAIS,
      IDPAIS: IDPAIS,
    });
  };

  Editar = (e) => {
    const { ETIQUETA, NOMBRE, ID } = e;
    this.setState({
      ETIQUETA: ETIQUETA,
      NOMBRE: NOMBRE,
      ID: ID,
    });
  };

  Eliminar = (e) => {
    const { ETIQUETA, NOMBRE, ID } = e;
    this.setState({
      ETIQUETA: ETIQUETA,
      NOMBRE: NOMBRE,
      ID: ID,
    });
  };

  AbrirYCerrar = (e) => {
    e === ""
      ? this.setState({ ETIQUETA: "", NOMBREPAIS: "" })
      : this.setState({
          ETIQUETA: e.ETIQUETA,
          NOMBREPAIS: e.NOMBREPAIS,
          IDPAIS: e.IDPAIS,
        });
  };

  Actualizar = () => {
    window.location.reload(false);
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          {this.state.ETIQUETA === "Region" && (
            <Insert
              Etiqueta={this.state.ETIQUETA}
              Cerrar={this.AbrirYCerrar}
              Actualizar={this.Actualizar}
            />
          )}

          {this.state.ETIQUETA === "Pais" && (
            <Insert
              Etiqueta={this.state.ETIQUETA}
              Nombres={this.state.NOMBREREGION}
              IdRegion={this.state.IDREGION}
              Cerrar={this.AbrirYCerrar}
              Actualizar={this.Actualizar}
            />
          )}

          {this.state.ETIQUETA === "Ciudad" && (
            <Insert
              Etiqueta={this.state.ETIQUETA}
              Nombres={this.state.NOMBREPAIS}
              IdRegion={this.state.IDPAIS}
              Cerrar={this.AbrirYCerrar}
              Actualizar={this.Actualizar}
            />
          )}

          {this.state.ETIQUETA === "Eliminar Pais" && (
            <Delete
              NOMBRE={this.state.NOMBRE}
              Etiqueta={this.state.ETIQUETA}
              ID={this.state.ID}
              AbrirYCerrar={this.AbrirYCerrar}
              Actualizar={this.Actualizar}
            />
          )}
          {this.state.ETIQUETA === "Eliminar Ciudad" && (
            <Delete
              NOMBRE={this.state.NOMBRE}
              Etiqueta={this.state.ETIQUETA}
              ID={this.state.ID}
              AbrirYCerrar={this.AbrirYCerrar}
              Actualizar={this.Actualizar}
            />
          )}

          {this.state.ETIQUETA === "Editar Pais" && (
            <Edit
              NOMBRE={this.state.NOMBRE}
              Etiqueta={this.state.ETIQUETA}
              ID={this.state.ID}
              AbrirYCerrar={this.AbrirYCerrar}
              Actualizar={this.Actualizar}
            />
          )}

          {this.state.ETIQUETA === "Editar Ciudad" && (
            <Edit
              NOMBRE={this.state.NOMBRE}
              Etiqueta={this.state.ETIQUETA}
              ID={this.state.ID}
              AbrirYCerrar={this.AbrirYCerrar}
              Actualizar={this.Actualizar}
            />
          )}

          <section id="Region">
            <h1>Regiones / Paises / Ciudades</h1>
            <button
              id="Btn_Region"
              etiqueta="Region"
              onClick={this.AgregarRegion}
            >
              Agregar Region
            </button>

            {this.state.RESULTADOREGION}
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Region;
