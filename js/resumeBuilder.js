var bio = {
	"name": "Marina Stewart",
	"role": "Web Developer",
	"bioPic": "images/profilepic.jpg",
	"welcomeMsg": "Hello there! I'm excited that you are visiting my page. Please feel free to contact me with questions and ideas for collaboration. ",
	"skills": [
	"HTML", "CSS", "JavaScript", "Python", "PHP"
	],
	"contacts": {
		"contactGenericType": "Skype",
		"contactGenericName": "n/a",
		"mobile": "xxx-xxx-xxxx",
		"email": "xxxxxxx@gmail.com",
		"github": "mvstewart",
		"twitter": "@marinazekova",
		"blog": "coming soon",
		"location": "Delaware, USA"
	},
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

		var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts.contactGenericName).replace("%contact%", bio.contacts.contactGenericType);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);


		$("#header").append(formattedwelcomeMsg);
		$("#header").append(formattedBioPic);

		// Check for skills in the bio object and append if any exist
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}	
		};
 
		// Add contacts to the Top
		$("#topContacts").prepend(formattedLocation);
		$("#topContacts").prepend(formattedBlog);
		$("#topContacts").prepend(formattedGithub);
		$("#topContacts").prepend(formattedTwitter);
		$("#topContacts").prepend(formattedEmail);
		$("#topContacts").prepend(formattedMobile);
		$("#topContacts").prepend(formattedContactGeneric);

		// Add contacts to the Footer
		$("#footerContacts").prepend(formattedLocation);
		$("#footerContacts").prepend(formattedBlog);
		$("#footerContacts").prepend(formattedGithub);
		$("#footerContacts").prepend(formattedTwitter);
		$("#footerContacts").prepend(formattedEmail);
		$("#footerContacts").prepend(formattedMobile);
		$("#footerContacts").prepend(formattedContactGeneric);
		}	
}


bio.display();




var work = {
	jobs: [
	{
		jobPosition: "Senior Digital Strategist",
		employer: "GillespieHall",
		yearsWorked: "2015 - present",
		location: "Hockessin, DE, US",
		description: "Some work description"
	},
	{
		jobPosition: "Lead Social Media and Digital Strategist",
		employer: "GillespieHall",
		yearsWorked: "2014 - 2015",
		location: "Hockessin, DE, US",
		description: "Some work description"
	},
	{
		jobPosition: "Social Media Specialist",
		employer: "GillespieHall",
		yearsWorked: "2013 - 2014",
		location: "Hockessin, DE, US",
		description: "Some work description"
	}],
	"display": function() {
		for (var i in this.jobs) {
			$('#workExperience').append(HTMLworkStart);
			var formattedworkEmployer = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
			var formattedworkTitle = HTMLworkTitle.replace("%data%", this.jobs[i].jobPosition);
			var formattedworkDates = HTMLworkDates.replace("%data%", this.jobs[i].yearsWorked);
			var formattedworkLocation = HTMLworkLocation.replace("%data%", this.jobs[i].location);
			var formattedworkDescription = HTMLworkDescription.replace("%data%", this.jobs[i].description);
			$(".work-entry:last").append(formattedworkEmployer + formattedworkTitle).append(formattedworkLocation).append(formattedworkDates).append(formattedworkDescription);
		}
	}
};


// Show work object

work.display();


var project = {
	"projects": [
	{
		"title": "mbsp.com",
		"date": "February 2015 - June 2015",
		"description": "some text",
		"image": ["images/197x148.gif"]
	},
	{
		"title": "capitalandworth.com",
		"date": "July 2014 - November 2014",
		"description": "another text",
		"image": ["images/197x148.gif"]
	},
	{
		"title": "gillespiehall.com",
		"date": "January 2014 - August 2014",
		"description": "bla-bla",
		"image": ["images/197x148.gif"]
	}],
	"display": function() {
		for (var project in this.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedprojectTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
			$(".project-entry:last").append(formattedprojectTitle);

			var formattedprojectDates = HTMLprojectDates.replace("%data%", this.projects[project].date);
			$(".project-entry:last").append(formattedprojectDates);

			var formattedprojectDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
			$(".project-entry:last").append(formattedprojectDescription);

			if (this.projects[project].image.length > 0) {
				for (image in this.projects[project].image) {
					var formattedprojectImage = HTMLprojectImage.replace("%data%", this.projects[project].image[image]);
					$(".project-entry:last").append(formattedprojectImage);
				}
			}

		}
	}

};
project.display();





var education = {
	"schools": [
	{
		"name": "State University - Higher School of Economics",
		"location": "Moscow, Russia",
		"major": "Journalism",
		"degree": "Bachelor",
		"graduationYear": "2010"
	},
	{
		"name": "State University of Printing",
		"location": "Moscow, Russia",
		"major": "Economics and Management",
		"degree": "1 year",
		"graduationYear": "n/a"
	}],
	"online_courses": [
	{
		"title": "Front-End Nano Degree",
		"school": "Udacity",
		"dates": "July 2015 - present",
		"url": "udacity.com"
	},
	{
		"title": "Python",
		"school": "Coursera",
		"dates": "May 2014 - June 2014",
		"url": "coursera.com", 
	},
	{
		"title": "Ruby on Rails",
		"school": "Coursera",
		"dates": "May 2014 - June 2014",
		"url": "coursera.com"
	}],
	"display": function() {
		for (var school in this.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedschoolName = HTMLschoolName.replace("%data%", this.schools[school].name);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
			$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);

			var formattedschoolDates = HTMLschoolDates.replace("%data%", this.schools[school].graduationYear);
			$(".education-entry:last").append(formattedschoolDates);

			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
			$(".education-entry:last").append(formattedschoolLocation);

			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", this.schools[school].major);
			$(".education-entry:last").append(formattedschoolMajor);	
		}

		if (this.online_courses.length > 0) {
			$(".education-entry:last").append(HTMLonlineClasses);
		}

		for (var course in this.online_courses) {

			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", this.online_courses[course].title);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%", this.online_courses[course].school);
			$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);

			var formattedonlineDates = HTMLonlineDates.replace("%data%", this.online_courses[course].dates);
			$(".education-entry:last").append(formattedonlineDates);

			var formattedonlineURL = HTMLonlineURL.replace("%data%", this.online_courses[course].url)
			$(".education-entry:last").append(formattedonlineURL);		
		}
	}

	
}

// Education object display
education.display();





// A function that takes a string of two names and returns the first letter of the first name and all letters of the second name capitalized
function inName(){
	var name = $("#name").text();
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}


// Internationalize Name button
$("#main").append(internationalizeButton);

// add a map to where I've lived and worked
$("#map-div").append(googleMap);


