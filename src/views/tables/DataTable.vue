<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Bootstrap Datatables</h4>
          </div>
        </div>
        <div class="card-body">
          <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>
          <div class="table-responsive border-bottom my-3">
            <data-table :data="DataTableOptions.data" :columns="DataTableOptions.columns" isFooter="bootstrap-data-table" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import DataTable from '@/components/DataTable.vue'

const DataTableOptions = {
  columns: [{ title: 'Name' }, { title: 'Position' }, { title: 'Office' }, { title: 'Age' }, { title: 'Startdate' }, { title: 'Salary' }],
  data: [
    ['Airi Satou', 'Accountant', 'Tokyo', '33', '2008/11/28', '$162,700'],
    ['Angelica Ramos', 'Chief Executive Officer (CEO)', 'London', '47', '2009/10/09', '$1,200,000'],
    ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '66', '2009/01/12', '$86,000'],
    ['Bradley Greer', 'Software Engineer', 'London', '41', '2012/10/13', '$132,000'],
    ['Brenden Wagner', 'Software Engineer', 'San Francisco', '28', '2011/06/07', '$206,850'],
    ['Brielle Williamson', 'Integration Specialist', 'New York', '61', '2012/12/02', '$372,000'],
    ['Bruno Nash', 'Software Engineer', 'London', '38', '2011/05/03', '$163,500'],
    ['Caesar Vance', 'Pre-Sales Support', 'New York', '21', '2011/12/12', '$106,450'],
    ['Cara Stevens', 'Sales Assistant', 'New York', '46', '2011/12/06', '$145,600'],
    ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '22', '2012/03/29', '$433,060'],
    ['Bradley Greer', 'Software Engineer', 'London', '41', '2012/10/13', '$132,000'],
    ['Brenden Wagner', 'Software Engineer', 'San Francisco', '28', '2011/06/07', '$206,850'],
    ['Brielle Williamson', 'Integration Specialist', 'New York', '61', '2012/12/02', '$372,000'],
    ['Bruno Nash', 'Software Engineer', 'London', '38', '2011/05/03', '$163,500'],
    ['Caesar Vance', 'Pre-Sales Support', 'New York', '21', '2011/12/12', '$106,450'],
    ['Airi Satou', 'Accountant', 'Tokyo', '33', '2008/11/28', '$162,700'],
    ['Angelica Ramos', 'Chief Executive Officer (CEO)', 'London', '47', '2009/10/09', '$1,200,000'],
    ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '66', '2009/01/12', '$86,000'],
    ['Bradley Greer', 'Software Engineer', 'London', '41', '2012/10/13', '$132,000'],
    ['Brenden Wagner', 'Software Engineer', 'San Francisco', '28', '2011/06/07', '$206,850'],
    ['Brielle Williamson', 'Integration Specialist', 'New York', '61', '2012/12/02', '$372,000'],
    ['Bruno Nash', 'Software Engineer', 'London', '38', '2011/05/03', '$163,500']
  ]
}
</script>
