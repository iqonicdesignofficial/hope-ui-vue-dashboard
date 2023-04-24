<template>
  <b-card no-body>
    <b-card-header>
      <div class="header-title">
        <h4 class="card-title">Twitter Feeds</h4>
      </div>
    </b-card-header>
    <b-card-body>
      <div v-for="(item, index) in list" :key="index">
        <div class="twit-feed">
          <div class="d-flex align-items-center mb-2">
            <img class="rounded-pill img-fluid avatar-50 me-3 p-1 bg-soft-danger ps-2" :src="item.image" loading="lazy" />
            <div class="media-support-info">
              <h6 class="mb-0">{{ item.heading }}</h6>
              <p class="mb-0">
                {{ item.subHeading }}
                <span class="text-primary">
                  <svg width="15" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </span>
              </p>
            </div>
          </div>
          <div class="media-support-body">
            <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <div class="d-flex flex-wrap">
              <a href="#" class="twit-meta-tag pe-2">{{ item.language1 }}</a>
              <a href="#" class="twit-meta-tag pe-2">{{ item.language2 }}</a>
            </div>
            <div class="twit-date">{{ item.date }}</div>
          </div>
        </div>
        <hr class="my-4" />
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    image: { type: String, default: '' },
    heading: { type: String, default: '' },
    subHeading: { type: String, default: '' },
    language1: { type: String, default: '' },
    language2: { type: String, default: '' },
    date: { type: String, default: '' }
  }
}
</script>
