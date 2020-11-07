<template>
    <div class="details">
        <Navbar></Navbar>
        <main>
            <!-- details header -->
            <section class="section-details-header"></section>

            <!-- details contents -->
            <section class="section-details-content">
                <div class="container">
                    <div class="row">
                        <div class="col p-0">
                            <nav>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item" v-if=" this.$route.params.tipe.toLowerCase() !== 'berita' ">
                                        {{ this.$route.params.id }}
                                    </li>
                                    <li class="breadcrumb-item" v-else>
                                        {{ this.$route.params.tipe }}
                                    </li>
                                    <li class="breadcrumb-item active">
                                        Details
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
                
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
export default {
    name: 'Home',
    components: {
        Footer,
        Navbar
    },
    mounted(){
        this.$store.dispatch('fetchBerita')
    },
    computed: mapState([
        'berita'
    ])
}
</script>

<style scoped lang="scss">
.section-details-header {
    min-height: 310px;
    background-color: #e4e6e8;
    margin-top: -70px;
}



.section-details-content{
    margin-top: -210px;
    min-height: 100vh;

    .breadcrumb {
        background-color: transparent;
        padding: 0;
        margin-bottom: 30px;
    }

    .breadcrumb-item {
        &.active {
            font-weight: bold;
            color: #071c4d;
        }
    }

    .card-details {
        padding: 50px;
        border-radius: 11px;

        h1 {
            font-size: 26px;
        }

        h2 {
            font-size: 20px;
        }

        p {
            font-size: 18px;
            color: #818181;
        }

        h3 {
            font-weight: 300;
            font-size: 14px;
            color: #071c4d;
        }
    }
}
</style>