# ArmIT's website

The ArmIT website is made in HTML/CSS + JS using SvelteKit and Tailwind. Maintained by the ArmIT committee in the software engineering division of Chalmers University of Technology.
---

## Installation
The application can be run through docker or npm. A dockerfile is available in the root of the source tree OR install [Node.js](https://nodejs.org/en/download) and use the package manager 'npm' to install Svelte, Tailwind, etc.


```bash
npm install
```
```bash
npm install -D tailwindcss
```

## Running the application

To run the application in developer mode using npm, run the following lines in the terminal.

```bash
cd armit_website #To access the root folder
```
```bash
npm run dev #To run the application
```

To run the application using docker, run the following lines in the terminal.
```bash
docker build -t <your desired image name> . #This will build your docker image. Include the dot.
```
```bash
docker images #To see the info of your newly created image (tagid, image name, etc)
```
```bash
docker run -p 3000:3000 <tagid> #This will run a container of your image and the application. Enter localhost in browser.
```


## Contributors

Developed and designed by the following members in ArmIT'23:

Annelie Hansson, Mikael Motin, Liam Mayor
