<template>
    <div class="container">
        <div class="card shadow">
            <div class="card-body">
                {{ home }}
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Home',
    mounted(){
        this.$store.dispatch('fetchHome')
    },
    computed: mapState([
        'home'
    ])
}
</script>