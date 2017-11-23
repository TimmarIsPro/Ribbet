import { Component } from '@angular/core';
import {Article} from "./article/article.model";
import {TheTimeComponent} from './the-time/the-time.component';
// import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ribbet Application';

  articles: Article[];

  itsTime: TheTimeComponent;

  constructor() {
    this.articles = [
      new Article("Ionic Material", "http://ionicmaterial.com", 7),
      new Article("Angular", "http://angular.io", 4),
      new Article("Fullstack", "http://fullstack.io", 3),
      new Article("Ionic ", "http://ionicframework.com", 6),
      new Article("NodeJS", "https://nodejs.org/en/"),

    ];
    this.itsTime = new TheTimeComponent();
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  displayArticles() : Article[]
  { //displays all articles in a jumbled state
    return this.articles
  }

  sortedArticlesByDomain(dir:string) : Article[]
  {//sort ascending or descending depending on input
    return this.articles.sort(
      function(a: Article, b:Article)
      {
        if (dir == 'asc')
        {
          if (a.domain() > b.domain())
          {
            return 1
          }
          else if (a.domain() < b.domain())
          {
            return -1
          }
          else
          {
            return 0
          }
        }
        else if (dir == 'desc')
        {
          if (a.domain() < b.domain())
          {
            return 1
          }
          else if (a.domain() > b.domain())
          {
            return -1
          }
          else
          {
            return 0
          }
        }
      }
    );
  }

  sortedArticlesByVotes(dir:string) : Article[]
  {//sort ascending or descending depending on input
    return this.articles.sort(
      function(a: Article, b:Article)
      {
        if (dir == 'asc')
        {
          if (a.votes > b.votes)
          {
            return 1
          } else if (a.votes < b.votes)
          {
            return -1
          } else
          {
            return 0
          }
        }
        else if (dir == 'desc')
        {
          if (a.votes < b.votes)
          {
            return 1
          } else if (a.votes > b.votes)
          {
            return -1
          } else
          {
            return 0
          }
        }
      }
    )
  }

  sortedArticlesByTitle(dir:string) : Article[]
  {//sort ascending or descending depending on input
    return this.articles.sort(
      function(a: Article, b:Article)
      {
        if (dir == 'asc')
        {
          if (a.title > b.title)
          {
            return 1
          } else if (a.title < b.title)
          {
            return -1
          } else
          {
            return 0
          }
        }
        else if (dir == 'desc')
        {
          if (a.title < b.title)
          {
            return 1
          } else if (a.title > b.title)
          {
            return -1
          } else
          {
            return 0
          }
        }
      }
    )
  }

  sortedArticles(sortBy?:string, direction?:string)
  //Calls relevant sorting method to do the thing.
  {
    if (sortBy == 'domain')
    {
        this.sortedArticlesByDomain(direction);
    }
    else if (sortBy == 'title')
    {
      this.sortedArticlesByTitle(direction);
    }
    else if (sortBy == 'votes')
      {
        this.sortedArticlesByVotes(direction);
      }

    return false;
  }
}
