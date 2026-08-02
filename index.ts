import 'dotenv/config';
import { Agent, GroqProvider } from 'tanjiro-agent-sdk';

const agent = Agent.create({
  name: 'MyTestAgent',
  instructions: 'You are a helpful assistant installed via NPM.',
  provider: new GroqProvider({
    apiKey: process.env.GROQ_API_KEY!,
    defaultModel: 'llama-3.1-8b-instant',
  }),
});

console.log('Testing installed tanjiro-agent-sdk package from NPM...');
const history = await agent.run('Say hello and introduce yourself!');
console.log('\nAgent Response:\n', history.at(-1)?.content);
