<template>
  <div class="section-block">
    <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
&#x3C;b-form class=&#x22;row g-3&#x22;&#x3E;
  &#x3C;div class=&#x22;col-md-4&#x22;&#x3E;
    &#x3C;label for=&#x22;validationServer01&#x22; class=&#x22;form-label&#x22;&#x3E;First name&#x3C;/label&#x3E;
    &#x3C;b-form-input id=&#x22;input-live-feedback1&#x22; :state=&#x22;true&#x22; placeholder=&#x22;Mark&#x22; aria-describedby=&#x22; input-live-feedback&#x22;&#x3E;&#x3C;/b-form-input&#x3E;
    &#x3C;b-form-valid-feedback id=&#x22;input-live-feedback&#x22;&#x3E; Looks good! &#x3C;/b-form-valid-feedback&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;col-md-4&#x22;&#x3E;
    &#x3C;label for=&#x22;validationServer02&#x22; class=&#x22;form-label&#x22;&#x3E;Last name&#x3C;/label&#x3E;
    &#x3C;b-form-input id=&#x22;input-live-feedback1&#x22; :state=&#x22;true&#x22; placeholder=&#x22;Otto&#x22; aria-describedby=&#x22; input-live-feedback&#x22;&#x3E;&#x3C;/b-form-input&#x3E;
    &#x3C;b-form-valid-feedback id=&#x22;input-live-feedback&#x22;&#x3E; Looks good! &#x3C;/b-form-valid-feedback&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;col-md-4&#x22;&#x3E;
    &#x3C;label for=&#x22;validationServerUsername&#x22; class=&#x22;form-label&#x22;&#x3E;Username&#x3C;/label&#x3E;
    &#x3C;b-input-group prepend=&#x22;@&#x22;&#x3E;
      &#x3C;b-form-input id=&#x22;input-live-feedback1&#x22; :state=&#x22;false&#x22; placeholder=&#x22;Otto&#x22; aria-describedby=&#x22; input-live-feedback&#x22;&#x3E;&#x3C;/b-form-input&#x3E;
      &#x3C;b-form-invalid-feedback id=&#x22;input-live-feedback&#x22;&#x3E; Please choose a username. &#x3C;/b-form-invalid-feedback&#x3E;
    &#x3C;/b-input-group&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;col-md-6&#x22;&#x3E;
    &#x3C;label for=&#x22;validationServer03&#x22; class=&#x22;form-label&#x22;&#x3E;City&#x3C;/label&#x3E;
    &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control is-invalid&#x22; id=&#x22;validationServer03&#x22; required=&#x22;&#x22; /&#x3E;
    &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;Please provide a valid city.&#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;col-md-3&#x22;&#x3E;
    &#x3C;label for=&#x22;validationServer04&#x22; class=&#x22;form-label&#x22;&#x3E;State&#x3C;/label&#x3E;
    &#x3C;select class=&#x22;form-select is-invalid&#x22; id=&#x22;validationServer04&#x22; required=&#x22;&#x22;&#x3E;
      &#x3C;option selected=&#x22;&#x22; disabled=&#x22;&#x22; value=&#x22;&#x22;&#x3E;Choose...&#x3C;/option&#x3E;
      &#x3C;option&#x3E;...&#x3C;/option&#x3E;
    &#x3C;/select&#x3E;
    &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;Please select a valid state.&#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;col-md-3&#x22;&#x3E;
    &#x3C;label for=&#x22;validationServer05&#x22; class=&#x22;form-label&#x22;&#x3E;Zip&#x3C;/label&#x3E;
    &#x3C;b-form-input id=&#x22;input-live-feedback1&#x22; :state=&#x22;false&#x22; aria-describedby=&#x22; input-live-feedback&#x22;&#x3E;&#x3C;/b-form-input&#x3E;
    &#x3C;b-form-invalid-feedback id=&#x22;input-live-feedback&#x22;&#x3E; Please provide a valid zip.&#x3C;/b-form-invalid-feedback&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;col-12&#x22;&#x3E;
    &#x3C;div class=&#x22;form-check&#x22;&#x3E;
      &#x3C;input class=&#x22;form-check-input is-invalid&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22; id=&#x22;invalidCheck3&#x22; required=&#x22;&#x22; /&#x3E;
      &#x3C;label class=&#x22;form-check-label&#x22; for=&#x22;invalidCheck3&#x22;&#x3E; Agree to terms and conditions &#x3C;/label&#x3E;
      &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;You must agree before submitting.&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;col-12&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;primary&#x22;&#x3E;Submit form&#x3C;/b-button&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/b-form&#x3E;
&#x3C;/div&#x3E;</code></pre>
  </div>
</template>
