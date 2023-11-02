import{_ as r,f as e,h as o,i as u,o as h,c as j,k as m}from"./index.adb58741.js";const p=e({components:{},setup(t){const l=[],s=o({});return{toggleCode:n=>{const a="vdpv_"+n;s[a+"Height"]===0?s[a+"Height"]=(l[n].value?l[n].value.offsetHeight:0)||0:s[a+"Height"]=0},...u(s)}}});p.$vd={matter:{},toc:[{content:"\u81EA\u5B9A\u4E49\u4E3B\u9898",anchor:"\u81EA\u5B9A\u4E49\u4E3B\u9898",level:2}]};const i=p,b={class:"vuedoc"},q=m(`<h2 id="\u81EA\u5B9A\u4E49\u4E3B\u9898" data-source-line="1"><a class="markdownIt-Anchor" href="#\u81EA\u5B9A\u4E49\u4E3B\u9898">#</a> \u81EA\u5B9A\u4E49\u4E3B\u9898</h2><p data-source-line="3">\u57FA\u4E8E sass \u7684 Default Values;</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-js hljs--one-light"><code><span class="hljs-comment">// vite.config.js</span>
{
  <span class="hljs-comment">//...</span>
  <span class="hljs-attr">css</span>: {
    <span class="hljs-attr">preprocessorOptions</span>: {
      <span class="hljs-attr">scss</span>: {
        <span class="hljs-attr">additionalData</span>: <span class="hljs-string">\`@import &#39;path/global-variables.scss&#39;;\`</span>
      }
    }
  }
  <span class="hljs-comment">//...</span>
}
</code></pre><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-js hljs--one-light"><code><span class="hljs-comment">// vue.config.js</span>
{
  <span class="hljs-comment">//...</span>
  <span class="hljs-attr">css</span>: {
    <span class="hljs-attr">loaderOptions</span>: {
      <span class="hljs-attr">sass</span>: {
        <span class="hljs-attr">prependData</span>: <span class="hljs-string">\`import &#39;path/global-variables.scss&#39;;\`</span>
      }
    }
  },
  <span class="hljs-comment">//...</span>
}
</code></pre><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-scss hljs--one-light"><code><span class="hljs-comment">// global-variables.scss</span>

<span class="hljs-variable">$--color</span>: (
  <span class="hljs-string">&quot;primary&quot;</span>: <span class="hljs-number">#0d6efd</span>,
  <span class="hljs-string">&quot;success&quot;</span>: <span class="hljs-number">#00b450</span>,
  <span class="hljs-string">&quot;danger&quot;</span>: <span class="hljs-number">#dc3545</span>,
  <span class="hljs-string">&quot;warn&quot;</span>: <span class="hljs-number">#ffc107</span>,
  <span class="hljs-string">&quot;info&quot;</span>: <span class="hljs-number">#0dcaf0</span>,
  <span class="hljs-string">&quot;white&quot;</span>: <span class="hljs-number">#ffffff</span>,
  <span class="hljs-string">&quot;black&quot;</span>: <span class="hljs-number">#000000</span>,
  <span class="hljs-string">&quot;light&quot;</span>: mix(<span class="hljs-number">#000000</span>, <span class="hljs-number">#FFFFFF</span>, <span class="hljs-number">4%</span>),
  <span class="hljs-string">&quot;dark&quot;</span>: mix(<span class="hljs-number">#000000</span>, <span class="hljs-number">#FFFFFF</span>, <span class="hljs-number">96%</span>),
  <span class="hljs-string">&quot;disabled&quot;</span>: mix(<span class="hljs-number">#000000</span>, <span class="hljs-number">#FFFFFF</span>, <span class="hljs-number">25%</span>),
  <span class="hljs-string">&quot;border&quot;</span>: mix(<span class="hljs-number">#000000</span>, <span class="hljs-number">#FFFFFF</span>, <span class="hljs-number">15%</span>),
  <span class="hljs-string">&quot;placeholder&quot;</span>: mix(<span class="hljs-number">#000000</span>, <span class="hljs-number">#FFFFFF</span>, <span class="hljs-number">15%</span>),
  <span class="hljs-string">&quot;divider&quot;</span>: mix(<span class="hljs-number">#000000</span>, <span class="hljs-number">#FFFFFF</span>, <span class="hljs-number">6%</span>),
  <span class="hljs-string">&quot;mask&quot;</span>: rgba(<span class="hljs-number">#000000</span>, <span class="hljs-number">0.3</span>),
);

<span class="hljs-variable">$--text-color</span>: (
  <span class="hljs-string">&quot;primary&quot;</span>: mix(<span class="hljs-number">#000000</span>, <span class="hljs-number">#FFFFFF</span>, <span class="hljs-number">85%</span>),
  <span class="hljs-string">&quot;secondary&quot;</span>: mix(<span class="hljs-number">#000000</span>, <span class="hljs-number">#FFFFFF</span>, <span class="hljs-number">65%</span>),
  <span class="hljs-string">&quot;tertiary&quot;</span>: mix(<span class="hljs-number">#000000</span>, <span class="hljs-number">#FFFFFF</span>, <span class="hljs-number">45%</span>),
);

<span class="hljs-variable">$--shadow-color</span>: (
  <span class="hljs-string">&quot;primary&quot;</span>:  rgba(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.16</span>),
  <span class="hljs-string">&quot;secondary&quot;</span>:rgba(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.12</span>),
  <span class="hljs-string">&quot;tertiary&quot;</span>: rgba(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.08</span>),
);

<span class="hljs-variable">$--height</span>: (
  <span class="hljs-string">&quot;xm&quot;</span>: <span class="hljs-number">24px</span>,
  <span class="hljs-string">&quot;sm&quot;</span>: <span class="hljs-number">28px</span>,
  <span class="hljs-string">&quot;md&quot;</span>: <span class="hljs-number">32px</span>,
  <span class="hljs-string">&quot;lg&quot;</span>: <span class="hljs-number">38px</span>,
  <span class="hljs-string">&quot;xl&quot;</span>: <span class="hljs-number">46px</span>
);

<span class="hljs-variable">$--font-size</span>: (
  <span class="hljs-string">&quot;xm&quot;</span>: <span class="hljs-number">12px</span>,
  <span class="hljs-string">&quot;sm&quot;</span>: <span class="hljs-number">14px</span>,
  <span class="hljs-string">&quot;md&quot;</span>: <span class="hljs-number">16px</span>,
  <span class="hljs-string">&quot;lg&quot;</span>: <span class="hljs-number">20px</span>,
  <span class="hljs-string">&quot;xl&quot;</span>: <span class="hljs-number">24px</span>
);

<span class="hljs-variable">$--space</span>: (
  <span class="hljs-string">&quot;xxm&quot;</span>: <span class="hljs-number">4px</span>,
  <span class="hljs-string">&quot;xm&quot;</span>: <span class="hljs-number">8px</span>,
  <span class="hljs-string">&quot;sm&quot;</span>: <span class="hljs-number">16px</span>,
  <span class="hljs-string">&quot;md&quot;</span>: <span class="hljs-number">24px</span>,
  <span class="hljs-string">&quot;lg&quot;</span>: <span class="hljs-number">32px</span>,
  <span class="hljs-string">&quot;xl&quot;</span>: <span class="hljs-number">40px</span>
);

<span class="hljs-variable">$--border-radius</span>: (
  <span class="hljs-string">&quot;default&quot;</span>: <span class="hljs-number">4px</span>,
  <span class="hljs-string">&quot;mini&quot;</span>: <span class="hljs-number">2px</span>,
  <span class="hljs-string">&quot;round&quot;</span>: <span class="hljs-number">9999px</span>,
  <span class="hljs-string">&quot;circle&quot;</span>: <span class="hljs-number">100%</span>
);
</code></pre>`,8),g=[q];function d(t,l,s,c,n,a){return h(),j("div",b,g)}var x=r(i,[["render",d]]);export{x as default};
