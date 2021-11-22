import { Color, Scene, Fog } from "three";

export default class Scenes {
  constructor() {
    const scene = new Scene();
    scene.fog = new Fog("skyblue", 1, 20);
    scene.background = new Color("skyblue");
    return scene;
  }
}
