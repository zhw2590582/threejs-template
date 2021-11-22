import "regenerator-runtime/runtime";
import Emitter from "./utils/emitter";
import Animation from "./animation";
import Camera from "./camera";
import Control from "./control";
import Events from "./events";
import Lights from "./lights";
import Renderer from "./renderer";
import Scene from "./scene";
import World from "./world";
import Effects from "./effects";
import Helper from "./helper";
import Debug from "./debug";

export default class App extends Emitter {
  constructor({ container }) {
    super();
    this.running = true;
    this.useEffects = false;
    this.container = container;

    this.scene = new Scene(this);
    this.world = new World(this);
    this.camera = new Camera(this);
    this.lights = new Lights(this);
    this.renderer = new Renderer(this);
    this.effects = new Effects(this);
    this.canvas = this.renderer.domElement;
    this.container.append(this.canvas);
    this.control = new Control(this);
    this.events = new Events(this);
    this.animation = new Animation(this);
    this.helper = new Helper(this);

    if (this.isDebug) {
      this.debug = new Debug(this);
    }

    console.log(this);
  }

  get isDebug() {
    return (
      process.env.NODE_ENV === "development" ||
      window.location.href.includes("debug")
    );
  }

  get width() {
    return this.container.clientWidth;
  }

  get height() {
    return this.container.clientHeight;
  }

  get aspect() {
    return this.width / this.height;
  }

  destroy() {
    this.running = false;
    this.scene.destroy && this.scene.destroy();
    this.world.destroy && this.world.destroy();
    this.camera.destroy && this.camera.destroy();
    this.lights.destroy && this.lights.destroy();
    this.renderer.destroy && this.renderer.destroy();
    this.effects.destroy && this.effects.destroy();
    this.control.destroy && this.control.destroy();
    this.events.destroy && this.events.destroy();
    this.animation.destroy && this.animation.destroy();
    this.helper.destroy && this.helper.destroy();
    this.debug && this.debug.destroy && this.debug.destroy();
    this.container.remove(this.canvas);
    this.emit("destroy");
  }
}

new App({
  container: document.getElementById("app"),
});
