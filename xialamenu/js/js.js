window.onload=function(){
	var menu=document.getElementById("nav").getElementsByClassName("menu");
	for(i=0;i<menu.length;i++){
		menu[i].onmouseover=function(){
			this.style.background="fff";
			var lis=this.getElementsByTagName("ul")[0].getElementsByTagName("li");
			this.getElementsByTagName("ul")[0].style.display="block";
			this.getElementsByTagName("ul")[0].style.width="98px";
			this.getElementsByTagName("ul")[0].style.position="absolute";
			for(var i=0;i<lis.length;i++){
				lis[i].onmouseover=function(){
					this.style.background="#999";
				}
				lis[i].onmouseout=function(){
					this.style.background="#fff";
				}
			}
		}
		menu[i].onmouseout=function(){
			this.style.background="999";
			this.getElementsByTagName("ul")[0].style.display="none";
		}
	}
}
