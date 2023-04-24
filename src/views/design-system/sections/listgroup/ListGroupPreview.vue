<template>
  <div class="bg-example">
    <b-list-group>
      <b-list-group-item active> The current link item </b-list-group-item>
      <b-list-group-item>A second link item</b-list-group-item>
      <b-list-group-item>A third link item</b-list-group-item>
      <b-list-group-item>A fourth link item</b-list-group-item>
      <b-list-group-item disabled>A disabled link item</b-list-group-item>
    </b-list-group>
  </div>
  <div class="bd-example">
    <b-list-group>
      <b-list-group-item disabled>A disabled item</b-list-group-item>
      <b-list-group-item>A second item</b-list-group-item>
      <b-list-group-item>A third item</b-list-group-item>
      <b-list-group-item>A fourth item</b-list-group-item>
      <b-list-group-item>And a fifth one</b-list-group-item>
    </b-list-group>
  </div>
  <div class="bd-example">
    <b-list-group :flush="true">
      <b-list-group-item>An item</b-list-group-item>
      <b-list-group-item>A second item</b-list-group-item>
      <b-list-group-item>A third item</b-list-group-item>
      <b-list-group-item>A fourth item</b-list-group-item>
      <b-list-group-item>And a fifth one</b-list-group-item>
    </b-list-group>
  </div>

  <div class="bd-example">
    <b-list-group numbered>
      <b-list-group-item class="d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <b-badge variant="primary" pill>14</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <b-badge variant="primary" pill>14</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <b-badge variant="primary" pill>14</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>

  <div class="bd-example">
    <b-list-group>
      <b-list-group-item href="#">A simple default list group item</b-list-group-item>
      <b-list-group-item href="#" variant="primary">A simple primary list group item</b-list-group-item>
      <b-list-group-item href="#" variant="secondary">A simple secondary list group item</b-list-group-item>
      <b-list-group-item href="#" variant="success">A simple success list group item</b-list-group-item>
      <b-list-group-item href="#" variant="danger">A simple danger list group item</b-list-group-item>
      <b-list-group-item href="#" variant="warning">A simple warning list group item</b-list-group-item>
      <b-list-group-item href="#" variant="info">A simple info list group item</b-list-group-item>
      <b-list-group-item href="#" variant="light">A simple light list group item</b-list-group-item>
      <b-list-group-item href="#" variant="dark">A simple dark list group item</b-list-group-item>
      <b-list-group-item href="#" variant="gray ">A simple gray list group item</b-list-group-item>
    </b-list-group>
  </div>

  <div class="bd-example">
    <b-list-group>
      <b-list-group-item variant=" d-flex justify-content-between align-items-center">
        A list item
        <b-badge variant="primary" pill>14</b-badge>
      </b-list-group-item>
      <b-list-group-item variant=" d-flex justify-content-between align-items-center">
        A second list item
        <b-badge variant="primary" pill>2</b-badge>
      </b-list-group-item>
      <b-list-group-item variant=" d-flex justify-content-between align-items-center">
        A third list item
        <b-badge variant="primary" pill>1</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>

  <div class="bd-example">
    <b-list-group>
      <b-list-group-item href="#" active>
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 text-white">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </b-list-group-item>
      <b-list-group-item href="#">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Some placeholder content in a paragraph.</p>
        <small class="text-muted">And some muted small print.</small>
      </b-list-group-item>
      <b-list-group-item href="#">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Some placeholder content in a paragraph.</p>
        <small class="text-muted">And some muted small print.</small>
      </b-list-group-item>
    </b-list-group>
  </div>

  <div class="bd-example">
    <b-list-group>
      <b-list-group-item tag="label">
        <input class="form-check-input me-1" type="checkbox" value="" />
        First checkbox
      </b-list-group-item>
      <b-list-group-item tag="label">
        <input class="form-check-input me-1" type="checkbox" value="" />
        Second checkbox
      </b-list-group-item>
      <b-list-group-item tag="label">
        <input class="form-check-input me-1" type="checkbox" value="" />
        Third checkbox
      </b-list-group-item>
      <b-list-group-item tag="label">
        <input class="form-check-input me-1" type="checkbox" value="" />
        Fourth checkbox
      </b-list-group-item>
      <b-list-group-item tag="label">
        <input class="form-check-input me-1" type="checkbox" value="" />
        Fifth checkbox
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
export default {
  setup() {}
}
</script>
