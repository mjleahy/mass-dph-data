(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{K1II:function(t,n,e){"use strict";e.r(n),e.d(n,"__N_SSG",(function(){return A})),e.d(n,"default",(function(){return K}));var a=e("q1tI"),r=e.n(a),i=e("DVGM"),o=e("8Kt/"),u=e.n(o),d=r.a.createElement,s=e("4XXU"),l=s.ResponsiveContainer,c=s.ComposedChart,f=s.YAxis,m=s.XAxis,h=s.Brush,p=s.Bar,y=s.Line,w=s.Tooltip,g=s.Legend,v=e("xI7d"),x=v.FormatToolTip,I=v.FormatXAxis,T=function(t){var n=t.data;return d("div",{style:{width:"100%",height:600}},d(l,null,d(c,{width:800,height:300,data:n,margin:{top:5,right:30,left:20,bottom:5}},d(f,{yAxisId:"left",type:"number",domain:["auto","auto"]}),d(f,{yAxisId:"right",orientation:"right",axisLine:!1,domain:[0,1]}),d(m,{dataKey:"date",tickFormatter:I}),d(h,{dataKey:"date",tickFormatter:I}),d(p,{yAxisId:"right",dataKey:"Weekend",fill:"#DDDDDD"}),d(w,{labelFormatter:I,formatter:x}),d(y,{yAxisId:"left",name:"Daily Tests Performed",type:"monotone",dataKey:"Tests",stroke:"#000000"}),d(y,{yAxisId:"left",dot:!1,name:"7-day Average",type:"monotone",dataKey:"avg7",stroke:"#888888"}),d(g,null))))},D=r.a.createElement,A=!0;function K(t){var n=t.data;return D("div",{className:"container"},D(u.a,null,D("title",null,"Daily Testing"),D("link",{rel:"icon",href:"/favicon.ico"})),D("main",null,D(i.a,null),D("h1",null,"Daily Testing"),D(T,{data:n})))}},KOa9:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dailyTests",function(){return e("K1II")}])},xI7d:function(t,n,e){"use strict";e.r(n),e.d(n,"FormatXAxis",(function(){return i})),e.d(n,"FormatToolTip",(function(){return o})),e.d(n,"GetLogTicks",(function(){return u}));var a=e("wd/R"),r=e("LvDl"),i=function(t){return a(t).format("D MMM")},o=function(t,n,e){return[r.startCase(t),n]},u=function(t,n){var e=r.maxBy(t,n);return function(t){for(var n=[],e=0;Math.pow(10,e)<t;)n.push(Math.pow(10,e)),e+=1;return n.push(Math.pow(10,e)),n}(parseInt(e[n]))}}},[["KOa9",0,2,5,6,1,3,4,7]]]);