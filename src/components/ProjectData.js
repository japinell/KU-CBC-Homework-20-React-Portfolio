const projects = [
  {
    id: "1",
    shortTitle: "Delivery Done Right",
    longTitle: "Project 1 - Delivery Done Right",
    image: "./assets/images/project1.png",
    description: [
      "A Javascript web application that allows users to search and filter restaurants by using predefined search fields. The application provides users with a list of restaurants near by and information on whether the restaurant delivers food to the customer or not. A key feature is that it provides nutritional facts about the chosen food. Finally, the application was developed in conjunction with other students attending the Full Stack Coding Bootcamp at Kansas University. In this project, I fulfilled the roles of Project Manager and Full Stack Developer. Interested in learning more about this application? Check out the live application and the code repository along with videos demonstrating how to get the application up and running from the codebase in the links below.",
    ],
    liveServer: "GitHub Pages",
    liveUrl: "https://japinell.github.io/KU-CBC-Project-1-Delivery-Done-Right",
    gitHubRepo:
      "https://github.com/japinell/KU-CBC-Project-1-Delivery-Done-Right",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery"],
    isProject: true,
  },
  {
    id: "2",
    shortTitle: "The Event Planning",
    longTitle: "Project 2 - The Event Planning",
    image: "./assets/images/project2.png",
    description: [
      "A NodeJS application that allows users to organize event details and guest preferences. It allows users to register for an account before they are able to create events. Events information is persisted in a MySQL database, and retrieved and/or updated through the use of APIs. The application features the use of the Model-View-Controller (MVC) paradigm. The application was developed in conjunction with other students attending the Full Stack Coding Bootcamp at Kansas University. In this project, the team followed best practices for Agile Project Management, and extensively used the Projects feature in GitHub, along with branching, pull requests, merging, and issue tracking. I fulfilled the role of Application Architect and Full Stack Developer. Interested in learning more about this application? Check out the live application and the code repository along with videos demonstrating how to get the application up and running from the codebase in the links below.",
    ],
    liveServer: "GitHub Pages",
    liveUrl: "https://the-event-planning.herokuapp.com/",
    gitHubRepo: "https://github.com/brownnicholasj/the-event-planning",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "MySQL",
    ],
    isProject: true,
  },
  {
    id: "3",
    shortTitle: "Weather Dashboard",
    longTitle: "Exemplary HW 1 - Weather Dashboard",
    image: "./assets/images/weather-dashboard.png",
    description: [
      "A Weather Dashboard that runs in the browser and use the OpenWeather One Call API to retrieve weather data. The application renders data using HTML generated dynamically and uses localStorage to store persistent data, for instance, the last searches. Interested in learning more about this application? Check out the live application and the code repository along with videos demonstrating how to get the application up and running from the codebase in the links below.",
    ],
    liveServer: "GitHub Pages",
    liveUrl: "https://japinell.github.io/KU-CBC-Homework-6-Weather-Dashboard/",
    gitHubRepo:
      "https://github.com/japinell/KU-CBC-Homework-6-Weather-Dashboard/",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery"],
    isProject: false,
  },
  {
    id: "4",
    shortTitle: "Employee Tracker",
    longTitle: "Exemplary HW 2 - Employee Tracker",
    image: "./assets/images/homework12.png",
    description: [
      "A NodeJS application for managing employees for a small company. The application makes it easy for end users to view and interact with information stored in the database. It allows users to Add departments, roles, employees; View departments, roles, employees; and Update employee roles. A key feature of the application is that it runs without a graphical interface for the front-end; instead, it uses Inquirer.JS to ask users predefined questions and act upon their responses. This might be useful in cases where a 'light-weight' application is needed, for instance, for remote server or service administration, or for building application installation packages with user provided input. Interested in learning more about this application? Check out the the code repository along with videos demonstrating how to get the application up and running from the codebase in the link below.",
    ],
    liveServer: "GitHub Pages",
    gitHubRepo:
      "https://github.com/japinell/KU-CBC-Homework-12-Employee-Tracker/",
    technologies: ["NodeJS", "Inquirer", "JavaScript", "MySQL"],
    isProject: false,
  },
  {
    id: "5",
    shortTitle: "E-Commerce Backend",
    longTitle: "Exemplary HW 3 - E-Commerce Backend",
    image: "./assets/images/homework13.png",
    description: [
      "A NodeJS/ExpressJS Back End application to manage a small company E-Commerce website, including Categories, Products, and Tags. The application makes it easy to view and/or update information stored in the database: it allows users to Add categories, products, tags; View categories, products, tags; Update categories, products, tags; and Delete categories, products, tags. The application features the use of Database Models to define the logical structure of the database using Sequelize and MySQL. Interested in learning more about this application? Check out the the code repository along with videos demonstrating how to get the application up and running from the codebase in the link below.",
    ],
    liveServer: "GitHub Pages",
    gitHubRepo:
      "https://github.com/japinell/KU-CBC-Homework-13-E-Commerce-Back-End/",
    technologies: ["NodeJS", "ExpressJS", "JavaScript", "Sequelize", "MySQL"],
    isProject: false,
  },
  {
    id: "6",
    shortTitle: "Tech Blog",
    longTitle: "Exemplary HW 4 - Tech Blog",
    image: "./assets/images/homework14.png",
    description: [
      "A CMS-style web application where developers can publish their blog posts and comment on other developers’ posts. The application was built completely from scratch and deployed to Heroku. The application follows the MVC paradigm in its architectural structure, and uses Express Handlebars as the templating language, Sequelize as the ORM, the express-session npm package for authentication, and Bootstrap for styling. The application features the use of Database Models to define the logical structure of the database using Sequelize and MySQL. Interested in learning more about this application? Check out the the code repository along with videos demonstrating how to get the application up and running from the codebase in the link below.",
    ],
    liveServer: "GitHub Pages",
    gitHubRepo: "https://github.com/japinell/KU-CBC-Homework-14-Tech-Blog/",
    technologies: [
      "NodeJS",
      "ExpressJS",
      "JavaScript",
      "Sequelize",
      "MySQL",
      "Express Handlebars",
    ],
    isProject: false,
  },
];

export default projects;
