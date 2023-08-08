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
      * param isbn = <param>
      And header Authorization = 'Bearer ' + authToken
      * method get
      Then status 200

      # print res
      #Given def res = get response
      #Valiate that the ISBN exists in the A"PI call
    #  * def myResponse = $.books[*].isbn
      * def res = karate.jsonPath(response, "$.books[?(@.isbn== '" + <testData>.Data.ISBN + "')]")[0]
    #  * def filt = function(x){return x.id == <testData>.isbn}
    #  * def myResponse = $[*]
    #  * def res = karate.filter(myResponse, filt)
    * print res

      * def ISBN = res.isbn
      * print ISBN
      * def TITLE = res.title
      * print TITLE
      * def SUBTITLE = res.subTitle
      * print SUBTITLE
      * def AUTHOR = res.author
      * def PUBLISH_DATE = res.publish_data
      * def PUBLISHER = res.publisher
      * def PAGES = res.pages
      * def DESCRIPTION = res.description
      * def WEBSITE = res.website

      Examples:
      |testData             |baseURL                           |path      | param                |
      |DemoQAHomePageJSON   |'https://demoqa.com/BookStore/v1'   |'Books'    |'9781491950296'    |