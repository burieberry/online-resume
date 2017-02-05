// refactored version of resumebuilder.js

var model = {
  // bio data
  bio: {
    'name': 'Burcu Noyan',
    'role': 'Front-End Web Developer & Digital Producer',
    'contacts': {
      'mobile': '(347) 444-4444',
      'email': 'burcunoyan@gmail.com',
      'github': 'burieberry',
      'twitter': '@burieberry',
      'linkedin': 'burcunoyan',
      'location': 'New York City'
    },

    // welcome message & biopic
    'biopic': 'images/biopic.jpg',
    'welcomeMessage': 'Hi! I\'m a front-end web developer, digital producer and editor.<br>' +
      'I enjoy doing web design and creative storytelling.',

    // skills
    'skills': {
      'tech' : ['HTML / CSS', 'Javascript / jQuery / JSON / AJAX',
                'Photoshop / InDesign', 'WordPress, JIRA'],
      'language' : 'Turkish and French'
    }
  },

  // work experience data
  work: {
    "jobs": [{
        "employer": "Time Inc. (Fortune.com)",
        "title": "Web Producer",
        "location": "New York, NY",
        "dates": "May 2015 - Present / Previously: May 2014 - Jul 2014",
        "description":
          "• Manage online production of editorial projects, including <em>Fortune</em> 500, Best Companies franchises <br>" +
          "• Maintain production schedules; enforce deadlines for deliverables from creative, marketing, tech <br>" +
          "• Work in Agile environment: Attend Scrum and sprint planning; file JIRA tickets and perform QA <br>" +
          "• Design and build long-form feature articles with multimedia and interactive elements <br>" +
          "• Write and edit articles; optimize content for search and social; monitor ad sponsorships",
        "url": "http://fortune.com/"
    }, {
        "employer": "Amplify",
        "title": "Digital Producer",
        "location": "Brooklyn, NY",
        "dates": "Mar 2015 - May 2015",
        "description":
          "• Produced e-book content for tablet readers using HTML and CSS; performed QA<br>" +
          "• Scrubbed code in EPUBs; organized workflow in Digital Asset Management system",
        "url": "https://www.amplify.com/"
    }, {
        "employer": "Nikkei MDG (FortuneTurkey.com)",
        "title": "Web Editor",
        "location": "Istanbul, Turkey",
        "dates": "Sep 2014 - Jan 2015",
        "description":
          "• Published 25+ articles per day, with focus on breaking news, technology, and international news<br>" +
          "• Increased monthly page traffic over 100 percent in 4.5 months and doubled Facebook followers",
        "url": "http://fortuneturkey.com/"
    }, {
        "employer": "Rodale Books",
        "title": "Communications Assistant",
        "location": "Istanbul, Turkey",
        "dates": "Sep 2013 - Apr 2014",
        "description": "• Created press releases; coordinated author appearances and interviews for TV, print/web media",
        "url": "http://www.rodaleinc.com/products/rodale-books/"
    }, {
        "employer": "Condé Nast (Luckymag.com)",
        "title": "ASME Web Intern",
        "location": "New York, NY",
        "dates": "Jun 2012 - Aug 2012",
        "description": "• Pitched stories, wrote online articles, and prepared web slideshows on Adobe CQ5 CMS",
        "url": "http://www.luckymag.com/"
    }, {
        "employer": "Boutiika.com",
        "title": "Fashion Research and PR Intern",
        "location": "New York, NY",
        "dates": "Sep 2011 - Jan 2012",
        "description": "",
        "url": "https://www.linkedin.com/company/boutiika/"
    }]
  },

  // projects data
  projects: {
    "projects": [{
        "title": "Portfolio Site",
        "dates": "Sept 2016",
        "description": 'Developed a responsive online portfolio website. ' +
          'Replicated the provided design mockup in HTML and CSS.',
        "images": ['']
    }, {
        "title": "Online Resume",
        "dates": "Oct 2016",
        "description": "Online resume that you're currently viewing. " +
          "Developed using HTML, CSS, and Javascript.",
        "images": []
    }, {
        "title": "Classic Arcade Game: Frogger",
        "dates": "Nov 2016",
        "description": "" +
          "Wrote object-oriented Javascript to recreat the classic frogger " +
          "arcade game using the provided visual assets and game loop engine.",
        "images": []
    }, {
        "title": "Website Optimization",
        "dates": "Jan 2016",
        "description": "Optimized a provided website with a number of " +
          "optimization- and performance-related issues so that it achieves " +
          "a Google PageSpeed score over 90 and runs at 60 frames per second " +
          "on mobile and desktop.",
        "images": []
    }, {
        "title": "Cat Clicker",
        "dates": "Feb 2017",
        "description": "Select a cat and get them clicks!",
        "images": []
    }, {
        "title": "Neighborhood Map",
        "dates": "March 2017",
        "description": "Developed a single-page application featuring a map of my neighborhood, " +
          "Bushwick. Added additional functionality to this application, including: map markers " +
          "to identify popular locations and places to visit, a search function to easily discover " +
          "these locations, and a listview to support simple browsing of all locations. Researched " +
          "and implemented third-party APIs that provide additional information about each of these " +
          "locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
        "images": []
    }, {
        "title": "Feed Reader Testing",
        "dates": "March 2017",
        "description": "Test-driven development (TDD) project.",
        "images": []
    }]
  },

  // education data
  education: {
    "schools": [{
        "name": "Baruch College, Zicklin School of Business",
        "location": "New York, NY",
        "degree": "M.S. Management Information Systems",
        "dates": "Jan 2015 - May 2016",
        "url": "http://zicklin.baruch.cuny.edu/"
    }, {
        "name": "Vassar College",
        "location": "Poughkeepsie, NY",
        "degree": "B.A. Economics, French",
        "dates": "Aug 2009 - May 2013",
        "url": "http://www.vassar.edu/"
    }, {
        "name": "Université Denis-Diderot Paris 7",
        "location": "Paris, France",
        "degree": "Vassar-Wesleyan Study in France",
        "dates": "Jan - Jun 2012",
        "url": "http://en.vwpp.org/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "Aug 2016 - Present",
        "url": "http://bit.ly/2d1kIdf"
    }, {
        "title": "Columbia Publishing Course",
        "school": "Columbia University, Graduate School of Journalism",
        "dates": "Jun - Aug 2013",
        "url": "http://bit.ly/2buSzLI"
    }]
  }
}

