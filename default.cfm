<cfmodule template="#application.modules#intranet_header.cfm" cur="myApp" scriptconflict=true>

<cfscript>
	cachebuster = CreateUUID();
	request.framework.addCSS("#request.framework.getBaseUrl()#react/apps/myApp/app.css?v=#cachebuster#");
</cfscript>

<!---TODO: change network calls to async/await--->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<cfoutput>
	<div id="app" class="bb_v1"></div>
	<script src="#request.framework.getBaseUrl()#react/apps/myApp/app.min.js?v=#cachebuster#"></script>
</cfoutput>

<cfmodule template="#application.modules#intranet_footer.cfm">

