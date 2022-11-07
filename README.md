# Front-end Software Engineer Challenge (Weather App)

**Project target:** Create a single page application (SPA) to show the weather according to the requirements listed below.

Note: This shouldn't be days of work and is intentionally too large in scope for the four hour time limit we're suggesting. Limit yourself to that number of hours but if that proves tricky, because sometimes life happens, don't worry and just do what you can then let us know what time you had available. Even some notes would be better than nothing. If you do end up in a time-crunch, just let us know how much you were able to achieve and what requirements you dropped (and why, perhaps. The why is usually as interesting as the what).

It might also be the case that we can extend the deadline slightly. Just let us know and we can discuss what to do.

## Functional requirements (main ask)

- Show weather by location.

### Plus, optionally, any of

- Use latitude and longitude or nearest city, or resolve one to the other. If using cities, you could group them by country name.
- Remember your favourite cities or locations.
- Implement search by city name.
- Display weather not only on the list but on a map (Google maps?).

### Data

- Get data from a free weather API. Country / city lists are up to you.
- Hint (optional - by all means use another API): <https://open-meteo.com/en/docs#api_form> or make up the weather forecast that you'd like to see if that's proving tricky!

<details>
  <summary>Weather variable documentation - WMO Weather interpretation codes (WW) for use with open-meteo</summary>
	
| Code     |     Description     | 
|---------:|---------------------|
| 0	| Clear sky |
| 1, 2, 3	|  Mainly clear, partly cloudy, and overcast |
| 45, 48	|  Fog and depositing rime fog |
| 51, 53, 55	|  Drizzle: Light, moderate, and dense intensity |
| 56, 57	|  Freezing Drizzle: Light and dense intensity |
| 61, 63, 65	|  Rain: Slight, moderate and heavy intensity |
| 66, 67	|  Freezing Rain: Light and heavy intensity |
| 71, 73, 75	|  Snow fall: Slight, moderate, and heavy intensity |
| 77	|  Snow grains |
| 80, 81, 82	|  Rain showers: Slight, moderate, and violent |
| 85, 86	|  Snow showers slight and heavy |
| 95 *	|  Thunderstorm: Slight or moderate |
| 96, 99 *	|  Thunderstorm with slight and heavy hail |


(*) Thunderstorm forecast with hail is only available in Central Europe
</details>

---

## Technical requirements and notes

- Use a modern JavaScript framework (or TypeScript framework! ;) ) or plain html if you'd rather. Angular, React or Vue.js is ideal if you have a choice of frameworks you're familiar with. If you are most comfortable with another framework then by all means use that - we might ask more questions then, depending on our level of knowledge of the framework! Also feel free to use libraries with those frameworks - we might discus what you chose and why.
- It's (really) not essential to do this, but if there's time you might want to consider using a CSS pre-processor (Sass, Less, etc.) if you're used to using one. If they're new to you but you fancy having a go with one, that's fine too, but so is skipping this part.
- Consider using tools to ensure code quality.
- Ensure that the page is displayed neatly on modern desktop browsers (Chrome, Firefox latest).
- Stretch goal (only - not essential): production code could be optimized in some way. We might discuss this.
- Ideally the code would be placed on GitHub, Gitlab or BitBucket or other repo host that you can use to share via a link with us. There must be short documentation describing how to start the project. If you don't know how to do this do note it's really useful to learn how to use GitHub/Gitlab or Bitbucket for a career that involves coding! At Dell we use GitLab so perhaps do spend a few minutes having a look there.
- Please don't use "Dell" in the project text, file or anywhere else so folks don't copy your work down the line (and consider using a private repo and one that's not searchable)

---

## Guidelines for implementation

- If you're stuck or get to a point where you would normally ask a question about the spec simply note something as an assumption and use your judgement. Some of the spec above is intentionally vague to give you some freedom. You're also welcome to ask someone for help (us or someone you know), but you **must** let us know where this has happened simply so we know what is your work and what isn't. It's 100% fine to ask for help but it's 0% okay to pretend someone else's work is your own.
- Your thoughts and decision making are of interest to us, so imagine you're looking back on your own code then add a few notes to document why you chose one thing over another thing. Don't feel the need to justify every small decision, but choose a few you found interesting for any reason. Also by all means send notes separately in an email with the submission or store then in a single file (and let us know where these notes are). Of course you might want to do inline comments, too - this is above and beyond that.
- If you commit the code early and often you'll demonstrate how you break down and iteratively solve problems. You might then reference specific pushes in the above. Again, this isn't essential.
- A mix between technical and functional requirements with notes is preferred over delivering exclusively functional requirements.

# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

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