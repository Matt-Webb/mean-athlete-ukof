# MEAN JS testing
## MVP
- ~~signing in after sign up page user still remains on signup and sees form~~ (MW)
- ~~mobile menu console error when clicking Home 'helper.client.services.js:34 Uncaught TypeError: Cannot read property 'classList' of null'~~ (MW)
- registration date (MW)
- echo sign iframe and toggle to hide (MW)
    * ~~add iframe both to sign up and edit profile in case the don't complete at sign up~~ (MW)
    * add boolean to user profile object for health Q (MW)
    * account - echo sign iframe + toggle to hide (MW)
    * update edit profile settings for marking complete
        * Investigate API for tracking these? Non MVP (MW)
- 302 redirect rules - express? (MW)
- ~~need to consider what to do about trailing slashes to avoid 404 SEO hell - is this an option? https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-make-a-trailing-slash-optional-for-all-routes~~ (MW)
- ~~add social sign up buttons to sign up page - using new flat buttons~~ (MW)
- ~~social sign up on registration form~~ (MW)
- direct user to profile after sign in? (MW)
- fix google maps api calls (MW)
- artificial delay on loading home page? slider loads slowly either way (MW)

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
- get images from existing site and change references in new site (JB)


## POST MVP
INFO REQUIRED FROM PAUL
- repeating short video for home page slider?
- head office address - Paul

SERVER STUFF
- backup Mongo off box (JB)
- load test? (JB)
- monitor https://www.cloudflare.com/ips-v4 for change in CloudFlare IP addresses (JB)

HOME PAGE
- ~make desktop menu solid on scroll (JB)~
- ~social icon links in mobile menu not working (JB)~
- ~take top header section from index-header-v3.html~
- spacing and styling of top bar contact details (JB)
- make logo bigger on mobile (JB)

ACCOUNT AREA - YOUR INFO
- Adobe echo sign API integration - anything existing for front end integration? https://secure.echosign.com/redirect/latestRestApiMethods (MW)
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
- refactor 'about' references

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

diff controllers
- header
- home
