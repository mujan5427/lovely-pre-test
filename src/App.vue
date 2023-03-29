<script setup>
import List from "./components/List/index.vue";

const data = [
  {
    name: "Anna",
    year: 10,
    class: "A",
  },
  { name: "Mark", year: 10, class: "M" },
];
</script>

<template>
  <List :data="data" />
</template>
