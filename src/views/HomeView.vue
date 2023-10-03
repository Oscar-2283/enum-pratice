<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

import { useUsersStore } from '@/stores/users'
import { useProfileSchema } from '@/verify/useZodSchema'
//post 驗證




const getData = async () => {
  const res = await useUsersStore().getUsers()
  console.log(res)
}
getData()


const profile = reactive({
  englishName: '',
  introductionVideo: ''

});
//表單驗證
const { formErrors, verifyData } = useProfileSchema(profile)

const onSubmit = () =>{
  verifyData();
  console.log(formErrors)
}

</script>

<template>
  <main>
    <form @submit.prevent="onSubmit">
      <div class=" relative ">
        <label for="videoIntroduction" class="basis-1/4">English Name</label>
        <input id="videoIntroduction" type="text" v-model="profile.introductionVideo"
          @input="verifyData('introductionVideo')" class="form-control " placeholder="Please input Local Address" />
        <span class=" text-red-500">{{ formErrors.introductionVideo }}</span>
      </div>
      <div class=" relative">
        <label for="englishName" class="basis-1/4">English Name</label>
        <input id="englishName" type="text" @input="verifyData('englishName')" v-model="profile.englishName"
          class="form-control grow" placeholder="Input text" />
        <span class=" text-red-500">{{ formErrors.englishName }}</span>
      </div>
      <button type="submit" class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white">Submit</button>
    </form>
  </main>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

form input {
  height: 55px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 15px;
  font-size: 1rem;
  padding: 0 14px;
}

form input:focus {
  outline: none;
  border-color: #1877f2;
}

::placeholder {
  color: #777;
  font-size: 1.063rem;
}
</style>