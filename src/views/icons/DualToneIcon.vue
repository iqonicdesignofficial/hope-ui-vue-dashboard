<template>
  <b-row>
    <b-col cols="12">
      <b-card class="mb-4">
        <template #header>
          <div class="d-flex align-items-center justify-content-center">
            <h4 class="card-title mb-0 flex-grow-1">Dual Tone</h4>
          </div>
        </template>
        <div class="icon-grid">
          <div class="icon-box" v-for="(item, index) in iconLists" :key="index">
            <div class="overlay">
              <button class="btn btn-sm btn-soft-primary" v-b-tooltip.hover :title="iconTitle" @click="copyIcon(item.name)">{{ iconTitle }}</button>
            </div>
            <icon-component type="dual-tone" :icon-name="item.name" :size="32" />
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import { ref, computed } from 'vue'
import IconComponent from '@/components/icons/IconComponent.vue'
import ArrIcons from '@/assets/icons.json'
import { copyToClipboard } from '../../utilities/dom'
export default {
  components: {
    IconComponent
  },
  setup() {
    const search = ref('')
    const iconLists = computed(() => ArrIcons.filter((item) => item.name.toLowerCase().includes(search.value.toLowerCase())))
    const iconTitle = ref('copy')
    const copyIcon = (value) => {
      copyToClipboard(value)
    }
    return {
      iconLists,
      iconTitle,
      copyIcon
    }
  }
}
</script>
