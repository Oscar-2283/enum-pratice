import { defineStore } from 'pinia'
import api from '@/api/lib/api'
import { deepCamelCaseKeys } from '@/utils/camelCase'
import { parseUsersData } from '@/model/users/users'

export const useUsersStore = defineStore('UsersStore', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const getUsers = async () =>{
    const result = await api.Users.getUsers()
    const parseResult = parseUsersData(deepCamelCaseKeys(result.data))
    return parseResult
  }
  return { count, getUsers, increment }
})
