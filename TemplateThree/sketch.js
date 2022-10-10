/*//////////////////////////////////////////////////////////
"1ofX Simple ThreeJS template" 
Original code by David Gail Smith, February 2022
Twitter: @davidgailsmith
http://baconbitscollective.org
A simple JS starter template for THREE js projects on 1ofX
*/ //////////////////////////////////////////////////////////

let container,
  scene,
  camera,
  renderer,
  ambLt,
  dirLt,
  spotLt,
  geometry,
  material,
  mesh,
  controls;
let screenShotDone = false;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  setCamera();
  setLights();
  buildRenderer();
  container = renderer.domElement;
  document.body.appendChild(container);
  //  loadAssets();  //  to load a 3d model from ipfs link
  //  buildIt();
  buildHawkCluster();
  addOrbitControls();
  window.addEventListener("resize", onWindowResize);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  updateScene();
  renderer.render(scene, camera);
}

function updateScene() {
  if (screenShotDone == false) {
    // waits for first frame to take screenshot and send features
    //  add features on next line if desired
    //  window.OneOfX.save({Hubs: 6, Stages: 3, Gears: 26, Rods: 29, Color_Schemes: 12, Palettes: 130});
    screenShotDone = true;
  }
  // put any scene updates here (rotation of objects for example, etc)
  controls.update();
}

function setCamera() {
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.x = 5;
  camera.position.y = 3;
  camera.position.z = 5;
  scene.add(camera);
}

function setLights() {
  ambLt = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambLt);
  dirLt = new THREE.DirectionalLight(0xffffff, 0.5);
  dirLt.position.set(0, 15, 0);
  scene.add(dirLt);
  spotLt = new THREE.SpotLight(0xffffff, 0.5);
  spotLt.position.set(5, 1, 2);
  spotLt.decay = 2.0;
  scene.add(spotLt);
}

function buildRenderer() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight, true);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// function loadAssets() {
//   const loader = new THREE.OBJLoader();
//   let material;
//   let cubeColor = new THREE.Color(baconRand.rand(), baconRand.rand(), baconRand.rand());
//   // Texture cubes as background
//   loader.load('https://ipfs.io/ipfs/bafybeihsxmq6fqvjzew7sje5fg5ahtr3rytafzrrsdu3bkwuhbnsxvrcmm', function(object) {
//     object.name = "modelname";
//     object.position = new THREE.Vector3();
//     object.position.x = 0;
//     object.position.y = 0;
//     object.position.z = 0;
//     object.rotation.y = 0;
//     material = new THREE.MeshStandardMaterial({
//       color: cubeColor,
//       metalness: 0.8,
//       roughness: 0.2,
//     });
// object.material = material;
//    scene.add(object);
//     console.log("Spinner - ", object);
//   }, function(xhr) {
//     console.log((xhr.loaded / xhr.total * 100) + '% of SPinner loaded');
//   }, function(error) {
//     console.log('An error happened with Spinner:' + error);
//   });
// }

function buildIt() {
  //  put all of your geometry and materials in here
  geometry = new THREE.BoxGeometry(2, 2, 2);
  material = new THREE.MeshPhongMaterial({
    color: "purple",
    side: THREE.DoubleSide,
  });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  console.log(scene);
}

