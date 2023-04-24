<template>
  <b-row>
    <b-col xl="3" lg="4">
      <b-card>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Add New User</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <form>
            <div class="form-group">
              <div class="profile-img-edit position-relative">
                <img src="@/assets/images/avatars/01.png" alt="profile-pic" class="theme-color-default-img profile-pic rounded avatar-100" loading="lazy" />
                <img src="@/assets/images/avatars/avtar_1.png" alt="profile-pic" class="theme-color-purple-img profile-pic rounded avatar-100" loading="lazy" />
                <img src="@/assets/images/avatars/avtar_2.png" alt="profile-pic" class="theme-color-blue-img profile-pic rounded avatar-100" loading="lazy" />
                <img src="@/assets/images/avatars/avtar_4.png" alt="profile-pic" class="theme-color-green-img profile-pic rounded avatar-100" loading="lazy" />
                <img src="@/assets/images/avatars/avtar_5.png" alt="profile-pic" class="theme-color-yellow-img profile-pic rounded avatar-100" loading="lazy" />
                <img src="@/assets/images/avatars/avtar_3.png" alt="profile-pic" class="theme-color-pink-img profile-pic rounded avatar-100" loading="lazy" />
                <div class="upload-icone bg-primary">
                  <svg class="upload-button" width="14" height="14" viewBox="0 0 24 24">
                    <path fill="#ffffff" d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
                  </svg>
                  <input class="file-upload" type="file" accept="image/*" />
                </div>
              </div>
              <div class="img-extension mt-3">
                <div class="d-inline-block align-items-center">
                  <span>Only</span>
                  <a href="javascript:void(0);">.jpg</a>
                  <a href="javascript:void(0);">.png</a>
                  <a href="javascript:void(0);">.jpeg</a>
                  <span> allowed</span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">User Role:</label>
              <select name="type" class="selectpicker form-control" data-style="py-0">
                <option>Select</option>
                <option>Web Designer</option>
                <option>Web Developer</option>
                <option>Tester</option>
                <option>Php Developer</option>
                <option>Ios Developer</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="furl">Facebook Url:</label>
              <input type="text" class="form-control" id="furl" placeholder="Facebook Url" />
            </div>
            <div class="form-group">
              <label class="form-label" for="turl">Twitter Url:</label>
              <input type="text" class="form-control" id="turl" placeholder="Twitter Url" />
            </div>
            <div class="form-group">
              <label class="form-label" for="instaurl">Instagram Url:</label>
              <input type="text" class="form-control" id="instaurl" placeholder="Instagram Url" />
            </div>
            <div class="form-group mb-0">
              <label class="form-label" for="lurl">Linkedin Url:</label>
              <input type="text" class="form-control" id="lurl" placeholder="Linkedin Url" />
            </div>
          </form>
        </b-card-body>
      </b-card>
    </b-col>
    <div class="col-xl-9 col-lg-8">
      <b-card>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">New User Information</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="new-user-info">
            <form>
              <b-row>
                <b-col md="6" class="form-group">
                  <label class="form-label" for="fname">First Name:</label>
                  <input type="text" class="form-control" id="fname" placeholder="First Name" />
                </b-col>
                <b-col md="6" class="form-group">
                  <label class="form-label" for="lname">Last Name:</label>
                  <input type="text" class="form-control" id="lname" placeholder="Last Name" />
                </b-col>
                <b-col md="6" class="form-group">
                  <label class="form-label" for="add1">Street Address 1:</label>
                  <input type="text" class="form-control" id="add1" placeholder="Street Address 1" />
                </b-col>
                <b-col md="6" class="form-group">
                  <label class="form-label" for="add2">Street Address 2:</label>
                  <input type="text" class="form-control" id="add2" placeholder="Street Address 2" />
                </b-col>
                <b-col md="6" class="form-group">
                  <label class="form-label" for="cname">Company Name:</label>
                  <input type="text" class="form-control" id="cname" placeholder="Company Name" />
                </b-col>
                <b-col sm="12" class="form-group">
                  <label class="form-label">Country:</label>
                  <select name="type" class="selectpicker form-control" data-style="py-0">
                    <option>Select Country</option>
                    <option>Caneda</option>
                    <option>Noida</option>
                    <option>USA</option>
                    <option>India</option>
                    <option>Africa</option>
                  </select>
                </b-col>
                <b-col md="6" class="form-group">
                  <label class="form-label" for="mobno">Mobile Number:</label>
                  <input type="text" class="form-control" id="mobno" placeholder="Mobile Number" />
                </b-col>
                <b-col md="6" class="form-group">
                  <label class="form-label" for="altconno">Alternate Contact:</label>
                  <input type="text" class="form-control" id="altconno" placeholder="Alternate Contact" />
                </b-col>
                <b-col md="6" class="form-group">
                  <label class="form-label" for="email">Email:</label>
                  <input type="email" class="form-control" id="email" placeholder="Email" />
                </b-col>
                <b-col md="6" class="form-group">
                  <label class="form-label" for="pno">Pin Code:</label>
                  <input type="text" class="form-control" id="pno" placeholder="Pin Code" />
                </b-col>
                <b-col md="12" class="form-group">
                  <label class="form-label" for="city">Town/City:</label>
                  <input type="text" class="form-control" id="city" placeholder="Town/City" />
                </b-col>
              </b-row>
              <hr />
              <h5 class="mb-3">Security</h5>
              <div class="row">
                <b-col md="12" class="form-group">
                  <label class="form-label" for="uname">User Name:</label>
                  <input type="text" class="form-control" id="uname" placeholder="User Name" />
                </b-col>
                <b-col md="6" class="form-group">
                  <label class="form-label" for="pass">Password:</label>
                  <input type="password" class="form-control" id="pass" placeholder="Password" />
                </b-col>
                <b-col md="6" class="form-group">
                  <label class="form-label" for="rpass">Repeat Password:</label>
                  <input type="password" class="form-control" id="rpass" placeholder="Repeat Password " />
                </b-col>
              </div>
              <div class="checkbox">
                <label class="form-label"><input class="form-check-input me-2" type="checkbox" value="" id="flexchexked" />Enable Two-Factor-Authentication</label>
              </div>
              <button type="submit" class="btn btn-primary">Add New User</button>
            </form>
          </div>
        </b-card-body>
      </b-card>
    </div>
  </b-row>
</template>
