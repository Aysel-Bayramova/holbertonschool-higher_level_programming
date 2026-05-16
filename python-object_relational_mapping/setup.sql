-- Create database if it does not exist
CREATE DATABASE IF NOT EXISTS hbtn_0e_0_usa;

-- Use the created database
USE hbtn_0e_0_usa;

-- Create states table
CREATE TABLE IF NOT EXISTS states ( 
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);

-- Insert sample data into states table
INSERT INTO states (name) VALUES ("California"), ("Arizona"), ("Texas"), ("New York"), ("Nevada");
