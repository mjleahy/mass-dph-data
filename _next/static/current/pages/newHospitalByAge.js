(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"5+z9":function(t,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newHospitalByAge",function(){return a("lPbH")}])},h7qX:function(t,n,a){"use strict";var e=a("q1tI"),r=a.n(e),o=a("w5vR"),i=r.a.createElement,u=a("4XXU"),l=u.ReferenceLine,s=u.ResponsiveContainer,c=u.ComposedChart,f=u.YAxis,d=u.XAxis,p=u.Brush,h=(u.Bar,u.Line),w=u.Tooltip,m=u.Legend,v=a("xI7d"),b=(v.FormatToolTip,v.FormatXAxis);n.a=function(t){var n=t.data,a=t.groups;return i("div",{style:{width:"100%",height:600}},i(s,null,i(c,{width:800,height:300,data:n,margin:{top:5,right:30,left:20,bottom:5}},i(f,{type:"number",domain:[10,100]}),i(d,{dataKey:"date",tickFormatter:b}),i(p,{dataKey:"date",tickFormatter:b}),i(w,{labelFormatter:b}),a.map((function(t,n){return i(h,{id:t,name:t,type:"monotone",dataKey:t,stroke:o.a[n]})})),i(m,null),i(l,{y:0,stroke:"red",strokeDasharray:"3 3"}))))}},lPbH:function(t,n,a){"use strict";a.r(n),a.d(n,"__N_SSG",(function(){return c})),a.d(n,"default",(function(){return f}));var e=a("q1tI"),r=a.n(e),o=a("DVGM"),i=a("8Kt/"),u=a.n(i),l=a("h7qX"),s=r.a.createElement,c=!0;function f(t){var n=t.data,a=t.groups,e="New Hospitalizations By Age";return s("div",{className:"container"},s(u.a,null,s("title",null,e),s("link",{rel:"icon",href:"/favicon.ico"})),s("main",null,s(o.a,null),s("h1",null,e),s(l.a,{data:n,groups:a}),s("h3",null,"Notes"),s("ul",null,s("li",null,"Data was not published for 11 April"))))}},w5vR:function(t,n,a){"use strict";n.a=function(t){for(var n=t.length/6|0,a=new Array(n),e=0;e<n;)a[e]="#"+t.slice(6*e,6*++e);return a}("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928")},xI7d:function(t,n,a){"use strict";a.r(n),a.d(n,"FormatXAxis",(function(){return o})),a.d(n,"FormatToolTip",(function(){return i})),a.d(n,"GetLogTicks",(function(){return u}));var e=a("wd/R"),r=a("LvDl"),o=function(t){return e(t).format("D MMM")},i=function(t,n,a){return[r.startCase(t),n]},u=function(t,n){var a=r.maxBy(t,n);return function(t){for(var n=[],a=0;Math.pow(10,a)<t;)n.push(Math.pow(10,a)),a+=1;return n.push(Math.pow(10,a)),n}(parseInt(a[n]))}}},[["5+z9",0,2,5,6,1,3,4,7]]]);