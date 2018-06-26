class Bases {
    constructor(model){
       this.model = model; 
    }
    getById(id, options){}
    getOneByQuery(filter, options){
        let self = this;
        return new Promise((resolve,reject)=>{
            if(!filter){
                let error = new Error('filter is required')
                error.errorType ='INTERNAL_VALIDATION';
                error.message = 'filter is required'
                reject(error)
            }
            let transaction = self.model.findOne(filter);
            // resolve({})
            transaction.exec((error,result)=>{
                if(error){
                    let msg = error.toString();
                    let error = new Error(msg)
                    error.errorType = 'TRANSCATION'
                    reject(error)
                }
                if((!result && options && options.handleNotFound)|| (!result && options)){
                    logger.debug("Result not Found")
                    reject()
                }
                // logger.debug(result)
                resolve(result)
            })
        })
    }
    getByQuery(filter, options, projection){
        let self = this;
        return new Promise((resolve, reject) => {
            if (!filter) {
                filter = {};
                logger.warn(`No filter provided for find ${self.model.modelName}`)
                // let error = new Error('filter is required')
                // error.errorType = 'INTERNAL_VALIDATION';
                // error.message = 'filter is required'
                // reject(error)
            }

            let transaction = self.model.find(filter);
            // resolve({})
            transaction.exec((error, result) => {
                if (error) {
                    let msg = error.toString();
                    let error = new Error(msg)
                    error.errorType = 'TRANSCATION'
                    reject(error)
                }
                if ((!result && options && options.handleNotFound) || (!result && options)) {
                    logger.debug("Result not Found")
                    reject()
                }
                // logger.debug(result)
                resolve(result)
            })
        })
    }
    countByQuery(filter, options){}
    create(info, options){
        let self = this;
        return new Promise((resolve,reject)=>{
            // console.log(self.model.modelName)
            if(!info){
                let msg = `Info required to create ${self.model.modelName}`
                let error = new Error(msg)
                error.errorTYpe = 'INTERNAL_VALIDATION'
                error.msg = msg
                reject(error)
            }
            let newRecord = new self.model(info)
            newRecord.save((error,createdRecord)=>{
                if(error){
                    logger.error(err)
                    reject(error)
                }
                resolve(createdRecord.toJSON())
            })
        })
    }
    updateById(id, info, options){
        let self = this;
        return new Promise((resolve,reject)=>{
            if(!id || !info){
                let msg = 'id and info are required';
                let error = new Error(msg);

                error.errorType = "INTERNAL_VALIDATION"
                error.msg = msg;
                return reject(error);
            }
            self.model.findOneAndUpdate({_id:id},info,{new:true,runValidators:true},(err,updateResult)=>{
                if(err || !updateResult){
                    if (!updateResult){
                        let msg = 'not updated \n Document not Found'
                        let error = new Error(msg)
                        error.errorType = 'INTERNAL_VALIDATION'
                        error.message = msg
                        reject(error)
                    }
                    reject(err)
                    reject(err)
                }
                resolve(updateResult.toJSON())
            })
        })
    }
    updateByQuery(filter, info, options){}
    deleteById(id, options){}
    deleteByQuery(filter, options){}

}


module.exports = Bases;