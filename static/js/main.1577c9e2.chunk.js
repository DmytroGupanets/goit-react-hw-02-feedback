(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,c){e.exports={statisticsList:"Statistics_statisticsList__1pos-",option:"Statistics_option__mrQvE",value:"Statistics_value__bQuAC"}},11:function(e,t,c){e.exports={notification:"Notification_notification__DV-jf"}},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(7),i=c.n(s),o=c(8),r=c(9),l=c(10),j=c(13),b=c(12),d=c(24),u=c(4),p=c.n(u),h=c(5),O=c.n(h),x=c(0),f=function(e){var t=e.options,c=e.onFeedback;return Object(x.jsx)("div",{className:O.a.controlButtons,children:Object.keys(t).map((function(e){return Object(x.jsx)("button",{className:O.a.button,name:e,onClick:c,children:e},Object(d.a)())}))})};f.proptype={options:p.a.objectOf(p.a.number.isRequired)};var m=f,v=c(6),k=c.n(v),_=function(e){var t=e.title,c=e.children;return Object(x.jsxs)("section",{className:k.a.section,children:[Object(x.jsx)("h2",{className:k.a.feedbackTitle,children:t}),c]})},N=c(1),g=c.n(N),F=function(e){var t=e.state,c=e.totalFeedback,a=e.positiveFeedbackPercentage;return Object(x.jsxs)("ul",{className:g.a.statisticsList,children:[Object(x.jsx)("li",{children:Object(x.jsxs)("p",{className:g.a.option,children:["good : ",Object(x.jsx)("span",{className:g.a.value,children:t.good})]})}),Object(x.jsx)("li",{children:Object(x.jsxs)("p",{className:g.a.option,children:["neutral : ",Object(x.jsx)("span",{className:g.a.value,children:t.neutral})]})}),Object(x.jsx)("li",{children:Object(x.jsxs)("p",{className:g.a.option,children:["bad : ",Object(x.jsx)("span",{className:g.a.value,children:t.bad})]})}),Object(x.jsx)("li",{children:Object(x.jsxs)("p",{className:g.a.option,children:["total : ",Object(x.jsx)("span",{className:g.a.value,children:c})]})}),Object(x.jsx)("li",{children:Object(x.jsxs)("p",{className:g.a.option,children:["positive feedback :",Object(x.jsx)("span",{className:g.a.value,children:a})]})})]})},S=c(11),y=c.n(S),w=function(e){var t=e.message;return Object(x.jsx)("h2",{className:y.a.notification,children:t})},B={good:0,neutral:0,bad:0},C=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(r.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state=B,e.onFeedback=function(t){var c=t.target.name;e.setState((function(e){return Object(o.a)({},c,e[c]+1)}))},e}return Object(l.a)(c,[{key:"render",value:function(){var e=Object.values(this.state).reduce((function(e,t){return e+t}),0),t=parseInt(100*this.state.good/e);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(_,{title:"Please leave feedback",children:Object(x.jsx)(m,{options:B,onFeedback:this.onFeedback})}),e?Object(x.jsx)(_,{title:"Statistics",children:Object(x.jsx)(F,{state:this.state,totalFeedback:e,positiveFeedbackPercentage:t})}):Object(x.jsx)(w,{message:"No feedback given"})]})}}]),c}(a.Component);c(21);i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root"))},5:function(e,t,c){e.exports={controlButtons:"FeedbackOptions_controlButtons__29krp",button:"FeedbackOptions_button__17gQ2"}},6:function(e,t,c){e.exports={section:"Section_section__345WJ",feedbackTitle:"Section_feedbackTitle__31HW8"}}},[[22,1,2]]]);
//# sourceMappingURL=main.1577c9e2.chunk.js.map