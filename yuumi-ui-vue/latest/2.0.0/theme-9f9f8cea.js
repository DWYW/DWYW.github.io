import{e as s,o as a,c as t,g as p}from"./index-569afd91.js";const o={class:"markdown-body"},c=p(`<h3>说明</h3><blockquote><p>v1.5.0 开始支持</p></blockquote><h3>自定义主题</h3><p>基于 css 的 var;</p><pre class="language-scss"><code class="language-scss"><span class="token property"><span class="token variable">$--color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;primary&quot;</span><span class="token punctuation">:</span> #0d6efd<span class="token punctuation">,</span>
  <span class="token string">&quot;success&quot;</span><span class="token punctuation">:</span> #00b450<span class="token punctuation">,</span>
  <span class="token string">&quot;danger&quot;</span><span class="token punctuation">:</span> #dc3545<span class="token punctuation">,</span>
  <span class="token string">&quot;warn&quot;</span><span class="token punctuation">:</span> #ffc107<span class="token punctuation">,</span>
  <span class="token string">&quot;info&quot;</span><span class="token punctuation">:</span> #0dcaf0<span class="token punctuation">,</span>
  <span class="token string">&quot;white&quot;</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">,</span>
  <span class="token string">&quot;black&quot;</span><span class="token punctuation">:</span> #000000<span class="token punctuation">,</span>
  <span class="token string">&quot;light&quot;</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>#000000<span class="token punctuation">,</span> #ffffff<span class="token punctuation">,</span> 4%<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string">&quot;dark&quot;</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>#000000<span class="token punctuation">,</span> #ffffff<span class="token punctuation">,</span> 96%<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string">&quot;disabled&quot;</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>#000000<span class="token punctuation">,</span> #ffffff<span class="token punctuation">,</span> 25%<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string">&quot;border&quot;</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>#000000<span class="token punctuation">,</span> #ffffff<span class="token punctuation">,</span> 15%<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string">&quot;placeholder&quot;</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>#000000<span class="token punctuation">,</span> #ffffff<span class="token punctuation">,</span> 15%<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string">&quot;divider&quot;</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>#000000<span class="token punctuation">,</span> #ffffff<span class="token punctuation">,</span> 6%<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string">&quot;mask&quot;</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>#000000<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 主题色</span>
<span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--color-primary</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;primary&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--color-success</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--color-danger</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;danger&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--color-warn</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--color-info</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--color-white</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--color-black</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--color-light</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;light&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--color-dark</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;dark&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--color-disabled</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;disabled&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--color-border</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;border&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--color-placeholder</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;placeholder&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--color-divider</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;divider&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--color-mask</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;mask&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 字体颜色</span>
<span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--text-color-primary</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--text-color-secondary</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">mix</span><span class="token punctuation">(</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 65%<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--text-color-tertiary</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">mix</span><span class="token punctuation">(</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 45%<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 阴影颜色</span>
<span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">--shadow-color-primary</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 0.16<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--shadow-color-secondary</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 0.12<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token property">--shadow-color-tertiary</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$--color</span><span class="token punctuation">,</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 0.08<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>`,5),u=[c],r={},f="",q=s({__name:"theme",setup(e,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(l,k)=>(a(),t("div",o,u))}});export{q as default,f as excerpt,r as frontmatter};
