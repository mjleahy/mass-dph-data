(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{KtTt:function(t,n,e){"use strict";e.r(n),e.d(n,"__N_SSG",(function(){return f})),e.d(n,"default",(function(){return d}));var r=e("q1tI"),a=e.n(r),o=e("DVGM"),i=e("8Kt/"),u=e.n(i),s=e("h7qX"),c=a.a.createElement,f=!0;function d(t){var n=t.data,e=t.groups;return c("div",{className:"container"},c(u.a,null,c("title",null,"Daily Testing"),c("link",{rel:"icon",href:"/favicon.ico"})),c("main",null,c(o.a,null),c("h1",null,"New Cases By Age"),c(s.a,{data:n,groups:e})))}},h7qX:function(t,n,e){"use strict";var r=e("q1tI"),a=e.n(r),o=e("w5vR"),i=a.a.createElement,u=e("4XXU"),s=u.ReferenceLine,c=u.ResponsiveContainer,f=u.ComposedChart,d=u.YAxis,l=u.XAxis,h=u.Brush,p=(u.Bar,u.Line),w=u.Tooltip,m=u.Legend,v=e("xI7d"),g=(v.FormatToolTip,v.FormatXAxis);n.a=function(t){var n=t.data,e=t.groups;return i("div",{style:{width:"100%",height:600}},i(c,null,i(f,{width:800,height:300,data:n,margin:{top:5,right:30,left:20,bottom:5}},i(d,{type:"number",domain:[10,100]}),i(l,{dataKey:"date",tickFormatter:g}),i(h,{dataKey:"date",tickFormatter:g}),i(w,{labelFormatter:g}),e.map((function(t,n){return i(p,{id:t,name:t,type:"monotone",dataKey:t,stroke:o.a[n]})})),i(m,null),i(s,{y:0,stroke:"red",strokeDasharray:"3 3"}))))}},w5vR:function(t,n,e){"use strict";n.a=function(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r);return e}("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928")},wI9h:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newCasesByAge",function(){return e("KtTt")}])},xI7d:function(t,n,e){"use strict";e.r(n),e.d(n,"FormatXAxis",(function(){return o})),e.d(n,"FormatToolTip",(function(){return i})),e.d(n,"GetLogTicks",(function(){return u}));var r=e("wd/R"),a=e("LvDl"),o=function(t){return r(t).format("D MMM")},i=function(t,n,e){return[a.startCase(t),n]},u=function(t,n){var e=a.maxBy(t,n);return function(t){for(var n=[],e=0;Math.pow(10,e)<t;)n.push(Math.pow(10,e)),e+=1;return n.push(Math.pow(10,e)),n}(parseInt(e[n]))}}},[["wI9h",0,2,5,6,1,3,4,7]]]);