CREATE TABLE `posts` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`title` varchar(256) NOT NULL,
	`markdown` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()));
