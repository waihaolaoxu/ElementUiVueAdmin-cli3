<template>
  <div id="app" :class="{'aside-folded':asideFolded}">
    <!-- <img src="./assets/logo.png"> -->
    <v-header></v-header>
    <v-menu></v-menu>

    <div class="content">
      <div class="wrapper">
        <transition mode="out-in" enter-active-class="animated fadeInDown">
          <router-view></router-view>
        </transition>
      </div>
    </div>

  </div>
</template>
<style scoped>

</style>
<script>
import {mapGetters} from 'vuex'
import header from './components/block/Header'
import menu from './components/block/Menu'
export default {
  name: 'app',
  data(){
    return {

    }
  },
  created(){
    this.$http.get('subject/subject_list.php',{}).then(function(res){
      console.log(res)
    })
  },
  components: {
    'v-header': header,
    'v-menu': menu
  },
  methods:{
    
  },
  computed: {
    ...mapGetters(['asideFolded'])
  }
}
</script>

<style lang="scss">
@import './assets/css/app.scss'
</style>
