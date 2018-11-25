CREATE DATABASE names_db;
USE names_db;

CREATE TABLE new_df (
    Name VARCHAR(50),
   Year INT,
   Gender VARCHAR(6),
   State VARCHAR(5),
   Count INT,
   PRIMARY KEY (Name)
);

select* from new_df;
