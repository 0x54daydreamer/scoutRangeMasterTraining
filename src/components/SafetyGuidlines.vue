<script setup>
import { ref } from 'vue'
import { FwbAccordion } from 'flowbite-vue'
import { FwbAccordionContent } from 'flowbite-vue'
import { FwbAccordionHeader } from 'flowbite-vue'
import { FwbAccordionPanel } from 'flowbite-vue'

const sunList = ref([{ message: "Limit exposure to sun between 10 a.m. and 4 p.m. when the sun’s rays are the strongest."},
                {message: "Generously apply sunscreen with a sun protection factor (SPF) of at least 15 and reapply it every two\
hours when outdoors, even on cloudy days."},
                {message: "Wear protective, tightly woven clothing, such as a\
long- sleeved shirt and pants."},
{message: "Wear a hat with a wide, 4-inch brim and sunglasses\
with UV protective lenses."},
{message: "Stay in the shade whenever possible."},
{message: "Avoid reflective surfaces, which can reflect up to 85% of the sun’s damaging rays."}])

</script>

<template>
  
  <div
            class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-2"
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
                Safety Guidelines
              </h3>
             
<FwbAccordion>
    <FwbAccordionPanel>
      <FwbAccordionHeader>When training youth to shoot, be sure to have proper
equipment, secure and safe ranges, and clear safety
instruction.</FwbAccordionHeader>

      <FwbAccordionContent>
        <div>
            <p class="text-gray-500 dark:text-gray-400">
              Gun safety is a simple but continuous process. Youth
must first learn about safe gun handling. Safe handling
skills are developed through practice. The most import-
ant safety element is attitude. All the safety knowledge
and skills are of little value unless they are used. Being
safe means consciously keeping a BB Gun under control.
Before handling any gun, a Scout must always get
permission from their parent or guardian. If this is their
first BB Gun shooting experience, they should sit down
with an adult and discuss under what circumstances the
gun can be handled. They must understand that the BB
gun is not a toy.
          </p>
        </div>
      </FwbAccordionContent>
    </FwbAccordionPanel>
    <fwb-accordion-panel>
      <fwb-accordion-header>Before using a gun:</fwb-accordion-header>
      <fwb-accordion-content>
        <div class="text-gray-500 dark:text-gray-400">
          <ul>
            <li>Always get permission from your parent or guardian.</li>
            <li>Always have an adult present when you use a gun.</li>
            <li>Know how the gun works and how to use it.</li>  
            <li>Always be sure of your target and what is beyond the target.</li>
            <li>Always wear eye protection.</li>
            <li>Never reuse BBs.</li>
          </ul>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>These basic rules apply to handling a BB Gun under
        any circumstances:</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
            <p class="text-gray-500 dark:text-gray-400">
              <ol>
                <li>Always keep the gun pointed in a safe di-
rection. This is the primary rule of gun safety.
“Safe direction” means the gun is pointed so that
even if it were to go off, it would not cause in-
jury or damage. The key to this rule is to control
where the muzzle or front end of the barrel is
pointed at all times. Common sense dictates the
safest direction depending on circumstances.</li>
<li>Always keep your finger off the trigger until
you are ready to shoot. When holding a gun,
rest your finger along the side of the gun or the
trigger guard. Until you are actually ready to
fire, do not touch the trigger.</li>
<li>Always keep the gun unloaded until ready to
use. When you pick up a gun, carefully point it
in a safe direction. Engage the safety, if possible.
Then, while keeping your finger off the trigger,
open the action and look inside the chamber(s)
to make sure it is clear of ammunition. If the
gun has a magazine, remove it before opening
the action and make sure it is empty. If you do
not know how to open the action or inspect the
chamber(s), leave the gun alone and get help
from someone who does.</li>
<li>Know how to use a gun safely. Before han-
dling a gun, learn how it operates. Know its
basic parts and how to safely open and close the
action. Know how to remove ammunition from
the gun or magazine.</li>
<li>Be sure the gun is safe to operate. Just like
other tools, guns need regular maintenance to
remain in good working order. Regular cleaning
and proper storage are part of the gun’s general
upkeep. If there is any question about a gun’s
ability to function, then do not use it. Get some-
one to fix it!</li>
<li>Use only the correct ammunition for the gun.
Only the BB designed for a particular BB gun
can be fired safely in that gun. Do not shoot the
gun without loading the proper ammunition.</li>
<li>Wear eye protection. Always wear eye pro-
tection. Shooters and instructors should wear
approved safety goggles at all BB gun ranges.
BBs may ricochet.</li>
<li>Never use alcohol or drugs before or when
shooting. Alcohol or any other substance likely to
impair normal mental or physical function must
not be used before or while handling or shooting
guns. This may include prescription medications.</li>
<li>Most guns have a mechanism called a safety
that helps prevent the gun from accidentally
firing. However, a safety is a mechanical device,
which can and will fail. Shooters must be trained
that the safety mechanism is not a sure, safe way
to prevent a gun from firing. Many accidents
have occurred because shooters have relied on
the safety mechanism to work.</li>
<li>Although not mandatory for BB gun shoot-
ing, ear protection may also be worn. Shots
fired from guns are loud, and the noise could
damage the hearing of some shooters.</li>
<li>Know your target and what is beyond the
target. Be absolutely sure to identify the target
beyond any doubt. Equally important, be aware
of the area beyond the target. Never fire in a
direction where there are people or where any
other potential for mishap might exist. Think
first. Shoot second.</li>
<li>Store guns so they are not accessible to any
unauthorized person. Deciding where and
how to store guns and ammunition depends
on several factors and include security and
accessibility. Safe and secure storage means
untrained individuals (especially children) are
denied access to guns and ammunition.</li>
              </ol>
              
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
    <fwb-accordion-header>What Causes Gun Accidents?
Most air gun accidents are caused by ignorance and/or
carelessness.</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="text-gray-500 dark:text-gray-400">
              <ul>
                <li>Ignorance: A lack of knowledge</li>
                <li>Carelessness: A failure to use knowledge</li>
              </ul>
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
    <fwb-accordion-header>Safety Reminders
What should a Cub Scout do if they find a gun in an-
other place?</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
            <p class="text-gray-500 dark:text-gray-400">
              <ul>
              <li>STOP</li>
              <li>DON’T TOUCH!</li>
              <li>LEAVE THE AREA!</li>
              <li>TELL AN ADULT!</li>
              </ul>
              
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
    <fwb-accordion-header>Sun Safety on the Shooting Range
The American Academy of Dermatology advises the
following protection tips against damaging rays:</fwb-accordion-header>
      <fwb-accordion-content >
        <ul>
          <li v-for="item in sunList" :key="item">
        {{ item.message }}
        </li>
        </ul>
        
              
              
          
        
      </fwb-accordion-content>
    </fwb-accordion-panel>
    </FwbAccordion>














              
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