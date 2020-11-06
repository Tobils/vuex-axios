<template>
    <div class="home">
        <!-- navbar  -->
        <Navbar></Navbar>
        <!-- end navbar  -->

        <!-- header  -->
        <header class="text-center" data-aos="fade-down" data-aos-delay="1000">
            <h1>
                SMAN I JONGGOL
                <br>
            </h1>
            <h3>
                Kampus hijau berbudaya
            </h3>
            <p>
                Jl. Sukasirna, Jonggol, Bogor
            </p>
            <router-link to="/details/profile/sejarah" class="btn btn-get-started px-4 mt-4">
                Selengkapnya
            </router-link>
        </header>
        <!-- end header  -->

        <!-- berita -->
        <div class="berita">
            <!-- Berita popular  -->
            <section class="section-popular" id="popular">
                <div class="container">
                    <div class="row">
                        <div 
                        class="col text-center section-popular-heading" 
                        data-aos="fade-down"
                        data-aos-delay="1000"
                        >
                            <h2>
                                Berita Terkini 
                            </h2>
                            <p>
                                Kabar dan kegiatan di sman 1 jonggol
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Berita popular content  dibuat carousel-->
            <section class="section-popular-content">
                <div class="container">

                    <div class="section-popular-travel row justify-content-center" v-if="home">
                        <carousel  class="col" :loop="true" :nav="false" :autoplay="true" :margin="20" :autoplayTimeout="5000" :autoplayHoverPause="true" :smartSpeed="1000" :responsive="{100:{items:1},1000:{items:3}}">
                            <div class="berita-item" 
                                v-for="berita in home.data.data.berita" 
                                :key="berita.id"
                                data-aos="fade-up"
                                data-aos-delay="1000"
                                >

                                <div class="card-travel text-center d-flex flex-column">
                                    <div class="berita-image" v-if="berita.galleries.length > 0">
                                        <img :src="berita.galleries[0].photo" alt="">
                                    </div>
                                    <div v-else></div>
                                    <div class="travel-country text-lowercase">
                                        {{ berita.judul }} 
                                    </div>
                                    <div class="travel-button mt-auto">
                                        <router-link :to="'/details/berita/'+berita.id" class="btn btn-travel-details px-4">
                                            Lihat
                                        </router-link>
                                    </div>
                                </div>

                            </div>
                        </carousel>

                    </div>
                    
                    <div class="row">
                        <div class="col mt-3 text-center">
                            <router-link :to="'/details/berita/all'" class="btn btn-get-started px-2 mx-1">
                                Selengkapnya
                            </router-link>
                        </div>
                    </div>
                </div>
            </section>
        </div>        
        <!-- end berita  -->

        <!-- kampus alumni -->
        <section class="section-kampus-alumni">
            <div class="container">
                <div class="row">
                    
                    <div 
                        class="col-md-4 text-left"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                    >
                        <h2>
                            Studi Alumni
                        </h2>
                        <p>
                            Lulusan sman 1 Jonggol
                            melanjutkan studi di kampus-kampus terbaik di Indonesia dan di luar negeri.  
                        </p>
                    </div>

                    <div class="col-md-8 text-center justify-content-center" v-if="home">
                        <carousel :loop="true" :autoplay="true" :nav="false" :dots="false" :autoplayTimeout="2000" :responsive="{0:{items:3},600:{items:3}, 1000:{items:5}}">
                            <div v-for="kampus in home.data.data.kampus" :key="kampus.id" data-aos="fade-left" data-aos-delay="1000">
                                <img v-bind:src="kampus.photo" :alt="'logo' + kampus.name" class="logo-partner justify-content-center">
                            </div>
                        </carousel>
                    </div>

                </div>
            </div>
        </section>
        <!-- end kampus alumni  -->

        <!-- testimoni alumni  -->
        <div class="testimoni-alumni">
            <!-- Testimonial section  heading -->
            <section class="section-testimonial-heading" id="testimonialHeading">
                <div class="container">
                    <div class="row">
                        <div 
                            class="col text-center"
                            data-aos="fade-down"
                            data-aos-delay="1000"
                        >
                            <h2>Apa Kata Alumni ?</h2>
                            <p>
                                Moments were giving them
                                <br>
                                the best experience
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonial section content  dibuat carousel-->
            <section class="section section-testimonial-content" id="testimonialContent">
                <div class="container">

                    <div class="row justify-content-center" v-if="home">
                        <carousel class="alumni-carousel col" :margin="40" :loop="true" :nav="false" :autoplay="true" :autoplayTimeout="2000" :autoplayHoverPause="true" :smartSpeed="1000" :dots="false" :responsive="{0:{items:1},600:{items:3}, 1000:{items:3}}">
                            <div class="alumni-item" v-for="alumni in home.data.data.alumni" :key="alumni.id" data-aos="fade-up" data-aos-delay="1000">
                                <div class="card card-testimonial text-center">
                                    <div class="testimonial-content">
                                        <img :src="alumni.photo" alt="" class="mb-4 rounded-circle ml-auto mr-auto">
                                        <h3 class="mb-4">
                                            {{ alumni.name }}
                                        </h3>
                                        <p class="testimonial" v-html="alumni.testimoni"></p>
                                    </div>
                                    <hr>
                                    <p class="trip-to mt-2">
                                        {{ alumni.kampus_alumni.name }}
                                    </p>
                                </div>
                            </div>
                        </carousel>
                    </div>
                        

                    <div class="row">
                        <div class="col-12 text-center">
                            <router-link to="/details/kontak/alumni" class="btn btn-get-started px-4 mt-4 mx-1">
                                Selengkapnya
                            </router-link>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
        <!-- end testimoni alumni  -->


        <!-- profile guru  -->
        <div class="data-guru">
            <section class="section-guru-heading" id="guru">
                <div class="container">
                    <div class="row">
                        <div class="col text-center"
                            data-aos="fade-down"
                            data-aos-delay="1000"
                        >
                            <h2>
                                Meet Our Talented Teacher
                            </h2>
                            <p>
                                Guru-guru terbaik sman 1 jonggol.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-guru-content" id="testimonialContent">
                <div class="container">

                    <div class="row justify-content-center" v-if="home">
                        <carousel class="guru-carousel col" :margin="40" :loop="true" :nav="false" :autoplay="true" :autoplayTimeout="2000" :autoplayHoverPause="true" :smartSpeed="1000" :dots="false" :responsive="{0:{items:1},600:{items:3}, 1000:{items:3}}">
                            <div class="guru-item" v-for="guru in home.data.data.guru" :key="guru.id" data-aos="fade-up" data-aos-delay="1000">
                                <div class="card card-guru text-center">
                                    <div class="guru-content">
                                        <img :src="guru.photo" alt="" class="mb-4 rounded-circle ml-auto mr-auto">
                                        <h3 class="mb-4">
                                            {{ guru.name }}
                                        </h3>
                                    </div>
                                    <hr>
                                    <p class="trip-to mt-2">
                                        {{ guru.subject }}
                                    </p>
                                </div>
                            </div>
                        </carousel>
                    </div>
                        

                    <div class="row">
                        <div class="col-12 text-center">
                            <router-link to="/details/kontak/alumni" class="btn btn-get-started px-4 mt-4 mx-1">
                                Selengkapnya
                            </router-link>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
        <!-- end profile guru  -->

        <!-- footer -->
        <Footer></Footer>
        <!-- end footer  -->
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import {mapState} from 'vuex'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default {
    name: 'Home',
    components: {
        Footer,
        Navbar,
        carousel
    },
    mounted(){
        this.$store.dispatch('fetchHome')
    },
    computed: mapState([
        'home'
    ])
}
</script>


