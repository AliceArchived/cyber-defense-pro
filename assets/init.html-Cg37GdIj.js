import{_ as n,c as a,a as e,o as i}from"./app-CRhTphJU.js";const l={};function t(p,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h2 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>Init</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> config  user.name <span class="token string">&quot;Alice&quot;</span></span>
<span class="line"><span class="token function">git</span> config  user.email <span class="token string">&quot;alys8715ia@gmail.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> push --set-upstream origin work</span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">--amend</span> --reset-author <span class="token parameter variable">-m</span> <span class="token string">&#39;some comments&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> remote remove origin</span>
<span class="line"><span class="token function">git</span> remote <span class="token function">add</span> origin xxx</span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>Debug</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 测试该 key 是否有效：</span></span>
<span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查 SSH Agent</span></span>
<span class="line">ssh-add <span class="token parameter variable">-l</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果没看到 ~/.ssh/id_rsa，就运行：</span></span>
<span class="line">ssh-add ~/.ssh/id_rsa</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证当前身份：</span></span>
<span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-i</span> ~/.ssh/id_rsa <span class="token parameter variable">-T</span> git@github.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="branch" tabindex="-1"><a class="header-anchor" href="#branch"><span>Branch</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> checkout main</span>
<span class="line"><span class="token function">git</span> fetch origin</span>
<span class="line"><span class="token function">git</span> merge origin/work</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tag" tabindex="-1"><a class="header-anchor" href="#tag"><span>Tag</span></a></h2><ol><li>Create a Tag</li></ol><p>Lightweight tag:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> tag v1.0.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Annotated tag (recommended for releases, includes message and metadata):</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.0.0 <span class="token parameter variable">-m</span> <span class="token string">&quot;Release version 1.0.0&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>Push the Tag to GitHub</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> push origin v1.0.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Push All Tags at Once</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> push origin <span class="token parameter variable">--tags</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># view tag</span></span>
<span class="line"><span class="token function">git</span> tag</span>
<span class="line"></span>
<span class="line"><span class="token comment"># list with details</span></span>
<span class="line"><span class="token function">git</span> show v1.0.0</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>Delete a Tag</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Delete local</span></span>
<span class="line"><span class="token function">git</span> tag <span class="token parameter variable">-d</span> v1.0.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># delete remote</span></span>
<span class="line"><span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> tag v1.0.0</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)]))}const r=n(l,[["render",t],["__file","init.html.vue"]]),d=JSON.parse('{"path":"/Init/init.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Init","slug":"init","link":"#init","children":[]},{"level":2,"title":"Debug","slug":"debug","link":"#debug","children":[]},{"level":2,"title":"Branch","slug":"branch","link":"#branch","children":[]},{"level":2,"title":"Tag","slug":"tag","link":"#tag","children":[]}],"git":{"updatedTime":1747180704000},"filePathRelative":"Init/init.md"}');export{r as comp,d as data};
