(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{77:function(e,n,t){},93:function(e,n,t){"use strict";t.r(n);var i,a,r=t(1),s=t.n(r),c=t(31),o=t.n(c),l=(t(77),t(30)),m=t(20),j=t(54),d=Object(m.gql)(i||(i=Object(j.a)(["\n    query pokemons($limit: Int, $offset: Int) {\n        pokemons(limit: $limit, offset: $offset) {\n            count\n            next\n            previous\n            status\n            message\n            results {\n                url\n                name\n                image\n            }\n        }\n    }\n"]))),p=Object(m.gql)(a||(a=Object(j.a)(["\n    query pokemon($name: String!) {\n      pokemon(name: $name) {\n        id\n        name\n        abilities {\n          ability {\n            name\n          }\n        }\n        moves {\n          move {\n            name\n          }\n        }\n        types {\n          type {\n            name\n          }\n        }\n        message\n        status\n      }\n    }\n"]))),b=t(95),u=t(4),h=[];function O(e){var n,t=(n=2,Math.floor(Math.random()*Math.floor(n))),i=JSON.parse(window.localStorage.getItem("myPokemons")),a=[];if(null!=i&&i.map((function(e){return a.push(e.nickname)})),0==t)return alert("Oops, better luck next time!");var r=prompt("Congratulations! You caught the Pokemon!\nGive it a nickname: ");null!=r&&""!=r&&(a.includes(r)?alert("Nickname already used, please use another nickname"):(e.nickname=r,null!=i?(i.push(e),window.localStorage.setItem("myPokemons",JSON.stringify(i))):(h.push(e),window.localStorage.setItem("myPokemons",JSON.stringify(h)))))}var g,x,k=function(e){return Object(u.jsxs)("div",{style:{textAlign:"center",padding:"3%",paddingTop:"0"},children:[Object(u.jsx)("h1",{children:"Pokemon Details"}),Object(u.jsx)("img",{src:e.pDetails.image,alt:e.pDetails.name}),Object(u.jsxs)("p",{children:["Name: ",e.pDetails.name]}),Object(u.jsxs)("p",{children:["Types: ",e.pDetails.types.map((function(e){return Object(u.jsxs)("span",{children:[e.type.name,", "]},e.type.name)}))]}),Object(u.jsxs)("p",{children:["Moves: ",e.pDetails.moves.map((function(e){return Object(u.jsxs)("span",{children:[e.move.name,", "]},e.move.name)}))]}),Object(u.jsx)(b.a,{variant:"primary",onClick:O.bind(this,e.pDetails),children:"Catch Pokemon"})]})};var y=function(e){var n=Object(m.useLazyQuery)(p,{variables:{name:e.pokemon.name}}),t=Object(l.a)(n,2),i=t[0],a=t[1],r=a.loading,s=a.error,c=a.data;if(r)return Object(u.jsx)("p",{children:"Loading..."});if(s)return Object(u.jsx)("p",{children:"Error :("});if(c)return(g=JSON.parse(JSON.stringify(c.pokemon))).image=e.pokemon.image,Object(u.jsx)(k,{pDetails:g},g.id);var o=JSON.parse(window.localStorage.getItem("myPokemons"));return x=null!=o?o.filter((function(n){return n.name===e.pokemon.name})).length:0,Object(u.jsxs)("div",{style:{textAlign:"center",padding:"3%",paddingTop:"0"},children:[Object(u.jsx)("h1",{children:e.pokemon.name}),Object(u.jsxs)("p",{children:["Owned Total: ",x,Object(u.jsx)("br",{}),Object(u.jsx)("img",{src:e.pokemon.image,alt:"pokemon"})]}),Object(u.jsx)(b.a,{variant:"primary",onClick:function(){return i()},children:"See Pokemon Details"})]},e.pokemon.name)},f=t(96),v=t(97),w=t(98),S=t(101);var P=function(){var e=Object(m.useQuery)(d),n=e.loading,t=e.error,i=e.data;return n?Object(u.jsx)("p",{children:"Loading..."}):t?Object(u.jsx)("p",{children:"Error :("}):Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{style:{marginTop:"5%"},children:Object(u.jsx)(v.a,{style:{marginBottom:"5%"},children:i.pokemons.results.map((function(e){return Object(u.jsx)(w.a,{xs:"12",md:"6",style:{padding:"2%"},children:Object(u.jsxs)(S.a,{children:[Object(u.jsx)(y,{pokemon:e})," "]})},e.url)}))})})})},C=t(72);var I=function(){var e=this,n=Object(r.useState)([]),t=Object(l.a)(n,2),i=t[0],a=t[1];function s(e){window.confirm("Are you sure you want to release this Pokemon?")&&(i.splice(e,1),a((function(e){return Object(C.a)(e)})),window.localStorage.setItem("myPokemons",JSON.stringify(i)))}return null!=(i=JSON.parse(window.localStorage.getItem("myPokemons")))&&0!=i.length?Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{style:{marginTop:"5%"},children:Object(u.jsx)(v.a,{style:{marginBottom:"5%"},children:i.map((function(n,t){return Object(u.jsx)(w.a,{xs:"12",md:"6",style:{padding:"2%"},children:Object(u.jsx)(S.a,{children:Object(u.jsxs)("div",{style:{textAlign:"center",padding:"3%",paddingTop:"0"},children:[Object(u.jsx)("h1",{children:n.name}),Object(u.jsx)("img",{src:n.image,alt:n.name}),Object(u.jsxs)("p",{children:["Nickname: ",n.nickname]}),Object(u.jsx)(b.a,{variant:"primary",onClick:s.bind(e,t),children:"Release Pokemon"})]})})},n.nickname)}))})})}):Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{style:{marginTop:"5%"},children:Object(u.jsx)(v.a,{style:{marginBottom:"5%"},children:Object(u.jsx)(w.a,{xs:"12",md:"12",style:{padding:"2%",textAlign:"center"},children:Object(u.jsx)("p",{children:"No pokemons caught yet:("})})})})})},N=(t(86),t(99)),L=t(100),T=new m.ApolloClient({uri:"https://graphql-pokeapi.vercel.app/api/graphql",cache:new m.InMemoryCache});var D=function(){var e=Object(r.useState)("pokeList"),n=Object(l.a)(e,2),t=n[0],i=n[1];return Object(u.jsxs)(m.ApolloProvider,{client:T,children:[Object(u.jsxs)(N.a,{fixed:"top",bg:"light",expand:"lg",children:[Object(u.jsx)(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(N.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(L.a,{className:"justify-content-center",style:{flex:1},children:[Object(u.jsx)(L.a.Item,{children:Object(u.jsx)(L.a.Link,{href:"#",onClick:function(){i("pokeList")},children:"Pokemon List"})}),Object(u.jsx)(L.a.Item,{children:Object(u.jsx)(L.a.Link,{href:"#",onClick:function(){i("myPokemons")},children:"My Pokemons"})})]})})]}),Object(u.jsxs)("div",{children:["pokeList"===t&&Object(u.jsx)(P,{}),"myPokemons"===t&&Object(u.jsx)(I,{})]})]})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,102)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),i(e),a(e),r(e),s(e)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root")),J()}},[[93,1,2]]]);
//# sourceMappingURL=main.2ae8f36b.chunk.js.map