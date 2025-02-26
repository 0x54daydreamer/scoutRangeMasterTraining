<script setup>
import QuizTime from './QuizTime.vue';





</script>

<template>
  
  <div class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-6" >
    <div class="flex flex-col space-y-8 z-10" >
      <h3 class="mt-14 text-3xl font-semibold text-center md:mt-0">Overview Quiz</h3>
      <QuizTime url="/data.json"/>
      <div class="mx-auto md:mx-0">
        <a href="#" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">Top of Page</a>
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