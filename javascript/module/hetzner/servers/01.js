/*
Name: Servers
Description: The Hetzner Servers
Author: Dr.McHack | Friedrich Lucas
Date: 24.02.2018
LastDate: 24.02.2018
Version: 0.0.1
*/

function h_servers(core){

  this.core=core;

  this.getAll=function(func, name=""){
    this.core.load("servers?name="+name);
    i=0;
    this.core.request.onreadystatechange=function(){
      if(this.responseText!=""){
        i++;
        if(i<2){
          eval(func+"("+this.responseText+")");
        }
      }
    }
  }

  this.get=function(func, id){
    this.core.load("servers/"+id);
    i=0;
    this.core.request.onreadystatechange=function(){
      if(this.responseText!=""){
        i++;
        if(i<2){
          eval(func+"("+this.responseText+")");
        }
      }
    }
  }


  this.create=function(func, data){
    this.core.send("servers?"+data, data);
    i=0;
    this.core.request.onreadystatechange=function(){
      if(this.responseText!=""){
        i++;
        if(i<2){
          eval(func+"("+this.responseText+")");
        }
      }
    }
  }

}
