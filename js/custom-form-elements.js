/*

CUSTOM FORM ELEMENTS

Created by Ryan Fait
www.ryanfait.com

The only things you may need to change in this file are the following
variables: checkboxHeight, radioHeight and selectWidth (lines 24, 25, 26)

The numbers you set for checkboxHeight and radioHeight should be one quarter
of the total height of the image want to use for checkboxes and radio
buttons. Both images should contain the four stages of both inputs stacked
on top of each other in this order: unchecked, unchecked-clicked, checked,
checked-clicked.

You may need to adjust your images a bit if there is a slight vertical
movement during the different stages of the button activation.

The value of selectWidth should be the width of your select list image.

Visit http://ryanfait.com/ for more information.

*/

var checkboxHeight = "17";
var radioHeight = "17";
var selectWidth = "190";


/* No need to change anything after this */

document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; width: '+selectWidth+"px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>");var Custom={init:function(){var e,f,g,c=document.getElementsByTagName("input"),d=Array();for(a=0;a<c.length;a++)"checkbox"!=c[a].type&&"radio"!=c[a].type||"styled"!=c[a].className||(d[a]=document.createElement("span"),d[a].className=c[a].type,1==c[a].checked&&("checkbox"==c[a].type?(position="0 -"+2*checkboxHeight+"px",d[a].style.backgroundPosition=position):(position="0 -"+2*radioHeight+"px",d[a].style.backgroundPosition=position)),c[a].parentNode.insertBefore(d[a],c[a]),c[a].onchange=Custom.clear,c[a].getAttribute("disabled")?d[a].className=d[a].className+=" disabled":(d[a].onmousedown=Custom.pushed,d[a].onmouseup=Custom.check));for(c=document.getElementsByTagName("select"),a=0;a<c.length;a++)if("styled"==c[a].className){for(f=c[a].getElementsByTagName("option"),g=f[0].childNodes[0].nodeValue,e=document.createTextNode(g),b=0;b<f.length;b++)1==f[b].selected&&(e=document.createTextNode(f[b].childNodes[0].nodeValue));d[a]=document.createElement("span"),d[a].className="select",d[a].id="select"+c[a].name,d[a].appendChild(e),c[a].parentNode.insertBefore(d[a],c[a]),c[a].getAttribute("disabled")?c[a].previousSibling.className=c[a].previousSibling.className+=" disabled":c[a].onchange=Custom.choose}document.onmouseup=Custom.clear},pushed:function(){element=this.nextSibling,this.style.backgroundPosition=1==element.checked&&"checkbox"==element.type?"0 -"+3*checkboxHeight+"px":1==element.checked&&"radio"==element.type?"0 -"+3*radioHeight+"px":1!=element.checked&&"checkbox"==element.type?"0 -"+checkboxHeight+"px":"0 -"+radioHeight+"px"},check:function(){if(element=this.nextSibling,1==element.checked&&"checkbox"==element.type)this.style.backgroundPosition="0 0",element.checked=!1;else{if("checkbox"==element.type)this.style.backgroundPosition="0 -"+2*checkboxHeight+"px";else for(this.style.backgroundPosition="0 -"+2*radioHeight+"px",group=this.nextSibling.name,inputs=document.getElementsByTagName("input"),a=0;a<inputs.length;a++)inputs[a].name==group&&inputs[a]!=this.nextSibling&&(inputs[a].previousSibling.style.backgroundPosition="0 0");element.checked=!0}},clear:function(){inputs=document.getElementsByTagName("input");for(var a=0;a<inputs.length;a++)"checkbox"==inputs[a].type&&1==inputs[a].checked&&"styled"==inputs[a].className?inputs[a].previousSibling.style.backgroundPosition="0 -"+2*checkboxHeight+"px":"checkbox"==inputs[a].type&&"styled"==inputs[a].className?inputs[a].previousSibling.style.backgroundPosition="0 0":"radio"==inputs[a].type&&1==inputs[a].checked&&"styled"==inputs[a].className?inputs[a].previousSibling.style.backgroundPosition="0 -"+2*radioHeight+"px":"radio"==inputs[a].type&&"styled"==inputs[a].className&&(inputs[a].previousSibling.style.backgroundPosition="0 0")},choose:function(){for(option=this.getElementsByTagName("option"),d=0;d<option.length;d++)1==option[d].selected&&(document.getElementById("select"+this.name).childNodes[0].nodeValue=option[d].childNodes[0].nodeValue)}};window.onload=Custom.init;