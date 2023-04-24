<template>
  <b-row>
    <b-col sm="12">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">User List</h4>
          </div>
        </div>
        <div class="card-body px-0">
          <div class="table-responsive">
            <table id="user-list-table" class="table table-striped" role="grid" data-toggle="data-table">
              <thead>
                <tr class="ligth">
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Status</th>
                  <th>Company</th>
                  <th>Join Date</th>
                  <th style="min-width: 100px">Action</th>
                </tr>
              </thead>
              <tbody>
                <table-widget :list="tableData" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>
<script>
import TableWidget from '@/components/widgets/users/TableWidget.vue'
export default {
  components: {
    TableWidget
  },
  setup() {
    const tableData = [
      {
        image: require('@/assets/images/shapes/06.png'),
        name: 'Anna Sthesia',
        contact: '(760) 756 7568',
        email: 'annasthesia@gmail.com',
        country: 'USA',
        status: 'Active',
        company: 'Acme Corporation',
        date: '2019/12/01',
        color: 'bg-primary'
      },
      {
        image: require('@/assets/images/shapes/02.png'),
        name: 'Brock Lee',
        contact: '+62 5689 458 658',
        email: 'brocklee@gmail.com',
        country: 'Indonesia',
        status: 'Active',
        company: 'Soylent Corp',
        date: '2019/12/01',
        color: 'bg-primary'
      },
      {
        image: require('@/assets/images/shapes/03.png'),
        name: 'Dan Druff',
        contact: '+55 6523 456 856',
        email: 'dandruff@gmail.com',
        country: 'Brazil',
        status: 'Pending',
        company: 'Umbrella Corporation',
        date: '2019/12/01',
        color: 'bg-warning'
      },
      {
        image: require('@/assets/images/shapes/04.png'),
        name: 'Hans Olo',
        contact: '+91 2586 253 125',
        email: 'hansolo@gmail.com',
        country: 'India',
        status: 'Inactive',
        company: 'Vehement Capital',
        date: '2019/12/01',
        color: 'bg-danger'
      },
      {
        image: require('@/assets/images/shapes/05.png'),
        name: 'Lynn Guini',
        contact: '+27 2563 456 589',
        email: 'lynnguini@gmail.com',
        country: 'Africa',
        status: 'Active',
        company: 'Massive Dynamic',
        date: '2019/12/01',
        color: 'bg-primary'
      },
      {
        image: require('@/assets/images/shapes/06.png'),
        name: 'Eric Shun',
        contact: '+55 25685 256 589',
        email: 'ericshun@gmail.com',
        country: 'Brazil',
        status: 'Pending',
        company: 'Globex Corporation',
        date: '2019/12/01',
        color: 'bg-warning'
      },
      {
        image: require('@/assets/images/shapes/03.png'),
        name: 'aaronottix',
        contact: '(760) 756 7568',
        email: 'budwiser@ymail.com',
        country: 'USA',
        status: 'Hold',
        company: 'Acme Corporation',
        date: '2019/12/01',
        color: 'bg-info'
      },
      {
        image: require('@/assets/images/shapes/05.png'),
        name: 'Marge Arita',
        contact: '+27 5625 456 589',
        email: 'margearita@gmail.com',
        country: 'Africa',
        status: 'Complite',
        company: 'Vehement Capital',
        date: '2019/12/01',
        color: 'bg-success'
      },
      {
        image: require('@/assets/images/shapes/02.png'),
        name: 'Bill Dabear',
        contact: '+55 2563 456 589',
        email: 'billdabear@gmail.com',
        country: 'Brazil',
        status: 'Active',
        company: 'Massive Dynamic',
        date: '2019/12/01',
        color: 'bg-primary'
      }
    ]
    return {
      tableData
    }
  }
}
</script>
