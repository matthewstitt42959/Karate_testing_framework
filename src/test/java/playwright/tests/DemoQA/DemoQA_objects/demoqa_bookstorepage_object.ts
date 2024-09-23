import {expect, type Locator, type Page} from '@playwright/test'; 

export class BookstorePage {
  readonly page: Page; 
  demoqa_header_href: string;
  bookName: string; 
  demoqa_bookStore_search: Locator;
  demoqa_bookStore_searchButton: Locator;
  demoqa_header_src: Locator;

    demoqa_bookStore_login: Locator;
    demoqa_bookStore_bookh_Image_label: Locator;
    demoqa_bookStore_bookh_Title_label: Locator;
    demoqa_bookStore_bookh_Author_label: Locator;
    demoqa_bookStore_bookh_Publisher_label: Locator;
    demoqa_bookStore_book_image1: Locator;
    demoqa_bookStore_book_title: Locator;
    demoqa_login_book_store: Locator;
    demoqa_login_new_user_click: Locator;
    demoqa_login_user_fname_input: Locator;
    demoqa_login_user_lname_input: Locator;
    demoqa_login_user_uname_input: Locator;
    demoqa_login_password_input: Locator;
    demoqa_login_invalid: Locator;
    demoqa_bookStore_uname_label: Locator;
    demoqa_bookStore_uname_text: Locator;

    demoqa_book_isbn_label: Locator;
    demoqa_book_title_label: Locator;
    demoqa_book_subTitle_label: Locator;
    demoqa_book_author_label: Locator;
    demoqa_book_publisher_label: Locator;
    demoqa_book_total_pages_label: Locator;
    demoqa_book_description_label: Locator;
    demoqa_book_website_label: Locator;

    demoqa_book_isbn_value: Locator;
    demoqa_book_title_value : Locator;
    demoqa_book_subTitle_value: Locator;
    demoqa_book_author_value: Locator;
    demoqa_book_publisher_value: Locator;
    demoqa_book_total_pages_value: Locator;
    demoqa_book_description_value: Locator;
    demoqa_book_website_value: Locator;

constructor(page: Page, bookName) {
  this.page = page;

    this.demoqa_bookStore_search = page.getByPlaceholder('Type to search');
    this.demoqa_bookStore_searchButton= page.getByRole('img')
    this.demoqa_bookStore_login = page.getByRole('button', 
      {name: 'Login'}); 
    this.demoqa_bookStore_bookh_Image_label = page.getByText('Image'); 
    this.demoqa_bookStore_bookh_Title_label = page.getByText('Title'); 
    this.demoqa_bookStore_bookh_Author_label = page.getByText('Author'); 
    this.demoqa_bookStore_bookh_Publisher_label = page.getByText('Publisher'); 
    this.demoqa_bookStore_book_image1 = page.getByRole('img', 
    ); 
    this.demoqa_bookStore_book_title = page.getByText(bookName); 

    this.demoqa_header_href= "https://demoqa.com/books"
  
  };

  async navigate(){
    await this.page.goto("https://demoqa.com/books"); 
  }
  async pageTitle(){
    await expect(this.page).toHaveTitle("DEMOQA"); 
    
  }
};
