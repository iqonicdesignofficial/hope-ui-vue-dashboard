<template>
    <component :is="tag" :class="grpClass" :type="type" :name="name" :id="id" :autocomplete="autoComplete">
        <component :is="innerTag" :class="Class" :for="For">
            <slot/>
        </component>
    </component>
</template>
<script>
export default {
  name: 'groupcontent',
  props: {
    tag: { type: String, default: 'input' },
    innerTag: { type: String, default: 'label' },
    type: { type: String, default: '' },
    grpClass: { type: String, default: '' },
    Class: { type: String, default: '' },
    name: { type: String, default: '' },
    id: { type: String, default: '' },
    autoComplete: { type: String, default: '' },
    For: { type: String, default: 'off' }
  }
}
</script>
