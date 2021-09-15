// this is the code to be injected
// 
(function () {
	//showVPdetails;
	var keyCode = '';
	var hkey = "r";
	setTimeout(showVPdetails, 5);
	document.addEventListener("load", function(event) {
		setTimeout(showVPdetails, 5);
	});
	document.addEventListener("keydown", function(event) {
		event.preventDefault();
		keyCode = event.key;
		console.info('keycode = ' + keyCode);
		console.info('hkey = ' + hkey);
		if(keyCode == hkey) {
			setTimeout(showVPdetails, 0);
		};
	});
	setTimeout(function(){if(keyCode != '') {hkey = keyCode;} else {hkey = 'r';}}, 1500);
	console.info('here we are');
})();
// show viewport size
function showVPdetails() {
  window.addEventListener('resize', showVPdetails);
  var viewportWidth = document.documentElement.clientWidth;
  var vpWidth = parseInt(viewportWidth);
  var viewportHeight = document.documentElement.clientHeight;
  var vpHeight = parseInt(viewportHeight);
  var VPaspectRatio = viewportWidth / viewportHeight;
	var VPaspectRounded = (Math.round(VPaspectRatio * 100)) / 100;
	  // console.info("rounded VP aspect " + VPaspectRounded);
	//var vpdetails = viewportWidth + ' X ' + viewportHeight + ' px & w/h = ' + VPaspectRounded;
	var vpdetails = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vw" viewBox="0 0 180.000000 180.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,180.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M0 1325 l0 -465 46 -157 c54 -186 107 -369 159 -548 21 -72 42 -136 48 -142 7 -10 175 -13 778 -13 l769 0 0 476 0 476 -55 186 c-30 103 -84 288 -120 411 -36 122 -68 227 -71 232 -3 5 -332 9 -780 9 l-774 0 0 -465z m1052 -29 l129 -419 -3 -96 -3 -96 -101 345 -102 345 -178 0 -179 0 -3 -223 -2 -222 -278 2 -277 3 -3 380 c-1 209 0 386 3 393 3 10 96 12 436 10 l432 -3 129 -419z m490 302 c20 -68 70 -241 112 -385 42 -145 76 -267 76 -273 0 -6 -89 -10 -247 -10 l-248 0 -69 223 c-77 251 -165 536 -171 555 -3 9 52 12 254 12 l258 0 35 -122z m-612 -302 c0 -7 52 -189 115 -404 63 -215 115 -396 115 -402 0 -7 -40 -10 -117 -8 l-117 3 -53 180 c-89 303 -183 632 -183 638 0 4 54 7 120 7 94 0 120 -3 120 -14z m-232 -266 c39 -152 174 -595 184 -608 8 -9 53 -12 182 -10 l171 3 3 223 2 222 255 0 255 0 0 -390 0 -390 -419 0 -419 0 -20 68 c-11 37 -47 164 -82 282 -34 118 -79 274 -101 347 -34 116 -39 144 -39 234 0 56 2 100 4 98 2 -2 13 -38 24 -79z m-53 -267 c16 -54 39 -134 51 -178 12 -44 46 -163 77 -265 30 -102 57 -197 61 -213 l6 -27 -273 0 -273 0 -21 78 c-25 95 -191 666 -199 687 -5 13 28 15 268 15 l274 0 29 -97z"/></g></svg> ' + viewportWidth + ' X ' + viewportHeight + ' px & w/h = ' + VPaspectRounded;
	//var vpdetails = "test";
    var fontSize = '3vw';
	var dwidth = '35vw';
    if(vpWidth <= 840) { fontSize = '2.5vw'; dwidth = '45vw'; dheight= '6vw'; } else { fontSize = '2vw'; dwidth = '30vw'; dheight= '4vw'; };
	var element = document.getElementById("vpsize");
	  if(element != null) {
		element.parentNode.removeChild(element);
	  };
	var element = document.getElementById("vpstyle");
	  if(element != null) {
		element.parentNode.removeChild(element);
	  };
	var styletemplate = document.createElement('style');
	styletemplate.setAttribute("id", "vpstyle");
	styletemplate.setAttribute("class","dimensions");
	var styleval = "#vpsize {";
	styleval = styleval +  "font-size:" + fontSize + ";";
	styleval = styleval +  "position: fixed;";
	styleval = styleval +  "bottom: 0;";
	styleval = styleval +  "left: 0;";
	styleval = styleval +  "display: block;";
	styleval = styleval +  "width: "+dwidth+";";
	styleval = styleval +  "height: "+dheight+";";
	styleval = styleval +  "margin: 0 0 10vh 2vw;";
	styleval = styleval +  "padding: .5vw;";
	styleval = styleval +  "color: #000;";
	styleval = styleval +  "background: #0cf;";
	styleval = styleval +  "z-index: 20;";
	styleval = styleval +  "}";
	styletemplate.innerHTML = styleval;
	document.body.appendChild(styletemplate);
	
	var template = document.createElement('div');
	template.setAttribute("id", "vpsize");
	template.setAttribute("title", "Viewport Size and Aspect");
	setTimeout(function(){template.style.display = 'none';}, 5000);
	// Notification icon.
	template.innerHTML = vpdetails;
	document.body.appendChild(template);
};
