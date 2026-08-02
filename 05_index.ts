import 'dotenv/config';
import { Agent, GroqProvider, startCLI } from 'tanjiro-agent-sdk';

const agent = Agent.create({
  name: 'CLIBot',
  instructions: 'Assist users in the terminal.',
  provider: new GroqProvider({ apiKey: process.env.GROQ_API_KEY! }),
});

startCLI(agent);
