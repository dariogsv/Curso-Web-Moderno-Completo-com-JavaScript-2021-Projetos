CREATE TABLE diary(
	id INT NOT NULL AUTO_INCREMENT,
    activity varchar(50),
    startDate varchar(20),
    startHour varchar(20),
    stopDate varchar(20),
    stopHour varchar(20),
    descript varchar(100),
    PRIMARY KEY (id)
);

ALTER TABLE diary 
CHANGE activitie activity varchar(50);

ALTER TABLE diary
ADD tag varchar(50);

INSERT INTO diary 
	(activity, startDate, startHour, stopDate, stopHour, descript, tag) VALUES 
	('leitura do uncle bob', '17-06-2014', '15:00', '17-06-2014', '15:30', 'Fiz o que pude com o tinha a minha disposição', 'Programação'),
    ('leitura do uncle bob', '21-06-2014', '15:00', '21-06-2014', '15:30', 'Li 10 páginas', 'Programação'),
    ('ingles', '23-06-2014', '10:00', '23-06-2014', '12:30', 'Fiz 3 exercícios', 'Idiomas');
    
SELECT * FROM diary;
    