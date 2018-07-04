class Bases {
    constructor(model){
       this.model = model; 
    }
    getById(id, options){}
    async getOneByQuery(filter, options){
        let self = this;
        try{
            if (!filter) {
                let error = new Error('filter is required')
                error.errorType = 'INTERNAL_VALIDATION';
                error.message = 'filter is required'
                throw error
            }
            let result = await self.model.findOne(filter).lean();
            return result
        }catch(error){
            throw error
        }
        // transaction.exec((error,result)=>{
        //     if(error){
        //         let msg = error.toString();
        //         let error = new Error(msg)
        //         error.errorType = 'TRANSCATION'
        //         throw error
        //     }
        //     if((!result && options && options.handleNotFound)|| (!result && options)){
        //         logger.debug("Result not Found")
        //         throw new Error("Result Not Found")
        //     }
        //     // logger.debug(result)
        //     return result
        // })
    }
    async getByQuery(filter, options, projection){
        let self = this;
        try{
            if (!filter) {
                filter = {};
                logger.warn(`No filter provided for find ${self.model.modelName}`)
                let error = new Error('filter is required')
                error.errorType = 'INTERNAL_VALIDATION';
                error.message = 'filter is required'
                throw error
            }
            let result = await self.model.find(filter).lean();
            return result
        }catch(error){
            throw error
        }
        // resolve({})
        // transaction.exec((error, result) => {
        //     if (error) {
        //         let msg = error.toString();
        //         let error = new Error(msg)
        //         error.errorType = 'TRANSCATION'
        //         throw error
        //     }
        //     if ((!result && options && options.handleNotFound) || (!result && options)) {
        //         logger.debug("Result not Found")
        //         throw new Error("Result not Found")
        //     }
        //     // logger.debug(result)
        //     return result
        // })
        
    }
    countByQuery(filter, options){}
    async create(info, options){
        let self = this;
        try {
            if(!info){
                let msg = `Info required to create ${self.model.modelName}`
                let error = new Error(msg)
                error.errorTYpe = 'INTERNAL_VALIDATION'
                error.msg = msg
                throw error
            }
            let newRecord = new self.model(info)
            let record = await newRecord.save()
            if(!record){
                let msg = "Record not created"
                let error = new Error(msg)
                error.errorType='INTERNAL_VALIDATION'
                error.msg=msg
                throw error
            }
            return record
        }catch(error){
            throw error
        }
        
    }
    async updateById(id, info, options){
        let self = this;
        try {
            if(!id || !info){
                let msg = 'id and info are required';
                let error = new Error(msg);
    
                error.errorType = "INTERNAL_VALIDATION"
                error.msg = msg;
                throw error
            }
            let result = await self.model.findOneAndUpdate({ _id: id }, info, { new: true, runValidators: true })
            if(!result){
                let error = new Error("Document not updated")
                error.errorType = 'INTERNAL_VALIDATION'
                error.message = "Document not updated"
                throw error
            }
            return result
        }catch(error){
            throw error
        }
    }
    async updateByQuery(filter, info, options){
        let self = this
        try {
            if (!filter || !info){
                let msg = ""
                let error = new Error()
                error.errorType = 'INTERNAL_VALIDATION'
                error.message=msg
                throw error
            }

        }catch(error){
            throw error
        }
    }
    async deleteById(id, options){
        let self = this
        try {
            if (!id){
                let msg = "No Document Id provided"
                let error = new Error()
                error.errorType = 'INTERNAL_VALIDATION'
                error.message=msg
                throw error
            }
            let record = await self.model.findOneAndDelete({"_id":id})
            if (!record){
                let msg = `${self.model.modelName} Record not Found`
                let error  = new Error(msg)
                error.errorType = 'INTERNAL_VALIDATION'
                error.msg = msg
                throw error
            }
            return
        }catch(error){
            throw error
        }
    }   
    async deleteByQuery(filter, options){
        let self = this
        try {
            if (!filter){
                let msg = ""
                let error = new Error()
                error.errorType = 'INTERNAL_VALIDATION'
                error.message=msg
                throw error
            }

        }catch(error){
            throw error
        }
    }

}


module.exports = Bases;