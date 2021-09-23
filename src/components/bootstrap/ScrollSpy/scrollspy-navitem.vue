<template>
    <component :is="tag" :class="`nav-item ${className}`">
        <slot/>
    </component>
</template>
<script>
import { ScrollSpy } from 'bootstrap'
export default {
  name: 'scrollspy-navitem',
  props: {
    tag: { type: String, default: 'li' },
    className: { type: String, default: '' }
  },
  mounted () {
    var dataSpyList = [].slice.call(document.querySelectorAll(`#${this.id} a`))
    dataSpyList.forEach(function (dataSpyEl) {
      ScrollSpy.getInstance(dataSpyEl)
        .refresh()

      dataSpyEl.addEventListener('click', function (e) {
        e.preventDefault()
        ScrollSpy.show()
      })
    })
  }
}
</script>
