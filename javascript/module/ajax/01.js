/*
Name: Ajax
Description: A Ajax Class
Author: Dr.McHack | Friedrich Lucas
Date: 23.02.2018
LastDate: 23.02.2018
Version: 0.0.1
*/

function ajax(){

  this.open=function(url, type){
    this.url=url;
    this.type=type.toUpperCase();
    this.request=new XMLHttpRequest();
    if("withCredentials" in this.request){
      this.request.open(this.type, this.url, true);
    }else if(typeof XDomainRequest!="undefined"){
      this.request=new XDomainRequest();
      this.request.open(this.type, this.url);
    }else{
      this.request=false;
    }
    return this.request;
  }

}
