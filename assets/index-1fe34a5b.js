(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(i){if(i.ep)return;i.ep=!0;const c=a(i);fetch(i.href,c)}})();function d(){}function ue(t){return t()}function ce(){return Object.create(null)}function P(t){t.forEach(ue)}function fe(t){return typeof t=="function"}function k(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function be(t){return Object.keys(t).length===0}function r(t,e){t.appendChild(e)}function I(t,e,a){t.insertBefore(e,a||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function we(t){return document.createTextNode(t)}function p(){return we(" ")}function b(t,e,a){a==null?t.removeAttribute(e):t.getAttribute(e)!==a&&t.setAttribute(e,a)}function ge(t){return Array.from(t.childNodes)}function ye(t,e,a,s){a===null?t.style.removeProperty(e):t.style.setProperty(e,a,s?"important":"")}let Q;function x(t){Q=t}const _=[],he=[],N=[],pe=[],ve=Promise.resolve();let V=!1;function Ae(){V||(V=!0,ve.then(me))}function U(t){N.push(t)}const K=new Set;let B=0;function me(){const t=Q;do{for(;B<_.length;){const e=_[B];B++,x(e),Ce(e.$$)}for(x(null),_.length=0,B=0;he.length;)he.pop()();for(let e=0;e<N.length;e+=1){const a=N[e];K.has(a)||(K.add(a),a())}N.length=0}while(_.length);for(;pe.length;)pe.pop()();V=!1,K.clear(),x(t)}function Ce(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const O=new Set;let _e;function $(t,e){t&&t.i&&(O.delete(t),t.i(e))}function D(t,e,a,s){if(t&&t.o){if(O.has(t))return;O.add(t),_e.c.push(()=>{O.delete(t),s&&(a&&t.d(1),s())}),t.o(e)}else s&&s()}function F(t){t&&t.c()}function j(t,e,a,s){const{fragment:i,after_update:c}=t.$$;i&&i.m(e,a),s||U(()=>{const n=t.$$.on_mount.map(ue).filter(fe);t.$$.on_destroy?t.$$.on_destroy.push(...n):P(n),t.$$.on_mount=[]}),c.forEach(U)}function T(t,e){const a=t.$$;a.fragment!==null&&(P(a.on_destroy),a.fragment&&a.fragment.d(e),a.on_destroy=a.fragment=null,a.ctx=[])}function xe(t,e){t.$$.dirty[0]===-1&&(_.push(t),Ae(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(t,e,a,s,i,c,n,f=[-1]){const h=Q;x(t);const o=t.$$={fragment:null,ctx:[],props:c,update:d,not_equal:i,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:ce(),dirty:f,skip_bound:!1,root:e.target||h.$$.root};n&&n(o.root);let u=!1;if(o.ctx=a?a(t,e.props||{},(m,A,...g)=>{const C=g.length?g[0]:A;return o.ctx&&i(o.ctx[m],o.ctx[m]=C)&&(!o.skip_bound&&o.bound[m]&&o.bound[m](C),u&&xe(t,m)),A}):[],o.update(),u=!0,P(o.before_update),o.fragment=s?s(o.ctx):!1,e.target){if(e.hydrate){const m=ge(e.target);o.fragment&&o.fragment.l(m),m.forEach(v)}else o.fragment&&o.fragment.c();e.intro&&$(t.$$.fragment),j(t,e.target,e.anchor,e.customElement),me()}x(h)}class E{$destroy(){T(this,1),this.$destroy=d}$on(e,a){if(!fe(a))return d;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(a),()=>{const i=s.indexOf(a);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!be(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function $e(t){let e;return{c(){e=l("div"),e.innerHTML=`<div id="groupsio_unstyled_embed_signup"><form action="https://groups.io/g/geospatialjobs/signup?u=8411627063917404564" method="post" id="groupsio-embedded-subscribe-form" name="groupsio-embedded-subscribe-form" target="_blank"><div id="groupsio_unstyled_embed_signup_scroll"><input type="email" value="" name="email" class="email input input-bordered input-primary mt-5" id="email" placeholder="email address" required=""/> 
      
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8411627063917404564" tabindex="-1" value=""/></div> 
      <div id="templatearchives"></div> 
      <input type="submit" value="Subscribe" name="subscribe" id="groupsio-embedded-subscribe" class="my-5 button btn btn-primary btn-md"/></div></form></div>`,b(e,"class","unstyledtemplate template"),ye(e,"display","block")},m(a,s){I(a,e,s)},p:d,i:d,o:d,d(a){a&&v(e)}}}class je extends E{constructor(e){super(),S(this,e,null,$e,k,{})}}function Te(t){let e;return{c(){e=l("ul"),e.innerHTML=`<li><a href="https://360environmental.com.au/careers/">360Environmental</a></li> 
	<li><a href="https://www.2excelaviation.com/careers/">2Excel Geospatial</a></li> 
	<li><a href="https://www.3deo.com/careers">3DEO</a></li> 
	<li><a href="https://www.4earthintelligence.com/about-us/careers/vacancies/">4 Earth Intelligence</a></li> 
	<li><a href="https://aamgroup.com/careers/">AAM Group</a></li> 
	<li><a href="https://www.acri-st.fr/en/careers">ACRI-ST</a></li> 
	<li><a href="https://www.advanced-infrastructure.co.uk/career">Advanced Infrastructure</a></li> 
	<li><a href="https://aerialservicesinc.com/careers/">Aerial Services Inc.</a></li> 
	<li><a href="https://www.aerialsurveys.co.nz/careers">Aerial Survey Limited</a></li> 
	<li><a href="https://aerometrex.com.au/about/careers-aerometrex/">Aerometrex</a></li> 
	<li><a href="https://www.aerospacelab.be/join-our-team/">Aerospacelab</a></li> 
	<li><a href="https://www.aeroterra.com/es-ar/trabaja-con-nosotros/busquedas-actuales">Aeroterra</a></li> 
	<li><a href="https://www.aresys.it/careers/#open-positions">Aersys</a></li> 
	<li><a href="https://www.agerpoint.com/careers">Agerpoint</a></li> 
	<li><a href="https://www.telus.com/agcg/careers/positions">Agrian</a></li> 
	<li><a href="https://jobs.lever.co/aidash">AI Clearing</a></li> 
	<li><a href="https://www.airbornetechnologies.at/en/jobs/">Airborne Technologies</a></li> 
	<li><a href="https://aistechspace.com/careers/">Aistech</a></li> 
	<li><a href="https://www.albaorbital.com/careers">Alba Orbital</a></li> 
	<li><a href="https://jobs.lever.co/albedo">Albedo</a></li> 
	<li><a href="https://www.alcis.org/opportunities">Alcis</a></li> 
	<li><a href="https://allsourceanalysis.com/careers/">Allsource Analysis</a></li> 
	<li><a href="https://alteia.com/company/careers/">Alteia</a></li> 
	<li><a href="https://www.anditi.com/careers">Anditi</a></li> 
	<li><a href="https://angelswing.notion.site/Korean-Drone-Data-Startup-Angelswing-is-Recruiting-Software-Engineers-in-Nepal-03a3774841bf4ac4a5b8e2bac21b0e3f">Angelswing</a></li> 
	<li><a href="https://www.appgeo.com/careers/">AppGeo</a></li> 
	<li><a href="https://www.linkedin.com/company/arable-labs-inc./jobs/">Arable</a></li> 
	<li><a href="https://www.arbonaut.com/en/about-us/careers">Arbonaut</a></li> 
	<li><a href="https://argans.co.uk/careers.html">Argans</a></li> 
	<li><a href="https://www.ariespace.com/lavora-con-noi/">Ariespace</a></li> 
	<li><a href="https://www.arlula.com/careers/">Arlula</a></li> 
	<li><a href="https://jobs.lever.co/Arturo">Arturo</a></li> 
	<li><a href="https://www.assimila.earth/about/#careers">Assimila</a></li> 
	<li><a href="https://www.astraea.earth/careers">Astraea</a></li> 
	<li><a href="http://www.astron.com.au/careers/">Astron</a></li> 
	<li><a href="https://astrosat.net/career/">Astrosat</a></li> 
	<li><a href="https://atlasai.applytojob.com/apply/">Atlas AI</a></li> 
	<li><a href="https://attentive.ai/careers/">Attentive AI</a></li> 
	<li><a href="https://aureaimaging.com/#ourMission">Aurea Imaging</a></li> 
	<li><a href="https://jobs.lever.co/aurorainsight">Aurora Insight</a></li> 
	<li><a href="https://axelspace.applytojob.com/apply">Axelspace</a></li> 
	<li><a href="https://careers-aximgeo.icims.com/jobs/intro?hashed=-625947405&amp;mobile=false&amp;width=1693&amp;height=500&amp;bga=true&amp;needsRedirect=false&amp;jan1offset=-300&amp;jun1offset=-240">Axim Geospatial</a></li> 
	<li><a href="https://www.ayresassociates.com/careers/">Ayres Associates</a></li> 
	<li><a href="https://careers.azavea.com/#openings">Azavea</a></li> 
	<li><a href="https://beca.csod.com/ux/ats/careersite/1/home?c=beca">Beca</a></li> 
	<li><a href="https://apply.workable.com/betterview/#jobs">Betterview</a></li> 
	<li><a href="https://www.biosis.com.au/jobs/">Biosys</a></li> 
	<li><a href="https://careers-zonda.icims.com/jobs/search?mobile=false&amp;width=1728&amp;height=500&amp;bga=true&amp;needsRedirect=false&amp;jan1offset=-300&amp;jun1offset=-240">Bird.i</a></li> 
	<li><a href="https://www.blacksky.com/careers/">BlackSky</a></li> 
	<li><a href="https://www.bluemarblegeo.com/about/careers/">Blue Marble Geographics</a></li> 
	<li><a href="https://blueraster.jobs/apply">Blue Raster</a></li> 
	<li><a href="https://blueskyhq.io/careers">Blue Sky Analytics</a></li> 
	<li><a href="https://www.brockmann-consult.de/career/">Brockmann Consult</a></li> 
	<li><a href="https://c-core.ca/careers/">C-Core</a></li> 
	<li><a href="https://cadasta.org/about-us-3/careers-2/">Cadasta Foundations</a></li> 
	<li><a href="https://www.cadcorp.com/about-us/careers/current-vacancies/">Cadcorp</a></li> 
	<li><a href="https://www.caliper.com/jobs.htm">Caliper</a></li> 
	<li><a href="https://www.camptocamp.com/career#openpositions">Camptocamp</a></li> 
	<li><a href="https://jobs.lever.co/capeanalytics">Cape Analytics</a></li> 
	<li><a href="https://www.capellaspace.com/about-us/careers/">Capella Space</a></li> 
	<li><a href="https://apply.workable.com/carbonplan/">Carbon Plan</a></li> 
	<li><a href="https://jobs.gusto.com/boards/carbon-mapper-inc-3ff9ef6d-ec4f-45af-94e4-2a67e7b31154">Carbon Mapper</a></li> 
	<li><a href="https://carto.com/careers/#open-positions">Carto</a></li> 
	<li><a href="https://cartovista.com/careers/">Cartovista</a></li> 
	<li><a href="https://catalyst.earth/about/careers/">Catalyst</a></li> 
	<li><a href="https://app.beapplied.com/org/1613/satellite-applications-catapult#jobList">Catapult Satellite Applications</a></li> 
	<li><a href="https://www.ceresimaging.net/careers?hsCtaTracking=39aafc21-f982-44ca-9914-c3815564be34%7Cfc43d777-822b-4534-9a34-902524c3123c">Ceres Imaging</a></li> 
	<li><a href="https://careers.smartrecruiters.com/CGG3/">CGG</a></li> 
	<li><a href="https://www.paycomonline.net/v4/ats/web.php/jobs?clientkey=14B329E3D0A2E479F3FE06280008FB70">Chesapeake Conservancy</a></li> 
	<li><a href="https://chloris.bamboohr.com/careers">Chloris Geospatial</a></li> 
	<li><a href="https://climate.eightfold.ai/careers">Climate Cooperation</a></li> 
	<li><a href="https://climateengine.com/careers/">Climate Engine</a></li> 
	<li><a href="https://www.climate-x.com/careers">Climate X</a></li> 
	<li><a href="https://boards.greenhouse.io/climavision/">Climavision</a></li> 
	<li><a href="https://boards.greenhouse.io/cloudtostreet/">Cloud to Street</a></li> 
	<li><a href="https://www.cloudeo.group/join-us">cloudEO</a></li> 
	<li><a href="https://codex.com.br/sobre/#trabalheconosco">codex</a></li> 
	<li><a href="https://www.cls.fr/nous-rejoindre/nos-offres-d-emploi/">Collecte Localisation Satellites (CLS)</a></li> 
	<li><a href="https://constellr.recruitee.com/">ConstellR</a></li> 
	<li><a href="https://www.con-terra.com/jobs-and-internships">con terra</a></li>`,b(e,"class","list-disc text-left")},m(a,s){I(a,e,s)},p:d,i:d,o:d,d(a){a&&v(e)}}}class ke extends E{constructor(e){super(),S(this,e,null,Te,k,{})}}function Ie(t){let e,a,s,i,c,n,f;return n=new ke({}),{c(){e=l("div"),a=l("h2"),a.textContent="Tracked Companies",s=p(),i=l("p"),i.innerHTML=`The geospatial companies come from <a href="https://github.com/chrieke/awesome-geospatial-companies">this excellent list by Christoph Rieke</a>.
    The names of the companies (and the careers page the newsletter monitors) are available below.`,c=p(),F(n.$$.fragment)},m(h,o){I(h,e,o),r(e,a),r(e,s),r(e,i),r(e,c),j(n,e,null),f=!0},p:d,i(h){f||($(n.$$.fragment,h),f=!0)},o(h){D(n.$$.fragment,h),f=!1},d(h){h&&v(e),T(n)}}}class Se extends E{constructor(e){super(),S(this,e,null,Ie,k,{})}}function Ee(t){let e,a,s,i,c,n,f,h,o,u,m,A,g,C,y,Z,L,ee,R,te,J,ae,X,re,q,ie,z,se,M,oe,Y,ne,H,le,W,G;return y=new Se({props:{id:"companies"}}),{c(){e=l("div"),a=l("article"),s=l("h2"),s.textContent="Table of Contents",i=p(),c=l("ul"),c.innerHTML=`<li><a href="#desc">What is this?</a></li> 
            <li><a href="#companies">Which companies are monitored?</a></li> 
            <li><a href="#comparison">How does this compare to other newsletters?</a></li> 
            <li><a href="#infra">How was this made?</a></li> 
            <li><a href="#contribution">How do I contribute?</a></li>`,n=p(),f=l("h2"),f.textContent="What is this?",h=p(),o=l("p"),o.textContent=`The Geospatial Jobs Monitor is a newsletter that tells you which geospatial companies might have posted new jobs.
        It is automatically detects changes in the careers pages so that you can see positions as soon as they are posted.`,u=p(),m=l("p"),m.textContent="Newsletters are sent on Tuesdays and Fridays at 7am GMT.",A=p(),g=l("p"),g.innerHTML=`This newsletter is a firehose - there is no way to filter the type of jobs you get you&#39;re interested in, no way
        to filter by country, and no sure-fire way to tell whether the company&#39;s job page has added a job or removed one.
        For a more curated newsletter, I&#39;d recommend you subscribe to <a href="#comparison">one of the other incredible geospatial newsletters out there.</a>`,C=p(),F(y.$$.fragment),Z=p(),L=l("h2"),L.textContent="How does this compare to other newsletters?",ee=p(),R=l("p"),R.textContent=`I made this newsletter so that I could see as many potential opportunities as possible without having to check the careers pages of companies
            that I cared about.`,te=p(),J=l("p"),J.textContent=`If you are looking less actively, or just want a more curated list, there are many other incredible sources
            for jobs in the geospatial industry.`,ae=p(),X=l("p"),X.innerHTML=`To start, there is the <a href="">Geospatial Jobs Newsletter</a> by Ali Ahmadalipour. This is a curated newsletter that
            focuses primarily on US-based companies in more technical positions.`,re=p(),q=l("p"),q.innerHTML='<a href="https://discourse.pangeo.io/c/news/jobs/14">Pangeo also has a job board</a> for specifically geospatial jobs.',ie=p(),z=l("p"),z.innerHTML=`For jobs in space, AI, Climate, I&#39;d recommend looking at the <a href="https://github.com/DahnJ/EO-jobs#portals--jobs">collection of job portals by Daniel Jahn</a>
        He has also collated a bunch of valuable information specifically for jobs in Earth observation, but there is a lot of interesting information for geospatial more generally as well.`,se=p(),M=l("h2"),M.textContent="How was this made?",oe=p(),Y=l("p"),Y.innerHTML=`This newsletter was made using <a href="https://modal.com/">Modal</a> and <a href="groups.io">Groups.io</a>.
            The companies and their careers pages are collated in a <a href="https://docs.google.com/spreadsheets/d/1YieNiDHVTC5CfX13n72fXuceDaubSuyrghgAnxipsbY/edit#gid=0">Google Sheet</a>.
            The source code is available in <a href="https://github.com/dchirst/geospatialjobs">this repository</a>.`,ne=p(),H=l("h2"),H.textContent="How do I contribute?",le=p(),W=l("p"),W.innerHTML=`If you want to add a company, have found a mistake, or want to make any other improvement, please
            <a href="https://github.com/dchirst/geospatialjobs/issues">submit an issue</a> or add a comment on
            <a href="https://docs.google.com/spreadsheets/d/1YieNiDHVTC5CfX13n72fXuceDaubSuyrghgAnxipsbY/edit#gid=0">the Google Sheet</a>.`,b(f,"id","desc"),b(o,"class",""),b(L,"id","comparison"),b(M,"id","infra"),b(H,"id","contribution"),b(a,"class","prose prose-p:text-left")},m(w,de){I(w,e,de),r(e,a),r(a,s),r(a,i),r(a,c),r(a,n),r(a,f),r(a,h),r(a,o),r(a,u),r(a,m),r(a,A),r(a,g),r(a,C),j(y,a,null),r(a,Z),r(a,L),r(a,ee),r(a,R),r(a,te),r(a,J),r(a,ae),r(a,X),r(a,re),r(a,q),r(a,ie),r(a,z),r(a,se),r(a,M),r(a,oe),r(a,Y),r(a,ne),r(a,H),r(a,le),r(a,W),G=!0},p:d,i(w){G||($(y.$$.fragment,w),G=!0)},o(w){D(y.$$.fragment,w),G=!1},d(w){w&&v(e),T(y)}}}class Le extends E{constructor(e){super(),S(this,e,null,Ee,k,{})}}function Me(t){let e,a,s,i,c,n,f,h,o;return n=new je({}),h=new Le({}),{c(){e=l("main"),a=l("h1"),a.textContent="Geospatial Jobs Monitor",s=p(),i=l("h2"),i.textContent="A bi-weekly auto-generated newsletter for jobs in the geospatial industry",c=p(),F(n.$$.fragment),f=p(),F(h.$$.fragment)},m(u,m){I(u,e,m),r(e,a),r(e,s),r(e,i),r(e,c),j(n,e,null),r(e,f),j(h,e,null),o=!0},p:d,i(u){o||($(n.$$.fragment,u),$(h.$$.fragment,u),o=!0)},o(u){D(n.$$.fragment,u),D(h.$$.fragment,u),o=!1},d(u){u&&v(e),T(n),T(h)}}}class He extends E{constructor(e){super(),S(this,e,null,Me,k,{})}}new He({target:document.getElementById("app")});
