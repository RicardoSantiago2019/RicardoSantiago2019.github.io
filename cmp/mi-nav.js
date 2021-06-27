import {
  cargaRoles
} from "../js/seguridad.js";
import {
  getAuth
} from "../lib/fabrica.js";
import {
  muestraError
} from "../lib/util.js";

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul class="menu">
        <li>
          <a href="index.html">Inicio</a>
        </li>
        <li>
          <a href="sesion.html">Sesión</a>
        </li>
      </ul>`;
    this.ul =
      this.querySelector("ul");
    getAuth().onAuthStateChanged(
      usuario => this.
        cambiaUsuario(usuario),
      muestraError);
  }

  async cambiaUsuario(usu) {
    if (usu && usu.email) {
      let html = "";
      const roles = await cargaRoles(usu.email);
  if (roles.has("Integrante")) {
        html += `
            <li>
            <a href="chat.html">Chat</a>
          </li>
          `;
      }
      if (roles.has("Administrador",)) {
        html += /* html */
          `<li>
            <a href="usuarios.html">Usuarios</a>
          </li>
          `;
      }
      this.ul.innerHTML += html;
    }
  }
}

customElements.define(
  "mi-nav", MiNav);
