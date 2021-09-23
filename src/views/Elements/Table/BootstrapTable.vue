P<template>
    <div>
 <div class="row">
      <div class="col-sm-12">
         <div class="card">
            <div class="card-header d-flex justify-content-between">
               <div class="header-title">
                  <h4 class="card-title">Basic Table</h4>
               </div>
            </div>
            <div class="card-body p-0">
               <div class="table-responsive mt-4">
                  <table id="basic-table" class="table table-striped mb-0" role="grid">
                     <thead>
                        <tr>
                           <th>Companies</th>
                           <th>Members</th>
                           <th>Budget</th>
                           <th>Status</th>
                           <th>Completion</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>
                              <div class="d-flex align-items-center">
                                 <img class="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                                    src="@/assets/images/shapes/01.png" alt="profile">
                                 <h6>Soft UI XD Version</h6>
                              </div>
                           </td>
                           <td>
                              <div class="iq-media-group iq-media-group-1">
                                    <a href="#" class="iq-media-1">
                                       <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                                    </a>
                                    <a href="#" class="iq-media-1">
                                       <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                                    </a>
                                    <a href="#" class="iq-media-1">
                                       <div class="icon iq-icon-box-3 rounded-pill">MM</div>
                                    </a>
                                 </div>
                           </td>
                           <td>$14000</td>
                           <td><div class="text-info">Pending</div></td>
                           <td>
                              <div class="d-flex align-items-center mb-2">
                                 <h6>60%</h6>
                              </div>
                              <Progressbar :value="60" color="info" class="shadow-none w-100" colorName="info" style="height: 6px"/>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div class="d-flex align-items-center">
                                 <img class="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                                    src="@/assets/images/shapes/02.png" alt="profile">
                                 <h6>Add Progress Track</h6>
                              </div>
                           </td>
                           <td>
                              <div class="iq-media-group iq-media-group-1">
                                    <a href="#" class="iq-media-1">
                                       <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                                    </a>
                                    <a href="#" class="iq-media-1">
                                       <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                                    </a>
                                 </div>
                           </td>
                           <td>$3000</td>
                           <td><div class="text-danger">Pending</div></td>
                           <td>
                              <div class="d-flex align-items-center mb-2">
                                 <h6>10%</h6>
                              </div>
                              <Progressbar :value="10" color="danger" class="shadow-none w-100" colorName="danger" style="height: 6px"/>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div class="d-flex align-items-center">
                                 <img class="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                                    src="@/assets/images/shapes/03.png" alt="profile">
                                 <h6>Fix Platform Errors</h6>
                              </div>
                           </td>
                           <td>
                              <div class="iq-media-group iq-media-group-1">
                                    <a href="#" class="iq-media-1">
                                       <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                                    </a>
                                    <a href="#" class="iq-media-1">
                                       <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                                    </a>
                                 </div>
                           </td>
                           <td>Not set</td>
                           <td><div class="text-success">Completed</div></td>
                           <td>
                              <div class="d-flex align-items-center mb-2">
                                 <h6>100%</h6>
                              </div>
                              <Progressbar :value="100" color="success" class="shadow-none w-100" colorName="success" style="height: 6px"/>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div class="d-flex align-items-center">
                                 <img class="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                                    src="@/assets/images/shapes/04.png" alt="profile">
                                 <h6>Launch Our Mobile App</h6>
                              </div>
                           </td>
                           <td>
                              <div class="iq-media-group iq-media-group-1">
                                    <a href="#" class="iq-media-1">
                                       <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                                    </a>
                                    <a href="#" class="iq-media-1">
                                       <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                                    </a>
                                     <a href="#" class="iq-media-1">
                                       <div class="icon iq-icon-box-3 rounded-pill">AP</div>
                                    </a>
                                     <a href="#" class="iq-media-1">
                                       <div class="icon iq-icon-box-3 rounded-pill">DP</div>
                                    </a>
                                 </div>
                           </td>
                           <td>$20500</td>
                           <td><div class="text-success">Completed</div></td>
                           <td>
                              <div class="d-flex align-items-center mb-2">
                                 <h6>100%</h6>
                              </div>
                              <Progressbar :value="100" color="success" class="shadow-none w-100" colorName="success" style="height: 6px"/>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div class="d-flex align-items-center">
                                 <img class="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                                    src="@/assets/images/shapes/06.png" alt="profile">
                                 <h6>Add the New Pricing Page</h6>
                              </div>
                           </td>
                           <td>
                               <div class="iq-media-group iq-media-group-1">
                                    <a href="#" class="iq-media-1">
                                       <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                                    </a>
                                 </div>
                           </td>
                           <td>$500</td>
                           <td><div class="text-primary">On Schedule</div></td>
                           <td>
                              <div class="d-flex align-items-center mb-2">
                                 <h6>25%</h6>
                              </div>
                              <Progressbar :value="25" color="primary" class="shadow-none w-100" colorName="primary" style="height: 6px"/>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div class="d-flex align-items-center">
                                 <img class="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                                    src="@/assets/images/shapes/01.png" alt="profile">
                                 <h6>Redesign New Online Shop</h6>
                              </div>
                           </td>
                           <td>
                              <div class="iq-media-group iq-media-group-1">
                                    <a href="#" class="iq-media-1">
                                       <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                                    </a>
                                    <a href="#" class="iq-media-1">
                                       <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                                    </a>
                                 </div>
                           </td>
                           <td>$2000</td>
                           <td><div class="text-warning">Completed</div></td>
                           <td>
                              <div class="d-flex align-items-center mb-2">
                                 <h6>40%</h6>
                              </div>
                              <Progressbar :value="40" color="warning" class="shadow-none w-100" colorName="warning" style="height: 6px"/>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   </div>
    </div>
</template>
<script>
import Progressbar from '@/components/custom/progressbar/Progressbar'
export default {
  components: { Progressbar },
  name: 'BootstrapTable'

}
</script>
