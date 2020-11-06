<template>
     <!-- footer  -->
    <section class="section-footer mt-5 mb-4 border-top">
        <div class="container pt-5 pb-5">
            <div class="row justify-content-center">
                <div class="col-12">

                    <div class="row" data-aos="fade-up-right" data-aos-delay="500">
                        <div class="col-12 d-flex align-items-start">
                            <div class="footer-logo">
                                <router-link to="/"><img src="@/assets/logo/logo-smoeray.png" width="30%" alt="logo-smoeray" class="mb-2"/></router-link>
                            </div>
                        </div>
                        <div class="col-12 d-flex justify-content-start">
                            <div class="footer-left">
                                <ul class="list-unstyled text-left">
                                    <h5>SMAN 1 JONGGOL</h5>
                                    <li>Jl. Sukasirna, Jonggol, Bogor, Jawa Barat</li>
                                    <li>021-89931158</li>
                                    <li>info@sman1jonggol.sch.id</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="maps" data-aos="fade-up" data-aos-delay="500">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.31019905367!2d107.05798665087602!3d-6.48234229528761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69bd5c767f0085%3A0xc65601c455f9ac46!2sSMA%20Negeri%201%20Jonggol!5e0!3m2!1sen!2sid!4v1597459604487!5m2!1sen!2sid" style="border:0" allowfullscreen="" width="100%" height="350" frameborder="0"></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row border-top justify-content-center align-items-center pt-4">
                <div class="col-auto text-gray-500 font-weight-light">
                    <div class="copyright-reserved">
                        <div class="col-lg-12">
                            <div class="copyright-text">
                                Copyright &copy; 1981 - {{tahun}} smoeray | made with <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            tahun: new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
    .copyright-text svg {
        color: red;
    }
</style>