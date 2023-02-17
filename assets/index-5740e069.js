(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const h of i)if(h.type==="childList")for(const l of h.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const h={};return i.integrity&&(h.integrity=i.integrity),i.referrerpolicy&&(h.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?h.credentials="include":i.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(i){if(i.ep)return;i.ep=!0;const h=t(i);fetch(i.href,h)}})();function u(){}function me(a){return a()}function he(){return Object.create(null)}function z(a){a.forEach(me)}function fe(a){return typeof a=="function"}function G(a,e){return a!=a?e==e:a!==e||a&&typeof a=="object"||typeof a=="function"}function de(a){return Object.keys(a).length===0}function r(a,e){a.appendChild(e)}function T(a,e,t){a.insertBefore(e,t||null)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}function c(a){return document.createElement(a)}function be(a){return document.createTextNode(a)}function p(){return be(" ")}function d(a,e,t){t==null?a.removeAttribute(e):a.getAttribute(e)!==t&&a.setAttribute(e,t)}function ge(a){return Array.from(a.childNodes)}function ye(a,e,t,s){t===null?a.style.removeProperty(e):a.style.setProperty(e,t,s?"important":"")}let Q;function x(a){Q=a}const S=[],ne=[],L=[],pe=[],ve=Promise.resolve();let W=!1;function je(){W||(W=!0,ve.then(we))}function Y(a){L.push(a)}const J=new Set;let F=0;function we(){const a=Q;do{for(;F<S.length;){const e=S[F];F++,x(e),ke(e.$$)}for(x(null),S.length=0,F=0;ne.length;)ne.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];J.has(t)||(J.add(t),t())}L.length=0}while(S.length);for(;pe.length;)pe.pop()();W=!1,J.clear(),x(a)}function ke(a){if(a.fragment!==null){a.update(),z(a.before_update);const e=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,e),a.after_update.forEach(Y)}}const R=new Set;let Se;function A(a,e){a&&a.i&&(R.delete(a),a.i(e))}function P(a,e,t,s){if(a&&a.o){if(R.has(a))return;R.add(a),Se.c.push(()=>{R.delete(a),s&&(t&&a.d(1),s())}),a.o(e)}else s&&s()}function O(a){a&&a.c()}function C(a,e,t,s){const{fragment:i,after_update:h}=a.$$;i&&i.m(e,t),s||Y(()=>{const l=a.$$.on_mount.map(me).filter(fe);a.$$.on_destroy?a.$$.on_destroy.push(...l):z(l),a.$$.on_mount=[]}),h.forEach(Y)}function _(a,e){const t=a.$$;t.fragment!==null&&(z(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function xe(a,e){a.$$.dirty[0]===-1&&(S.push(a),je(),a.$$.dirty.fill(0)),a.$$.dirty[e/31|0]|=1<<e%31}function E(a,e,t,s,i,h,l,f=[-1]){const n=Q;x(a);const o=a.$$={fragment:null,ctx:[],props:h,update:u,not_equal:i,bound:he(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(n?n.$$.context:[])),callbacks:he(),dirty:f,skip_bound:!1,root:e.target||n.$$.root};l&&l(o.root);let m=!1;if(o.ctx=t?t(a,e.props||{},(w,j,...g)=>{const k=g.length?g[0]:j;return o.ctx&&i(o.ctx[w],o.ctx[w]=k)&&(!o.skip_bound&&o.bound[w]&&o.bound[w](k),m&&xe(a,w)),j}):[],o.update(),m=!0,z(o.before_update),o.fragment=s?s(o.ctx):!1,e.target){if(e.hydrate){const w=ge(e.target);o.fragment&&o.fragment.l(w),w.forEach(v)}else o.fragment&&o.fragment.c();e.intro&&A(a.$$.fragment),C(a,e.target,e.anchor,e.customElement),we()}x(n)}class I{$destroy(){_(this,1),this.$destroy=u}$on(e,t){if(!fe(t))return u;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!de(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ae(a){let e;return{c(){e=c("div"),e.innerHTML=`<div id="groupsio_unstyled_embed_signup"><form action="https://groups.io/g/geospatialjobs/signup?u=8411627063917404564" method="post" id="groupsio-embedded-subscribe-form" name="groupsio-embedded-subscribe-form" target="_blank"><div id="groupsio_unstyled_embed_signup_scroll"><input type="email" value="" name="email" class="email input input-bordered input-primary mt-5" id="email" placeholder="email address" required=""/> 
      
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8411627063917404564" tabindex="-1" value=""/></div> 
      <div id="templatearchives"></div> 
      <input type="submit" value="Subscribe" name="subscribe" id="groupsio-embedded-subscribe" class="my-5 button btn btn-primary btn-md"/></div></form></div>`,d(e,"class","unstyledtemplate template"),ye(e,"display","block")},m(t,s){T(t,e,s)},p:u,i:u,o:u,d(t){t&&v(e)}}}class Ce extends I{constructor(e){super(),E(this,e,null,Ae,G,{})}}function _e(a){let e;return{c(){e=c("ul"),e.innerHTML=`<li><a href="https://360environmental.com.au/careers/">360Environmental</a></li> 
	<li><a href="https://www.2excelaviation.com/careers/">2Excel Geospatial</a></li> 
	<li><a href="https://www.3deo.com/careers">4DM</a></li> 
	<li><a href="https://www.4earthintelligence.com/about-us/careers/vacancies/">3DEO</a></li> 
	<li><a href="https://aamgroup.com/careers/">4 Earth Intelligence</a></li> 
	<li><a href="https://www.acri-st.fr/en/careers">ACRI-ST</a></li> 
	<li><a href="https://www.advanced-infrastructure.co.uk/career">Advanced Infrastructure</a></li> 
	<li><a href="https://aerialservicesinc.com/careers/">Aerial Services Inc.</a></li> 
	<li><a href="https://www.aerialsurveys.co.nz/careers">Aerial Survey Limited</a></li> 
	<li><a href="https://aerometrex.com.au/about/careers-aerometrex/">Aerometrex</a></li> 
	<li><a href="https://www.aerospacelab.be/join-our-team/">Aerospacelab</a></li> 
	<li><a href="https://www.aeroterra.com/es-ar/trabaja-con-nosotros/busquedas-actuales">Aeroterra</a></li> 
	<li><a href="https://www.aresys.it/careers/#open-positions">Aersys</a></li> 
	<li><a href="https://www.telus.com/agcg/careers/positions">Agrian</a></li> 
	<li><a href="https://jobs.lever.co/aidash">Aidash</a></li> 
	<li><a href="https://www.airbornetechnologies.at/en/jobs/">Airborne Technologies</a></li> 
	<li><a href="https://aistechspace.com/careers/">Aistech</a></li> 
	<li><a href="https://www.albaorbital.com/careers">Alba Orbital</a></li> 
	<li><a href="https://jobs.lever.co/albedo">Albedo</a></li> 
	<li><a href="https://www.alcis.org/opportunities">Alcis</a></li> 
	<li><a href="https://allsourceanalysis.com/careers/">Allsource Analysis</a></li> 
	<li><a href="https://alteia.com/company/careers/">Alteia</a></li> 
	<li><a href="https://www.anditi.com/careers">Anditi</a></li> 
	<li><a href="https://angelswing.notion.site/Korean-Drone-Data-Startup-Angelswing-is-Recruiting-Software-Engineers-in-Nepal-03a3774841bf4ac4a5b8e2bac21b0e3f">Angelswing</a></li> 
	<li><a href="https://jobs.apemltd.co.uk/vacancies/vacancy-search-results.aspx">Apem</a></li> 
	<li><a href="https://jobs.lever.co/apolloagriculture/">Apollo Agriculture</a></li> 
	<li><a href="https://www.appgeo.com/careers/">AppGeo</a></li> 
	<li><a href="https://www.linkedin.com/company/arable-labs-inc./jobs/">Arable</a></li> 
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
	<li><a href="https://avenza.bamboohr.com/careers/">Avenza International</a></li> 
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
	<li><a href="https://carto.com/careers/#open-positions">Carto</a></li> 
	<li><a href="https://cartovista.com/careers/">Cartovista</a></li> 
	<li><a href="https://catalyst.earth/about/careers/">Catalyst</a></li> 
	<li><a href="https://app.beapplied.com/org/1613/satellite-applications-catapult#jobList">Catapult Satellite Applications</a></li> 
	<li><a href="https://www.ceresimaging.net/careers?hsCtaTracking=39aafc21-f982-44ca-9914-c3815564be34%7Cfc43d777-822b-4534-9a34-902524c3123c">Ceres Imaging</a></li> 
	<li><a href="https://www.paycomonline.net/v4/ats/web.php/jobs?clientkey=14B329E3D0A2E479F3FE06280008FB70">Chesapeake Conservancy</a></li> 
	<li><a href="https://www.clevermaps.io/careers">Clever Maps</a></li> 
	<li><a href="https://climate.eightfold.ai/careers">Climate Cooperation</a></li> 
	<li><a href="https://climateengine.com/careers/">Climate Engine</a></li> 
	<li><a href="https://www.climate-x.com/careers">Climate X</a></li> 
	<li><a href="https://boards.greenhouse.io/climavision/">Climavision</a></li> 
	<li><a href="https://boards.greenhouse.io/floodbase">Cloud to Street</a></li> 
	<li><a href="https://www.cloudeo.group/join-us">cloudEO</a></li> 
	<li><a href="https://codex.com.br/sobre/#trabalheconosco">codex</a></li> 
	<li><a href="https://www.cls.fr/nous-rejoindre/nos-offres-d-emploi/">Collecte Localisation Satellites (CLS)</a></li> 
	<li><a href="https://constellr.recruitee.com/">ConstellR</a></li> 
	<li><a href="https://www.con-terra.com/jobs-and-internships">con terra</a></li> 
	<li><a href="https://corelogic.wd5.myworkdayjobs.com/NZCareers">Core Logic</a></li> 
	<li><a href="https://locana.applytojob.com/apply">Critigen</a></li> 
	<li><a href="https://www.cropin.com/jobs">Cropin</a></li> 
	<li><a href="https://www.crowdai.com/careers#open-positions">CrowdAI</a></li> 
	<li><a href="https://datum.az/careers">Datum</a></li> 
	<li><a href="https://www.delphi-imm.de/en/carrier/">Delphi IMM</a></li> 
	<li><a href="https://www.deltadrone.com/en/join-us/">Delta Drone</a></li> 
	<li><a href="https://jobs.lever.co/descarteslabs.com">Descartes Labs</a></li> 
	<li><a href="https://developmentseed.org/careers">Developmentseed</a></li> 
	<li><a href="https://www.disy.net/de/karriere/jobs/">Disy Informationssysteme</a></li> 
	<li><a href="https://apply.workable.com/draxis/#jobs">Draxis</a></li> 
	<li><a href="https://www.dronedeploy.com/about/join-the-team/">Drone Deploy</a></li> 
	<li><a href="https://www.droneviewtech.com/career">DroneView Technologies</a></li> 
	<li><a href="https://dtn.wd1.myworkdayjobs.com/en-US/DTN_Careers">DTN</a></li> 
	<li><a href="https://dymaxionlabs.com/company/">Dymaxion Labs</a></li> 
	<li><a href="https://www.eagle.co.nz/employment">Eagle Technology</a></li> 
	<li><a href="https://careers-eagleview.icims.com/jobs/search">Eagle View</a></li> 
	<li><a href="https://www.earthblox.io/careers">Earthblox</a></li> 
	<li><a href="https://earthdaily.applytojob.com/">EarthDaily Analytics</a></li> 
	<li><a href="https://cdn.earthi.space/careers/">earth-i</a></li> 
	<li><a href="https://earthpulse.ai/about">Earthpulse</a></li> 
	<li><a href="https://www.earthsense.co.uk/careers">Earthsense</a></li> 
	<li><a href="https://www.earthshot.eco/careers">Earthshot Labs</a></li> 
	<li><a href="https://www.ecoaus.com.au/careers/current-positions">Eco Logical Australia</a></li> 
	<li><a href="https://ecometrica.com/about-us/work-at-ecometrica/">Ecometria</a></li> 
	<li><a href="https://www.ecopiatech.com/careers#openings">Ecopia</a></li> 
	<li><a href="https://join.com/companies/echo-analytics">Echo Analytics</a></li> 
	<li><a href="https://effigis.com/en/careers/">Effigis</a></li> 
	<li><a href="https://www.eftas.de/en/eftas.php#careers">Eftas</a></li> 
	<li><a href="https://eleaf.com/careers/">eLEAF</a></li> 
	<li><a href="https://element84.com/careers">Element 84</a></li> 
	<li><a href="https://www.emapsite.com/about-emapsite/careers">emapsite</a></li> 
	<li><a href="https://www.emu-analytics.com/careers/">Emu Analytics</a></li> 
	<li><a href="https://envsys.co.uk/about-us/#careers">Environment Systems</a></li> 
	<li><a href="https://www.envitia.com/careers/">Envitia</a></li> 
	<li><a href="https://www.eomap.com/jobs/">eomap</a></li> 
	<li><a href="https://eox.at/careers/">EOX IT Services</a></li> 
	<li><a href="https://www.esri.com/en-us/about/careers/job-search">ESRI</a></li> 
	<li><a href="https://careers.esriaustralia.com.au/search/?createNewAlert=false&amp;q=&amp;locationsearch=">ESRI</a></li> 
	<li><a href="https://essensys.ro/careers/">Essensys Software</a></li> 
	<li><a href="https://www.euspaceimaging.com/careers/">European Space Imaging</a></li> 
	<li><a href="https://www.eurosense.com/jobs?all_countries=1">Eurosense</a></li> 
	<li><a href="https://recruiting.paylocity.com/recruiting/jobs/All/b500eddf-9014-4f8e-abf3-146adeac8adc/Celartem-Inc?hsCtaTracking=61646fbd-8b12-4cb4-8988-7eb31c571237%7Cfdf082e4-ff8a-477c-bdbf-439a3d4af0ae">Extensis</a></li> 
	<li><a href="https://www.eyevi.tech/careers">Eyevi Technologies</a></li> 
	<li><a href="https://farmersedge.applicantpro.com/jobs/">Farmers Edge</a></li> 
	<li><a href="https://www.fathom.global/careers/">Fathom</a></li> 
	<li><a href="https://about.fatmap.com/careers">Fatmap</a></li> 
	<li><a href="https://felt.com/careers">Felt</a></li> 
	<li><a href="https://finitecarbon.bamboohr.com/careers/">Finitie Carbon</a></li> 
	<li><a href="https://firststreet.org/team/">First Street Foundation</a></li> 
	<li><a href="https://floanalytics.applicantpool.com/jobs/">Flo Analytics</a></li> 
	<li><a href="https://www.floodmapp.com/jobs">FloodMapp</a></li> 
	<li><a href="https://jobs.lever.co/foam">Foam space</a></li> 
	<li><a href="https://fraym.io/careers/#open-positions">Fraym</a></li> 
	<li><a href="https://frontiersi.com.au/working-with-us/">FrontierSI</a></li> 
	<li><a href="https://fruitionsciences.com/en/jobs-careers">Fruition Science</a></li> 
	<li><a href="https://fugro.wd3.myworkdayjobs.com/Careers">Fugro</a></li> 
	<li><a href="https://www.fybrsolutions.com/careers">FYBR</a></li> 
	<li><a href="https://www.gaf.de/content/jobs">GAF AG</a></li> 
	<li><a href="https://galaxeye.zohorecruit.in/careers">GalaxEye Space</a></li> 
	<li><a href="https://www.gamaya.com/our-story/careers">Gamaya</a></li> 
	<li><a href="https://gbs.kiwi/careers-2/">GBS</a></li> 
	<li><a href="https://geckomatics.com/careers/">Geckomatics</a></li> 
	<li><a href="https://careers.smartrecruiters.com/Verisk/wood-mackenzie">Genscape</a></li> 
	<li><a href="https://geo-jobe.com/careers/">GEO Jobe GIS Consulting</a></li> 
	<li><a href="http://www.geo3topografia.com.br/trabalhe-conosco.html">Geo3topografia</a></li> 
	<li><a href="https://www.geobiro.ba/#">Geobiro</a></li> 
	<li><a href="https://careers.geoblink.com/#jobs">Geoblink</a></li> 
	<li><a href="https://geocento.com/about_us">Geocento</a></li> 
	<li><a href="https://geocledian.com/page/jobs">Geocledian</a></li> 
	<li><a href="https://geodata.no/karriere">Geodata</a></li> 
	<li><a href="https://web.geofly.eu/en/jobs/index.html">Geofly</a></li> 
	<li><a href="https://geomarvel.com/careers/">Geomarvel</a></li> 
	<li><a href="https://www.geoplana.de/jobs-im-team">Geoplana</a></li> 
	<li><a href="https://epdj.fa.ap1.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX/requisitions?mode=location">Geoplex</a></li> 
	<li><a href="https://geops.com/karriere">Geops</a></li> 
	<li><a href="https://georepublic.info/en/company/jobs/">Georepublic</a></li> 
	<li><a href="https://geoscape.com.au/people-and-culture/#careers">Geoscape</a></li> 
	<li><a href="https://geosite.pinpointhq.com/">Geosite</a></li> 
	<li><a href="https://www.geosolutionsgroup.com/about/jobs/">GeoSolutions</a></li> 
	<li><a href="https://geosolutions.be/werken-at-gs/">Geo Solutions</a></li> 
	<li><a href="https://seerist.com/careers/">Geospark Analytics</a></li> 
	<li><a href="https://www.getmap.eu/company/careers/">Geospatial Enabling Technologies (GET)</a></li> 
	<li><a href="https://geoint.com.au/category/careers/">Geospatial Intelligence PTY LTD</a></li> 
	<li><a href="https://www.geospatialworld.net/about/people.html">Geospatial Media+Communications</a></li> 
	<li><a href="https://www.geospin.de/en/">Geospin</a></li> 
	<li><a href="https://earthdaily.com/careers/career-opportunities/earthdaily-analytics-careers/">Geosys</a></li> 
	<li><a href="http://www.geosysnet.de/en/jobs.html">Geosysnet</a></li> 
	<li><a href="https://www.geosystems-hellas.gr/careers-2/">Geosystems Hellas</a></li> 
	<li><a href="https://www.geosystems.com.ar/en/company/#joingeosystemsteam">Geosystems S.A.</a></li> 
	<li><a href="https://ordnancesurvey.wd3.myworkdayjobs.com/OS_Careers">Geovation</a></li> 
	<li><a href="https://geo-vibe.com/careers/">Geovibe</a></li> 
	<li><a href="https://geovigo.pl/en/#career">Geovigo</a></li> 
	<li><a href="https://careers.geoville.com/">Geoville</a></li> 
	<li><a href="https://www.getmapping.co.uk/news-library/categories/current-vacancies">Getmapping</a></li> 
	<li><a href="https://www.gfk.com/careers/search-for-jobs">GFK</a></li> 
	<li><a href="https://ghgsat.bamboohr.com/jobs/">GHGSAT</a></li> 
	<li><a href="https://jobs.gim.be/en">Gim</a></li> 
	<li><a href="https://www.gispeople.com.au/careers/">GIS People</a></li> 
	<li><a href="https://www.gisat.cz/company/#careers">Gisat</a></li> 
	<li><a href="https://www.giscloud.com/careers/">GISCloud</a></li> 
	<li><a href="https://careers-aximgeo.icims.com/jobs/search?hashed=-625947405&amp;mobile=false&amp;width=1693&amp;height=500&amp;bga=true&amp;needsRedirect=false&amp;jan1offset=0&amp;jun1offset=60">GISInc</a></li> 
	<li><a href="https://globaltrustgrp.com/careers/">Globaltrust</a></li> 
	<li><a href="https://www.globema.com/careers/">Globema</a></li> 
	<li><a href="https://gmv.csod.com/ux/ats/careersite/4/home?c=gmv⟨=en-US">GMV</a></li> 
	<li><a href="https://gro-intelligence.com/open-positions">Gro Intelligence</a></li> 
	<li><a href="https://careers.l3harris.com/search-jobs">Harris</a></li> 
	<li><a href="https://www.hatfieldgroup.com/current-careers/">Hatfield Consultants</a></li> 
	<li><a href="https://hawadawa.com/jobs/">Hawa Dawa</a></li> 
	<li><a href="https://hawkeye360.applicantstack.com/x/openings">Hawkeye 360</a></li> 
	<li><a href="https://www.head-aerospace.eu/careers">HEAD Aerospatial Group France</a></li> 
	<li><a href="https://careers-here.icims.com/jobs/search?ss=1">HERE Technologies</a></li> 
	<li><a href="https://hexagon.com/company/careers/job-listings">Hexagon Geospatial</a></li> 
	<li><a href="https://hexamapsolutions.com/careers.html">Hexamap Solutions</a></li> 
	<li><a href="https://jobs.lever.co/Hivemapper/">Hivemapper</a></li> 
	<li><a href="https://apply.workable.com/hydrosat/#jobs">Hydrosat</a></li> 
	<li><a href="https://apply.workable.com/hyperverge/#jobs">Hyperverge</a></li> 
	<li><a href="https://www.hqplantations.com.au/our-people/career-opportunities">HQPlantations</a></li> 
	<li><a href="https://www.iceye.com/careers#open-positions">Iceye</a></li> 
	<li><a href="https://ifarmer.asia/career?locale=en">iFarmer Asia</a></li> 
	<li><a href="https://www.imagemnl.com/career/">Imagem nl</a></li> 
	<li><a href="https://geosistemas.gupy.io/">Imagem</a></li> 
	<li><a href="https://immergis.fr/emploi/">Immergis</a></li> 
	<li><a href="https://www.impactobservatory.com/careers">Impact Observatory</a></li> 
	<li><a href="https://jobs.lever.co/indigoag/">Indigo Ag</a></li> 
	<li><a href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=d58bbd37-72f6-4c71-9c8e-203afd783559&amp;ccId=9200397141663_2⟨=en_US&amp;selectedMenuKey=CurrentOpenings">Intelinair</a></li> 
	<li><a href="https://careers.abley.com/#jobs">Interpret</a></li> 
	<li><a href="https://www.isardsat.co.uk/work-with-us">IsardSat</a></li> 
	<li><a href="https://www.imagesatintl.com/careers/">ISI</a></li> 
	<li><a href="https://jobs.lever.co/jupiterintel/">Jupiter Intelligence</a></li> 
	<li><a href="https://www.kaart.com/about/careers/">Kaart</a></li> 
	<li><a href="https://jobs.lever.co/kairosaerospace/">Kairos Aerospace</a></li> 
	<li><a href="https://kartoza.com/careers">Kartoza</a></li> 
	<li><a href="https://www.katrisk.com/about">KatRisk</a></li> 
	<li><a href="https://angel.co/company/kawaspace/jobs">Kawa Space</a></li> 
	<li><a href="https://kayrros1.recruitee.com/">Kayrros</a></li> 
	<li><a href="https://kleos.space/category/careers/">Kleos Space</a></li> 
	<li><a href="https://www.kongsberggeospatial.com/company/careers">Kongsberg Geospatial</a></li> 
	<li><a href="https://www.landiq.com/careers">Land IQ</a></li> 
	<li><a href="https://www.landmark.co.uk/careers/vacancies/">Landmark</a></li> 
	<li><a href="https://www.lifa.dk/karriere/ledige-stillinger/">LIFA A/S</a></li> 
	<li><a href="https://live-eo.com/jobs/">LiveEO</a></li> 
	<li><a href="https://www.lmkt.com/jobs">LMKT</a></li> 
	<li><a href="https://www.luxcarta.com/careers/">LuxCarta</a></li> 
	<li><a href="https://makepath.com/careers/">Makepath</a></li> 
	<li><a href="https://www.mapbox.com/careers#jobs">Mapbox</a></li> 
	<li><a href="https://www.maphubs.com/careers">MapHubs</a></li> 
	<li><a href="https://www.mapotic.com/about/jobs/">Mapotik</a></li> 
	<li><a href="https://www.maptek.com/">Maptek</a></li> 
	<li><a href="https://www.maptiler.com/jobs/">Maptiler</a></li> 
	<li><a href="https://www.marvelgeospatial.com/careers-2/">Marvel Geospatial Solutions</a></li> 
	<li><a href="https://maxar.wd1.myworkdayjobs.com/MAXAR?utm_source=Maxar-careers&amp;utm_medium=website">Maxar</a></li> 
	<li><a href="https://www.mckenzieintelligence.com/careers/">McKenzie Intelligence</a></li> 
	<li><a href="https://www.meeo.it/join-us/">Meeo</a></li> 
	<li><a href="https://jobs.merkator.com/">Merkator BV</a></li> 
	<li><a href="https://careers.merrick.com/careers-home/jobs">Merrick</a></li> 
	<li><a href="https://motiontag.jobs.personio.de/">Motiontag</a></li> 
	<li><a href="https://www.mundialis.de/en/karriere/">Mundialis</a></li> 
	<li><a href="https://www.muonspace.com/careers/">Muon Space</a></li> 
	<li><a href="https://ncx.com/careers/">NCX</a></li> 
	<li><a href="https://careers.smartrecruiters.com/Nearmap/">Nearmap</a></li> 
	<li><a href="https://boards.greenhouse.io/nearspacelabs">Near Space Labs</a></li> 
	<li><a href="https://www.neo.nl/vacatures-bij-neo/">NEO BV</a></li> 
	<li><a href="https://ngis.com.au/Career-Listing">NGIS</a></li> 
	<li><a href="https://osl.co.ke/about-us/careers/vacancies/">Oakar Services</a></li> 
	<li><a href="https://onesoil.ai/en/careers">Onesoil</a></li> 
	<li><a href="https://apply.workable.com/1spatial/">Onespatial</a></li> 
	<li><a href="https://opegieka.pl/our-activities,3,en#career">Opegieka</a></li> 
	<li><a href="https://orbica.world/work-for-us">Orbica</a></li> 
	<li><a href="https://sites.orbital.co.ke/career">Orbital Africa</a></li> 
	<li><a href="https://orbitalinsight.com/company/careers/job-openings">Orbital Insight</a></li> 
	<li><a href="https://jobs.lever.co/orbitalsidekick">Orbital Sidekick</a></li> 
	<li><a href="https://ororatech.com/careers/">OroraTech</a></li> 
	<li><a href="https://www.overstory.com/careers#roles">Overstory</a></li> 
	<li><a href="https://pachama.com/careers/">Pachama</a></li> 
	<li><a href="https://www.pelicancorp.com/us/about-us/careers">Pelicancorp</a></li> 
	<li><a href="https://www.perennial.earth/careers#job-openings">Perennial</a></li> 
	<li><a href="https://picterra.ch/jobs/">Picterra</a></li> 
	<li><a href="https://www.notion.so/Work-Pina-Earth-5a6945a900314353b60bdc63ac7492c4">Pina Earth</a></li> 
	<li><a href="https://apply.workable.com/pix4d/">Pix4D</a></li> 
	<li><a href="https://pixxel.bamboohr.com/careers/">Pixxel</a></li> 
	<li><a href="https://www.planet.com/company/careers/#opportunities">Planet</a></li> 
	<li><a href="https://www.planetwatchers.com/careers/">Planet Watchers</a></li> 
	<li><a href="https://www.planetek.it/eng/contact_us/job_opportunities">Planetek</a></li> 
	<li><a href="https://www.precisionhawk.com/careers">Precision Hawk</a></li> 
	<li><a href="https://www.precisely.com/careers-and-culture/us-jobs/job?gh_jid=4147980005">Precisely</a></li> 
	<li><a href="https://www.preligens.com/jobs">Preligens</a></li> 
	<li><a href="https://www.prenav.com/jobs">Prenav</a></li> 
	<li><a href="https://previsico.com/join-the-team/">Previscio</a></li> 
	<li><a href="https://www.promegis.de/karriere/">Promegis</a></li> 
	<li><a href="https://www.propelleraero.com/jobs/sydney/">Propeller</a></li> 
	<li><a href="https://prospera.ag/careers/">Prospera</a></li> 
	<li><a href="https://qed.ai/careers">QED</a></li> 
	<li><a href="https://careers-nv5.icims.com/jobs/search?ss=1&amp;hashed=-435710753">Quantum Spatial</a></li> 
	<li><a href="https://www.radiant.earth/careers/">Radiant Earth</a></li> 
	<li><a href="https://readar.com/jobs/">Readaar</a></li> 
	<li><a href="https://www.regio.ee/ettevottest/tule-toole/">Regio</a></li> 
	<li><a href="https://jobs.gusto.com/boards/regrid-map-your-future-c265c805-0902-4628-bd27-d013fdcfb5bc?hsCtaTracking=f32fadc7-2ef2-4bcb-ba61-ded5364f3999%7Cd959f439-eb71-4372-b4ac-3b891f1fefc4">Regrid</a></li> 
	<li><a href="https://jobs.lever.co/regrow.ag">Regrow</a></li> 
	<li><a href="https://www.remote-sensing-solutions.com/job-posting/">Remote Sensing Solutions RSS</a></li> 
	<li><a href="https://www.rezatec.com/about/working-for-rezatec/">Rezatec</a></li> 
	<li><a href="https://riskfrontiers.com/meet-the-team/careers/">Risk Frontiers</a></li> 
	<li><a href="https://www.riverside.com/careers">Riverside</a></li> 
	<li><a href="https://rmsi.zohorecruit.com/jobs/Careers">RMSI</a></li> 
	<li><a href="https://rsmetrics.com/careers/">RS Metrics</a></li> 
	<li><a href="https://rss-hydro.lu/rss-careers/">RSS-Hydro</a></li> 
	<li><a href="https://www.safegraph.com/careers">Safegraph</a></li> 
	<li><a href="https://salo.ai/careers">Salo Sciences</a></li> 
	<li><a href="https://satelligence.com/careers">Satelligence</a></li> 
	<li><a href="https://www.satellitevu.com/careers">Satellite Vu</a></li> 
	<li><a href="https://satellogic.bamboohr.com/jobs/">Satellogic</a></li> 
	<li><a href="https://www.satelytics.com/careers/">Satelytics</a></li> 
	<li><a href="https://www.satpalda.com/career">Satpalda Geospatial Services</a></li> 
	<li><a href="https://satsure.zohorecruit.in/jobs/Careers">Satsure</a></li> 
	<li><a href="https://www.schneidergis.com/careers">Schneider</a></li> 
	<li><a href="https://seequent.csod.com/ux/ats/careersite/1/home?c=seequent">Seequent</a></li> 
	<li><a href="https://sensat.notion.site/Careers-at-Sensat-a47cf24fbfd94b55b81a090cbe67a565">Sensat</a></li> 
	<li><a href="https://ageagle.com/about/careers/">Sensefly</a></li> 
	<li><a href="https://sensorem.com.au/careers/">Sensorem</a></li> 
	<li><a href="https://www.sentinel-hub.at/careers/#careers">Sentinelhub Austria</a></li> 
	<li><a href="https://sharpershape.com/careers/">Sharpershape</a></li> 
	<li><a href="https://www.sinergise.com/en/careers/openpositions">Sinergise</a></li> 
	<li><a href="https://sistema.at/join-us/">Sistema GmbH</a></li> 
	<li><a href="https://www.sivandesign.com/company/careers/">Sivan Design</a></li> 
	<li><a href="https://skycatch.com/careers">Skycatch</a></li> 
	<li><a href="https://skygeo.com/careers-software-development/">SkyGeo</a></li> 
	<li><a href="https://angel.co/company/skylark-drones/jobs">Skylark Drones</a></li> 
	<li><a href="https://skymapglobal.com/careers/">Skymap Global</a></li> 
	<li><a href="https://skytruth.org/about/careers/">Skytruth</a></li> 
	<li><a href="https://skywatch.com/careers/">Skywatch</a></li> 
	<li><a href="https://skyx.com/careers/">SkyX</a></li> 
	<li><a href="https://www.sobolt.com/careers/">Sobolt</a></li> 
	<li><a href="https://www.space-intelligence.com/working-for-us/">Space Intelligence Ltd</a></li> 
	<li><a href="https://www.space4good.com/vacancies">Space4good</a></li> 
	<li><a href="https://www.spacebel.com/en/careers">Spacebel</a></li> 
	<li><a href="https://spaceknow.com/careers/#positions">Spaceknow</a></li> 
	<li><a href="http://spacemetric.com/vacancies/">Spacemetric</a></li> 
	<li><a href="https://50-partners.welcomekit.co/companies/spacesense-ai">Spacesense</a></li> 
	<li><a href="https://www.spacesur.com/we-are-hiring/">SpaceSUR</a></li> 
	<li><a href="http://www.spacewillinfo.com/careers/Social/">Spacewill</a></li> 
	<li><a href="https://sparkgeo.com/careers/">Sparkgeo</a></li> 
	<li><a href="https://spatialdecisions.net/job-openings">Spatial Decisions</a></li> 
	<li><a href="https://spatialdistillery.com/careers">Spatial Destillery</a></li> 
	<li><a href="https://www.fulcrumapp.com/careers#careers-section">Spatial Networks</a></li> 
	<li><a href="https://www.datakiosk.com.au/cirrus/usercontrols/journey/careers_joblist.aspx?kiosk=FA4EC1ED5C0350F994D00A531FCED259&amp;MD5=8490E0B47875F31AACBD5C56A6657196">Spatial Vision</a></li> 
	<li><a href="https://spiralblue.space/careers">Sprial Blue</a></li> 
	<li><a href="https://spire.com/careers/job-openings/">Spire</a></li> 
	<li><a href="https://jobs.lever.co/sylvera">Sylvera</a></li> 
	<li><a href="https://www.esri-austria.at/ueber-uns/karriere/">SynerGIS Informationssysteme GmbH</a></li> 
	<li><a href="https://careers.synspective.com/">Synspective</a></li> 
	<li><a href="https://t-kartor.com/careers/">T-Kartor</a></li> 
	<li><a href="https://www.taranis.com/careers/#link__list__content">Taranis</a></li> 
	<li><a href="https://www.targomo.com/about-us/career/">Targomo</a></li> 
	<li><a href="https://careers.avineon-tensing.com/en/jobs?utm_campaign=page_1880135_cta_17127438&amp;utm_content=https%3A%2F%2Fcareers.avineon-tensing.com&amp;utm_medium=cta-block&amp;utm_source=teamtailor-page">Tensing</a></li> 
	<li><a href="https://www.tensorflight.io/careers">Tensorflight</a></li> 
	<li><a href="https://www.terraremote.com/careers">Terra Remote Sensing</a></li> 
	<li><a href="https://www.terrabotics.co.uk/careers">Terrabotics</a></li> 
	<li><a href="https://www.terradue.com/portal/jobs">Terradue</a></li> 
	<li><a href="https://apply.workable.com/terrafuse/">Terrafuse AI</a></li> 
	<li><a href="https://terragotech.com/careers/">TerraGo</a></li> 
	<li><a href="https://www.terraqt.com/en/team#Joinus">TerraQuanta</a></li> 
	<li><a href="https://www.terrestris.de/en/aktuelle-stellenangebote/">Terrestris</a></li> 
	<li><a href="https://tesselo.com/about#job-offers">Tesselo</a></li> 
	<li><a href="https://www.theyield.com/about-us/jobs">The Yield</a></li> 
	<li><a href="https://www.tomorrow.io/careers/">Tomorrow io</a></li> 
	<li><a href="https://www.tomtom.com/careers/joboverview/">TomTom</a></li> 
	<li><a href="https://topolytics.com/join-us/">Topolytics</a></li> 
	<li><a href="https://traveltime.recruitee.com/">Traveltime</a></li> 
	<li><a href="https://site.tre-altamira.com/work-with-us/">Tre Altamira</a></li> 
	<li><a href="https://www.trigis.de/en/stellenangebote-bereiche/bereich/stellenangebote.html">Trigis Geoservices GmbH</a></li> 
	<li><a href="https://ubilabs.com/en/career">Ubilabs</a></li> 
	<li><a href="https://join.com/companies/ubiq">Ubiq</a></li> 
	<li><a href="https://umbralab.bamboohr.com/jobs/">Umbra</a></li> 
	<li><a href="https://jobs.lever.co/unacast/">Unacast</a></li> 
	<li><a href="https://up42gmbh.recruitee.com/">UP42</a></li> 
	<li><a href="https://jobs.upstream.tech/">Upstream Tech</a></li> 
	<li><a href="https://ursaspacesystems.applytojob.com/apply/">Ursa Space</a></li> 
	<li><a href="https://vercator.com/careers/">Vercator</a></li> 
	<li><a href="https://www.vertigis.com/careers/europe/#rt-jobs-1">Vertigis</a></li> 
	<li><a href="https://www.vertigis.com/careers/north-america/">Vertigis</a></li> 
	<li><a href="https://vineview.com/careers/">Vineview</a></li> 
	<li><a href="https://www.vista-geo.de/karriere">VISTA Remote Sensing</a></li> 
	<li><a href="https://vizzuality.bamboohr.com/jobs/?source=vizzuality">Vizzuality</a></li> 
	<li><a href="https://jobs.maxime-media.de/wheregroup-gmbh">WhereGroup GmbH</a></li> 
	<li><a href="https://recruiting.paylocity.com/Recruiting/Jobs/All/48bc25bb-ce82-49c6-a964-021ed91f68d1">Woolpert</a></li> 
	<li><a href="https://worldfrom.space/en/career/">World from Space</a></li> 
	<li><a href="https://wyvern.space/careers/">Wyvern</a></li>`,d(e,"class","list-disc text-left")},m(t,s){T(t,e,s)},p:u,i:u,o:u,d(t){t&&v(e)}}}class Ge extends I{constructor(e){super(),E(this,e,null,_e,G,{})}}function Te(a){let e,t,s,i,h,l,f;return l=new Ge({}),{c(){e=c("div"),t=c("h2"),t.textContent="Tracked Companies",s=p(),i=c("p"),i.innerHTML=`The geospatial companies come from <a href="https://github.com/chrieke/awesome-geospatial-companies">this excellent list by Christoph Rieke</a>.
    The names of the companies (and the careers page the newsletter monitors) are available below.`,h=p(),O(l.$$.fragment)},m(n,o){T(n,e,o),r(e,t),r(e,s),r(e,i),r(e,h),C(l,e,null),f=!0},p:u,i(n){f||(A(l.$$.fragment,n),f=!0)},o(n){P(l.$$.fragment,n),f=!1},d(n){n&&v(e),_(l)}}}class Ee extends I{constructor(e){super(),E(this,e,null,Te,G,{})}}function Ie(a){let e,t,s,i,h,l,f,n,o,m,w,j,g,k,y,Z,$,ee,N,ae,B,te,q,re,V,ie,K,se,M,oe,U,le,H,ce,X,D;return y=new Ee({props:{id:"companies"}}),{c(){e=c("div"),t=c("article"),s=c("h2"),s.textContent="Table of Contents",i=p(),h=c("ul"),h.innerHTML=`<li><a href="#desc">What is this?</a></li> 
            <li><a href="#companies">Which companies are monitored?</a></li> 
            <li><a href="#comparison">How does this compare to other newsletters?</a></li> 
            <li><a href="#infra">How was this made?</a></li> 
            <li><a href="#contribution">How do I contribute?</a></li>`,l=p(),f=c("h2"),f.textContent="What is this?",n=p(),o=c("p"),o.textContent=`The Geospatial Jobs Monitor is a newsletter that tells you which geospatial companies might have posted new jobs.
        It is automatically detects changes in the careers pages so that you can see positions as soon as they are posted.`,m=p(),w=c("p"),w.textContent="Newsletters are sent on Tuesdays and Fridays at 7am GMT.",j=p(),g=c("p"),g.innerHTML=`This newsletter is a firehose - there is no way to filter the type of jobs you get you&#39;re interested in, no way
        to filter by country, and no sure-fire way to tell whether the company&#39;s job page has added a job or removed one.
        For a more curated newsletter, I&#39;d recommend you subscribe to <a href="#comparison">one of the other incredible geospatial newsletters out there.</a>`,k=p(),O(y.$$.fragment),Z=p(),$=c("h2"),$.textContent="How does this compare to other newsletters?",ee=p(),N=c("p"),N.textContent=`I made this newsletter so that I could see as many potential opportunities as possible without having to check the careers pages of companies
            that I cared about.`,ae=p(),B=c("p"),B.textContent=`If you are looking less actively, or just want a more curated list, there are many other incredible sources
            for jobs in the geospatial industry.`,te=p(),q=c("p"),q.innerHTML=`To start, there is the <a href="">Geospatial Jobs Newsletter</a> by Ali Ahmadalipour. This is a curated newsletter that
            focuses primarily on US-based companies in more technical positions.`,re=p(),V=c("p"),V.innerHTML='<a href="https://discourse.pangeo.io/c/news/jobs/14">Pangeo also has a job board</a> for specifically geospatial jobs.',ie=p(),K=c("p"),K.innerHTML=`For jobs in space, AI, Climate, I&#39;d recommend looking at the <a href="https://github.com/DahnJ/EO-jobs#portals--jobs">collection of job portals by Daniel Jahn</a>
        He has also collated a bunch of valuable information specifically for jobs in Earth observation, but there is a lot of interesting information for geospatial more generally as well.`,se=p(),M=c("h2"),M.textContent="How was this made?",oe=p(),U=c("p"),U.innerHTML=`This newsletter was made using <a href="https://webchanges.readthedocs.io/en/stable/">webchanges</a>, <a href="https://modal.com/">Modal</a> and <a href="groups.io">Groups.io</a>.
            The companies and their careers pages are collated in a <a href="https://docs.google.com/spreadsheets/d/1YieNiDHVTC5CfX13n72fXuceDaubSuyrghgAnxipsbY/edit#gid=0">Google Sheet</a>.
            The source code is available in <a href="https://github.com/dchirst/geospatialjobs">this repository</a>.`,le=p(),H=c("h2"),H.textContent="How do I contribute?",ce=p(),X=c("p"),X.innerHTML=`If you want to add a company, have found a mistake, or want to make any other improvement, please
            <a href="https://github.com/dchirst/geospatialjobs/issues">submit an issue</a> or add a comment on
            <a href="https://docs.google.com/spreadsheets/d/1YieNiDHVTC5CfX13n72fXuceDaubSuyrghgAnxipsbY/edit#gid=0">the Google Sheet</a>.`,d(f,"id","desc"),d(o,"class",""),d($,"id","comparison"),d(M,"id","infra"),d(H,"id","contribution"),d(t,"class","prose prose-p:text-left")},m(b,ue){T(b,e,ue),r(e,t),r(t,s),r(t,i),r(t,h),r(t,l),r(t,f),r(t,n),r(t,o),r(t,m),r(t,w),r(t,j),r(t,g),r(t,k),C(y,t,null),r(t,Z),r(t,$),r(t,ee),r(t,N),r(t,ae),r(t,B),r(t,te),r(t,q),r(t,re),r(t,V),r(t,ie),r(t,K),r(t,se),r(t,M),r(t,oe),r(t,U),r(t,le),r(t,H),r(t,ce),r(t,X),D=!0},p:u,i(b){D||(A(y.$$.fragment,b),D=!0)},o(b){P(y.$$.fragment,b),D=!1},d(b){b&&v(e),_(y)}}}class $e extends I{constructor(e){super(),E(this,e,null,Ie,G,{})}}function Me(a){let e,t,s,i,h,l,f,n,o;return l=new Ce({}),n=new $e({}),{c(){e=c("main"),t=c("h1"),t.textContent="Geospatial Jobs Monitor",s=p(),i=c("h2"),i.textContent="A bi-weekly auto-generated newsletter for jobs in the geospatial industry",h=p(),O(l.$$.fragment),f=p(),O(n.$$.fragment)},m(m,w){T(m,e,w),r(e,t),r(e,s),r(e,i),r(e,h),C(l,e,null),r(e,f),C(n,e,null),o=!0},p:u,i(m){o||(A(l.$$.fragment,m),A(n.$$.fragment,m),o=!0)},o(m){P(l.$$.fragment,m),P(n.$$.fragment,m),o=!1},d(m){m&&v(e),_(l),_(n)}}}class He extends I{constructor(e){super(),E(this,e,null,Me,G,{})}}new He({target:document.getElementById("app")});
