(self.webpackChunkdocusaurus_2_website=self.webpackChunkdocusaurus_2_website||[]).push([[111],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91379:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var i=n(22122),o=n(19756),a=(n(67294),n(3905)),r=["components"],l={id:"releases-introduction",title:"Centreon Platform 21.10",description:"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",slug:"/"},s={unversionedId:"releases/releases-introduction",id:"releases/releases-introduction",isDocsHomePage:!1,title:"Centreon Platform 21.10",description:"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",source:"@site/docs/releases/introduction.md",sourceDirName:"releases",slug:"/",permalink:"/fr/docs/next/",version:"current",frontMatter:{id:"releases-introduction",title:"Centreon Platform 21.10",description:"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",slug:"/"},sidebar:"docs",next:{title:"Introduction",permalink:"/fr/docs/next/"}},c=[{value:"New Events view (beta)",id:"new-events-view-beta",children:[]},{value:"Centreon on Mobility",id:"centreon-on-mobility",children:[]},{value:"A more flexible hosts discovery",id:"a-more-flexible-hosts-discovery",children:[]},{value:"A better service mapping",id:"a-better-service-mapping",children:[]},{value:"Graphical View administration simplified",id:"graphical-view-administration-simplified",children:[]},{value:"Architecture &amp; Performance",id:"architecture--performance",children:[]},{value:"High Availability for everyone",id:"high-availability-for-everyone",children:[]}],u={toc:c};function m(e){var t=e.components,l=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Release date: October 22, 2021"),(0,a.kt)("p",null,"You'll find in this chapter the global ",(0,a.kt)("strong",{parentName:"p"},"Centreon Plateform 21.10")," release\nnote."),(0,a.kt)("p",null,"To access detailed release note by component, use the following sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"centreon-core.html"},"Core")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"centreon-commercial-extensions.html"},"Commercial extensions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"centreon-os-extensions.html"},"Open Source extensions"))),(0,a.kt)("h2",{id:"new-events-view-beta"},"New Events view (beta)"),(0,a.kt)("p",null,"Centreon Web comes with a brand new events view management experience. This new\nview is released as a beta feature becauwe we want to make this new view the\nmost efficient monitoring view dedicated to operators and system/network\nadministrator. To get to that point, we'll quickly iterate based on what we\nalready know and your feedbacks."),(0,a.kt)("p",null,"This new view is accessible directly from ",(0,a.kt)("inlineCode",{parentName:"p"},'Home > Events view (beta)"')," and\nbrings the following capabilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A unified page that regroups host & service resources in one single place\nfor a unified events management"),(0,a.kt)("li",{parentName:"ul"},"Regexp search based on multi-criteria and the possibility to force the\nsearch on a specific criteria (host name, host alias, host address, service\ndescription)"),(0,a.kt)("li",{parentName:"ul"},"Multi-criteria search based on multi-selects"),(0,a.kt)("li",{parentName:"ul"},"Inline & massive quick actions: acknowledgement, set a planned downtime,\nre-check a resource"),(0,a.kt)("li",{parentName:"ul"},"Detail information on the side of the listing, to quickly access information and\nnot losing what you were currently looking at"),(0,a.kt)("li",{parentName:"ul"},"... ",(0,a.kt)("em",{parentName:"li"},"And more to come in the next weeks/months"))),(0,a.kt)("iframe",{width:"640",height:"480",src:"https://www.youtube.com/embed/FVjuIbBDuYU",frameborder:"0",allowfullscreen:!0}),(0,a.kt)("p",null,"To know more about this feature, have a look to ",(0,a.kt)("a",{parentName:"p",href:"../alerts-notifications/events-view.html"},"the\ndocumentation")),(0,a.kt)("h2",{id:"centreon-on-mobility"},"Centreon on Mobility"),(0,a.kt)("p",null,"Centreon comes now with a Mobile App. that you can install on your phone to be\nable to perform the most common actions on resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Display resources status"),(0,a.kt)("li",{parentName:"ul"},"Filter resource status"),(0,a.kt)("li",{parentName:"ul"},"Act on any resource: acknowledge or set a downtime"),(0,a.kt)("li",{parentName:"ul"},"Display detail status information and graph when appropriate")),(0,a.kt)("video",{width:"375",height:"812",controls:"true",allowfullscreen:"true",poster:"../assets/mobile/mobile-login.png"},(0,a.kt)("source",{src:"../assets/mobile/mobile-demo.mp4",type:"video/mp4"})),(0,a.kt)("p",null,"Find more about this mobile application in the ",(0,a.kt)("a",{parentName:"p",href:"../mobile/introduction.html"},"dedicated\nsection")),(0,a.kt)("h2",{id:"a-more-flexible-hosts-discovery"},"A more flexible hosts discovery"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(80108).Z})),(0,a.kt)("p",null,"The Hosts Discovery feature coming from the Auto Discovery extension has been\ntotally rewritten to bring a new experience when it comes to add resources to\nyour configuration."),(0,a.kt)("p",null,"We've also added new functionalities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Easier and more secure management of credentials,"),(0,a.kt)("li",{parentName:"ul"},"Possibility to discover resources from any monitoring server,"),(0,a.kt)("li",{parentName:"ul"},"New mapping system to link results with Centreon configuration.")),(0,a.kt)("p",null,"Give a look at the ",(0,a.kt)("a",{parentName:"p",href:"../monitoring/discovery/hosts-discovery.html"},"dedicated\nsection")," to know how to launch your\nfirst discovery job","!"),(0,a.kt)("h2",{id:"a-better-service-mapping"},"A better service mapping"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Easier to configure and more relevant complex IT workflow monitoring")),(0,a.kt)("h4",{id:"new-calculation-methods"},"New calculation methods"),(0,a.kt)("p",null,"We've improved our service mapping capability (Centreon BAM extension) by adding\nnew status calculation methods."),(0,a.kt)("p",null,"IT Service or App. modeling was hard to understand mainly because the only\nmechanism the user had to determine an App./IT service status was a method based\non an \u201cImpact\u201d mode."),(0,a.kt)("p",null,"Now you're able to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Model simple use cases using ",(0,a.kt)("strong",{parentName:"li"},"Best")," or ",(0,a.kt)("strong",{parentName:"li"},"Worst")," status calculation\nmethods"),(0,a.kt)("li",{parentName:"ul"},"Model ",(0,a.kt)("strong",{parentName:"li"},"cluster")," concepts using a new ",(0,a.kt)("strong",{parentName:"li"},"Ratio")," calculation method")),(0,a.kt)("p",null,"Ex: I want 50% of my indicators to be OK ",">",' in that case you use the "Ratio"\nmethod and configure it like that'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(4137).Z})),(0,a.kt)("h4",{id:"new-planned-downtime-inheritance-management"},"New planned downtime inheritance management"),(0,a.kt)("p",null,"Business activity (\\<=",">"," App. & Services) appears \u201cDown\u201d even when a maintenance\n(\\<=",">"," planned downtime) was anticipated by the IT teams. That\u2019s not convenient\nbecause it may be visible by external stakeholders & understandable in the\nreporting"),(0,a.kt)("p",null,"We add the possibility to exclude the indicator when it\u2019s in planned downtime so\nthe Business Activity is not impacted during this planned downtime."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(14022).Z})),(0,a.kt)("p",null,"It's configurable at business\u2019 activity level & globally (default behavior)"),(0,a.kt)("h2",{id:"graphical-view-administration-simplified"},"Graphical View administration simplified"),(0,a.kt)("h4",{id:"license-management-simplified"},"License management simplified"),(0,a.kt)("p",null,"The license is now managed using the same mechanism than the other extensions:\nupload & activate it on the Centreon central server."),(0,a.kt)("p",null,"Don't worry if you come from a \\< 20.04 version, your license is still valid.\nYou'll only have a warning message in the license manager telling you that a\nlicense is required but it has no impact on Centreon Map. You can ask a new one\nto our support."),(0,a.kt)("h4",{id:"packaging-simplified"},"Packaging simplified"),(0,a.kt)("p",null,"Centreon Map server package doesn't require tomcat anymore, it only relies on\nJava."),(0,a.kt)("p",null,"When you manipulate the corresponding service, you have to use now"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart centreon-map\n")),(0,a.kt)("p",null,"And logs are now in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/centreon-map/")),(0,a.kt)("p",null,'Finally, it\'s now possible to install Centreon Map using an "automatic" (silent)\nmode instead of the only interactive mode.'),(0,a.kt)("h2",{id:"architecture--performance"},"Architecture & Performance"),(0,a.kt)("h4",{id:"new-tasks-handler"},"New tasks handler"),(0,a.kt)("p",null,"A new component has entered the Centreon family: Gorgone."),(0,a.kt)("p",null,"Gorgone comes in replacement of Centcore to ensure tasks handling in\ndistributed architectures: user's actions from web interface, copy of\nEngine and Broker configurations and so on."),(0,a.kt)("p",null,"It will also be used as a new way to perform any other actions that is not\nmonitoring. First applications are hosts discovery, new Anomaly Detection module\nconfigurations fetching or platform statistics collection."),(0,a.kt)("p",null,"Gorgone comes with a legacy mode to handle SSH communication with monitoring\nservers, but the new ZMQ communication is recommended to fully benefit from\nall the new functionalities."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../monitoring/monitoring-servers/communications.html"},"the communication\nsection")," to know more."),(0,a.kt)("h4",{id:"engine-future-ready-broker-multi-thread-compatible"},"Engine: future ready, Broker: multi-thread compatible"),(0,a.kt)("p",null,"In this version, Engine introduces the last stage of the new Anomaly Detection\nfeature. Its performances have been globally improved."),(0,a.kt)("p",null,"Broker on its side has been partially rewritten to get ride of QT and bring a\nnew way to communicate with the SQL backend through multi-threaded connections."),(0,a.kt)("p",null,"Both now provide a new gRPC API that will tremendously improve the way we can\ncommunicate with them in future versions."),(0,a.kt)("h2",{id:"high-availability-for-everyone"},"High Availability for everyone"),(0,a.kt)("p",null,"Centreon opens its High Availability solution to everyone by sharing its\nsource code and installation procedures."),(0,a.kt)("p",null,"Give it a try by following the ",(0,a.kt)("a",{parentName:"p",href:"../administration/centreon-ha/architectures.html"},"dedicated\ndocumentation"),"."))}m.isMDXComponent=!0},80108:function(e,t,n){"use strict";t.Z=n.p+"assets/images/host-discovery-58ef7350f6e21e1662804b8c1a5d8cec.gif"},14022:function(e,t,n){"use strict";t.Z=n.p+"assets/images/service-mapping-inheritance-f7420ff498b07a4a7af43d6fd560327d.png"},4137:function(e,t,n){"use strict";t.Z=n.p+"assets/images/service-mapping-ratio-b3f344d9309b41affb1fce97437d6f1b.png"}}]);