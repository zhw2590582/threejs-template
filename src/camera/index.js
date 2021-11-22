import { PerspectiveCamera } from "three";

export default class Camera {
  constructor(app) {
    const camera = new PerspectiveCamera(35, app.aspect, 0.1, 100);
    camera.position.z = 3;
    camera.position.x = 3;
    camera.position.y = 3;
    return camera;
  }
}
