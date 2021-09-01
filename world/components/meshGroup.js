import {
    SphereBufferGeometry,
    Group,
    Mesh,
    MeshStandardMaterial
} from 'three'

function createMeshGroup() {
    const group = new Group()
    const geometry = new SphereBufferGeometry(0.25, 16, 16);
    const material = new MeshStandardMaterial({
      color: 'indigo',
    })
    const protoSphere = new Mesh(geometry, material)
    group.add(protoSphere)
    group.tick = (delta) => {}
    return group;
  }

export { createMeshGroup }