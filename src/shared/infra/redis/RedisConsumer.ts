import redisConfig from "@config/redisConfig";
import Bull from "bull";

export class RedisConsumer {
  constructor(private queueName: string) { }

  async startConsuming(onMessageReceived: (message: any) => void ): Promise<void> {
    const queue = new Bull(this.queueName, redisConfig);
    queue.process( job => {
      console.log(`Aguardando mensagens da ${this.queueName}. To exit, press CTRL+C`);

      const msg = job.data

      if(msg){
        onMessageReceived(msg);
      }

    })
  }
}