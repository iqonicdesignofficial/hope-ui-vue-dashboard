<template>
  <b-card no-body>
    <b-card-header>
      <div class="header-title">
        <h4 class="card-title">Profile</h4>
      </div>
    </b-card-header>
    <b-card-body>
      <div class="text-center">
        <div>
          <img src="@/assets/images/avatars/01.png" alt="profile-img" class="rounded-pill avatar-130 img-fluid" loading="lazy" />
        </div>
        <div class="mt-3">
          <h3 class="d-inline-block">{{ name }}</h3>
          <p class="d-inline-block pl-3">- Web developer</p>
          <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>
    </b-card-body>
  </b-card>
  <b-card>
    <b-card-header>
      <div class="header-title">
        <h4 class="card-title">About User</h4>
      </div>
    </b-card-header>
    <b-card-body>
      <div class="user-bio">
        <p>Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer.</p>
      </div>
      <div class="mt-2">
        <h6 class="mb-1">Joined:</h6>
        <p>{{ date }}</p>
      </div>
      <div class="mt-2">
        <h6 class="mb-1">Lives:</h6>
        <p>{{ location }}</p>
      </div>
      <div class="mt-2">
        <h6 class="mb-1">Email:</h6>
        <p>
          <a href="#" class="text-body"> {{ email }}</a>
        </p>
      </div>
      <div class="mt-2">
        <h6 class="mb-1">Url:</h6>
        <p>
          <a href="#" class="text-body" target="_blank"> {{ url }} </a>
        </p>
      </div>
      <div class="mt-2">
        <h6 class="mb-1">Contact:</h6>
        <p>
          <a href="#" class="text-body">{{ number }}</a>
        </p>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  props: {
    name: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true },
    url: { type: String, required: true },
    number: { type: String, required: true }
  }
}
</script>
