/*
Name: Actions
Description: The Hetzner Cloud Actions
Author: Dr.McHack | Friedrich Lucas
Date: 24.02.2018
LastDate: 24.02.2018
Version: 0.0.1
*/

function h_actions(core){

  this.core=core;

  this.getAll=function(func, status="", sort=""){
    this.core.load("actions?status="+status+"&sort="+sort);
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
    this.core.load("actions/"+id);
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
