import{_ as e,o as a,c as t,Q as l}from"./chunks/framework.8153c8a6.js";const h=JSON.parse('{"title":"Oracle触发器","description":"","frontmatter":{"title":"Oracle触发器","date":"2019-10-15T08:48:16.000Z"},"headers":[],"relativePath":"guide/database/oracle/Oracle-触发器.md","filePath":"guide/database/oracle/Oracle-触发器.md"}'),i={name:"guide/database/oracle/Oracle-触发器.md"},p=l('<h4 id="触发器" tabindex="-1">触发器 <a class="header-anchor" href="#触发器" aria-label="Permalink to &quot;触发器&quot;">​</a></h4><ul><li><p>触发器：数据库发生的事件作为另一个事件发生的触发的设计</p></li><li><p>分类：根据触发事件不同分为三类</p><ul><li>数据操作语句（DML）</li><li>数据定义语句（DDL）</li><li>数据库事件</li></ul></li><li><p>DML触发器</p><p>监听数据操作语句</p><p>数据操作语句insert、delete、select、update四种操作语句执行时触发执行另外一个事件</p></li><li><p>补充INSTEAD OF触发器(DML触发器的扩展)</p><p>监听数据操作语句</p><p>当数据操作语句insert、delete、select、update四种操作语句要执行时,用另外的事件执行去替代被监听的语句(即被监听的事件不执行，执行替代后的事件)</p></li><li><p>DDL触发器</p><p>监听数据定义语句</p><p>执行DDL语句时触发，可以监听表的创建</p></li><li><p>数据库事件触发器</p><p>监听数据库事件</p><p>可以监听数据库启动或者关闭、用户登录或者登出</p></li></ul>',2),r=[p];function c(_,s,o,d,n,u){return a(),t("div",null,r)}const m=e(i,[["render",c]]);export{h as __pageData,m as default};
