import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.8153c8a6.js";const F=JSON.parse('{"title":"异步任务","description":"","frontmatter":{"title":"异步任务","date":"2022-07-15T16:34:11.000Z"},"headers":[],"relativePath":"guide/springbasic/异步任务.md","filePath":"guide/springbasic/异步任务.md"}'),o={name:"guide/springbasic/异步任务.md"},p=l(`<ul><li>创建线程池信息</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Configuration</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">EnableAsync</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TaskPoolConfig</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Bean</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;taskExecutor&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> Executor </span><span style="color:#B392F0;">taskExecutro</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        ThreadPoolTaskExecutor taskExecutor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ThreadPoolTaskExecutor</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        taskExecutor.</span><span style="color:#B392F0;">setCorePoolSize</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        taskExecutor.</span><span style="color:#B392F0;">setMaxPoolSize</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        taskExecutor.</span><span style="color:#B392F0;">setQueueCapacity</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        taskExecutor.</span><span style="color:#B392F0;">setKeepAliveSeconds</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        taskExecutor.</span><span style="color:#B392F0;">setThreadNamePrefix</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;taskExecutor--&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        taskExecutor.</span><span style="color:#B392F0;">setWaitForTasksToCompleteOnShutdown</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        taskExecutor.</span><span style="color:#B392F0;">setAwaitTerminationSeconds</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> taskExecutor;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Configuration</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">EnableAsync</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TaskPoolConfig</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Bean</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;taskExecutor&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Executor </span><span style="color:#6F42C1;">taskExecutro</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        ThreadPoolTaskExecutor taskExecutor </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ThreadPoolTaskExecutor</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        taskExecutor.</span><span style="color:#6F42C1;">setCorePoolSize</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        taskExecutor.</span><span style="color:#6F42C1;">setMaxPoolSize</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">50</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        taskExecutor.</span><span style="color:#6F42C1;">setQueueCapacity</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        taskExecutor.</span><span style="color:#6F42C1;">setKeepAliveSeconds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">60</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        taskExecutor.</span><span style="color:#6F42C1;">setThreadNamePrefix</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;taskExecutor--&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        taskExecutor.</span><span style="color:#6F42C1;">setWaitForTasksToCompleteOnShutdown</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        taskExecutor.</span><span style="color:#6F42C1;">setAwaitTerminationSeconds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">60</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> taskExecutor;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ul><li>使用</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Async</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;taskExecutor&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">doExecute</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Async</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;taskExecutor&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">doExecute</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>注：调起一次就会去连接池中判断是否有线程，有空余线程则执行</p>`,5),e=[p];function t(c,r,E,y,i,u){return a(),n("div",null,e)}const k=s(o,[["render",t]]);export{F as __pageData,k as default};
