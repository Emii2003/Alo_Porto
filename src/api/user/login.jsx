// http://localhost:3000/src/api/user/login

import { login } from "@/services/users"

export default function handler(req, res){
    try{
        const user = cadastro(req.body)
        res.status(201).json(user)
    }catch (err){
        res.status(400).json(err.message)
    }
}
