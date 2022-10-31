<template>
  <div class="input-group my-3 shadow-sm">
    <div class="mx-2">
      <select
        v-model="availability.weekOfDate"
        class="form-select"
        id="inputGroupSelect01"
        aria-label="Week of Date"
      >
        <option v-for="upcomingSession in upcomingSessions">{{
          upcomingSession
        }}</option>
      </select>
    </div>
    <div class="input-group-prepend">
      <span class="input-group-text border-start" id="basic-addon1">@</span>
    </div>
    <input
      type="text"
      v-model="username"
      class="form-control border-start"
      :style="validStyle"
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
    <button type="button" class="btn btn-primary" @click="validate"
      >Submit</button
    >
  </div>
</template>

<script>
export default {
  props: ["upcomingSessions"],
  data() {
    return {
      valid: true,
      username: "",
      availability: {
        username: "",
      },
    }
  },
  methods: {
    validate() {
      if (!this.username) {
        this.valid = false
      } else {
        this.submit()
      }
    },
    submit() {
      this.$emit("submit", this.username)
    },
  },
  computed: {
    validStyle() {
      if (this.valid) {
        return {
          backgroundColor: "rgba(233,236,239, .)",
        }
      } else {
        return {
          backgroundColor: "#FA9B9B",
        }
      }
    },
  },
}
</script>
