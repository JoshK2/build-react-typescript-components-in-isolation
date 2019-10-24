## 📦 Build React Typescript components in isolated environment

This is a demo project for building components locally in isolated environment using [Bit](https://github.com/teambit/bit).  
You can read the post [here]().  

### 👾 Using Bit to virtually isolated components

- Install and Initialize Bit: `npm install bit-bin -g`
- Initialize Bit workspace: `bit init`
- Track all the components: `bit add src/components/*`
- Import the relevant compiler: `bit import bit.envs/compilers/react-typescript --compiler`
- Build all the components in an isolated environment: `bit build` 

### 🚀 Export the components to bit.dev so they can be easily shared between projects

- Create a collection in [bit.dev](https://bit.dev/~create-collection)
- Build and tag the tracked components: `bit ag -a 1.0.0`
- Export them to the collection you just created: `bit export <username>.<collection>`
- Now you can install your components in other projects and modify them locally using Bit. 

📖 Read the full post to understand better this repository.  
You can read the post [here]().  

