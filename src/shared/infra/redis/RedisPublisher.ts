import Bull from "bull";

export class RedisPublisher {
  constructor(private queue: Bull.Queue) {}
  async publishToQueue(message: any): Promise<void> {
    await this.queue.add(message);
  }
}