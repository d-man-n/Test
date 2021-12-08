SELECT col.fullname AS fio, col.birth_date AS bdate, learning.score AS score FROM col
LEFT JOIN learning ON col.id = learning.col_id
WHERE col.subdivision_name = 'бухгалтерия' AND learning.course_name = 'excel' AND learning.score > 80