var octopus = {
  init: function() {
    resumeView.init();
  },

  getHeader: function() {
    var bio = model.bio;
    var formattedName = HTMLheaderName.replace('%data%', bio.name),
        formattedRole = HTMLheaderRole.replace('%data%', bio.role),
        formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage),
        formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    $("#header").prepend(formattedName, formattedRole);
    $("#header").append(formattedBioPic, formattedWelcomeMsg);
  },

  getContacts: function() {
    var contacts = model.bio.contacts;
    var formattedMobile = HTMLmobile.replace('%data%', contacts.mobile),
        formattedEmail = HTMLemail.replace('%data%', contacts.email).replace('#', contacts.email),
        formattedTwitter = HTMLtwitter.replace('%data%', contacts.twitter).replace('#', contacts.twitter),
        formattedlinkedIn = HTMLlinkedIn.replace('%data%', contacts.linkedin).replace('#', contacts.linkedin),
        formattedGithub = HTMLgithub.replace('%data%', contacts.github).replace('#', contacts.github),
        formattedLocation = HTMLlocation.replace('%data%', contacts.location);
    return formattedEmail + formattedTwitter + formattedlinkedIn + formattedGithub + formattedLocation;
  },

  getSkills: function() {
    var skills = model.bio.skills;
    $("#header").append(HTMLskillsStart);
    skills.tech.forEach(function(skill) {
      var formattedTechSkills = HTMLtechskills.replace('%data%', skill);
      $("#skills").append(formattedTechSkills);
    });

    var formattedLangSkills = HTMLlangskills.replace('%data%', skills.language);
    $("#skills").append(formattedLangSkills);
  },

  getWork: function() {
    var work = model.work;
    work.jobs.forEach(function(job) {
      var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer).replace('#', job.url),
          formattedTitle = HTMLworkTitle.replace('%data%', job.title),
          formattedEmployerTitle = formattedEmployer.concat(formattedTitle),
          formattedDates = HTMLworkDates.replace('%data%', job.dates),
          formattedLocation = HTMLworkLocation.replace('%data%', job.location),
          formattedDescription = HTMLworkDescription.replace('%data%', job.description);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
    });
  },

  getProjects: function() {
    var projects = model.projects;
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
  },

  getEducation: function() {
    var education = model.education;
    education.schools.forEach(function(school) {
      var formattedSchoolName = HTMLschoolName.replace('%data%', school.name),
          formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree),
          formattedNameDegree = formattedSchoolName.concat(formattedSchoolDegree),
          formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location),
          formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedNameDegree, formattedSchoolLocation, formattedSchoolDates);
    });
  },

  getOnlineClasses: function() {
    var education = model.education;
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
      var formattedTitle = HTMLonlineTitle.replace('%data%', course.title).replace('#', course.url),
          formattedOnlineSchool = HTMLonlineSchool.replace('%data%', course.school),
          formattedTitleSchool = formattedTitle.concat(formattedOnlineSchool),
          formattedDates = HTMLonlineDates.replace('%data%', course.dates);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedTitleSchool, formattedDates);
    });
  }

}

var resumeView = {
  init: function() {
    this.render();
  },

  render: function() {
    $("#header").prepend(octopus.getHeader).append(octopus.getSkills);
    $("#topContacts").append(octopus.getContacts);
    $("#workExperience").append(octopus.getWork);
    $("#projects").append(octopus.getProjects);
    $("#education").append(octopus.getEducation).append(octopus.getOnlineClasses);
    $("#footerContacts").append(octopus.getContacts);
    $("#main").append(internationalizeButton);
    $("#mapDiv").append(googleMap);
  }
}


// start application
octopus.init();