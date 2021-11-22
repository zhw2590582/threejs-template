import { Clock } from "three";

export default class Animation {
  constructor(app) {
    this.app = app;
    this.clock = new Clock();
    this.loop = this.loop.bind(this);
    this.app.renderer.setAnimationLoop(this.loop);
  }

  loop() {
    if (!this.app.running) return;
    this.app.emit("loop", this.clock.getDelta());
    const renderer = this.app.useEffects ? this.app.effects : this.app.renderer;
    renderer.render(this.app.scene, this.app.camera);
  }

  destroy() {
    this.app.renderer.setAnimationLoop(null);
  }
}
