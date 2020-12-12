PostgreSQL COUNT() with GROUP BY clause
To get the number of payments by the customer, you use the  GROUP BY clause to group the payments into groups based on customer id, and use the COUNT() function to count the payments for each group.

The following query illustrates the idea:

SELECT
	customer_id,
	COUNT (customer_id)
FROM
	payment
GROUP BY
	customer_id;