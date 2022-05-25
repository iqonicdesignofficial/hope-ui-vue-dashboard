<template>
  <div class="section-block">
    <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
&#x3C;div class=&#x22;flex-wrap d-flex align-items-center&#x22;&#x3E;
  &#x3C;b-button variant=&#x22;primary me-2&#x22; @click=&#x22;modal = true&#x22;&#x3E;Launch demo modal&#x3C;/b-button&#x3E;
  &#x3C;b-button variant=&#x22;primary me-2&#x22; @click=&#x22;modalstatic = true&#x22;&#x3E;Launch static backdrop modal&#x3C;/b-button&#x3E;
  &#x3C;b-button variant=&#x22;primary me-2&#x22; @click=&#x22;modalscroll = true&#x22;&#x3E;Vertically centered scrollable modal&#x3C;/b-button&#x3E;
  &#x3C;b-button variant=&#x22;primary&#x22; @click=&#x22;modalfullscreen = true&#x22;&#x3E;Full screen&#x3C;/b-button&#x3E;
  &#x3C;b-modal v-model=&#x22;modal&#x22; title=&#x22;Modal title&#x22;&#x3E; ... &#x3C;/b-modal&#x3E;
  &#x3C;b-modal v-model=&#x22;modalstatic&#x22; title=&#x22;Modal title&#x22; noCloseOnBackdrop&#x3E;&#x3C;p&#x3E;I will not close if you click outside me. Don&#x27;t even try to press escape key.&#x3C;/p&#x3E;&#x3C;/b-modal&#x3E;
  &#x3C;b-modal v-model=&#x22;modalscroll&#x22; scrollable title=&#x22;Modal title&#x22;&#x3E;
    &#x3C;p v-for=&#x22;i in 20&#x22; :key=&#x22;i&#x22;&#x3E;This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.&#x3C;/p&#x3E;
  &#x3C;/b-modal&#x3E;
  &#x3C;b-modal v-model=&#x22;modalfullscreen&#x22; fullscreen dialogClass=&#x22;testt&#x22; title=&#x22;Full screen modal&#x22;&#x3E;
    &#x3C;p class=&#x22;my-4&#x22;&#x3E;.....&#x3C;/p&#x3E;
  &#x3C;/b-modal&#x3E;
&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
  </div>
</template>
