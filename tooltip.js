class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
  }

  connectedCallback() {
    this._tooltipText = this.getAttribute("text") || 'none';
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = "(?)";
    tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this));
    this.appendChild(tooltipIcon);
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = this._tooltipText;
    this.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.removeChild(this._tooltipContainer);
  }
}

customElements.define("mt-tooltip", Tooltip);
