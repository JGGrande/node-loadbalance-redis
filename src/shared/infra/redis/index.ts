import Bull from "bull";
import { RedisConsumer } from "./RedisConsumer";
import { RedisPublisher } from "./RedisPublisher";
import { handleReceivedMessageCreateUserQueue } from "./consumers/user/CreateUserConsumer";
import redisConfig from "@config/redisConfig";

const userQueue = new Bull("create-user", redisConfig)
const createUserBackGroundJob = new RedisConsumer(userQueue);
export const publishQueueCreateUser = new RedisPublisher(userQueue);

createUserBackGroundJob
  .startConsuming(handleReceivedMessageCreateUserQueue)
  .catch(console.error)


