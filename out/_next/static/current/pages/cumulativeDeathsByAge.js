(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{LmCa:function(t,n,e){"use strict";var a=e("q1tI"),r=e.n(a).a.createElement;n.a=function(t){var n=t.scale,e=t.setScale;return r("button",{onClick:function(){e(n+1)}},"Toggle Scale")}},Y3i4:function(t,n,e){"use strict";e.r(n),e.d(n,"__N_SSG",(function(){return k})),e.d(n,"default",(function(){return y}));var a=e("q1tI"),r=e.n(a),o=e("8Kt/"),u=e.n(o),i=e("DVGM"),c=e("4XXU"),l=e("w5vR"),f=e("xI7d"),s=r.a.createElement,d=e("LvDl"),m=e("wd/R"),h=function(t){return m(t).format("D MMM")},p=function(t,n,e){return[t,d.startCase(n)]},v=["0-19","20-29","30-39","40-49","50-59","60-69","70-79","80+"],w=function(t){var n=t.data,e=t.scale,a=[];return n.map((function(t){var n=t.date;v.map((function(e){a.push({date:n,age:e,deaths:t[e]})}))})),s("div",{style:{width:"100%",height:600}},s(c.ResponsiveContainer,null,s(c.LineChart,{width:800,height:300,data:n,margin:{top:5,right:30,left:20,bottom:5}},v.map((function(t,n){return s(c.Line,{key:t,type:"monotone",dataKey:t,stroke:l.a[n]})})),s(c.XAxis,{dataKey:"date",tickFormatter:h}),s(c.YAxis,{type:"number",domain:["auto","auto"],scale:e%2==0?"auto":"log",ticks:e%2==0?null:Object(f.GetLogTicks)(a,"deaths")}),s(c.Brush,{dataKey:"date",tickFormatter:h}),s(c.Tooltip,{labelFormatter:h,formatter:p}),s(c.Legend,null),s(c.CartesianGrid,null))))},g=e("LmCa"),b=r.a.createElement,k=!0;function y(t){var n=t.data,e=Object(a.useState)(0),r=e[0],o=e[1],c="Cumulative Deaths By Age";return b("div",{className:"container"},b(u.a,null,b("title",null,c),b("link",{rel:"icon",href:"/favicon.ico"})),b("main",null,b(i.a,null),b("h1",null,c),b(w,{data:n,scale:r}),b(g.a,{scale:r,setScale:o})))}},ogmq:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cumulativeDeathsByAge",function(){return e("Y3i4")}])},w5vR:function(t,n,e){"use strict";n.a=function(t){for(var n=t.length/6|0,e=new Array(n),a=0;a<n;)e[a]="#"+t.slice(6*a,6*++a);return e}("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928")},xI7d:function(t,n,e){"use strict";e.r(n),e.d(n,"FormatXAxis",(function(){return o})),e.d(n,"FormatToolTip",(function(){return u})),e.d(n,"GetLogTicks",(function(){return i}));var a=e("wd/R"),r=e("LvDl"),o=function(t){return a(t).format("D MMM")},u=function(t,n,e){return[r.startCase(t),n]},i=function(t,n){var e=r.maxBy(t,n);return function(t){for(var n=[],e=0;Math.pow(10,e)<t;)n.push(Math.pow(10,e)),e+=1;return n.push(Math.pow(10,e)),n}(parseInt(e[n]))}}},[["ogmq",0,2,5,6,1,3,4,7]]]);