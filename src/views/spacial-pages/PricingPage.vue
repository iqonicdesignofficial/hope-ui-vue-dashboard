<template>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="check" viewBox="0 0 16 16">
      <title>Check</title>
      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
    </symbol>
  </svg>
  <div>
    <b-row>
      <b-col md="12">
        <b-row class="row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3 text-center">
          <b-col>
            <b-card class="mb-4 rounded-3">
              <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
              <h4 class="my-0 fw-normal mt-3">Free</h4>
              <ul class="list-unstyled my-3 p-0">
                <li><p>10 users included</p></li>
                <li><p>2 GB of storage</p></li>
                <li><p>Email support</p></li>
                <li><p>Help center access</p></li>
              </ul>
              <b-button tag="button" variant="outline-secondary" class="disabled">Sign up for free</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card class="mb-4 rounded-3">
              <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
              <h4 class="my-0 fw-normal mt-3">Pro</h4>
              <ul class="list-unstyled my-3 p-0">
                <li><p>20 users included</p></li>
                <li><p>10 GB of storage</p></li>
                <li><p>Priority email support</p></li>
                <li><p>Help center access</p></li>
              </ul>
              <b-button tag="button" variant="outline-primary">Get started</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card class="mb-4 rounded-3">
              <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
              <h4 class="my-0 fw-normal mt-3">Enterprise</h4>
              <ul class="list-unstyled my-3 p-0">
                <li><p>30 users included</p></li>
                <li><p>15 GB of storage</p></li>
                <li><p>Call and email support</p></li>
                <li><p>Help center access</p></li>
              </ul>
              <b-button tag="button" variant="primary">Get Started</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card class="mb-4 rounded-3">
              <h1 class="card-title pricing-card-title">$49<small class="text-muted fw-light">/mo</small></h1>
              <h4 class="my-0 fw-normal mt-3">Premium</h4>
              <ul class="list-unstyled my-3 p-0">
                <li><p>50 users included</p></li>
                <li><p>60 GB of storage</p></li>
                <li><p>24 X 7 call support</p></li>
                <li><p>Help center access</p></li>
              </ul>
              <b-button tag="button" variant="primary">Get Started</b-button>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="row-cols-1">
          <b-col sm="12">
            <b-card no-body>
              <b-card-header header-class="pb-3">
                <h3 class="block-title">Features</h3>
              </b-card-header>
              <b-card-body class="p-0">
                <b-table-simple responsive class="pricing pt-2 mb-0" id="my-table">
                  <b-thead>
                    <b-tr>
                      <b-th class="text-center prc-wrap"></b-th>
                      <b-th class="text-center prc-wrap">
                        <div class="prc-box">
                          <div class="h3 pt-4">$0<small> / month</small></div>
                          <span class="type">Free</span>
                        </div>
                      </b-th>
                      <b-th class="text-center prc-wrap">
                        <div class="prc-box active">
                          <div class="h3 pt-4">$15<small> / month</small></div>
                          <span class="type">Pro</span>
                        </div>
                      </b-th>
                      <b-th class="text-center prc-wrap">
                        <div class="prc-box">
                          <div class="h3 pt-4">$29<small> / month</small></div>
                          <span class="type">Enterprise</span>
                        </div>
                      </b-th>
                      <b-th class="text-center prc-wrap">
                        <div class="prc-box">
                          <div class="h3 pt-4">$49<small> / month</small></div>
                          <span class="type">Premium</span>
                        </div>
                      </b-th>
                    </b-tr>
                  </b-thead>
                  <b-tbody>
                    <b-tr>
                      <b-th scope="row">Features 1</b-th>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell active">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th scope="row">Features 2</b-th>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 20L20 4M20 20L4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell active">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th scope="row">Features 3</b-th>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 20L20 4M20 20L4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell active">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th scope="row">Features 4</b-th>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell active">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th scope="row">Features 5</b-th>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 20L20 4M20 20L4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell active">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 20L20 4M20 20L4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center child-cell">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-td class="text-center"></b-td>
                      <b-td class="text-center"><a href="#" class="btn btn-outline-primary">Free</a></b-td>
                      <b-td class="text-center"><a href="#" class="btn btn-outline-primary">Purchase</a></b-td>
                      <b-td class="text-center"><a href="#" class="btn btn-outline-primary">Purchase</a></b-td>
                      <b-td class="text-center"><a href="#" class="btn btn-outline-primary">Purchase</a></b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </b-card-body>
            </b-card>
            <b-card no-body>
              <b-card-header class="pb-3">
                <h3 class="block-title">Payments</h3>
              </b-card-header>
              <b-card-body class="p-0">
                <b-table-simple class="pricing pt-2 table-bordered mb-0">
                  <b-thead>
                    <b-tr>
                      <b-th></b-th>
                      <b-th>
                        <div>
                          <div class="text-bold h5">Free</div>
                          <div class="d-flex justify-content-start align-items-center mt-4">
                            <small>USD</small>
                            <div class="mx-2 h4">$0</div>
                            <small> / mo</small>
                          </div>
                          <div class="mt-3">
                            <div class="d-flex">billed yearly</div>
                            <div class="d-flex align-items-center"><small class="bold me-2">$0.00</small> billed monthly</div>
                          </div>
                          <button class="btn btn-primary rounded-pill mt-3 w-100">Free</button>
                        </div>
                      </b-th>
                      <b-th>
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
                            <div class="d-flex align-items-center"><small class="bold me-2">$169.99</small> billed monthly</div>
                          </div>
                          <button class="btn btn-primary rounded-pill mt-3 w-100">Buy Pro</button>
                        </div>
                      </b-th>
                      <b-th>
                        <div>
                          <div class="text-bold h5">Enterprise</div>
                          <div class="d-flex justify-content-start align-items-center mt-4">
                            <small>USD</small>
                            <div class="mx-2 h4">$29</div>
                            <small> / mo</small>
                          </div>
                          <div class="mt-3">
                            <div class="d-flex">billed yearly</div>
                            <div class="d-flex align-items-center"><small class="bold me-2">$319.89</small> billed monthly</div>
                          </div>
                          <button class="btn btn-primary rounded-pill mt-3 w-100">Buy Enterprise</button>
                        </div>
                      </b-th>
                      <b-th>
                        <div>
                          <div class="text-bold h5">Premium</div>
                          <div class="d-flex justify-content-start align-items-center mt-4">
                            <small>USD</small>
                            <div class="mx-2 h4">$49</div>
                            <small> / mo</small>
                          </div>
                          <div class="mt-3">
                            <div class="d-flex">billed yearly</div>
                            <div class="d-flex align-items-center"><small class="bold me-2">$549.09</small> billed monthly</div>
                          </div>
                          <button class="btn btn-primary rounded-pill mt-3 w-100">Buy Premium</button>
                        </div>
                      </b-th>
                    </b-tr>
                  </b-thead>
                  <b-tbody>
                    <b-tr>
                      <b-th colspan="5" class="bg-light">Features</b-th>
                    </b-tr>
                    <b-tr>
                      <b-th scope="row">Features 1</b-th>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center active">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th scope="row">Features 2</b-th>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
                        </svg>
                      </b-td>
                      <b-td class="text-center active">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th scope="row">Features 3</b-th>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
                        </svg>
                      </b-td>
                      <b-td class="text-center active">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th scope="row">Features 4</b-th>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center active">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th colspan="5" class="bg-light">Payment</b-th>
                    </b-tr>
                    <b-tr>
                      <b-th scope="row">Payment 1</b-th>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center active">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th scope="row">Payment 2</b-th>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
                        </svg>
                      </b-td>
                      <b-td class="text-center active">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th scope="row">Payment 3</b-th>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" stroke="currentColor" />
                        </svg>
                      </b-td>
                      <b-td class="text-center active">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th scope="row">Payment 4</b-th>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center active">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                      <b-td class="text-center">
                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                      </b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </b-card-body>
            </b-card>
            <b-card no-body>
              <b-row class="no-gutters">
                <b-col md="8">
                  <b-card-body>
                    <h4>Lifetime Membership</h4>
                    <p class="mt-2">If you will take advantage of the above-listed amenities, classes, and services, Life Time's membership fees may be worth the cost.</p>
                    <div class="mb-5 pt-2">
                      <p class="line-around text-secondary mb-0"><span class="line-around-1">Included Features</span></p>
                    </div>
                    <b-row>
                      <b-col class="col-lg-6 col-md-6 col-sm-12">
                        <div class="d-flex align-items-center">
                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <div class="ms-2">Private forum access</div>
                        </div>
                      </b-col>
                      <b-col class="col-lg-6 col-md-6 col-sm-12">
                        <div class="d-flex align-items-center">
                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <div class="ms-2">Private forum access</div>
                        </div>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col class="col-lg-6 col-md-6 col-sm-12">
                        <div class="d-flex align-items-center">
                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <div class="ms-2">Private forum access</div>
                        </div>
                      </b-col>
                      <b-col class="col-lg-6 col-md-6 col-sm-12">
                        <div class="d-flex align-items-center">
                          <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <div class="ms-2">Private forum access</div>
                        </div>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-col>
                <b-col md="4">
                  <b-card class="text-center h-100 iq-single-card">
                    <div class="d-flex align-items-center justify-content-center mb-2">
                      <h1 class="card-title pricing-card-title mb-0">$599</h1>
                      <small class="ms-1 text-muted fw-light">USD</small>
                    </div>
                    <div class="font-medium text-center text-secondary">
                      <div>No monthly subscription,</div>
                      <div>you only pay once.</div>
                    </div>
                    <b-button pill variant="primary">Get Started</b-button>
                  </b-card>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="iq-star-inserted row-cols-1 row-cols-md-2 row-cols-lg-3 mb-4 mt-4 text-center">
          <b-col class="iq-star-inserted-1">
            <b-card class="my-5">
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
              <b-button pill variant="primary w-100">Get Started</b-button>
            </b-card>
          </b-col>
          <b-col class="iq-star-inserted-2">
            <b-card class="mb-0 shadow-lg">
              <h2>
                <span class="badge rounded-pill bg-soft-primary mb-4"><small class="text-uppercase px-3">Popular</small></span>
              </h2>
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
              <b-button pill variant="primary w-100">Get Started</b-button>
            </b-card>
          </b-col>
          <b-col class="iq-star-inserted-3">
            <b-card class="my-5">
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
              <b-button pill variant="primary w-100">Get Started</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
