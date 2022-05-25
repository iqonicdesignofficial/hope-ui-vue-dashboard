<template>
  <b-row>
    <b-col cols="12">
      <b-card class="mb-4">
        <template #header>
          <h4 class="card-title mb-0">Outlined</h4>
        </template>
        <div class="icon-grid">
          <div class="icon-box" v-for="(item, index) in iconLists" :key="index">
            <div class="overlay">
              <button class="btn btn-sm btn-soft-primary" v-b-tooltip.hover :title="iconTitle" @click="copyIcon(item.name)">{{ iconTitle }}</button>
            </div>
            <icon-component type="outlined" :icon-name="item.name" :size="32" />
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import { ref } from 'vue'
import ArrIcons from '@/assets/icons.json'
import { copyToClipboard } from '../../utilities/dom'
export default {
  components: {},
  setup() {
    const iconLists = ref(ArrIcons)
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
