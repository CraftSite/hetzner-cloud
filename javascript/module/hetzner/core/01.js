/*
Name: Core
Description: The Hetzner Core
Author: Dr.McHack | Friedrich Lucas
Date: 24.02.2018
LastDate: 24.02.2018
Version: 0.0.1
*/

function h_core(key){

  this.key=key;

  this.load=function(url){
    console.log("yea")
    this.ajax=new ajax();
    this.request=this.ajax.open("https://api.hetzner.cloud/v1/"+url, "GET");
    if(!this.request){
      console.log("ERROR - "+this.request);
    }else{
      this.request.setRequestHeader("Authorization", "Bearer "+key);
      this.request.send();
      this.request.onreadystatechange=function(){
        if(this.readyState==4){
          if(this.status==401){
            console.log("ERROR: Wrong Key - "+this);
          }else{
            console.log("ERROR - "+this);
          }
        }
      }
    }
  }

  this.send=function(url, data){
    this.ajax=new ajax();
    this.request=this.ajax.open("https://api.hetzner.cloud/v1/"+url, "POST");
    if(!this.request){
      console.log("ERROR - "+this.request);
    }else{
      this.request.setRequestHeader("Authorization", "Bearer "+key);
      this.request.setRequestHeader("Content-Type", "application/json");
      this.request.send(data);
      this.request.onreadystatechange=function(){
        if(this.readyState==4){
          if(this.status==401){
            console.log("ERROR: Wrong Key - "+this);
          }else{
            console.log("ERROR - "+this);
          }
        }
      }
    }
  }

}
