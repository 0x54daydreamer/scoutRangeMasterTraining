<script setup>
import { ref, onMounted } from 'vue'
//import HistoryPanel from './HistoryPanel.vue';



// lifecycle hooks
onMounted(() => {
  tabs.value = document.querySelectorAll('.tab')
  panels.value = document.querySelectorAll('.panel')
  console.log(tabs)
// Tabs menu event listener
tabs.value.forEach((tab) => tab.addEventListener('click', onTabClick))
})

const selectedPanel = ref("HistoryPanel")
const tabs = ref() 
const panels = ref()




function onTabClick(e) {
  // Deactivate all tabs
  tabs.value.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    )
  })
 console.log('clicked it')
  // Hide all panels
  //panels.value.forEach((panel) => panel.classList.add('hidden'))

  // Activate a new tab and panel based on the target
  e.target.classList.add('border-softRed', 'border-b-4')
  //const classString = e.target.getAttribute('data-target')
  //document
    //.getElementById('panels')
    //.getElementsByClassName(classString)[0]
    //.classList.remove('hidden')
    selectedPanel.value = e.target.getAttribute('component')
    console.log(e.target.getAttribute('component'))
}


</script>

<template>
  <!-- Features Tabs -->
  <section id="tabs">
      <!-- Tabs/Panels Container -->
      <div class="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <!-- Tabs Flex Container -->
        <div
          class="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row"
        >
          <!-- Tab 1 -->
          <div
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-1"
          >
            <div class="py-5 border-b-4 border-softRed" data-target="panel-1" component="HistoryPanel" >
              A brief History
            </div>
          </div>

          <!-- Tab 2 -->
          <div
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-2"
            
          >
            <div class="py-5" data-target="panel-2"
            component="SafetyGuidlines">Safety Guidelines</div>
          </div>

          <!-- Tab 3 -->
          <div
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-3"
            
          >
            <div class="py-5" data-target="panel-3"
            component="BBGunParts">Parts of a BB gun</div>
          </div>

          <div
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-4"
            
          >
            <div class="py-5" data-target="panel-4"
            component="TargetReview">Target Review</div>
          </div>


          <div
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-5"
            
          >
            <div class="py-5" data-target="panel-5"
            component="EquipMaint">Equipment Maintenance</div>
          </div>

          <div
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-8">
            <div class="py-5" data-target="panel-8"
            component="RangeRules">Range operating Rules</div>
          </div>

          <div
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-9">
            <div class="py-5" data-target="panel-9"
            component="RangeLayout">Outdoor Range Layout Example</div>
          </div>

          <div
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-6">
            <div class="py-5" data-target="panel-6"
            component="QuizTab">Quiz Review
          </div>

          

        </div>

        
      </div>
      <!-- Tab Panels -->
      <div id="panels" class="container mx-auto">
          <keep-alive>
            <component :is="selectedPanel" />
          </keep-alive>
        </div>
      </div>
    </section>
</template>