// BIO OBJECT
var bio = {
    "name": "Burcu Noyan",
    "role": "Front-End Web Developer & Digital Producer",
    "contacts": {
        "mobile": "(347) 444-4444",
        "email": "burcunoyan@gmail.com",
        "github": "burieberry",
        "twitter": "@burieberry",
        "linkedin": "burcunoyan",
        "location": "New York City"
    },
    "biopic": "images/biopic.png",
    "welcomeMessage": "Welcome!",
    "skills": ['HTML', 'CSS', 'Javascript', 'CMS', 'Adobe Creative Suite']
};

bio.display = function() {
    // name and role
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $("#header").prepend(formattedName, formattedRole);

    // contacts
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email).replace('#', bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter).replace('#', bio.contacts.twitter);
    var formattedlinkedIn = HTMLlinkedIn.replace('%data%', bio.contacts.linkedin).replace('#', bio.contacts.linkedin);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github).replace('#', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $("#topContacts").append(formattedEmail, formattedTwitter, formattedlinkedIn, formattedGithub, formattedLocation);
    $("#footerContacts").append(formattedEmail, formattedTwitter, formattedlinkedIn, formattedGithub, formattedLocation);

    // welcome message & biopic
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    $("#header").append(formattedWelcomeMsg, formattedBioPic);

    // skills
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace('%data%', skill);
            $("#skills").append(formattedSkills);
        });
    }
};


// EDUCATION OBJECT

var education = {
    "schools": [{
        "name": "Baruch College, Zicklin School of Business",
        "location": "New York, NY",
        "degree": "M.S.",
        "majors": ['Management Information Systems'],
        "dates": "2015-2016",
        "url": "http://zicklin.baruch.cuny.edu/"
    }, {
        "name": "Vassar College",
        "location": "Poughkeepsie, NY",
        "degree": "B.A.",
        "majors": ['Economics', ' French'],
        "dates": "2009-2013",
        "url": "http://www.vassar.edu/"
    }, {
        "name": "Université Denis-Diderot Paris 7",
        "location": "Paris, France",
        "degree": "Vassar-Wesleyan Program in Paris",
        "majors": ['French and Francophone Studies'],
        "dates": "Jan-Jun 2012",
        "url": "http://en.vwpp.org/"
    }],
    "onlineCourses": [{
        "title": "Front End Development Course",
        "school": "Udacity",
        "dates": "Aug 2016-Present",
        "url": "http://bit.ly/2d1kIdf"
    }, {
        "title": "Columbia Publishing Course",
        "school": "Columbia University, Graduate School of Journalism",
        "dates": "Jun-Aug 2013",
        "url": "http://bit.ly/2buSzLI"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
        var formattedSchoolName = HTMLschoolName.replace('%data%', school.name).replace('#', school.url);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
        var formattedNameDegree = formattedSchoolName.concat(formattedSchoolDegree);
        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
        var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
        var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', school.majors);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedNameDegree, formattedSchoolLocation, formattedSchoolDates, formattedSchoolMajor);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
        var formattedTitle = HTMLonlineTitle.replace('%data%', course.title).replace('#', course.url);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', course.school);
        var formattedTitleSchool = formattedTitle.concat(formattedOnlineSchool);
        var formattedDates = HTMLonlineDates.replace('%data%', course.dates);
        var formattedURL = HTMLonlineURL.replace('%data%', course.url).replace('#', course.url);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedTitleSchool, formattedDates, formattedURL);
    });
};


// WORK OBJECT

var work = {
    "jobs": [{
        "employer": "Time Inc.",
        "title": "Web Producer at Fortune.com",
        "location": "New York, NY",
        "dates": "May 2015-Present",
        "description": "I love cheese, especially cheesecake stilton. Hard cheese cheesecake red leicester cream cheese cauliflower cheese halloumi bocconcini danish fontina. Camembert de normandie cheese on toast macaroni cheese mozzarella macaroni cheese taleggio fondue cheesecake.",
        "url": "http://fortune.com/"
    }, {
        "employer": "Amplify, Inc.",
        "title": "Digital Producer",
        "location": "Brooklyn, NY",
        "dates": "Mar 2015-May 2015",
        "description": "I love cheese, especially cheesecake stilton. Hard cheese cheesecake red leicester cream cheese cauliflower cheese halloumi bocconcini danish fontina. Camembert de normandie cheese on toast macaroni cheese mozzarella macaroni cheese taleggio fondue cheesecake.",
        "url": "https://www.amplify.com/"
    }, {
        "employer": "Nikkei MDG",
        "title": "Editor at FortuneTurkey.com",
        "location": "Istanbul, Turkey",
        "dates": "Sep 2014-Jan 2015",
        "description": "I love cheese, especially cheesecake stilton. Hard cheese cheesecake red leicester cream cheese cauliflower cheese halloumi bocconcini danish fontina. Camembert de normandie cheese on toast macaroni cheese mozzarella macaroni cheese taleggio fondue cheesecake.",
        "url": "http://fortuneturkey.com/"
    }, {
        "employer": "Time Inc.",
        "title": "Web Producer at Fortune.com",
        "location": "New York, NY",
        "dates": "May 2014-Jul 2014",
        "description": "I love cheese, especially cheesecake stilton. Hard cheese cheesecake red leicester cream cheese cauliflower cheese halloumi bocconcini danish fontina. Camembert de normandie cheese on toast macaroni cheese mozzarella macaroni cheese taleggio fondue cheesecake.",
        "url": "http://fortune.com/"
    }, {
        "employer": "Rodale, Inc.",
        "title": "Publicity Assistant at Rodale Books",
        "location": "Istanbul, Turkey",
        "dates": "Sep 2013-Apr 2014",
        "description": "I love cheese, especially cheesecake stilton. Hard cheese cheesecake red leicester cream cheese cauliflower cheese halloumi bocconcini danish fontina. Camembert de normandie cheese on toast macaroni cheese mozzarella macaroni cheese taleggio fondue cheesecake.",
        "url": "http://www.rodaleinc.com/products/rodale-books"
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer).replace('#', job.url);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        var formattedEmployerTitle = formattedEmployer.concat(formattedTitle);
        var formattedDates = HTMLworkDates.replace('%data%', job.dates);
        var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
    });
};



// PROJECT OBJECT

var projects = {
    "projects": [{
        "title": "Online Resume",
        "dates": "Sept 2016",
        "description": "Udacity Front-End Development project",
        "images": ['images/197x148.gif', 'images/197x148.gif']
    }, {
        "title": "Feature Article",
        "dates": "August 2016",
        "description": "Longform article from September 1, 2016 issue of Fortune magazine, adapted for the web.",
        "images": []
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
        var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
        var formattedDesc = HTMLprojectDescription.replace('%data%', project.description);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDesc);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace('%data%', image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};


// Function calls
bio.display();
education.display();
work.display();
projects.display();

// Google Map
$("#mapDiv").append(googleMap);
