const request = require('request');
class MapServices extends base {
  constructor(model) {
    super(model);
    this.model = model;
  }

  fetchMapData(source,options){
      return new Promise((resolve,reject)=>{
          request.get(source,(error,resp,body)=>{
              if(error || resp.statusCode!==200){
                  if(error)reject(error)
                  reject(new Error('Bad Request'))
              }
              resolve(JSON.parse(body))
          })
      })
  }
}


module.exports= MapServices;