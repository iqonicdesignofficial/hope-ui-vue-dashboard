<template>
  <div class="section-block">
    <pre><code class="language-markup">&#x3C;div class=&#x22;bg-example&#x22;&#x3E;
&#x3C;b-list-group&#x3E;
  &#x3C;b-list-group-item active&#x3E; The current link item &#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item&#x3E;A second link item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item&#x3E;A third link item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item&#x3E;A fourth link item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item disabled&#x3E;A disabled link item&#x3C;/b-list-group-item&#x3E;
&#x3C;/b-list-group&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
&#x3C;b-list-group&#x3E;
  &#x3C;b-list-group-item disabled&#x3E;A disabled item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item&#x3E;A second item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item&#x3E;A third item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item&#x3E;A fourth item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item&#x3E;And a fifth one&#x3C;/b-list-group-item&#x3E;
&#x3C;/b-list-group&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
&#x3C;b-list-group :flush=&#x22;true&#x22;&#x3E;
  &#x3C;b-list-group-item&#x3E;An item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item&#x3E;A second item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item&#x3E;A third item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item&#x3E;A fourth item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item&#x3E;And a fifth one&#x3C;/b-list-group-item&#x3E;
&#x3C;/b-list-group&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
&#x3C;b-list-group numbered&#x3E;
  &#x3C;b-list-group-item class=&#x22;d-flex justify-content-between align-items-start&#x22;&#x3E;
    &#x3C;div class=&#x22;ms-2 me-auto&#x22;&#x3E;
      &#x3C;div class=&#x22;fw-bold&#x22;&#x3E;Subheading&#x3C;/div&#x3E;
      Cras justo odio
    &#x3C;/div&#x3E;
    &#x3C;b-badge variant=&#x22;primary&#x22; pill&#x3E;14&#x3C;/b-badge&#x3E;
  &#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item class=&#x22;d-flex justify-content-between align-items-start&#x22;&#x3E;
    &#x3C;div class=&#x22;ms-2 me-auto&#x22;&#x3E;
      &#x3C;div class=&#x22;fw-bold&#x22;&#x3E;Subheading&#x3C;/div&#x3E;
      Cras justo odio
    &#x3C;/div&#x3E;
    &#x3C;b-badge variant=&#x22;primary&#x22; pill&#x3E;14&#x3C;/b-badge&#x3E;
  &#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item class=&#x22;d-flex justify-content-between align-items-start&#x22;&#x3E;
    &#x3C;div class=&#x22;ms-2 me-auto&#x22;&#x3E;
      &#x3C;div class=&#x22;fw-bold&#x22;&#x3E;Subheading&#x3C;/div&#x3E;
      Cras justo odio
    &#x3C;/div&#x3E;
    &#x3C;b-badge variant=&#x22;primary&#x22; pill&#x3E;14&#x3C;/b-badge&#x3E;
  &#x3C;/b-list-group-item&#x3E;
&#x3C;/b-list-group&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
&#x3C;b-list-group&#x3E;
  &#x3C;b-list-group-item href=&#x22;#&#x22;&#x3E;A simple default list group item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item href=&#x22;#&#x22; variant=&#x22;primary&#x22;&#x3E;A simple primary list group item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item href=&#x22;#&#x22; variant=&#x22;secondary&#x22;&#x3E;A simple secondary list group item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item href=&#x22;#&#x22; variant=&#x22;success&#x22;&#x3E;A simple success list group item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item href=&#x22;#&#x22; variant=&#x22;danger&#x22;&#x3E;A simple danger list group item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item href=&#x22;#&#x22; variant=&#x22;warning&#x22;&#x3E;A simple warning list group item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item href=&#x22;#&#x22; variant=&#x22;info&#x22;&#x3E;A simple info list group item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item href=&#x22;#&#x22; variant=&#x22;light&#x22;&#x3E;A simple light list group item&#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item href=&#x22;#&#x22; variant=&#x22;dark text-white&#x22;&#x3E;A simple dark list group item&#x3C;/b-list-group-item&#x3E;
