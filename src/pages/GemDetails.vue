<template>
  <div>
    <span v-if='loaded' class='infobox-page-container'>
      <span class='item-box -gem'>
        <span class='header -single'>{{ gem.static.name }}</span>
          <span class='item-stats'>
            <span class='group'>
              <span>{{ gemProperties(0) }}</span><br />
              <em class='tc -default'>
                <span v-if='!reserved'>Mana Cost: <em class='tc -mod'>{{ manaCost() }} </em></span>
                <span v-if='reserved'>Mana Reserved: <span class='tc -value'>{{ manaCost() }} %</span></span>
              </em><br />
              <em class='tc -default'>Cast Time:  <em class='tc -value'>{{ this['gem']['static']['properties'][3]['value'] }} sec</em></em>
            </span>
            <span class='group'>
              Requires Level {{ gemComputed.level }}
            </span>
          </span>
        </span>
      </span>
    <pre>{{ this.gem }}</pre> </div>
</template>
<script>
var gem = {}
import axios from 'axios'
export default {
  name: 'GemInfo',
  data () {
    return {
      gem: gem,
      loaded: true,
      reserved: false
    }
  },
  computed: {
    gemComputed: {
    }
  },
  mounted () {
    this.getGemInfo(this.$route.params.gem, this)
  },
  methods: {
    gemProperties (set) {
      return this['gem']['static']['properties'][set]
    },
    manaCost () {
      if (typeof this['gem']['static']['properties'][3]['value'] !== 'undefined') {
        return this['gem']['static']['properties'][3]['value']
      }
      if (this['gem']['static']['properties'][2]['text'].includes('Reserved')) {
        this.reserved = true
        return this['gem']['static']['properties'][2]['value']
      } else {
        return this['gem']['per_level']['1']['properties'][2]['value'] + ' - ' + this['gem']['per_level']['1']['properties'][2]['value']
      }
    },
    buildGem () {
      //
    },
    getGemInfo (gemName, self) {
      axios.get('http://devtop/getGemInfo.php', {
        params: {
          'gem': gemName
        }
      }).then(function (response) {
        self.gem = response.data[0]
      })
    }
  }
}
</script>

<style>
</style>
