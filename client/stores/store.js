import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {

  // eslint-disable-next-line no-undef
  const count = ref(0);

  function increment() {
    count.value++;
  }

  return { count, increment };
 
});

export const useUserStore = defineStore("user", () => {
  // eslint-disable-next-line no-undef
  const user = ref('USERTEST');
  return { user };
});
