<template>
  <div class="card border-0 shadow">
    <div class="card-body">
      <h5 class="card-title text-dark-shade">{{ day }}</h5>
      <p class="card-text text-dark-accent"
        >
        7:00pm - 12:am EST
        </p
      >
      <button
        @click="selected = !selected"
        type="button"
        class="btn"
        :class="buttonColor"
      >
        {{ text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["day", "selected", "index"],
  data() {
    return {
      text: "Unavailable",
    }
  },
  computed: {
    buttonColor() {
      this.$emit("selector", {
        selected: this.selected,
        index: this.index,
      })
      if (this.selected) {
        this.text = "Available"
        return "btn-primary"
      } else {
        this.text = "Unavailable"
        return "btn-danger"
      }
    },
  },
}
</script>

<style scoped>
.card {
  background-color: transparent;
}
</style>
