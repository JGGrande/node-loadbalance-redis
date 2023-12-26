import { env } from "@shared/env";

export default {
  redis: {
    host: env.REDIS_HOST,
    port: +env.REDIS_PORT!
  }
}