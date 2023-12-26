import Bull from "bull";

export class RedisConsumer {
  constructor(private queue: Bull.Queue) { }

  async startConsuming(onMessageReceived: (message: any) => void ): Promise<void> {
    const queue = this.queue
    queue.process( (job, done) => {
      const msg = job.data

      if(msg){
        onMessageReceived(msg);
      }
      done();
    })
  }
}