// this is the code to be injected
// 
(function () {
	//showVPdetails;
	window.addEventListener('resize', showVPdetails);
	setTimeout(showVPdetails, 50);
	//showVPdetails;
})();
// show viewport size
function showVPdetails() {
  var viewportWidth = document.documentElement.clientWidth;
  var vpWidth = parseInt(viewportWidth);
  var viewportHeight = document.documentElement.clientHeight;
  var vpHeight = parseInt(viewportHeight);
  var VPaspectRatio = viewportWidth / viewportHeight;
	var VPaspectRounded = (Math.round(VPaspectRatio * 100)) / 100;
	  // console.info("rounded VP aspect " + VPaspectRounded);
	var vpdetails = viewportWidth + ' X ' + viewportHeight + ' px & w/h = ' + VPaspectRounded;
	//var vpdetails = "test";
    var fontSize = '30px';
	var dwidth = '450px';
    if(vpWidth <= 840) { fontSize = '30px'; dwidth = '370px'; } else { fontSize = '35px'; dwidth = '450px'; };
	var element = document.getElementById("vpsize");
	  if(element != null) {
		element.parentNode.removeChild(element);
	  };
	const template = document.createElement('div');
	template.setAttribute("id", "vpsize");
	template.setAttribute("title", "Viewport Size and Aspect");
	template.setAttribute("style","font-size:" + fontSize + ";z-index: 20;");
	template.setAttribute("class","dimensions");
	template.style.position = 'fixed';
	template.style.bottom = 0;
	template.style.left = 0;
	template.style.display = 'block';
	template.style.width = dwidth;
	template.style.height = '40px';
	template.style.margin = '0 0 60px 40px';
	template.style.padding = '15px';
	template.style.color = '#fff';
	template.style.background = '#08c';
	template.textContent = vpdetails;
	document.body.appendChild(template);
};
