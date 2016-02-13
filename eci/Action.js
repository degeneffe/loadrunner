//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//" Script Title       : 
//"                      
//" Script Date        : Sat Feb 13 20:55:31 2016
//"                       
//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function Action()
{
	web.url(
		{
			
			name : 'www.elcorteingles.es', 
			url : 'http://www.elcorteingles.es/', 
			targetFrame : '', 
			resource : 0, 
			recContentType : 'text/html', 
			referer : '', 
			snapshot : 't1.inf', 
			mode : 'HTML', 
			extraRes :  [
				{url : '/sgfm/SGFM/assets/stylesheets/fonts/opensans-regular-webfont.woff', referer : 'http://www.elcorteingles.es/sgfm/SGFM/assets/stylesheets/crs.css'},
				{url : '/sgfm/SGFM/assets/stylesheets/fonts/opensans-bold-webfont.woff', referer : 'http://www.elcorteingles.es/sgfm/SGFM/assets/stylesheets/crs.css'},
				{url : '/sgfm/SGFM/assets/stylesheets/fonts/moonshine-font.woff', referer : 'http://www.elcorteingles.es/sgfm/SGFM/assets/stylesheets/crs.css'},
				{url : '/sgfm/SGFM/assets/javascripts/library/external/dust-helpers.min.js'},
				{url : '/sgfm/SGFM/assets/stylesheets/fonts/lato-regular-webfont.woff', referer : 'http://www.elcorteingles.es/sgfm/SGFM/assets/stylesheets/crs.css'},
				{url : '/sgfm/SGFM/assets/javascripts/library/external/dust-core.min.js'},
				{url : 'http://www.googletagmanager.com/gtm.js?id=GTM-TMQVMD'},
				{url : '/sgfm/SGFM/assets/javascripts/compiled/templates.js'},
				{url : '/sgfm/SGFM/assets/javascripts/library/external/form2js.min.js'},
				{url : '/sgfm/SGFM/assets/stylesheets/images/confianza-online-icon.svg', referer : 'http://www.elcorteingles.es/sgfm/SGFM/assets/stylesheets/crs.css'}
			]
		}
	);

	return 0;
}

