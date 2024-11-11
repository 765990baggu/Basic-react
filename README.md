# Basic React

# parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Namaste Food

/\*\*

- Header
- - Logo,Nav-items
- Body
- - Search
- - RestaurantContainer
-     - RestautantCards
-       - img, Name of Restaurant, Starrating, Cuisine, Delivery Time
- Footer
- - Copyrights
- - Address
- - links
- - Contact
    \*/

# Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

(Normal JS utility functions)

- useState() - Superpowerful State Variables in react
- useEffect()

# 2 types Routing in web apps

- Client Side Routing
- Server Side Routing

# class Base Component imported 2 types

- class Base components of "React.component" some developers imported as default
  -import React from "react"
  - class Base components of "React.component" some developers imported as Named imorted
- import {Component} from "react"

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing (devloper)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom
