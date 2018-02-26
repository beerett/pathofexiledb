<template>
  <div>
    <q-list highlight link>
         <q-list-header>Popular</q-list-header>
         <q-item link highlight to='/Mods/Shaper'>
            <q-item-main>
               <q-item-tile color='primary'>Shaper</q-item-tile>
            </q-item-main>
         </q-item>
         <q-item link highlight to='/Mods/Elder'>
            <q-item-main>
               <q-item-tile color='primary'>Elder</q-item-tile>
            </q-item-main>
         </q-item>
    </q-list>
  </div>
</template>
<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>

<style>
</style>
