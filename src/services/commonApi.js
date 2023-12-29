import axios from 'axios';

export const commonAPI = async (httpMethod,url,reqBody,reqHeader)=>{
    let reqConfiq ={
        method:httpMethod,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfiq).then(
        result=>{return result}
    ).catch(err=>{return err})
    
}