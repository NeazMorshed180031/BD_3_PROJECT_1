Movie Recommendation Engine
=====================================
[![Build Status](https://travis-ci.org/julesbond007/movie-recommendation-api.svg?branch=master)](https://travis-ci.org/julesbond007/movie-recommendation-api)
[![Coverage Status](https://coveralls.io/repos/github/julesbond007/movie-recommendation-api/badge.svg?branch=master)](https://coveralls.io/github/julesbond007/movie-recommendation-api?branch=master)

A simple movie recommendation engine based on [Apache Mahout](https://mahout.apache.org/) machine learning library.  This is a Jersey REST API with persistence using Spring Data/Hibernate/JPA.  Although it's a simple application, it is a real recommendation engine with data stored in a MySQL database.  

The idea is simple. Given:

<ol>
    <li> A list of users</li>
    <li> A list of movies</li>
    <li> Similarity between movie 1 and movie 2</li>
    <li> Partial users' preferences for the movies</li>
</ol>

Recommend a set of movies that the user would enjoy.

Setup
-------
1. Install docker and docker-compose if not already installed `brew install docker && brew install docker-compose`
2. run `./gradlew clean build -x test` to skip tests
3. optionally run `./gradlew clean build`, update [test.properties](https://github.com/julesbond007/movie-recommendation-api/blob/master/src/main/resources/META-INF/properties/test.properties) with correct username/password to local database
3. run docker`docker-compose up`

On Startup, the application runs these 2 scripts under: `src/main/resources/META-INF/data/sql` :

1. [recreate tables](https://github.com/julesbond007/movie-recommendation-engine/blob/master/src/main/resources/META-INF/data/sql/ddl.sql)
2. [populate data](https://github.com/julesbond007/movie-recommendation-engine/blob/master/src/main/resources/META-INF/data/sql/init.sql)



REST API Example:
```bash
GET http://localhost:8080/movies/api/v1/users/2/recommendations?limit=2
```

API Response:
```json
[
  {
    "genre": "DRAMA",
    "id": 1721,
    "rating": 5,
    "name": "titanic",
    
  },
  {
    "genre": "FAMILY",
    "id": 45517,
    "rating":4.5,
    "name": "cars",
   
  }
]
```

Try an invalid user with id 9000:
```java
GET http://localhost:8080/movies/api/v1/users/9000/recommendations?limit=2
```

Response:
```json
{
    "status": 404,
    "info": "No user found with id: 9000",
    "requestId": "880a6889-3969-43dc-9de1-4692d69ff807"
}
```
![image](https://user-images.githubusercontent.com/80017048/167564195-c39d890c-11f6-4127-a0f0-5ba80cfdfa16.png)
![image](https://user-images.githubusercontent.com/80017048/167564448-08b8b1bf-067e-4962-9326-7fd9124b93eb.png)
![image](https://user-images.githubusercontent.com/80017048/167564544-e2843185-2e2a-4e02-adf7-0a5ea9ed73d9.png)
![image](https://user-images.githubusercontent.com/80017048/167564801-b3d5c624-4d41-4e73-9d22-3fe8c46d7b3f.png)
![image](https://user-images.githubusercontent.com/80017048/167564881-986020a3-cdfb-4163-be52-dd855f59b462.png)






