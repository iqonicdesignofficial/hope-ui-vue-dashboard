<template>
  <div class="bd-example">
    <b-breadcrumb>
      <b-breadcrumb-item active>Home</b-breadcrumb-item>
    </b-breadcrumb>
    <b-breadcrumb>
      <b-breadcrumb-item href="#home" text="Home"></b-breadcrumb-item>
      <b-breadcrumb-item active>Library</b-breadcrumb-item>
    </b-breadcrumb>
    <b-breadcrumb>
      <b-breadcrumb-item href="#home" text="Home"></b-breadcrumb-item>
      <b-breadcrumb-item href="#libary" text="Library">Library</b-breadcrumb-item>
      <b-breadcrumb-item active>Data</b-breadcrumb-item>
    </b-breadcrumb>
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg + xml, %3Csvgxmlns='http://www.w3.org/2000/svg'width='8'height='8'%3E%3Cpathd='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z'fill='currentColor'/%3E%3C/svg%3E&#34;)" aria-label="breadcrumb">
      <ol class="mb-0 breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
  </div>
</template>
