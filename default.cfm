<cfmodule template="#application.modules#intranet_header.cfm" cur="devtools" scriptconflict=true>

<cfscript>
	cachebuster = CreateUUID();
	//request.framework.addCSS("#request.framework.getBaseUrl()#assets/styles/queue/common.css?v=#cachebuster#");
	request.framework.addCSS("#request.framework.getBaseUrl()#react/apps/devtools/app.css?v=#cachebuster#");
</cfscript>

<script>
	//TODO: figure out best way to initialize app with data
	//baseURL = <cfoutput>#request.framework.getBaseUrl()#</cfoutput>;
</script>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<cfoutput>
	<div id="app" class="bb_v1"></div>
	<script src="#request.framework.getBaseUrl()#react/apps/devtools/app.min.js?v=#cachebuster#"></script>
</cfoutput>

<cfmodule template="#application.modules#intranet_footer.cfm">

