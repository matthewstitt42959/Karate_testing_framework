Feature: Testing Karate to see if it works
  Background:
   * configure driver = {type:'chrome', addOptions:  ['--remote-allow-origins=*', '--incognito' ], userDataDir: 'target/chrome-user-dir'}

    * def DemoQAHomePageJSON = read('HomePage_JSon/DemoQA_HomePage_Object.json')


 @KarateTag
 Scenario Outline: Attempt to view DemoQA site - Add user - no Submit
   Given driver <testData>.URL.demoqa_homePage_Login_URL
   * waitForUrl(<testData>.URL.demoqa_homePage_Login_URL)
   And driver.fullscreen()
   And match text(<testData>.Locator.demoqa_bookStore_text) == 'Book Store Application'
   * click(<testData>.Locator.demoqa_bookStore_click)
   # Validate the page - Title area
   And waitForText(<testData>.Locator.demoqa_sub_header_bookstore, 'Book Store')
   # Click on login
   * click(<testData>.Locator.demoqa_login)
  # Validate Login text
   * waitForText(<testData>.Locator.demoqa_login_welcome, 'Welcome')
   * match text(<testData>.Locator.demoqa_login_book_store) == 'Login in Book Store'
   * click(<testData>.Locator.demoqa_login_new_user_click)
   # Inputs
   * input(<testData>.Locator.demoqa_login_user_fname_input, <fname>)
   * input(<testData>.Locator.demoqa_login_user_lname_input, <lname>)
   * input(<testData>.Locator.demoqa_login_user_uname_input, <user>)
   * input(<testData>.Locator.demoqa_login_password_input, <password>)
   * delay(1000)

   Examples:
     |fname    |lname   |user     |password   | testData|
     |'Matthew'|'Tester'|'NewUser'|'@Pa33w0rd' |DemoQAHomePageJSON|

  @KarateTag
    Scenario Outline: Attempt to view DemoQA site - Invalid
    Given driver <testData>.URL.demoqa_homePage_Login_URL
    * waitForUrl(<testData>.URL.demoqa_homePage_Login_URL)
    And driver.fullscreen()

    And match text(<testData>.Locator.demoqa_bookStore_text) == 'Book Store Application'
    * click(<testData>.Locator.demoqa_bookStore_click)
   # Validate the page - Title area

   And waitForText(<testData>.Locator.demoqa_sub_header_bookstore, 'Book Store')
   # Click on login
  * click(<testData>.Locator.demoqa_login)
  # Validate Login text
   * waitForText(<testData>.Locator.demoqa_login_welcome, 'Welcome')
   * match text(<testData>.Locator.demoqa_login_book_store) == 'Login in Book Store'
  # Inputs
   * input(<testData>.Locator.demoqa_login_user_uname_input, <user>)
   * input(<testData>.Locator.demoqa_login_password_input, <password>)
   * click(<testData>.Locator.demoqa_login)
   * match text(<testData>.Locator.demoqa_login_invalid) == 'Invalid username or password!'

   Examples:
   |user     |password   |testData |
   |'Matthew'|'p2DLKDDIDL' |DemoQAHomePageJSON|
   |'Susan'  |'EIESEIEKE' |DemoQAHomePageJSON |

  @KarateTag
  Scenario Outline: Attempt to view DemoQA site - Profile
    Given driver <testData>.URL.demoqa_homePage_Login_URL
    * waitForUrl(<testData>.URL.demoqa_homePage_Login_URL)
    And driver.fullscreen()

    And match text(<testData>.Locator.demoqa_bookStore_text) == 'Book Store Application'
    * click(<testData>.Locator.demoqa_bookStore_click)
   # Validate the page - Title area

    And waitForText(<testData>.Locator.demoqa_sub_header_bookstore, 'Book Store')
   # Click on login
    * click(<testData>.Locator.demoqa_login)
    * delay(5000)
  # Validate Login text
    * waitForText(<testData>.Locator.demoqa_login_welcome, 'Welcome')
    * match text(<testData>.Locator.demoqa_login_book_store) == 'Login in Book Store'
  # Inputs
    * input(<testData>.Locator.demoqa_login_user_uname_input, <user>)
    * input(<testData>.Locator.demoqa_login_password_input, <password>)
    * delay(5000)
    * click(<testData>.Locator.demoqa_login)
    * delay(5000)
    * waitForUrl(<testData>.URL.demoqa_homePage_Login_URL + <testData>.URL.demoqa_book_URL)
   # Validate Username appears
    * match text(<testData>.Locator.demoqa_bookStore_uname_label) == 'User Name : '
    * match text(<testData>.Locator.demoqa_bookStore_uname_text) == <user>
    * delay(5000)

    Examples:
      |user     |password   |testData|
      |'Matthew'|'@Pa33w0rd' |DemoQAHomePageJSON|
