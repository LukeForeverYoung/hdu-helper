console.log("x");
var script =document.createElement("script")
script.src="https://cdn.jsdelivr.net/clipboard.js/1.6.0/clipboard.min.js"
document.getElementsByTagName("head")[0].appendChild(script);
var pt=document.getElementsByClassName("panel_title");
var sp;
var btn=document.createElement("button");
var clipboard = new Clipboard(btn);
btn.setAttribute("data-clipboard-target","#readyTo");
btn.innerText="copy";
btn.style.height="20px";
btn.style.width="50px";
var i=0;
for(i=0;i<pt.length;i++)
{
    var x=pt[i];
    console.log(x.innerText);
    if(x.innerText=="Sample Input")
        x.appendChild(btn);
}
var pc=document.getElementsByClassName("panel_content");
var SampleInput=pc[3].getElementsByTagName("pre")[0];
var Tex=SampleInput.innerText;
var input = document.createElement("textarea");
var inputArea=document.getElementsByTagName("center")[0];
input.innerHTML=Tex;
//input.style.visibility="hidden";//会导致获取不到内容
input.style.width="0px";
input.style.height="0px";
console.log(Tex);
input.setAttribute("id","readyTo");
inputArea.appendChild(input);
