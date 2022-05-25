<template>
  <fieldset>
    <div class="form-card text-start">
      <b-row>
        <div class="col-7">
          <h3 class="mb-4">Personal Information:</h3>
        </div>
        <div class="col-5">
          <h2 class="steps">Step 2 - 4</h2>
        </div>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group label="First Name: *">
            <b-form-input type="text" class="form-control" name="fname" placeholder="First Name" />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Last Name: *">
            <b-form-input type="text" class="form-control" name="lname" placeholder="Last Name" />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Contact No.: *">
            <b-form-input type="text" class="form-control" name="phno" placeholder="Contact No." />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Alternate Contact No.: *">
            <b-form-input type="text" class="form-control" name="phno_2" placeholder="Alternate Contact No." />
          </b-form-group>
        </b-col>
      </b-row>
    </div>
    <a href="#payment" @click="changeTab(3)" class="btn btn-primary next action-button float-end" value="Next">Next</a>
    <a href="#account" @click="changeTab(1)" class="btn btn-dark previous action-button-previous float-end me-1" value="Previous">Previous</a>
  </fieldset>
</template>
<script>
export default {
  name: 'PersonalComponent',
  setup(props, { emit }) {
    const changeTab = (value) => {
      emit('onClick', value)
    }
    return { props, changeTab }
  }
}
</script>
