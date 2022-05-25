<template>
  <div class="section-block">
    <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
&#x3C;form&#x3E;
  &#x3C;fieldset disabled=&#x22;&#x22; aria-label=&#x22;Disabled fieldset example&#x22;&#x3E;
    &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
      &#x3C;b-form-group label=&#x22;Disabled input&#x22; label-for=&#x22;disabledTextInput&#x22;&#x3E;
        &#x3C;b-form-input placeholder=&#x22;Disabled input&#x22; id=&#x22;disabledTextInput&#x22; disabled&#x3E;&#x3C;/b-form-input&#x3E;
      &#x3C;/b-form-group&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
      &#x3C;label for=&#x22;disabledSelect&#x22; class=&#x22;form-label&#x22;&#x3E;Disabled select menu&#x3C;/label&#x3E;
      &#x3C;select id=&#x22;disabledSelect&#x22; class=&#x22;form-select&#x22;&#x3E;
        &#x3C;option&#x3E;Disabled select&#x3C;/option&#x3E;
      &#x3C;/select&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
      &#x3C;b-form-checkbox disabled&#x3E;Can&#x27;t check this&#x3C;/b-form-checkbox&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;fieldset class=&#x22;mb-3&#x22;&#x3E;
      &#x3C;legend&#x3E;Disabled radios buttons&#x3C;/legend&#x3E;
      &#x3C;b-form-radio name=&#x22;radios&#x22; value=&#x22;A&#x22; disabled&#x3E;Default radio &#x3C;/b-form-radio&#x3E;
      &#x3C;b-form-radio name=&#x22;radios&#x22; value=&#x22;B&#x22; disabled&#x3E;Another radio &#x3C;/b-form-radio&#x3E;
    &#x3C;/fieldset&#x3E;
    &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
      &#x3C;label class=&#x22;form-label&#x22; for=&#x22;disabledCustomFile&#x22;&#x3E;Upload&#x3C;/label&#x3E;
      &#x3C;input type=&#x22;file&#x22; class=&#x22;form-control&#x22; id=&#x22;disabledCustomFile&#x22; disabled=&#x22;&#x22; /&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;mb-3 form-check form-switch&#x22;&#x3E;
      &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22; id=&#x22;disabledSwitchCheckChecked&#x22; checked=&#x22;&#x22; disabled=&#x22;&#x22; /&#x3E;
      &#x3C;label class=&#x22;form-check-label&#x22; for=&#x22;disabledSwitchCheckChecked&#x22;&#x3E;Disabled checked switch checkbox input&#x3C;/label&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
      &#x3C;label for=&#x22;disabledRange&#x22; class=&#x22;form-label&#x22;&#x3E;Disabled range&#x3C;/label&#x3E;
      &#x3C;b-form-input id=&#x22;range&#x22; type=&#x22;range&#x22; min=&#x22;0&#x22; max=&#x22;5&#x22; disabled&#x3E;&#x3C;/b-form-input&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;b-button variant=&#x22;primary&#x22;&#x3E;Submit&#x3C;/b-button&#x3E;
  &#x3C;/fieldset&#x3E;
&#x3C;/form&#x3E;
  &#x3C;/div&#x3E;</code></pre>
  </div>
</template>
