<template>
  <div class="section-block">
    <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;div id=&#x22;carouselExampleCaptions&#x22; class=&#x22;carousel slide&#x22; data-bs-ride=&#x22;carousel&#x22;&#x3E;
                &#x3C;div class=&#x22;carousel-indicators&#x22;&#x3E;
                    &#x3C;button type=&#x22;button&#x22; data-bs-target=&#x22;#carouselExampleCaptions&#x22; data-bs-slide-to=&#x22;0&#x22; class=&#x22;&#x22; aria-label=&#x22;Slide 1&#x22;&#x3E;&#x3C;/button&#x3E;
                    &#x3C;button type=&#x22;button&#x22; data-bs-target=&#x22;#carouselExampleCaptions&#x22; data-bs-slide-to=&#x22;1&#x22; aria-label=&#x22;Slide 2&#x22; class=&#x22;active&#x22; aria-current=&#x22;true&#x22;&#x3E;&#x3C;/button&#x3E;
                    &#x3C;button type=&#x22;button&#x22; data-bs-target=&#x22;#carouselExampleCaptions&#x22; data-bs-slide-to=&#x22;2&#x22; aria-label=&#x22;Slide 3&#x22; class=&#x22;&#x22;&#x3E;&#x3C;/button&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;carousel-inner&#x22;&#x3E;
                    &#x3C;div class=&#x22;carousel-item&#x22;&#x3E;
                        &#x3C;svg class=&#x22;bd-placeholder-img bd-placeholder-img-lg d-block w-100&#x22; width=&#x22;800&#x22; height=&#x22;400&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; role=&#x22;img&#x22; aria-label=&#x22;Placeholder: First slide&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22;&#x3E;&#x3C;title&#x3E;Placeholder&#x3C;/title&#x3E;&#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#777&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;text x=&#x22;50%&#x22; y=&#x22;50%&#x22; fill=&#x22;#555&#x22; dy=&#x22;.3em&#x22;&#x3E;First slide&#x3C;/text&#x3E;&#x3C;/svg&#x3E;
                        &#x3C;div class=&#x22;carousel-caption d-none d-md-block&#x22;&#x3E;
                            &#x3C;h5&#x3E;First slide label&#x3C;/h5&#x3E;
                            &#x3C;p&#x3E;Some representative placeholder content for the first slide.&#x3C;/p&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;carousel-item active&#x22;&#x3E;
                        &#x3C;svg class=&#x22;bd-placeholder-img bd-placeholder-img-lg d-block w-100&#x22; width=&#x22;800&#x22; height=&#x22;400&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; role=&#x22;img&#x22; aria-label=&#x22;Placeholder: Second slide&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22;&#x3E;&#x3C;title&#x3E;Placeholder&#x3C;/title&#x3E;&#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#666&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;text x=&#x22;50%&#x22; y=&#x22;50%&#x22; fill=&#x22;#444&#x22; dy=&#x22;.3em&#x22;&#x3E;Second slide&#x3C;/text&#x3E;&#x3C;/svg&#x3E;
                        &#x3C;div class=&#x22;carousel-caption d-none d-md-block&#x22;&#x3E;
                            &#x3C;h5&#x3E;Second slide label&#x3C;/h5&#x3E;
                            &#x3C;p&#x3E;Some representative placeholder content for the second slide.&#x3C;/p&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;carousel-item&#x22;&#x3E;
                        &#x3C;svg class=&#x22;bd-placeholder-img bd-placeholder-img-lg d-block w-100&#x22; width=&#x22;800&#x22; height=&#x22;400&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; role=&#x22;img&#x22; aria-label=&#x22;Placeholder: Third slide&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22;&#x3E;&#x3C;title&#x3E;Placeholder&#x3C;/title&#x3E;&#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#555&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;text x=&#x22;50%&#x22; y=&#x22;50%&#x22; fill=&#x22;#333&#x22; dy=&#x22;.3em&#x22;&#x3E;Third slide&#x3C;/text&#x3E;&#x3C;/svg&#x3E;
                        &#x3C;div class=&#x22;carousel-caption d-none d-md-block&#x22;&#x3E;
                            &#x3C;h5&#x3E;Third slide label&#x3C;/h5&#x3E;
                            &#x3C;p&#x3E;Some representative placeholder content for the third slide.&#x3C;/p&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;button class=&#x22;carousel-control-prev&#x22; type=&#x22;button&#x22; data-bs-target=&#x22;#carouselExampleCaptions&#x22; data-bs-slide=&#x22;prev&#x22;&#x3E;
                    &#x3C;span class=&#x22;carousel-control-prev-icon&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
                    &#x3C;span class=&#x22;visually-hidden&#x22;&#x3E;Previous&#x3C;/span&#x3E;
                &#x3C;/button&#x3E;
                &#x3C;button class=&#x22;carousel-control-next&#x22; type=&#x22;button&#x22; data-bs-target=&#x22;#carouselExampleCaptions&#x22; data-bs-slide=&#x22;next&#x22;&#x3E;
                    &#x3C;span class=&#x22;carousel-control-next-icon&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
                    &#x3C;span class=&#x22;visually-hidden&#x22;&#x3E;Next&#x3C;/span&#x3E;
                &#x3C;/button&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        </code></pre>
  </div>
</template>
