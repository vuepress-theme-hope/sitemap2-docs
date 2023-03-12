import{a2 as e,Y as a,Z as s,a4 as o}from"./framework-4d99891f.js";const n={},t=o(`<p>本插件会为你的网站自动生成 Sitemap。为了使插件正常工作，你需要将部署的域名传递给插件的 <code>hostname</code> 选项。</p><p>插件会自动根据页面的 Git 的时间戳生成页面的最后更新时间，同时会根据站点的多语言配置声明页面的其他语言版本替代地址。</p><h2 id="控制-sitemap-链接" tabindex="-1"><a class="header-anchor" href="#控制-sitemap-链接" aria-hidden="true">#</a> 控制 Sitemap 链接</h2><p>默认情况下，所有除 404 页面以外的网站链接均会被添加进 Sitemap。</p><p>如果你希望在 VuePress 项目页面之外，添加其他页面链接到 Sitemap，请将它们变成数组传入插件的 <code>extraUrls</code> 选项。</p><p>如果你需要排除一些链接，你可以将它们变成数组传入到插件的 <code>excludeUrls</code> 选项。你也可以在对应页面的 frontmatter 中，设置 <code>sitemap.exclude</code> 为 <code>true</code>。</p><h2 id="输出位置" tabindex="-1"><a class="header-anchor" href="#输出位置" aria-hidden="true">#</a> 输出位置</h2><p>你还可以通过插件的 <code>sitemapFilename</code> 选项控制输出的地址，此地址相对于输出目录，默认为 <code>sitemap.xml</code>。</p><h2 id="更新周期" tabindex="-1"><a class="header-anchor" href="#更新周期" aria-hidden="true">#</a> 更新周期</h2><p>页面默认的更新周期是 <code>daily</code> (每天)，如果你希望修改全部的页面周期，请在插件选项中设置 <code>changefreq</code> 。你也可以在页面的 frontmatter 中设置 <code>sitemap.changefreq</code>，页面具有更高的优先级。</p><p>合法的频率有:</p><ul><li><code>&quot;always&quot;</code></li><li><code>&quot;hourly&quot;</code></li><li><code>&quot;daily&quot;</code></li><li><code>&quot;weekly&quot;</code></li><li><code>&quot;monthly&quot;</code></li><li><code>&quot;yearly&quot;</code></li><li><code>&quot;never&quot;</code></li></ul><h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h2><p>你可以在插件中设置 <code>priority</code> 以提供一个默认值。同时你可以通过 frontmatter 中的 <code>sitemap.priority</code> 来为每个页面设置优先级。可接受的值为 <code>0</code> 到 <code>1</code> 的浮点数。</p><h2 id="修改时间获取" tabindex="-1"><a class="header-anchor" href="#修改时间获取" aria-hidden="true">#</a> 修改时间获取</h2><p>你可以通过插件的 <code>modifyTimeGetter</code> 来返回一个 ISO 字符串格式的时间，默认会通过 Git 插件生成。</p><p>以下是一个基于文件最后修改时间的例子。</p><div class="language-typescript" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 基于文件最后修改时间</span></span>
<span class="line"><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">modifyTimeGetter</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">page</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">fs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">statSync</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">dir</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">source</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">page</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">filePathRelative</span><span style="color:#ABB2BF;">)).</span><span style="color:#E5C07B;">mtime</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">toISOString</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre></div><h2 id="sitemap-介绍" tabindex="-1"><a class="header-anchor" href="#sitemap-介绍" aria-hidden="true">#</a> Sitemap 介绍</h2><p>网站地图 (Sitemap) 提供搜索引擎优化 (SEO):</p><ul><li>为搜索引擎爬虫提供可以浏览整个网站的链接；</li><li>为搜索引擎爬虫提供一些链接，指向动态页面或者采用其他方法比较难以到达的页面；</li><li>如果访问者试图访问网站所在域内并不存在的 URL，那么这个访问者就会被转到“无法找到文件”的错误页面，而网站地图可以作为导航页。</li></ul><p>网站地图通过使所有页面可被找到来增强搜索引擎优化的效果。</p><p>大部分搜索引擎只跟踪页面内有限数量的链接，因此当网站非常大的时候，网站地图对于使搜索引擎和访问者可以访问网站中的所有内容就变得必不可少了。</p><p>Sitemaps 是站点管理员向搜索引擎爬虫公布站点可被抓取页面的协议，sitemap 文件内容必须遵循 XML 格式的定义。每个 URL 可以包含更新的周期和时间、URL 在整个站点中的优先级。这样可以让搜索引擎更佳有效的抓取网站内容。</p><div class="hint-container warning"><p class="hint-container-title">同步配置 robots.txt</p><p>由于 Sitemap 面向搜索引擎，配合此插件使用时，你最好保证你在 <code>.vuepress/public</code> 文件夹下放置了有效的 <code>robots.txt</code>，以允许搜索引擎收录。一个最简单的 robots.txt 如下 (允许所有搜索引擎访问所有路径)</p><div class="language-txt" data-ext="txt"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">User-agent: *</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Allow: /</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div></div>`,25),l=[t];function p(c,i){return a(),s("div",null,l)}const d=e(n,[["render",p],["__file","guide.html.vue"]]);export{d as default};
