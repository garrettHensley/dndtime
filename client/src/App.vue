<template>
  <div class="container-fluid">
    <p id="title" class="text-center mt-2">
        <span class="text-main-brand">
          dnd</span>
        <span class="text-dark-shade">ti<span class="text-main-brand">.</span>me</span>
      </p>
    <schedule-box />
    <upcoming-sessions />
  </div>
</template>

<script>
import ScheduleBox from './components/ScheduleBox.vue';
import UpcomingSessions from './components/UpcomingSessions.vue';

export default {
  components: {
    ScheduleBox,
    UpcomingSessions
  },
}
</script>

<style>
.btn-primary {
    background-color: #00B3FF !important;
    border: none !important;
}

.btn-danger {
    background-color: #f3595b !important;
    border: none !important;
}
</style>
