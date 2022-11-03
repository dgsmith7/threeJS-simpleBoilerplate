/*//////////////////////////////////////////////////////////
Original code by David Gail Smith, February 2022
Twitter: @davidgailsmith
A simple JS starter template for THREE js projects
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

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    setCamera();
    setLights();
    buildRenderer();
    container = renderer.domElement;
    document.body.appendChild(container);
    buildIt();
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

function buildIt() {
    //  put all of your geometry and materials in here
    geometry = new THREE.BoxGeometry(2, 2, 2);
//    geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
    material = new THREE.MeshPhongMaterial({
        color: "purple",
        side: THREE.DoubleSide,
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    console.log(scene);
}

function addOrbitControls() {
    controls = new THREE.OrbitControls(camera, container);
    controls.minDistance = 5;
    controls.maxDistance = 50;
    controls.autoRotate = true;
}

init();
animate();
