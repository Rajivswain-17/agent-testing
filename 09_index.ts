import 'dotenv/config';
import { GroqProvider, FallbackProvider, Agent } from 'tanjiro-agent-sdk';

const groq = new GroqProvider({ apiKey: process.env.GROQ_API_KEY! });

// Chain multiple provider instances for failover resilience
const fallbackProvider = new FallbackProvider([groq]);

const safeAgent = Agent.create({
  name: 'ResilientAgent',
  instructions: 'Provide safe, resilient answers.',
  provider: fallbackProvider,
});

const res = await safeAgent.run('Hello! Confirm fallback provider resilience.');
console.log(res.at(-1)?.content);
