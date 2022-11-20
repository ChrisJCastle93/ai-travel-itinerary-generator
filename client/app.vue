<template>
  <div>
    <h1>{{counter.count}}</h1>
    <v-btn @click="counter.increment">Increment</v-btn>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/store";
const counter = useCounterStore();
</script>
