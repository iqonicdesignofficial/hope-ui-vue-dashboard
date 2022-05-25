<template>
  <div class="bd-example">
    <b-input-group class="mb-3" prepend="@">
      <b-form-input placeholder="Username"></b-form-input>
    </b-input-group>
    <b-input-group class="mb-3" append="@example.com">
      <b-form-input placeholder="Recipient's username"></b-form-input>
    </b-input-group>
    <label for="basic-url" class="form-label">Your vanity URL</label>
    <b-input-group class="mb-3" prepend="https://example.com/users/">
      <b-form-input placeholder="Username"></b-form-input>
    </b-input-group>
    <b-input-group class="mb-3" prepend="$" append=".00">
      <b-form-input></b-form-input>
    </b-input-group>
    <b-input-group class="mb-3" prepend="With textarea">
      <b-form-textarea></b-form-textarea>
    </b-input-group>
  </div>
</template>
<script>
export default {
  setup() {}
}
</script>
