import 'dotenv/config';
import { Agent, GroqProvider, startWebServer } from 'tanjiro-agent-sdk';

const agent = Agent.create({
  name: 'Tanjiro Studio',
  instructions: 'You are the core agent powering Tanjiro SaaS Studio.',
  provider: new GroqProvider({ apiKey: process.env.GROQ_API_KEY! }),
});

// Starts Express server on http://localhost:3000
startWebServer(agent, { port: 3000, title: 'Tanjiro SaaS Dashboard' });
