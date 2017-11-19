# Analog Clock with 12/24mode, phrase output, MVC.

test-link: https://rsteam02.github.io/AnalogClock12_24
+ css, svg size fix
+ 28.10.: mark rectangle fix 
+ 28.10.: phrase output test => move hour, minute range sliders to check time in phrases




+ main: starting point of the app, creates model and controller instance. setInterval updates time every second.
+ Model:  build phrases, daystate (morning, noon, afternoon, evening, night), distinguish between 12/24 facenumbering => (re)calculate hour angle.  
  the time information is passed from the controller that uses a model instance. 
+ View: through hbs or html view via DOM (SVG)
+ Controller: create a model, view instance, read from new Date() clock, date, => split certain parts e.g. hour, minute, seconds, date and controls the movement of the clock.
 
