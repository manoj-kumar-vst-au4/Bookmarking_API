# Bookmarking_API

Backend Assignment - April 2020

Goal

You are going to create the backend API for a bookmarking application (just like chrome bookmarks) using Node/Express and a database of your choice. 

Using this service the user can 

- bookmark a certain web link (like this https://www.nytimes.com/2020/04/14/us/politics/trump-total-authority-claim.html)
- create a tag and attach it to any bookmark (like “politics”)
- retrieve their bookmarks
- retrieve their tags
- manage their bookmarks and tags (just create and delete for now)
Functionality to be supported by the API

These are the various features/endpoints to be supported by the API:


1. Bookmarking
- Create a Bookmark
- Delete a Bookmark


2. Tag
- Create a Tag
- Delete a Tag
- Add a Tag to a Bookmark
- Remove a Tag from a Certain Bookmark


3. Display
- Retrieve all bookmarks
- Retrieve all tags


Solution guidelines
Object guidance

Here is some basic guidance on the important objects in the project. Feel free to modify this or create new objects based on your convenience.

Bookmark
Each bookmark needs to have the following fields

- Id: Unique id of the bookmark (something like UUID)
- Link: Link of the bookmark
- Title: Title of the bookmark
- Time Created: Time when bookmark was created (in epoch time)
- Time updated: Time when bookmark was updated (in epoch time)
- Publisher: Publisher of the bookmark
- Tags: User created tags associated with the given bookmark

Example bookmark

- Id: 04bb723a-7f0f-11ea-bc55-0242ac130003 (UUID)
- Link: https://www.nytimes.com/2020/04/14/us/politics/trump-total-authority-claim.html
- Title: Trump’s Claim of Total Authority in Crisis Is Rejected Across Ideological Lines
- Time Created: 1586951349
- Time Updated: 1586951349
- Publisher: The New York Times
- Tags: 5defccc0-7f0f-11ea-bc55-0242ac130003

Tag
Each tag need to have the following fields

- Id: Unique id of the tag (something like UUID)
- Title: Title of the tag
- Time Created: Time when tag was created (in epoch time)
- Time Updated: Time when tag was created (in epoch time)

Example tag

- Id: 5defccc0-7f0f-11ea-bc55-0242ac130003
- Title: politics
- Time Created: 1586951571
- Time Updated: 1586951571


Assumptions
- Each bookmark link needs to be unique (We cannot have two bookmark entries with the same link)
- Each tag title needs to be unique (We cannot have two tags entries with the same title)
- Each bookmark can have 0 or more tags attached to it
- You do not have to create any user authentication related features (no concept of user or auth etc)


Technology and Submission Guidelines

Please use

- Node/Express for the backend APIs
- Any database of your choice: SQL or NOSQL
- Github for sharing the code
