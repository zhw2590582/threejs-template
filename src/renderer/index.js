import { WebGLRenderer } from "three";

export default class Renderer {
  constructor(app) {
    const { clientWidth, clientHeight } = app.container;
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(clientWidth, clientHeight);
    renderer.physicallyCorrectLights = true;
    return renderer;
  }
}
