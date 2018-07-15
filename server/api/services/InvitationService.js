class InvitationServices extends base{
    constructor(model) {
        super(model)
        this.model = model
        return this
    }
    create(invitation,options){
        let invite = super.create(invitation,options)
        return new Promise((resolve,reject)=>{
            invite.then((result)=>{
                resolve(result)
            })
            .catch((error)=>{
                reject(error)
            })
        })
    }
    update(){

    }
    getbyQuery(){

    }
    getbyId(){

    }
    delete() {

    }
}


module.exports = InvitationServices;