(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),u=n.n(c),o=n(1),s=n.n(o),i=n(3),l=n(4),m=function(e){var t=e.persons,n=e.handleDelete,a=t.map((function(e){return r.a.createElement("div",{key:e.id},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return n(e)}},"delete"))}));return r.a.createElement("div",{className:"Persons"},a)},p=function(e){var t=e.value,n=e.handleChange;return r.a.createElement("div",{className:"Filter"},r.a.createElement("div",null,"filter shown with"),r.a.createElement("input",{defaultValue:t,onChange:n}))},f=function(e){var t=e.newName,n=e.handleNameChange,a=e.newNumber,c=e.handleNumberChange,u=e.handleClick;return r.a.createElement("div",{className:"PersonForm"},r.a.createElement("form",null,r.a.createElement("div",null,"name:","",r.a.createElement("input",{type:"text",defaultValue:t,onChange:n})),r.a.createElement("div",null,"number:","",r.a.createElement("input",{type:"text",defaultValue:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{onClick:u},"add"))))},d=n(5),h=n.n(d),v="https://evening-shelf-39665.herokuapp.com/api/persons",b={getData:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(v);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createPerson:function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(v,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteId:function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("".concat(v,"/").concat(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateId:function(){var e=Object(i.a)(s.a.mark((function e(t,n){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,r=t.number,e.next=3,h.a.put("".concat(v,"/").concat(n),{name:a,number:r,id:n});case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},w=(n(39),function(e){var t=e.notification,n=t.message,a=t.type;return r.a.createElement("div",{className:"Notification ".concat(a)},n)}),E=b.getData,g=b.deleteId,k=b.createPerson,x=b.updateId,y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),o=Object(l.a)(u,2),d=o[0],h=o[1],v=Object(a.useState)(""),b=Object(l.a)(v,2),y=b[0],j=b[1],O=Object(a.useState)(""),C=Object(l.a)(O,2),N=C[0],D=C[1],I=Object(a.useState)(),P=Object(l.a)(I,2),S=P[0],V=P[1];Object(a.useEffect)((function(){F()}),[]);var F=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,E();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.id,window.confirm("Delete ".concat(n,"?")),e.next=4,g(a);case 4:F();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.confirm("".concat(t.name," is already added to phonebook,replace the old number with a new one?")),e.next=3,x(t,n);case 3:(a=e.sent).error?(V({type:"error",message:a.error}),A()):(V({type:"success",message:"Updated ".concat(t.name)}),F(),A()),E();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){setTimeout((function(){V(null)}),5e3)},B=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={name:d,number:y},!n.some((function(e){return e.name===d}))){e.next=16;break}return r=n.find((function(e){return e.name===d})).id,e.prev=4,e.next=7,L(a,r);case 7:e.next=14;break;case 9:e.prev=9,e.t0=e.catch(4),V({type:"error",message:"Information of ".concat(a.name," has already been removed from server")}),F(),A();case 14:e.next=26;break;case 16:return e.prev=16,e.next=19,k(a);case 19:(u=e.sent).error?(console.log(u.error),V({type:"error",message:u.error})):(c(n.concat(u)),V({type:"success",message:"Add ".concat(a.name)}),A()),e.next=26;break;case 23:e.prev=23,e.t1=e.catch(16),console.error(e.t1);case 26:case"end":return e.stop()}}),e,null,[[4,9],[16,23]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),S?r.a.createElement(w,{notification:S}):r.a.createElement("div",null),r.a.createElement(p,{value:N,handleChange:function(e){return D(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(f,{newName:d,handleNameChange:function(e){return h(e.target.value)},newNumber:y,handleNumberChange:function(e){return j(e.target.value)},handleClick:B}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{persons:function(e){return e.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())}))}(n),handleDelete:J}))};u.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e09575ad.chunk.js.map