import { StatusCodes } from "http-status-codes";
import { getEmployeeById,getEmployees,getHighestSalaryEmployee, insertemployee } from "../services/EmployeeService.js";

export function save(request,response){
    try{
        insertemployee(request.body);
        response.status(StatusCodes.CREATED).json({message:'employee created'});
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'error in saving employee'})
    }
}

export function fetchAll(request,response){
    try{
        const employees=getEmployees();
        if (employees.length>0) {
            response.status(StatusCodes.OK).json(employees);
            
        }else{
            response.status(StatusCodes.NOT_FOUND).json({message:'no employee found'});
        }
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'error in fetching employee'})
    }
}

export function fetchById(request,response){
    try{
        const employee=getEmployeeById(request.params.id)
        if (employee) {
            response.status(StatusCodes.OK).json(employee);
            
        }else{
            response.status(StatusCodes.NOT_FOUND).json({message:' employee not found'});
        }
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'error in fetching employee'})
    }
}
            
export function fetchHighestPaid(request,response){
    try{
        const employee=getHighestSalaryEmployee();
        response.status(StatusCodes.OK).json(employee);
            
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'error in fetching employee'})
    }
}
    
