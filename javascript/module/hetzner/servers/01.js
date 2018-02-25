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

  //Get All Servers
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

  //Get A Server
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

  //Create a new Server
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

  //Change the name from a Server
  this.changeName=function(func, id, name){
    this.core.send("servers/"+id+"?name="+name, "name="+name);
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


  //Delete a Server
  this.delete=function(func, id){
    this.core.sendtype("servers/"+id, "", "DELETE");
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


  //Get Metric Data from Server
  this.metric=function(func, id, data){
    this.core.load("servers/"+id+"/metrics", data);
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
