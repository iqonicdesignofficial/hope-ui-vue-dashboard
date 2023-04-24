<template>
  <b-card>
    <b-card-header class="d-flex align-items-center justify-content-between pb-4">
      <div class="header-title">
        <div class="d-flex flex-wrap">
          <div class="media-support-user-img me-3">
            <img class="rounded-pill img-fluid avatar-60 bg-soft-danger p-1 ps-2" src="@/assets/images/avatars/02.png" alt="" loading="lazy" />
          </div>
          <div class="media-support-info mt-2">
            <h5 class="mb-0">{{ name }}</h5>
            <p class="mb-0 text-primary">colleages</p>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <span class="dropdown-toggle" id="dropdownMenuButton7" data-bs-toggle="dropdown" aria-expanded="false" role="button"> 29 mins </span>
        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton7">
          <a class="dropdown-item" href="javascript:void(0);">Action</a>
          <a class="dropdown-item" href="javascript:void(0);">Another action</a>
          <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
        </div>
      </div>
    </b-card-header>
    <b-card-body class="p-0">
      <div class="user-post">
        <a href="javascript:void(0);"><img src="@/assets/images/pages/02-page.png" alt="post-image" class="img-fluid" loading="lazy" /></a>
      </div>
      <div class="comment-area p-3">
        <div class="d-flex flex-wrap justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <div class="d-flex align-items-center me-3">
              <icon-component type="outlined" icon-name="heart" :size="20" />
              <span class="ms-1">140</span>
            </div>
            <div class="d-flex align-items-center feather-icon">
              <svg width="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
              </svg>
              <span class="ms-1">140</span>
            </div>
          </div>
          <div class="share-block d-flex align-items-center feather-icon">
            <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn">
              <span class="ms-1">
                <svg width="18" class="me-1" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z"></path>
                </svg>
                99 Share</span
              ></a
            >
          </div>
        </div>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
        <hr />
        <ul class="list-inline p-0 m-0">
          <li class="mb-2">
            <div class="d-flex">
              <img src="@/assets/images/avatars/03.png" alt="userimg" class="avatar-50 p-1 pt-2 bg-soft-primary rounded-pill img-fluid" loading="lazy" />
              <div class="ms-3">
                <h6 class="mb-1">{{ person1 }}</h6>
                <p class="mb-1">Lorem ipsum dolor sit amet</p>
                <div class="d-flex flex-wrap align-items-center mb-1">
                  <a href="javascript:void(0);" class="me-3">
                    <icon-component type="outlined" icon-name="heart" :size="20" />
                    like
                  </a>
                  <a href="javascript:void(0);" class="me-3">
                    <svg width="20" height="20" class="me-1" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8,9.8V10.7L9.7,11C12.3,11.4 14.2,12.4 15.6,13.7C13.9,13.2 12.1,12.9 10,12.9H8V14.2L5.8,12L8,9.8M10,5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9" />
                    </svg>
                    reply
                  </a>
                  <a href="javascript:void(0);" class="me-3">translate</a>
                  <span> 5 min </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="d-flex">
              <img src="@/assets/images/avatars/04.png" alt="userimg" class="avatar-50 p-1 bg-soft-danger rounded-pill img-fluid" loading="lazy" />
              <div class="ms-3">
                <h6 class="mb-1">{{ person2 }}</h6>
                <p class="mb-1">Lorem ipsum dolor sit amet</p>
                <div class="d-flex flex-wrap align-items-center">
                  <a href="javascript:void(0);" class="me-3">
                    <icon-component type="outlined" icon-name="heart" :size="20" />
                    like
                  </a>
                  <a href="javascript:void(0);" class="me-3">
                    <svg width="20" height="20" class="me-1" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8,9.8V10.7L9.7,11C12.3,11.4 14.2,12.4 15.6,13.7C13.9,13.2 12.1,12.9 10,12.9H8V14.2L5.8,12L8,9.8M10,5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9" />
                    </svg>
                    reply
                  </a>
                  <a href="javascript:void(0);" class="me-3">translate</a>
                  <span> 5 min </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
          <input type="text" class="form-control rounded" placeholder="Lovely!" />
          <div class="comment-attagement d-flex">
            <a href="javascript:void(0);" class="me-2 text-body">
              <svg class="icon-20" width="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
              </svg>
            </a>
            <a href="javascript:void(0);" class="text-body">
              <icon-component class="icon-20" type="outlined" icon-name="camera" :size="20" />
            </a>
          </div>
        </form>
      </div>
    </b-card-body>
  </b-card>
  <b-card>
    <b-card-heder class="d-flex align-items-center justify-content-between pb-4">
      <div class="header-title">
        <div class="d-flex flex-wrap">
          <div class="media-support-user-img me-3">
            <img class="rounded-pill img-fluid avatar-60 p-1 bg-soft-info" src="@/assets/images/avatars/05.png" alt="" />
          </div>
          <div class="media-support-info mt-2">
            <h5 class="mb-0">Wade Warren</h5>
            <p class="mb-0 text-primary">colleages</p>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <span class="dropdown-toggle" id="dropdownMenuButton07" data-bs-toggle="dropdown" aria-expanded="false" role="button"> 1 Hr </span>
        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton07">
          <a class="dropdown-item" href="javascript:void(0);">Action</a>
          <a class="dropdown-item" href="javascript:void(0);">Another action</a>
          <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
        </div>
      </div>
    </b-card-heder>
    <b-card-body class="p-0">
      <p class="p-3 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
      <div class="comment-area p-3">
        <hr class="mt-0" />
        <div class="d-flex flex-wrap justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <div class="d-flex align-items-center message-icon me-3">
              <svg class="icon-20" width="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
              </svg>
              <span class="ms-1">140</span>
            </div>
            <div class="d-flex align-items-center feather-icon">
              <svg class="icon-20" width="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
              </svg>
              <span class="ms-1">140</span>
            </div>
          </div>
          <div class="share-block d-flex align-items-center feather-icon">
            <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn">
              <span class="ms-1">
                <svg width="18" class="me-1 icon-18" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z"></path>
                </svg>
                99 Share
              </span>
            </a>
          </div>
        </div>
        <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
          <input type="text" class="form-control rounded" placeholder="Lovely!" />
          <div class="comment-attagement d-flex">
            <a href="javascript:void(0);" class="me-2 text-body">
              <svg class="icon-20" width="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
              </svg>
            </a>
            <a href="javascript:void(0);" class="text-body">
              <svg class="icon-20" width="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z" />
              </svg>
            </a>
          </div>
        </form>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  props: {
    name: { type: String, required: true },
    person1: { type: String, required: true },
    person2: { type: String, required: true }
  }
}
</script>
