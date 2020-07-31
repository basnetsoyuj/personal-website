export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
  portfolioUrl?: string;
}

const config: WebsiteConfig = {
  title: 'Soyuj Jung Basnet Blogs',
  description: 'A collection of my thoughts, musings, and experiences.',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/logo.png',
  lang: 'en',
  siteUrl: 'https://blog.basnetsoyuj.com.np',
  facebook: 'https://github.com/basnetsoyuj',
  twitter: 'https://twitter.com/basnetsoyuj',
  showSubscribe: true,
  mailchimpName: 'sjbblogs',
  mailchimpEmailFieldName: 'email',
  mailchimpAction: 'https://feedburner.google.com/fb/a/mailverify?uri=sjbblogs',
  googleSiteVerification: 'GoogleCode',
  footer: 'Soyuj Jung Basnet',
  portfolioUrl: 'https://basnetsoyuj.com.np',
};

export default config;
