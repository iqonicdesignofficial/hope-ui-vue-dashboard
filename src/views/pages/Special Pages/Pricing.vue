<template>
   <div>
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
         <symbol id="check" viewBox="0 0 16 16">
            <title>Check</title>
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
         </symbol>
      </svg>
      <div>
         <div class="row">
            <div class="col-md-12">
               <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3 text-center">
                  <div class="col">
                     <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-body">
                           <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
                           <h4 class="my-0 fw-normal mt-3">Free</h4>
                              <ul class="list-unstyled my-3 p-0">
                                 <li><p>10 users included</p></li>
                                 <li><p>2 GB of storage</p></li>
                                 <li><p>Email support</p></li>
                                 <li><p>Help center access</p></li>
                              </ul>
                           <button type="button" class="btn btn-outline-secondary disabled">Sign up for free</button>
                        </div>
                     </div>
                  </div>
                  <div class="col">
                     <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-body">
                           <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
                           <h4 class="my-0 fw-normal mt-3">Pro</h4>
                           <ul class="list-unstyled my-3 p-0">
                              <li><p>20 users included</p></li>
                              <li><p>10 GB of storage</p></li>
                              <li><p>Priority email support</p></li>
                              <li><p>Help center access</p></li>
                           </ul>
                           <button type="button" class="btn btn-outline-primary">Get started</button>
                        </div>
                     </div>
                  </div>
                  <div class="col">
                     <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-body">
                           <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
                           <h4 class="my-0 fw-normal mt-3">Enterprise</h4>
                           <ul class="list-unstyled my-3 p-0">
                              <li><p>30 users included</p></li>
                              <li><p>15 GB of storage</p></li>
                              <li><p>Call and email support</p></li>
                              <li><p>Help center access</p></li>
                           </ul>
                           <button type="button" class="btn btn-primary">Get Started</button>
                        </div>
                     </div>
                  </div>
                  <div class="col">
                     <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-body">
                           <h1 class="card-title pricing-card-title">$49<small class="text-muted fw-light">/mo</small></h1>
                           <h4 class="my-0 fw-normal mt-3">Premium</h4>
                           <ul class="list-unstyled my-3 p-0">
                              <li><p>50 users included</p></li>
                              <li><p>60 GB of storage</p></li>
                              <li><p>24 X 7 call support</p></li>
                              <li><p>Help center access</p></li>
                           </ul>
                           <button type="button" class="btn btn-primary">Get Started</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="row row-cols-1">
                  <div class="col-sm-12">
                     <div class="card">
                        <div class="card-header pb-3">
                        <h3 class="block-title">Features</h3>
                        </div>
                        <div class="card-body p-0">
                           <div class="table-responsive pricing pt-2">
                              <table id="my-table" class="table mb-0">
                                 <thead>
                                    <tr>
                                       <th class="text-center prc-wrap"></th>
                                       <th class="text-center prc-wrap">
                                          <div :class="checkActive1 ? 'prc-box active':'prc-box'" @click="makeActive('box1')">
                                             <div class="h3 pt-4">$0<small> / month</small>
                                             </div> <span class="type">Free</span>
                                          </div>
                                       </th>
                                       <th class="text-center prc-wrap">
                                          <div :class="checkActive2 ? 'prc-box active':'prc-box'" @click="makeActive('box2')">
                                             <div class="h3 pt-4">$15<small> / month</small>
                                             </div> <span class="type">Pro</span>
                                          </div>
                                       </th>
                                       <th class="text-center prc-wrap">
                                          <div :class="checkActive3 ? 'prc-box active':'prc-box'" @click="makeActive('box3')">
                                             <div class="h3 pt-4">$29<small> / month</small>
                                             </div> <span class="type">Enterprise</span>
                                          </div>
                                       </th>
                                       <th class="text-center prc-wrap">
                                          <div :class="checkActive4 ? 'prc-box active':'prc-box'" @click="makeActive('box4')">
                                             <div class="h3 pt-4">$49<small> / month</small>
                                             </div> <span class="type">Premium</span>
                                          </div>
                                       </th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <th scope="row">Features 1</th>
                                       <td :class="checkActive1 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box1')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path  d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive2 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box2')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive3 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box3')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive4 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box4')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                    </tr>
                                    <tr>
                                       <th scope="row">Features 2</th>
                                       <td :class="checkActive1 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box1')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4 20L20 4M20 20L4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive2 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box2')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive3 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box3')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive4 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box4')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                    </tr>
                                    <tr>
                                       <th scope="row">Features 3</th>
                                       <td :class="checkActive1 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box1')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M4 20L20 4M20 20L4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive2 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box2')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive3 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box3')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive4 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box4')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                    </tr>
                                    <tr>
                                       <th scope="row">Features 4</th>
                                       <td :class="checkActive1 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box1')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive2 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box2')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive3 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box3')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive4 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box4')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                    </tr>
                                    <tr>
                                       <th scope="row">Features 5</th>
                                       <td :class="checkActive1 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box1')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M4 20L20 4M20 20L4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive2 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box2')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M4 20L20 4M20 20L4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive3 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box3')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td :class="checkActive4 ? 'text-center child-cell active':'text-center child-cell'" @click="makeActive('box4')">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td class="text-center"></td>
                                       <td class="text-center"><a href="#" class="btn btn-outline-primary">Free</a>
                                       </td>
                                       <td class="text-center"><a href="#" class="btn btn-outline-primary">Purchase</a>
                                       </td>
                                       <td class="text-center"><a href="#" class="btn btn-outline-primary">Purchase</a>
                                       </td>
                                       <td class="text-center"><a href="#" class="btn btn-outline-primary">Purchase</a>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                     <div class="card">
                        <div class="card-header pb-3">
                        <h3 class="block-title">Payments</h3>
                        </div>
                        <div class="card-body p-0">
                           <div class="table-responsive pricing pt-2">
                              <table class="table table-bordered mb-0">
                                 <thead>
                                    <tr>
                                       <th></th>
                                       <th>
                                          <div>
                                             <div class="text-bold h5">Free</div>
                                             <div class="d-flex justify-content-start align-items-center mt-4">
                                                <small>USD</small>
                                                <div class="mx-2 h4">$0</div>
                                                <small> / mo</small>
                                             </div>
                                             <div class="mt-3">
                                                <div class="d-flex">billed yearly</div>
                                                <div class="d-flex align-items-center">
                                                   <small class="bold me-2">$0.00</small> billed monthly
                                                </div>
                                             </div>
                                             <button class="btn btn-primary rounded-pill mt-3 w-100">Free</button>
                                          </div>
                                       </th>
                                       <th>
                                          <div>
                                             <div class="d-flex align-items-center">
                                                <div class="text-bold h5">Pro</div>
                                                <span class="badge rounded-pill bg-soft-success ms-2">Popular</span>
                                             </div>
                                             <div class="d-flex justify-content-start align-items-center mt-4">
                                                <small>USD</small>
                                                <div class="mx-2 h4">$15</div>
                                                <small> / mo</small>
                                             </div>
                                             <div class="mt-3">
                                                <div class="d-flex">billed yearly</div>
                                                <div class="d-flex align-items-center">
                                                   <small class="bold me-2">$169.99</small> billed monthly
                                                </div>
                                             </div>
                                             <button class="btn btn-primary rounded-pill mt-3 w-100">Buy Pro</button>
                                          </div>
                                       </th>
                                       <th>
                                          <div>
                                             <div class="text-bold h5">Enterprise</div>
                                             <div class="d-flex justify-content-start align-items-center mt-4">
                                                <small>USD</small>
                                                <div class="mx-2 h4">$29</div>
                                                <small> / mo</small>
                                             </div>
                                             <div class="mt-3">
                                                <div class="d-flex">billed yearly</div>
                                                <div class="d-flex align-items-center">
                                                   <small class="bold me-2">$319.89</small> billed monthly
                                                </div>
                                             </div>
                                             <button class="btn btn-primary rounded-pill mt-3 w-100">Buy Enterprise</button>
                                          </div>
                                       </th>
                                       <th>
                                          <div>
                                             <div class="text-bold h5">Premium</div>
                                             <div class="d-flex justify-content-start align-items-center mt-4">
                                                <small>USD</small>
                                                <div class="mx-2 h4">$49</div>
                                                <small> / mo</small>
                                             </div>
                                             <div class="mt-3">
                                                <div class="d-flex">billed yearly</div>
                                                <div class="d-flex align-items-center">
                                                   <small class="bold me-2">$549.09</small> billed monthly
                                                </div>
                                             </div>
                                             <button class="btn btn-primary rounded-pill mt-3 w-100">Buy Premium</button>
                                          </div>
                                       </th>

                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <th colspan="5" class="bg-light">Features</th>
                                    </tr>
                                    <tr>
                                       <th scope="row">Features 1</th>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center active">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                    </tr>
                                    <tr>
                                       <th scope="row">Features 2</th>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"/>
                                          </svg>
                                       </td>
                                       <td class="text-center active">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                    </tr>
                                    <tr>
                                       <th scope="row">Features 3</th>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"/>
                                          </svg>
                                       </td>
                                       <td class="text-center active">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                    </tr>
                                    <tr>
                                       <th scope="row">Features 4</th>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center active">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                    </tr>
                                    <tr>
                                       <th colspan="5" class="bg-light">Payment</th>
                                    </tr>
                                    <tr>
                                       <th scope="row">Payment 1</th>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center active">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                    </tr>
                                    <tr>
                                       <th scope="row">Payment 2</th>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                             <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"/>
                                          </svg>
                                       </td>
                                       <td class="text-center active">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                    </tr>
                                    <tr>
                                       <th scope="row">Payment 3</th>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                             <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" stroke="currentColor"/>
                                          </svg>
                                       </td>
                                       <td class="text-center active">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                    </tr>
                                    <tr>
                                       <th scope="row">Payment 4</th>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center active">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                       <td class="text-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                          </svg>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                     <div class="card">
                        <div class="row no-gutters">
                           <div class="col-md-8">
                              <div class="card-body">
                                 <h4>Lifetime Membership</h4>
                                 <p class="mt-2">
                                    If you will take advantage of the above-listed amenities, classes, and services, Life Time's membership fees may be worth the cost.
                                 </p>
                                 <div class="mb-5 pt-2">
                                    <p class="line-around text-secondary mb-0"><span class="line-around-1">Included Features</span></p>
                                 </div>
                                 <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                       <div class="d-flex align-items-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                             <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          </svg>
                                          <div class="ms-2">Private forum access</div>
                                       </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                       <div class="d-flex align-items-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                             <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          </svg>
                                          <div class="ms-2">Private forum access</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                       <div class="d-flex align-items-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                             <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          </svg>
                                          <div class="ms-2">Private forum access</div>
                                       </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                       <div class="d-flex align-items-center">
                                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                             <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          </svg>
                                          <div class="ms-2">Private forum access</div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4">
                              <div class="card-body text-center h-100 iq-single-card">
                                 <div class="d-flex align-items-center justify-content-center mb-2">
                                    <h1 class="card-title pricing-card-title mb-0">
                                       $599
                                    </h1>
                                    <small class="ms-1 text-muted fw-light">USD</small>
                                 </div>
                                 <div class="font-medium text-center text-secondary">
                                    <div>No monthly subscription,</div>
                                    <div>you only pay once.</div>
                                 </div>
                                 <button class="btn btn-primary rounded-pill mt-5 w-100">Get Started</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="row iq-star-inserted row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5 mt-5 text-center">
                  <div class="col iq-star-inserted-1">
                     <div class="card my-5">
                        <div class="card-body">
                           <h2 class="my-0 fw-normal mb-4">Enterprise</h2>
                           <h1 class="card-title pricing-card-title mb-0">$29 <small class="text-secondary"> / month</small></h1>
                           <p class="mb-0">billed yearly</p>
                           <p>$79.9 billed monthly</p>
                           <ul class="list-unstyled my-3 p-0">
                              <li><p>30 users included</p></li>
                              <li><p>15 GB of storage</p></li>
                              <li><p>Call and email support</p></li>
                              <li><p>Help center access</p></li>
                           </ul>
                           <button type="button" class="btn btn-primary rounded-pill w-100">Get Started</button>
                        </div>
                     </div>
                  </div>
                  <div class="col iq-star-inserted-2">
                     <div class="card mb-0 shadow-lg">
                        <div class="card-body">
                           <h2><span class="badge rounded-pill bg-soft-primary mb-4"><small class="text-uppercase px-3">Popular</small></span></h2>
                           <h2 class="my-0 fw-normal mb-4">Pro</h2>
                           <h1 class="card-title pricing-card-title mb-0">$15<small class="text-secondary"> / month</small></h1>
                           <p class="mb-0">billed yearly</p>
                           <p>$55.0 billed monthly</p>
                           <ul class="list-unstyled my-3 p-0">
                              <li><p>20 users included</p></li>
                              <li><p>10 GB of storage</p></li>
                              <li><p>Priority email support</p></li>
                              <li><p>Help center access</p></li>
                           </ul>
                           <button type="button" class="btn btn-primary rounded-pill w-100">Get Started</button>
                        </div>
                     </div>
                  </div>
                  <div class="col iq-star-inserted-3">
                     <div class="card my-5">
                        <div class="card-body">
                           <h2 class="my-0 fw-normal mb-4">Premium</h2>
                           <h1 class="card-title pricing-card-title mb-0">$49 <small class="text-secondary"> / month</small></h1>
                           <p class="mb-0">billed yearly</p>
                           <p>$99.9 billed monthly</p>
                           <ul class="list-unstyled my-3 p-0">
                              <li><p>50 users included</p></li>
                              <li><p>60 GB of storage</p></li>
                              <li><p>24 X 7 call support</p></li>
                              <li><p>Help center access</p></li>
                           </ul>
                           <button type="button" class="btn btn-primary rounded-pill w-100">Get Started</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
  name: 'Pricing',
  data () {
    return {
      checkActive1: false,
      checkActive2: true,
      checkActive3: false,
      checkActive4: false
    }
  },
  methods: {
    makeActive (value) {
      switch (value) {
        case 'box1':
          this.checkActive1 = true
          this.checkActive2 = false
          this.checkActive3 = false
          this.checkActive4 = false
          break
        case 'box2':
          this.checkActive2 = true
          this.checkActive1 = false
          this.checkActive3 = false
          this.checkActive4 = false
          break
        case 'box3':
          this.checkActive3 = true
          this.checkActive1 = false
          this.checkActive2 = false
          this.checkActive4 = false
          break
        case 'box4':
          this.checkActive4 = true
          this.checkActive1 = false
          this.checkActive3 = false
          this.checkActive2 = false
          break
      }
    }
  }

}
</script>
