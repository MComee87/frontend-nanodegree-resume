/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var bio = {
	"name" : "Matthew Comee",
	"role" : "Full Stack Web Developer",
	"age" : 29,
	"contact" :{
	  "mobile" : "(818) 660-0332",
	  "email" : "mcomee87@gmail.com",
	  "github" : "https://www.github.com/MComee87",
	  "portfolio" : "https://www.inspiredwebdesign.net",
	  "location" : "Los Angeles"
    },
	"skills" : [" Critical Thinking", " Problem Solving", " Leadership", " Goal Oriented", " Works well as part of a team or as an individual", " HTML", " CSS", " JavaScript", " Python", " Full Stack Web Development."],
	"bioPic" : "images/fry.jpg"
};

var work = {
	"jobs" : [{
	"employer" : "Inspired Web Design",
	"title" : "Owner/Developer",
	"location" : "Los Angeles, CA.",
	"dates" : "April, 2016 - current",
	"description" : "Work with clients to deliver high quality websites that meet all the clients needs, in a timely fassion."

	}]
};

var projects = {
	samples : [{}]
};

var education = {
    "schools" : [{
    "name" : "Udacity",
    "major" : "Full Stack Web Developement"
},
{
	"name" : "Cleveland H.S.",
	"major" : "Highschool Diploma"
}]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.company);
var formattedTitle = HTMLworkTitle.replace("%data%", work.position);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedEmail = HTMLemail.replace("%data%", "<a href='mailto:"+bio.contact.email+"'>mcomee87@gmail.com</a>");
var formattedGithub = HTMLgithub.replace("%data%", "<a href='"+bio.contact.github+"'>Repositories</a>");
var formattedBlog = HTMLblog.replace("%data%", "<a href='"+bio.contact.portfolio+"'>Inspired Web Design</a>");
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);


$("#header").prepend(formattedRole); 
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);

    formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);

	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkills);

 	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkills);

 	formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkills);

	formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkills);

 	formattedSkills = HTMLskills.replace("%data%", bio.skills[6]);
    $("#skills").append(formattedSkills);

	formattedSkills = HTMLskills.replace("%data%", bio.skills[7]);
    $("#skills").append(formattedSkills);

    formattedSkills = HTMLskills.replace("%data%", bio.skills[8]);
    $("#skills").append(formattedSkills);

    formattedSkills = HTMLskills.replace("%data%", bio.skills[9]);
    $("#skills").append(formattedSkills);

}


for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
