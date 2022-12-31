(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=a(r);fetch(r.href,l)}})();function p(){}function z(e){return e()}function R(){return Object.create(null)}function C(e){e.forEach(z)}function D(e){return typeof e=="function"}function j(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function J(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function k(e,t,a){e.insertBefore(t,a||null)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function X(e){return document.createTextNode(e)}function y(){return X(" ")}function H(e,t,a){a==null?e.removeAttribute(t):e.getAttribute(t)!==a&&e.setAttribute(t,a)}function Q(e){return Array.from(e.childNodes)}function U(e,t,a,i){a===null?e.style.removeProperty(t):e.style.setProperty(t,a,i?"important":"")}let N;function w(e){N=e}const d=[],F=[],_=[],q=[],V=Promise.resolve();let I=!1;function W(){I||(I=!0,V.then(K))}function L(e){_.push(e)}const B=new Set;let g=0;function K(){const e=N;do{for(;g<d.length;){const t=d[g];g++,w(t),Y(t.$$)}for(w(null),d.length=0,g=0;F.length;)F.pop()();for(let t=0;t<_.length;t+=1){const a=_[t];B.has(a)||(B.add(a),a())}_.length=0}while(d.length);for(;q.length;)q.pop()();I=!1,B.clear(),w(e)}function Y(e){if(e.fragment!==null){e.update(),C(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const A=new Set;let Z;function v(e,t){e&&e.i&&(A.delete(e),e.i(t))}function G(e,t,a,i){if(e&&e.o){if(A.has(e))return;A.add(e),Z.c.push(()=>{A.delete(e),i&&(a&&e.d(1),i())}),e.o(t)}else i&&i()}function O(e){e&&e.c()}function $(e,t,a,i){const{fragment:r,after_update:l}=e.$$;r&&r.m(t,a),i||L(()=>{const s=e.$$.on_mount.map(z).filter(D);e.$$.on_destroy?e.$$.on_destroy.push(...s):C(s),e.$$.on_mount=[]}),l.forEach(L)}function x(e,t){const a=e.$$;a.fragment!==null&&(C(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}function ee(e,t){e.$$.dirty[0]===-1&&(d.push(e),W(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function E(e,t,a,i,r,l,s,m=[-1]){const c=N;w(e);const o=e.$$={fragment:null,ctx:[],props:l,update:p,not_equal:r,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:R(),dirty:m,skip_bound:!1,root:t.target||c.$$.root};s&&s(o.root);let n=!1;if(o.ctx=a?a(e,t.props||{},(u,M,...T)=>{const P=T.length?T[0]:M;return o.ctx&&r(o.ctx[u],o.ctx[u]=P)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](P),n&&ee(e,u)),M}):[],o.update(),n=!0,C(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){const u=Q(t.target);o.fragment&&o.fragment.l(u),u.forEach(b)}else o.fragment&&o.fragment.c();t.intro&&v(e.$$.fragment),$(e,t.target,t.anchor,t.customElement),K()}w(c)}class S{$destroy(){x(this,1),this.$destroy=p}$on(t,a){if(!D(a))return p;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(a),()=>{const r=i.indexOf(a);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function te(e){let t;return{c(){t=h("div"),t.innerHTML=`<div id="groupsio_unstyled_embed_signup"><form action="https://groups.io/g/geospatialjobs/signup?u=8411627063917404564" method="post" id="groupsio-embedded-subscribe-form" name="groupsio-embedded-subscribe-form" target="_blank"><div id="groupsio_unstyled_embed_signup_scroll"><input type="email" value="" name="email" class="email input input-bordered input-primary mt-5" id="email" placeholder="email address" required=""/> 
      
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8411627063917404564" tabindex="-1" value=""/></div> 
      <div id="templatearchives"></div> 
      <input type="submit" value="Subscribe" name="subscribe" id="groupsio-embedded-subscribe" class="my-5 button btn btn-primary btn-md"/></div></form></div>`,H(t,"class","unstyledtemplate template"),U(t,"display","block")},m(a,i){k(a,t,i)},p,i:p,o:p,d(a){a&&b(t)}}}class ae extends S{constructor(t){super(),E(this,t,null,te,j,{})}}function re(e){let t;return{c(){t=h("ul"),t.innerHTML=`<li><a href="https://360environmental.com.au/careers/">360Environmental</a></li> 
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
	<li><a href="https://www.con-terra.com/jobs-and-internships">con terra</a></li>`,H(t,"class","list-disc text-left")},m(a,i){k(a,t,i)},p,i:p,o:p,d(a){a&&b(t)}}}class ie extends S{constructor(t){super(),E(this,t,null,re,j,{})}}function se(e){let t,a,i,r,l;return r=new ie({}),{c(){t=h("div"),a=h("h2"),a.textContent="Tracked Companies",i=y(),O(r.$$.fragment)},m(s,m){k(s,t,m),f(t,a),f(t,i),$(r,t,null),l=!0},p,i(s){l||(v(r.$$.fragment,s),l=!0)},o(s){G(r.$$.fragment,s),l=!1},d(s){s&&b(t),x(r)}}}class le extends S{constructor(t){super(),E(this,t,null,se,j,{})}}function oe(e){let t,a,i,r,l,s,m,c,o;return s=new ae({}),c=new le({}),{c(){t=h("main"),a=h("h1"),a.textContent="Geospatial Jobs Newsletter",i=y(),r=h("h2"),r.textContent="A bi-weekly newsletter for jobs in the geospatial industry",l=y(),O(s.$$.fragment),m=y(),O(c.$$.fragment)},m(n,u){k(n,t,u),f(t,a),f(t,i),f(t,r),f(t,l),$(s,t,null),f(t,m),$(c,t,null),o=!0},p,i(n){o||(v(s.$$.fragment,n),v(c.$$.fragment,n),o=!0)},o(n){G(s.$$.fragment,n),G(c.$$.fragment,n),o=!1},d(n){n&&b(t),x(s),x(c)}}}class ne extends S{constructor(t){super(),E(this,t,null,oe,j,{})}}new ne({target:document.getElementById("app")});
