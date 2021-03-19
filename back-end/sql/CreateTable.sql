--- Simplest implementation ( single user by database )
CREATE TABLE Movies (
    Id SERIAL PRIMARY KEY,
    Title VARCHAR(100),
    IMG VARCHAR(100),
    Rating INT,
    Comments TEXT
);


--- Hybrid table
CREATE TABLE Movies (
    Id SERIAL PRIMARY KEY,
    UserID INT,
    FilmID VARCHAR(50),
    Title VARCHAR(100),
    IMG VARCHAR(100),
    Rating INT,
    Comments TEXT
);

-- Original table proposed ( multiple users etc)
CREATE TABLE Movies (
    Id SERIAL PRIMARY KEY,
    UserID SECONDARY KEY NOT NULL,
    FilmID VARCHAR(50) NOT NULL,
    Rating INT,
    Category VARCHAR(50),
    Comments TEXT
);


-- Insert statement 
INSERT INTO
    Journal (UserID, FilmID)
VALUES
    ('101qw');
    INSERT INTO
    Journal (JournalEntry)
VALUES
    ('Hackathon today....');