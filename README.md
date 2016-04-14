# MEAN JS testing

# MVP

### BUGS ###
- ~~HelperService - activating the home page slider~~ (MW)
- investigate togglable content areas (MW)

## MW ##
- display registration date on profile page (MW) | 1.5
- direct user to profile after sign in? (MW) | .5
- fix google maps api calls for each park (MW) | 8
- echo sign iframe and toggle to hide (MW) | .5
    * add boolean to user profile object for health Q (MW)
    * ~~add iframe both to sign up and edit profile in case the don't complete at sign up~~ (MW)
- 302 redirect rules - express? (MW) | 4
- add pricing wording to both venue / park level (MW)
    * render out price table for payment options
- tidy up blog content and side bar rendering (MW)
- wire up contact form on contact page (MW)
- ~~artificial delay on loading home page? slider loads slowly either way~~ (MW)
- ~~signing in after sign up page user still remains on signup and sees form~~ (MW)
- ~~mobile menu console error when clicking Home 'helper.client.services.js:34 Uncaught TypeError: of null'~~ (MW)
- ~~need to consider what to do about trailing slashes to avoid 404 SEO hell - is this an option?~~ (MW)
    * https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-make-a-trailing-slash-optional-for-all-routes
- ~~add social sign up buttons to sign up page - using new flat buttons~~ (MW)
- ~~social sign up on registration form~~ (MW)

## JB ##
- complete topbar styling on mobile (JB)
- second sweep of static pages (JB)
- hook up email server (JB)
- footer text (JB)
- move slider text into boxes so that background pics can be lighter? (JB)
- home - sort about section (JB)
- home - add content to cards or remove? (JB)
- home - make video more prominent (JB)
- home - schedule to remain? (JB)
- investigate using NGINX in front of Node (JB)
- lock down access apart from via Cloudflare (JB)
- resource monitoring (JB)
- prepare 302 redirect list (JB)
- replace latin throughout (JB)

## POST MVP
INFO REQUIRED FROM PAUL
- repeating short video for home page slider? (PS)
- head office address (PS)

### BY FEATURE / PAGE ###

SERVER STUFF
- backup Mongo off box (JB)
- load test? (JB)
- monitor https://www.cloudflare.com/ips-v4 for change in CloudFlare IP addresses (JB)

HOME PAGE
- make logo bigger on mobile (JB)
- spacing and styling of top bar contact details (JB)
- ~~take top header section from index-header-v3.html~~ (JB)
- ~~make desktop menu solid on scroll (JB)~~
- ~~social icon links in mobile menu not working (JB)~~

ACCOUNT AREA - YOUR INFO
- home park (MW)
- membership status
- membership number
- attendance
- fitness tests
- capture device registered on in back end?
- capture devices logging in on?
- bib colour / standard
- Adobe echo sign API integration - anything existing for front end integration? https://secure.echosign.com/redirect/latestRestApiMethods (MW)

ACCOUNT AREA - GENERIC LINKS
- members feedback
- members faq
- ~~change details~~ (MW)
- ~~change password~~ (MW)
- ~~log out~~ (MW)

ACCOUNT AREA - JOIN NOW
- depends on membership status?
- Pay Monthly
- PAYG - buy block and payment

FAQS
- add redirect from faqs-2
- ~~lighten text~~ (JB)
- add accordions?

ABOUT PAGE
- link up T&Cs, sign up
- images

CONTACT PAGE
- stripped out partners logos, could add back in or use on another page if Paul has as list
- swap out contact form for sticky form on every page? could reuse Olark for this from current site
