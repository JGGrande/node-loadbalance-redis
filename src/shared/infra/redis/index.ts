import { RedisConsumer } from "./RedisConsumer";
import { RedisPublisher } from "./RedisPublisher";
import { handleReceivedMessageCreateUserQueue } from "./consumers/user/CreateUserConsumer";

const createUserBackGroundJob = new RedisConsumer("create-user");

createUserBackGroundJob.startConsuming(handleReceivedMessageCreateUserQueue).catch(console.error)

export default RedisPublisher;

