<template>
    <div class="details">
        <Navbar></Navbar>
        <main>
            <!-- details header -->
            <section class="section-details-header"></section>

            <!-- details contents -->
            <section class="section-details-content">
                <div class="container">

                    <!-- header breadcrumb -->
                    <div class="row">
                        <div class="col p-0">
                            <nav>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item" v-if=" this.$route.params.tipe.toLowerCase() !== 'berita' ">
                                        {{ this.$route.params.id }}
                                    </li>
                                    <li class="breadcrumb-item" v-else @click="$router.go(-1)">
                                        {{ this.$route.params.tipe }}
                                    </li>
                                    <li class="breadcrumb-item active">
                                        Details
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <!-- end header breadcrumb -->

                <!-- details content -->

                    <!-- berita-all -->
                    <div class="row" v-if=" this.$route.params.tipe.toLowerCase() == 'berita' && this.$route.params.id.toLowerCase() == 'all'">
                        <div class="col-lg-12 pl-lg-0">
                            <div class="card card-details">
                                <div class="d-flex flex-row align-content-stretch flex-wrap">

                                    <div class="container">
                                        <div class="card-columns">
                                            <div class="card" v-for="berita in berita" v-bind:key="berita.key">
                                                <div  v-if="berita.galleries.length > 0">
                                                    <img class="card-img-top" :src="berita.galleries[0].photo" alt="Card image cap">
                                                </div>
                                            <div class="card-body">
                                                <!-- <p class="card-text"><small class="text-muted">{{ berita.tipe }} </small></p> -->
                                                <router-link :to="'/details/berita/'+berita.id">
                                                    <h5 class="card-title">{{ berita.judul.toUpperCase() }}</h5>
                                                </router-link>
                                                <p class="card-text"><small class="text-muted">{{ berita.created_at.slice(0,10) }}</small></p>
                                            </div>
                                            </div>        
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end berita all -->

                    <!-- berita details -->
                    <div class="row" v-else-if=" this.$route.params.tipe.toLowerCase() == 'berita' && this.$route.params.id.toLowerCase() != 'all'">
                        <div class="col-lg-12 pl-lg-0">
                            <div class="card card-details">
                                <h5 class="card-title">{{ details_berita[0].judul.toUpperCase() }}</h5>
                                <div class="gallery" v-if="details_berita[0].galleries.length > 0">
                                    <img :src="details_berita[0].galleries[0].photo" alt="Card image cap" class="img-fluid">
                                </div>
                                <p class="card-text"><small class="text-muted">{{ details_berita[0].created_at.slice(0,10) }}</small></p>
                                <p class="card-text text-justify" v-html="details_berita[0].deskripsi"></p>
                            </div>
                        </div>
                    </div>
                    <!-- end berita details  -->

                    <!-- kontak {GURU|TATA USAHA|ALUMNI} -->
                    <div class="row" v-else-if="this.$route.params.tipe.toLowerCase() == 'kontak'">
                        <div class="col-lg-12 pl-lg-0">
                            <div class="card card-details">

                                <!-- data guru -->
                                <div class="d-flex flex-row align-content-stretch flex-wrap" v-if="this.$route.params.id.toLowerCase() == 'guru'">
                                    <div class="card shadow  mx-2 my-2" style="width: 18rem;" v-for="kontak in guru" :key="kontak.id">
                                        <img :src="kontak.photo" alt="photo" width="100px" class="rounded-circle  ml-auto mr-auto mt-3">
                                        <div class="card-body">
                                            <p class="text-center text-primary">{{ kontak.name }}</p>
                                            <hr>
                                            <p class="text-center" v-if="kontak.subject !== undefined">
                                                {{ kontak.subject }}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- data tata usaha -->
                                <div class="d-flex flex-row align-content-stretch flex-wrap" v-if="this.$route.params.id.toLowerCase() == 'tata_usaha'">
                                    <div class="card shadow  mx-2 my-2" style="width: 18rem;" v-for="kontak in tata_usaha" :key="kontak.id">
                                        <img :src="kontak.photo" alt="photo" width="100px" class="rounded-circle  ml-auto mr-auto mt-3">
                                        <div class="card-body">
                                            <p class="text-center text-primary">{{ kontak.name }}</p>
                                            <hr>
                                        </div>
                                    </div>
                                </div>

                                <!-- data alumni -->
                                <div class="d-flex flex-row align-content-stretch flex-wrap" v-if="this.$route.params.id.toLowerCase() == 'alumni'">
                                    <div class="card shadow  mx-2 my-2" style="width: 18rem;" v-for="kontak in alumni" :key="kontak.id">
                                        <img :src="kontak.photo" alt="photo" width="100px" class="rounded-circle  ml-auto mr-auto mt-3">
                                        <div class="card-body">
                                            <p class="text-center text-primary">{{ kontak.name }}</p>
                                            <hr>
                                            <p class="text-center">
                                                {{ kontak.kampus_alumni.name }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end kontak {GURU|TATA USAHA|ALUMNI} -->

                    <!-- details profile {sejarah|ekskul} -->
                    <div class="row" v-else-if="this.$route.params.tipe.toLowerCase() == 'profile'">
                        <div class="col-lg-12 pl-lg-0">
                            <div class="card card-details">
                                <h1 class="text-capitalize mb-2">
                                    {{ profile[0].judul }}
                                </h1>
                                <div class="gallery"></div>
                                <p class="text-justify" v-html="profile[0].deskripsi"></p>
                            </div>
                        </div>
                    </div>
                    <!-- end details profile {sejarah|ekskul} -->

                <!-- end details contents -->


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
    methods: {
        fetchData(id, tipe){
            switch(tipe){
                case 'berita':
                    if(id == 'all')
                    {
                        this.$store.dispatch('fetchBerita')
                    } 
                    else {
                        this.$store.dispatch('fetchDetailsBerita', {id})
                    }
                    break;
                case 'kontak':
                    this.$store.dispatch('fetchDetailsKontak', {id, tipe})
                    break;
                case 'profile':
                    this.$store.dispatch('fetchDetailsProfile', {id, tipe})
                    break;
            }
        }
    },
    mounted(){
        // this.$store.dispatch('fetchBerita')
    },
    created(){
        let id = this.$route.params.id
        let tipe = this.$route.params.tipe
        this.fetchData(id, tipe)
    },
    watch:{
        $route(to){
            this.fetchData(to.params.id, to.params.tipe)
        }
    },
    computed: mapState([
        'berita', 'details_berita', 'guru', 'tata_usaha', 'alumni', 'profile'
    ])
}
</script>

<style scoped lang="scss">
/*
 * Card Columns Masonry - Bootstrap 4
 * https://codepen.io/JacobLett/pen/oZmWdd
 */
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {  
  .card-columns {column-count: 3;}
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
 .card-columns {column-count: 3;}
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
   .card-columns {column-count: 3;} 
}

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
        margin-left: 10px;
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