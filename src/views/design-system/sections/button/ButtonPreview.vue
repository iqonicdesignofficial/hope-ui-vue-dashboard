<template>
  <div class="bd-example">
    <b-button variant="primary">Default</b-button>{{ '' }} <b-button variant="primary" pill>Rounded</b-button>{{ '' }}
    <b-button variant="primary" pill
      >{{ '' }}
      <span class="btn-inner">
        <svg width="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </span>
      With Icon </b-button
    >{{ '' }}
    <b-button variant="icon btn-primary">
      <span class="btn-inner">
        <svg width="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </span> </b-button
    >{{ '' }}
  </div>
  <div class="bd-example"><b-button variant="primary">Primary</b-button>{{ '' }} <b-button variant="secondary">Secondary</b-button>{{ '' }} <b-button variant="success">Success</b-button>{{ '' }} <b-button variant="danger">Danger</b-button>{{ '' }} <b-button variant="warning">Warning</b-button>{{ '' }} <b-button variant="info">Info</b-button>{{ '' }} <b-button variant="light">Light</b-button>{{ '' }} <b-button variant="dark mt-2">Dark</b-button>{{ '' }} <b-button variant="link mt-2">Link</b-button> <b-button variant="gray ms-2 mt-2">Gray</b-button></div>
  <div class="bd-example"><b-button variant="outline-primary">Primary</b-button>{{ '' }} <b-button variant="outline-secondary">Secondary</b-button>{{ '' }} <b-button variant="outline-success">Success</b-button>{{ '' }} <b-button variant="outline-danger">Danger</b-button>{{ '' }} <b-button variant="outline-warning">Warning</b-button>{{ '' }} <b-button variant="outline-info">Info</b-button>{{ '' }} <b-button variant="outline-light">Light</b-button>{{ '' }} <b-button variant="outline-dark mt-2">Dark</b-button>{{ '' }} <b-button variant="outline-gray mt-2">Gray</b-button></div>
  <div class="bd-example"><b-button variant="primary btn-xs">Ex Small</b-button>{{ ' ' }} <b-button variant="primary btn-sm">Small button</b-button>{{ ' ' }} <b-button variant="primary">Default button</b-button>{{ ' ' }} <b-button variant="primary btn-lg">Large button</b-button>{{ ' ' }}</div>
  <div class="bd-example">
    <b-button variant="soft-primary">Primary</b-button>
    {{ '' }}
    <b-button variant="soft-secondary">Secondary</b-button>
    {{ '' }}
    <b-button variant="soft-success">Success</b-button>
    {{ '' }}
    <b-button variant="soft-danger">Danger</b-button>
    {{ '' }}
    <b-button variant="soft-warning">Warning</b-button>
    {{ '' }}
    <b-button variant="soft-info">Info</b-button>
    {{ '' }}
    <b-button variant="soft-light">Light</b-button>
    {{ '' }}
    <b-button variant="soft-dark mt-2">Dark</b-button>
    <b-button variant="soft-gray mt-2 ms-2">Gray</b-button>
  </div>
</template>
