(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"9hfd":function(t,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hospitalizationVsTotal",function(){return a("onOe")}])},onOe:function(t,n,a){"use strict";a.r(n),a.d(n,"__N_SSG",(function(){return v})),a.d(n,"default",(function(){return m}));var e=a("q1tI"),i=a.n(e),o=a("DVGM"),r=a("8Kt/"),l=a.n(r),u=a("4XXU"),s=i.a.createElement,c=a("LvDl"),d=a("xI7d").GetLogTicks,f=function(t){var n=t.data,a=d(n,"hospitalizations"),e=d(n,"cases");return s("div",{style:{width:"100%",height:600}},s(u.ResponsiveContainer,null,s(u.ScatterChart,{width:800,height:600},s(u.CartesianGrid,null),s(u.XAxis,{dataKey:"cases",scale:"log",interval:0,label:"Total Cases",domain:[1,c.max(e)],ticks:e}),s(u.YAxis,{dataKey:"hospitalizations",interval:0,scale:"log",ticks:a,domain:[1,c.max(a)],label:{value:"Hospitalizations",angle:"-90"}}),s(u.Scatter,{name:"P1",data:n,fill:"#0000FF",line:!0}),s(u.Tooltip,null))))},h=a("qI+T"),p=i.a.createElement,v=!0;function m(t){var n=t.data,a=t.notes,e="Hospitalizations Vs Total",i=p(f,{data:n});return p("div",{className:"container"},p(l.a,null,p("title",null,e),p("link",{rel:"icon",href:"/favicon.ico"})),p("main",null,p(o.a,null),p("h1",null,e),p(h.a,{chart:i,notes:a})))}},"qI+T":function(t,n,a){"use strict";var e=a("q1tI"),i=e.createElement;n.a=function(t){var n=t.notes,a=t.chart;return i(e.Fragment,null,a,i("h3",null," Notes "),i("ul",null,n.map((function(t){return i("li",{key:t}," ",t," ")}))))}},xI7d:function(t,n,a){"use strict";a.r(n),a.d(n,"FormatXAxis",(function(){return o})),a.d(n,"FormatToolTip",(function(){return r})),a.d(n,"GetLogTicks",(function(){return l}));var e=a("wd/R"),i=a("LvDl"),o=function(t){return e(t).format("D MMM")},r=function(t,n,a){return[i.startCase(t),n]},l=function(t,n){var a=i.maxBy(t,n);return function(t){for(var n=[],a=0;Math.pow(10,a)<t;)n.push(Math.pow(10,a)),a+=1;return n.push(Math.pow(10,a)),n}(parseInt(a[n]))}}},[["9hfd",0,2,5,6,1,3,4,7]]]);