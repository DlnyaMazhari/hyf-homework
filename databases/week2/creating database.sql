SET NAMES utf8mb4;
CREATE DATABASE Restaurant;
USE Restaurant;

CREATE TABLE Chefs (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  salary INT NOT NULL,
  job_shift VARCHAR(45) NOT NULL,
  starting_date DATE,
  phone VARCHAR(45) NULL,
  address VARCHAR(245) NOT NULL);
  
  CREATE TABLE menu_food_list (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(245) NOT NULL, 
  type VARCHAR(245) NOT NULL,
  description TEXT NULL,
  status VARCHAR(45) NOT NULL
  );
  
CREATE TABLE Chefs_food_task (
    Chefs_id INT,
    food_id INT,
    FOREIGN KEY (Chefs_id)
        REFERENCES Chefs (id),
    FOREIGN KEY (food_id)
        REFERENCES menu_food_list (id),
        PRIMARY KEY (Chefs_id, food_id)
);

