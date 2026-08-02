import 'dotenv/config';
import { Agent, GroqProvider, weatherTool, githubTool, ITool } from 'tanjiro-agent-sdk';

// Custom Calculator Tool
const calculatorTool: ITool = {
  name: 'calculator',
  description: 'Multiplies two numbers together',
  doc: 'calculator(a: number, b: number). Input JSON string like {"a": 5, "b": 10}',
  executor: async (input: string) => {
    try {
      const { a, b } = JSON.parse(input);
      return `Result: ${a * b}`;
    } catch {
      return 'Error: Invalid numbers input';
    }
  },
};

const toolAgent = Agent.create({
  name: 'ToolMaster',
  instructions: 'Use tools whenever requested.',
  provider: new GroqProvider({ apiKey: process.env.GROQ_API_KEY! }),
  tools: [weatherTool, githubTool, calculatorTool],
});

const result = await toolAgent.run('Use calculator to multiply 25 by 4');
console.log(result.at(-1)?.content);

