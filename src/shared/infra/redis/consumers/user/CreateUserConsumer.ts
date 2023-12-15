import { CreateUserService } from "@modules/user/application/services/user/CreateUserService";
import { userContainer } from "@modules/user/infra/di/user/container";

export async function handleReceivedMessageCreateUserQueue(message: any){

  const createaUserService = userContainer.resolve(CreateUserService);

  const data = JSON.parse(message);

  try{
    await createaUserService.execute(data);
  }catch( error ){
    console.error(error);
  }

}