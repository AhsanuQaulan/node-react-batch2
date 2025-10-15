-- Menggunakan database yang relevan
USE db_blog_posts;

-- Mengisi data untuk tabel USERS
INSERT INTO USERS (id, name) VALUES
(1, 'John Doe'),
(2, 'Robert'),
(3, 'Frank'),
(4, 'Jane');

-- Mengisi data untuk tabel CATEGORIES
INSERT INTO CATEGORIES (id, name) VALUES
(1, 'Basic'),
(2, 'Library'),
(3, 'Unknown'),
(4, 'Sport');

-- Mengisi data untuk tabel BLOG_POSTS
INSERT INTO BLOG_POSTS (id, title, body, author_id) VALUES
(1, 'Algorithm', 'this is article for algorithm', 1),
(2, 'Lorem Ipsum', 'lorem ipsum dolor sit amet', 1),
(3, 'NodeJS', 'Node.js is a JavaScript runtime built on Chrome''s V8 JavaScript engine.', 2),
(4, 'ReactJS', 'ReactJS is JavaScript library for building user interfaces', 4),
(5, 'Git', 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency', 3),
(6, 'Basketball', 'Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender''s hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court, while preventing the opposing team from shooting through their own hoop', 2);

-- Mengisi data untuk tabel POST_CATEGORIES
INSERT INTO POST_CATEGORIES (post_id, category_id) VALUES
(1, 1),
(2, 3),
(3, 1),
(3, 2),
(4, 2),
(4, 1),
(5, 1),
(6, 4);

SELECT
  bp.*
FROM BLOG_POSTS AS bp
JOIN USERS AS u
  ON bp.author_id = u.id
WHERE
  u.name = 'John Doe';
  
SELECT
  c.name AS category_name,
  bp.title AS post_title,
  u.name AS author_name
FROM POST_CATEGORIES AS pc
JOIN BLOG_POSTS AS bp
  ON pc.post_id = bp.id
JOIN CATEGORIES AS c
  ON pc.category_id = c.id
JOIN USERS AS u
  ON bp.author_id = u.id
WHERE
  c.name = 'Basic';
  
SELECT
  c.name AS category_name,
  bp.title AS post_title,
  bp.body
FROM POST_CATEGORIES AS pc
JOIN BLOG_POSTS AS bp
  ON pc.post_id = bp.id
JOIN CATEGORIES AS c
  ON pc.category_id = c.id
JOIN USERS AS u
  ON bp.author_id = u.id
WHERE
  u.name IN ('Robert', 'Frank');
  
SELECT
  u.name AS author_name,
  c.name AS category_name
FROM USERS AS u
JOIN BLOG_POSTS AS bp
  ON u.id = bp.author_id
JOIN POST_CATEGORIES AS pc
  ON bp.id = pc.post_id
JOIN CATEGORIES AS c
  ON pc.category_id = c.id
WHERE
  bp.id IN (
    SELECT
      post_id
    FROM POST_CATEGORIES
    GROUP BY
      post_id
    HAVING
      COUNT(category_id) >= 2
  );
  
SELECT
  u.name AS author_name,
  bp.title AS post_title
FROM USERS AS u
JOIN BLOG_POSTS AS bp
  ON u.id = bp.author_id
WHERE
  bp.id IN (
    SELECT
      post_id
    FROM POST_CATEGORIES
    GROUP BY
      post_id
    HAVING
      COUNT(category_id) = 1
  );