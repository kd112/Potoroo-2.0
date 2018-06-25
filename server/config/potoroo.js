module.exports = async function(){
    let admin = await UserServices.getOneByQuery({'login.username':'admin'})
    if (!admin){
        admin = {
            
        }
    }
}