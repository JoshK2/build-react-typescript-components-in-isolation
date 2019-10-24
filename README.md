## 📦 Build React Typescript components in isolated environment
[![bit components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=bit%20components&query=payload.totalComponents&url=https%3A%2F%2Fapi.bit.dev%2Fscope%2Fjoshk%2Fbuild-react-typescript-components-in-isolation)](https://bit.dev/joshk/build-react-typescript-components-in-isolation)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/JoshK2/build-react-typescript-components-in-isolation/blob/master/LICENSE)

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
- Now you can install your components in other projects and modify them locally using [Bit](https://github.com/teambit/bit). 

### 🍾 Final result - components are fully reusable

You can see [here](https://bit.dev/joshk/build-react-typescript-components-in-isolation) the collection I created for exporting the components.

<p align="center">
  <a href="https://bit.dev/joshk/build-react-typescript-components-in-isolation"><img src="https://i.imagesup.co/images2/e8b390a2dd284c3bed26c8374cff190f7a931b04.png"></a>
</p>

📖 Read the full post to understand better this repository.  
You can read the post [here]().  

