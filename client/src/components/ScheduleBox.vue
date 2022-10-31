<template>
    <div class="container my-3" v-if="upcomingSessions.length">
      <div class="container light-shade shadow rounded text-center px-3">
        <div class="row">
          <div class="col mt-1">
            <p class="lead text-dark-accent display-6"> Availability </p>
          </div>
        </div>
        <div class="row py-2 text-light-shade">
          <div class="col" v-for="(day, index) in weekdays">
            <DayCard :day="day.day" :selected="day.selected" :index="index" @selector="selector" />
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-6">
            <InputControl @submit="submit" :valid="valid" :upcomingSessions="upcomingSessions" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container my-3" v-else>
      <div class="container light-shade shadow rounded text-center px-3">
        <div class="row">
          <div class="col mt-1">
            <p class="lead text-dark-accent display-6"> Availability </p>
            <p class="lead">No Upcoming Sessions</p>
          </div>
        </div>
        
        <div class="row py-2 text-light-shade">
          <div class="col" v-for="(day, index) in weekdays">
            <DayCard :day="day.day" :selected="day.selected" :index="index" @selector="selector" />
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-6">
            <InputControl @submit="submit" :valid="valid" :upcomingSessions="upcomingSessions" />
          </div>
        </div>
      </div>
    </div> -->
  </template>
  
  <script>
  import axios from 'axios'
  import DayCard from './DayCard.vue'
  import InputControl from './InputControl.vue'
  
  export default {
    components: {
      DayCard,
      InputControl
    },
    data() {
      return {
        data: null,
        upcomingSessions: [],
        valid: true,
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
      async submit(user) {
        const postContents = {
          name: user,
          weekdays: this.weekdays
        }
        await axios.post('http://146.190.64.18:3000/api/post', postContents).then(res=> {
          console.log(res)
        }).catch(error => {
          console.log(error)
          console.log('we have an error')
        })
      },
      async getSessions() {
        await axios.get('http://146.190.64.18:3000/api/session').then(res => {
          res.data.forEach(item => {
            if(!item.finalSchedule) {
              this.upcomingSessions.push(item.weekOfDate)
            }
          })
        })
      },
      selector(payload) {
        this.weekdays[payload.index].selected = payload.selected
      }
    },
    mounted() {
      this.getSessions()
    }
  }
  </script>

  <style>
  #title {
  font-weight: thin !important;
  font-size: 4em;
}
  </style>
  