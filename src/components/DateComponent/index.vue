<template>
  <Calendar>
    <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
    <template
      slot="dateCell"
      slot-scope="{date, data}">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1)[1] }} {{ data.isSelected ? '✔️' : ''}}
      </p>
    </template>
  </Calendar>
</template>

<script>
  import {Calendar} from 'element-ui'
  require('element-ui/lib/theme-chalk/index.css')
  export default {
    components: {
      Calendar
    },
    name: "index"
  }
</script>

<style scoped>
  .is-selected {
    color: #1989FA;
  }
</style>
