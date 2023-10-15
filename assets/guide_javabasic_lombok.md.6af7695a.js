import{_ as a,o as e,c as r,Q as t}from"./chunks/framework.a0a80147.js";const g=JSON.parse('{"title":"lombok注解","description":"","frontmatter":{"title":"lombok注解","date":"2020-11-10T18:34:36.000Z","category":"java基础相关","tag":"java","top_img":false},"headers":[],"relativePath":"guide/javabasic/lombok.md","filePath":"guide/javabasic/lombok.md"}'),o={name:"guide/javabasic/lombok.md"},l=t('<h3 id="lombok常见注解" tabindex="-1">lombok常见注解 <a class="header-anchor" href="#lombok常见注解" aria-label="Permalink to &quot;lombok常见注解&quot;">​</a></h3><p>pojo中作用</p><h4 id="getter-setter" tabindex="-1">@Getter/@Setter <a class="header-anchor" href="#getter-setter" aria-label="Permalink to &quot;@Getter/@Setter&quot;">​</a></h4><p>生成所有成员变量的get、set方法</p><h4 id="tostring" tabindex="-1">@ToString <a class="header-anchor" href="#tostring" aria-label="Permalink to &quot;@ToString&quot;">​</a></h4><p>toString()方法 of属性限定显示，exclude属性排除</p><h4 id="nonnull" tabindex="-1">@NonNull <a class="header-anchor" href="#nonnull" aria-label="Permalink to &quot;@NonNull&quot;">​</a></h4><p>用于判断成员变量标识是否为空，为空抛出空指针异常</p><h4 id="noargsconstructor" tabindex="-1">@NoArgsConstructor <a class="header-anchor" href="#noargsconstructor" aria-label="Permalink to &quot;@NoArgsConstructor&quot;">​</a></h4><p>生成无参构造器</p><h4 id="requiredargsconstructor" tabindex="-1">@RequiredArgsConstructor <a class="header-anchor" href="#requiredargsconstructor" aria-label="Permalink to &quot;@RequiredArgsConstructor&quot;">​</a></h4><p>生成包含final和@NonNull注解的成员变量的构造器</p><h4 id="allargsconstructor" tabindex="-1">@AllArgsConstructor <a class="header-anchor" href="#allargsconstructor" aria-label="Permalink to &quot;@AllArgsConstructor&quot;">​</a></h4><p>生成全参构造器</p><h4 id="data" tabindex="-1">@Data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;@Data&quot;">​</a></h4><p>作用于类上，@ToString @EqualsAndHashCode @Getter @Setter @RequiredArgsConstructor的集合</p><h4 id="log" tabindex="-1">@log <a class="header-anchor" href="#log" aria-label="Permalink to &quot;@log&quot;">​</a></h4><p>生成日志变量</p><h4 id="builder" tabindex="-1">@Builder <a class="header-anchor" href="#builder" aria-label="Permalink to &quot;@Builder&quot;">​</a></h4><p>将类转变为建造者模式，然后可以通过链式风格来创建对象</p><h4 id="cleanup" tabindex="-1">@Cleanup <a class="header-anchor" href="#cleanup" aria-label="Permalink to &quot;@Cleanup&quot;">​</a></h4><p>修饰对象，自动关闭资源，如io流的Stream</p><h4 id="sneakythrows" tabindex="-1">@SneakyThrows <a class="header-anchor" href="#sneakythrows" aria-label="Permalink to &quot;@SneakyThrows&quot;">​</a></h4><p>java中一些可能出现异常的地方，编译器会自动让你处理，trycatch或者trow，加上该注解即可骗过编译器，实际不会抛出异常</p>',24),n=[l];function s(i,h,c,d,u,p){return e(),r("div",null,n)}const m=a(o,[["render",s]]);export{g as __pageData,m as default};