Feature: GET_DemoQA_BookStore
  Background:
    #* configure ssl = true
    * header Content-Type = 'application/json'
    # Get Authorization and token
    * def myFeature = call read('../DemoQA_Authenticate/DemoQA_Authenticate.feature')
    * def authToken = myFeature.AUTHTOKEN
    * def DemoQAHomePageJSON = read('../DemoQA_Homepage/HomePage_JSon/DemoQA_HomePage_Object.json')

    Scenario Outline: Validate Get
      Given url <baseURL>
      * path <path>
      And header Authorization = 'Bearer ' + authToken
      #* param
      * method get
      Then status 200

      # print res
      #Given def res = get response
      #Valiate that the ISBN exists in the A"PI call
    #  * def myResponse = $.books[*].isbn
    #  * def res = karate.jsonPath(response, "$.books[?(@.isbn== '" + <testData>.Data.ISBN + "')]")[0]
      * def filt = function(x){return x.id == <testData>.id}
      * def myResponse = $[*]
      * def res = karate.filter(myResponse, filt)

      * print res
      * def ISBN = res[0].isbn
      * print ISBN
      * def TITLE = res[0].title
      * print TITLE
      * def SUBTITLE = res[0].subTitle
      * print SUBTITLE
      * def AUTHOR = res[0].author
      * def PUBLISH_DATE = res[0].publish_data
      * def PUBLISHER = res[0].publisher
      * def PAGES = res[0].pages
      * def DESCRIPTION = res[0].description
      * def WEBSITE = res[0].website

      Examples:
      |testData             |baseURL                           |path      |
      |DemoQAHomePageJSON   |'https://demoqa.com/BookStore/v1'   |'Books'    |