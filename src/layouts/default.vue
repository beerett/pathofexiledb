<template>
  <q-layout view="hHh Lpr fFf">
    <q-layout-header>
      <div class='row justify-start items-center menu'>
       <img class='headerImage' src='statics/ninjalogoheader.png' />
      <span class='headerText text-thin'>POE DB</span>
        <router-link v-bind:class="isActive('/')" to='/'>Home</router-link>
         <router-link v-bind:class="isActive('/ItemBases')" to='/ItemBases'>Item Bases</router-link>
        <router-link v-bind:class="isActive('/Mods')" to='/Mods'>Mods</router-link>
         <a href=''>Uniques</a>
         <a href=''>Builds</a>
         <router-link v-bind:class="isActive('/Gems')" to='/Gems'>Gems</router-link>
         <a href=''>Flasks</a>
         <a href=''>Maps</a>
         <a href=''>Recipes</a>
       <q-icon color="white" name="home" />
       <q-icon color="white" name="search" />
       <q-icon color="white" name="fiber_new" />
       <q-icon color="white" name="build" />
    </div>
  </q-layout-header>
    <q-layout-drawer v-model="leftDrawerOpen"  content-class="bg-grey-2">
      <router-view name='left' />
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: ''
    }
  },
  watch: {
    '$route' (to, from) {
      this.pageDetection()
    }
  },
  mounted () {
    this.pageDetection()
  },
  methods: {
    openURL,
    isActive: function (route) {
      if (this.$route.fullPath === route) { return 'current' }
    },
    pageDetection () {
      if (this.$route.path.substr(0, 10) === '/ItemBases') this.leftDrawerOpen = true
      if (this.$route.path.substr(0, 5) === '/Gems') this.leftDrawerOpen = false
    }
  }
}
</script>

<style lang='stylus'>
 @import '~variables'
 @import '~assets/poe.css'
  .headerText
    font-size 2em
    margin-right 20px
  .headerImage
    width  150px
    height 62px
    padding 5px
  header .q-icon
    margin-left 10px
    font-size 24px
  header a
    line-height 70px
    border 0
    color #404040
    display inline-block
    text-decoration none
    padding: 0 15px
    transition all .2s
  header a.current
    background-color $faded
    color white
    cursor default
  header a:hover:not(.current)
    color black
    background-color $primary
  .bg-poe
    background $light
  .menu
    background $light
  .q-layout-drawer
    width 150px
</style>