<style lang="scss">
// header
header {
    padding: 180px 0 160px;
    h1, p {
        color: #071c4d;
    }

    h1 {
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 50px;
    }

    p {
        font-size: 22px;
    }

    .btn-get-started {
        background-color: #F27A30;
        color: #ffffff;

        &:hover {
            background-color: #E26D26;
            color: #ffffff;
        }
    }
}


// berita 
.section-popular {
    min-height: 540px;
    margin-top: -50px;
    margin-bottom: -230px;
    background-color: #081B40;

    .section-popular-heading {
        margin-top: 150px;

        h2, p {
            color: #ffffff;
        }

        h2 {
            font-family: 'Playfair', serif;
            font-weight: bold;
            font-size: 40px;
        }

        p {
            font-size: 18px;
        }
    }
}

.section-popular-content{
    .section-popular-travel {
        .berita-item {
            .card-travel {
                min-height: 380px;
                background-color: #081B40;
                color: #081B40;
                background-size: cover;
                margin-bottom: 5px;
                border-radius: 10px;
            }

            .travel-country {
                margin-top: 20px;
                font-size: 18px;
                color: #ffffff;
            }

            .travel-location {
                font-size: 26px;
                color: #ffffff;
            }

            .travel-button {
                margin-bottom: 20px;
                .btn-travel-details {
                    background-color: #E26D26;
                    color: #ffffff;

                    &:hover {
                        background-color: #F27A30;
                        color: #ffffff;
                    }
                }
            }

        }

    }

    .btn-get-started {
        background-color: #F27A30;
        color: #ffffff;

        &:hover {
            background-color: #E26D26;
            color: #ffffff;
        }
    }
}
// end berita 

