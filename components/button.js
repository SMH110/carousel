export default class Button {
    constructor(name = "",options ={} ,onClick) {
      this.name = name;
      this.onClick = onClick;
      this.options  = options;
    }
  
    render() {
      let button = document.createElement("button");
      button.className = this.options.className || "";
      button.setAttribute("type", "button");
      button.appendChild(document.createTextNode(this.name));
      button.addEventListener('click', this.onClick)
      return button;
    }
  }
  