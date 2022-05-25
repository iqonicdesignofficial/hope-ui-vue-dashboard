<template>
  <div class="section-block">
    <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;p class=&#x22;display-1&#x22;&#x3E;Display 1&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;display-2&#x22;&#x3E;Display 2&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;display-3&#x22;&#x3E;Display 3&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;display-4&#x22;&#x3E;Display 4&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;display-5&#x22;&#x3E;Display 5&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;display-6&#x22;&#x3E;Display 6&#x3C;/p&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;p class=&#x22;h1&#x22;&#x3E;Heading 1&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;h2&#x22;&#x3E;Heading 2&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;h3&#x22;&#x3E;Heading 3&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;h4&#x22;&#x3E;Heading 4&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;h5&#x22;&#x3E;Heading 5&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;h6&#x22;&#x3E;Heading 6&#x3C;/p&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;p class=&#x22;lead&#x22;&#x3E;
    This is a lead paragraph. It stands out from regular paragraphs.
    &#x3C;/p&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;p&#x3E;You can use the mark tag to &#x3C;mark&#x3E;highlight&#x3C;/mark&#x3E; text.&#x3C;/p&#x3E;
    &#x3C;p&#x3E;&#x3C;del&#x3E;This line of text is meant to be treated as deleted text.&#x3C;/del&#x3E;&#x3C;/p&#x3E;
    &#x3C;p&#x3E;&#x3C;s&#x3E;This line of text is meant to be treated as no longer accurate.&#x3C;/s&#x3E;&#x3C;/p&#x3E;
    &#x3C;p&#x3E;&#x3C;ins&#x3E;This line of text is meant to be treated as an addition to the document.&#x3C;/ins&#x3E;&#x3C;/p&#x3E;
    &#x3C;p&#x3E;&#x3C;u&#x3E;This line of text will render as underlined.&#x3C;/u&#x3E;&#x3C;/p&#x3E;
    &#x3C;p&#x3E;&#x3C;small&#x3E;This line of text is meant to be treated as fine print.&#x3C;/small&#x3E;&#x3C;/p&#x3E;
    &#x3C;p&#x3E;&#x3C;strong&#x3E;This line rendered as bold text.&#x3C;/strong&#x3E;&#x3C;/p&#x3E;
    &#x3C;p&#x3E;&#x3C;em&#x3E;This line rendered as italicized text.&#x3C;/em&#x3E;&#x3C;/p&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;blockquote class=&#x22;blockquote&#x22;&#x3E;
    &#x3C;p&#x3E;A well-known quote, contained in a blockquote element.&#x3C;/p&#x3E;
    &#x3C;footer class=&#x22;blockquote-footer&#x22;&#x3E;Someone famous in &#x3C;cite title=&#x22;Source Title&#x22;&#x3E;Source Title&#x3C;/cite&#x3E;&#x3C;/footer&#x3E;
    &#x3C;/blockquote&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;ul class=&#x22;list-unstyled&#x22;&#x3E;
        &#x3C;li&#x3E;This is a list.&#x3C;/li&#x3E;
        &#x3C;li&#x3E;It appears completely unstyled.&#x3C;/li&#x3E;
        &#x3C;li&#x3E;Structurally, it&#x27;s still a list.&#x3C;/li&#x3E;
        &#x3C;li&#x3E;However, this style only applies to immediate child elements.&#x3C;/li&#x3E;
        &#x3C;li&#x3E;Nested lists:
            &#x3C;ul&#x3E;
                &#x3C;li&#x3E;are unaffected by this style&#x3C;/li&#x3E;
                &#x3C;li&#x3E;will still show a bullet&#x3C;/li&#x3E;
                &#x3C;li&#x3E;and have appropriate left margin&#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;This may still come in handy in some situations.&#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;ul class=&#x22;list-inline&#x22;&#x3E;
        &#x3C;li class=&#x22;list-inline-item&#x22;&#x3E;This is a list item.&#x3C;/li&#x3E;
        &#x3C;li class=&#x22;list-inline-item&#x22;&#x3E;And another one.&#x3C;/li&#x3E;
        &#x3C;li class=&#x22;list-inline-item&#x22;&#x3E;But they&#x27;re displayed inline.&#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
    &#x3C;/div&#x3E;</code></pre>
  </div>
</template>
