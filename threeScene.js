let scene, camera, renderer;
function init3DScene(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
  renderer = new THREE.WebGLRenderer({canvas: document.getElementById("gameCanvas")});
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Player Model
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({color:0x00ff00});
  const player = new THREE.Mesh(geometry, material);
  scene.add(player);

  camera.position.z = 5;

  animate();
  function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
}
