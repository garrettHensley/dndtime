<template>
  <div class="container border-1 shadow-lg my-2">
    <h2 class="text-main-brand text-center">{{ session.weekOfDate }}</h2>
    <!-- <button @click="test">hello</button> -->
    <template v-if="!session.finalSchedule">
      <p class="lead text-white text-center">
        <span class="badge"
          >Total Users Submitted:
          <span class="badge main-brand">{{
            session.usersSubmitted.length
          }}</span></span
        >
      </p>
      <week-grid
        v-if="!session.finalSchedule && session.usersSubmitted.length"
        v-for="grid in data"
        :availability="grid"
      />
    </template>
    <template v-else>
      <div class="row my-1">
        <div class="col">
            <h5 class="text-white">Scheduled: <span class="badge badge-pill dark-shade">{{session.finalSchedule}}</span> Week Of <span class="badge badge-pill main-brand">{{session.weekOfDate}}</span></h5>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import WeekGrid from "./WeekGrid.vue";

export default {
  components: { WeekGrid },
  props: ["session"],
  data() {
    return {
      data: null,
    };
  },
  methods: {
    test() {
      console.log(this.session);
    },
    async getAvailability() {
      await axios
        .get(
          `localhost:3000/api/availability/${this.session.weekOfDate}`
        )
        .then((res) => {
          this.data = res.data;
        });
    },
  },
  mounted() {
    this.getAvailability();
  },
};
</script>
