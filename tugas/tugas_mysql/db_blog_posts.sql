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