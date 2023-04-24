<template>
  <b-row>
    <b-col lg="6" sm="12">
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Basic Form</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group>
              <label for="input-01" class="form-label">Email address:</label>
              <b-form-input id="input-01"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-02" class="form-label">Password:</label>
              <b-form-input id="input-02" type="password"></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox>Remember me</b-form-checkbox>
            </b-form-group>
            <div class="d-flex gap-2 flex-wrap">
              <b-button variant="primary">Submit</b-button>
              <b-button variant="danger">Cancel</b-button>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Form Grid</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-row>
              <b-col>
                <b-form-input placeholder="First Name"></b-form-input>
              </b-col>
              <b-col>
                <b-form-input type="text" placeholder="Last Name"></b-form-input>
              </b-col>
            </b-row>
          </b-form>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Input</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group>
              <label for="input-101" class="form-label">Input Text</label>
              <b-form-input id="input-101" type="text" placeholder="Mark Jhon"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-102" class="form-label">Email Input</label>
              <b-form-input id="input-102" type="email" placeholder="markjhon@gmail.com"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-103" class="form-label">Url Input </label>
              <b-form-input id="input-103" type="url" placeholder="https://getbootstrap.com"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-104" class="form-label">Teliphone Input </label>
              <b-form-input id="input-104" type="tel" placeholder="1-(555)-555-5555"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-105" class="form-label">Number Input </label>
              <b-form-input id="input-105" type="number" placeholder="2356"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-106" class="form-label">Password Input </label>
              <b-form-input id="input-106" type="password" :value="'markjhon123'">markjhon123</b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-107" class="form-label">Date Input </label>
              <b-form-input id="input-107" type="date" placeholder="2019-12-18"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-108" class="form-label">Week Input </label>
              <b-form-input id="input-108" type="text" placeholder="2019-W46"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-109" class="form-label">Time Input </label>
              <b-form-input id="input-109" type="time" placeholder="13:45"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-110" class="form-label">Date and Time Input </label>
              <b-form-input id="input-110" type="date" placeholder="2019-12-19T13:45:00"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-111" class="form-label">Example textarea </label>
              <b-form-textarea id="input-111" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
            </b-form-group>
            <div class="d-flex gap-2 flex-wrap">
              <b-button variant="primary">Submit</b-button>
              <b-button variant="danger">Cancel</b-button>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Input Size</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group>
              <label for="input-201" class="form-label">Small</label>
              <b-form-input id="input-201" size="sm" placeholder="size=sm"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-202" class="form-label">Default</label>
              <b-form-input id="input-202" placeholder="Mark Jhon"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-203" class="form-label">Large</label>
              <b-form-input id="input-203" size="lg" placeholder="size=lg"></b-form-input>
            </b-form-group>
          </b-form>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Select Size</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group>
              <label for="input-204" class="form-label">Small</label>
              <b-form-select :options="options01" size="sm" id="input-204"></b-form-select>
            </b-form-group>
            <b-form-group>
              <label for="input-205" class="form-label">Default</label>
              <b-form-select :options="options01" id="input-205"></b-form-select>
            </b-form-group>
            <b-form-group>
              <label for="input-206" class="form-label">Large</label>
              <b-form-select :options="options01" size="lg" id="input-206"></b-form-select>
            </b-form-group>
          </b-form>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6" sm="12">
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Horizontal Form</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group>
              <b-row class="align-items-center">
                <b-col sm="3">
                  <label for="input-1101" class="form-label mb-0">Email:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input placeholder="Enter Your Email" id="input-1101"></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group>
              <b-row class="align-items-center">
                <b-col sm="3">
                  <label for="input-1102" class="form-label mb-0">Password:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input type="password" placeholder="Enter Your Password" id="input-1102"></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox>Remember me</b-form-checkbox>
            </b-form-group>
            <div class="d-flex gap-2 flex-wrap">
              <b-button variant="primary">Submit</b-button>
              <b-button variant="danger">Cancel</b-button>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Form Row</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-row>
              <b-col>
                <b-form-input placeholder="First Name"></b-form-input>
              </b-col>
              <b-col>
                <b-form-input placeholder="Last Name"></b-form-input>
              </b-col>
            </b-row>
          </b-form>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Input</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group>
              <label class="form-label">Disabled Input</label>
              <b-form-input disabled placeholder="John Carter"></b-form-input>
            </b-form-group>
          </b-form>
          <b-card-body>
            <b-form>
              <b-form-group>
                <b-row class="align-items-center">
                  <b-col sm="3">
                    <label for="input-2201" class="form-label mb-0">Email:</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-input placeholder="Enter Your Email" id="input-2201"></b-form-input>
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group>
                <b-row class="align-items-center">
                  <b-col sm="3">
                    <label for="input-2202" class="form-label mb-0">Password:</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-input type="password" placeholder="Enter Your Password" id="input-2202"></b-form-input>
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox>Remember me</b-form-checkbox>
              </b-form-group>
              <div class="d-flex gap-2 flex-wrap">
                <b-button variant="primary">Submit</b-button>
                <b-button variant="danger">Cancel</b-button>
              </div>
            </b-form>
          </b-card-body>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Form Row</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group>
              <label for="input-1301" class="form-label">Readonly</label>
              <b-form-input readonly id="input-1301" disabled placeholder="John Carter"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-1302" class="form-label">Input Color</label>
              <b-form-input id="input-1302" type="color" class="w-100"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-1303" class="form-label">Select input</label>
              <b-form-select :options="ageOptions" id="input-1303"></b-form-select>
            </b-form-group>
            <b-form-group>
              <label for="input-1304" class="form-label">Select Input New</label>
              <b-form-select :options="ageOptions" id="input-1304"></b-form-select>
            </b-form-group>
            <b-form-group>
              <label for="input-1305" class="form-label">Default</label>
              <b-form-select :options="options01" id="input-1305" :select-size="4"></b-form-select>
            </b-form-group>
            <b-form-group>
              <label for="input-1306" class="form-label">Example multiple select</label>
              <b-form-select :options="options02" id="input-1306" multiple :select-size="4"></b-form-select>
            </b-form-group>
            <b-form-group>
              <label for="input-1307" class="form-label">Example multiple select</label>
              <b-form-input type="range" id="input-1307"></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox>Default Checkbox</b-form-checkbox>
              <b-form-checkbox value="true" aria-checked="true">Checked Checkbox</b-form-checkbox>
              <b-form-checkbox disabled>Default Checkbox</b-form-checkbox>
              <b-form-checkbox disabled value="true" aria-checked="true">Checked Checkbox</b-form-checkbox>
            </b-form-group>
            <b-form-group>
              <b-form-radio>Default Radio</b-form-radio>
              <b-form-radio value="true" aria-checked="true">Checked Radio</b-form-radio>
              <b-form-radio disabled>Default Radio</b-form-radio>
              <b-form-radio disabled value="true" aria-checked="true">Checked Radio</b-form-radio>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox switch>Default switch checkbox input</b-form-checkbox>
            </b-form-group>
            <div class="d-flex gap-2 flex-wrap">
              <b-button variant="primary">Submit</b-button>
              <b-button variant="danger">Cancel</b-button>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup>
const ageOptions = [
  { value: null, text: 'Please select your age' },
  { value: 'child', text: '0-18' },
  { value: 'Young', text: '19-30' },
  { value: 'adult', text: '31-49' },
  { value: 'senior-citizen', text: '50-99' }
]

const options01 = [
  { value: null, text: 'Please select options' },
  { value: '1', text: '1' },
  { value: '2', text: '2' },
  { value: '3', text: '3' },
  { value: '4', text: '4' }
]

const options02 = [
  { value: null, text: 'Please select options' },
  { value: '1', text: '1' },
  { value: '2', text: '2' },
  { value: '3', text: '3' },
  { value: '3', text: '4' },
  { value: '3', text: '5' },
  { value: '3', text: '6' },
  { value: '3', text: '7' },
  { value: '4', text: '8' }
]
</script>
