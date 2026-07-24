// ===============================
// SMART UMEME
// Jumeau numérique Cabine 1
// Partie 1 : Scène
// ===============================


console.log("Jumeau 3D chargé");

// Création de la scène
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b1220);

// Création de la caméra
const camera = new THREE.PerspectiveCamera(
    75,
    document.getElementById("scene3D").clientWidth /
    document.getElementById("scene3D").clientHeight,
    0.1,
    1000
);

// Position de la caméra
camera.position.set(0, 3, 8);

// TOURNER
const transformerGroup = new THREE.Group();
scene.add(transformerGroup);

// =====================================
// CONTROLE CAMERA SOURIS
// =====================================

//const controls = new OrbitControls(
  //  camera,
    //renderer.domElement
//);
//controls.enableDamping = true;
//controls.dampingFactor = 0.05;
//controls.target.set(0,0,0);

// Création du renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    document.getElementById("scene3D").clientWidth,
    document.getElementById("scene3D").clientHeight
);

renderer.setPixelRatio(window.devicePixelRatio);

// Ajouter le canvas dans la page
document.getElementById("scene3D").appendChild(renderer.domElement);

// Lumière ambiante
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// ===============================
// SOL DE LA CABINE
// ===============================

// Géométrie du sol
const floorGeometry = new THREE.PlaneGeometry(20, 20);

// Matériau
const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0x2c3e50,
    side: THREE.DoubleSide
});

// Création du sol
const floor = new THREE.Mesh(floorGeometry, floorMaterial);

// Rotation
floor.rotation.x = Math.PI / 2;

// Position
floor.position.y = -1;

// Ajout à la scène
scene.add(floor);

// ===============================
// LUMIERE DIRECTIONNELLE
// ===============================

const sun = new THREE.DirectionalLight(0xffffff, 2);

sun.position.set(10, 15, 10);

scene.add(sun);


// =====================================
// TRANSFORMATEUR
// =====================================

// Corps principal
const bodyGeometry = new THREE.BoxGeometry(3, 2.2, 2);

const bodyMaterial = new THREE.MeshStandardMaterial({
    color: 0x2ecc71,
    metalness: 0.5,
    roughness: 0.4
});

const transformer = new THREE.Mesh(bodyGeometry, bodyMaterial);

transformer.position.set(0, 0.2, 0);

scene.add(transformer);


// Couvercle
const coverGeometry = new THREE.BoxGeometry(3.2, 0.15, 2.2);

const coverMaterial = new THREE.MeshStandardMaterial({
    color: 0x95a5a6
});

const cover = new THREE.Mesh(coverGeometry, coverMaterial);

cover.position.set(0, 1.35, 0);

scene.add(cover);


// Pied gauche
const footGeometry = new THREE.BoxGeometry(0.25, 0.6, 0.25);

const footMaterial = new THREE.MeshStandardMaterial({
    color: 0x555555
});

const foot1 = new THREE.Mesh(footGeometry, footMaterial);
foot1.position.set(-1.1, -0.9, -0.7);
scene.add(foot1);


// Pied droit
const foot2 = foot1.clone();
foot2.position.set(1.1, -0.9, -0.7);
scene.add(foot2);


// Pied arrière gauche
const foot3 = foot1.clone();
foot3.position.set(-1.1, -0.9, 0.7);
scene.add(foot3);


// Pied arrière droit
const foot4 = foot1.clone();
foot4.position.set(1.1, -0.9, 0.7);
scene.add(foot4);


// =====================================
// RADIATEURS GAUCHE
// =====================================

const radiatorMaterial = new THREE.MeshStandardMaterial({
    color: 0x2c3e50
});

for(let i=0;i<7;i++){

    const radiator = new THREE.Mesh(

        new THREE.BoxGeometry(0.08,1.8,0.18),

        radiatorMaterial

    );

    radiator.position.set(-1.65,0.8,-0.6+i*0.2);

    scene.add(radiator);

}


// =====================================
// RADIATEURS DROITE
// =====================================

