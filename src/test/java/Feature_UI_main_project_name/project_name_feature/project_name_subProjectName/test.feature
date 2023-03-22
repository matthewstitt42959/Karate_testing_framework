Feature: Testing Automation Practice page to see if it works
  Background:
    * configure driver = {type: 'chrome', userDataDir: 'target/chrome-user.dir'}
    * def automationPageJSON = read('AutomationPractice_JSon/AutomationPractice_Object.json')
  @KarateTag
  Scenario: Attempt to view Automation practice page
    Given driver 'https://ultimateqa.com/complicated-page'
    * driver.fullscreen()
    * delay(1000)
    * highlight(automationPageJSON.section_of_Buttons_column1_button1)
    * click(automationPageJSON.section_of_Buttons_column1_button1)


   #Validate that image in top left appears
   #* locate(NexHomePageJSON.homePage_img)
