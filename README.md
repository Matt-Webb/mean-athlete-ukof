# MEAN JS testing

# MVP #

## MW ##
- display registration date on profile page (MW)
- direct user to profile after sign in? (MW)
- echo sign iframe and toggle to hide (MW)
    * ~~add iframe both to sign up and edit profile in case the don't complete at sign up~~ (MW)
    * add boolean to user profile object for health Q (MW)
        * investigate API for tracking these? Non MVP (MW)
- 302 redirect rules - express? (MW)
- ~~signing in after sign up page user still remains on signup and sees form~~ (MW)
- ~~mobile menu console error when clicking Home 'helper.client.services.js:34 Uncaught TypeError: of null'~~ (MW)
- ~~need to consider what to do about trailing slashes to avoid 404 SEO hell - is this an option?~~ (MW)
    * https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-make-a-trailing-slash-optional-for-all-routes
- ~~add social sign up buttons to sign up page - using new flat buttons~~ (MW)
- ~~social sign up on registration form~~ (MW)

## JB ##
- complete topbar styling on mobile (JB)
- hook up email server (JB)
- footer text (JB)
- move slider text into boxes so that background pics can be lighter? (JB)
- home - sort about section (JB)
- home - add content to cards or remove? (JB)
- home - make video more prominent (JB)
- home - schedule to remain? (JB)

## PS ##
- head office address - Paul

### BY FEATURE / PAGE ###

SERVER STUFF
- investigate using NGINX in front of Node (JB)
- lock down access apart from via Cloudflare (JB)
- resource monitoring (JB)
- load test? (JB)
- monitor https://www.cloudflare.com/ips-v4 for change in CloudFlare IP addresses (JB)
- backup Mongo off box (JB)

OTHER
- spacing and styling of top bar contact details
- make logo bigger on mobile
- Adobe echo sign API integration - anything existing for front end integration? https://secure.echosign.com/redirect/latestRestApiMethods
- fix google maps api calls
- artificial delay on loading home page? slider loads slowly either way
- ~~social icon links in mobile menu not working~~
- ~~make desktop menu solid on scroll~~

INFO REQUIRED FROM PAUL
- repeating short video for home page slider?

HOME PAGE
- ~~take top header section from index-header-v3.html~~

ACCOUNT AREA - YOUR INFO
- bib colour / standard
- home park
- membership status
- membership number
- attendance
- fitness tests
- capture device registered on in back end?
- capture devices logging in on?

ACCOUNT AREA - GENERIC LINKS
- members feedback
- members faq
- change details (MW)
- change password (MW)
- log out (MW)

ACCOUNT AREA - JOIN NOW
- depends on membership status?
- Pay Monthly
- PAYG - buy block and payment

CLASS DESC PAGE
- replace latin

FAQS
- add redirect from faqs-2
- lighten text
- add accordions?

ABOUT PAGE
- link up T&Cs, sign up
- images

PRICES
- update wording

CONTACT PAGE
- stripped out partners logos, could add back in or use on another page if Paul has as list
- map needs fixing
- swap out contact form for sticky form on every page? could reuse Olark for this from current site

BLOGS
- rendering (MW)

### BUGS ###
- ~~HelperService - activating the home page slider~~ (MW)
