<template>
  <div class="bd-example">
    <b-row class="row-cols-1 row-cols-md-2 g-4">
      <b-col>
        <b-card class="mb-0" no-body>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
          </svg>
          <b-card-body>
            <b-card-title title-tag="h5" class="card-title">Card title</b-card-title>
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="mb-0 card" header="Featured" title="Card title" footer="2 days ago" header-tag="h4" title-tag="h5" footer-text-variant="text-muted">
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="mb-0" on-body title="Card title" title-tag="h5">
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
          <b-list-group flush>
            <b-list-group-item>An item</b-list-group-item>
            <b-list-group-item>A second item</b-list-group-item>
            <b-list-group-item>A third item</b-list-group-item>
          </b-list-group>
          <b-card-body>
            <a href="#" class="card-link">Card link</a>
            <b-link href="#" class="card-link">Another link</b-link>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="mb-0" no-body>
          <b-row class="g-0">
            <b-col md="4">
              <svg class="bd-placeholder-img rounded-start" width="100%" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="30%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
              </svg>
            </b-col>
            <b-col md="8">
              <b-card-body>
                <b-card-title title-tag="h5">Card title</b-card-title>
                <b-card-text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</b-card-text>
                <b-card-text><small class="text-muted">Last updated 3 mins ago</small></b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