&#x3C;/b-list-group&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
&#x3C;b-list-group&#x3E;
  &#x3C;b-list-group-item variant=&#x22; d-flex justify-content-between align-items-center&#x22;&#x3E;
    A list item
    &#x3C;b-badge variant=&#x22;primary&#x22; pill&#x3E;14&#x3C;/b-badge&#x3E;
  &#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item variant=&#x22; d-flex justify-content-between align-items-center&#x22;&#x3E;
    A second list item
    &#x3C;b-badge variant=&#x22;primary&#x22; pill&#x3E;2&#x3C;/b-badge&#x3E;
  &#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item variant=&#x22; d-flex justify-content-between align-items-center&#x22;&#x3E;
    A third list item
    &#x3C;b-badge variant=&#x22;primary&#x22; pill&#x3E;1&#x3C;/b-badge&#x3E;
  &#x3C;/b-list-group-item&#x3E;
&#x3C;/b-list-group&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
&#x3C;b-list-group&#x3E;
  &#x3C;b-list-group-item href=&#x22;#&#x22; active&#x3E;
    &#x3C;div class=&#x22;d-flex w-100 justify-content-between&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mb-1 text-white&#x22;&#x3E;List group item heading&#x3C;/h5&#x3E;
      &#x3C;small&#x3E;3 days ago&#x3C;/small&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;p class=&#x22;mb-1&#x22;&#x3E;Some placeholder content in a paragraph.&#x3C;/p&#x3E;
    &#x3C;small&#x3E;And some small print.&#x3C;/small&#x3E;
  &#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item href=&#x22;#&#x22;&#x3E;
    &#x3C;div class=&#x22;d-flex w-100 justify-content-between&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mb-1&#x22;&#x3E;List group item heading&#x3C;/h5&#x3E;
      &#x3C;small class=&#x22;text-muted&#x22;&#x3E;3 days ago&#x3C;/small&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;p class=&#x22;mb-1&#x22;&#x3E;Some placeholder content in a paragraph.&#x3C;/p&#x3E;
    &#x3C;small class=&#x22;text-muted&#x22;&#x3E;And some muted small print.&#x3C;/small&#x3E;
  &#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item href=&#x22;#&#x22;&#x3E;
    &#x3C;div class=&#x22;d-flex w-100 justify-content-between&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mb-1&#x22;&#x3E;List group item heading&#x3C;/h5&#x3E;
      &#x3C;small class=&#x22;text-muted&#x22;&#x3E;3 days ago&#x3C;/small&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;p class=&#x22;mb-1&#x22;&#x3E;Some placeholder content in a paragraph.&#x3C;/p&#x3E;
    &#x3C;small class=&#x22;text-muted&#x22;&#x3E;And some muted small print.&#x3C;/small&#x3E;
  &#x3C;/b-list-group-item&#x3E;
&#x3C;/b-list-group&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
&#x3C;b-list-group&#x3E;
  &#x3C;b-list-group-item tag=&#x22;label&#x22;&#x3E;
    &#x3C;input class=&#x22;form-check-input me-1&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22; /&#x3E;
    First checkbox
  &#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item tag=&#x22;label&#x22;&#x3E;
    &#x3C;input class=&#x22;form-check-input me-1&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22; /&#x3E;
    Second checkbox
  &#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item tag=&#x22;label&#x22;&#x3E;
    &#x3C;input class=&#x22;form-check-input me-1&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22; /&#x3E;
    Third checkbox
  &#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item tag=&#x22;label&#x22;&#x3E;
    &#x3C;input class=&#x22;form-check-input me-1&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22; /&#x3E;
    Fourth checkbox
  &#x3C;/b-list-group-item&#x3E;
  &#x3C;b-list-group-item tag=&#x22;label&#x22;&#x3E;
    &#x3C;input class=&#x22;form-check-input me-1&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22; /&#x3E;
    Fifth checkbox
  &#x3C;/b-list-group-item&#x3E;
&#x3C;/b-list-group&#x3E;
&#x3C;/div&#x3E;
        </code></pre>
  </div>
</template>
