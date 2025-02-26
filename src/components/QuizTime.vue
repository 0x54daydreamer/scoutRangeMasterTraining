<template>
    <div>
  <div v-if="introStage">
    
    <h1>Welcome to the Quiz: {{title}}</h1>
    <p>
      Some kind of text here. Blah blah.
    </p>    
    
    <button class="border-2 border-dashed" @click="startQuiz">START!</button>
  </div>
  
  <div v-if="questionStage">
    <QuestionItem 
              :question="questions[currentQuestion]"
              v-on:answer="handleAnswer"
              :question-number="currentQuestion+1"
    ></QuestionItem>
  </div>
  
  
    You got {{correct}} right out of {{questions.length}} questions. Your percentage is {{perc}}%.
  

  
</div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import QuestionItem from './QuestionItem.vue'

const props= defineProps(['url'])
  
      const introStage = ref(false)
      const questionStage = ref(false)
      const resultsStage = ref(false)
      const title = ref('')
      const questions = ref([])
      const currentQuestion = ref(0)
      const answers = ref([])
      const correct = ref(0)
      const perc = ref(null)
    
      onMounted(() => {
  
        fetch(props.url)
    .then(res => res.json())
    .then(res => {
      title.value = res.title;
      questions.value = res.questions;
      introStage.value = true;

      console.log('pulled in data')
    })
      })


  function startQuiz() {
      introStage.value = false;
      questionStage.value = true;
    }
    function handleAnswer(e) {
      console.log('answer event ftw',e);
      answers.value[currentQuestion.value]=e.answer;
      if((currentQuestion.value +1) === questions.value.length) {
        handleResults();
        questionStage.value = false;
        resultsStage.value = true;
      } else {
        currentQuestion.value++;
      }
    }
    
    function handleResults() {
      console.log('handle results');
      questions.value.forEach((a, index) => {
        if(answers.value[index] === a.answer) correct.value++;        
      });
      
      perc.value = ((correct.value / questions.value.length)*100).toFixed(2);
      console.log(correct.value+' '+ perc.value);
    }
  
</script>