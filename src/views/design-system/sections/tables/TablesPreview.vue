<template>
  <div class="bd-example">
    <b-table-simple responsive striped>
      <b-thead>
        <b-tr>
          <b-th scope="col">#</b-th>
          <b-th scope="col">First</b-th>
          <b-th scope="col">Last</b-th>
          <b-th scope="col">Handle</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr>
          <b-th scope="row">1</b-th>
          <b-td>Mark</b-td>
          <b-td>Otto</b-td>
          <b-td>@mdo</b-td>
        </b-tr>
        <b-tr>
          <b-th scope="row">2</b-th>
          <b-td>Jacob</b-td>
          <b-td>Thornton</b-td>
          <b-td>@fat</b-td>
        </b-tr>
        <b-tr>
          <b-th scope="row">3</b-th>
          <b-td colspan="2">Larry the Bird</b-td>
          <b-td>@twitter</b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
  </div>
  <div class="bd-example">
    <b-table-simple responsive dark borderless>
      <b-thead>
        <b-tr>
          <b-th scope="col">#</b-th>
          <b-th scope="col">First</b-th>
          <b-th scope="col">Last</b-th>
          <b-th scope="col">Handle</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr>
          <b-th scope="row">1</b-th>
          <b-td>Mark</b-td>
          <b-td>Otto</b-td>
          <b-td>@mdo</b-td>
        </b-tr>
        <b-tr>
          <b-th scope="row">2</b-th>
          <b-td>Jacob</b-td>
          <b-td>Thornton</b-td>
          <b-td>@fat</b-td>
        </b-tr>
        <b-tr>
          <b-th scope="row">3</b-th>
          <b-td colspan="2">Larry the Bird</b-td>
          <b-td>@twitter</b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
  </div>
  <div class="bd-example">
    <b-table-simple responsive hover>
      <b-thead>
        <b-tr>
          <b-th scope="col">Class</b-th>
          <b-th scope="col">Heading</b-th>
          <b-th scope="col">Heading</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr>
          <b-th scope="row">Default</b-th>
          <b-td>Cell</b-td>
          <b-td>Cell</b-td>
        </b-tr>

        <b-tr class="table-primary">
          <b-th scope="row">Primary</b-th>
          <b-td>Cell</b-td>
          <b-td>Cell</b-td>
        </b-tr>
        <b-tr class="table-secondary">
          <b-th scope="row">Secondary</b-th>
          <b-td>Cell</b-td>
          <b-td>Cell</b-td>
        </b-tr>
        <b-tr class="table-success">
          <b-th scope="row">Success</b-th>
          <b-td>Cell</b-td>
          <b-td>Cell</b-td>
        </b-tr>
        <b-tr class="table-danger">
          <b-th scope="row">Danger</b-th>
          <b-td>Cell</b-td>
          <b-td>Cell</b-td>
        </b-tr>
        <b-tr class="table-warning">
          <b-th scope="row">Warning</b-th>
          <b-td>Cell</b-td>
          <b-td>Cell</b-td>
        </b-tr>
        <b-tr class="table-info">
          <b-th scope="row">Info</b-th>
          <b-td>Cell</b-td>
          <b-td>Cell</b-td>
        </b-tr>
        <b-tr class="table-light">
          <b-th scope="row">Light</b-th>
          <b-td>Cell</b-td>
          <b-td>Cell</b-td>
        </b-tr>
        <b-tr class="table-dark">
          <b-th scope="row">Dark</b-th>
          <b-td>Cell</b-td>
          <b-td>Cell</b-td>
        </b-tr>
        <b-tr class="table-gray">
          <b-th scope="row">Gray</b-th>
          <b-td>Cell</b-td>
          <b-td>Cell</b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
  </div>
  <div class="bd-example">
    <b-table-simple responsive bordered class="table-sm">
      <b-thead>
        <b-tr>
          <b-th scope="col">#</b-th>
          <b-th scope="col">First</b-th>
          <b-th scope="col">Last</b-th>
          <b-th scope="col">Handle</b-th>
        </b-tr>
      </b-thead>
      <tbody>
        <b-tr>
          <b-th scope="row">1</b-th>
          <b-td>Mark</b-td>
          <b-td>Otto</b-td>
          <b-td>@mdo</b-td>
        </b-tr>
        <b-tr>
          <b-th scope="row">2</b-th>
          <b-td>Jacob</b-td>
          <b-td>Thornton</b-td>
          <b-td>@fat</b-td>
        </b-tr>
        <b-tr>
          <b-th scope="row">3</b-th>
          <b-td colspan="2">Larry the Bird</b-td>
          <b-td>@twitter</b-td>
        </b-tr>
      </tbody>
    </b-table-simple>
  </div>
</template>
<script>
export default {
  setup() {}
}
</script>
