<script>
    import Companies from "./Companies.svelte";
</script>

<div>
    <article class="prose prose-p:text-left">
        <h2>Table of Contents</h2>
        <ul>
            <li><a href="#desc">What is this?</a></li>
            <li><a href="#companies">Which companies are monitored?</a></li>
            <li><a href="#comparison">How does this compare to other newsletters?</a></li>
            <li><a href="#infra">How was this made?</a></li>
            <li><a href="#contribution">How do I contribute?</a></li>



        </ul>
        <h2 id="desc">What is this?</h2>
        <p class="">The Geospatial Jobs Monitor is a newsletter that tells you which geospatial companies might have posted new jobs.
        It is automatically detects changes in the careers pages so that you can see positions as soon as they are posted.
        </p>
        <p>
            Newsletters are sent on Tuesdays and Fridays at 7am GMT.
        </p>
        <p>
            This newsletter is a firehose - there is no way to filter the type of jobs you get you're interested in, no way
        to filter by country, and no sure-fire way to tell whether the company's job page has added a job or removed one.
        For a more curated newsletter, I'd recommend you subscribe to <a href="#comparison">one of the other incredible geospatial newsletters out there.</a></p>
        <Companies id="companies" />
        <h2 id="comparison">How does this compare to other newsletters?</h2>
        <p>
            I made this newsletter so that I could see as many potential opportunities as possible without having to check the careers pages of companies
            that I cared about.
        </p>
        <p>
            If you are looking less actively, or just want a more curated list, there are many other incredible sources
            for jobs in the geospatial industry.
        </p>
        <p>
            To start, there is the <a href="">Geospatial Jobs Newsletter</a> by Ali Ahmadalipour. This is a curated newsletter that
            focuses primarily on US-based companies in more technical positions.
        </p>
        <p>
            <a href="https://discourse.pangeo.io/c/news/jobs/14">Pangeo also has a job board</a> for specifically geospatial jobs.
        </p>
        <p>For jobs in space, AI, Climate, I'd recommend looking at the <a href="https://github.com/DahnJ/EO-jobs#portals--jobs">collection of job portals by Daniel Jahn</a>
        He has also collated a bunch of valuable information specifically for jobs in Earth observation, but there is a lot of interesting information for geospatial more generally as well.
        </p>
        <h2 id="infra">How was this made?</h2>
        <p>
            This newsletter was made using <a href="https://modal.com/">Modal</a> and <a href="groups.io">Groups.io</a>.
            The companies and their careers pages are collated in a <a href="https://docs.google.com/spreadsheets/d/1YieNiDHVTC5CfX13n72fXuceDaubSuyrghgAnxipsbY/edit#gid=0">Google Sheet</a>.
            The source code is available in <a href="https://github.com/dchirst/geospatialjobs">this repository</a>.
        </p>
        <h2 id="contribution">How do I contribute?</h2>
        <p>
            If you want to add a company, have found a mistake, or want to make any other improvement, please
            <a href="https://github.com/dchirst/geospatialjobs/issues">submit an issue</a> or add a comment on
            <a href="https://docs.google.com/spreadsheets/d/1YieNiDHVTC5CfX13n72fXuceDaubSuyrghgAnxipsbY/edit#gid=0">the Google Sheet</a>.
        </p>
    </article>
</div>