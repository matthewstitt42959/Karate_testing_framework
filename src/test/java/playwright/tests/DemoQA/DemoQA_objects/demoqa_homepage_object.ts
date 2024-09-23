import {expect, type Locator, type Page} from '@playwright/test'; 

export class HomePage {
  readonly page: Page; 
  readonly demoqa_bookStore_button: Locator;
  readonly demoqa_bookStore_text: Locator;
  readonly demoqa_header_src: Locator;
  readonly demoqa_header_href: Locator;
  readonly demoqa_sub_header_bookstore: Locator;
  readonly demoqa_pattern_background_header: Locator;
  readonly demoqa_search: Locator;
  readonly demoqa_search_book: Locator;
  readonly demoqa_search_book_click: Locator;
  readonly demoqa_login: Locator;
  readonly demoqa_login_welcome: Locator;
  readonly demoqa_login_book_store: Locator;
  readonly demoqa_login_new_user_click: Locator;
  readonly demoqa_login_user_fname_input: Locator;
  readonly demoqa_login_user_lname_input: Locator;
  readonly demoqa_login_user_uname_input: Locator;
  readonly demoqa_login_password_input: Locator;
  readonly demoqa_login_invalid: Locator;
  readonly demoqa_bookStore_uname_label: Locator;
  readonly demoqa_bookStore_uname_text: Locator;

  readonly demoqa_book_isbn_label: Locator;
  readonly demoqa_book_title_label: Locator;
  readonly demoqa_book_subTitle_label: Locator;
  readonly demoqa_book_author_label: Locator;
  readonly demoqa_book_publisher_label: Locator;
  readonly demoqa_book_total_pages_label: Locator;
  readonly demoqa_book_description_label: Locator;
  readonly demoqa_book_website_label: Locator;

  readonly demoqa_book_isbn_value: Locator;
  readonly demoqa_book_title_value : Locator;
  readonly demoqa_book_subTitle_value: Locator;
  readonly demoqa_book_author_value: Locator;
  readonly demoqa_book_publisher_value: Locator;
  readonly demoqa_book_total_pages_value: Locator;
  readonly demoqa_book_description_value: Locator;
  readonly demoqa_book_website_value: Locator;

constructor(page: Page) {
  this.page = page;


      this.demoqa_bookStore_button = page.getByRole('heading', { name: 'Book Store Application' })
    
  //this.demoqa_bookStore_button = page.locator("//h5[text()= 'Book Store Application']");
   // this.demoqa_bookStore_text= page.getByText('Book Store Application');
    this.demoqa_bookStore_text = page.getByLabel('Book Store Application')
    .filter({hasText: 'Book Store Application'});

    this.demoqa_header_src= page.locator("//img[@src='/images/Toolsqa.jpg']");
    this.demoqa_header_href= page.locator("//a[@href='https://demoqa.com']");
    this.demoqa_sub_header_bookstore = page.locator("//div[@class='main-header'][text()='Book Store']");
    this.demoqa_pattern_background_header= page.locator("//div[@class='body-height']/div/div[@class='pattern-background playground-body']");
    this.demoqa_search = page.locator("//*[@id='searchBox']");
    this.demoqa_search_book= page.locator("//*[@id='");
    this.demoqa_search_book_click= page.locator("//a[text()='");
    this.demoqa_login= page.locator("//*[@id='login']");
    this.demoqa_login_welcome= page.locator("//*[@id='userForm']/div/h2");
    this.demoqa_login_book_store= page.locator("//*[@id='userForm']/div/h5");
    this.demoqa_login_new_user_click= page.locator("//*[@id='newUser']");
    this.demoqa_login_user_fname_input= page.locator("//*[@id='firstname-wrapper']/div/input");
    this.demoqa_login_user_lname_input= page.locator("//*[@id='lastname-wrapper']/div/input");
    this.demoqa_login_user_uname_input= page.locator("//*[@id='userName-wrapper']/div/input");
    this.demoqa_login_password_input= page.locator("//*[@id='password-wrapper']/div/input");
    this.demoqa_login_invalid= page.locator("//*[@id='output']/div/p");
    this.demoqa_bookStore_uname_label= page.locator("//*[@id='userName-label']");
    this.demoqa_bookStore_uname_text= page.locator("//*[@id='userName-value']");

    this.demoqa_book_isbn_label= page.locator("//*[@id='ISBN-label']");
    this.demoqa_book_title_label= page.locator("//*[@id='title-label']");
    this.demoqa_book_subTitle_label= page.locator("//*[@id='subtitle-label']");
    this.demoqa_book_author_label= page.locator("//*[@id='author-label']");
    this.demoqa_book_publisher_label= page.locator("//*[@id='publisher-label']");
    this.demoqa_book_total_pages_label= page.locator("//*[@id='pages-label']");
    this.demoqa_book_description_label= page.locator("//*[@id='description-label']");
    this.demoqa_book_website_label= page.locator("//*[@id='website-label']");

    this.demoqa_book_isbn_value= page.locator("//*[@id='ISBN-wrapper']/div[2]/label");
    this.demoqa_book_title_value = page.locator("//*[@id='title-wrapper']/div[2]/label");
    this.demoqa_book_subTitle_value= page.locator("//*[@id='subtitle-wrapper']/div[2]/label");
    this.demoqa_book_author_value= page.locator("//*[@id='author-wrapper']/div[2]/label");
    this.demoqa_book_publisher_value= page.locator("//*[@id='publisher-wrapper']/div[2]/label");
    this.demoqa_book_total_pages_value= page.locator("//*[@id='pages-wrapper']/div[2]/label");
    this.demoqa_book_description_value= page.locator("//*[@id='description-wrapper']/div[2]/label");
    this.demoqa_book_website_value= page.locator("//*[@id='website-wrapper']/div[2]/label");
  };

  async navigate(){
    await this.page.goto("https://demoqa.com/"); 
    
  }
  async pageTitle(){
    
    await expect(this.page).toHaveTitle("DEMOQA"); 
    
  }
};
