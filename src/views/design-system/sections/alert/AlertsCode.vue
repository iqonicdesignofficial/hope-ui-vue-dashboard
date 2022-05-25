<template>
  <div class="section-block">
    <pre><code class="language-markup">
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-alert show dismissible variant=&#x22;primary alert-solid&#x22;&#x3E; A simple primary alert with &#x3C;a href=&#x22;#&#x22; class=&#x22;alert-link&#x22;&#x3E;an example link&#x3C;/a&#x3E;. Give it a click if you like. &#x3C;/b-alert&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-alert show dismissible variant=&#x22;primary&#x22;&#x3E; A simple primary alert with &#x3C;a href=&#x22;#&#x22; class=&#x22;alert-link&#x22;&#x3E;an example link&#x3C;/a&#x3E;. Give it a click if you like. &#x3C;/b-alert&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;svg xmlns=&#x22;http://www.w3.org/2000/svg&#x22; style=&#x22;display: none&#x22;&#x3E;
      &#x3C;symbol id=&#x22;check-circle-fill&#x22; fill=&#x22;currentColor&#x22; viewBox=&#x22;0 0 16 16&#x22;&#x3E;
        &#x3C;path d=&#x22;M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z&#x22; /&#x3E;
      &#x3C;/symbol&#x3E;
      &#x3C;symbol id=&#x22;info-fill&#x22; fill=&#x22;currentColor&#x22; viewBox=&#x22;0 0 16 16&#x22;&#x3E;
        &#x3C;path d=&#x22;M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z&#x22; /&#x3E;
      &#x3C;/symbol&#x3E;
      &#x3C;symbol id=&#x22;exclamation-triangle-fill&#x22; fill=&#x22;currentColor&#x22; viewBox=&#x22;0 0 16 16&#x22;&#x3E;
        &#x3C;path d=&#x22;M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z&#x22; /&#x3E;
      &#x3C;/symbol&#x3E;
    &#x3C;/svg&#x3E;
    &#x3C;b-alert show variant=&#x22;primary d-flex align-items-center&#x22;&#x3E;
      &#x3C;svg class=&#x22;flex-shrink-0 bi me-2&#x22; width=&#x22;24&#x22; height=&#x22;24&#x22;&#x3E;
        &#x3C;use xlink:href=&#x22;#info-fill&#x22; /&#x3E;
      &#x3C;/svg&#x3E;
      &#x3C;div&#x3E;An example alert with an icon&#x3C;/div&#x3E;
    &#x3C;/b-alert&#x3E;
    &#x3C;b-alert show variant=&#x22;success d-flex align-items-center&#x22;&#x3E;
      &#x3C;svg class=&#x22;flex-shrink-0 bi me-2&#x22; width=&#x22;24&#x22; height=&#x22;24&#x22;&#x3E;
        &#x3C;use xlink:href=&#x22;#check-circle-fill&#x22; /&#x3E;
      &#x3C;/svg&#x3E;
      &#x3C;div&#x3E;An example success alert with an icon&#x3C;/div&#x3E;
    &#x3C;/b-alert&#x3E;
    &#x3C;b-alert show variant=&#x22;warning d-flex align-items-center&#x22;&#x3E;
      &#x3C;div&#x3E;An example warning alert with an icon&#x3C;/div&#x3E;
    &#x3C;/b-alert&#x3E;
    &#x3C;b-alert show variant=&#x22;danger d-flex align-items-center&#x22;&#x3E;
      &#x3C;icon-component type=&#x22;solid&#x22; icon-name=&#x22;exclamation-triangle&#x22; :size=&#x22;24&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;div&#x3E;An example danger alert with an icon&#x3C;/div&#x3E;
    &#x3C;/b-alert&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-alert show variant=&#x22;success  mb-3  alert-left &#x22; dismissible&#x3E;
      &#x3C;span&#x3E; This is a success alert&#x2014;check it out!&#x3C;/span&#x3E;
    &#x3C;/b-alert&#x3E;
    &#x3C;b-alert show variant=&#x22;info mb-3 alert-left &#x22; dismissible&#x3E;
      &#x3C;span&#x3E; This is a info alert&#x2014;check it out!&#x3C;/span&#x3E;
    &#x3C;/b-alert&#x3E;
    &#x3C;b-alert show variant=&#x22;warning mb-3 alert-left &#x22; dismissible&#x3E;
      &#x3C;span&#x3E; This is a warning alert&#x2014;check it out!&#x3C;/span&#x3E;
    &#x3C;/b-alert&#x3E;
    &#x3C;b-alert show variant=&#x22;danger mb-3 alert-left &#x22; dismissible&#x3E;
      &#x3C;span&#x3E; This is a danger alert&#x2014;check it out!&#x3C;/span&#x3E;
    &#x3C;/b-alert&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-alert variant=&#x22;warning rounded-0&#x22; dismissible fade show&#x3E;
      &#x3C;span&#x3E; This is a warning alert&#x2014;check it out!&#x3C;/span&#x3E;
    &#x3C;/b-alert&#x3E;

    &#x3C;b-alert variant=&#x22;warning alert-solid rounded-0&#x22; fade show dismissible&#x3E;
      &#x3C;span&#x3E; This is a warning alert&#x2014;check it out!&#x3C;/span&#x3E;
    &#x3C;/b-alert&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-alert show variant=&#x22;success&#x22;&#x3E;
      &#x3C;h5 class=&#x22;alert-heading&#x22;&#x3E;Well done!&#x3C;/h5&#x3E;
      &#x3C;p&#x3E;Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.&#x3C;/p&#x3E;
      &#x3C;hr /&#x3E;
      &#x3C;p class=&#x22;mb-0&#x22;&#x3E;Whenever you need to, be sure to use margin utilities to keep things nice and tidy.&#x3C;/p&#x3E;
    &#x3C;/b-alert&#x3E;
  &#x3C;/div&#x3E;
</code></pre>
  </div>
</template>
