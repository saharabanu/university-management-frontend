import jwt_decode from "jwt-decode";
export const  decodedToken = (token:string) => {
    return jwt_decode(token)
};