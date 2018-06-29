'use strict';
const chalk = require('colors/safe');


class Logger {
    constructor(config){
        this.config = config;
    }
    AppLogger(level,color,args){
        let log= this.getLogFromArgs(args);

        this.print(level,color,log)
    }
    print (level,color,log){
        let levelColor = color || 'green'

        console.log(chalk[levelColor].bold("[ "+(this.config.app_title || +"Express App")+" ]"+" "+level)," "+log.code,chalk.bold(log.log))
    }
    getcodeColor(code){
        
        if ([200,201,202,203,204,205,206,226].includes(parseInt(code)))return chalk.bgGreen(code)
        if ([400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418].includes(parseInt(code)))return chalk.bgRed(code)
        else return chalk.bgWhite(chalk.black(code))
    }
    getLogFromArgs(args){
        let log = '';
        let code = '';
        // console.log(args.length)
        if (args.length >0 && args.length<2){
            for (let i = 0; i<args.length; i++){
                if (args[i] && args[i].constructor === TypeError){
                    log += args[i].stack;
                }else{
                    log += args[i]
                }
            }
        }else {
            for (let i = 0; i<args.length; i++){
                if (args[i] && args[i].constructor === TypeError){
                    log += args[i].stack;
                }else{
                    if (i===0) code = this.getcodeColor(args[i])
                    else log += args[i]
                }
            }
        }
        // console.log(log)
        // console.log(code)
        return {log:log,code:code};
    }
    debug(){
        // console.log(arguments)
        this.AppLogger('Debug','blue',arguments)
    }
    log(){
        this.AppLogger('Log','grey',arguments)
    }
    info(){
        this.AppLogger('Info','green',arguments)
    }
    warn(){
        this.AppLogger('Warn','yellow',arguments)
    }
    error(){
        this.AppLogger('Error','red',arguments)
    }
    routerlog(){
        // console.log(arguments)
        this.AppLogger('Route','blue',arguments)
        // next();  
    }
}

// Logger.prototype.routerlog= (req,res,next)=>{
//     // console.log(`${this.config.app_title}`)
//     console.log(Logger.AppLogger)
//     next();
//     // this.AppLogger('Route','blue',{'0':`${req.method} ${req.url}`})
// }


// let newLogger = new Logger({
//     app_title : " Test App"
// })
// // newLogger.log()
// // console.log(newLogger.debug("test"))
// newLogger.info("Log this")
module.exports = Logger;