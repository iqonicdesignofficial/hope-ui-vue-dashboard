<template>
  <div class="section-block">
    <pre><code class="language-markup"> &#x3C;b-form&#x3E;
&#x3C;div class=&#x22;mb-3&#x22;&#x3E;
  &#x3C;b-form-group id=&#x22;input-group-1&#x22; label=&#x22;Email address:&#x22; label-for=&#x22;input-1&#x22; description=&#x22;We&#x27;ll never share your email with anyone else.&#x22;&#x3E;
    &#x3C;b-form-input id=&#x22;input-1&#x22; type=&#x22;email&#x22; required&#x3E;&#x3C;/b-form-input&#x3E;
  &#x3C;/b-form-group&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;mb-3&#x22;&#x3E;
  &#x3C;label for=&#x22;text-password&#x22;&#x3E;Password&#x3C;/label&#x3E;
  &#x3C;b-form-input type=&#x22;password&#x22; id=&#x22;text-password&#x22; aria-describedby=&#x22;password-help-block&#x22;&#x3E;&#x3C;/b-form-input&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;mb-3&#x22;&#x3E;
  &#x3C;b-form-checkbox class=&#x22;form-check-label&#x22;&#x3E;Check me out&#x3C;/b-form-checkbox&#x3E;
&#x3C;/div&#x3E;
&#x3C;fieldset class=&#x22;mb-3&#x22;&#x3E;
  &#x3C;legend&#x3E;Radios buttons&#x3C;/legend&#x3E;
  &#x3C;b-form-radio name=&#x22;radios&#x22; value=&#x22;A&#x22;&#x3E;Default radio &#x3C;/b-form-radio&#x3E;
  &#x3C;b-form-radio name=&#x22;radios&#x22; value=&#x22;B&#x22;&#x3E;Another radio &#x3C;/b-form-radio&#x3E;
&#x3C;/fieldset&#x3E;
&#x3C;div class=&#x22;mb-3&#x22;&#x3E;
  &#x3C;label class=&#x22;form-label&#x22; for=&#x22;customFile&#x22;&#x3E;Upload&#x3C;/label&#x3E;
  &#x3C;input type=&#x22;file&#x22; class=&#x22;form-control&#x22; id=&#x22;customFile&#x22; /&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;mb-3 form-check form-switch&#x22;&#x3E;
  &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22; id=&#x22;flexSwitchCheckChecked&#x22; checked=&#x22;&#x22; /&#x3E;
  &#x3C;label class=&#x22;form-check-label&#x22; for=&#x22;flexSwitchCheckChecked&#x22;&#x3E;Checked switch checkbox input&#x3C;/label&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;mb-3&#x22;&#x3E;
  &#x3C;label for=&#x22;customRange3&#x22; class=&#x22;form-label&#x22;&#x3E;Example range&#x3C;/label&#x3E;
  &#x3C;b-form-input id=&#x22;range&#x22; type=&#x22;range&#x22; min=&#x22;0&#x22; max=&#x22;5&#x22;&#x3E;&#x3C;/b-form-input&#x3E;
&#x3C;/div&#x3E;
&#x3C;b-button variant=&#x22;primary&#x22;&#x3E;Submit&#x3C;/b-button&#x3E;
&#x3C;/b-form&#x3E;
        </code></pre>
  </div>
</template>