for(let i=0;i<7;i++){

    const radiator = new THREE.Mesh(

        new THREE.BoxGeometry(0.08,1.8,0.18),

        radiatorMaterial

    );

    radiator.position.set(1.65,0.8,-0.6+i*0.2);

    scene.add(radiator);

}



// =====================================
// ISOLATEURS HAUTE TENSION (HT)
// =====================================

const insulatorMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.4
});


for(let i=0;i<3;i++){

    // Partie isolateur
    const insulator = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12,0.18,0.45,32),
        insulatorMaterial
    );

    insulator.position.set(
        -0.5 + i*0.5,
        2.15,
        0
    );

    scene.add(insulator);


    // Petite borne métallique au-dessus
    const terminal = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05,0.05,0.25,20),
        new THREE.MeshStandardMaterial({
            color:0x555555
        })
    );

    terminal.position.set(
        -0.5 + i*0.5,
        2.48,
        0
    );

    scene.add(terminal);

}


// =====================================
// BORNES BASSE TENSION (BT)
// =====================================

const btMaterial = new THREE.MeshStandardMaterial({
    color: 0xffcc00
});


for(let i=0;i<4;i++){

    const btTerminal = new THREE.Mesh(

        new THREE.CylinderGeometry(
            0.08,
            0.08,
            0.35,
            32
        ),

        btMaterial

    );


    btTerminal.rotation.z = Math.PI / 2;


    btTerminal.position.set(

        0.95,
        0.4 - i*0.25,
        0

    );


    scene.add(btTerminal);


}


// =====================================
// CABLES HAUTE TENSION (HT)
// =====================================

const cableMaterialHT = new THREE.MeshStandardMaterial({
    color: 0xff0000
});


function createCableHT(x){

    const cable = new THREE.Mesh(

        new THREE.CylinderGeometry(
            0.025,
            0.025,
            2,
            16
        ),

        cableMaterialHT

    );


    cable.position.set(
        x,
        3.2,
        0
    );


    scene.add(cable);

}


// 3 câbles HT
createCableHT(-0.5);
createCableHT(0);
createCableHT(0.5);



// =====================================
// CABLES BASSE TENSION (BT)
// =====================================

const cableMaterialBT = new THREE.MeshStandardMaterial({
    color: 0x0000ff
});


for(let i=0;i<4;i++){

    const cableBT = new THREE.Mesh(

        new THREE.CylinderGeometry(
            0.03,
            0.03,
            2.5,
            16
        ),

        cableMaterialBT

    );


    cableBT.rotation.z = Math.PI/2;


    cableBT.position.set(

        2.1,
        0.4-i*0.25,
        0

    );


    scene.add(cableBT);

}


// =====================================
// ANIMATION FLUX D'ENERGIE
// =====================================

const energyMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ffff,
    emissive: 0x00ffff,
    emissiveIntensity: 2
});


// Particule énergie HT
const energyHT = new THREE.Mesh(
    new THREE.SphereGeometry(0.06,16,16),
    energyMaterial
);

scene.add(energyHT);


// Particule énergie BT
const energyBT = new THREE.Mesh(
    new THREE.SphereGeometry(0.06,16,16),
    energyMaterial
);

scene.add(energyBT);


// Animation
let flux = 0;


function animateEnergy(){

    flux += 0.02;


    // déplacement HT vertical
    energyHT.position.set(
        0,
        2.2 - (flux % 1)*1.5,
        0
    );


    // déplacement BT horizontal
    energyBT.position.set(
        1 + (flux % 1)*1.5,
        0.2,
        0
    );


    requestAnimationFrame(animateEnergy);

}


animateEnergy();


// =====================================
// PANNEAU DONNEES TRANSFORMATEUR
// =====================================




// Boucle d'animation

function animate() {

    requestAnimationFrame(animate);

    transformer .rotation.y +=0.005;

    renderer.render(scene, camera);

}
    


animate();

// Adapter la scène lors du redimensionnement
window.addEventListener("resize", () => {

    const width = document.getElementById("scene3D").clientWidth;
    const height = document.getElementById("scene3D").clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);

});