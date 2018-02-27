/*
Name: Actions
Description: The Hetzner Cloud FloatingIPs
Author: Dr.McHack | Friedrich Lucas
Date: 27.02.2018
LastDate: 27.02.2018
Version: 0.0.1
*/

https://api.hetzner.cloud/v1/


function h_floatip(core){

  this.core=core;

  this.getAll=function(func){
    this.core.load("floating_ips");
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
    this.core.load("floating_ips/"+id);
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

  this.create=function(func, type, home_location="", server=0, description=""){
    this.core.send("floating_ips?type="+type+"&home_location="+home_location+"&server="+server+"&description="+description, "type="+type+"&home_location="+home_location+"&server="+server+"&description="+description);
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


  this.changeDescription=function(func, id, description=""){
    this.core.sendtype("floating_ips/"+id+"?&description="+description, "description="+description, "PUT");
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


  this.delete=function(func, id, description=""){
    this.core.sendtype("floating_ips/"+id, "", "DELETE");
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
