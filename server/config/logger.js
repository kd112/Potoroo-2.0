const chalk  = require('chalk');
// const logger = require('')
// function Logger(app){
    
//     Info=function(message){
//          console.log(chalk.hex('#3A24AA')(`[${app.name}] ${message}`)) 
//      } 

// };
class Logger{
    constructor(appname){
        // console.log(app.name)
        this.appname = appname;
        this.info = chalk.hex('#3A24AA');
        this.bold = chalk.bold
        return this;
    }
    
}
// Logger.prototype = {
    
//     Info :(Message)=>{
        
//     }
// }
Logger.prototype.Info=function(message){
    console.log(this.info(`[${this.appname}] `),this.bold(message))
}
Logger.prototype.Alert = function(message){

}
Logger.prototype.Warn = function(message){

}
Logger.prototype.Error = function(message){

}


module.exports=Logger;
    //  ALERT(message){
    //      return 
    //  } 
    //  CRITICAL(message){
    //      return 
    //  } 
    //  ERROR(message){
    //      return 
    //  } 
    //  WARNING(message){
    //      return 
    //  } 
    //  NOTICE(message){
    //      return 
    //  } 
    //  INFO(message){
    //      return 
    //  } 
    //  DEBUG(message){
    //      return 
    //  } 
