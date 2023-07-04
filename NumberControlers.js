import { StatusCodes } from 'http-status-codes';
import {factorial,sum} from '../services/NumberServices.js'

export function processFactorial(req,res){
    try{
        var num = parseInt(req.params.n)
     if(num>0){
        var f = factorial(num)
        res.status(StatusCodes.OK).json({ factorial: f });
    }else{
        res.status(StatusCodes.BAD_REQUEST).json({messsage:'enter only positive values'});
    }
}catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'something went wrong'})
    }
}


    
export function processSum(req, res) {
    console.log(req.body);
    var a = req.body.x;
    var b = req.body.y;
    var result= sum(a,b);
    res.status(StatusCodes.OK).json({ sum: result });
  }
