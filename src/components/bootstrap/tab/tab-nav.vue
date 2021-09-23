<template>
  <component :is="tag" :class="`nav nav-${pills ? 'pills' : ''}${tabs ? 'tabs' : ''} ${vertical ? 'flex-column' : ''} ${align ? 'justify-content-'+align : ''}`+' '+extraclass " :id="id" :role="role" :aria-orientation="aria">
    <slot />
  </component>
</template>
<script>
import Tab from 'bootstrap/js/src/tab'
export default {
  name: 'tab-nav',
  props: {
    id: { type: String, default: 'myTab' },
    tag: { type: String, default: 'ul' },
    navClass: { type: String, default: '' },
    pills: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false },
    tabs: { type: Boolean, default: false },
    align: { type: String, default: '' },
    extraclass: { type: String, default: '' },
    role: { type: String, default: '' },
    aria: { type: String, default: '' }

  },
  mounted () {
    var triggerTabList = [].slice.call(document.querySelectorAll(`#${this.id} a`))
    triggerTabList.forEach(function (triggerEl) {
      var tabTrigger = new Tab(triggerEl)

      triggerEl.addEventListener('click', function (e) {
        e.preventDefault()
        tabTrigger.show()
      })
    })
  }

}
</script>
