import { DirectionalLight, HemisphereLight } from "three";

export default class Light {
  constructor(app) {
    this.hemisphereLight = new HemisphereLight("white", "darkslategrey", 5);
    this.directionalLight = new DirectionalLight("white", 4);
    this.directionalLight.position.set(10, 10, 10);
    app.scene.add(this.hemisphereLight, this.directionalLight);
  }
}
