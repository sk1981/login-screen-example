# Login Screen Example
## Overview
A Simple Login screen flow using react and redux. While the use of react and redux is an overkill for this site, we are mainly using it to demonstrate the usage.

## Site Usage
* The site accepts the following it for login:
  * Admin login - admin/admin
  * User login - test/test
* It does not uses react router to manage url transitions, it just replaces the inner component.

## Local Usage
* To build it locally first clone it and then run `npm install` (will take some time)
* Once build use:-
  * npm run build - to build the project
  * npm run watch - to deploy the project and access it via http://localhost:8080

## Improvement Scope
* Add Stylelint
* Testcases - unit and integration
* Accessibility related changes
* Use react router to represent different screens
* Use of proper immutable data structures
* Using local storage to store login data