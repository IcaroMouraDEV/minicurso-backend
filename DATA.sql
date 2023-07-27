CREATE SCHEMA IF NOT EXISTS library;

CREATE TABLE IF NOT EXISTS library.genre (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS library.publisher (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS library.author (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS library.book (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  author_id INT NOT NULL,
  genre_id INT NOT NULL,
  publisher_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  `resume` VARCHAR(100) NOT NULL,
  cover VARCHAR(100) NOT NULL,
  price FLOAT NOT NULL,
  
  CONSTRAINT FK_author_book
  FOREIGN KEY (author_id)
  REFERENCES library.author(id),
  
  CONSTRAINT FK_publisher_book
  FOREIGN KEY (publisher_id)
  REFERENCES library.publisher(id),

  CONSTRAINT FK_genre_book
  FOREIGN KEY (genre_id)
  REFERENCES library.genre(id)
);

CREATE TABLE IF NOT EXISTS library.sale (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `date` DATETIME NOT NULL DEFAULT NOW(),
  `total` FLOAT NOT NULL
);

CREATE TABLE IF NOT EXISTS library.sale_book (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  book_id INT NOT NULL,
  sale_id INT NOT NULL,
  qtd INT NOT NULL,

  CONSTRAINT FK_book_sale_book
  FOREIGN KEY (book_id)
  REFERENCES library.book(id),

  CONSTRAINT FK_sale_sale_book
  FOREIGN KEY (sale_id)
  REFERENCES library.sale(id)
);
