-- Table 1
mysqlassigment_db=# CREATE TABLE Movies (
mysqlassigment_db(#     movie_id serial PRIMARY KEY,
mysqlassigment_db(#     title VARCHAR(255),
mysqlassigment_db(#     release_year INTEGER,
mysqlassigment_db(#     duration INTEGER
mysqlassigment_db(# );
CREATE TABLE


-- Table 2
mysqlassigment_db=# CREATE TABLE Movies (
mysqlassigment_db(#     hall_id serial PRIMARY KEY,
mysqlassigment_db(#     hall_name VARCHAR(255),
mysqlassigment_db(#     seating_capacity INTEGER
mysqlassigment_db(# );
CREATE TABLE

-- Table 3
egbodennisokechukwu=# \c mysqlassigment_db
You are now connected to database "mysqlassigment_db" as user "egbodennisokechukwu".
mysqlassigment_db=# CREATE TABLE Showtimes (
mysqlassigment_db(#     showtime_id serial PRIMARY KEY,
mysqlassigment_db(#     movie_id INT REFERENCES Movies(movie_id),
mysqlassigment_db(#     hall_id INT REFERENCES CinemaHalls(hall_id),
mysqlassigment_db(#     showtime_date TIMESTAMP,
mysqlassigment_db(#     ticket_price DECIMAL(10, 2)
mysqlassigment_db(# );
CREATE TABLE

-- Check Table
mysqlassigment_db=# \dt
                 List of relations
 Schema |    Name     | Type  |        Owner        
--------+-------------+-------+---------------------
 public | cinemahalls | table | egbodennisokechukwu
 public | movies      | table | egbodennisokechukwu
 public | showtimes   | table | egbodennisokechukwu
(3 rows)

-- Table 4
mysqlassigment_db=# CREATE TABLE Tickets (
mysqlassigment_db(#     ticket_id serial PRIMARY KEY,
mysqlassigment_db(#     showtime_id INT REFERENCES Showtimes(showtime_id),
mysqlassigment_db(#     seat_number VARCHAR(10),
mysqlassigment_db(#     customer_name VARCHAR(255),
mysqlassigment_db(#     purchase_date TIMESTAMP
mysqlassigment_db(# );
CREATE TABLE
mysqlassigment_db=# \dt  

-- Checking Tables
                 List of relations
 Schema |    Name     | Type  |        Owner        
--------+-------------+-------+---------------------
 public | cinemahalls | table | egbodennisokechukwu
 public | movies      | table | egbodennisokechukwu
 public | showtimes   | table | egbodennisokechukwu
 public | tickets     | table | egbodennisokechukwu
(4 rows)

mysqlassigment_db=# INSERT INTO Tickets (showtime_id, seat_number, customer_name, purchase_date)
mysqlassigment_db-# VALUES (1, 'A1', 'John Doe', '2023-10-26 14:30:00');
ERROR:  insert or update on table "tickets" violates foreign key constraint "tickets_showtime_id_fkey"
DETAIL:  Key (showtime_id)=(1) is not present in table "showtimes".
mysqlassigment_db=# INSERT INTO Tickets (showtime_id, seat_number, customer_name, purchase_date)
mysqlassigment_db-# VALUES (1, 'A1', 'John Doe', '2023-10-26 14:30:00');
ERROR:  insert or update on table "tickets" violates foreign key constraint "tickets_showtime_id_fkey"
DETAIL:  Key (showtime_id)=(1) is not present in table "showtimes".
mysqlassigment_db=# INSERT INTO Tickets (seat_number, customer_name, purchase_date)
mysqlassigment_db-# VALUES (1, 'A1', 'John Doe', '2023-10-26 14:30:00');
ERROR:  INSERT has more expressions than target columns
LINE 2: VALUES (1, 'A1', 'John Doe', '2023-10-26 14:30:00');
                                     ^
mysqlassigment_db=# INSERT INTO Tickets (seat_number, customer_name, purchase_date)
mysqlassigment_db-# VALUES (1, 'A1', 'John Doe', '2023-10-26');
ERROR:  INSERT has more expressions than target columns
LINE 2: VALUES (1, 'A1', 'John Doe', '2023-10-26');
                                     ^
mysqlassigment_db=# 
 *  History restored 

egbodennisokechukwu@Egbos-MacBook-Pro okeqa % /private/var/folders/hg/8v695gt11_lc0r3y0438041c0000gn/T/AppTranslocation/D7C93125-4393-4787-8823-FFED93ABCFE4/d/Postgres.app/Contents/Versions/16/bin/psql
psql (16.0)
Type "help" for help.

egbodennisokechukwu=# \c mysqlassigment_d
connection to server on socket "/tmp/.s.PGSQL.5432" failed: FATAL:  database "mysqlassigment_d" does not exist
Previous connection kept
egbodennisokechukwu=# 
egbodennisokechukwu=# \c mysqlassigment_d
connection to server on socket "/tmp/.s.PGSQL.5432" failed: FATAL:  database "mysqlassigment_d" does not exist
Previous connection kept
egbodennisokechukwu=# \c mysqlassigment_db
You are now connected to database "mysqlassigment_db" as user "egbodennisokechukwu".
mysqlassigment_db=# INSERT INTO Tickets (showtime_id, seat_number, customer_name, purchase_date)
mysqlassigment_db-# VALUES (1, 'A1', 'John Doe', '2023-10-26 14:30:00');
ERROR:  insert or update on table "tickets" violates foreign key constraint "tickets_showtime_id_fkey"
DETAIL:  Key (showtime_id)=(1) is not present in table "showtimes".
mysqlassigment_db=# SELECT * FROM Showtimes;
 showtime_id | movie_id | hall_id | showtime_date | ticket_price 
-------------+----------+---------+---------------+--------------
(0 rows)

mysqlassigment_db=# SELECT * FROM Movies;
 movie_id | title | release_year | duration 
----------+-------+--------------+----------
(0 rows)

-- Update Table 1
mysqlassigment_db=# INSERT INTO Movies (title, release_year, duration)
mysqlassigment_db-# VALUES ('Movie Title 1', 2022, 120);
INSERT 0 1
mysqlassigment_db=# SELECT * FROM Movies;                                               
 movie_id |     title     | release_year | duration 
----------+---------------+--------------+----------
        1 | Movie Title 1 |         2022 |      120
(1 row)

mysqlassigment_db=# INSERT INTO Movies (title, release_year, duration)
mysqlassigment_db-# VALUES ('Movie Title 2', 2023, 135);
INSERT 0 1
mysqlassigment_db=# SELECT * FROM Movies;                                               
 movie_id |     title     | release_year | duration 
----------+---------------+--------------+----------
        1 | Movie Title 1 |         2022 |      120
        2 | Movie Title 2 |         2023 |      135
(2 rows)

-- Check Table 2
mysqlassigment_db=# SELECT * FROM CinemaHalls;
 hall_id | hall_name | seating_capacity 
---------+-----------+------------------
(0 rows)

-- Update Table 2
mysqlassigment_db=# INSERT INTO CinemaHalls (hall_name, seating_capacity)
mysqlassigment_db-# VALUES ('Hall 1', 100);
INSERT 0 1
mysqlassigment_db=# INSERT INTO CinemaHalls (hall_name, seating_capacity)
mysqlassigment_db-# VALUES ('Hall 2', 150);
INSERT 0 1
mysqlassigment_db=# SELECT * FROM CinemaHalls;                                          
 hall_id | hall_name | seating_capacity 
---------+-----------+------------------
       1 | Hall 1    |              100
       2 | Hall 2    |              150
(2 rows)


-- Check Table 3
mysqlassigment_db=# SELECT * FROM Showtimes;
 showtime_id | movie_id | hall_id | showtime_date | ticket_price 
-------------+----------+---------+---------------+--------------
(0 rows)

-- Update Table 3
mysqlassigment_db=# INSERT INTO Showtimes (movie_id, hall_id, showtime_date, ticket_price)
mysqlassigment_db-# VALUES (1, 1, '2023-10-26 14:30:00', 10.50);
INSERT 0 1
mysqlassigment_db=# INSERT INTO Showtimes (movie_id, hall_id, showtime_date, ticket_price)
mysqlassigment_db-# VALUES (2, 2, '2023-10-27 15:00:00', 12.75);
INSERT 0 1
mysqlassigment_db=# SELECT * FROM Showtimes;                                            
 showtime_id | movie_id | hall_id |    showtime_date    | ticket_price 
-------------+----------+---------+---------------------+--------------
           1 |        1 |       1 | 2023-10-26 14:30:00 |        10.50
           2 |        2 |       2 | 2023-10-27 15:00:00 |        12.75
(2 rows)


-- Check Table
mysqlassigment_db=# SELECT * FROM Tickets;
 ticket_id | showtime_id | seat_number | customer_name | purchase_date 
-----------+-------------+-------------+---------------+---------------
(0 rows)

-- Update Table 4
mysqlassigment_db=# INSERT INTO Tickets (showtime_id, seat_number, customer_name, purchase_date)
mysqlassigment_db-# VALUES (1, 'A1', 'John Doe', '2023-10-26 14:30:00');
INSERT 0 1
mysqlassigment_db=# INSERT INTO Tickets (showtime_id, seat_number, customer_name, purchase_date)
mysqlassigment_db-# VALUES (2, 'B2', 'Jane Smith', '2023-10-27 15:00:00');
INSERT 0 1
mysqlassigment_db=# SELECT * FROM Tickets;                                              
 ticket_id | showtime_id | seat_number | customer_name |    purchase_date    
-----------+-------------+-------------+---------------+---------------------
         4 |           1 | A1          | John Doe      | 2023-10-26 14:30:00
         5 |           2 | B2          | Jane Smith    | 2023-10-27 15:00:00
(2 rows)

--  Check all the tables in the database
mysqlassigment_db=# \dt
                 List of relations
 Schema |    Name     | Type  |        Owner        
--------+-------------+-------+---------------------
 public | cinemahalls | table | egbodennisokechukwu
 public | movies      | table | egbodennisokechukwu
 public | showtimes   | table | egbodennisokechukwu
 public | tickets     | table | egbodennisokechukwu
(4 rows)
