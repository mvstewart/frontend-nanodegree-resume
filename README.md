## Front-End Nanodegree Resume Project

The repository includes the following files:

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: All the code here is written by me.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: 
The GitHub readme file.
* and some images in the images directory.

### The process:
The resume has four distinct sections: work, education, projects and a header with biographical information. What's been done:

1. Built four JSONs, each one representing a different resume section. The objects that I created follow the names within the schema below. I made sure that JSONs are formatted correctly using <a href="http://jsonlint.com/" target="_blank">JSONlint.com</a>.

* `bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string 
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: url
            display: function taking no parameters

* `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: integer (graduation date)
                 url: string
            onlineCourses: array with
                 title: string
                 school: string
                 date: integer (date finished)
                 url: string
            display: function taking no parameters

* `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (works with a hyphen between them)
                 description: string 
            display: function taking no parameters

* `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

2. Iterated through each JSON and appended its information to index.html in the correct section.
 * First off, I was using jQuery’s `selector.append()` and `selector.prepend()` functions to modify index.html. `selector.append()` makes an element appear at the end of a selected section. `selector.prepend()` makes an element appear at the beginning of a selected section.
* I also used the JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from my resume JSONs.
* Here’s an example of some code that added the location of one my companies to the page:
   * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);`
   * `$(".work-entry:last").append(formattedLocation);`
3. The resume includes an interactive map. To add it, I appended the googleMap string to `<div id=”mapDiv”>`.
4. All of my code for adding elements to the resume is within functions. And all of my functions are encapsulated within the same objects containing my resume data. For instance, the functions for appending work experience elements to the page should be found within the same object containing data about my work experience.
5. My resume also `console.log()` information about click locations. On line 90 in helper.js, you’ll find a jQuery onclick handler that I modified to work with the `logClicks(x,y)` function above it.
6. It’s possible to make additional information show up when you click on the pins in the map. Check out line 174 in helper.js and the Google Maps API to get started.
