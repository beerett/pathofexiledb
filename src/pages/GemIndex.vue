<template>
  <q-page>
    <q-tabs align='justify' position='top'>
      <q-route-tab
        label="Active Skills"
        to="/Gems/ActiveSkill"
        exact
        slot="title"
      />
      <q-route-tab
        label="Support Gems"
        to="/Gems/SupportSkill"
        exact
        slot="title"
      />
    </q-tabs>
    <router-view :gemList='gemList' :greenData='greenData' :redData='redData' :blueData='blueData' :vaalData='vaalData'></router-view>
  </q-page>
</template>
<script>
var gemList
var greenData
var redData
var blueData
var vaalData
var gemType = ''
var errorList = []
import axios from 'axios'
export default {
  name: 'GemIndex',
  data () {
    return {
      gemType: gemType,
      gemList: gemList,
      errorList: errorList,
      redData: redData,
      greenData: greenData,
      blueData: blueData,
      vaalData: vaalData
    }
  },
  watch: {
    '$route' (to, from) {
      this.loadGems(to.name, this)
    }
  },
  mounted () {
    this.loadGems(this.$route.name, this)
  },
  methods: {
    loadGems (gem, self) {
      axios.get('http://devtop/getGems.php', {
        params: {
          'gemType': gem
        }
      }).then(function (response) {
        self.gemList = response.data
        self.greenData = response.data[1]['green']
        self.redData = response.data[2]['red']
        self.blueData = response.data[0]['blue']
        self.vaalData = response.data[3]['vaal']
      })
    }
  }
}
</script>
<style lang='stylus'>
    @import '~variables'
  .q-table
    margin  5px
  .plus
    font-size 1.2em
</style>
