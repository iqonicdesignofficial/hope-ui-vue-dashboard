<template>
    <div>
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
                     <div class="table-responsive">
                        <table id="datatable" class="table table-striped" data-toggle="data-table">
                           <thead>
                              <tr>
                                 <th>Name</th>
                                 <th>Position</th>
                                 <th>Office</th>
                                 <th>Age</th>
                                 <th>Start date</th>
                                 <th>Salary</th>
                              </tr>
                           </thead>
                           <tbody>

                              <tr>
                                 <td>Jackson Bradshaw</td>
                                 <td>Director</td>
                                 <td>New York</td>
                                 <td>65</td>
                                 <td>2008/09/26</td>
                                 <td>$645,750</td>
                              </tr>
                              <tr>
                                 <td>Olivia Liang</td>
                                 <td>Support Engineer</td>
                                 <td>Singapore</td>
                                 <td>64</td>
                                 <td>2011/02/03</td>
                                 <td>$234,500</td>
                              </tr>
                              <tr>
                                 <td>Bruno Nash</td>
                                 <td>Software Engineer</td>
                                 <td>London</td>
                                 <td>38</td>
                                 <td>2011/05/03</td>
                                 <td>$163,500</td>
                              </tr>
                              <tr>
                                 <td>Sakura Yamamoto</td>
                                 <td>Support Engineer</td>
                                 <td>Tokyo</td>
                                 <td>37</td>
                                 <td>2009/08/19</td>
                                 <td>$139,575</td>
                              </tr>
                              <tr>
                                 <td>Thor Walton</td>
                                 <td>Developer</td>
                                 <td>New York</td>
                                 <td>61</td>
                                 <td>2013/08/11</td>
                                 <td>$98,540</td>
                              </tr>
                              <tr>
                                 <td>Finn Camacho</td>
                                 <td>Support Engineer</td>
                                 <td>San Francisco</td>
                                 <td>47</td>
                                 <td>2009/07/07</td>
                                 <td>$87,500</td>
                              </tr>
                              <tr>
                                 <td>Serge Baldwin</td>
                                 <td>Data Coordinator</td>
                                 <td>Singapore</td>
                                 <td>64</td>
                                 <td>2012/04/09</td>
                                 <td>$138,575</td>
                              </tr>
                              <tr>
                                 <td>Zenaida Frank</td>
                                 <td>Software Engineer</td>
                                 <td>New York</td>
                                 <td>63</td>
                                 <td>2010/01/04</td>
                                 <td>$125,250</td>
                              </tr>
                              <tr>
                                 <td>Zorita Serrano</td>
                                 <td>Software Engineer</td>
                                 <td>San Francisco</td>
                                 <td>56</td>
                                 <td>2012/06/01</td>
                                 <td>$115,000</td>
                              </tr>
                              <tr>
                                 <td>Jennifer Acosta</td>
                                 <td>Junior Javascript Developer</td>
                                 <td>Edinburgh</td>
                                 <td>43</td>
                                 <td>2013/02/01</td>
                                 <td>$75,650</td>
                              </tr>
                              <tr>
                                 <td>Cara Stevens</td>
                                 <td>Sales Assistant</td>
                                 <td>New York</td>
                                 <td>46</td>
                                 <td>2011/12/06</td>
                                 <td>$145,600</td>
                              </tr>
                              <tr>
                                 <td>Hermione Butler</td>
                                 <td>Regional Director</td>
                                 <td>London</td>
                                 <td>47</td>
                                 <td>2011/03/21</td>
                                 <td>$356,250</td>
                              </tr>
                           </tbody>
                           <tfoot>
                              <tr>
                                 <th>Name</th>
                                 <th>Position</th>
                                 <th>Office</th>
                                 <th>Age</th>
                                 <th>Start date</th>
                                 <th>Salary</th>
                              </tr>
                           </tfoot>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Datatable'
}
</script>
