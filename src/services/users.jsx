import { Jwt} from "jsonwebtoken"

const SECRET = process.env.JWT_SECRET

function creteToken(user){
    return jwt.sgin({email: user.email, name: user.name}, SECRET)
}

function readToken(token){
    try{
        return jwt.verify(token, SECRET)
    }catch(err){
        throw new Error ('Token inválido')
    }
}

let users = []

export function cadastro(body){
    const user = users.find(({ email }) => email  === body.email) 
    if (user) throw new Error ('Usuario ja cadastrado')

    users.push (body)
    const token = createToken(body)
    return token
}

export function login (body){
    const user = users.find(({ email }) => email  === body.email) 
    if (!user) throw new Error ('usuario ja cadastrado')
    if (user.password !== body.password) throw new Error ('Senha incorreta')

    return user
}