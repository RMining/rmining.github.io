if(typeof BooManager=="undefined"){String.prototype.trim=function(){return this.replace(/^\s*/,"").replace(/\s*$/,"")};$bb=window.$bb||undefined;BooManager=new function(){this.adResponses=[];this.hasPreRoll=false;this.printedNonStandard=false;this.bid="";this.bbdo="";var _self=this,_hasJquery=true,_jqueryCalled=false,_loadedCss={},_loadedJs={},_tOuts={},_offsetTop=0,_offsetLeft=0,_fingerPrintID="",_customReg=/(interney|blogblogs|jovemnerd|ikwa|submarino|submarinoW|americanas|shoptime|guiamais)/,_keywordReg=/^([a-zA-Z0-9, ]+)$/,_canvasId="hashCanvas",_allformats=/(bba|bbb|bbc|bbd|bbe|bbf|bbg|bbh|bbi|bbj|bbk|bbl|bbm|bbn|bbo|bbp)/,_allchars={bba:50,bbb:50,bbc:25,bbd:25,bbe:65,bbf:65,bbg:75,bbh:75,bbi:60,bbj:40,bbk:65,bbl:50,bbm:65,bbn:65,bbo:50,bbp:0},_alllimits={bba:7,bbb:7,bbc:6,bbd:2,bbe:1,bbf:1,bbg:5,bbh:5,bbi:10,bbj:4,bbk:2,bbl:4,bbm:4,bbn:6,bbo:9,bbp:1},_format_map={bba:"728x90",bbb:"728x90",bbc:"468x60",bbd:"234x60",bbe:"125x125",bbf:"125x125",bbg:"120x600",bbh:"120x600",bbi:"160x600",bbj:"180x150",bbk:"120x240",bbl:"200x200",bbm:"250x250",bbn:"300x250",bbo:"336x280",bbp:"0x0"},_scroll=null,_protocol=typeof bb_https!="undefined"&&bb_https==true||window.location.protocol=="https:"?"https":"http",_staticSrc="static",_staticServer=_protocol+"://"+_staticSrc+".boo-box.com/";_servers={_site:_protocol+"://boo-box.com/",_pixel:_protocol+"://sledge.boo-box.com/_.gif",_viewability:_protocol+"://"+_staticSrc+".boo-box.com/javascripts/viewability/bb_viewability.min.js",_enablerJs:_protocol+"://"+_staticSrc+".boo-box.com/javascripts/html5/embed_enabler.min.js",_api:_protocol+"://sledge.boo-box.com/",_stable:_protocol+"://stable.boo-box.com",_static:_staticServer,_dummyurl:_protocol+"://"+_staticSrc+".boo-box.com/favicon.ico"},_jqueryApi={google:_protocol+"://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js",our:_servers._static+"javascripts/jquery/api/1.4.2.js"};var _setScriptClass=function _setScriptClass(){var scripts=document.getElementsByTagName("script"),scriptt,classs;for(var i=0,l=scripts.length;i<l;i++){scriptt=scripts[i];if(scriptt.src&&(scriptt.src.match(/javascripts\/embed\.js/)||scriptt.src.match(/javascripts\/embed\.src\.js/))){if(!BooManager.printedNonStandard){var imgPixel=document.createElement("img");imgPixel.src=_servers._pixel;imgPixel.className="boo-pixel-pos";imgPixel.setAttribute("style","margin:0px;padding:0px;border:0px;");scriptt.parentElement.insertBefore(imgPixel,scriptt);BooManager._offsetTop=imgPixel.offsetTop;BooManager._offsetLeft=imgPixel.offsetLeft}classs=scriptt.getAttribute("class")||"";if(!classs.match(/bb_script/)){scriptt.setAttribute("className","bb_script");scriptt.setAttribute("class","bb_script")}}}};var _getAdPosition=function _getAdPosition(){var topPosition=BooManager._offsetTop/document.documentElement.clientHeight*100;var sidePosition=BooManager._offsetLeft/document.documentElement.clientWidth*100;var position="";if(topPosition<40){position="header"}else if(sidePosition>50){position="sidebar"}else{position="content"}return position};var _setAdResponses=function(elCount,responded){BooManager.adResponses[elCount]=responded};var _getUrlParams=function _getUrlParams(){var bb_options=["name","type","user","did","bid","bbdo","aff","list","keygroup","keywords","uid","width","format","price","ads","sinc","ref","log","clickpartner","serverpartner","clickpartnerseq","generalclickpartner","ad_id","c_id","sformat"],bb_widget=BooManager.widgets,bb_url=[],usr_option,usr_value;bb_widget.push({});_setAdResponses(bb_widget.length-1,false);for(var i=0,l=bb_options.length;i<l;i++){usr_option=bb_options[i];usr_value=window["bb_"+usr_option];if(usr_value!==undefined&&(usr_value=usr_value.trim())!==""){switch(usr_option){case"name":case"ads":{usr_value=usr_value.toLowerCase();break}case"format":{bb_url.push(usr_option+"_api="+usr_value);break}case"sformat":{bb_url.push(usr_option+"="+usr_value);break}case"keywords":case"keygroup":{bb_url.push(usr_option+"="+encodeURIComponent(_keywords(usr_value)));break}case"clickpartner":{var v=usr_value+_servers._dummyurl;bb_url.push(usr_option+"="+encodeURIComponent(v));break}case"ref":case"clickpartnerseq":case"generalclickpartner":case"serverpartner":{bb_url.push(usr_option+"="+encodeURIComponent(usr_value));break}case"width":{var width=parseInt(usr_value.replace(/px/,"")),total_width=parseInt(bb_widget[bb_widget.length-1].limit*100),lines=total_width/width,height=parseInt(lines===1?100:lines*100);bb_url.push("_width="+width);bb_url.push("_height="+height);break}case"bid":{if(BooManager.bid==""){BooManager.bid=usr_value}bb_url.push(usr_option+"="+usr_value);break}case"bbdo":{bb_url.push("tag_version=2");if(BooManager.bbdo==""){BooManager.bbdo=usr_value}}default:{bb_url.push(usr_option+"="+usr_value);break}}bb_widget[bb_widget.length-1][usr_option]=usr_value}else{if(usr_option=="name"){usr_value="custom"}else if(usr_option=="bbdo"){bb_url.push("tag_version=1")}bb_widget[bb_widget.length-1][usr_option]=usr_value}window["bb_"+bb_options[i]]=""}return bb_url.join("&")};var _loadJquery=function _loadJquery(bb_params,bb_el){if(typeof jQuery!="undefined"){return}var head=document.getElementsByTagName("head")[0],el=document.createElement("script"),done=false;el.type="text/javascript";el.src=_jqueryApi.google;BooManager.jsonCallStack.push([bb_params,bb_el]);if(!_jqueryCalled){_jqueryCalled=true}else{return}el.onerror=function(){_loadJsonStack()};el.onload=el.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;_loadJsonStack();el.onload=el.onreadystatechange=null;head.removeChild(el)}};return head.appendChild(el)};var _loadJsonStack=function _loadJsonStack(){var json;if(BooManager.jsonCallStack.length>0){for(var i=0,l=BooManager.jsonCallStack.length;i<l;i++){json=BooManager.jsonCallStack[i];_start(json[0],json[1])}}};var _start=function _start(bb_params,bb_el){if(_hasJquery){$bb=jQuery}else{$bb=jQuery.noConflict()}_getJSON(bb_params,bb_el)};var _urlParams=function(){var match,pl=/\+/g,search=/([^&=]+)=?([^&]*)/g,decode=function(s){return decodeURIComponent(s.replace(pl," "))},query=window.location.search.substring(1);params={};while(match=search.exec(query))params[decode(match[1])]=decode(match[2]);return params};var _getJSON=function _getJSON(bb_params,bb_el){if(_fingerPrintID==""){_fingerPrintID=_md5FingerPrint()}var bb_widget=BooManager.widgets,bb_url=[],bb_callback="BooManager.parseJson",bb_rnd=Math.floor(Math.random()*1e3);bb_url.push(_servers._api+bb_widget[bb_el]["name"]+"/list");bb_url.push("?callback="+bb_callback);bb_url.push("&"+bb_params);bb_url.push("&el="+bb_el);bb_url.push("&fid="+_fingerPrintID);bb_url.push("&pos="+_getAdPosition());if(typeof _urlParams()["bb_target"]!="undefined"){bb_url.push("&tkn="+_urlParams()["bb_target"]);bb_url.push("&log=false")}bb_url.push("&rnd="+bb_rnd);if(bb_el>6){bb_url.push("&no_ads=true")}if(bb_el==0){_loadJs(_servers._viewability,function(){_scroll=new BBScrollListener;_scroll.create_listener()},null)}_loadJs(bb_url.join(""),null,function(){BooManager.parseJson({el:bb_el})})};var _makeAd=function _makeAd(bb_data){var bb_widget=BooManager.widgets,ad=bb_data.ad,out=[],elCount;elCount=parseInt(bb_data.el);ad.el=elCount;if(typeof bb_widget[elCount]["clickpartnerseq"]!="undefined"&&bb_widget[elCount]["clickpartner"]!=""){ad.url=bb_widget[elCount]["clickpartnerseq"]+ad.url}if(_protocol=="https"&&/^http:\/\/static\.boo-box\.com/.test(ad.img)&&(ad.content_type=="image"||ad.content_type=="flash")){ad.img="https://"+ad.img.replace(/^http:\/\//,"")}switch(ad.content_type){case"image":{if(typeof bb_widget[elCount]["clickpartner"]!="undefined"){bb_widget[elCount]["clickpartner"]+=encodeURIComponent(_servers._dummyurl)}out.push(_makeAdImage(ad));break}case"flash":{if(typeof bb_widget[elCount]["clickpartner"]!="undefined"&&bb_widget[elCount]["clickpartner"]!=""){ad.url=bb_widget[elCount]["clickpartner"]+ad.url}out.push(_makeAdFlash(ad));break}case"js":{out.push(_makeAdScript(ad));break}case"overlay":{out.push(_makeAdOverlay(ad));break}case"html5_overlay":case"html5_totem_overlay":case"html5_totem":case"html5_display":{if(typeof bb_widget[elCount]["clickpartner"]!="undefined"&&bb_widget[elCount]["clickpartner"]!=""){ad.url=bb_widget[elCount]["clickpartner"]+ad.url}out.push(_makeHtml5Ad(ad,elCount));break}default:{var url=ad.url;if(typeof bb_widget[elCount]["clickpartner"]!="undefined"){url=bb_widget[elCount]["clickpartner"]+ad.url+"?uri="}ad.img=ad.img.replace(/<#CLICKPARTNER>/g,url);if(typeof bb_widget[elCount]["clickpartnerseq"]!="undefined"){ad.img=ad.img.replace(/<#CLICKPARTNERSEQ>/g,ad.url)}bb_widget[elCount]["bb_ad"]=ad;out.push("<iframe");out.push(' src="');out.push(document.location.href);var dom=new RegExp("googleusercontent.com|google.com");if(dom.test(document.location.href)){out.push("&output=embed")}out.push('#boo-blank"');out.push(' id="boo-frame-'+elCount+'"');out.push(' width="'+ad.width+'"');out.push(' height="'+ad.height+'"');out.push(' scrolling="no" frameborder="0" marginwidth="0" marginheight="0" topmargin="0" leftmargin="0" allowtransparency="true"></iframe>');out.push('<script type="text/javascript">BooManager.loadIframe(BooManager.widgets['+elCount+"]['bb_ad'].img, "+elCount+")</script>");if(ad.aditional_content){out.push("<span>"+ad.aditional_content+"</span>")}break}}if(ad.hide_stamp==0&&bb_widget[elCount]["format"]!="bbp"){out.push(_loadStamp())}return out.join("")};var _makeAdImage=function _makeAdImage(bb_ad,bb_skiptarget){var out=[],bb_widget=BooManager.widgets,elCount;elCount=parseInt(bb_ad.el);out.push("<a ");if(typeof bb_skiptarget=="undefined"){out.push(' target="_blank"')}if(typeof bb_widget[elCount]["clickpartner"]!="undefined"){out.push(" onclick=\"BooManager.clickPartner('"+bb_widget[elCount]["clickpartner"]+"');\"")}else if(typeof bb_widget[elCount]["generalclickpartner"]!="undefined"){out.push(" onclick=\"BooManager.clickPartner('"+bb_widget[elCount]["generalclickpartner"]+"');\"")}out.push(' href="'+bb_ad.url+'">');out.push('<img style="border:0;width:'+bb_ad.width+"px;height:"+bb_ad.height+'px;" src="'+bb_ad.img+'" />');out.push("</a>"+(bb_ad.aditional_content||""));return out.join("")};var _makeAdFlash=function _makeAdFlash(bb_ad){var truewidth=bb_ad.width,trueheight=bb_ad.height,out=[],bb_widget=BooManager.widgets,elCount,id;elCount=parseInt(bb_ad.el);id=bb_ad.img.split("/");id=id[id.length-1];id="booflash"+id.split(".swf")[0];if(bb_ad.aditional_content&&bb_ad.aditional_content.match(/(mytruewidth:)/)){truewidth=bb_ad.aditional_content.split("mytruewidth:")[1];truewidth=truewidth.split("|")[0]}if(bb_ad.aditional_content&&bb_ad.aditional_content.match(/(mytrueheight:)/)){trueheight=bb_ad.aditional_content.split("mytrueheight:")[1];trueheight=trueheight.split("|")[0]}$bb("div#boo-"+bb_ad.el).css("height",trueheight+"px");out.push('<div style="position:absolute;width:'+bb_ad.width+"px;height:"+bb_ad.height+'px;overflow:hidden;z-index:1000 !important">');out.push('<object id="'+id+'" width="'+truewidth+'" height="'+trueheight+'">');out.push('<param name="movie" value="'+bb_ad.img+'"></param>');out.push('<param name="allowFullScreen" value="true"></param>');out.push('<param name="allowscriptaccess" value="always"></param>');out.push('<param name="wmode" value="transparent"></param>');out.push('<param name="menu" value="false"></param>');out.push('<param name="quality" value="high"></param>');out.push('<param name="flashvars" value="'+_makeFlashVars(bb_ad.flash_var,bb_ad.url)+'"></param>');out.push('<embed src="'+bb_ad.img+'" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="transparent" menu="false" quality="high" flashvars="'+_makeFlashVars(bb_ad.flash_var,bb_ad.url)+'" width="'+truewidth+'" height="'+trueheight+'"></embed>');out.push("</object>");out.push(bb_ad.aditional_content||"");out.push("</div>");return out.join("")};var _makeAdScript=function _makeAdScript(bb_ad){var out=[];out.push('<script type="text/javascript" src="'+ad.img+'"></script>'+(ad.aditional_content||""));return out.join("")};var _makeHtml5Ad=function _makeHtml5Ad(ad,elCount){var divContainerId="div#boo-"+elCount;_loadAsyncJs(_servers._enablerJs,function success(){LayoutFactory.setupNewAd(ad,elCount,divContainerId,_protocol);elem=$bb("#"+window.layout_hub[elCount].mainFrameId).get(0);var parentContainer=document.getElementById("boo-"+elCount);var interval=setInterval(function(){if(parentContainer.children.length>0){_generateAuditTagNode(ad,elCount);clearInterval(interval)}},500);_create_viewability(elem,ad.render_url)},function error(){console.log("Could not load EmbedEnabler")})};var _makeAdOverlay=function _makeAdOverlay(bb_ad){var out=[],url=[];var hash="";if(bb_ad.overlay.url instanceof Array){hash=bb_ad.overlay.url[0].replace(_servers._api+"click/a/","")}else{hash=bb_ad.overlay.url.replace(_servers._api+"click/a/","")}url.push("javascript:BooManager.openAnyFormat({");url.push("%22is_ad%22:"+bb_ad.overlay.is_ad+",");url.push("%22img%22:%22"+bb_ad.overlay.img+"%22,");url.push("%22width%22:"+bb_ad.overlay.width+",");url.push("%22height%22:"+bb_ad.overlay.height+",");url.push("%22flash_var%22:[%22"+(bb_ad.overlay.flash_var||"")+"%22],");url.push("%22url%22:%22"+bb_ad.overlay.url+"%22,");url.push("%22content_type%22:%22"+bb_ad.overlay.content_type+"%22,");url.push("%22aditional_content%22:%22"+(bb_ad.overlay.aditional_content||"")+"%22,");url.push("%22name%22:%22"+bb_ad.overlay.name+"%22");url.push("}, 'overlay', []);");url.push("$bb.get('"+_servers._api+"view/o/"+escape(hash)+"');");url.push("void(0);");bb_ad.url=url.join("");if(bb_ad.img.match(/.swf/)){out.push(_makeAdFlash(bb_ad))}else{out.push(_makeAdImage(bb_ad,true))}return out.join("")};var _makeFlashVars=function _makeFlashVars(bb_vars,bb_urls){var result=[],vars=typeof bb_vars==="string"?[bb_vars]:bb_vars,urls=typeof bb_urls==="string"?[bb_urls]:bb_urls;if(!vars){return""}for(var i=0,l=vars.length;i<l;i++){result.push(vars[i]+"="+urls[i]);if(i!==l-1){result.push("&")}}return result.join("")};var _makeJoker=function _makeJoker(bb_data){if(elCount&&bb_widget[elCount]&&bb_widget[elCount]["name"]&&bb_widget[elCount]["name"].match(/submarino/)){return""}if(typeof bb_data.ad=="undefined"){return""}var bb_widget=BooManager.widgets,out=[],ad=null,imgsrc=_servers._static+"images/campaigns/joker/",elCount,el;elCount=parseInt(bb_data.el);el=$bb("#boo-"+elCount);if(typeof bb_widget[elCount]["format"]!="undefined"){el.addClass(bb_widget[elCount]["format"]+" custom")}else{el.css("width",$bb(el.parentNode).width()+"")}switch(bb_widget[elCount]["format"]){case"bba":case"bbb":{ad={width:728,height:90,img:imgsrc+"728x90.gif"};break}case"bbc":{ad={width:468,height:60,img:imgsrc+"468x60.gif"};break}case"bbd":{ad={width:234,height:60,img:imgsrc+"234x60.gif"};break}case"bbe":case"bbf":{ad={width:125,height:125,img:imgsrc+"125x125.gif"};break}case"bbg":case"bbh":{ad={width:120,height:600,img:imgsrc+"120x600.gif"};break}case"bbi":{ad={width:160,height:600,img:imgsrc+"160x600.gif"};break}case"bbj":{ad={width:180,height:150,img:imgsrc+"180x150.gif"};break}case"bbk":{ad={width:120,height:240,img:imgsrc+"120x240.gif"};break}case"bbl":{ad={width:200,height:200,img:imgsrc+"200x200.gif"};break}case"bbm":{ad={width:250,height:250,img:imgsrc+"250x250.gif"};break}case"bbn":{ad={width:300,height:250,img:imgsrc+"300x250.gif"};break}case"bbo":{ad={width:336,height:280,img:imgsrc+"336x280.gif"};break}case"bbp":{ad={width:0,height:0,img:imgsrc+"0x0.gif"};break}default:{ad={width:125,height:125,img:imgsrc+"125x125.gif"};break}}ad.url="http://www.boo-box.com/";if(ad){out.push(_makeAdImage(ad))}return out.join("")};var _insertWidget=function _insertWidget(bb_out,bb_data,bb_elCount){if(bb_data.ad&&bb_data.ad.content_type.indexOf("html5")<0){$bb("div#boo-"+bb_elCount).html(bb_out);if(typeof ltgc=="undefined"){ltgc=new Function}}_setAdResponses(bb_elCount,true);_checkPreRoll(bb_data);if(!BooManager.hasPreRoll&&BooManager.checkCompletedAds()&&!BooManager.printedNonStandard){BooManager.insertNonStandardAd()}};var _checkPreRoll=function(bb_data){if(bb_data.ad){var patt=/ad\.preRoll\s*=\s*true;/g;var str=bb_data.ad.aditional_content;if(typeof str!="undefined"&&str.match(patt)){BooManager.hasPreRoll=true}}};var _loadNavegg=function _loadNavegg(){var el=document.createElement("script");var out=[];out.push('var nvgId = "11750";');out.push(" (function() {");out.push(' var nvg = document.createElement("script");');out.push(' nvg.id = "navegg";');out.push(' nvg.type = "text/javascript";');out.push(' nvg.async = "async";');out.push(' nvg.src = ("https:" == document.location.protocol ? "https://tag.navdmp.com" : "http://tag.navdmp.com") + "./tm"+nvgId+".js";');out.push(' var s = document.getElementsByTagName("script")[0];');out.push(" s.parentNode.insertBefore(nvg, s);");out.push(" })();");el.text=out.join("");$bb("head")[0].appendChild(el)};var _loadPubMatic=function(){$bb("<iframe/>",{frameborder:"0",allowtransparency:"true",marginheight:"0",marginwidth:"0",scrolling:"0",width:"0",hspace:"0",vspace:"0",style:"height:0px;width:0px",src:_protocol+"://ads.pubmatic.com/AdServer/js/user_sync.html?predirect="+_protocol+"://sledge.boo-box.com/c/KADUSERCOOKIE/"}).appendTo("body")};var _insertComScore=function _insertComScore(){var el=document.createElement("script");el.className="_comScore13864735";var out=[];out.push("var _comscore = _comscore || [];");out.push('_comscore.push({ c1: "8", c2: "13864735" ,c3: "123458912"});');out.push("(function() {");out.push('var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true; s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js"; el.parentNode.insertBefore(s, el);');out.push("})();");el.text=out.join("");$bb("head")[0].appendChild(el)};var _loadStamp=function _loadStamp(){var out=['<span><a style="background:transparent; border:0; box-shadow: none; display:block; height:16px; left:0; padding:0; position:absolute; top:0; width:16px;z-index:9999;" ','href="http://anuncie.boo-box.com/?utm_source=SS%20beacon&utm_medium=Display&utm_campaign=SS%20beacon" target="_blank">','<img style="background:transparent; border:0; box-shadow: none; display:block; padding:0; position:absolute; width:16px;" ','src="'+_protocol+"://"+_staticSrc+'.boo-box.com/images/bbbeacon-icon-transparent.png" /></a></span>'];return out.join("")};var _keywords=function _keywords(bb_keywords){var MAX_BYTES=255,keywords=bb_keywords.split(","),keywords_buffer=[],clean_keyword;if(!bb_keywords.match(_keywordReg))return"";for(var i=0,l=keywords.length;i<l;i++){clean_keyword=keywords[i].trim().replace(/\s{2,}/g," ");if(!clean_keyword){continue}if(keywords_buffer.join(",").length+clean_keyword.length<MAX_BYTES){keywords_buffer.push(clean_keyword)}}return keywords_buffer.join(",")};var _loadCss=function _loadCss(bb_css){if(!_loadedCss[bb_css]){_loadedCss[bb_css]=true;$bb('<link rel="stylesheet" type="text/css" href="'+bb_css+'" />').appendTo("head")}};var _loadJs=function _loadJs(bb_js,bb_success,bb_error){if(!_loadedJs[bb_js]){_loadedJs[bb_js]=true;$bb.ajax({url:bb_js,dataType:"script",success:bb_success,error:bb_error})}else{if(bb_success){bb_success()}}};var _loadAsyncJs=function _loadAsyncJs(bb_js,bb_success,bb_error){if(!_loadedJs[bb_js]){$bb.ajax({url:bb_js,dataType:"script",success:function(){_loadedJs[bb_js]=true;bb_success()},error:bb_error})}else{if(bb_success){bb_success()}}};var _wbr=function _wbr(bb_text,bb_replace){if(bb_text.length>4){bb_text=bb_text.replace(RegExp("(\\w{4})","g"),function(bb_match){return bb_match+bb_replace})}return bb_text};var _createCookie=function _createCookie(bb_name,bb_value,bb_days){var expires="",date;if(bb_days){date=new Date;date.setTime(date.getTime()+bb_days*24*60*60*1e3);expires="; expires="+date.toGMTString()}document.cookie=bb_name+"="+bb_value+expires+"; path=/"};var _readCookie=function _readCookie(bb_name){var nameEQ=bb_name+"=",ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i].trim();if(c.indexOf(nameEQ)==0){return c.substring(nameEQ.length,c.length)}}return null};var _eraseCookie=function _eraseCookie(bb_name){createCookie(bb_name,"",-1)};var _base64=new function(){var _keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";this.utf8_encode=function utf8_encode(string){var utftext="";string=string.replace(/\r\n/g,"\n");for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c)}else if(c>127&&c<2048){utftext+=String.fromCharCode(c>>6|192);utftext+=String.fromCharCode(c&63|128)}else{utftext+=String.fromCharCode(c>>12|224);utftext+=String.fromCharCode(c>>6&63|128);utftext+=String.fromCharCode(c&63|128)}}return utftext};this.utf8_decode=function utf8_decode(utftext){var string="",i=0,c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++}else if(c>191&&c<224){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode((c&31)<<6|c2&63);i+=2}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode((c&15)<<12|(c2&63)<<6|c3&63);i+=3}}return string};this.encode=function encode(input){var output="",i=0,chr1,chr2,chr3,enc1,enc2,enc3,enc4;input=_base64.utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=(chr1&3)<<4|chr2>>4;enc3=(chr2&15)<<2|chr3>>6;enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64}else if(isNaN(chr3)){enc4=64}output=output+_keyStr.charAt(enc1)+_keyStr.charAt(enc2)+_keyStr.charAt(enc3)+_keyStr.charAt(enc4)}return output+"-"+output.length};this.decode=function decode(input){var output="",i=0,chr1,chr2,chr3,enc1,enc2,enc3,enc4;input=input.split("-")[0];input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=_keyStr.indexOf(input.charAt(i++));enc2=_keyStr.indexOf(input.charAt(i++));enc3=_keyStr.indexOf(input.charAt(i++));enc4=_keyStr.indexOf(input.charAt(i++));chr1=enc1<<2|enc2>>4;chr2=(enc2&15)<<4|enc3>>2;chr3=(enc3&3)<<6|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2)}if(enc4!=64){output=output+String.fromCharCode(chr3)}}output=_base64.utf8_decode(output);return output}};var _adserver2ad=function adserver2ad(bb_data){var data={el:bb_data.el,ad:{content_type:"tag",height:bb_data.adserver.height,width:bb_data.adserver.width,img:bb_data.adserver.tag,is_ad:true,aditional_content:"",el:bb_data.el,flash_var:[],url:"",name:""}};return data};var _maxChars=function _maxChars(bb_text,bb_chars){var cropped=[],i=0;bb_text=bb_text.split(" ");while(i<bb_text.length&&cropped.join(" ").length<bb_chars){cropped.push(bb_text[i++]);if(cropped.join(" ").length>bb_chars){cropped.pop();break}}if(!cropped.length){cropped.push(bb_text)}return cropped.join(" ")};var _fingerPrint=function _fingerPrint(){return[navigator.userAgent,[screen.height,screen.width,screen.colorDepth].join("x"),(new Date).getTimezoneOffset(),!!window.sessionStorage,!!window.localStorage,!!window.indexedDB,!!window.WebGLRenderingContext,"hardwareConcurrency"in navigator?navigator.hardwareConcurrency.toString():"-1",(navigator.battery?"n":"0")+(navigator.mozBattery?"m":"0"),typeof window.openDatabase,navigator.platform,navigator.javaEnabled(),$bb.map(navigator.plugins,function(p){return[p.name,p.description,$bb.map(p,function(mt){return[mt.type,mt.suffixes].join("~")}).join(",")].join("::")}).join(";")].join("###")};var _drawTextOnCanvas=function drawTextOnCanvas(canvas,font,posX,posY){var textToDraw="Cwm fjordbank glyphs vext quiz",context=canvas.getContext("2d");context.font=font;if(typeof context.fillText=="function"){context.fillText(textToDraw,posX||2,posY||2)}else{if(typeof context.fillRect=="function"){context.fillRect(100,5,30,15)}}};var _genCanvasId=function _genCanvasId(){var element=document.getElementById("drawingHash");if(typeof element=="undefined"||element==null){canvasContainer=document.createElement("div");canvasContainer.id="canvasContainer";canvasContainer.setAttribute("style","display:none");canvas=document.createElement("canvas");canvas.id="drawingHash";canvasContainer.appendChild(canvas);document.body.appendChild(canvasContainer)}var canvasDrawing=document.getElementById("drawingHash");canvasDrawing.height=300;canvasDrawing.width=350;var context=canvasDrawing.getContext("2d");context.textBaseline="alphabetic";context.fillStyle="#f60";context.fillRect(125,1,62,20);context.fillStyle="#069";_drawTextOnCanvas(canvasDrawing,"11pt no-real-font-"+Math.floor(Math.random*1e3),2,15);context.fillStyle="rgba(102, 204, 0, 0.7)";_drawTextOnCanvas(canvasDrawing,"18pt Arial",4,17);canvasHash=canvasDrawing.toDataURL("image/png");canvasHash+="::";try{context.globalCompositeOperation="screen";canvasHash+=context.globalCompositeOperation==="screen"?"screen1":"screen0"}catch(exception){canvasHash+="noscreen"}canvasHash+="::";try{context.clearRect(0,0,30,30);context.textBaseline="top";context.font="32px Arial";context.fillText("😃",0,0);canvasHash+=context.getImageData(16,16,1,1).data[0]!==0?"happy":"sad"}catch(exception){canvasHash+="faceless"}document.body.removeChild(canvasContainer);return canvasHash};var _md5FingerPrint=function _md5FingerPrint(){if(typeof window.md5==="function"){var canvasPrefix=_genCanvasId();var rawKey=canvasPrefix+_fingerPrint();var md5Hash=md5(rawKey);return md5Hash}else{throw"md5 unavailable, please get it from http://github.com/wbond/md5-js/"}};var _fillUpTagData=function _fillUpTagData(bb_data,bb_widget,elCount){if(!bb_data.adserver&&bb_data.ad&&bb_data.ad.id&&bb_data.ad.audit_id){ad_id=JSON.stringify(bb_data.ad.id);id_data=ad_id.split("-");var audit_script=null;if(id_data.length>2){audit_campaign_id=bb_data.ad.audit_id;creative_id=parseInt(id_data[2]);site_id=bb_data.domain_id;aff_id=bb_widget[elCount]["bid"];base_int=31;pow2_base=Math.pow(base_int,2);pow3_base=pow2_base*base_int;placement_id=audit_campaign_id*base_int+aff_id*pow2_base+(elCount+1)*pow3_base;format_key=bb_widget[elCount]["format"];size_data=_format_map[format_key];bb_data.ad["placement_id"]=placement_id;bb_data.ad["creative_id"]=creative_id;bb_data.ad["size_data"]=size_data;bb_data.ad["site_id"]=site_id}}};var _generateAuditTagNode=function _generateAuditTagNode(ad,elCount){var audit_script=null;if(ad.audit_id&&ad["placement_id"]&&ad["creative_id"]&&ad["size_data"]&&ad["site_id"]){var audit_campaign_id=ad.audit_id;var placement_id=ad["placement_id"];var creative_id=ad["creative_id"];var size_data=ad["size_data"];var site_id=ad["site_id"];audit_tag_src="http://b.voicefive.com/c2/13864735/rs.js#c1=3&amp;c3="+audit_campaign_id+"&amp;c4="+creative_id+"&amp;c5="+placement_id+"&amp;c6=&amp;c10=1&amp;c11="+site_id+"&amp;c13='"+size_data+"'&amp;c16=gen&amp;";var tag_id="boo-audit-tag-"+elCount;audit_script=document.createElement("script");audit_script.id=tag_id;audit_script.setAttribute("src",audit_tag_src);audit_script.setAttribute("type","text/javascript")}if(audit_script){_insertAuditTagNode(audit_script,elCount)}};var _insertAuditTagNode=function _insertAuditTagNode(tag_node,elCount){var parent_node=document.getElementById("boo-"+elCount);var firstChild=parent_node.firstChild;parent_node.insertBefore(tag_node,firstChild)};this.widgets=[];this.jsonCallStack=[];this.init=function init(){this.addBooInject();_setScriptClass();var bb_widget=BooManager.widgets,bb_params=_getUrlParams(),bb_el=bb_widget.length-1,has_bid=false,has_aff=false,has_name=false;if(typeof bb_widget[bb_widget.length-1]["name"]=="string"&&bb_widget[bb_widget.length-1]["name"]!="undefined"&&bb_widget[bb_widget.length-1]["name"]!=""){has_name=true}if(!has_name){return false}if(typeof jQuery!="undefined"){_start(bb_params,bb_el)}else{_hasJquery=false;_loadJquery(bb_params,bb_el)}};this.parseJson=function parseJson(bb_data){var bb_widget=BooManager.widgets,elCount=bb_widget[parseInt(bb_data.el)].el=parseInt(bb_data.el),el=$bb("script.bb_script:eq("+elCount+")"),pname=bb_widget[elCount]["name"]||"",paff=bb_widget[elCount]["aff"]||"",pformat=bb_widget[elCount]["format"]||"",bb_css;_insertComScore();if(pname.match(_customReg)){if(pname=="submarino"&&paff!=undefined&&paff!=""){pname=bb_widget[elCount]["name"]=pname+"W"}bb_css=pname}else{bb_css="widget"}el.parent().find(".boo-pixel-pos").remove();if(!bb_data.invisible){_loadCss(_servers._static+"stylesheets/widgets/"+bb_css+".css");el.before('<div class="boo-widget'+(pformat!=undefined?" "+pformat:"")+(pname!=undefined?" "+pname:"")+'" id="boo-'+elCount+'"></div>');_fillUpTagData(bb_data,bb_widget,elCount);if(bb_data.ad||bb_data.adserver){if(bb_data.adserver){bb_data=_adserver2ad(bb_data)}_insertWidget(_makeAd(bb_data),bb_data,elCount)}else{_insertWidget(_makeJoker(bb_data),bb_data,elCount)}if(bb_data.ad&&bb_data.ad.content_type.indexOf("html5")<0){_create_viewability($bb("div#boo-"+elCount).get(0),bb_data.ad.render_url);if(bb_data.script){if(!_loadedJs[bb_data.script]){_loadedJs[bb_data.script]=true;$bb("div#boo-"+elCount).append("<span/>").html(bb_data.script)}}_generateAuditTagNode(bb_data.ad,elCount)}}};this.onHoverP=function onHoverP(bb_el,bb_status){if(bb_status){$bb(bb_el.parentNode).addClass("boo-ativo")}else{$bb(bb_el.parentNode).removeClass("boo-ativo")}};this.onError=function isError(el){};this.clickPartner=function clickPartner(url,redirect){var img=[];img=new Image;img.src=url||"";BooManager.openClickTag(redirect)};this.openClickTag=function openClickTag(url){if(typeof url!="undefined"){var w=window.open(url,"_blank")}};this.loadIframe=function loadIframe(bb_ad,bb_elCount){var iframe=$bb("iframe#boo-frame-"+bb_elCount)[0],is_ie=/msie/.test(navigator.userAgent.toLowerCase()),iframeD=iframe.contentDocument?iframe.contentDocument:iframe.contentWindow.document,tout=!is_ie?250:750,bb_ad=!is_ie?bb_ad:bb_ad.replace("dfr",'defer="true"'),str=["<html><head>\n",'<script type="text/javascript">\n',"var bb_adIndex = "+bb_elCount+";\n","if (window.addEventListener) \n","{\n","  _booAddEventListener = window.addEventListener;\n","  window.addEventListener = function() \n","  {\n","    if (arguments[0] == 'load') { arguments[1](); }\n","    else { _booAddEventListener(arguments[0], arguments[1], arguments[2]); }\n","  };\n","} \n","else if (window.attachEvent) \n","{","  _booAttachEvent = window.attachEvent;\n","  window.attachEvent = function(e, f) \n","  {\n","    if (arguments[0] == 'onload') { arguments[1](); }\n","    else { _booAttachEvent(arguments[0], arguments[1]); }\n","  };\n","}\n","</script>\n",'<style type="text/css">html,body{margin:0;padding:0}</style>\n',"</head><body>",bb_ad,"</body></html>"];iframeD.write(str.join(""));setTimeout(function(){iframeD.close()},tout)};var _create_viewability=function(elem,url){ad_viewability=new BBViewability(elem,_scroll,url);ad_viewability.setup()};this.openAnyFormat=function openAnyFormat(bb_link,bb_format,bb_clickTrack){var booTimeout=(bb_format!="imagezoom"?15:25)*1e3;$bb("head").append('<link type="text/css" rel="stylesheet" href="'+_servers._static+"stylesheets/engine/"+bb_format+'.css" />');$bb("body").attr("status","loading");clearTimeout(_tOuts["loadingTimeout"]);_tOuts["loadingTimeout"]=setTimeout(function(){if($bb("body").attr("status")!="loaded"){$bb("body").attr("status","timeout");window.location.href=bb_link}},booTimeout);$bb("object").each(function(){if(!$bb.browser.msie&&$bb("embed",this).length){var clone=$bb(this).clone(),param=$bb("param[name=wmode]",clone);if(!param.length){clone.prepend('<param name="wmode" value="transparent">')}else{param.attr("value","transparent")}if(param.val()!="transparent"||!param.length){$bb("embed",clone).attr("wmode","transparent");$bb(this).before(clone).remove()}}});var initFormat=function initFormat(){send("bb_"+bb_format,bb_link)};var send=function send(method){var args=[];for(var i=1,len=arguments.length;i<len;i++){args.push(arguments[i])}return this[method].apply(this,args)};_loadJs(_servers._static+"javascripts/engine/"+bb_format+".js",function(){initFormat()});if(bb_clickTrack){if(typeof bb_clickTrack=="string"){bb_clickTrack=[bb_clickTrack]}var imgs=[];for(var i=0,l=bb_clickTrack.length;i<l;i++){imgs[i]=new Image;imgs[i].src=bb_clickTrack[i]}}return false};this.addBooInject=function addBooInject(){var el=document.createElement("script");el.src=_protocol+"://static.boo-box.com/javascripts/boo-inject.js";document.getElementsByTagName("head")[0].appendChild(el)};this.checkCompletedAds=function(){return!BooManager.adResponses.includes(false)};this.insertNonStandardAd=function(){if(BooManager.bid!=""){BooManager.printedNonStandard=true;var body=document.getElementsByTagName("body")[0];var div=document.createElement("div");div.style="width:0;height:0;z-index:0;";var script=document.createElement("script");script.type="text/javascript";script.text='bb_bid = "'+BooManager.bid+'";\n'+'bb_name = "custom";\n'+'bb_format = "bbp";\n'+'bb_limit = "1";\n';if(BooManager.bbdo!=""){script.text+='bb_bbdo = "'+BooManager.bbdo+'";'}var embed=document.createElement("script");embed.type="text/javascript";embed.src=_protocol+"://static.boo-box.com/javascripts/embed.js";div.appendChild(script);div.appendChild(embed);body.appendChild(div)}}}}(function(){function md5cycle(x,k){var a=x[0],b=x[1],c=x[2],d=x[3];a=ff(a,b,c,d,k[0],7,-680876936);d=ff(d,a,b,c,k[1],12,-389564586);c=ff(c,d,a,b,k[2],17,606105819);b=ff(b,c,d,a,k[3],22,-1044525330);a=ff(a,b,c,d,k[4],7,-176418897);d=ff(d,a,b,c,k[5],12,1200080426);c=ff(c,d,a,b,k[6],17,-1473231341);b=ff(b,c,d,a,k[7],22,-45705983);a=ff(a,b,c,d,k[8],7,1770035416);d=ff(d,a,b,c,k[9],12,-1958414417);c=ff(c,d,a,b,k[10],17,-42063);b=ff(b,c,d,a,k[11],22,-1990404162);a=ff(a,b,c,d,k[12],7,1804603682);d=ff(d,a,b,c,k[13],12,-40341101);c=ff(c,d,a,b,k[14],17,-1502002290);b=ff(b,c,d,a,k[15],22,1236535329);a=gg(a,b,c,d,k[1],5,-165796510);d=gg(d,a,b,c,k[6],9,-1069501632);c=gg(c,d,a,b,k[11],14,643717713);b=gg(b,c,d,a,k[0],20,-373897302);a=gg(a,b,c,d,k[5],5,-701558691);d=gg(d,a,b,c,k[10],9,38016083);c=gg(c,d,a,b,k[15],14,-660478335);b=gg(b,c,d,a,k[4],20,-405537848);a=gg(a,b,c,d,k[9],5,568446438);d=gg(d,a,b,c,k[14],9,-1019803690);c=gg(c,d,a,b,k[3],14,-187363961);b=gg(b,c,d,a,k[8],20,1163531501);a=gg(a,b,c,d,k[13],5,-1444681467);d=gg(d,a,b,c,k[2],9,-51403784);c=gg(c,d,a,b,k[7],14,1735328473);b=gg(b,c,d,a,k[12],20,-1926607734);a=hh(a,b,c,d,k[5],4,-378558);d=hh(d,a,b,c,k[8],11,-2022574463);c=hh(c,d,a,b,k[11],16,1839030562);b=hh(b,c,d,a,k[14],23,-35309556);a=hh(a,b,c,d,k[1],4,-1530992060);d=hh(d,a,b,c,k[4],11,1272893353);c=hh(c,d,a,b,k[7],16,-155497632);b=hh(b,c,d,a,k[10],23,-1094730640);a=hh(a,b,c,d,k[13],4,681279174);d=hh(d,a,b,c,k[0],11,-358537222);c=hh(c,d,a,b,k[3],16,-722521979);b=hh(b,c,d,a,k[6],23,76029189);a=hh(a,b,c,d,k[9],4,-640364487);d=hh(d,a,b,c,k[12],11,-421815835);c=hh(c,d,a,b,k[15],16,530742520);b=hh(b,c,d,a,k[2],23,-995338651);a=ii(a,b,c,d,k[0],6,-198630844);d=ii(d,a,b,c,k[7],10,1126891415);c=ii(c,d,a,b,k[14],15,-1416354905);b=ii(b,c,d,a,k[5],21,-57434055);a=ii(a,b,c,d,k[12],6,1700485571);d=ii(d,a,b,c,k[3],10,-1894986606);c=ii(c,d,a,b,k[10],15,-1051523);b=ii(b,c,d,a,k[1],21,-2054922799);a=ii(a,b,c,d,k[8],6,1873313359);d=ii(d,a,b,c,k[15],10,-30611744);c=ii(c,d,a,b,k[6],15,-1560198380);b=ii(b,c,d,a,k[13],21,1309151649);a=ii(a,b,c,d,k[4],6,-145523070);d=ii(d,a,b,c,k[11],10,-1120210379);c=ii(c,d,a,b,k[2],15,718787259);b=ii(b,c,d,a,k[9],21,-343485551);x[0]=add32(a,x[0]);x[1]=add32(b,x[1]);x[2]=add32(c,x[2]);x[3]=add32(d,x[3])}function cmn(q,a,b,x,s,t){a=add32(add32(a,q),add32(x,t));return add32(a<<s|a>>>32-s,b)}function ff(a,b,c,d,x,s,t){return cmn(b&c|~b&d,a,b,x,s,t)}function gg(a,b,c,d,x,s,t){return cmn(b&d|c&~d,a,b,x,s,t)}function hh(a,b,c,d,x,s,t){return cmn(b^c^d,a,b,x,s,t)}function ii(a,b,c,d,x,s,t){return cmn(c^(b|~d),a,b,x,s,t)}function md51(s){if(/[\x80-\xFF]/.test(s)){s=unescape(encodeURI(s))}txt="";var n=s.length,state=[1732584193,-271733879,-1732584194,271733878],i;for(i=64;i<=s.length;i+=64){md5cycle(state,md5blk(s.substring(i-64,i)))}s=s.substring(i-64);var tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(i=0;i<s.length;i++)tail[i>>2]|=s.charCodeAt(i)<<(i%4<<3);tail[i>>2]|=128<<(i%4<<3);if(i>55){md5cycle(state,tail);for(i=0;i<16;i++)tail[i]=0}tail[14]=n*8;md5cycle(state,tail);return state}function md5blk(s){var md5blks=[],i;for(i=0;i<64;i+=4){md5blks[i>>2]=s.charCodeAt(i)+(s.charCodeAt(i+1)<<8)+(s.charCodeAt(i+2)<<16)+(s.charCodeAt(i+3)<<24)}return md5blks}var hex_chr="0123456789abcdef".split("");function rhex(n){var s="",j=0;for(;j<4;j++)s+=hex_chr[n>>j*8+4&15]+hex_chr[n>>j*8&15];return s}function hex(x){for(var i=0;i<x.length;i++)x[i]=rhex(x[i]);return x.join("")}md5=function(s){return hex(md51(s))};function add32(a,b){return a+b&4294967295}if(md5("hello")!="5d41402abc4b2a76b9719d911017c592"){function add32(x,y){var lsw=(x&65535)+(y&65535),msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&65535}}})();BooManager.init();