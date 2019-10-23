## Build React Typescript components in isolated environment

This is a demo project for building components locally in isolated environment using [Bit](https://github.com/teambit/bit).  
You can read the post [here]().  

## Using Bit to Virtually Isolated Components

- Install and Initialize Bit: `npm install bit-bin -g`
- Initialize Bit workspace: `bit init`
- Track the components: `bit add src/components/*`
- Import the relevant compiler: `bit import bit.envs/compilers/react-typescript -c`
- Build the components in an isolated environment: `bit build` 