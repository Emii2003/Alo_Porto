import { promises as fs } from "fs";
import { NextResponse } from "next/server";

//Recuperar o arquivo json.
const file = await fs.readFile(
  process.cwd() + "/src/app/api/base/dados.json",
  "utf-8"
);

export async function GET(request, { params }) {
  return NextResponse.json(JSON.parse(file));
}

const handleLogin = async (cpf, senha) => {
  const body = await JSON.parse(file);
  const validacao = await body.usuarios.find(
    (user) => user.cpf == cpf && user.senha == senha
  );

  if (!validacao) {
    return false;
  } else {
    return validacao;
  }
};

const handleCad = async (cpf, email, senha) => {
    const body = await JSON.parse(file);
    
    const lastId = await body.usuarios[body.usuarios.length - 1].id;
    const newUser = {
        "id": (lastId + 1),
        "cpf": cpf,
        "email": email,
        "senha": senha,
    };

    body.usuarios.push(newUser);
    await fs.writeFile(process.cwd() + "/src/app/api/base/dados.json", JSON.stringify(body));
    return newUser;
}

export async function POST(request, response) {
  const {info, cpf, senha } = await request.json();

  if (info == "login") {
    const userValidado = await handleLogin(cpf, senha);
    if (!userValidado) {
      return NextResponse.json({ status: false});
    }else{
      return NextResponse.json({ status: true, user: userValidado });
    }
  }
}