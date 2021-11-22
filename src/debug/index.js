import Stats from "three/examples/jsm/libs/stats.module.js";

export default class Debug {
  constructor(app) {
    const stats = new Stats();
    app.container.appendChild(stats.dom);
    stats.update = stats.update.bind(stats);
    app.on("loop", stats.update);
  }
}
