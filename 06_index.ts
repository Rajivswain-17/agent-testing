import 'dotenv/config';
import { Agent, GroqProvider, LocalMemoryStore } from 'tanjiro-agent-sdk';

const memory = new LocalMemoryStore();

const agent = Agent.create({
  name: 'MemoryAgent',
  instructions: 'Remember facts told by the user.',
  provider: new GroqProvider({ apiKey: process.env.GROQ_API_KEY! }),
  memory: memory,
});

console.log('Run 1: Telling agent a fact...');
await agent.run('My name is Rajib Swain and I study AI engineering.', 'user-101');

console.log('\nRun 2: Asking agent to recall...');
const res = await agent.run('What is my name and what do I study?', 'user-101');
console.log('\nAgent Response:\n', res.at(-1)?.content);
