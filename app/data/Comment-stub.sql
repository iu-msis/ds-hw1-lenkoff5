DROP TABLE IF EXISTS Class;

CREATE TABLE Class (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment VARCHAR(255) NOT NULL
);

INSERT INTO Class (id, comment)
VALUES (1, 'Go Cardinals');
INSERT INTO Class (id, comment)
VALUES (2, 'I love MSIS');
INSERT INTO Class (id, comment)
VALUES (3, 'I am a huge Billy Joel fan');
INSERT INTO Class (id, comment)
VALUES (4, 'Wine is good');
