<template>
  <div class="bd-example">
    <b-progress :max="0" class="mb-3">
      <b-progress-bar :value="2" label="0%"></b-progress-bar>
    </b-progress>
    <b-progress :max="100" class="mb-3">
      <b-progress-bar :value="25" variant="success" label="25%"></b-progress-bar>
    </b-progress>
    <b-progress :max="100" class="mb-3">
      <b-progress-bar :value="50" variant="info text-dark" label="50%"></b-progress-bar>
    </b-progress>
    <b-progress :max="100" class="mb-3">
      <b-progress-bar :value="75" variant="warning text-dark" label="75%"></b-progress-bar>
    </b-progress>
    <b-progress :max="100" class="mb-3">
      <b-progress-bar :value="100" variant="danger text-dark" label="100%"></b-progress-bar>
    </b-progress>
  </div>
  <div class="bd-example">
    <div class="wrapper-progress">
      <div class="percentage-progress d-flex justify-content-end">
        <div><span>40%</span></div>
      </div>
    </div>
    <b-progress striped :value="40" variant="danger" height="10px"></b-progress>
    <div class="mt-4 wrapper-progress">
      <div class="percentage-progress d-flex justify-content-end">
        <div><span>40%</span></div>
      </div>
    </div>
    <b-progress striped :value="40" variant="primary" height="10px"></b-progress>
    <div class="mt-4 wrapper-progress">
      <div class="percentage-progress d-flex justify-content-end">
        <div><span>40%</span></div>
      </div>
    </div>
    <b-progress striped :value="40" variant="success" height="10px"></b-progress>
  </div>
  <div class="bd-example">
    <b-progress>
      <b-progress-bar :value="15" variant="primary" striped animated />
      <b-progress-bar :value="40" variant="success" striped animated />
    </b-progress>
  </div>
</template>
