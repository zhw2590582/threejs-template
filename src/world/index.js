import { BoxGeometry, MeshNormalMaterial, Mesh, AnimationMixer } from "three";
import modelLoader from "../utils/modelLoader";

export default class Scenes {
  constructor(app) {
    this.app = app;
    this.addBox();
    this.addBird();
  }

  addBox() {
    const geometry = new BoxGeometry(0.5, 0.5, 0.5);
    const material = new MeshNormalMaterial();
    const mesh = new Mesh(geometry, material);
    this.app.scene.add(mesh);

    this.app.on("loop", (delta) => {
      mesh.rotation.x += delta;
      mesh.rotation.y += delta / 2;
      mesh.rotation.z += delta / 3;
    });
  }

  async addBird() {
    const { model, clip } = await modelLoader("./models/Parrot.glb");
    model.position.y = 1;
    this.app.scene.add(model);
    this.app.control.target.copy(model.position);

    const mixer = new AnimationMixer(model);
    const action = mixer.clipAction(clip);
    action.play();

    this.app.on("loop", (delta) => {
      mixer.update(delta);
    });
  }
}
