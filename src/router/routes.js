import DefaultLayout from 'layouts/default'
import GemIndex from 'pages/GemIndex'
import GemList from 'components/GemList'
import GemInfo from 'pages/GemDetails'
import ItemBasesList from 'components/ItemBasesList'
import ItemBasesSlot from 'components/ItemBasesSlot'
import Item from 'components/Item'
import ModList from 'components/ModList'
import ModMain from 'components/ModMain'
export default [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/Gems',
    component: DefaultLayout,
    children: [
      {
        path: '/Gems',
        redirect: '/Gems/ActiveSkill',
        component: GemIndex,
        children: [
          {
            path: '/Gems/ActiveSkill',
            component: GemList,
            name: 'Gems.Active'
          }
        ]
      },
      {
        path: '/Gems/SupportSkill',
        component: GemIndex,
        children: [
          {
            path: '/Gems/SupportSkill',
            component: GemList,
            name: 'Gems.Support'
          }
        ]
      }
    ]
  },
  {
    path: '/Gem/:gem',
    component: DefaultLayout,
    children: [
      {
        path: '/Gem/:gem',
        name: 'GemInfo',
        component: GemInfo
      }
    ]
  },
  {
    path: '/ItemBases',
    component: DefaultLayout,
    children: [
      {
        path: '/ItemBases',
        name: 'ItemBases',
        components: {
          left: ItemBasesList,
          default: ItemBasesSlot
        }
      }
    ]
  },
  {
    path: '/ItemBases/:slot',
    component: DefaultLayout,
    children: [
      {
        path: '/ItemBases/:slot',
        components: {
          default: ItemBasesSlot,
          left: ItemBasesList
        },
        children: [
          {
            name: 'ItemBases.Item',
            path: '/ItemBases/:slot/:item',
            components: {
              inner: Item
            }
          }
        ]
      }
    ]
  },
  {
    path: '/Mods',
    component: DefaultLayout,
    children: [
      {
        path: '/Mods',
        components: {
          default: ModMain,
          left: ModList
        }
      }
    ]
  },
  {
    path: '/Mods/:slot',
    component: DefaultLayout,
    children: [
      {
        path: '/Mods/:slot',
        components: {
          default: ModMain,
          left: ModList
        }
      }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
