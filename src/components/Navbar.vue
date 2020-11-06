<template>
  <div class="navbar-main">
    <!-- nav bar  -->
    <div class="container">
       
        <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-brand :to="'/'" class="logo-smoeray">
                <img src="@/assets/logo/logo-smoeray.png" alt="logo smoeray" class="ml-auto mr-auto">
                <!-- <h4>SMAN 1 JONGGOL</h4> -->
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="'/details/berita/all'">Berita Terkini</b-nav-item>

                    <b-nav-item-dropdown text="Staff" right>
                        <b-dropdown-item :to="'/details/kontak/guru'">
                            Guru
                        </b-dropdown-item>
                        
                        <b-dropdown-item :to="'/details/kontak/tata_usaha'">
                            Tata Usaha
                        </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown text="Ekskull" right>
                        <b-dropdown-item :to="'/details/profile/ekskul'">OSIS</b-dropdown-item>
                        <b-dropdown-item href="#">PRAMUKA</b-dropdown-item>
                        <b-dropdown-item href="#">PMR</b-dropdown-item>
                        <b-dropdown-item href="#">KARATE</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item :to="'/details/kontak/alumni'">Alumni</b-nav-item>
                    <b-nav-item href="http://ppdb.sman1jonggol.sch.id" target="_blank">PPDB</b-nav-item>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>

    <!-- agar router view berfungsi -->
    <router-view/>


  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.logo-smoeray {
    img {
        max-height: 40px;
    }
    
    h4 {
        padding: 0;
    }
}

</style>
