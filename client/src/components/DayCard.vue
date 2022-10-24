<template>
    <div class="card text-dark-shade shadow-lg">
        <div class="card-body">
            <h5 class="card-title">{{ day }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <button @click="selected = !selected" type="button" class="btn" :class='buttonColor'>
                {{ text }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['day', 'selected', 'index'],
    data() {
        return {
            text: "Unavailable"
        }
    },
    computed: {
        buttonColor() {
            this.$emit('selector', {
                selected: this.selected,
                index: this.index
            })
            if (this.selected) {
                this.text = 'Available'
                return 'btn-primary'
            }
            else { 
                this.text = 'Unavailable'
                return 'btn-danger' 
            }
        }
    }
}
</script>