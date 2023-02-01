# Restaurant Porject

This is an app where people may review restaurnts

Makes use of express / react, making different routes and controllers

| Method | Path                     | Purpose                  |
| ------ | ------------------------ | ------------------------ |
| Get    | /                        | Home Page                |
| Get    | /places                  | Places index Page        |
| Post   | /places                  | Create New Places        |
| Get    | /places/new              | Form page for new places |
| Get    | /places/:id              | details of a place       |
| Put    | /places/:id              | update a place           |
| Get    | /places/:id/edit         | form for editing         |
| Delete | /places/:id              | deleting a place         |
| Post   | /places/:id/rant         | creat a comment          |
| Delete | /places/:id/rant/:rantid | delete a comment         |
| Get    | \*                       | 404 page                 |

| place            | city     | state | cuisine  |
| ---------------- | -------- | ----- | -------- |
| great wall south | clt      | nc    | chinese  |
| boading          | clt      | nc    | chinese  |
| ichiban          | brooklyn | nyc   | japanese |
| musashi          | clt      | nc    | japanese |
