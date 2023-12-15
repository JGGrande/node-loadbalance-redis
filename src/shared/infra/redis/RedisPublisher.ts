import redisConfig from "@config/redisConfig";
import Bull from "bull";

export class RedisPublisher {
  async publishToQueue(queueName: string, message: any): Promise<void> {
    const queue = new Bull(queueName, redisConfig);
    await queue.add(JSON.stringify(message));
  }
}