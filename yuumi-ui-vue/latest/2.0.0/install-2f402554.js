import{e as n,o as a,c as p,g as t}from"./index-9f5cfcb2.js";const o={class:"markdown-body"},e=t(`<h3>快速开始</h3><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> yuumi-ui-vue@latest
</code></pre><h3>全局使用</h3><pre class="language-js"><code class="language-js"><span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token string">&quot;yuumi-ui-vue/packages/styles/index.scss&quot;</span>
<span class="token keyword">import</span> YuumiUIVue <span class="token keyword">from</span> <span class="token string">&quot;yuumi-ui-vue&quot;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>YuumiUIVue<span class="token punctuation">)</span>
</code></pre><h3>按需引入</h3><pre class="language-js"><code class="language-js"><span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token string">&quot;yuumi-ui-vue/packages/styles/index.scss&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>YuumiInput<span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;yuumi-ui-vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>YuumiInput<span class="token punctuation">)</span>

</code></pre>`,6),c=[e],r={},m="",d=n({__name:"install",setup(u,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(l,i)=>(a(),p("div",o,c))}});export{d as default,m as excerpt,r as frontmatter};
