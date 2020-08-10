export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  blogLogo: string;

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
  instagram?: string;
  email?: string;
  linkedin?: string;

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
  themeColor?: string;
  blogTitle?: string;
  mainDescription?: string;
}

const config: WebsiteConfig = {
  title: 'Soyuj Jung Basnet',
  description: 'A collection of my thoughts, musings, and experiences.',
  mainDescription:
    'A personal portfolio and blogging website of Soyuj Jung Basnet. Thoughts, musings, experiences, tutorials, snippets, articles, and everything else.',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/logo.png',
  blogLogo: 'img/blog-logo.png',
  lang: 'en',
  themeColor: '#26A6ED',
  siteUrl: 'https://soyuj.com.np',
  blogTitle: 'Soyuj Jung Basnet Blogs',
  facebook: 'https://github.com/basnetsoyuj',
  twitter: 'https://twitter.com/basnetsoyuj',
  instagram: 'https://www.instagram.com/basnetsoyuj',
  linkedin: 'https://www.linkedin.com/in/basnetsoyuj',
  email: 'bsoyuj@gmail.com',
  showSubscribe: true,
  mailchimpName: 'sjbblogs',
  mailchimpEmailFieldName: 'email',
  mailchimpAction: 'https://feedburner.google.com/fb/a/mailverify?uri=sjbblogs',
  googleSiteVerification: 'GoogleCode',
  footer: 'Soyuj Jung Basnet',
};

export default config;
