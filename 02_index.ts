import 'dotenv/config';
import { Agent, AgentBuilder, GroqProvider } from 'tanjiro-agent-sdk';

const groq = new GroqProvider({ apiKey: process.env.GROQ_API_KEY! });

// Factory Pattern
const agent1 = Agent.create({
  name: 'TanjiroBot',
  instructions: 'You are a polite AI assistant.',
  provider: groq,
});

// Builder Pattern
const agent2 = new AgentBuilder()
  .setName('BuilderAgent')
  .setInstructions('Analyze data accurately.')
  .setProvider(groq)
  .setLimits({ maxLoops: 5 })
  .build();

console.log('Running Agent 1...');
const res = await agent1.run('What is TypeScript?');
console.log(res.at(-1)?.content);
