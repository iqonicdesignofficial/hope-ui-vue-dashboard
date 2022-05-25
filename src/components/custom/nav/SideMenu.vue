<template>
  <li :class="navItemClass">
    <a :class="navLinkClass" aria-current="page" :href="createRoute(route.to)" @click.prevent="onClickNav" v-b-toggle="toggleId">
      <i :class="iconClass" v-if="iconClass" v-b-tooltip.hover.right="title" :title="title">
        <icon-component :type="iconType" :icon-name="icon" :size="iconSize"></icon-component>
      </i>
      <i class="sidenav-mini-icon" v-if="miniTitle !== '' && miniTitle !== null" v-b-tooltip.hover.right="title" :title="title"> {{ miniTitle }} </i>
      <span :class="titleClass">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <span v-if="staticItem" class="mini-icon">-</span>
      <i class="right-icon" v-if="caretIcon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" class="icon-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </i>
    </a>
    <slot></slot>
  </li>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  props: {
    staticItem: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Dashboard'
    },
    miniTitle: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'home'
    },
    caretIcon: {
      type: Boolean,
      default: false
    },
    iconType: {
      type: String,
      default: 'dual-tone'
    },
    iconSize: {
      type: Number,
      default: 20
    },
    toggleId: {
      type: String,
      default: ''
    },
    route: {
      type: Object,
      default: () => {
        return {
          name: 'default'
        }
      }
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const router = useRouter()

    const navItemClass = ref(['nav-item'])
    const navLinkClass = ref(['nav-link'])
    const iconClass = ref('icon')
    const titleClass = ref('item-name')

    const createRoute = (routeName) => {
      let routeHref = '/'
      try {
        const routeData = router.resolve({ name: routeName })
        if (routeData) {
          routeHref = routeData.href
        }
      } catch (e) {
        return false
      }
      return routeHref
    }

    const onClickNav = (e) => {
      if (props.route.popup !== 'false') {
        if (props.route.target === 'blank') {
          const routeData = router.resolve({ name: props.route.to })
          window.open(routeData.href, '_blank')
        } else {
          router.push({ name: props.route.to })
        }
      } else {
        context.emit('onClick', e)
      }
    }

    // Is Static
    if (props.staticItem) {
      navItemClass.value.push('static-item')
      navLinkClass.value.push('static-item disabled text-start')
      iconClass.value = false
      titleClass.value = 'default-icon'
    }
    if (props.active) {
      navItemClass.value.push('active')
      navLinkClass.value.push('active')
    }
    return {
      onClickNav,
      navItemClass,
      navLinkClass,
      iconClass,
      titleClass,
      createRoute
    }
  }
}
</script>

<style lang="scss" scoped></style>
