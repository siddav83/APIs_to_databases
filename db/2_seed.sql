
INSERT INTO houses (name, sigil) 
VALUES
    ('Stark', 'Direwolf' ),
    ('Lannister', 'Lion' ),
    ('Targaryen', 'Dragon' ),
    ('Mormont', 'Bear' );

INSERT INTO characters (name, age, house_id) 
VALUES
    ('Jon Snow', 30, 1),
    ('Daenerys Targaryen', 29, 3),
    ('Tyrion Lannister', 40, 2),
    ('Lyra Mormont', 12, 4),
    ('Samwell Tarly', 30, null),
    ('Ned Stark', 50, 1);
