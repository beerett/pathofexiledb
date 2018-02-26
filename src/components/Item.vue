<template>
<div>c
  <q-tabs align='justify'>
  <q-route-tab
    label="Uniques for this Base"
    to="/Gems/ActiveSkill"
    exact
    slot="title"
  />
  <q-route-tab
    label="Mods"
    to="/Gems/SupportSkill"
    exact
    slot="title"
  />
    <q-route-tab
    label="Lab Enchants"
    to="/Gems/VaalSkill"
    exact
    slot="title"
  />
</q-tabs>
  <div class='iContainer' v-if='itemProp'>
    <span class='infobox-page-container'>
    <span class='item-box -normal'>
      <span class='header -single'>{{ itemInfo.name }} </span>
      <span class='item-stats'>
      <span class='group'>
        <em class='tc -default'>
          <em class='tc -default'>
            <span v-if="itemInfo.item_class === 'Body Armour'">Armour: {{ itemInfo.properties.armour }}</span>
            <span v-else>{{ itemInfo.item_class }}</span>
          </em><br />
          <span v-if='itemInfo.properties.physical_damage_min'>Physical Damage
            <em class='tc-value'>
            {{ itemInfo.properties.physical_damage_min }}
            </em>
            -
            <em class='tc-value'>
            {{ itemInfo.properties.physical_damage_max }}
            </em>
        </span>
        </em><br />
        <em class='tc -default'>
          <span v-if='itemInfo.properties.critical_strike_chance'>Critical Strike Chance:
          <em class='tc-value'>
          {{ itemInfo.properties.critical_strike_chance.toFixed(2) * .01 }}%
          </em>
        </span>
        </em>
        <br />
        <em class='tc -default'>
          <span v-if='itemInfo.properties.attack_time'>Attacks per Second:
            <em class='tc-value'>
            {{ itemInfo.properties.attack_time/1000 }}
            </em>
          </span>
        </em> <br />
        <em class='tc -default'>
          <span v-if='itemInfo.properties.range'>Weapon Range:</span>
          <em class='tc-value'>
          {{ itemInfo.properties.range }}
          </em>
        </em>
      </span>
      </span>
    </span>
    </span>
    <pre>{{ itemInfo }}</pre></div>
</div>
</template>
<script>
var item = ''
export default {
  data () {
    return {
      item: item
    }
  },
  watch: {
    '$route' (to, from) {
      this.updateRoute()
    }
  },
  props: ['itemProp'],
  computed: {
    itemInfo () {
      return this.itemProp[this.$route.params.slot][this.item]
    },
    critFixed (num) {
      let dec = num * 0.01
      return dec.toFixed(2)
    }
  },
  mounted () {
    this.updateRoute()
  },
  methods: {
    async updateRoute () {
      try {
        this.item = this.$route.params.item
      } catch (e) {
        this.errors.push(e)
      }
    }
  }
}
</script>
<style lang='stylus'>
    .iContainer
      height calc(100vh - 120px)
      overflow-y  scroll
      padding-right   7px
      padding-left    10px
</style>
