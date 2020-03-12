import Pages from "./pages.js";
import Button from "./button.js";
import { ARROW_LEFT, ARROW_RIGHT, ENTER, SPACE, addClassName, removeClassName } from "../helpers/helper.js";

export default class Carousel {
  _currentPage = 1;
  _carouselWrapper = null;
  _pages = null;
  activeElement = null;

  get _wrapper() {
    let wrapper = document.createElement("div");
    wrapper.setAttribute("tabindex", "0");
    wrapper.className = this.options.carouselWrapper || "";
    return wrapper;
  }

  get _activeElementWrapper() {
    let activeElement = document.createElement("div");
    activeElement.className = this.options.activeElement || "";
    return activeElement;
  }

  constructor(items = [], options = {}) {
    this.items = items;
    this.options = options;
    this._init();
  }

  _next() {
    let pageNumber = this._currentPage === this.items.length ? 1 : this._currentPage + 1;
    this._jump(pageNumber);
  }

  _previous() {
    let pageNumber = this._currentPage === 1 ? this.items.length : this._currentPage - 1;
    this._jump(pageNumber);
  }

  _jump(pageNumber) {
    removeClassName(this._pages.querySelectorAll("span")[this._currentPage - 1], "active");
    this._currentPage = pageNumber;
    addClassName(this._pages.querySelectorAll("span")[this._currentPage - 1], "active");

    this._update();
  }

  _update() {
    let current = this.items[this._currentPage - 1];
    let carouselElement = this.getCarouselElement(current);
    this.activeElement.removeChild(this.activeElement.firstChild);
    this.activeElement.appendChild(carouselElement);
    this._carouselWrapper.focus();
  }

  _wrapperKeyupHandler(event) {
    switch (event.code) {
      case ARROW_LEFT:
        this._previous();

        break;

      case ARROW_RIGHT:
        this._next();

        break;

      default:
        this.onKeyUp(event);
        break;
    }
  }

  _init() {
    this._carouselWrapper = this._wrapper;

    let previousBtn = new Button("<", { className: "previous" }, this._previous.bind(this)).render();
    this._carouselWrapper.appendChild(previousBtn);

    let current = this.items[this._currentPage - 1];
    let activeElement = this._activeElementWrapper;
    let carouselElement = this.getCarouselElement(current);
    this.activeElement = activeElement;

    this.activeElement.appendChild(carouselElement);
    this._carouselWrapper.appendChild(this.activeElement);

    let nextBtn = new Button(">", { className: "next" }, this._next.bind(this)).render();

    this._pages = new Pages(this.items, {}, this._jump.bind(this)).render();

    addClassName(this._pages.querySelectorAll("span")[this._currentPage - 1], "active");
    this._carouselWrapper.appendChild(this._pages);
    this._carouselWrapper.appendChild(nextBtn);

    this._carouselWrapper.addEventListener("keyup", this._wrapperKeyupHandler.bind(this));
  }

  getCarouselElement(item) {
    console.error("Not implemented in the sub class");
    return document.createElement("div");
  }

  render() {
    return this._carouselWrapper;
  }
}

export class VideCarousel extends Carousel {
  constructor(carouselOption, options) {
    super(carouselOption, options);
    this.timeout = null;
  }

  get _videoElement() {
    return this.activeElement.querySelector("video");
  }

  // Implement base class main method for getting the content of the active carousel item
  getCarouselElement(item) {
    this._cleanUp();
    let videoWrapper = document.createElement("div");
    let video = document.createElement("video");
    video.onkeyup = e => {
      e.preventDefault();
    };

    video.onkeypress = e => {
      e.preventDefault();
    };

    // video.setAttribute("controls", "");
    video.setAttribute("poster", item.poster);
    video.className = "video-js";
    let src = document.createElement("source");
    src.setAttribute("src", item.src);
    src.setAttribute("type", item.type || "video/mp4");

    video.appendChild(src);

    videoWrapper.appendChild(video);

    this._player = new VideoPlayer(this._playPause.bind(this)).render();

    videoWrapper.appendChild(this._player);

    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onMouseEnter = this._onMouseEnter.bind(this);
    videoWrapper.addEventListener("mouseenter", this._onMouseEnter);
    videoWrapper.addEventListener("mouseleave", this._onMouseLeave);
    this._videoWrapper = videoWrapper;
    return videoWrapper;
  }

  _onMouseLeave() {
    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      addClassName(this._player, "hide");
    }, 5000);
  }

  _onMouseEnter() {
    if (this.timeout) clearTimeout(this.timeout);
    removeClassName(this._player, "hide");
  }

  _cleanUp() {
    if (this._player) {
      this._player.querySelector("button").removeEventListener("click", this._playPause);
    }

    if (this._videoWrapper) {
      this._videoWrapper.removeEventListener("mouseleave", this._onMouseLeave);
      this._videoWrapper.removeEventListener("mouseenter", this._onMouseEnter);
    }
  }

  _playPause() {
    let video = this._videoElement;
    if (video && video.paused) {
      this._play(video);
    } else {
      this._pause(video);
    }
  }

  _play(video) {
    video.play();
    removeClassName(this._player.querySelector("button"), "play");
    addClassName(this._player.querySelector("button"), "pause");
  }

  _pause(video) {
    video.pause();
    removeClassName(this._player.querySelector("button"), "pause");
    addClassName(this._player.querySelector("button"), "play");
  }

  onKeyUp(e) {
    let video = this.activeElement.querySelector("video");
    this._onMouseEnter();
    switch (e.code) {
      case ENTER:
        if (video) this._play(video);

        break;

      case SPACE:
        if (video) this._pause(video);

        break;

      default:
        break;
    }

    this._onMouseLeave()
  }
}

export class VideoPlayer {
  constructor(onClick) {
    this.onClick = onClick;
  }

  render() {
    let controlsWrapper = document.createElement("div");
    controlsWrapper.className = "controls-wrapper hide";

    let playPause = document.createElement("button");
    playPause.className = "play";
    playPause.setAttribute("type", "button");
    playPause.addEventListener("click", this.onClick);

    controlsWrapper.appendChild(playPause);
    return controlsWrapper;
  }
}
