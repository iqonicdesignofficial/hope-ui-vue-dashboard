<template>
  <div class="row">
    <div class="col-md-12 col-lg-12">
      <div class="row row-cols-1" data-aos="fade-up" data-aos-delay="800">
        <div class="d-slider1 overflow-hidden swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
          <Swiper
            class="p-0 m-0 mb-2 swiper-wrapper list-inline"
            :modules="modules"
            :slide-per-view="4"
            :space-between="32"
            :breakpoints="{
              320: { slidesPerView: 1 },
              550: { slidesPerView: 2 },
              991: { slidesPerView: 3 },
              1400: { slidesPerView: 3 },
              1500: { slidesPerView: 4 },
              1920: { slidesPerView: 4 },
              2040: { slidesPerView: 7 },
              2440: { slidesPerView: 8 }
            }"
            :navigation="{
              nextEl: '#blog-tranding-next',
              prevEl: '#blog-tranding-prev'
            }">
            <SwiperSlide class="swiper-slide card card-slide" v-for="(item, index) in swiperItems" :key="index">
              <b-card-body>
                <div class="progress-widget">
                  <analytics-widget :index="index" :title="item.title" :size="item.size" :sub-title="item.subTitle" :value="item.value" :color="item.color" :is-profit="item.isProfit">
                    <svg class="card-slie-arrow" width="24" height="24px" viewBox="0 0 24 24" v-if="index % 2">
                      <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z"></path>
                    </svg>
                    <svg class="card-slie-arrow" width="24" height="24" viewBox="0 0 24 24" v-else>
                      <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"></path>
                    </svg>
                  </analytics-widget>
                  <div class="progress-detail">
                    <p class="mb-2">{{ item.subTitle }}</p>
                    <h4 class="counter">{{ item.amount }}</h4>
                  </div>
                </div>
              </b-card-body>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-button swiper-button-next" id="blog-tranding-next"></div>
          <div class="swiper-button swiper-button-prev" id="blog-tranding-prev"></div>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-lg-8">
      <div class="row">
        <div class="col-md-12" data-aos="fade-up" data-aos-delay="800">
          <div class="card aos-init aos-animate">
            <div class="flex-wrap card-header d-flex justify-content-between align-items-center">
              <div class="header-title">
                <h4 class="card-title">$855.8K</h4>
                <p class="mb-0">Gross Sales</p>
              </div>
              <div class="d-flex align-items-center align-self-center">
                <div class="d-flex align-items-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24" fill="currentColor">
                    <g>
                      <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                    </g>
                  </svg>
                  <div class="ms-2">
                    <span class="text-secondary">Sales</span>
                  </div>
                </div>
                <div class="d-flex align-items-center ms-3 text-info">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24" fill="currentColor">
                    <g>
                      <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                    </g>
                  </svg>
                  <div class="ms-2">
                    <span class="text-secondary">Cost</span>
                  </div>
                </div>
              </div>
              <div class="dropdown">
                <a href="#" class="text-secondary dropdown-toggle" id="dropdownMenuButton22" data-bs-toggle="dropdown" aria-expanded="false"> This Week </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton22">
                  <li><a class="dropdown-item" href="#">This Week</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <apexchart :height="245" type="area" id="d-main" :options="grossSaleChart.options" :series="grossSaleChart.series" />
            </div>
          </div>
        </div>
        <div class="col-md-12 col-xl-6">
          <div class="card" data-aos="fade-up" data-aos-delay="1000">
            <div class="card-header d-flex justify-content-between flex-wrap">
              <div class="header-title">
                <h4 class="card-title">Earnings</h4>
              </div>
              <div class="dropdown">
                <a href="#" class="text-secondary dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> This Week </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">This Week</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <apexchart :height="230" type="radialBar" class="col-md-8 col-lg-8" id="myChart1" :options="earningChart.options" :series="earningChart.series" />
                <div class="d-grid gap col-md-4 col-lg-4">
                  <div class="d-flex align-items-start">
                    <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="#3a57e8">
                      <g>
                        <circle cx="12" cy="12" r="8" fill="#3a57e8"></circle>
                      </g>
                    </svg>
                    <div class="ms-3">
                      <span class="text-secondary">Fashion</span>
                      <h6>251K</h6>
                    </div>
                  </div>
                  <div class="d-flex align-items-start">
                    <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="#4bc7d2">
                      <g>
                        <circle cx="12" cy="12" r="8" fill="#4bc7d2"></circle>
                      </g>
                    </svg>
                    <div class="ms-3">
                      <span class="text-secondary">Accessories</span>
                      <h6>176K</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-xl-6">
          <div class="card" data-aos="fade-up" data-aos-delay="1200">
            <div class="card-header d-flex justify-content-between flex-wrap">
              <div class="header-title">
                <h4 class="card-title">Conversions</h4>
              </div>
              <div class="dropdown">
                <a href="#" class="text-secondary dropdown-toggle" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false"> This Week </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton3">
                  <li><a class="dropdown-item" href="#">This Week</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <apexchart :height="195" type="bar" class="dactivity1" id="dactivity1" :options="conversionChart.options" :series="conversionChart.series" />
            </div>
          </div>
        </div>
        <div class="col-md-12 col-xl-12">
          <div class="overflow-hidden card aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
            <div class="flex-wrap card-header d-flex justify-content-between">
              <div class="header-title">
                <h4 class="mb-2 card-title">Enterprise Clients</h4>
                <p class="mb-0">
                  <svg class="me-2 text-primary" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                  </svg>
                  15 new acquired this month
                </p>
              </div>
              <div class="dropdown">
                <span class="dropdown-toggle" id="dropdownMenuButton7" data-bs-toggle="dropdown" aria-expanded="false" role="button"> </span>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton7">
                  <a class="dropdown-item" href="javascript:void(0);">Action</a>
                  <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                  <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                </div>
              </div>
            </div>
            <div class="p-0 card-body">
              <div class="mt-4 table-responsive">
                <table id="basic-table" class="table mb-0 table-striped" role="grid">
                  <thead>
                    <tr>
                      <th>COMPANIES</th>
                      <th>CONTACTS</th>
                      <th>ORDER</th>
                      <th>COMPLETION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="@/assets/images/shapes/01.png" alt="profile" />
                          <h6>Addidis Sportwear</h6>
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
                      <td>$14,000</td>
                      <td>
                        <div class="mb-2 d-flex align-items-center">
                          <h6>60%</h6>
                        </div>
                        <div class="shadow-none progress bg-soft-primary w-100" style="height: 4px">
                          <div class="progress-bar bg-primary" data-toggle="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%; transition: width 2s ease 0s"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="@/assets/images/shapes/05.png" alt="profile" />
                          <h6>Netflixer Platforms</h6>
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
                      <td>$30,000</td>
                      <td>
                        <div class="mb-2 d-flex align-items-center">
                          <h6>25%</h6>
                        </div>
                        <div class="shadow-none progress bg-soft-primary w-100" style="height: 4px">
                          <div class="progress-bar bg-primary" data-toggle="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%; transition: width 2s ease 0s"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="@/assets/images/shapes/02.png" alt="profile" />
                          <h6>Shopifi Stores</h6>
                        </div>
                      </td>
                      <td>
                        <div class="iq-media-group iq-media-group-1">
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                          </a>
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">TP</div>
                          </a>
                        </div>
                      </td>
                      <td>$8,500</td>
                      <td>
                        <div class="mb-2 d-flex align-items-center">
                          <h6>100%</h6>
                        </div>
                        <div class="shadow-none progress bg-soft-success w-100" style="height: 4px">
                          <div class="progress-bar bg-success" data-toggle="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%; transition: width 2s ease 0s"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="@/assets/images/shapes/03.png" alt="profile" />
                          <h6>Bootstrap Technologies</h6>
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
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">TP</div>
                          </a>
                        </div>
                      </td>
                      <td>$20,500</td>
                      <td>
                        <div class="mb-2 d-flex align-items-center">
                          <h6>100%</h6>
                        </div>
                        <div class="shadow-none progress bg-soft-success w-100" style="height: 4px">
                          <div class="progress-bar bg-success" data-toggle="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%; transition: width 2s ease 0s"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="@/assets/images/shapes/04.png" alt="profile" />
                          <h6>Community First</h6>
                        </div>
                      </td>
                      <td>
                        <div class="iq-media-group iq-media-group-1">
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">MM</div>
                          </a>
                        </div>
                      </td>
                      <td>$9,800</td>
                      <td>
                        <div class="mb-2 d-flex align-items-center">
                          <h6>75%</h6>
                        </div>
                        <div class="shadow-none progress bg-soft-primary w-100" style="height: 4px">
                          <div class="progress-bar bg-primary" data-toggle="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%; transition: width 2s ease 0s"></div>
                        </div>
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
    <div class="col-md-12 col-lg-4">
      <div class="row">
        <div class="col-md-12 col-lg-12" data-aos="fade-up" data-aos-delay="800">
          <div class="card credit-card-widget" data-aos="fade-up" data-aos-delay="700">
            <div class="card-header pb-4 border-0">
              <div class="p-4 primary-gradient-card rounded border border-white">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 class="font-weight-bold">VISA</h5>
                    <p class="mb-0">PREMIUM ACCOUNT</p>
                  </div>
                  <div class="master-card-content">
                    <svg class="master-card-1" width="60" height="60" viewBox="0 0 24 24">
                      <path fill="#ffffff" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                    <svg class="master-card-2" width="60" height="60" viewBox="0 0 24 24">
                      <path fill="#ffffff" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                  </div>
                </div>
                <div class="my-4">
                  <div class="card-number">
                    <span class="fs-5 me-2">5789</span>
                    <span class="fs-5 me-2">****</span>
                    <span class="fs-5 me-2">****</span>
                    <span class="fs-5">2847</span>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-2 justify-content-between">
                  <p class="mb-0">Card holder</p>
                  <p class="mb-0">Expire Date</p>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <h6>Mike Smith</h6>
                  <h6 class="ms-5">06/11</h6>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex align-itmes-center flex-wrap mb-4">
                <div class="d-flex align-itmes-center me-0 me-md-4">
                  <div>
                    <div class="p-3 mb-2 rounded bg-soft-primary">
                      <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9303 7C16.9621 6.92913 16.977 6.85189 16.9739 6.77432H17C16.8882 4.10591 14.6849 2 12.0049 2C9.325 2 7.12172 4.10591 7.00989 6.77432C6.9967 6.84898 6.9967 6.92535 7.00989 7H6.93171C5.65022 7 4.28034 7.84597 3.88264 10.1201L3.1049 16.3147C2.46858 20.8629 4.81062 22 7.86853 22H16.1585C19.2075 22 21.4789 20.3535 20.9133 16.3147L20.1444 10.1201C19.676 7.90964 18.3503 7 17.0865 7H16.9303ZM15.4932 7C15.4654 6.92794 15.4506 6.85153 15.4497 6.77432C15.4497 4.85682 13.8899 3.30238 11.9657 3.30238C10.0416 3.30238 8.48184 4.85682 8.48184 6.77432C8.49502 6.84898 8.49502 6.92535 8.48184 7H15.4932ZM9.097 12.1486C8.60889 12.1486 8.21321 11.7413 8.21321 11.2389C8.21321 10.7366 8.60889 10.3293 9.097 10.3293C9.5851 10.3293 9.98079 10.7366 9.98079 11.2389C9.98079 11.7413 9.5851 12.1486 9.097 12.1486ZM14.002 11.2389C14.002 11.7413 14.3977 12.1486 14.8858 12.1486C15.3739 12.1486 15.7696 11.7413 15.7696 11.2389C15.7696 10.7366 15.3739 10.3293 14.8858 10.3293C14.3977 10.3293 14.002 10.7366 14.002 11.2389Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ms-3">
                    <h5>1153</h5>
                    <small class="mb-0">Products</small>
                  </div>
                </div>
                <div class="d-flex align-itmes-center">
                  <div>
                    <div class="p-3 mb-2 rounded bg-soft-info">
                      <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1213 11.2331H16.8891C17.3088 11.2331 17.6386 10.8861 17.6386 10.4677C17.6386 10.0391 17.3088 9.70236 16.8891 9.70236H14.1213C13.7016 9.70236 13.3719 10.0391 13.3719 10.4677C13.3719 10.8861 13.7016 11.2331 14.1213 11.2331ZM20.1766 5.92749C20.7861 5.92749 21.1858 6.1418 21.5855 6.61123C21.9852 7.08067 22.0551 7.7542 21.9652 8.36549L21.0159 15.06C20.8361 16.3469 19.7569 17.2949 18.4879 17.2949H7.58639C6.25742 17.2949 5.15828 16.255 5.04837 14.908L4.12908 3.7834L2.62026 3.51807C2.22057 3.44664 1.94079 3.04864 2.01073 2.64043C2.08068 2.22305 2.47038 1.94649 2.88006 2.00874L5.2632 2.3751C5.60293 2.43735 5.85274 2.72207 5.88272 3.06905L6.07257 5.35499C6.10254 5.68257 6.36234 5.92749 6.68209 5.92749H20.1766ZM7.42631 18.9079C6.58697 18.9079 5.9075 19.6018 5.9075 20.459C5.9075 21.3061 6.58697 22 7.42631 22C8.25567 22 8.93514 21.3061 8.93514 20.459C8.93514 19.6018 8.25567 18.9079 7.42631 18.9079ZM18.6676 18.9079C17.8282 18.9079 17.1487 19.6018 17.1487 20.459C17.1487 21.3061 17.8282 22 18.6676 22C19.4969 22 20.1764 21.3061 20.1764 20.459C20.1764 19.6018 19.4969 18.9079 18.6676 18.9079Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ms-3">
                    <h5>81K</h5>
                    <small class="mb-0">Order Served</small>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <div class="d-flex justify-content-between flex-wrap">
                  <h2 class="mb-2">$405,012,300</h2>
                  <div>
                    <span class="badge bg-success rounded-pill">YoY 24%</span>
                  </div>
                </div>
                <p class="text-info">Life time sales</p>
              </div>
              <div class="d-grid grid-cols-2 gap">
                <button class="btn btn-primary text-uppercase p-2">SUMMARY</button>
                <button class="btn btn-info text-uppercase p-2">ANALYTICS</button>
              </div>
            </div>
          </div>
          <div class="card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-body d-flex justify-content-around text-center">
              <div>
                <h2 class="mb-2">750<small>K</small></h2>
                <p class="mb-0 text-secondary">Website Visitors</p>
              </div>
              <hr class="hr-vertial" />
              <div>
                <h2 class="mb-2">7,500</h2>
                <p class="mb-0 text-secondary">New Customers</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-12">
          <div class="card aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
            <div class="flex-wrap card-header d-flex justify-content-between">
              <div class="header-title">
                <h4 class="mb-2 card-title">Activity overview</h4>
                <p class="mb-0">
                  <svg class="me-2" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#17904b" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"></path>
                  </svg>
                  16% this month
                </p>
              </div>
            </div>
            <div class="card-body">
              <div class="mb-2 d-flex profile-media align-items-top">
                <div class="mt-1 profile-dots-pills border-primary"></div>
                <div class="ms-4">
                  <h6 class="mb-1">$2400, Purchase</h6>
                  <span class="mb-0">11 JUL 8:10 PM</span>
                </div>
              </div>
              <div class="mb-2 d-flex profile-media align-items-top">
                <div class="mt-1 profile-dots-pills border-primary"></div>
                <div class="ms-4">
                  <h6 class="mb-1">New order #8744152</h6>
                  <span class="mb-0">11 JUL 11 PM</span>
                </div>
              </div>
              <div class="mb-2 d-flex profile-media align-items-top">
                <div class="mt-1 profile-dots-pills border-primary"></div>
                <div class="ms-4">
                  <h6 class="mb-1">Affiliate Payout</h6>
                  <span class="mb-0">11 JUL 7:64 PM</span>
                </div>
              </div>
              <div class="mb-2 d-flex profile-media align-items-top">
                <div class="mt-1 profile-dots-pills border-primary"></div>
                <div class="ms-4">
                  <h6 class="mb-1">New user added</h6>
                  <span class="mb-0">11 JUL 1:21 AM</span>
                </div>
              </div>
              <div class="mb-1 d-flex profile-media align-items-top">
                <div class="mt-1 profile-dots-pills border-primary"></div>
                <div class="ms-4">
                  <h6 class="mb-1">Product added</h6>
                  <span class="mb-0">11 JUL 4:50 AM</span>
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
import { onMounted, ref } from 'vue'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import AnalyticsWidget from '@/components/widgets/AnalyticsWidget.vue'
import AOS from 'aos'
export default {
  components: {
    Swiper,
    SwiperSlide,
    AnalyticsWidget
  },
  setup() {
    const modules = [Navigation]
    const grossSaleChart = ref({
      series: [
        {
          name: 'total',
          data: [94, 80, 94, 80, 94, 80, 94]
        },
        {
          name: 'pipline',
          data: [72, 60, 84, 60, 74, 60, 78]
        }
      ],
      options: {
        chart: {
          fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          height: 245,
          type: 'area',
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: false
          }
        },
        colors: ['#3a57e8', '#079aa2'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            minWidth: 19,
            maxWidth: 19,
            style: {
              colors: '#8A92A6'
            },
            offsetX: -5
          }
        },
        legend: {
          show: false
        },
        xaxis: {
          labels: {
            minHeight: 22,
            maxHeight: 22,
            show: true,
            style: {
              colors: '#8A92A6'
            }
          },
          lines: {
            show: false // or just here to disable only x axis grids
          },
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug']
        },
        grid: {
          show: false
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 50, 80],
            colors: ['#3a57e8', '#4bc7d2']
          }
        },
        tooltip: {
          enabled: true
        }
      }
    })
    const earningChart = ref({
      series: [55, 75],
      options: {
        chart: {
          height: 260,
          type: 'radialBar'
        },
        colors: ['#4bc7d2', '#3a57e8'],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 10,
              size: '50%'
            },
            track: {
              margin: 10,
              strokeWidth: '50%'
            },
            dataLabels: {
              show: false
            }
          }
        }
      }
    })
    const conversionChart = ref({
      series: [
        {
          name: 'Successful deals',
          data: [30, 50, 35, 60, 40, 60, 60, 30, 50, 35]
        },
        {
          name: 'Failed deals',
          data: [40, 50, 55, 50, 30, 80, 30, 40, 50, 55]
        }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 230,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        colors: ['#3a57e8', '#4bc7d2'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '28%',
            endingShape: 'rounded',
            borderRadius: 5
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'M', 'T', 'W'],
          labels: {
            minHeight: 20,
            maxHeight: 20,
            style: {
              colors: '#8A92A6'
            }
          }
        },
        yaxis: {
          title: {
            text: ''
          },
          labels: {
            minWidth: 19,
            maxWidth: 19,
            style: {
              colors: '#8A92A6'
            }
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      }
    })
    const swiperItems = ref([
      {
        size: 90,
        amount: '560K',
        subTitle: 'Total Sales',
        color: 'primary'
      },
      {
        size: 80,
        amount: '185K',
        subTitle: 'Total Profit',
        color: 'info'
      },
      {
        size: 70,
        amount: '375K',
        subTitle: 'Total Cost',
        color: 'primary'
      },
      {
        size: 60,
        amount: '742K',
        subTitle: 'Revenue',
        color: 'info'
      },
      {
        size: 50,
        amount: '150K',
        subTitle: 'Net Income',
        color: 'primary'
      },
      {
        size: 40,
        amount: '4600',
        subTitle: 'Today',
        color: 'info'
      },
      {
        size: 30,
        amount: '11.2M',
        subTitle: 'Members',
        color: 'primary'
      }
    ])
    onMounted(() => {
      AOS.init({
        disable: function () {
          var maxWidth = 996
          return window.innerWidth < maxWidth
        },
        once: true,
        duration: 800
      })
    })
    return { modules, grossSaleChart, earningChart, conversionChart, swiperItems }
  }
}
</script>
