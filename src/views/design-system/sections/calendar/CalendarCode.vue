<template>
  <div class="section-block">
    <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;flat-picker v-model=&#x22;date&#x22; :config=&#x22;{ minDate: &#x27;today&#x27;, dateFormat: &#x27;Y-m-d&#x27; }&#x22; name=&#x22;date&#x22; placeholder=&#x22;date picker&#x22; class=&#x22;form-control&#x22;&#x3E;&#x3C;/flat-picker&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-input-group class=&#x22;form-group form-group-filled&#x22;&#x3E;
      &#x3C;flat-picker v-model=&#x22;rangedate&#x22; :config=&#x22;{ mode: &#x27;range&#x27;, minDate: &#x27;today&#x27;, dateFormat: &#x27;Y-m-d&#x27; }&#x22; name=&#x22;date&#x22; placeholder=&#x22;date range picker&#x22; class=&#x22;form-control&#x22;&#x3E;&#x3C;/flat-picker&#x3E;
    &#x3C;/b-input-group&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;flat-picker v-model=&#x22;inlinedate&#x22; :config=&#x22;{ mode: &#x27;range&#x27;, minDate: &#x27;today&#x27;, dateFormat: &#x27;Y-m-d&#x27;, inline: true }&#x22; name=&#x22;date&#x22; placeholder=&#x22;date range picker&#x22; class=&#x22;form-control d-none&#x22;&#x3E;&#x3C;/flat-picker&#x3E;
  &#x3C;/div&#x3E;</code></pre>
  </div>
</template>
