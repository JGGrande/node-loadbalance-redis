import "dotenv/config";
//{ DATABASE_URL, NODE_ENV, PORT }
const env  = process.env;

if(!env){
    throw new Error("Variaveis de ambiente inválidas.")
}

export { env }