<template>
  <div class="bd-example">
    <div class="flex-wrap btn-group w-100 align-items-center mt-0">
      <b-dropdown id="dropdown-1" text="Dropdown Button" size="sm" class="me-2">
        <li><h6 class="dropdown-header">Dropdown header</h6></li>
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else here</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item href="#">Separated link</b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdownMenuButton" text="Dropdown Button" class="me-2">
        <li><h6 class="dropdown-header">Dropdown header</h6></li>
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else here</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item href="#">Separated link</b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdownMenuButtonLG" size="lg" text="Dropdown Button">
        <li><h6 class="dropdown-header">Dropdown header</h6></li>
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else here</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item href="#">Separated link</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
  <div class="bd-example">
    <b-dropdown split split-variant="primary" variant="primary" text="Primary" class="me-2">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>
    <b-dropdown split split-variant="secondary" variant="secondary" text="Secondary" class="me-2">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>
    <b-dropdown split split-variant="success" variant="success" text="Success" class="me-2">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>
    <b-dropdown split split-variant="info" variant="info" text="Info" class="me-2">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>
    <b-dropdown split split-variant="warning" variant="warning" text="Warning" class="me-2 mt-2">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>
    <b-dropdown split split-variant="danger" variant="danger" text="Danger" class="me-2 mt-2">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>
  </div>
  <div class="bd-example">
    <div class="flex-wrap btn-group w-100 align-items-center mt-0">
      <b-dropdown id="dropdown-dropright" dropright text="Dropend button" class="me-2" no-caret>
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else here</b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-dropright1" dropup text="Dropup button" class="me-2">
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else here</b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-dropright2" dropleft text="Dropstart button" class="me-2">
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else here</b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-dropright2" text="End-aligned menu" class="me-2 mt-2">
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else here</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>
