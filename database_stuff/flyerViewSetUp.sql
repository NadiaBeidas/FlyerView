DROP DATABASE IF EXISTS flyerView;

DROP DATABASE IF EXISTS flyerview;

CREATE DATABASE IF NOT EXISTS flyerView;

USE flyerView;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (uID INT PRIMARY KEY AUTO_INCREMENT, fName VARCHAR(10) NOT NULL, lName VARCHAR(20) NOT NULL, userName VARCHAR(20) NOT NULL UNIQUE);

DROP TABLE IF EXISTS posts;

DROP TABLE IF EXISTS currentEventPosts;

CREATE TABLE IF NOT EXISTS currentEventPosts (postID INT PRIMARY KEY AUTO_INCREMENT, postTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), textOfPost VARCHAR(255), qNum INT NOT NULL);

DROP TABLE IF EXISTS campusEventPosts;

CREATE TABLE IF NOT EXISTS campusEventPosts (postID INT PRIMARY KEY AUTO_INCREMENT, postTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), textOfPost VARCHAR(255), qNum INT NOT NULL);

INSERT INTO currentEventPosts (textOfPost, qNum) VALUES ("This is the discussion.", 1);

INSERT INTO currentEventPosts (textOfPost, qNum) VALUES ("This is the discussion.", 2);

INSERT INTO currentEventPosts (textOfPost, qNum) VALUES ("This is the discussion.", 3);

INSERT INTO campusEventPosts (textOfPost, qNum) VALUES ("This is the discussion.", 1);

INSERT INTO campusEventPosts (textOfPost, qNum) VALUES ("This is the discussion.", 2);

INSERT INTO campusEventPosts (textOfPost, qNum) VALUES ("This is the discussion.", 3);
