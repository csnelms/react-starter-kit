<cfmodule template="#application.modules#intranet_header.cfm" cur="react-starter-kit" scriptconflict=true>

<cfscript>
	cachebuster = CreateUUID();
	request.framework.addCSS("#request.framework.getBaseUrl()#react/apps/react-starter-kit/app.css?v=#cachebuster#");
</cfscript>

<cfoutput>
	<div id="app" class="bb_v1"></div>
	<script src="#request.framework.getBaseUrl()#react/apps/react-starter-kit/app.min.js?v=#cachebuster#"></script>
</cfoutput>

<cfmodule template="#application.modules#intranet_footer.cfm">

