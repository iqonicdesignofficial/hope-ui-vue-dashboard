<template>
  <b-row>
    <b-col sm="12">
      <b-card no-body class="card">
        <div class="card-header d-flex justify-content-between flex-wrap">
          <div class="header-title">
            <h4 class="card-title mb-0">Role & Permission</h4>
          </div>
          <div class="d-flex align-items-center gap-3">
            <a href="#" class="text-center btn btn-primary d-flex gap-2" data-bs-toggle="modal" data-bs-target="#new-permission">
              <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              New Permission
            </a>
            <a href="#" class="text-center btn btn-primary d-flex gap-2" data-bs-toggle="modal" data-bs-target="#new-role">
              <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              New Role
            </a>
          </div>
        </div>
        <b-card-body>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th class="text-center" v-for="(role, index) in roles" :key="index">
                    {{ role.title }}
                    <div style="float: right">
                      <a class="btn btn-sm btn-icon text-primary flex-end" data-bs-toggle="tooltip" title="Edit User" href="#">
                        <span class="btn-inner">
                          <svg @click="editrole(role.title, index)" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                      </a>
                      <a class="btn btn-sm btn-icon text-danger" @click="deleteRole(index)" data-bs-toggle="tooltip" title="Delete User" href="#">
                        <span class="btn-inner">
                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                            <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M20.708 6.23975H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="" v-for="(permission, index) in permissions" :key="index">
                  <td class="">
                    {{ permission.title }}
                    <div style="float: right">
                      <a class="btn btn-sm btn-icon text-primary flex-end" data-bs-toggle="tooltip" title="Edit User" href="#">
                        <span class="btn-inner">
                          <svg @click="editpermission(permission.title, index)" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                      </a>
                      <a class="btn btn-sm btn-icon text-danger" @click="deletepermission(index)" data-bs-toggle="tooltip" title="Delete User" href="#">
                        <span class="btn-inner">
                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                            <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M20.708 6.23975H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </td>
                  <td v-for="(role, index) in roles" :key="index" class="text-center">
                    <input class="form-check-input" type="checkbox" checked v-if="role.status === 'true' && permission.status === 'true'" />
                    <input class="form-check-input" type="checkbox" v-else />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-center">
              <a href="#" type="button" class="btn btn-primary">Save</a>
            </div>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
  <!-- New Permission modal -->
  <div class="modal fade" id="new-permission" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropPermissionLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropPermissionLabel">Add Permission</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Permission title</label>
            <input type="text" class="form-control" placeholder="Permission Title" />
          </div>
          <div class="text-start">
            <button type="button" class="btn btn-primary me-2" data-bs-dismiss="modal">Save</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- New Role modal -->
  <div class="modal fade" id="new-role" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropRoleLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropRoleLabel">Add Role</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Role title</label>
            <input type="text" class="form-control" placeholder="Role Title" />
          </div>
          <div>
            <span>Status</span>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="status" id="status-yes" value="option2" />
              <label class="form-check-label" for="status-yes"> Yes </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="status" id="status-no" value="option2" />
              <label class="form-check-label" for="status-no"> No </label>
            </div>
          </div>
          <div class="text-start mt-2">
            <button type="button" class="btn btn-primary me-2" data-bs-dismiss="modal">Save</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'admin-view',
  data() {
    return {
      roles: [
        {
          title: 'Admin',
          status: 'true'
        },
        {
          title: 'Demo Admin',
          status: 'false'
        },
        {
          title: 'User',
          status: 'true'
        }
      ],
      rolename: 'Demo User',
      roleeditname: '',
      roleid: '',
      permissions: [
        {
          title: 'Role',
          status: 'true'
        },
        {
          title: 'Role Add',
          status: 'false'
        },
        {
          title: 'Role List',
          status: 'true'
        },
        {
          title: 'Permission',
          status: 'false'
        },
        {
          title: 'Permission Add',
          status: 'false'
        },
        {
          title: 'Permission List',
          status: 'true'
        }
      ],
      permissionsname: 'Demo Permission',
      permissionseditname: '',
      permissionsid: ''
    }
  },
  methods: {
    addrole() {
      const roledata = {
        title: this.rolename
      }
      this.roles.push(roledata)
    },
    deleteRole(roleid) {
      this.roles.splice(roleid, 1)
    },
    editrole(title, roleid) {
      this.roleeditname = title
      this.roleid = roleid
    },
    updaterole() {
      this.roles[this.roleid].title = this.roleeditname
    },
    addpermission() {
      const permissiondata = {
        title: this.permissionsname
      }
      this.permissions.push(permissiondata)
    },
    deletepermission(permissionsid) {
      this.permissions.splice(permissionsid, 1)
    },
    editpermission(title, permissionsid) {
      this.permissionseditname = title
      this.permissionsid = permissionsid
    },
    updatepermission() {
      this.permissions[this.permissionsid].title = this.permissionseditname
    }
  }
}
</script>
