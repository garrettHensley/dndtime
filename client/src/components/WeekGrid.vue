<template>
  <div class="row justify-content-center my-1">
    <div class="col-2 mx-1" v-for="(day, index) in availability">
      <h4
        ><span
          class="badge badge-pill"
          :class="day ? 'light-accent' : 'dark-shade'"
        >
          {{index}}
        </span></h4
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["availability"],
}
</script>
