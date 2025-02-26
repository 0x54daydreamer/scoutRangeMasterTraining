<script setup>




</script>

<template>
  
  <div
            class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-4"
          >
            <!-- Panel Image -->
            <!-- <div class="flex justify-left md:w-1/2">
              <img
                src="images/illustration-features-tab-2.svg"
                alt=""
                class="z-10"
              />
            </div>  -->
            
            <!-- Panel Content -->
             
            <div class="flex flex-col space-y-8 z-10" >
              <h3 class="mt-14 text-3xl font-semibold text-center md:mt-0">
                Cub Scout Targets
              </h3>
             
              <div class="gallery-container gallery-garments hide">
    <div class="gallery-item">
        <img src="/tiger.png" height="600" width="400">
        
    </div>
    <div class="gallery-item">
        <img src="/bear.png" height="600" width="400">
        
    </div>
    <div class="gallery-item">
        <img src="/weblos.png" height="600" width="400">
        
    </div>    
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
<style>
.gallery-item {
  display: inline-block;
}

.gallery-container {
  display: flex;
  flex-direction: row;
  height: 600px;
  overflow-x: scroll;
}
</style>