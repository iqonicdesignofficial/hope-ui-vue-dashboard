<template>
  <div class="card">
    <div class="card-header">
      <div class="header-title">
        <h4 class="card-title">Suggestions</h4>
      </div>
    </div>
    <div class="card-body">
      <ul class="list-inline m-0 p-0">
        <li class="d-flex mb-4 align-items-center" v-for="(item, index) in list" :key="index">
          <div class="img-fluid bg-soft-warning rounded-pill"><img :src="item.image" alt="story-img" class="rounded-pill avatar-40" loading="lazy" /></div>
          <div class="ms-3 flex-grow-1">
            <h6>{{ item.name }}</h6>
            <p class="mb-0">{{ item.mutualFriends }}</p>
          </div>
          <a href="javascript:void(0);" class="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
            <span class="btn-inner">
              <icon-component type="dual-tone" icon-name="user-add" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    image: { type: String, default: '' },
    name: { type: String, default: '' },
    mutualFriends: { type: String, default: '' }
  }
}
</script>
