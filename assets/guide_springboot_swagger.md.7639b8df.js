import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.a0a80147.js";const u=JSON.parse('{"title":"swagger配置","description":"","frontmatter":{"title":"swagger配置","date":"2020-11-08T11:11:11.000Z"},"headers":[],"relativePath":"guide/springboot/swagger.md","filePath":"guide/springboot/swagger.md"}'),p={name:"guide/springboot/swagger.md"},o=l(`<h1 id="swagger整合" tabindex="-1">swagger整合 <a class="header-anchor" href="#swagger整合" aria-label="Permalink to &quot;swagger整合&quot;">​</a></h1><p>作用：swagger用来生成接口文档</p><p>整合步骤</p><ul><li>添加依赖</li></ul><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">dependency</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;io.springfox&lt;/</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;springfox-swagger2&lt;/</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;2.9.2&lt;/</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">dependency</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">dependency</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;io.springfox&lt;/</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;springfox-swagger-ui&lt;/</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;2.9.2&lt;/</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">dependency</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- swagger增强 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">dependency</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;com.github.xiaoymin&lt;/</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;knife4j-spring-boot-starter&lt;/</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;2.0.3&lt;/</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">dependency</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;io.springfox&lt;/</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;springfox-swagger2&lt;/</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;2.9.2&lt;/</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;io.springfox&lt;/</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;springfox-swagger-ui&lt;/</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;2.9.2&lt;/</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- swagger增强 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;com.github.xiaoymin&lt;/</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;knife4j-spring-boot-starter&lt;/</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;2.0.3&lt;/</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ul><li>设置swagger的配置</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Configuration</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">EnableSwagger2</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SwaggerConfig</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> Docket </span><span style="color:#B392F0;">createRestApi</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Docket</span><span style="color:#E1E4E8;">(DocumentationType.SWAGGER_2)</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">apiInfo</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">apiInfo</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">select</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">//扫描的controller包路径</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">apis</span><span style="color:#E1E4E8;">(RequestHandlerSelectors.</span><span style="color:#B392F0;">basePackage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;com.simplemw&quot;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">paths</span><span style="color:#E1E4E8;">(PathSelectors.</span><span style="color:#B392F0;">any</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">//写最后</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">build</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//公共描述</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//也可直接用在上面方法中，分开写的原因是，有时会扫描多个包路径，就可以直接用公共描述了</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> ApiInfo </span><span style="color:#B392F0;">apiInfo</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ApiInfoBuilder</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;这是标题&quot;</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;">//设置页面标题</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">description</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;这是描述......&quot;</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;">//描述</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">version</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;">//版本</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">//这是联系人信息</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">contact</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Contact</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;simplemw&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;http://localhost:8080&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;xxx@qq.com&quot;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">//写最后</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">build</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Configuration</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">EnableSwagger2</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SwaggerConfig</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Docket </span><span style="color:#6F42C1;">createRestApi</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Docket</span><span style="color:#24292E;">(DocumentationType.SWAGGER_2)</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">apiInfo</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">apiInfo</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">select</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">//扫描的controller包路径</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">apis</span><span style="color:#24292E;">(RequestHandlerSelectors.</span><span style="color:#6F42C1;">basePackage</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;com.simplemw&quot;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">paths</span><span style="color:#24292E;">(PathSelectors.</span><span style="color:#6F42C1;">any</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">//写最后</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">build</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//公共描述</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//也可直接用在上面方法中，分开写的原因是，有时会扫描多个包路径，就可以直接用公共描述了</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> ApiInfo </span><span style="color:#6F42C1;">apiInfo</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ApiInfoBuilder</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;这是标题&quot;</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//设置页面标题</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">description</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;这是描述......&quot;</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//描述</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">version</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//版本</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">//这是联系人信息</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">contact</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Contact</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;simplemw&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;http://localhost:8080&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;xxx@qq.com&quot;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">//写最后</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">build</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ul><li>然后就是在controller类和pojo类中加上各种api注解</li></ul><p>controller中</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Api</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">value</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;这是controller类的描述&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">tags</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;这是controller类的描述&quot;</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">//对类的描述，注：展示是按controller为总目录展示的</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Api</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">value</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;这是controller类的描述&quot;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">tags</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;这是controller类的描述&quot;</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">//对类的描述，注：展示是按controller为总目录展示的</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">ApiOperation</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;这是方法描述&quot;</span><span style="color:#E1E4E8;">)		</span><span style="color:#6A737D;">//对方法的描述</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">ApiImplicitParam</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;map&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;这是对方法入参的描述&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">ApiOperation</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;这是方法描述&quot;</span><span style="color:#24292E;">)		</span><span style="color:#6A737D;">//对方法的描述</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">ApiImplicitParam</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;map&quot;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;这是对方法入参的描述&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>若为文件导出在 @ApiOperation注解中可以加上 produces = &quot;application/octet-stream&quot; 如</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">ApiOperation</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;这是方法描述&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">produces</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;application/octet-stream&quot;</span><span style="color:#E1E4E8;">)		</span><span style="color:#6A737D;">//对方法的描述</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">ApiOperation</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;这是方法描述&quot;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">produces</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;application/octet-stream&quot;</span><span style="color:#24292E;">)		</span><span style="color:#6A737D;">//对方法的描述</span></span></code></pre></div><p>pojo中</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">ApiModel</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;这是pojo类的描述&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">description</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;这是pojo类的描述&quot;</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">//对类的描述</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">ApiModel</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;这是pojo类的描述&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">description</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;这是pojo类的描述&quot;</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">//对类的描述</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">ApiModelProperty</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;模板名称&quot;</span><span style="color:#E1E4E8;">)    </span><span style="color:#6A737D;">//对属性的描述</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">ApiModelProperty</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;模板名称&quot;</span><span style="color:#24292E;">)    </span><span style="color:#6A737D;">//对属性的描述</span></span></code></pre></div><hr><p>配置完成后 访问路径 <a href="http://localhost:8080/swagger-ui.html#/" target="_blank" rel="noreferrer">http://localhost:8080/swagger-ui.html#/</a></p><p>增强ui的访问页面 <a href="http://localhost:8080/doc.html#/" target="_blank" rel="noreferrer">http://localhost:8080/doc.html#/</a></p><p>运行时，swagger会自动将api注解配置到网页上</p>`,20),e=[o];function t(c,r,E,y,i,g){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{u as __pageData,F as default};