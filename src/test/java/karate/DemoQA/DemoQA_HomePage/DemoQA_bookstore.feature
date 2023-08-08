Feature: DemoQA_Bookstore Feature
  Background:
    * configure driver = {type:'chrome', addOptions:  ['--remote-allow-origins=*', '--incognito' ], userDataDir: 'target/chrome-user-dir'}
    * def DemoQAHomePageJSON = read('HomePage_JSon/DemoQA_HomePage_Object.json')
    * def fromAPI = call read('../DemoQA_API_DB/Get_DemoQA_BookStore.feature')
    # Define variables pulled from GET_DemoQA_BookStore - API

    * def Api_Isbn = fromAPI.ISBN
    * print Api_Isbn
    * def Api_Title = fromAPI.TITLE
    * def Api_Subtitle = fromAPI.SUBTITLE
    * def Api_Author = fromAPI.AUTHOR
    * def Api_Publish_date = fromAPI.PUBLISH_DATE
    * def Api_Publisher = fromAPI.PUBLISHER
    * def Api_Pages = fromAPI.PAGES
    * def Api_Description = fromAPI.DESCRIPTION
    * def Api_Website = fromAPI.WEBSITE

 @KarateTag
    Scenario Outline: Attempt to view DemoQA site
    Given driver <testData>.URL.demoqa_homePage_Login_URL
    * waitForUrl(<testData>.URL.demoqa_homePage_Login_URL)
    And driver.fullscreen()

    And match text(<testData>.Locator.demoqa_bookStore_click) == 'Book Store Application'
    * click(<testData>.Locator.demoqa_bookStore_click)
   # Validate the page - Title area

   And waitForText(<testData>.Locator.demoqa_sub_header_bookstore, 'Book Store')
   # Search for Book
  * click(<testData>.Locator.demoqa_search)
   * input(<testData>.Locator.demoqa_search, <search>)
    * delay(1000)
   # Validate that correct Book was found
    When match text(<testData>.Locator.demoqa_search_book + <search_id> + "']" ) == <book_name>
   * click(<testData>.Locator.demoqa_search_book_click + <book_name> + "']" )
   # View Individual Book page
   # Validate that the UI matches the API

    Then match text(<testData>.Locator.demoqa_book_isbn_label).trim() == 'ISBN :'
      * match text(<testData>.Locator.demoqa_book_isbn_value) == Api_Isbn
   * match text(<testData>.Locator.demoqa_book_title_label).trim() == 'Title :'
    * match text(<testData>.Locator.demoqa_book_title_value) == Api_Title
   * match text(<testData>.Locator.demoqa_book_subTitle_label).trim() == 'Sub Title :'
    * match text(<testData>.Locator.demoqa_book_subTitle_value) == Api_Subtitle
   * match text(<testData>.Locator.demoqa_book_author_label).trim() == 'Author :'
    * match text(<testData>.Locator.demoqa_book_author_value) == Api_Author
   * match text(<testData>.Locator.demoqa_book_publisher_label).trim() == 'Publisher :'
    * match text(<testData>.Locator.demoqa_book_publisher_value) == Api_Publisher
   * match text(<testData>.Locator.demoqa_book_total_pages_label).trim() == 'Total Pages :'
    * match text(<testData>.Locator.demoqa_book_total_pages_value) == Api_Pages
   * match text(<testData>.Locator.demoqa_book_description_label).trim() == 'Description :'
    * match text(<testData>.Locator.demoqa_book_description_value) == Api_Description
   * match text(<testData>.Locator.demoqa_book_website_label) == 'Website :'
    * match text(<testData>.Locator.demoqa_book_website_value).trim() == Api_Website



   Examples:
   |testData          |search                         |search_id                          | book_name                                 |
   |DemoQAHomePageJSON|DemoQAHomePageJSON.Data.search1|DemoQAHomePageJSON.Data.search_id1 |DemoQAHomePageJSON.Data.bookName1         |
   |DemoQAHomePageJSON|DemoQAHomePageJSON.Data.search2|DemoQAHomePageJSON.Data.search_id2 |DemoQAHomePageJSON.Data.bookName2         |