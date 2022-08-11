class AnimatedElement {
  constructor(selector, onClass = "", offClass = "noClass") {
    this.element = document.querySelector(selector);
    this.onClass = onClass;
    this.offClass = offClass;
  }

  on() {
    this.element.classList.remove(this.offClass);
    this.element.offsetHeight;
    this.element.classList.add(this.onClass);
    this.state = true;
  }

  off() {
    this.element.classList.remove(this.onClass);
    this.element.offsetHeight;
    this.element.classList.add(this.offClass);
    this.state = false;
  }

  toggle(obj) {
    let currentObj = obj || this;
    console.log("toggle method");
    console.log(this);
    if (this.state) {
      this.off();
    } else {
      this.on();
    }
  }
}

export default AnimatedElement;
