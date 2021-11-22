import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default async function (url) {
  const loader = new GLTFLoader();
  const parrot = await loader.loadAsync(url);
  return {
    model: parrot.scene.children[0],
    clip: parrot.animations[0],
  };
}
