/* PIVOT table way */
SELECT
	content.ID,
	content.typeID,
	content.datein,
	content.edited_datein,
	MAX(IF(inputs.ID = '11', content_values.value, NULL)) AS '1|heading',
	MAX(IF(inputs.ID = '5', content_values.value, NULL))  AS '1|synopsis',
	MAX(IF(inputs.ID = '6', content_values.value, NULL))  AS '1|article',
	MAX(IF(inputs.ID = '7', content_values.value, NULL))  AS '1|publishDate',
	MAX(IF(inputs.ID = '8', content_values.value, NULL))  AS '1|category',
	MAX(IF(inputs.ID = '9', content_values.value, NULL))  AS '1|authorID',
	MAX(IF(inputs.ID = '10', content_values.value, NULL)) AS '1|tags',
	MAX(IF(inputs.ID = '12', content_values.value, NULL)) AS '3|category',
	MAX(IF(inputs.ID = '2', content_values.value, NULL))  AS '3|url'
FROM content
	LEFT JOIN (content_values
		LEFT JOIN inputs ON content_values.inputID = inputs.ID) ON content.ID = content_values.contentID
GROUP BY content.ID
HAVING `1|category` = '5' AND typeID = '1'
ORDER BY `1|category` ASC
LIMIT 0, 3;

/* sub query way */
SELECT
	content.ID,
	content.typeID,
	content.datein,
	content.edited_datein,
	content.data,
	(SELECT `value`	 FROM content_values WHERE contentID = content.ID AND inputID = '11'	 LIMIT 0, 1) AS '1|heading',
	(SELECT `value`	 FROM content_values WHERE contentID = content.ID AND inputID = '5'	 LIMIT 0, 1) AS '1|synopsis',
	(SELECT `value`	 FROM content_values WHERE contentID = content.ID AND inputID = '6'	 LIMIT 0, 1) AS '1|article',
	(SELECT `value`	 FROM content_values WHERE contentID = content.ID AND inputID = '7'	 LIMIT 0, 1) AS '1|publishDate',
	(SELECT `value`	 FROM content_values WHERE contentID = content.ID AND inputID = '8'	 LIMIT 0, 1) AS '1|category',
	(SELECT `value`	 FROM content_values WHERE contentID = content.ID AND inputID = '9'	 LIMIT 0, 1) AS '1|authorID',
	(SELECT `value`	 FROM content_values WHERE contentID = content.ID AND inputID = '10'	 LIMIT 0, 1) AS '1|tags',
	(SELECT `value`	 FROM content_values WHERE contentID = content.ID AND inputID = '12'	 LIMIT 0, 1) AS '3|category',
	(SELECT `value`	 FROM content_values WHERE contentID = content.ID AND inputID = '2'	 LIMIT 0, 1) AS '3|url'
FROM content
HAVING `1|category` = '5' AND typeID = '1'
ORDER BY `1|category` ASC
LIMIT 0, 3; 