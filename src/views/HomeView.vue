<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import api from '@/api/lib/api'
import { deepCamelCaseKeys } from '@/utils/camelCase'


const test = ref({
  ddjd_ee: 'ddd'
})
const a = deepCamelCaseKeys(test.value)

const getData = async() =>{
  api.Consultant.getConsultant()
}
getData()
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
