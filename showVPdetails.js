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
	var vpdetails = '<img src="images/isoblockBW48.png"> ' + viewportWidth + ' X ' + viewportHeight + ' px & w/h = ' + VPaspectRounded;
	//var vpdetails = "test";
    var fontSize = '30px';
	var dwidth = '470px';
    if(vpWidth <= 840) { fontSize = '30px'; dwidth = '410px'; } else { fontSize = '35px'; dwidth = '490px'; };
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
	styleval = styleval +  "height: 40px;";
	styleval = styleval +  "margin: 0 0 5vh 2vw;";
	styleval = styleval +  "padding: 15px;";
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
