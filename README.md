# ZD

**The Aim**

You are the developer of an online artisan cheese shop called Ned Ned's Cheese Emporium. Your customers are UK based and pay you £19.99 per order.

You buy your cheese from France in euros, in order to make a profit you must charge at least 3.24€ per block of cheese sold.

Create a website which shows how many blocks of cheese your customers will get for their £19.99.

For example if 1 pound was worth 2 euros then our customers would get 12 pieces of cheese for their £19.99 and the website would look like index.html.

Tips:

    You can use any webframework or language you like
    Use the https://openexchangerates.org/ API to get the pound to euro exchange rate in realtime, use the free version https://openexchangerates.org/signup/free
    Include a README of how to get the project installed
    Use git for version control and put the code on Github
    Write tests in the ways you normally would when building a web app

## Tech Stack

ReactJS and Jest with enzyme and sinon

**Why?**

ZeroDeposit use React and want someone to be able to use the technology. Furthermore,
it is well suited to the front end appearance I want to create. JS can handle the logic while
React can create a presentable and fast front end.


## Installation

- Run 'git clone https://github.com/JoshuaJFHolloway/ZD' in your terminal


## Usage

- Run 'npm install'
- Run 'npm start'
- Visit 'localhost:3000' in your browser to see the app


## Approach

#### Planning

After deciding on the technology I drew out on a piece of paper how I want the website to look. With this
I was able to start working out what components I wanted where and where state would be kept.

#### API

Knowing that a lot of this task would be around successfully tapping into the openexchange API, I spent time
reading up on the documentation on how I would best access all the information needed for the page.

#### Reusable components

Making sure that I don't waste time writing code that could have been replaced by reusing prior code was 
also a focus. One of the best parts of React is how code is reused and its important to a slim and efficient app.

#### Reusing handlers

I was also aware of not writing out multiple event handlers when I can mould one to do most, if not all, the events
while still abiding to the SRP. 


## Future Additions

- Use jest-styled-components to test my styled components
- Work out why using 'extend' on styled components didn't work. Would be useful to extend the HeaderStyle for the SubHeaderStyle as it uses many of the same properties.

## Screenshots of use!

<a href="" border="0"></a>

## Contributors

Joshua Holloway