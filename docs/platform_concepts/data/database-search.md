---
title: Database Search
sidebar_label : Database Search
---

### How to search Database?

As you can see in the screenshot below, we have a userdata table where we're storing super important and classified information of Superheros. Now, to search in this database we've two options.

![User Data DB](https://cdn.yellowmessenger.com/IayOU3SuI8Q01616761692169.png)

#### **1. Search using search bar:**

In the search bar you can enter your search string and results will be showed below. You can also select in which column you want to search from the `All fields` dropdown menu.

![Search DB](https://cdn.yellowmessenger.com/yloJuXwtyJz21616761857240.png)

#### **2. Search using query:**

Go to Data > Developer tools and select table. In the `Query` section, you can enter your query and Output will be shown on the right.

For example, to search which Superheros lives in the Gotham city you can write a query like this:

```
{
    "query":{
        "match":{
            "city": "Gotham" // search keyword
        }
    }
}
```
![Query DB](https://cdn.yellowmessenger.com/KqGlwDEAuqhj1616761866852.png)


#### **3. Search using database search action node:**

In the Builder, Database search action node can be used to search the database. For more, checkout [Database Action node documentation](../studio/steps/action-nodes-and-logic#search).