import { createApp } from 'vue'
import App from './App.vue'

import HistoryPanel from './components/HistoryPanel.vue';
import BBGunParts from './components/BBGunParts.vue';
import SafetyGuidlines from './components/SafetyGuidlines.vue';
import TargetReview from './components/TargetReview.vue'
import EquipMaint from './components/EquipMaint.vue';
import RangeRules from './components/RangeRules.vue';
import QuestionItem from './components/QuestionItem.vue';
import QuizTime
from './components/QuizTime.vue';
import QuizTab from './components/QuizTab.vue';
import RangeLayout from './components/RangeLayout.vue';
const app = createApp(App)
app.component('QuestionItem', QuestionItem)
app.component('RangeLayout', RangeLayout)
app.component('RangeRules', RangeRules)
app.component('QuizTab', QuizTab)
app.component('QuizTime', QuizTime)
app.component('EquipMaint', EquipMaint)
app.component('HistoryPanel', HistoryPanel)
app.component('TargetReview', TargetReview)
app.component('SafetyGuidlines', SafetyGuidlines)
app.component('BBGunParts', BBGunParts)
app.mount('#app')