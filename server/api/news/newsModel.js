const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e130320d98d94190b1b9949ac3bf8ac0');

exports.topheadlines = function(query){

    return new Promise(function(resolve, reject){
        newsapi.v2.topHeadlines({
            q: query,
            //category: 'business',
            language: 'en',
            //country: 'us'
          }).then(response => {
              console.log(response);
                if(response.articles.length == 0){
                    resolve("No News about " + query);
                } else {
                    var messages = "";
                    for(var i = 0; i < 5 && i < response.totalResults; i++){
                        var title = response.articles[i].title,
                        url = response.articles[i].url;
                        messages[response.articles[i].source.id] = {title, url};
                        messages += `source : ${response.articles[i].source.id} \n title : ${title} \n url : ${url} \n\n`;
                    }
                }
            resolve(messages);
          })
          .catch(err => {
            reject(err);
          });
    });
}