function buildHawkCluster() {
  let hawkData = [
    //belly
    0,
    0,
    5,
    1,
    0,
    3,
    0,
    -0.5,
    3,

    0,
    -0.5,
    3,
    1,
    0,
    3,
    1,
    0,
    1,

    1,
    0,
    1,
    0,
    0,
    -2,
    0,
    -0.5,
    1,

    0,
    -0.5,
    1,
    0,
    -0.5,
    3,
    1,
    0,
    1,

    1,
    0,
    3,
    2,
    0,
    3,
    1,
    0,
    -1,

    1,
    0,
    -1,
    2,
    0,
    3,
    7,
    0,
    4,

    1,
    0,
    -1,
    7,
    0,
    4,
    9,
    0,
    3,

    9,
    0,
    3,
    4,
    0,
    -1,
    1,
    0,
    -1,

    9,
    0,
    3,
    9,
    0,
    2,
    4,
    0,
    -1,

    9,
    0,
    3,
    10,
    0,
    2,
    9,
    0,
    2,

    1,
    0,
    1,
    1,
    0,
    -2,
    0,
    0,
    -2,

    1,
    0,
    -2,
    2,
    0,
    -4,
    0,
    0,
    -2,

    0,
    0,
    -2,
    2,
    0,
    -4,
    0,
    0,
    -5,

    -0,
    0,
    5,
    -1,
    0,
    3,
    -0,
    -0.5,
    3,

    -0,
    -0.5,
    3,
    -1,
    0,
    3,
    -1,
    0,
    1,

    -1,
    0,
    1,
    0,
    0,
    -2,
    -0,
    -0.5,
    1,

    -0,
    -0.5,
    1,
    -0,
    -0.5,
    3,
    -1,
    0,
    1,

    -1,
    0,
    3,
    -2,
    0,
    3,
    -1,
    0,
    -1,

    -1,
    0,
    -1,
    -2,
    0,
    3,
    -7,
    0,
    4,

    -1,
    0,
    -1,
    -7,
    0,
    4,
    -9,
    0,
    3,

    -9,
    0,
    3,
    -4,
    0,
    -1,
    -1,
    0,
    -1,

    -9,
    0,
    3,
    -9,
    0,
    2,
    -4,
    0,
    -1,

    -9,
    0,
    3,
    -10,
    0,
    2,
    -9,
    0,
    2,

    -1,
    0,
    1,
    -1,
    0,
    -2,
    -0,
    0,
    -2,

    -1,
    0,
    -2,
    -2,
    0,
    -4,
    -0,
    0,
    -2,

    -0,
    0,
    -2,
    -2,
    0,
    -4,
    -0,
    0,
    -5,

    // wing base
    0,
    0,
    5,
    0,
    0.5,
    3,
    1,
    0,
    3,

    1,
    0,
    3,
    2,
    0.5,
    1,
    0,
    0.5,
    3,

    2,
    0.5,
    1,
    1,
    0,
    3,
    2,
    0,
    3,

    2,
    0,
    3,
    7,
    0,
    4,
    2,
    0.5,
    1,

    2,
    0.5,
    1,
    7,
    0,
    4,
    7,
    0.5,
    3,

    7,
    0.5,
    3,
    7,
    0,
    4,
    8,
    0.5,
    2,

    8,
    0.5,
    2,
    7,
    0,
    4,
    9,
    0,
    3,

    9,
    0,
    3,
    10,
    0,
    2,
    8,
    0.5,
    2,

    8,
    0.5,
    2,
    9,
    0.25,
    2,
    4,
    0,
    -1,

    4,
    0,
    -1,
    8,
    0.5,
    2,
    4,
    0.5,
    -0.5,

    4,
    0.5,
    -0.5,
    1,
    0.5,
    0,
    4,
    0,
    -1,

    4,
    0,
    -1,
    1,
    0,
    -1,
    1,
    0.5,
    0,

    1,
    0.5,
    0,
    1,
    0,
    -1,
    0.5,
    0.5,
    -2,

    0.5,
    0.5,
    -2,
    1,
    0,
    -1,
    1,
    0, //
    -4,

    1,
    0, //
    -4,
    1,
    0,
    -2,
    2,
    0,
    -4,

    2,
    0,
    -4,
    0,
    0,
    -5,
    1,
    0, //
    -4,

    1,
    0, //
    -4,
    0,
    0,
    -5,
    0,
    0, //
    -3,

    -0,
    0,
    5,
    -0,
    0.5,
    3,
    -1,
    0,
    3,

    -1,
    0,
    3,
    -2,
    0.5,
    1,
    -0,
    0.5,
    3,

    -2,
    0.5,
    1,
    -1,
    0,
    3,
    -2,
    0,
    3,

    -2,
    0,
    3,
    -7,
    0,
    4,
    -2,
    0.5,
    1,

    -2,
    0.5,
    1,
    -7,
    0,
    4,
    -7,
    0.5,
    3,

    -7,
    0.5,
    3,
    -7,
    0,
    4,
    -8,
    0.5,
    2,

    -8,
    0.5,
    2,
    -7,
    0,
    4,
    -9,
    0,
    3,

    -9,
    0,
    3,
    -10,
    0,
    2,
    -8,
    0.5,
    2,

    -8,
    0.5,
    2,
    -9,
    0.25,
    2,
    -4,
    0,
    -1,

    -4,
    0,
    -1,
    -8,
    0.5,
    2,
    -4,
    0.5,
    -0.5,

    -4,
    0.5,
    -0.5,
    -1,
    0.5,
    0,
    -4,
    0,
    -1,

    -4,
    0,
    -1,
    -1,
    0,
    -1,
    -1,
    0.5,
    0,

    -1,
    0.5,
    0,
    -1,
    0,
    -1,
    -0.5,
    0.5,
    -2,

    -0.5,
    0.5,
    -2,
    -1,
    0,
    -1,
    -1,
    0, //
    -4,

    -1,
    0, //
    -4,
    -1,
    0,
    -2,
    -2,
    0,
    -4,

    -2,
    0,
    -4,
    -0,
    0,
    -5,
    -1,
    0, //
    -4,

    -1,
    0, //
    -4,
    -0,
    0,
    -5,
    -0,
    0, //
    -3,

    // wing top + back
    0,
    0.5,
    3,
    1,
    0.5,
    1,
    0,
    0.5,
    1.5, //

    0,
    0.5,
    1.5,
    1,
    0.5,
    1,
    0,
    0.5,
    0.5, //

    0,
    0.5,
    0.5,
    1,
    0.5,
    1,
    0,
    0.5,
    -1, //

    0,
    0.5,
    -1,
    0.5,
    0.5,
    -2,
    1,
    0.5,
    0,

    0.5,
    0.5,
    -2,
    0,
    0.5,
    -1,
    0,
    0, //
    -3,

    0,
    0, //
    -3,
    1,
    0, //
    -4,
    0.5,
    0.5,
    -2,

    0,
    0.5,
    -1,
    1,
    0.5,
    0,
    1,
    0.5,
    1,

    0,
    0.5,
    3,
    1,
    0.5,
    1,
    2,
    0.5,
    1, //

    2,
    0.5,
    1,
    1,
    0.5,
    0,
    1,
    0.5,
    1,

    1,
    0.5,
    0,
    2,
    0.5,
    1,
    4,
    0.5,
    -0.5,

    4,
    0.5,
    -0.5,
    2,
    0.5,
    1,
    8,
    0.5,
    2,

    8,
    0.5,
    2,
    2,
    0.5,
    1,
    7,
    0.5,
    3,

    -0,
    0.5,
    3,
    -1,
    0.5,
    1,
    -0,
    0.5,
    1.5, //

    -0,
    0.5,
    1.5,
    -1,
    0.5,
    1,
    -0,
    0.5,
    0.5, //

    -0,
    0.5,
    0.5,
    -1,
    0.5,
    1,
    -0,
    0.5,
    -1, //

    -0,
    0.5,
    -1,
    -0.5,
    0.5,
    -2,
    -1,
    0.5,
    0,

    -0.5,
    0.5,
    -2,
    -0,
    0.5,
    -1,
    -0,
    0, //
    -3,

    -0,
    0, //
    -3,
    -1,
    0, //
    -4,
    -0.5,
    0.5,
    -2,

    -0,
    0.5,
    -1,
    -1,
    0.5,
    0,
    -1,
    0.5,
    1,

    0,
    0.5,
    3,
    -1,
    0.5,
    1,
    -2,
    0.5,
    1, //

    -2,
    0.5,
    1,
    -1,
    0.5,
    0,
    -1,
    0.5,
    1,

    -1,
    0.5,
    0,
    -2,
    0.5,
    1,
    -4,
    0.5,
    -0.5,

    -4,
    0.5,
    -0.5,
    -2,
    0.5,
    1,
    -8,
    0.5,
    2,

    -8,
    0.5,
    2,
    -2,
    0.5,
    1,
    -7,
    0.5,
    3,
  ];

  let vertices = [];
  for (let i = 0; i < hawkData.length; i = i + 3) {
    vertices.push({
      pos: [hawkData[i], hawkData[i + 1], hawkData[i + 2]],
      col: [0.6, 0, 0],
    });
  }

  const positions = [];
  const uvs = [];
  const colors = [];
  for (const vertex of vertices) {
    positions.push(...vertex.pos);
    colors.push(...vertex.col);
  }

  let geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(positions), 3)
  );
  geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(colors), 3)
  );

  geometry.computeVertexNormals();

  material = new THREE.MeshPhongMaterial({
    vertexColors: THREE.VertexColors,
    side: THREE.DoubleSide,
  });
  hawk = new THREE.Mesh(geometry, material);
  scene.add(hawk);
  console.log(hawk);
}
function addOrbitControls() {
  controls = new THREE.OrbitControls(camera, container);
  controls.minDistance = 5;
  controls.maxDistance = 50;
  controls.autoRotate = true;
}

init();
animate();
