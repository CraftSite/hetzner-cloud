/*
Name: Main
Description: The Main System
Author: Dr.McHack | Friedrich Lucas
Date: 23.02.2018
LastDate: 25.02.2018
Version: 0.0.1
*/

CORE=new Array();

document.onreadystatechange=function (){
  if(document.readyState=="interactive"){

    //Load all Modules
    loader=new loader();
    loader.load("ajax", "01");
    loader.load("hetzner/core", "01");
    loader.load("hetzner/actions", "01");
    loader.load("hetzner/servers", "01");

  }else if(document.readyState=="complete"){
    /*
    mycore=new h_core("---");
    data=new h_servers(mycore);
    mydata='{'+'"name": "my-server",'+'"server_type": "cx11",'+'"image": "ubuntu-16.04"'+'}';
    data.create("mytest1", mydata);
    mytest1=function(testvar){
      console.log(testvar)
    }
    */

  }
}
