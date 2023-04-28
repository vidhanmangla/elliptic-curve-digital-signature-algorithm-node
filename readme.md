## Elliptic Curve Digital Signature Algorithm Node

This project is using a client and a server to facilitate transfers between different ethereum addresses. By using Elliptic Curve Digital Signatures, the server only allows transfers that have been signed for by the person who owns the associated Ethereum address.

_NOTE_: This is my submission for 'Alchemy University Ethereum Developer Bootcamp - Week 1 Project'.


### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/


### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server
4. The application should connect to the default server port (3042) automatically


### Key Highlights

1. Used Metamask wallet to sign/verify transactions using ethers.js.
2. Ensured security by stopping replay attacks using account nonce in backend.


### Application UI
![app_ui](https://user-images.githubusercontent.com/101626397/231207471-6a876277-b8ea-48d1-be1a-e188e4ec27d7.png)