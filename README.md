# Focus_chrome_extension
A Chrome extension that blocks social media links during a certain schedule, e.g, Weekday 8-5. Inspired by [Focus](https://heyfocus.com/), I decided to make a free version with simpler options. The current version is not user friendly, but it is straightforward for someone with basic computer skills.

## How to use it

* Download and extract this repos :)
* [Install the chrome extension **manually**](https://www.youtube.com/watch?v=CmXJOWeecvc). Basically, (1) enable the developer mode, (2) load unpacked extension
* Update [config.js](https://github.com/ahmdtaha/Focus_chrome_extension/blob/master/config.js) to match your preference


## Config Format

Before explaining the config file format, it is important to know that everytime you change this file (add/remove new preference), you need to refresh the extension by clicking the reload button as shown in the next figure.

![](https://github.com/ahmdtaha/Focus_chrome_extension/blob/master/reload_extension.jpg)

The config file format is very simple. Every line corresponds to a schedule and has the following format 

 `"source_url","day","time-interval","destination_url"`
 
This schedule/line makes the chrome extension redirects any requests to the source_url during certain intervals (day & time-interval) to the destination url. Concretely, `"twitter.com","Weekday","5:00AM-5:00PM","google.com"`
will redirect any requests to twitter during weekday [5:00 AM - 5:00PM] to google.

The day parameter (2nd parameter) can take one of the following values ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Weekend","Weekday"]

**Always rememeber to reload the plugin after you update the config file.**

### Contributions
I wish this project evolves to something bigger, so the following is a future todo list

* Improve the code documentation and the plugin UI
* Add a similar plugin for Firefox
* Make the plugin more user-friendly;  adding it to the chrome extension store and provide a more user-friendly way to update config.js

Pull-request and further improvments are more than welcomed

### Credits
* I am inspired by [Focus](https://heyfocus.com/)
* I hired Ban N. ,a freelancer from upwork, to code it.
