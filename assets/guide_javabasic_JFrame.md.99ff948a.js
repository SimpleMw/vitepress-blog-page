import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.8153c8a6.js";const u=JSON.parse('{"title":"JFrame画板","description":"","frontmatter":{"title":"JFrame画板","date":"2022-12-27T17:34:36.000Z","category":"java基础相关","tag":"java","top_img":false},"headers":[],"relativePath":"guide/javabasic/JFrame.md","filePath":"guide/javabasic/JFrame.md"}'),l={name:"guide/javabasic/JFrame.md"},o=p(`<ul><li>展示画板内容</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> javax.swing.</span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.util.HashMap;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.util.Map;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">JFramePrint</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    Map&lt;</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">JFrame</span><span style="color:#E1E4E8;">&gt; map </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> HashMap&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">printMessage</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">jframeName</span><span style="color:#E1E4E8;">,String </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        JFrame jf </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createJFrame</span><span style="color:#E1E4E8;">(jframeName);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//创建画笔</span></span>
<span class="line"><span style="color:#E1E4E8;">        JPanel jp</span><span style="color:#F97583;">=new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">JPanel</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//传入文本</span></span>
<span class="line"><span style="color:#E1E4E8;">        JTextArea jta</span><span style="color:#F97583;">=new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">JTextArea</span><span style="color:#E1E4E8;">(message);</span></span>
<span class="line"><span style="color:#E1E4E8;">        jp.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(jta);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//内容展示在面板上</span></span>
<span class="line"><span style="color:#E1E4E8;">        jf.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(jp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        jp.</span><span style="color:#B392F0;">updateUI</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> JFrame </span><span style="color:#B392F0;">createJFrame</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(map.</span><span style="color:#B392F0;">containsKey</span><span style="color:#E1E4E8;">(name)){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> map.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            JFrame jf</span><span style="color:#F97583;">=new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">JFrame</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;窗口&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">// 创建一个标题为&quot;JTextArea&quot;的窗口</span></span>
<span class="line"><span style="color:#E1E4E8;">            jf.</span><span style="color:#B392F0;">setBounds</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">// 设置窗口的坐标和大小</span></span>
<span class="line"><span style="color:#E1E4E8;">            jf.</span><span style="color:#B392F0;">setDefaultCloseOperation</span><span style="color:#E1E4E8;">(WindowConstants.EXIT_ON_CLOSE);</span><span style="color:#6A737D;">// 设置窗口关闭即退出程序</span></span>
<span class="line"><span style="color:#E1E4E8;">            jf.</span><span style="color:#B392F0;">setVisible</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">// 设置窗口可见</span></span>
<span class="line"><span style="color:#E1E4E8;">            map.</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(name,jf);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> jf;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        JFramePrint jFramePrint </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">JFramePrint</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        jFramePrint.</span><span style="color:#B392F0;">printMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;ces&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;hellowold&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> javax.swing.</span><span style="color:#005CC5;">*</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.util.HashMap;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.util.Map;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">JFramePrint</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    Map&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">JFrame</span><span style="color:#24292E;">&gt; map </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> HashMap&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">printMessage</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">jframeName</span><span style="color:#24292E;">,String </span><span style="color:#E36209;">message</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        JFrame jf </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createJFrame</span><span style="color:#24292E;">(jframeName);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//创建画笔</span></span>
<span class="line"><span style="color:#24292E;">        JPanel jp</span><span style="color:#D73A49;">=new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">JPanel</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//传入文本</span></span>
<span class="line"><span style="color:#24292E;">        JTextArea jta</span><span style="color:#D73A49;">=new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">JTextArea</span><span style="color:#24292E;">(message);</span></span>
<span class="line"><span style="color:#24292E;">        jp.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(jta);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//内容展示在面板上</span></span>
<span class="line"><span style="color:#24292E;">        jf.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(jp);</span></span>
<span class="line"><span style="color:#24292E;">        jp.</span><span style="color:#6F42C1;">updateUI</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> JFrame </span><span style="color:#6F42C1;">createJFrame</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">name</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(map.</span><span style="color:#6F42C1;">containsKey</span><span style="color:#24292E;">(name)){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> map.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(name);</span></span>
<span class="line"><span style="color:#24292E;">        }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            JFrame jf</span><span style="color:#D73A49;">=new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">JFrame</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;窗口&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">// 创建一个标题为&quot;JTextArea&quot;的窗口</span></span>
<span class="line"><span style="color:#24292E;">            jf.</span><span style="color:#6F42C1;">setBounds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">800</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">600</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">// 设置窗口的坐标和大小</span></span>
<span class="line"><span style="color:#24292E;">            jf.</span><span style="color:#6F42C1;">setDefaultCloseOperation</span><span style="color:#24292E;">(WindowConstants.EXIT_ON_CLOSE);</span><span style="color:#6A737D;">// 设置窗口关闭即退出程序</span></span>
<span class="line"><span style="color:#24292E;">            jf.</span><span style="color:#6F42C1;">setVisible</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">// 设置窗口可见</span></span>
<span class="line"><span style="color:#24292E;">            map.</span><span style="color:#6F42C1;">put</span><span style="color:#24292E;">(name,jf);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> jf;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        JFramePrint jFramePrint </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">JFramePrint</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        jFramePrint.</span><span style="color:#6F42C1;">printMessage</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;ces&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;hellowold&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,2),e=[o];function t(c,r,E,y,i,F){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{u as __pageData,A as default};
