<template>
<div>
  <strong>QuestionItem {{ questionNumber }}:</strong><br/>
  <strong>{{ question.text }} </strong>

  <div v-if="question.type === 'tf'">
    <input type="radio" name="currentQuestion" id="trueAnswer" v-model="answer" value="t"><label for="trueAnswer">True</label><br/>
    <input type="radio" name="currentQuestion" id="falseAnswer" v-model="answer" value="f"><label for="falseAnswer">False</label><br/>
  </div>

  <div v-if="question.type === 'mc'">
    <div v-for="(mcanswer,index) in question.answers" :key="mcanswer">
    <input type="radio" :id="'answer'+index" name="currentQuestion" v-model="answer" :value="mcanswer"><label :for="'answer'+index">{{mcanswer}}</label><br/>
    </div>
  </div>

  <button class="border-2 border-dashed" @click="submitAnswer">Answer</button>
</div></template>

<script setup>
import { ref} from 'vue'

const answer = ref('')
//  data() {
 //    return {
  //     answer:''
   //  }
  //},
  defineProps( ['question','question-number']) 
  const emit = defineEmits(['anser'])


  function submitAnswer() {
      emit('answer', {answer:answer.value});
      answer.value = null;
    }
  
</script>