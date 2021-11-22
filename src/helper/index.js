import { GridHelper, AxesHelper, CameraHelper } from "three";

export default class Helper {
  constructor(app) {
    this.app = app;
    this.grid();
    this.axes();
    // this.camera();
  }

  grid() {
    const helper = new GridHelper(10, 10);
    this.app.scene.add(helper);
  }

  axes() {
    const helper = new AxesHelper(5);
    this.app.scene.add(helper);
  }

  camera() {
    const helper = new CameraHelper(this.app.camera);
    this.app.scene.add(helper);
  }
}
