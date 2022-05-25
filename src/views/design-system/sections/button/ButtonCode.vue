<template>
  <div class="section-block">
    <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;primary&#x22;&#x3E;Default&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;primary&#x22; pill&#x3E;Rounded&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;primary&#x22; pill
      &#x3E;{{ &#x27;&#x27; }}
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;svg width=&#x22;20&#x22; fill=&#x22;none&#x22; stroke=&#x22;currentColor&#x22; viewBox=&#x22;0 0 24 24&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22;&#x3E;
          &#x3C;path stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; stroke-width=&#x22;2&#x22; d=&#x22;M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/span&#x3E;
      With Icon &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-primary&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;svg width=&#x22;20&#x22; fill=&#x22;none&#x22; stroke=&#x22;currentColor&#x22; viewBox=&#x22;0 0 24 24&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22;&#x3E;
          &#x3C;path stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; stroke-width=&#x22;2&#x22; d=&#x22;M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;primary&#x22;&#x3E;Primary&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;secondary&#x22;&#x3E;Secondary&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;success&#x22;&#x3E;Success&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;danger&#x22;&#x3E;Danger&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;warning&#x22;&#x3E;Warning&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;info&#x22;&#x3E;Info&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;light&#x22;&#x3E;Light&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;dark mt-2&#x22;&#x3E;Dark&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;link mt-2&#x22;&#x3E;Link&#x3C;/b-button&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;&#x3C;b-button variant=&#x22;outline-primary&#x22;&#x3E;Primary&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;outline-secondary&#x22;&#x3E;Secondary&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;outline-success&#x22;&#x3E;Success&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;outline-danger&#x22;&#x3E;Danger&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;outline-warning&#x22;&#x3E;Warning&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;outline-info&#x22;&#x3E;Info&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;outline-light&#x22;&#x3E;Light&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;outline-dark mt-2&#x22;&#x3E;Dark&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }}&#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;&#x3C;b-button variant=&#x22;primary btn-xs&#x22;&#x3E;Ex Small&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;primary btn-sm&#x22;&#x3E;Small button&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;primary&#x22;&#x3E;Default button&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;primary btn-lg&#x22;&#x3E;Large button&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }}&#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;soft-primary&#x22;&#x3E;Primary&#x3C;/b-button&#x3E;
    {{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;soft-secondary&#x22;&#x3E;Secondary&#x3C;/b-button&#x3E;
    {{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;soft-success&#x22;&#x3E;Success&#x3C;/b-button&#x3E;
    {{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;soft-danger&#x22;&#x3E;Danger&#x3C;/b-button&#x3E;
    {{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;soft-warning&#x22;&#x3E;Warning&#x3C;/b-button&#x3E;
    {{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;soft-info&#x22;&#x3E;Info&#x3C;/b-button&#x3E;
    {{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;soft-light&#x22;&#x3E;Light&#x3C;/b-button&#x3E;
    {{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;soft-dark mt-2&#x22;&#x3E;Dark&#x3C;/b-button&#x3E;
  &#x3C;/div&#x3E;
</code></pre>
  </div>
</template>
