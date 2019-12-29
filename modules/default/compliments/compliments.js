/* global Log, Module, moment */

/* Magic Mirror
 * Module: Compliments
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */
Module.register("compliments", {

	// Module config defaults.
	defaults: {
		compliments: {
			anytime: [
				"Hey there sexy!",
				"Jake loves Lauren",
				"You sure are brave for going out like that",
				"Looking good!",
				"Hey there sexy!",
				"I hate when I'm on a flight and I wake up with a water bottle \nnext to me like oh great now I gotta be responsible \nfor this water bottle",
				"If I got any cooler I would freeze to death",
				"I wish I had a friend like me",
				"People only get jealous when they care.",
				"Fur pillows are hard to actually sleep on",
				"Tweeting is legal and also therapeutic",
				"I'm nice at ping pong",
				"Shut the fuck up I will fucking laser you with alien fucking eyes and \nexplode your fucking head",
				"Sometimes I push the door close button on people running towards the \nelevator. I just need my own elevator sometimes. \nMy sanctuary.",
				"I'm the best",
				"I love sleep; it's my favorite."
			],
			morning: [
				"Jake loves Lauren",
				"Good morning, handsome!",
				"Enjoy your day!",
				"How was your sleep?",
				"Today is going to be great!",
				"Go get that bread!",
				"Believe in your flyness…conquer your shyness.",
				"You can’t look at a glass half full or \nempty if it’s overflowing.",
				"I care. I care about everything. \nSometimes not giving a f#%k is caring the most.",
				"Only free thinkers",
				"I leave my emojis bart Simpson color",
				"Just stop lying about shit. Just stop lying.",
				"Truth is my goal. Controversy is my gym. \nI'll do a hundred reps of controversy for a \n6 pack of truth",
				"I really love my Tesla. I'm in the future. Thank you Elon.",
				"Have you ever thought you were in love \nwith someone but then realized you were just staring \nin a mirror for 20 minutes?",
				"Today is the best day ever and tomorrow's \ngoing to be even better",
				"I give up drinking every week",
				"Burn that excel spread sheet",
				"I feel calm but energized",
				"The thought police want to suppress freedom of thought",
				"I feel like I'm too busy writing history to read it.",
				"Man... whatever happened to my antique fish tank?",
				"My dad got me a drone for Christmas 🔥🔥🔥",
				"I make awesome decisions in bike stores!!!",
				"Perhaps I should have been more like water today"
			],
			afternoon: [
				"Jake loves Lauren",
				"Is that really what you're wearing?",
				"Weird hat",
				"Hello, beauty!",
				"You look sexy!",
				"Looking good today!",
				"Looking good today!",
				"The world is our office",
				"Everything you do in life stems from \neither fear or love",
				"My greatest award is what I’m about to do.",
				"For me, money is not my definition of success. \nInspiring people is a definition of success",
				"The world is our family",
				"distraction is the enemy of vision",
				"I want the world to be better! All I want \nis positive! All I want is dopeness!",
				"Decentralize",
				"I think I do myself a disservice by comparing \nmyself to Steve Jobs and Walt Disney and human beings \nthat we’ve seen before. It should be more like Willy Wonka…and welcome to my chocolate factory.",
				"Sometimes you have to get rid of everything",
				"2024",
				"I'm a creative genius",
				"I still think I am the greatest.",
				"People always tell you ‘Be humble. Be humble.’ \nWhen was the last time someone told you to be amazing? \nBe great! Be awesome! Be awesome!"
			],
			evening: [
				"Jake loves Lauren",
				"Wow, you look hot!",
				"You look nice!",
				"Hi, sexy!",
				"Hi, sexy!",
				"People always say that you can’t please everybody. \nI think that’s a cop-out. Why not attempt it? \n‘Cause think of all the people that you will please if you try.",
				"Let's be like water",
				"Pulling up in the may bike 😂",
				"I'd like to meet with Tim Cook. I got some ideas",
				"If I don’t scream, if I don’t say something then \nno one’s going to say anything.",
				"All you have to be is yourself",
				"We came into a broken world. And we're the cleanup crew.",
				"Keep squares out yo circle",
				"I’ll say things that are serious and put them \nin a joke form so people can enjoy them. \nWe laugh to keep from crying.",
				"For me giving up is way harder than trying.",
				"We all self-conscious. \nI'm just the first to admit it.",
				"My greatest pain in life is that \nI will never be able to see myself perform live.",
				"Keep your nose out the sky, keep your heart to god, \nand keep your face to the rising sun."
			]
		},
		updateInterval: 30000,
		remoteFile: null,
		fadeSpeed: 4000,
		morningStartTime: 3,
		morningEndTime: 12,
		afternoonStartTime: 12,
		afternoonEndTime: 17
	},

	// Set currentweather from module
	currentWeatherType: "",

	// Define required scripts.
	getScripts: function() {
		return ["moment.js"];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		this.lastComplimentIndex = -1;

		var self = this;
		if (this.config.remoteFile !== null) {
			this.complimentFile(function(response) {
				self.config.compliments = JSON.parse(response);
				self.updateDom();
			});
		}

		// Schedule update timer.
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed);
		}, this.config.updateInterval);
	},

	/* randomIndex(compliments)
	 * Generate a random index for a list of compliments.
	 *
	 * argument compliments Array<String> - Array with compliments.
	 *
	 * return Number - Random index.
	 */
	randomIndex: function(compliments) {
		if (compliments.length === 1) {
			return 0;
		}

		var generate = function() {
			return Math.floor(Math.random() * compliments.length);
		};

		var complimentIndex = generate();

		while (complimentIndex === this.lastComplimentIndex) {
			complimentIndex = generate();
		}

		this.lastComplimentIndex = complimentIndex;

		return complimentIndex;
	},

	/* complimentArray()
	 * Retrieve an array of compliments for the time of the day.
	 *
	 * return compliments Array<String> - Array with compliments for the time of the day.
	 */
	complimentArray: function() {
		var hour = moment().hour();
		var compliments;

		if (hour >= this.config.morningStartTime && hour < this.config.morningEndTime && this.config.compliments.hasOwnProperty("morning")) {
			compliments = this.config.compliments.morning.slice(0);
		} else if (hour >= this.config.afternoonStartTime && hour < this.config.afternoonEndTime && this.config.compliments.hasOwnProperty("afternoon")) {
			compliments = this.config.compliments.afternoon.slice(0);
		} else if(this.config.compliments.hasOwnProperty("evening")) {
			compliments = this.config.compliments.evening.slice(0);
		}

		if (typeof compliments === "undefined") {
			compliments = new Array();
		}

		if (this.currentWeatherType in this.config.compliments) {
			compliments.push.apply(compliments, this.config.compliments[this.currentWeatherType]);
		}

		compliments.push.apply(compliments, this.config.compliments.anytime);

		return compliments;
	},

	/* complimentFile(callback)
	 * Retrieve a file from the local filesystem
	 */
	complimentFile: function(callback) {
		var xobj = new XMLHttpRequest(),
			isRemote = this.config.remoteFile.indexOf("http://") === 0 || this.config.remoteFile.indexOf("https://") === 0,
			path = isRemote ? this.config.remoteFile : this.file(this.config.remoteFile);
		xobj.overrideMimeType("application/json");
		xobj.open("GET", path, true);
		xobj.onreadystatechange = function() {
			if (xobj.readyState === 4 && xobj.status === 200) {
				callback(xobj.responseText);
			}
		};
		xobj.send(null);
	},

	/* complimentArray()
	 * Retrieve a random compliment.
	 *
	 * return compliment string - A compliment.
	 */
	randomCompliment: function() {
		var compliments = this.complimentArray();
		var index = this.randomIndex(compliments);

		return compliments[index];
	},

	// Override dom generator.
	getDom: function() {
		var complimentText = this.randomCompliment();

		var compliment = document.createTextNode(complimentText);
		var wrapper = document.createElement("div");
		wrapper.className = this.config.classes ? this.config.classes : "thin xlarge bright pre-line";
		wrapper.appendChild(compliment);

		return wrapper;
	},

	// From data currentweather set weather type
	setCurrentWeatherType: function(data) {
		var weatherIconTable = {
			"01d": "day_sunny",
			"02d": "day_cloudy",
			"03d": "cloudy",
			"04d": "cloudy_windy",
			"09d": "showers",
			"10d": "rain",
			"11d": "thunderstorm",
			"13d": "snow",
			"50d": "fog",
			"01n": "night_clear",
			"02n": "night_cloudy",
			"03n": "night_cloudy",
			"04n": "night_cloudy",
			"09n": "night_showers",
			"10n": "night_rain",
			"11n": "night_thunderstorm",
			"13n": "night_snow",
			"50n": "night_alt_cloudy_windy"
		};
		this.currentWeatherType = weatherIconTable[data.weather[0].icon];
	},

	// Override notification handler.
	notificationReceived: function(notification, payload, sender) {
		if (notification === "CURRENTWEATHER_DATA") {
			this.setCurrentWeatherType(payload.data);
		}
	},

});
