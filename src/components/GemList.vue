<template>
   <q-page>
      <div v-if='gemList' class='justify-center row gutter-md outer'>
         <div>
            <q-table row-key="name" dense title="Dexterity Gems" :data="greenData" :columns="greenColumns" :pagination.sync="serverPagination" hide-bottom>
               <q-tr slot="body" slot-scope="props" :props="props">
                  <q-td key="Gem" :props="props">
                     <span><router-link :to="`/Gem/${props.row.name}`">{{ props.row.name }}</router-link></span>
                  </q-td>
                  <q-td key="Str" :props="props">
                     <span v-if='props.row.Str'>
                        <q-icon color='red' class="plus material-icons">add_circle</q-icon>
                     </span>
                  </q-td>
                  <q-td key="Int" :props="props">
                     <span v-if='props.row.Int'>
                        <q-icon color='blue' class="plus material-icons">add_circle</q-icon>
                     </span>
                  </q-td>
                  <q-td key="Lvl" :props="props">
                     {{ props.row.lvl }}
                  </q-td>
               </q-tr>
            </q-table>
         </div>
         <div>
            <q-table dense title="Intellect Gems" :data="blueData" :columns="blueColumns" :pagination.sync="serverPagination" hide-bottom >
               <q-tr slot="body" slot-scope="props" :props="props">
                  <q-td key="Gem" :props="props">
                    <span><router-link :to="`/Gem/${props.row.name}`">{{ props.row.name }}</router-link></span>
                  </q-td>
                  <q-td key="Str" :props="props">
                     <span v-if='props.row.Str'>
                        <q-icon color='red' class="plus material-icons">add_circle</q-icon>
                     </span>
                  </q-td>
                  <q-td key="Dex" :props="props">
                     <span v-if='props.row.Dex'>
                        <q-icon color='green' class="plus material-icons">add_circle</q-icon>
                     </span>
                  </q-td>
                  <q-td key="Lvl" :props="props">
                     {{ props.row.lvl }}
                  </q-td>
               </q-tr>
            </q-table>
         </div>
         <div>
            <q-table dense title="Strength Gems" :data="redData" :columns="redColumns" :pagination.sync="serverPagination" hide-bottom>
               <q-tr slot="body" slot-scope="props" :props="props">
                  <q-td key="Gem" :props="props">
                    <span><router-link :to="`/Gem/${props.row.name}`">{{ props.row.name }}</router-link></span>
                  </q-td>
                  <q-td key="Int" :props="props">
                     <span v-if='props.row.Int'>
                        <q-icon color='blue' class="plus material-icons">add_circle</q-icon>
                     </span>
                  </q-td>
                  <q-td key="Dex" :props="props">
                     <span v-if='props.row.Dex'>
                        <q-icon color='green' class="plus material-icons">add_circle</q-icon>
                     </span>
                  </q-td>
                  <q-td key="Lvl" :props="props">
                     {{ props.row.lvl }}
                  </q-td>
               </q-tr>
            </q-table>
         </div>
        <div v-if='isActive'>
            <q-table dense title="Vaal Gems" :data="vaalData" :columns="vaalColumns" :pagination.sync="serverPagination" hide-bottom>
               <q-tr slot="body" slot-scope="props" :props="props">
                  <q-td key="Gem" :props="props">
                    <span><router-link :to="`/Gem/${props.row.name}`">{{ props.row.name }}</router-link></span>
                  </q-td>
                  <q-td key="Int" :props="props">
                     <span v-if='props.row.Int'>
                        <q-icon color='blue' class="plus material-icons">add_circle</q-icon>
                     </span>
                  </q-td>
                  <q-td key="Dex" :props="props">
                     <span v-if='props.row.Dex'>
                        <q-icon color='green' class="plus material-icons">add_circle</q-icon>
                     </span>
                  </q-td>
                 <q-td key="Str" :props="props">
                     <span v-if='props.row.Str'>
                        <q-icon color='red' class="plus material-icons">add_circle</q-icon>
                     </span>
                  </q-td>
                  <q-td key="Lvl" :props="props">
                     {{ props.row.lvl }}
                  </q-td>
               </q-tr>
            </q-table>
         </div>
      </div>
   </q-page>
</template>
<script>
var gemData = []
var greenColumns = [
  {
    name: 'Gem',
    label: 'Name',
    field: '_Name',
    filter: true,
    sortable: true
  },
  {
    name: 'Str',
    label: 'Str',
    field: 'Str',
    sortable: true
  },
  {
    name: 'Int',
    label: 'Int',
    field: 'Int',
    sortable: true
  },
  {
    name: 'Lvl',
    label: 'Lvl',
    field: 'lvl',
    sortable: true
  }
]
var blueColumns = [
  {
    name: 'Gem',
    label: 'Name',
    field: '_Name',
    filter: true
  },
  {
    name: 'Str',
    label: 'Str',
    field: 'Str'
  },
  {
    name: 'Dex',
    label: 'Dex',
    field: 'Dex'
  },
  {
    name: 'Lvl',
    label: 'Lvl',
    field: 'lvl'
  }
]
var redColumns = [
  {
    name: 'Gem',
    label: 'Name',
    field: '_Name',
    sortable: true
  },
  {
    name: 'Int',
    label: 'Int',
    field: 'Int',
    sortable: true
  },
  {
    name: 'Dex',
    label: 'Dex',
    field: 'Dex',
    sortable: true
  },
  {
    name: 'Lvl',
    label: 'Lvl',
    field: 'lvl',
    sortable: true
  }
]
var vaalColumns = [
  {
    name: 'Gem',
    label: 'Name',
    field: '_Name',
    filter: true,
    sortable: true
  },
  {
    name: 'Int',
    label: 'Int',
    field: 'Int',
    sortable: true
  },
  {
    name: 'Dex',
    label: 'Dex',
    field: 'Dex',
    sortable: true
  },
  {
    name: 'Str',
    label: 'Str',
    field: 'Str',
    sortable: true
  },
  {
    name: 'Lvl',
    label: 'Lvl',
    field: 'lvl',
    sortable: true
  }
]
export default {
  data () {
    return {
      name: 'ActiveSkill',
      redColumns: redColumns,
      blueColumns: blueColumns,
      greenColumns: greenColumns,
      vaalColumns: vaalColumns,
      gemData: gemData,
      serverPagination: {
        page: 1,
        rowsNumber: 60 // specifying this determines pagination is server-side
      }
    }
  },
  computed: {
    isActive () {
      return (this.$route.name === 'Gems.Active')
    }
  },
  props: [ 'gemList', 'greenData', 'redData', 'blueData', 'vaalData' ]
}
</script>
<style lang='stylus'>
  @import '~variables'
  .plus
    font-size 1.2em
  .outer
    padding 10px
  .scroll
    overflow hidden
  .q-table
    width unset
</style>
