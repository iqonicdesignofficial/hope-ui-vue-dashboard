<template>
  <div class="section-block">
    <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;div class=&#x22;flex-wrap btn-group w-100 align-items-center mt-0&#x22;&#x3E;
      &#x3C;b-dropdown id=&#x22;dropdown-1&#x22; text=&#x22;Dropdown Button&#x22; size=&#x22;sm&#x22; class= &#x22;me-2&#x22;&#x3E;
        &#x3C;li&#x3E;&#x3C;h6 class=&#x22;dropdown-header&#x22;&#x3E;Dropdown header&#x3C;/h6&#x3E;&#x3C;/li&#x3E;
        &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
      &#x3C;/b-dropdown&#x3E;
      &#x3C;b-dropdown id=&#x22;dropdownMenuButton&#x22; text=&#x22;Dropdown Button&#x22; class=&#x22;me-2&#x22;&#x3E;
        &#x3C;li&#x3E;&#x3C;h6 class=&#x22;dropdown-header&#x22;&#x3E;Dropdown header&#x3C;/h6&#x3E;&#x3C;/li&#x3E;
        &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
      &#x3C;/b-dropdown&#x3E;
      &#x3C;b-dropdown id=&#x22;dropdownMenuButtonLG&#x22; size=&#x22;lg&#x22; text=&#x22;Dropdown Button&#x22;&#x3E;
        &#x3C;li&#x3E;&#x3C;h6 class=&#x22;dropdown-header&#x22;&#x3E;Dropdown header&#x3C;/h6&#x3E;&#x3C;/li&#x3E;
        &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
      &#x3C;/b-dropdown&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-dropdown split split-variant=&#x22;primary&#x22; variant=&#x22;primary&#x22; text=&#x22;Primary&#x22; class=&#x22;me-1&#x22;&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here...&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
    &#x3C;b-dropdown split split-variant=&#x22;secondary&#x22; variant=&#x22;secondary&#x22; text=&#x22;Secondary&#x22; class=&#x22;me-1&#x22;&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here...&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
    &#x3C;b-dropdown split split-variant=&#x22;success&#x22; variant=&#x22;success&#x22; text=&#x22;Success&#x22; class=&#x22;me-1&#x22;&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here...&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
    &#x3C;b-dropdown split split-variant=&#x22;info&#x22; variant=&#x22;info&#x22; text=&#x22;Info&#x22; class=&#x22;me-1&#x22;&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here...&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
    &#x3C;b-dropdown split split-variant=&#x22;warning&#x22; variant=&#x22;warning&#x22; text=&#x22;Warning&#x22; class=&#x22;me-1 mt-2&#x22;&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here...&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
    &#x3C;b-dropdown split split-variant=&#x22;danger&#x22; variant=&#x22;danger&#x22; text=&#x22;Danger&#x22; class=&#x22;me-1 mt-2&#x22;&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
      &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here...&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;div class=&#x22;flex-wrap btn-group w-100 align-items-center mt-0&#x22;&#x3E;
      &#x3C;div class=&#x22;dropend&#x22;&#x3E;
        &#x3C;b-dropdown id=&#x22;dropendMenuButton&#x22; dropright text=&#x22;Dropend button&#x22; class=&#x22;me-2&#x22;&#x3E;
          &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
          &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
          &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;/b-dropdown&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;dropup&#x22;&#x3E;
        &#x3C;b-dropdown id=&#x22;dropendMenuButton&#x22; dropup text=&#x22;Dropup button&#x22; class=&#x22;me-2&#x22;&#x3E;
          &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
          &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
          &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;/b-dropdown&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;dropstart&#x22;&#x3E;
        &#x3C;b-dropdown id=&#x22;dropstartMenuButton&#x22; dropleft text=&#x22;Dropstart button&#x22; class=&#x22;me-2&#x22;&#x3E;
          &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
          &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
          &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;/b-dropdown&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;dropdown ms-0 ms-sm-2&#x22;&#x3E;
        &#x3C;b-dropdown id=&#x22;dropdownRightMenuButton&#x22; text=&#x22;End-aligned menu&#x22; class=&#x22;me-2&#x22;&#x3E;
          &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
          &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
          &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;/b-dropdown&#x3E;
      &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;</code></pre>
  </div>
</template>
<script>
export default {
  setup() {}
}
</script>
