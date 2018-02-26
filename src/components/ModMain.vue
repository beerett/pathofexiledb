<template>
  <div v-if='mods'>
    <div class='row'>
      <div class='col'>
      Prefix
    <ul>
      <li v-for='(mod, index) in prefixFilter' :key='index'>
      {{ mod.modname }}
      </li>
    </ul>
    </div>
      <div class='col'>
  Suffix
    <ul>
      <li v-for='(mod, index) in suffixFilter' :key='index'>
      {{ mod.modname }}
      </li>
    </ul>
  </div>
  </div>
  </div>
</template>

<script>
var slot
var mods = {}
import axios from 'axios'
export default {
  // name: 'ComponentName',
  data () {
    return {
      slot: slot,
      mods: mods
    }
  },
  watch: {
    '$route' (to, from) {
      this.slot = to.params.slot
      this.updateRoute()
    }
  },
  computed: {
    prefixFilter: function () {
      var self = this
      return this['mods'][self.slot].filter(function (mod) {
        return mod.generation_type.toLowerCase().indexOf('prefix') > -1
      })
    },
    suffixFilter: function () {
      var self = this
      return this['mods'][self.slot].filter(function (mod) {
        return mod.generation_type.toLowerCase().indexOf('suffix') > -1
      })
    }
  },
  mounted () {
    this.updateRoute()
  },
  methods: {
    async updateRoute () {
      this.slot = this.$route.params.slot
      if ((typeof this.$route.params.slot !== 'undefined') && (!this.mods.hasOwnProperty(this.slot))) {
        try {
          const response = await axios.get(`http://devtop/getMods.php?modType=` + this.slot)
          this.$set(this['mods'], this.slot, response.data)
        } catch (e) {
          console.log(e)
        }
      } else {
        console.log('already loaded')
      }
    }
  }
}
</script>

<style>
</style>
