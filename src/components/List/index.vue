<template>
  <div class="list">
    <!-- TYPE_1 -->
    <div v-if="type === 'TYPE_1'" class="list__type-1">
      <div v-for="item in data" class="list__type-1__card">
        <div>Studen: {{ item.name }}</div>
        <span>Year: {{ item.year }}</span>
        <span>, </span>
        <span>Room: {{ item.class }}</span>
      </div>
    </div>
    <!-- TYPE_1 -->

    <!-- TYPE_2 -->
    <div v-if="type === 'TYPE_2'" class="list__type-2">
      <div v-for="item in data" class="list__type-2__card">
        <div>Title: {{ item.title }}</div>
        <span>Category: {{ item.category }}</span>
        <span> | </span>
        <span>{{ item.rating }} likes</span>
      </div>
    </div>
    <!-- TYPE_2 -->

    <!-- TYPE_3 -->
    <div v-if="type === 'TYPE_3'" class="list__type-3">
      <div class="list__type-3__title">Top {{ data.length }} Winners</div>
      <div v-for="item in data" class="list__type-3__card">
        <span>{{ item.rank }}</span>
        <div class="list__type-3__division"></div>
        <span>{{ item.winner }}</span>
      </div>
    </div>
    <!-- TYPE_3 -->
  </div>
</template>

<style scoped>
.list__type-1 {
  padding: 8px;
  background-color: #efefef;
}

.list__type-1__card {
  margin: 8px;
  padding: 8px;
  background-color: white;
  color: black;
  border-radius: 8px;
}

.list__type-2 {
  padding: 8px;
  background-color: #efefef;
}

.list__type-2__card {
  margin: 8px;
  padding: 8px;
  background-color: white;
  color: black;
  border-radius: 8px;
}

.list__type-3 {
  padding: 8px;
  background-color: black;
}

.list__type-3__title {
  color: white;
  font-size: 2em;
  font-weight: 600;
}

.list__type-3__card {
  margin: 8px;
  padding: 8px;
  background-color: white;
  color: black;
  border-radius: 8px;
  display: flex;
}

.list__type-3__division {
  margin-left: 8px;
}
</style>
<script src="./index.js"></script>
