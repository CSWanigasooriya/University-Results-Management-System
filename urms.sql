-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 22, 2020 at 09:10 PM
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

--
-- Dumping data for table `lecturer_result`
--

INSERT INTO `lecturer_result` (`lec_id`, `mod_id`, `submit_date`) VALUES
('zcYZU4H0ozOAqFGmCK7eiD6apxI2', 'CS2011', '2020-10-22 18:58:09'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2011', '2020-10-22 18:47:30');

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

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`st_id`, `mod_id`, `cas`, `es_1`, `es_2`, `final`, `mark`, `lastUpdate`) VALUES
('D/BCE/19/0002', 'CS2011', '87', '64.5', '64.5', '64.5', '', '2020-10-22 18:47:30'),
('D/BCE/19/0003', 'CS2011', '11', '35', '35', '35', '', '2020-10-22 18:47:30'),
('D/BCE/19/0004', 'CS2011', '53', '45.5', '45.5', '45.5', '', '2020-10-22 18:47:30'),
('D/BCE/19/0005', 'CS2011', '6', '42.75', '42.75', '42.75', '', '2020-10-22 18:47:30'),
('D/BCE/19/0006', 'CS2011', '17', '41.75', '41.75', '41.75', '', '2020-10-22 18:47:30'),
('D/BCE/19/0007', 'CS2011', '81', '59.25', '59.25', '59.25', '', '2020-10-22 18:47:30'),
('D/BCE/19/0008', 'CS2011', '21', '24.75', '24.75', '24.75', '', '2020-10-22 18:47:30'),
('D/BCE/19/0009', 'CS2011', '37', '42.25', '42.25', '42.25', '', '2020-10-22 18:47:30'),
('D/BCE/19/0010', 'CS2011', '73', '39.25', '39.25', '39.25', '', '2020-10-22 18:47:30'),
('D/BCE/19/0011', 'CS2011', '68', '57.5', '57.5', '57.5', '', '2020-10-22 18:47:30'),
('D/BCE/19/0012', 'CS2011', '38', '31.25', '31.25', '31.25', '', '2020-10-22 18:47:30'),
('D/BCE/19/0013', 'CS2011', '34', '33.25', '33.25', '33.25', '', '2020-10-22 18:47:30'),
('D/BCS/19/0002', 'CS2011', '90', '57.75', '57.75', '57.75', '', '2020-10-22 18:47:30'),
('D/BCS/19/0003', 'CS2011', '32', '47.75', '47.75', '47.75', '', '2020-10-22 18:47:30'),
('D/BCS/19/0004', 'CS2011', '84', '45', '45', '45', '', '2020-10-22 18:47:30'),
('D/BCS/19/0005', 'CS2011', '84', '58.5', '58.5', '58.5', '', '2020-10-22 18:47:30'),
('D/BCS/19/0006', 'CS2011', '47', '56', '56', '56', '', '2020-10-22 18:47:30'),
('D/BCS/19/0007', 'CS2011', '17', '32', '32', '32', '', '2020-10-22 18:47:30'),
('D/BCS/19/0008', 'CS2011', '44', '42.5', '42.5', '42.5', '', '2020-10-22 18:47:30'),
('D/BCS/19/0009', 'CS2011', '0', '30', '30', '30', '', '2020-10-22 18:47:30'),
('D/BCS/19/0010', 'CS2011', '29', '29.75', '29.75', '29.75', '', '2020-10-22 18:47:30'),
('D/BCS/19/0011', 'CS2011', '11', '33.5', '33.5', '33.5', '', '2020-10-22 18:47:30'),
('D/BSE/19/0001', 'CS2011', '20', '49.25', '49.25', '49.25', '', '2020-10-22 18:47:29'),
('D/BSE/19/0004', 'CS2011', '99', '63', '63', '63', '', '2020-10-22 18:47:29'),
('D/BSE/19/0007', 'CS2011', '87', '51.75', '51.75', '51.75', '', '2020-10-22 18:47:29'),
('D/BSE/19/0010', 'CS2011', '18', '42.75', '42.75', '42.75', '', '2020-10-22 18:47:29'),
('D/BSE/19/0013', 'CS2011', '57', '39.75', '39.75', '39.75', '', '2020-10-22 18:47:29'),
('D/BSE/19/0016', 'CS2011', '1', '28.75', '28.75', '28.75', '', '2020-10-22 18:47:29'),
('D/BSE/19/0019', 'CS2011', '76', '62.5', '62.5', '62.5', '', '2020-10-22 18:47:29'),
('D/BSE/19/0022', 'CS2011', '64', '61.75', '61.75', '61.75', '', '2020-10-22 18:47:29'),
('D/BSE/19/0025', 'CS2011', '20', '53', '53', '53', '', '2020-10-22 18:47:29'),
('D/BSE/19/0028', 'CS2011', '9', '44.25', '44.25', '44.25', '', '2020-10-22 18:47:29'),
('D/BSE/19/0031', 'CS2011', '93', '39.75', '39.75', '39.75', '', '2020-10-22 18:47:29'),
('D/BSE/19/0034', 'CS2011', '25', '45.25', '45.25', '45.25', '', '2020-10-22 18:47:29'),
('D/BSE/19/0037', 'CS2011', '17', '44', '44', '44', '', '2020-10-22 18:47:29'),
('D/BSE/19/0040', 'CS2011', '42', '51.75', '51.75', '51.75', '', '2020-10-22 18:47:30'),
('D/BSE/19/0043', 'CS2011', '21', '42', '42', '42', '', '2020-10-22 18:47:29'),
('D/BSE/19/0046', 'CS2011', '32', '45.5', '45.5', '45.5', '', '2020-10-22 18:47:30'),
('D/BSE/19/0049', 'CS2011', '97', '65.5', '65.5', '65.5', '', '2020-10-22 18:47:30'),
('D/BSE/19/0052', 'CS2011', '44', '53.75', '53.75', '53.75', '', '2020-10-22 18:47:30'),
('D/BSE/19/0055', 'CS2011', '16', '26.5', '26.5', '26.5', '', '2020-10-22 18:47:30'),
('D/BSE/19/0058', 'CS2011', '92', '55.25', '55.25', '55.25', '', '2020-10-22 18:47:30'),
('D/BSE/19/0061', 'CS2011', '84', '47.25', '47.25', '47.25', '', '2020-10-22 18:47:30'),
('D/BSE/19/0064', 'CS2011', '92', '68.75', '68.75', '68.75', '', '2020-10-22 18:47:30'),
('D/BSE/19/0067', 'CS2011', '34', '34', '34', '34', '', '2020-10-22 18:47:30'),
('D/BSE/19/0070', 'CS2011', '42', '56.25', '56.25', '56.25', '', '2020-10-22 18:47:30'),
('D/BSE/19/0073', 'CS2011', '99', '48', '48', '48', '', '2020-10-22 18:47:30'),
('D/BSE/19/0076', 'CS2011', '98', '47.75', '47.75', '47.75', '', '2020-10-22 18:47:30'),
('D/BSE/19/0079', 'CS2011', '5', '29', '29', '29', '', '2020-10-22 18:47:30'),
('D/BSE/19/0082', 'CS2011', '11', '34.25', '34.25', '34.25', '', '2020-10-22 18:47:30'),
('D/BSE/19/0085', 'CS2011', '44', '44.75', '44.75', '44.75', '', '2020-10-22 18:47:30');

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
('1QeCFjUaSTfUjZruc45Au1vRnkw2', '', 'wdamore@yahoo.com', '', '2020-10-22 19:09:07'),
('gaKETUsNigtROVmLoTMb', 'dummy silva', 'dummy_silva@dummy.com', '', '2020-10-22 17:44:53'),
('ji6JL2yD70YnW5dCWdIKUKu3nQB2', '', 'cgtharindi@gmail.com', '', '2020-10-22 17:44:53'),
('LiFFK1tjvZU90bYWf9WV506Tvx73', 'Pramudhi Perera', 'ppramudhi@gmail.com', 'https://lh3.googleusercontent.com/-IOq-WCXfoG0/AAAAAAAAAAI/A', '2020-10-22 17:44:52'),
('Ls5DlM7fntRwWwYffxbTeWAw1HI3', 'Chamath Wanigasooriya', 'chamathwanigasooriya@gmail.com', 'https://lh3.googleusercontent.com/a-/AOh14Gimey8V7t-lkpis_Lc', '2020-10-22 19:09:06'),
('mJtVUbjnQGW8Fkvtmhdk3iqtj932', '', 'aceghost360@gmail.com', '', '2020-10-22 17:44:53'),
('TcIzBEaAqffecfqGhjRgFJlX9Og1', 'Chamath Wanigasooriya', 'chamathsasanka82@gmail.com', 'https://lh3.googleusercontent.com/a-/AOh14GgnKEiQNczfx9G-tRw', '2020-10-22 17:44:53'),
('zcYZU4H0ozOAqFGmCK7eiD6apxI2', '', 'psmdesilva@gmail.com', '', '2020-10-22 19:01:15'),
('zZun0os4YkRStobl6BnYjdLDTgU2', '', 'ppramudhi@ymail.com', '', '2020-10-22 19:01:42');

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
