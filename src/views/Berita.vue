<template>
    <div class="container">
        <div class="card shadow">
            <div class="card-body">
                {{ berita.data.data }}
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Home',
    mounted(){
        this.$store.dispatch('fetchBerita')
    },
    computed: mapState([
        'berita'
    ])
}
</script>