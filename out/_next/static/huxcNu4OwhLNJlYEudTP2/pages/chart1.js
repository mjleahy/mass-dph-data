(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{CUrA:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return k})),n.d(e,"default",(function(){return v}));var a=n("q1tI"),o=n.n(a),r=n("8Kt/"),i=n.n(r),l=n("DVGM"),u=n("4XXU"),c=o.a.createElement,s=n("LvDl"),d=n("wd/R"),h=function(t){return d(t).format("D MMM")},m=function(t,e,n){return[t,s.startCase(e)]},f=function(t){var e=t.data,n=t.scale;return c("div",{style:{width:"100%",height:600}},c(u.ResponsiveContainer,null,c(u.LineChart,{width:800,height:300,data:e,margin:{top:5,right:30,left:20,bottom:5}},c(u.Line,{type:"monotone",dataKey:"tests",stroke:"#8884d8"}),c(u.Line,{type:"monotone",dataKey:"cases",stroke:"#FF0000"}),c(u.Line,{type:"monotone",dataKey:"deaths",stroke:"#000000"}),c(u.Line,{type:"monotone",dataKey:"hospitalizations",stroke:"#00FF00"}),c(u.XAxis,{dataKey:"date",tickFormatter:h}),c(u.YAxis,{type:"number",domain:["auto","auto"],scale:n%2==0?"auto":"log"}),c(u.Brush,{dataKey:"date",tickFormatter:h}),c(u.Tooltip,{labelFormatter:h,formatter:m}),c(u.Legend,null))))},p=o.a.createElement,w=function(t){var e=t.scale,n=t.setScale;return p("button",{onClick:function(){n(e+1)}},"Toggle Scale")},y=o.a.createElement,k=!0;function v(t){var e=t.data,n=Object(a.useState)(0),o=n[0],r=n[1];return y("div",{className:"container"},y(i.a,null,y("title",null,"Chart 1"),y("link",{rel:"icon",href:"/favicon.ico"})),y("main",null,y(l.a,null),y("h1",null,"Chart 1"),y(f,{data:e,scale:o}),y(w,{scale:o,setScale:r})))}},traH:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chart1",function(){return n("CUrA")}])}},[["traH",0,2,5,7,1,3,4,6]]]);