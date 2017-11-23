export class Article {
  /**
   * Article properties
   */
  title: string;
  link: string;
  votes: number;

  /**
   * instantiate the article with the provided data
   *
   * @param(string) title The article's Title
   * @param(string) link The Hyperlink to the article
   * @param (number) votes The numbre of votes for the article [optional]
   */
  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  /**
   * increment and decrement votes
   */
  voteUp(): void {
    this.votes++;
  }

  voteDown(): void
  {
    this.votes--;
  }

  /**
   * extract domain from hyperlink
   */
  domain(): string
  {
    try
    {
      const link: string = this.link.split( "//")[1];
      return link.split("/")[0];
    }
    catch (err)
    {
      return null;
    }
  }




}
