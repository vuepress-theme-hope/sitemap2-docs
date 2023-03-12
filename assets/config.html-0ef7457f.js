import{a2 as l,Y as o,Z as d,a3 as e,a4 as t,a0 as a,a1 as i}from"./framework-4d99891f.js";const r={},c=t('<h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项" aria-hidden="true">#</a> 插件选项</h2><h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname" aria-hidden="true">#</a> hostname</h3><ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>当前网站部署到的域名，插件需要此选项才能工作。</p><h3 id="extraurls" tabindex="-1"><a class="header-anchor" href="#extraurls" aria-hidden="true">#</a> extraUrls</h3><ul><li>类型: <code>string[]</code></li><li>必填: 否</li></ul><p>需要额外包含的网址。</p><p>如果你有一些不包含在 VuePress 路由中的链接 (如: 存放在 public 文件夹下的页面或其他插件或工具直接生成的页面)，你可能需要设置此项。</p><p>例如: <code>[&#39;/about.html&#39;, &#39;/api/&#39;]</code></p><h3 id="excludeurls" tabindex="-1"><a class="header-anchor" href="#excludeurls" aria-hidden="true">#</a> excludeUrls</h3><ul><li>类型: <code>string[]</code></li><li>默认值: <code>[&#39;/404.html&#39;]</code></li></ul><p>不需要收录的页面路径，请以绝对路径开头。</p><p>默认情况下 VuePress 自动生成的所有路径 (除 404 页) 都会被添加进 Sitemap。</p><h3 id="sitemapfilename" tabindex="-1"><a class="header-anchor" href="#sitemapfilename" aria-hidden="true">#</a> sitemapFilename</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;sitemap.xml&quot;</code></li></ul><p>输出的文件名，相对于输出目录。</p><h3 id="sitemapxslfilename" tabindex="-1"><a class="header-anchor" href="#sitemapxslfilename" aria-hidden="true">#</a> sitemapXSLFilename</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;sitemap.xsl&quot;</code></li></ul><p>输出的 xsl 文件名，相对于输出目录。</p><h3 id="sitemapxsltemplate" tabindex="-1"><a class="header-anchor" href="#sitemapxsltemplate" aria-hidden="true">#</a> sitemapXSLTemplate</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;vuepress-plugin-sitemap2/templates/sitemap.xsl&quot;</code></li></ul><p>用作模板的 XSL 文件路径</p><h3 id="changefreq" tabindex="-1"><a class="header-anchor" href="#changefreq" aria-hidden="true">#</a> changefreq</h3><ul><li>类型: <code>&quot;always&quot; | &quot;hourly&quot; | &quot;daily&quot; | &quot;weekly&quot; | &quot;monthly&quot; | &quot;yearly&quot; | &quot;never&quot;</code></li><li>默认值: <code>&quot;daily&quot;</code></li></ul>',24),h=a("p",null,[i("页面默认更新频率，会被 Frontmatter 中的 "),a("a",{href:"#sitemap-changefreq"},"changefreq"),i(" 选项覆盖。")],-1),s=t('<h3 id="priority" tabindex="-1"><a class="header-anchor" href="#priority" aria-hidden="true">#</a> priority</h3><ul><li><p>类型: <code>number</code></p></li><li><p>默认值: <code>0.5</code></p></li></ul><p>页面优先级，范围 <code>0</code> 至 <code>1</code>。</p><h3 id="modifytimegetter" tabindex="-1"><a class="header-anchor" href="#modifytimegetter" aria-hidden="true">#</a> modifyTimeGetter</h3><ul><li>类型: <code>(page: Page) =&gt; string</code></li><li>必填: 否</li></ul><p>最后修改事件的获得器，需要返回一个 ISO 字符形式的时间，默认会自动通过 Git 插件生成。</p><h2 id="frontmatter-选项" tabindex="-1"><a class="header-anchor" href="#frontmatter-选项" aria-hidden="true">#</a> Frontmatter 选项</h2><h3 id="sitemap" tabindex="-1"><a class="header-anchor" href="#sitemap" aria-hidden="true">#</a> sitemap</h3><ul><li>类型: <code>SitemapFrontmatterOptions | false</code></li><li>必填: 否</li></ul><p><code>false</code> 代表不输出此页面到 Sitemap</p><h3 id="sitemap-changefreq" tabindex="-1"><a class="header-anchor" href="#sitemap-changefreq" aria-hidden="true">#</a> sitemap.changefreq</h3><ul><li>类型: <code>&quot;always&quot; | &quot;hourly&quot; | &quot;daily&quot; | &quot;weekly&quot; | &quot;monthly&quot; | &quot;yearly&quot; | &quot;never&quot;</code></li><li>默认值: <code>&quot;daily&quot;</code></li></ul><p>页面默认更新频率。它会覆盖插件选项中的 <a href="#changefreq">changefreq</a> 选项。</p><h3 id="sitemap-exclude" tabindex="-1"><a class="header-anchor" href="#sitemap-exclude" aria-hidden="true">#</a> sitemap.exclude</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><h3 id="sitemap-priority" tabindex="-1"><a class="header-anchor" href="#sitemap-priority" aria-hidden="true">#</a> sitemap.priority</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>0.5</code></li></ul><p>页面优先级，范围 <code>0</code> 至 <code>1</code>。</p>',18);function n(u,p){return o(),d("div",null,[c,e(" markdownlint-disable  MD051 "),h,e(" markdownlint-enable  MD051 "),s])}const f=l(r,[["render",n],["__file","config.html.vue"]]);export{f as default};
