import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Control {
  constructor(app) {
    const control = new OrbitControls(app.camera, app.canvas);
    control.enableDamping = true;
    control.enablePan = false;
    control.autoRotate = true;
    control.minDistance = 1;
    control.maxDistance = 10;
    app.on("loop", control.update);
    return control;
  }
}
