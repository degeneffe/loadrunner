//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//" Script Title       : 
//"                      
//" Script Date        : Sat Feb 13 21:00:41 2016
//"                       
//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function Action1()
{
	
	lr.thinkTime(5);
	web.addCookie('ADRUM=s=1455393625624&r=http%3A%2F%2Fwww.elcorteingles.es%2F%3F0; DOMAIN=www.elcorteingles.es');

	web.addCookie('ADRUM=s=1455393625624&r=http%3A%2F%2Fwww.elcorteingles.es%2F%3F0; DOMAIN=api.elcorteingles.es');

	lr.thinkTime(6);
	web.url(
		{
			name : 'search', 
			url : 'http://www.elcorteingles.es/search/?s=ordenador', 
			targetFrame : '', 
			resource : 0, 
			recContentType : 'text/html', 
			referer : 'http://www.elcorteingles.es/', 
			snapshot : 't31.inf', 
			mode : 'HTML', 
			extraRes :  [
				{url : '../sgfm/SGFM/assets/stylesheets/images/stroked.svg', referer : 'http://www.elcorteingles.es/sgfm/SGFM/assets/stylesheets/crs.css'},
				{url : '../api/stock?products=A17266192%2CA14041076%2CA15248249%2CA16251601%2CA16792380%2CA16479804%2CA16574428%2CA16251373%2CA16479581%2CA16297698%2CA16792390%2CA14040991%2CA16297700%2CA16623401%2CA16251361%2CA17373848%2CA15655393%2CA14885207%2CA15655603%2CA12221574%2CA14699445%2CA15655398%2CA15798804%2CA16479808', referer : 'http://www.elcorteingles.es/search/?s=ordenador'},
				{url : '../favicon.ico', referer : ''},
				{url : 'http://api.elcorteingles.es/ecommerce/session/cart?scopes=items%2CdataLayer%2CshippingPrice', referer : 'http://www.elcorteingles.es/search/?s=ordenador'}
			]
		}
	);

	return 0;
}

