-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 22, 2020 at 06:29 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

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

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_id`, `dept_name`, `hod`) VALUES
('CS2016', 'Computer Science', 'Dr. Pradeep Kalansooriya'),
('SE2018', 'Computational Mathematics', 'Dr. Ajith De Mel');

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
('ji6JL2yD70YnW5dCWdIKUKu3nQB2', 'SE2018', 'CG', 'cgtharindi@gmail.com'),
('zcYZU4H0ozOAqFGmCK7eiD6apxI2', 'SE2018', 'Shelanthi', 'psmdesilva@gmail.com'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'SE2018', 'Pramudhi', 'ppramudhi@ymail.com');

-- --------------------------------------------------------

--
-- Table structure for table `lecturer_result`
--

CREATE TABLE `lecturer_result` (
  `lec_id` varchar(30) NOT NULL,
  `mod_id` varchar(30) NOT NULL,
  `submit_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
('CS2001', 'SE2018', 'ji6JL2yD70YnW5dCWdIKUKu3nQB2', 'AOAC', 2, 6),
('CS2011', 'SE2018', 'zcYZU4H0ozOAqFGmCK7eiD6apxI2', 'DSA', 3, 6),
('CS2912', 'SE2018', 'zZun0os4YkRStobl6BnYjdLDTgU2', 'AI', 2, 2);

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

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `uid` varchar(30) NOT NULL,
  `mod_id` varchar(30) NOT NULL,
  `mod_name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`uid`, `mod_id`, `mod_name`, `email`, `role`) VALUES
('zcYZU4H0ozOAqFGmCK7eiD6apxI2', 'CS2001', 'AOAC', 'psmdesilva@gmail.com', 1);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `uid` varchar(30) NOT NULL,
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
('1QeCFjUaSTfUjZruc45Au1vRnkw2', '', 'wdamore@yahoo.com', '', '2020-10-22 16:28:26'),
('ji6JL2yD70YnW5dCWdIKUKu3nQB2', 'Tharindi Hansika', 'cgtharindi@gmail.com', 'https://lh3.googleusercontent.com/a-/AOh14GgB4KKQakFd5pul5pn', '2020-10-18 19:35:59'),
('Ls5DlM7fntRwWwYffxbTeWAw1HI3', 'Chamath Wanigasooriya', 'chamathwanigasooriya@gmail.com', 'https://lh3.googleusercontent.com/a-/AOh14Gimey8V7t-lkpis_Lc', '2020-10-22 16:28:33'),
('mJtVUbjnQGW8Fkvtmhdk3iqtj932', '', 'aceghost360@gmail.com', '', '2020-10-18 21:02:29'),
('zcYZU4H0ozOAqFGmCK7eiD6apxI2', '', 'psmdesilva@gmail.com', '', '2020-10-18 21:43:11'),
('zZun0os4YkRStobl6BnYjdLDTgU2', '', 'ppramudhi@ymail.com', '', '2020-10-22 16:27:00');

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
-- Indexes for table `lecturer_result`
--
ALTER TABLE `lecturer_result`
  ADD PRIMARY KEY (`lec_id`,`mod_id`);

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
  ADD PRIMARY KEY (`uid`,`std_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `role`
--
ALTER TABLE `role`
  ADD CONSTRAINT `role_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
