export default class Event {
  constructor(app) {
    this.app = app;

    this.resize();
    this.resize = this.resize.bind(this);
    window.addEventListener("resize", this.resize);
  }

  resize() {
    this.app.camera.aspect = this.app.aspect;
    this.app.camera.updateProjectionMatrix();
    this.app.renderer.setSize(this.app.width, this.app.height);
    this.app.renderer.setPixelRatio(window.devicePixelRatio);
    this.app.emit("resize");
  }

  destroy() {
    window.removeEventListener("resize", this.resize);
  }
}
