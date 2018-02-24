/*
Name: Loader
Description: Load all Module
Author: Dr.McHack | Friedrich Lucas
Date: 23.02.2018
LastDate: 23.02.2018
Version: 0.0.1
*/

function loader(){

  //Init Variables
  this.module=new Array();

  //Default Functions
  this.load=function(name, version){

    let element=document.createElement("script");
    element.src="module/"+name+"/"+version+".js";
    document.head.appendChild(element);
    this.module[name+"-"+version]=new Array();
    this.module[name+"-"+version]["element"]=element;

  }

  this.unload=function(name, version){

    this.module[name+"-"+version]["element"].parentElement.removeChild(this.module[name+"-"+version]["element"]);
    this.module[name+"-"+version]=null;

  }

}
