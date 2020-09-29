-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2020 at 05:54 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `urms`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_id` varchar(30) NOT NULL,
  `dept_name` varchar(30) NOT NULL,
  `hod` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `lecturer`
--

CREATE TABLE `lecturer` (
  `lec_id` varchar(30) NOT NULL,
  `dept_id` varchar(30) NOT NULL,
  `lec_name` varchar(30) NOT NULL,
  `lec_email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lecturer`
--

INSERT INTO `lecturer` (`lec_id`, `dept_id`, `lec_name`, `lec_email`) VALUES
('zZun0os4YkRStobl6BnYjdLDTgU2', 'SE2018', 'Pramudhi Perera', 'ppramudhi@ymail.com');

-- --------------------------------------------------------

--
-- Table structure for table `lecturer_result`
--

CREATE TABLE `lecturer_result` (
  `lec_id` varchar(30) NOT NULL,
  `mod_id` varchar(30) NOT NULL,
  `submit_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lecturer_result`
--

INSERT INTO `lecturer_result` (`lec_id`, `mod_id`, `submit_date`) VALUES
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2012', '2020-09-27 17:01:10'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2013', '2020-09-27 17:14:42'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2013', '2020-09-27 17:16:26'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2013', '2020-09-27 17:17:02'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2013', '2020-09-27 17:18:17'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2013', '2020-09-27 17:20:44'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2012', '2020-09-27 17:23:09'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2012', '2020-09-27 17:24:29'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2012', '2020-09-27 17:27:13'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2012', '2020-09-27 17:27:52'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2012', '2020-09-27 17:32:14'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2012', '2020-09-27 17:33:34'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2012', '2020-09-27 17:34:32'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2012', '2020-09-27 17:35:18'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2012', '2020-09-27 17:36:53'),
('ji6JL2yD70YnW5dCWdIKUKu3nQB2', 'CS2012', '2020-09-27 17:44:05'),
('Ls5DlM7fntRwWwYffxbTeWAw1HI3', 'CS2012', '2020-09-27 17:47:23');

-- --------------------------------------------------------

--
-- Table structure for table `module`
--

CREATE TABLE `module` (
  `mod_id` varchar(30) NOT NULL,
  `dep_id` varchar(30) NOT NULL,
  `lec_id` varchar(30) NOT NULL,
  `mod_name` varchar(30) NOT NULL,
  `mod_credit` int(1) NOT NULL,
  `semester` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `module`
--

INSERT INTO `module` (`mod_id`, `dep_id`, `lec_id`, `mod_name`, `mod_credit`, `semester`) VALUES
('CS2012', 'CS2016', '32inUy62tVywo9nH', 'Web Development', 2, 1),
('CS2013', 'SE2018', 'j2u1iP4hfjriEowp', 'Object Oriented Programming I', 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `st_id` varchar(30) NOT NULL,
  `mod_id` varchar(30) NOT NULL,
  `cas` varchar(30) NOT NULL,
  `es_1` varchar(30) NOT NULL,
  `es_2` varchar(30) NOT NULL,
  `final` varchar(30) NOT NULL,
  `mark` varchar(30) NOT NULL,
  `lastUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`st_id`, `mod_id`, `cas`, `es_1`, `es_2`, `final`, `mark`, `lastUpdate`) VALUES
