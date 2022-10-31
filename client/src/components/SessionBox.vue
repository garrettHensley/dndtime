<template>
    <div class="container border-1 shadow-lg my-2">
        <h2 class="text-main-brand">{{session.weekOfDate}}</h2>
        <week-grid v-for="grid in data" :availability="grid" />
    </div>
</template>

<script>
import axios from 'axios'
import WeekGrid from './WeekGrid.vue'

export default {
  components: { WeekGrid },
    props: ['session'],
    data() {
        return {
            data: null
        }
    },
    methods: {
        async getAvailability() {
            await axios.get(`http://localhost:3000/api/availability/${this.session.weekOfDate}`).then(res => {
                this.data = res.data
            })
        }
    },
    mounted() {
        this.getAvailability()
    }
}
</script>
