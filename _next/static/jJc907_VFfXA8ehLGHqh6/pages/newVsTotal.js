(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"1Z2l":function(n,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newVsTotal",function(){return a("IzHh")}])},IzHh:function(n,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return m})),a.d(t,"default",(function(){return p}));var e=a("q1tI"),r=a.n(e),i=a("DVGM"),o=a("4XXU"),l=r.a.createElement,u=a("xI7d").GetLogTicks,s=a("LvDl"),c=function(n){var t=n.data,a=u(t,"totalCases"),e=u(t,"newCases");return l("div",{style:{width:"100%",height:600}},l(o.ResponsiveContainer,null,l(o.ScatterChart,null,l(o.CartesianGrid,null),l(o.XAxis,{dataKey:"totalCases",ticks:a,interval:0,scale:"log",domain:[1,s.max(a)]}),l(o.YAxis,{dataKey:"newCases",ticks:e,interval:0,scale:"log",domain:[1,s.max(e)]}),l(o.Scatter,{name:"P1",data:t,fill:"#0000FF",line:!0}),l(o.Tooltip,null))))},d=a("8Kt/"),f=a.n(d),w=a("qI+T"),h=r.a.createElement,m=!0;function p(n){var t=n.data,a=n.notes,e=h(c,{data:t});return h("div",{className:"container"},h(f.a,null,h("title",null,"New Vs Total"),h("link",{rel:"icon",href:"/favicon.ico"})),h("main",null,h(i.a,null),h("h1",null,"New Vs Total"),h(w.a,{chart:e,notes:a})))}},"qI+T":function(n,t,a){"use strict";var e=a("q1tI"),r=e.createElement;t.a=function(n){var t=n.notes,a=n.chart;return r(e.Fragment,null,a,r("h3",null," Notes "),r("ul",null,t.map((function(n){return r("li",{key:n}," ",n," ")}))))}},xI7d:function(n,t,a){"use strict";a.r(t),a.d(t,"FormatXAxis",(function(){return i})),a.d(t,"FormatToolTip",(function(){return o})),a.d(t,"GetLogTicks",(function(){return l}));var e=a("wd/R"),r=a("LvDl"),i=function(n){return e(n).format("D MMM")},o=function(n,t,a){return[r.startCase(n),t]},l=function(n,t){var a=r.maxBy(n,t);return function(n){for(var t=[],a=0;Math.pow(10,a)<n;)t.push(Math.pow(10,a)),a+=1;return t.push(Math.pow(10,a)),t}(parseInt(a[t]))}}},[["1Z2l",0,2,6,7,1,3,4,5]]]);