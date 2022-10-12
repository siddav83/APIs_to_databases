DROP TABLE IF EXISTS characters;

CREATE TABLE characters (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    age int NOT NULL,
    house_id int
);

DROP TABLE IF EXISTS houses;

CREATE TABLE houses (
    id serial PRIMARY KEY,
    name varchar(50) NOT NULL,
    sigil varchar(255)
);