('D/BSE/19/0001', 'CS2012', '72', '78', '45', '45', '', '2020-08-27 17:35:17'),
('D/BSE/19/0004', 'CS2012', '36', '38.25', '38.25', '', '16,2,3,7,3,8', '2020-09-27 17:35:17'),
('D/BSE/19/0007', 'CS2012', '84', '52.5', '52.5', '', '6,3,4,15,10,4', '2020-09-27 17:35:17'),
('D/BSE/19/0010', 'CS2012', '82', '57.25', '57.25', '', '16,0,2,14,2,15', '2020-09-27 17:35:17'),
('D/BSE/19/0013', 'CS2012', '27', '30.75', '30.75', '', '2,2,9,15,3,1', '2020-09-27 17:35:17'),
('D/BSE/19/0016', 'CS2012', '8', '52.25', '52.25', '', '13,13,0,16,12,13', '2020-09-27 17:35:17'),
('D/BSE/19/0019', 'CS2012', '0', '31.5', '31.5', '', '2,12,1,9,8,10', '2020-09-27 17:35:17'),
('D/BSE/19/0022', 'CS2012', '36', '45', '45', '', '7,3,6,2,16,14', '2020-09-27 17:35:17'),
('D/BSE/19/0025', 'CS2012', '50', '50', '50', '', '1,4,11,9,15,10', '2020-09-27 17:35:17'),
('D/BSE/19/0028', 'CS2012', '82', '51.25', '51.25', '', '0,15,8,3,5,10', '2020-09-27 17:35:17'),
('D/BSE/19/0031', 'CS2012', '60', '51.75', '51.75', '', '5,14,0,13,4,13', '2020-09-27 17:35:17'),
('D/BSE/19/0034', 'CS2012', '79', '63.25', '63.25', '', '8,3,9,16,15,7', '2020-09-27 17:35:17'),
('D/BSE/19/0037', 'CS2012', '50', '61.25', '61.25', '', '9,16,15,9,16,0', '2020-09-27 17:35:17'),
('D/BSE/19/0040', 'CS2012', '25', '46', '46', '', '3,5,14,10,12,9', '2020-09-27 17:35:17'),
('D/BSE/19/0043', 'CS2012', '74', '40.25', '40.25', '', '7,7,5,3,5,2', '2020-09-27 17:35:17'),
('D/BSE/19/0046', 'CS2012', '25', '49', '49', '', '13,1,12,8,12,11', '2020-09-27 17:35:17'),
('D/BSE/19/0049', 'CS2012', '52', '34.75', '34.75', '', '1,11,8,7,1,1', '2020-09-27 17:35:17'),
('D/BSE/19/0052', 'CS2012', '53', '48.5', '48.5', '', '2,3,16,8,7,11', '2020-09-27 17:35:17'),
('D/BSE/19/0055', 'CS2012', '46', '52.75', '52.75', '', '7,15,10,3,13,7', '2020-09-27 17:35:17'),
('D/BSE/19/0058', 'CS2012', '39', '34.5', '34.5', '', '2,9,4,6,10,2', '2020-09-27 17:35:18'),
('D/BSE/19/0061', 'CS2012', '78', '54', '54', '', '14,15,1,5,7,4', '2020-09-27 17:35:17'),
('D/BSE/19/0064', 'CS2012', '81', '54.75', '54.75', '', '3,10,2,13,8,10', '2020-09-27 17:35:18'),
('D/BSE/19/0067', 'CS2012', '10', '30.25', '30.25', '', '11,3,10,11,0,2', '2020-09-27 17:35:18'),
('D/BSE/19/0070', 'CS2012', '83', '67.25', '67.25', '', '7,0,8,16,15,16', '2020-09-27 17:35:18'),
('D/BSE/19/0073', 'CS2012', '94', '70', '70', '', '16,11,6,16,3,10', '2020-09-27 17:35:18'),
('D/BSE/19/0076', 'CS2012', '1', '52.75', '52.75', '', '8,6,15,16,16,9', '2020-09-27 17:35:18'),
('D/BSE/19/0079', 'CS2012', '16', '46.75', '46.75', '', '16,4,9,15,4,9', '2020-09-27 17:35:18'),
('D/BSE/19/0082', 'CS2012', '84', '64.5', '64.5', '', '6,12,11,10,6,13', '2020-09-27 17:35:18');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `uid` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `std_id` varchar(30) NOT NULL,
  `std_name` varchar(30) NOT NULL,
  `std_email` varchar(30) NOT NULL,
  `std_phone` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uid` varchar(30) NOT NULL,
  `displayName` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `photoURL` varchar(60) NOT NULL,
  `lastUpdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `displayName`, `email`, `photoURL`, `lastUpdate`) VALUES
('ji6JL2yD70YnW5dCWdIKUKu3nQB2', 'Tharindi Hansika', 'cgtharindi@gmail.com', 'https://lh3.googleusercontent.com/a-/AOh14GgB4KKQakFd5pul5pn', '2020-09-27 18:17:32'),
('Ls5DlM7fntRwWwYffxbTeWAw1HI3', 'Chamath Wanigasooriya', 'chamathwanigasooriya@gmail.com', 'https://lh3.googleusercontent.com/a-/AOh14Gimey8V7t-lkpis_Lc', '2020-09-28 03:54:27'),
('zZun0os4YkRStobl6BnYjdLDTgU2', '', 'ppramudhi@ymail.com', '', '2020-09-27 18:53:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_id`);

--
-- Indexes for table `lecturer`
--
ALTER TABLE `lecturer`
  ADD PRIMARY KEY (`lec_id`);

--
-- Indexes for table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`mod_id`,`lec_id`);

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`st_id`,`mod_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`std_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
