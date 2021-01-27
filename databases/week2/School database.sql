-- Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE `Class` (
id int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(50) NOT NULL,
begins DATE ,
ends DATE);

-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `Student` (
id int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(50) NOT NULL,
email VARCHAR(50) ,
phone INT,
class_id INT,
CONSTRAINT FOREIGN KEY (class_id) REFERENCES Class (id) );

-- Create an index on the name column of the student table.
CREATE INDEX indx_name ON Student (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class ADD status ENUM('not-started', 'ongoing', 'finished');