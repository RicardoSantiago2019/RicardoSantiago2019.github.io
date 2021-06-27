class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>&copy; 2021 Santiago Robles Ricardo Alberto.
<br><a href="informacion.html">más información</a></p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
