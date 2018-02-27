/*
Name: Actions
Description: The Hetzner Cloud Actions
Author: Dr.McHack | Friedrich Lucas
Date: 24.02.2018
LastDate: 27.02.2018
Version: 0.0.1
*/

function h_actions(core){

  this.core=core;

  this.getAll=function(func, id, status="", sort=""){
    this.core.load(id+"/actions?status="+status+"&sort="+sort);
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

  this.get=function(func, id, actionid){
    this.core.load(id+"/actions/"+actionid);
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


  this.poweron=function(func, id){
    this.core.load(id+"/actions/poweron");
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

  this.reboot=function(func, id){
    this.core.load(id+"/actions/reboot");
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

  this.shutdown=function(func, id){
    this.core.load(id+"/actions/shutdown");
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

  this.poweroff=function(func, id){
    this.core.load(id+"/actions/poweroff");
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

  this.resetpw=function(func, id){
    this.core.load(id+"/actions/reset_password");
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

  this.enableRescue=function(func, id){
    this.core.load(id+"/actions/enable_rescue");
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

  this.disenableRescue=function(func, id){
    this.core.load(id+"/actions/disable_rescue");
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


  this.createImage=function(func, id, description="", type=""){
    this.core.send(id+"/actions/create_image?description="+description+"&type="+type, "description="+description+"&type="+type);
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


  this.rebuildImage=function(func, id, image=""){
    this.core.send(id+"/actions/rebuild?image="+image, "image="+image);
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


  this.changeType=function(func, id, server_type, upgrade_disk=false){
    this.core.send(id+"/actions/change_type?server_type="+server_type+"&upgrade_disk="+upgrade_disk, "server_type="+server_type+"&upgrade_disk="+upgrade_disk);
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

  this.enableBackup=function(func, id, backup_window=""){
    this.core.send(id+"/actions/enable_backup?backup_window="+backup_window, "backup_window="+backup_window);
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

  this.disableBackup=function(func, id){
    this.core.send(id+"/actions/disable_backup", "");
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

  this.attachISO=function(func, id, iso){
    this.core.send(id+"/actions/attach_iso?iso="+iso, "iso="+iso);
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

  this.detachISO=function(func, id){
    this.core.send(id+"/actions/detach_iso", "");
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


  this.changeDNS=function(func, id, ip, dns_ptr){
    this.core.send(id+"/actions/change_dns_ptr?ip="+ip+"&dns_ptr="+dns_ptr, "ip="+ip+"&dns_ptr="+dns_ptr);
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


  this.console=function(func, id){
    this.core.send(id+"/actions/request_console", "");
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
