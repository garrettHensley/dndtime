<template>
  <div class="container-fluid">
    <h1 class="display-1 text-center mt-2 text-main-brand">dndti.me</h1>
    <div class="container shadow dark-shade text-center">
      <div class="row">
        <div class="col">
          <p class="lead text-light-shade"> Availability </p>
        </div>
      </div>
      <div class="row py-2 text-light-shade dark-accent">
        <div class="col" v-for="(day, index) in weekdays">
          <DayCard :day="day.day" :selected="day.selected" :index="index" @selector="selector" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6">
        <InputControl @submit="submit" />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DayCard from './components/DayCard.vue'
import InputControl from './components/InputControl.vue'

export default {
  components: {
    DayCard,
    InputControl
  },
  data() {
    return {
      message: "Hi",
      data: null,
      weekdays: [
        { day: "Monday", selected: false },
        { day: "Tuesday", selected: false },
        { day: "Wednesday", selected: false },
        { day: "Thursday", selected: false },
        { day: "Friday", selected: false },
      ],
    }
  },
  methods: {
    submit(user) {
      const postContents = {
        user,
        weekdays: this.weekdays
      }
      console.log(postContents)
    },
    async getData() {
      this.data = await axios.get('http://localhost:3000/api/getAll')
      console.log(this.data)
    },
    selector(payload) {
      this.weekdays[payload.index].selected = payload.selected
    }
  },
  mounted() {
    console.log('hey kids')
    this.getData()
  }
}
</script>

<style>
.btn-primary {
    background-color: #7674E4;
    border: none;
}

.btn-danger {
    background-color: #B74B38;
    border: none;
}
</style>
