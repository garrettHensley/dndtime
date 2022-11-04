<template>
  <div class="container">
    <div class="container light-shade shadow rounded px-3">
      <div class="row">
        <div class="col mt-1">
          <p class="lead text-dark-shade display-6 text-center"> Upcoming Sessions </p>
        </div>
        <Session-box v-for="session in upcomingSessions" :session="session" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SessionBox from "./SessionBox.vue"

export default {
  components: {
    SessionBox,
  },
  data() {
    return {
      upcomingSessions: [],
    }
  },
  methods: {
    async getSessions() {
      await axios.get("localhost:3000/api/session").then((res) => {
        res.data.forEach((item) => {
          this.upcomingSessions.push(item)
        })
      })
    },
  },
  mounted() {
    this.getSessions()
  }
}
</script>
