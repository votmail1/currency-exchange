(this["webpackJsonpcurrency-exchange"]=this["webpackJsonpcurrency-exchange"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(8),s=c.n(r),i=(c(13),c(2)),l=c(3),u=c(5),j=c(4),o=(c(14),c(6),c(15),c(0)),d=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"container header text-white min-vw-100 m-0",children:[Object(o.jsx)("div",{className:"row top-title align-bottom m-auto "}),Object(o.jsx)("div",{className:"row site-title align-bottom m-auto ",children:Object(o.jsx)("div",{className:"col-sm text-start d-inline align-bottom fs-2",children:"Currency Exchange"})})]})}}]),c}(a.a.Component),b=(c(17),c(18),function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).calcRate=function(e){e.preventDefault();var t=e.target.elements,c=t["count-currency"].value,a=t["type-currency"].value;n.setState({result:(c/n.state.rate[a]).toFixed(2)})},n.state={result:0},n}return Object(l.a)(c,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"h-75 mt-4",children:[Object(o.jsx)("div",{className:"row w-100 m-auto text-start mt-2",children:Object(o.jsx)("h5",{children:" Calculate "})}),Object(o.jsxs)("div",{className:"calc border border-dark m-4 mt-1 h-75",children:[Object(o.jsx)("div",{className:"fs-5 fw-bold text-start p-4",children:" I want"}),Object(o.jsx)("div",{className:"text-start",children:Object(o.jsxs)("form",{className:"p-4",onSubmit:this.calcRate,children:[Object(o.jsx)("input",{type:"nymber",defaultValue:"100",name:"count-currency"}),Object(o.jsx)("select",{name:"type-currency",id:"",children:Object.keys(this.props.rate).map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))}),Object(o.jsx)("input",{type:"submit",defaultValue:"calc"})]})}),Object(o.jsxs)("div",{className:"text-start p-4",children:[Object(o.jsx)("h4",{children:"Result"}),Object(o.jsx)("ul",{className:"calc-res",children:Object(o.jsxs)("li",{children:["EUR ",this.state.result]})})]})]})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{rate:e.rate}}}]),c}(a.a.Component)),h=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).getRate=function(){fetch("https://api.exchangeratesapi.io/latest").then((function(e){return e.json()})).then((function(e){n.setState({date:e.date});for(var t={},c=0;c<n.currency.length;c++)t[n.currency[c]]=e.rates[n.currency[c]];n.setState({currencyRate:t})}))},n.state={date:"",currencyRate:{}},n.currency=["USD","RUB","CAD","PHP"],n.getRate(),n}return Object(l.a)(c,[{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{className:"content w-75 m-auto bg-white pb-2 pt-4 h-75",children:[Object(o.jsx)("div",{className:"row w-100 text-start p-2",children:Object(o.jsxs)("h5",{children:[" \u0421urrency exchange on ",this.state.date," "]})}),Object(o.jsx)("div",{className:"row w-100 m-auto h-25",children:Object.keys(this.state.currencyRate).map((function(t){return Object(o.jsxs)("div",{className:"currency col border border-dark h-100 m-4 mt-1",children:[Object(o.jsx)("div",{className:"h-50 text-center fs-5 fw-bold pt-3",children:t}),Object(o.jsx)("div",{className:"h-25 text-end",children:e.state.currencyRate[t].toFixed(2)}),Object(o.jsx)("div",{className:"h-25 text-end",children:" for 1 EUR"})]},t)}))}),Object(o.jsx)(b,{rate:this.state.currencyRate})]})}}]),c}(a.a.Component),m=(c(19),function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container footer bg-dark text-white min-vw-100 m-0",children:Object(o.jsx)("div",{className:"row site-title w-75 m-auto",children:Object(o.jsx)("div",{className:"col-sm text-start",children:"footer"})})})})}}]),c}(a.a.Component)),O=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"container-sm vh-100 min-vw-100 m-0",children:[Object(o.jsx)(d,{}),Object(o.jsx)(h,{}),Object(o.jsx)(m,{})]})})}}]),c}(a.a.Component);s.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.85c99058.chunk.js.map