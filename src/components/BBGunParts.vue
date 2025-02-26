<script setup>
import { onMounted, ref} from 'vue'
import * as THREE from 'three';


//import VueImageAnnotator from 'vue-image-annotator';
//import VueMediaAnnotator from 'vue-media-annotator';
//var scene = new THREE.scene()
const canvas = ref(null)
const width = window.innerWidth
const height = window.innerHeight

        const ratio = width/height
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, ratio, 0.1, 1000);
        camera.layers.enable( 0 );
        camera.layers.enable( 1 );
        camera.layers.enable( 2 );
const raycaster = new THREE.Raycaster();
raycaster.layers.set( 2 );
const pointer = new THREE.Vector2();


const renderer = ref()




function render() {

  // update the picking ray with the camera and pointer position
  raycaster.setFromCamera( pointer, camera );

  // calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects( scene.children );

  for ( let i = 0; i < intersects.length; i ++ ) {

    //intersects[ i ].object.material.color.set( 0xff0000 );
    intersects[ i ].object.material.transparent = true;
    intersects[ i ].object.material.opacity = 0.5; // Adjust the value as needed

    console.log(`rendered... ${intersects[i].point.x} ${intersects[i].point.y} `)

  }

renderer.value.render( scene, camera );


}




onMounted(() => {
  renderer.value = new THREE.WebGLRenderer(
          {
          canvas : canvas.value
          }
        );

        function onPointerMove( event ) {

// calculate pointer position in normalized device coordinates
// (-1 to +1) for both components

pointer.x = ( event.clientX / renderer.value.domElement.clientWidth ) * 2 - 1;
pointer.y = - ( event.clientY / renderer.value.domElement.clientHeight ) * 2 + 1;
window.requestAnimationFrame(render);
}
        window.addEventListener( 'pointermove', onPointerMove );
//  var c = document.getElementById("c");
//  var ctx = c.getContext("2d");

// Set the width and height of the canvas
//c.width = 500;
//c.height = 300;
// Draw a rectangle
//ctx.fillStyle = 'lightblue';
//ctx.fillRect(0, 0, c.width, c.height);
  
  
       //redefine for now...
        //renderer = new THREE.WebGLRenderer(
          //{
          //canvas : canvas.value
         // }
        //);
        renderer.value.setSize(380, 170);

        
        //    container.appendChild(renderer.domElement);
    
        //const geometry = new THREE.BoxGeometry();
       // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
       // const cube = new THREE.Mesh(geometry, material);
        //scene.add(cube);


        const loader = new THREE.TextureLoader();

loader.load(
  '/gunLoc.png',
  function (texture) {
    // in this function, the texture is now available
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const geometry = new THREE.PlaneGeometry(8, 8);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.layers.set(1)
    scene.add(mesh);
    renderer.value.render(scene, camera);
  },
  undefined, // onProgress callback currently not supported
  function (err) {
    console.error('An error happened.');
    console.log(err)
  }
);
const annotations = [{x:.5,y:2},{x:.5,y:-2},{x:2,y:-2},{x:3.5,y:-1},{x:3,y:2}, {x:-.8,y:2.8},{x:-.8,y:-2.5},{x:-2,y:-3},{x:-3.5,y:-2.5},{x:-3,y:1.8}]

for (const element of annotations) {
  const loaderB = new THREE.TextureLoader();
loaderB.load(
  '/target.png',
  function (texture) {
    // in this function, the texture is now available
    const material = new THREE.SpriteMaterial( { map: texture, color: 0xffffff } );
const annotation = new THREE.Sprite(material);
// Position the annotation
annotation.position.set(element.x, element.y, 0); 
annotation.layers.set(2)
// Add the annotation to the scene
scene.add(annotation);
    renderer.value.render(scene, camera);
  },
  undefined, // onProgress callback currently not supported
  function (err) {
    console.error('An error happened.');
    console.log(err)
  }
);
}







        camera.position.z = 5;
    
   //     const animate = () => {
     //     requestAnimationFrame(animate);
       //   cube.rotation.x += 0.01;
         // cube.rotation.y += 0.01;
          renderer.value.render(scene, camera);
      //  };
    
       // animate();
    
   //     window.addEventListener('resize', () => {
     //       camera.aspect = ratio;
       //     camera.updateProjectionMatrix();
         //   renderer.setSize(width, height);
        //});
      })
  


//const  existingAnnotations= []

</script>

<template>
  <!-- Panel 3 -->
  <div
            class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-3"
          >
            <!-- Panel Image -->
            <div class="flex justify-center md:w-1/2">
              <img
                src="/blowgun.jpeg"
                alt=""
                class="relative z-10"
              />
            </div>
            <!-- Panel Content -->
            <div class="flex flex-col space-y-8 md:w-1/2">
              <h3
                class="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left"
              >
              Parts of a BB gun
              </h3>
              <p class="max-w-md text-center text-grayishBlue md:text-left">
                Identify the parts of a BB Gun, before hovering over the target to reveal the answer.
              </p>
                           
              <canvas ref="canvas" >
                </canvas>

              <h1>Loading a BB Gun.</h1>
              <div>
                Following the Safety Guidelines referenced on the appropriate tab, identify the loading door of the BB GUN.
                Normally this door is need the end of the muzzle, or on the stock of the rifle at the beginning of the muzzle.
                Push the door open, as you tilt the gun to the right side. Then cup hand under the barrel, and slowly poor in new Daisy BBs.
                Do not completely fill resovoir as this could jam your gun. Finally, close the loading door.
              </div>

              <div class="mx-auto md:mx-0">
                <a
                  href="#"
                  class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >Top of Page</a
                >
              </div>
            </div>
          </div>
</template>