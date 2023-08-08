Feature: GET_DemoQA_BookStore
  Background:
    #* configure ssl = true
    * header Content-Type = 'application/json'
    # def key_location = KEY_LOC
    # def ts_pass = TRUST_STORE_PASS
    # * configure ssl = { truststore: '#(key_location)', trustStorePassword: '#(ts_pass)', trustStoreType: 'jks' }

    Scenario Outline: Basic Validation
      And def basicAuthFunction =
      """
      function(username, password) {
      var temp = username + ':' + password;
      var Base64 = Java.type('java.util.Base64');
      var encoded = Base64.getEncoder().encodeToString(temp.getBytes());
      return 'Basic ' + encoded;
      }
      """
      Given url <baseURL>
      And path <path>
      And def username = API_ID
      And def password = API_SECRET
      And header Authorization = basicAuthFunction(username, password)
      When method get
      Then status 200
      * def AUTHTOKEN = response.token

      Examples:
      |baseURL                          |path            |
      |'https://demoqa.com/Account/v1'  |'GenerateToken' |