// kampus alumni 
.section-kampus-alumni {
    background-color: #ffffff;
    margin-top: -170px;
    padding-top: 240px;
    padding-bottom: 50px;

    h2 {
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 40px;
    }

    p {
        font-size: 18px;
    }

    .logo-partner {
        padding: 0;
        margin-top: 30px;
    }

    .logo-partner {
        width: 70% !important;
    }
}
// end kampus alumni 

// testimoni alumni 
.section-testimonial-heading,
.section-guru-heading {
    background: linear-gradient(#fff 0%, #f7f9ff 100%);
    padding-top: 50px;
    min-height: 506px;

    h2 {
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 40px;
    }

    p {
        font-size: 18px;
    }
}

.section-testimonial-content {
    margin-top: -300px;
    padding-bottom: 50px;


    .card-testimonial {
        padding: 40px 20px 10px;
        border-radius: 11px;
        margin-bottom: 20px;
        max-height: 910px;
    }

    .testimonial-content {
        min-height: 380px;

        img {
            border-radius: 50%;
            max-width: 150px !important;
        }
    }

    h3 {
        font-size: 22px;
    }

    .testimonial {
        font-weight: 200;
        font-size: 26px;
        color: #6e6e6e;
        min-height: 140px;
    }

    .trip-to {
        font-weight: normal;
        font-size: 22px;
        color: #6e6e6e;
    }

    hr {
        margin-left: -20px;
        margin-right: -20px;
    }

    .btn-get-started {
        background-color: #F27A30;
        color: #ffffff;

        &:hover {
            background-color: #E26D26;
            color: #ffffff;
        }
    }

    .btn-need-help {
        background-color: #f2f2f2;
        color: #c3c3c3;

        &:hover {
            background-color: #fafafa;
            color: #c3c3c3;
        }
    }
}
// end testimoni alumni 

.section-guru-content {
    margin-top: -300px;
    padding-bottom: 50px;


    .card-guru {
        padding: 40px 20px 10px;
        border-radius: 11px;
        margin-bottom: 20px;
        min-height: 140px;
    }

    .guru-content {
        // min-height: 380px;

        img {
            border-radius: 50%;
            max-width: 150px !important;
        }
    }

    h3 {
        font-size: 22px;
    }

    .testimonial {
        font-weight: 200;
        font-size: 26px;
        color: #6e6e6e;
        max-height: 140px;
    }

    .trip-to {
        font-weight: normal;
        font-size: 22px;
        color: #6e6e6e;
    }

    hr {
        margin-left: -20px;
        margin-right: -20px;
    }

    .btn-get-started {
        background-color: #F27A30;
        color: #ffffff;

        &:hover {
            background-color: #E26D26;
            color: #ffffff;
        }
    }

    .btn-need-help {
        background-color: #f2f2f2;
        color: #c3c3c3;

        &:hover {
            background-color: #fafafa;
            color: #c3c3c3;
        }
    }
}

// profile guru 

// end profile guru 


</style>