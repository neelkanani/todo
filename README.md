# start app

git clone <url>

npm i

<!-- If asks to use --legacy-peer-deps -->
<!-- use -->

npm i --legacy-peer-deps
ng serve

<!-- Just Click Submit No id password required -->

# TodoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project Start

We are using bootstrap for our project
ref link - https://ng-bootstrap.github.io/#/getting-started

Starting point of our project is
App Component - Login Component - Todo Container Component - Create Task Component

We have used Lazy loading for Todo Container Component.

For Drag & Drop Have added CDK drag drop
Ref link - https://material.angular.io/cdk/drag-drop/examples

Note - This is Feature given by angular No need to download angular-material

Create New Task Component

- Ngb Modal used
- Link - https://ng-bootstrap.github.io/#/components/modal/examples

<!-- Thinking about making the todo container as common for all
Idea is to create a reusable component
For more neater quality code -->

<!-- The approach - Create a component add all HTML & styling
Check it for pending & in progress first
Check for the communication between those components second
Check if it works flawlessly with the Done container third
If it works User can have the 4th container whenever needed with very less dev effort.-->

<!-- Execution
Created task container
Gave 2 Inputs
And accessing it dynamically to access it. -->

<!-- Due to Time Crunch couldn't write Test cases end to end -->
