import { DbDataType } from "../Enums/DbDataType";

export interface IDatabase {
    
    /**Prototype to get all elements associated to the specified entity */
    getAllItems(datatype: DbDataType);


}