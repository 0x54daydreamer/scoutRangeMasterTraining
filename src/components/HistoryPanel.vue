<script setup>
import { onMounted } from 'vue'

// lifecycle hooks
onMounted(() => {
  
})

import { FwbAccordion } from 'flowbite-vue'
import { FwbAccordionContent } from 'flowbite-vue'
import { FwbAccordionHeader } from 'flowbite-vue'
import { FwbAccordionPanel } from 'flowbite-vue'


</script>

<template>
  <div
            class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1"
          >
            <!-- Panel Image -->
            <div class="flex justify-center md:w-1/2">
              <img
                src="/henryiv.jpeg"
                alt=""
                class="relative z-10"
              />
            </div>
            <!-- Panel Content -->
            <div class="flex flex-col space-y-8 md:w-1/2">
              <h3
                class="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left"
              >
                A brief history.
              </h3>
              
              <div class="container mx-auto px-6 mb-32">
        
      
      </div> 
                
<FwbAccordion>
    <fwb-accordion-panel>
      <fwb-accordion-header>In ancient history, blowguns began to appear in many
        different parts of the world.</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
            <p class="text-gray-500 dark:text-gray-400">
            Although crude, these
primitive devices were very accurate. They were made
from bamboo or other hollowed-out woods

A blowgun is a tube into which a hunter blows to shoot
a projectile out the other end. This idea was transferred
into gun form somewhere in the 1500s. The bellows
gun, invented around 1580, is the earliest known
air-powered gun.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>A few decades later, the first pneumatic (pump-up) air
        gun was created in France for King Henry IV.</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          
          <p class="text-gray-500 dark:text-gray-400">
            The no-
bility usually owned these early guns, since they were
too expensive for commoners.
In the late 1700s, some units of the Austrian army were
equipped with air rifles.
In America, records show that in the 1800s, Lewis and
Clark had an air gun for hunting and impressing the
native Americans. The native Americans called it “the
smokeless thunder stick.”
In 1885, in the United States, the Markham Air Rifle
Company became one of the first companies to sell BB
guns. These pneumatic rifles eliminated bullets and
used a small pellet the size of a ball bearing, soon to be
called a “BB.”
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>A few years later, a company that sold steel windmills
        decided to also sell BB rifles.</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          
          <p class="text-gray-500 dark:text-gray-400">
            By 1895, this company
had stopped producing windmills and made air rifles
full-time and changed the company name to Daisy.
Daisy’s guns were mostly made of steel, which im-
proved the gun’s strength and design. The Daisy air
rifle became popular very quickly, and within five years
Daisy had sold 250,000 BB guns. Soon, Daisy bought
out all of its competition.
Daisy also promoted to youth by making special BB
guns that related with popular historical characters like
Davy Crockett.
In 1984, the Olympic Games featured air guns for the
first time.
Today, BB guns are still being produced in both rifle and
pistol forms and are very popular among all age groups.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </FwbAccordion>


              <div class="mx-auto md:mx-0">
                <a
                  href="#" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">Top of Page</a    >              </div>
            </div>
          </div>

</template>