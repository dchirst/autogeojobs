(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(i){if(i.ep)return;i.ep=!0;const c=t(i);fetch(i.href,c)}})();function w(){}function fe(a){return a()}function ce(){return Object.create(null)}function z(a){a.forEach(fe)}function me(a){return typeof a=="function"}function $(a,e){return a!=a?e==e:a!==e||a&&typeof a=="object"||typeof a=="function"}function de(a){return Object.keys(a).length===0}function r(a,e){a.appendChild(e)}function E(a,e,t){a.insertBefore(e,t||null)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}function n(a){return document.createElement(a)}function ge(a){return document.createTextNode(a)}function p(){return ge(" ")}function d(a,e,t){t==null?a.removeAttribute(e):a.getAttribute(e)!==t&&a.setAttribute(e,t)}function be(a){return Array.from(a.childNodes)}function ye(a,e,t,s){t===null?a.style.removeProperty(e):a.style.setProperty(e,t,s?"important":"")}let Q;function k(a){Q=a}const x=[],he=[],M=[],pe=[],ve=Promise.resolve();let U=!1;function je(){U||(U=!0,ve.then(ue))}function W(a){M.push(a)}const Y=new Set;let F=0;function ue(){const a=Q;do{for(;F<x.length;){const e=x[F];F++,k(e),Ae(e.$$)}for(k(null),x.length=0,F=0;he.length;)he.pop()();for(let e=0;e<M.length;e+=1){const t=M[e];Y.has(t)||(Y.add(t),t())}M.length=0}while(x.length);for(;pe.length;)pe.pop()();U=!1,Y.clear(),k(a)}function Ae(a){if(a.fragment!==null){a.update(),z(a.before_update);const e=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,e),a.after_update.forEach(W)}}const O=new Set;let xe;function C(a,e){a&&a.i&&(O.delete(a),a.i(e))}function B(a,e,t,s){if(a&&a.o){if(O.has(a))return;O.add(a),xe.c.push(()=>{O.delete(a),s&&(t&&a.d(1),s())}),a.o(e)}else s&&s()}function N(a){a&&a.c()}function G(a,e,t,s){const{fragment:i,after_update:c}=a.$$;i&&i.m(e,t),s||W(()=>{const l=a.$$.on_mount.map(fe).filter(me);a.$$.on_destroy?a.$$.on_destroy.push(...l):z(l),a.$$.on_mount=[]}),c.forEach(W)}function _(a,e){const t=a.$$;t.fragment!==null&&(z(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function ke(a,e){a.$$.dirty[0]===-1&&(x.push(a),je(),a.$$.dirty.fill(0)),a.$$.dirty[e/31|0]|=1<<e%31}function I(a,e,t,s,i,c,l,m=[-1]){const h=Q;k(a);const o=a.$$={fragment:null,ctx:[],props:c,update:w,not_equal:i,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:ce(),dirty:m,skip_bound:!1,root:e.target||h.$$.root};l&&l(o.root);let f=!1;if(o.ctx=t?t(a,e.props||{},(u,j,...b)=>{const A=b.length?b[0]:j;return o.ctx&&i(o.ctx[u],o.ctx[u]=A)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](A),f&&ke(a,u)),j}):[],o.update(),f=!0,z(o.before_update),o.fragment=s?s(o.ctx):!1,e.target){if(e.hydrate){const u=be(e.target);o.fragment&&o.fragment.l(u),u.forEach(v)}else o.fragment&&o.fragment.c();e.intro&&C(a.$$.fragment),G(a,e.target,e.anchor,e.customElement),ue()}k(h)}class S{$destroy(){_(this,1),this.$destroy=w}$on(e,t){if(!me(t))return w;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!de(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ce(a){let e;return{c(){e=n("div"),e.innerHTML=`<div id="groupsio_unstyled_embed_signup"><form action="https://groups.io/g/geospatialjobs/signup?u=8411627063917404564" method="post" id="groupsio-embedded-subscribe-form" name="groupsio-embedded-subscribe-form" target="_blank"><div id="groupsio_unstyled_embed_signup_scroll"><input type="email" value="" name="email" class="email input input-bordered input-primary mt-5" id="email" placeholder="email address" required=""/> 
      
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8411627063917404564" tabindex="-1" value=""/></div> 
      <div id="templatearchives"></div> 
      <input type="submit" value="Subscribe" name="subscribe" id="groupsio-embedded-subscribe" class="my-5 button btn btn-primary btn-md"/></div></form></div>`,d(e,"class","unstyledtemplate template"),ye(e,"display","block")},m(t,s){E(t,e,s)},p:w,i:w,o:w,d(t){t&&v(e)}}}class Ge extends S{constructor(e){super(),I(this,e,null,Ce,$,{})}}function _e(a){let e;return{c(){e=n("ul"),e.innerHTML=`<li><a href="https://360environmental.com.au/careers/">360Environmental</a></li> 
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
	<li><a href="https://www.agerpoint.com/careers">Agerpoint</a></li> 
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
	<li><a href="https://earthdaily.com/careers/career-opportunities/earthdaily-analytics-careers/">EarthDaily Analytics</a></li> 
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
	<li><a href="https://jobboerse.iabg.de/engage/jobexchange/showJobOfferList.do?j=myjobexchange">IABG</a></li> 
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
	<li><a href="https://www.lmkt.com/jobs">LMKT</a></li>`,d(e,"class","list-disc text-left")},m(t,s){E(t,e,s)},p:w,i:w,o:w,d(t){t&&v(e)}}}class $e extends S{constructor(e){super(),I(this,e,null,_e,$,{})}}function Ee(a){let e,t,s,i,c,l,m;return l=new $e({}),{c(){e=n("div"),t=n("h2"),t.textContent="Tracked Companies",s=p(),i=n("p"),i.innerHTML=`The geospatial companies come from <a href="https://github.com/chrieke/awesome-geospatial-companies">this excellent list by Christoph Rieke</a>.
    The names of the companies (and the careers page the newsletter monitors) are available below.`,c=p(),N(l.$$.fragment)},m(h,o){E(h,e,o),r(e,t),r(e,s),r(e,i),r(e,c),G(l,e,null),m=!0},p:w,i(h){m||(C(l.$$.fragment,h),m=!0)},o(h){B(l.$$.fragment,h),m=!1},d(h){h&&v(e),_(l)}}}class Ie extends S{constructor(e){super(),I(this,e,null,Ee,$,{})}}function Se(a){let e,t,s,i,c,l,m,h,o,f,u,j,b,A,y,Z,T,ee,K,ae,R,te,P,re,q,ie,J,se,H,oe,X,le,L,ne,V,D;return y=new Ie({props:{id:"companies"}}),{c(){e=n("div"),t=n("article"),s=n("h2"),s.textContent="Table of Contents",i=p(),c=n("ul"),c.innerHTML=`<li><a href="#desc">What is this?</a></li> 
            <li><a href="#companies">Which companies are monitored?</a></li> 
            <li><a href="#comparison">How does this compare to other newsletters?</a></li> 
            <li><a href="#infra">How was this made?</a></li> 
            <li><a href="#contribution">How do I contribute?</a></li>`,l=p(),m=n("h2"),m.textContent="What is this?",h=p(),o=n("p"),o.textContent=`The Geospatial Jobs Monitor is a newsletter that tells you which geospatial companies might have posted new jobs.
        It is automatically detects changes in the careers pages so that you can see positions as soon as they are posted.`,f=p(),u=n("p"),u.textContent="Newsletters are sent on Tuesdays and Fridays at 7am GMT.",j=p(),b=n("p"),b.innerHTML=`This newsletter is a firehose - there is no way to filter the type of jobs you get you&#39;re interested in, no way
        to filter by country, and no sure-fire way to tell whether the company&#39;s job page has added a job or removed one.
        For a more curated newsletter, I&#39;d recommend you subscribe to <a href="#comparison">one of the other incredible geospatial newsletters out there.</a>`,A=p(),N(y.$$.fragment),Z=p(),T=n("h2"),T.textContent="How does this compare to other newsletters?",ee=p(),K=n("p"),K.textContent=`I made this newsletter so that I could see as many potential opportunities as possible without having to check the careers pages of companies
            that I cared about.`,ae=p(),R=n("p"),R.textContent=`If you are looking less actively, or just want a more curated list, there are many other incredible sources
            for jobs in the geospatial industry.`,te=p(),P=n("p"),P.innerHTML=`To start, there is the <a href="">Geospatial Jobs Newsletter</a> by Ali Ahmadalipour. This is a curated newsletter that
            focuses primarily on US-based companies in more technical positions.`,re=p(),q=n("p"),q.innerHTML='<a href="https://discourse.pangeo.io/c/news/jobs/14">Pangeo also has a job board</a> for specifically geospatial jobs.',ie=p(),J=n("p"),J.innerHTML=`For jobs in space, AI, Climate, I&#39;d recommend looking at the <a href="https://github.com/DahnJ/EO-jobs#portals--jobs">collection of job portals by Daniel Jahn</a>
        He has also collated a bunch of valuable information specifically for jobs in Earth observation, but there is a lot of interesting information for geospatial more generally as well.`,se=p(),H=n("h2"),H.textContent="How was this made?",oe=p(),X=n("p"),X.innerHTML=`This newsletter was made using <a href="https://webchanges.readthedocs.io/en/stable/">webchanges</a>, <a href="https://modal.com/">Modal</a> and <a href="groups.io">Groups.io</a>.
            The companies and their careers pages are collated in a <a href="https://docs.google.com/spreadsheets/d/1YieNiDHVTC5CfX13n72fXuceDaubSuyrghgAnxipsbY/edit#gid=0">Google Sheet</a>.
            The source code is available in <a href="https://github.com/dchirst/geospatialjobs">this repository</a>.`,le=p(),L=n("h2"),L.textContent="How do I contribute?",ne=p(),V=n("p"),V.innerHTML=`If you want to add a company, have found a mistake, or want to make any other improvement, please
            <a href="https://github.com/dchirst/geospatialjobs/issues">submit an issue</a> or add a comment on
            <a href="https://docs.google.com/spreadsheets/d/1YieNiDHVTC5CfX13n72fXuceDaubSuyrghgAnxipsbY/edit#gid=0">the Google Sheet</a>.`,d(m,"id","desc"),d(o,"class",""),d(T,"id","comparison"),d(H,"id","infra"),d(L,"id","contribution"),d(t,"class","prose prose-p:text-left")},m(g,we){E(g,e,we),r(e,t),r(t,s),r(t,i),r(t,c),r(t,l),r(t,m),r(t,h),r(t,o),r(t,f),r(t,u),r(t,j),r(t,b),r(t,A),G(y,t,null),r(t,Z),r(t,T),r(t,ee),r(t,K),r(t,ae),r(t,R),r(t,te),r(t,P),r(t,re),r(t,q),r(t,ie),r(t,J),r(t,se),r(t,H),r(t,oe),r(t,X),r(t,le),r(t,L),r(t,ne),r(t,V),D=!0},p:w,i(g){D||(C(y.$$.fragment,g),D=!0)},o(g){B(y.$$.fragment,g),D=!1},d(g){g&&v(e),_(y)}}}class Te extends S{constructor(e){super(),I(this,e,null,Se,$,{})}}function He(a){let e,t,s,i,c,l,m,h,o;return l=new Ge({}),h=new Te({}),{c(){e=n("main"),t=n("h1"),t.textContent="Geospatial Jobs Monitor",s=p(),i=n("h2"),i.textContent="A bi-weekly auto-generated newsletter for jobs in the geospatial industry",c=p(),N(l.$$.fragment),m=p(),N(h.$$.fragment)},m(f,u){E(f,e,u),r(e,t),r(e,s),r(e,i),r(e,c),G(l,e,null),r(e,m),G(h,e,null),o=!0},p:w,i(f){o||(C(l.$$.fragment,f),C(h.$$.fragment,f),o=!0)},o(f){B(l.$$.fragment,f),B(h.$$.fragment,f),o=!1},d(f){f&&v(e),_(l),_(h)}}}class Le extends S{constructor(e){super(),I(this,e,null,He,$,{})}}new Le({target:document.getElementById("app")});
