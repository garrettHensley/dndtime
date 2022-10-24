<template>
  <div class="input-group my-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">@</span>
    </div>
    <input
      type="text"
      v-model="username"
      class="form-control"
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
  data() {
    return {
      valid: true,
      username: "",
    }
  },
  methods: {
    validate() {
      if (!this.username) {
        this.valid = false
      }
      else {
        this.submit()
      }
    },
    submit() {
        this.$emit('submit', this.username)
    }
  },
  computed: {
    validStyle() {
      if (this.valid) {
        return {
          backgroundColor: "white",
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
