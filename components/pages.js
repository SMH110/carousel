export default class Pages {
    constructor(items = [], options = {}, onClick) {
      this.items = items;
      this.options = options;
      this.onClick = onClick;
    }
  
    render() {
      let wrapper = document.createElement("div");
      wrapper.className = this.options.wrapperClassName || "";
  
      for (let i = 0; i < this.items.length; i++) {
        let pageElement = document.createElement("span");
        pageElement.appendChild(document.createTextNode(i + 1));
        pageElement.onclick = this.onClick.bind(this, i + 1);
        wrapper.appendChild(pageElement);
      }
  
      return wrapper;
    }
  }
  