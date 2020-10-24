-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2020 at 10:00 AM
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
('CE2017', 'Computer Engineering', 'Dr. Budditha Hettige'),
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
('gaKETUsNigtROVmLoTMb', 'CS2016', 'EEE', 'dummy_silva@dummy.com'),
('ji6JL2yD70YnW5dCWdIKUKu3nQB2', 'SE2018', 'CG', 'cgtharindi@gmail.com'),
('mJtVUbjnQGW8Fkvtmhdk3iqtj932', 'SE2018', 'Rerragio', 'aceghost360@gmail.com'),
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
('mJtVUbjnQGW8Fkvtmhdk3iqtj932', 'CS2001', '2020-10-23 17:24:03'),
('mJtVUbjnQGW8Fkvtmhdk3iqtj932', 'CS2912', '2020-10-23 17:43:47'),
('zcYZU4H0ozOAqFGmCK7eiD6apxI2', 'CS2009', '2020-10-24 07:16:22'),
('zcYZU4H0ozOAqFGmCK7eiD6apxI2', 'CS2011', '2020-10-22 18:58:09'),
('zcYZU4H0ozOAqFGmCK7eiD6apxI2', 'CS2912', '2020-10-22 19:34:23'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2011', '2020-10-22 18:47:30'),
('zZun0os4YkRStobl6BnYjdLDTgU2', 'CS2912', '2020-10-22 19:30:35');

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
('CS2009', 'SE2018', 'mJtVUbjnQGW8Fkvtmhdk3iqtj932', 'GPSD', 3, 6),
('CS2011', 'SE2018', 'ji6JL2yD70YnW5dCWdIKUKu3nQB2', 'AOAC', 2, 5),
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
('D/BCE/19/0002', 'CS2001', '87', '', '64.5', '', '12,4,11,9,8,13', '2020-10-23 17:24:02'),
('D/BCE/19/0002', 'CS2009', '87', '', '64.5', '', '12,4,11,9,8,13', '2020-10-24 07:16:21'),
('D/BCE/19/0002', 'CS2011', '87', '64.5', '64.5', '64.5', '', '2020-10-22 18:47:30'),
('D/BCE/19/0002', 'CS2912', '87', '45', '45', '45', '', '2020-10-22 19:30:34'),
('D/BCE/19/0003', 'CS2001', '11', '', '35', '', '14,0,3,10,5,11', '2020-10-23 17:24:02'),
('D/BCE/19/0003', 'CS2009', '11', '', '35', '', '14,0,3,10,5,11', '2020-10-24 07:16:21'),
('D/BCE/19/0003', 'CS2011', '11', '35', '35', '35', '', '2020-10-22 18:47:30'),
('D/BCE/19/0003', 'CS2912', '11', '45', '45', '45', '', '2020-10-22 19:30:35'),
('D/BCE/19/0004', 'CS2001', '53', '', '45.5', '', '14,14,2,1,1,11', '2020-10-23 17:24:03'),
('D/BCE/19/0004', 'CS2009', '53', '', '45.5', '', '14,14,2,1,1,11', '2020-10-24 07:16:21'),
('D/BCE/19/0004', 'CS2011', '53', '45.5', '45.5', '45.5', '', '2020-10-22 18:47:30'),
('D/BCE/19/0004', 'CS2912', '53', '45', '45', '45', '', '2020-10-22 19:30:35'),
('D/BCE/19/0005', 'CS2001', '6', '', '42.75', '', '8,11,12,4,16,4', '2020-10-23 17:24:02'),
('D/BCE/19/0005', 'CS2009', '6', '', '42.75', '', '8,11,12,4,16,4', '2020-10-24 07:16:21'),
('D/BCE/19/0005', 'CS2011', '6', '42.75', '42.75', '42.75', '', '2020-10-22 18:47:30'),
('D/BCE/19/0005', 'CS2912', '6', '45', '45', '45', '', '2020-10-22 19:30:35'),
('D/BCE/19/0006', 'CS2001', '17', '', '41.75', '', '3,9,11,14,8,5', '2020-10-23 17:24:02'),
('D/BCE/19/0006', 'CS2009', '17', '', '41.75', '', '3,9,11,14,8,5', '2020-10-24 07:16:21'),
('D/BCE/19/0006', 'CS2011', '17', '41.75', '41.75', '41.75', '', '2020-10-22 18:47:30'),
('D/BCE/19/0006', 'CS2912', '17', '45', '45', '45', '', '2020-10-22 19:30:34'),
('D/BCE/19/0007', 'CS2001', '81', '', '59.25', '', '11,7,14,14,1,5', '2020-10-23 17:24:02'),
('D/BCE/19/0007', 'CS2009', '81', '', '59.25', '', '11,7,14,14,1,5', '2020-10-24 07:16:21'),
('D/BCE/19/0007', 'CS2011', '81', '59.25', '59.25', '59.25', '', '2020-10-22 18:47:30'),
('D/BCE/19/0007', 'CS2912', '81', '45', '45', '45', '', '2020-10-22 19:30:35'),
('D/BCE/19/0008', 'CS2001', '21', '', '24.75', '', '4,1,5,2,12,2', '2020-10-23 17:24:02'),
('D/BCE/19/0008', 'CS2009', '21', '', '24.75', '', '4,1,5,2,12,2', '2020-10-24 07:16:21'),
('D/BCE/19/0008', 'CS2011', '21', '24.75', '24.75', '24.75', '', '2020-10-22 18:47:30'),
('D/BCE/19/0008', 'CS2912', '21', '45', '45', '45', '', '2020-10-22 19:30:34'),
('D/BCE/19/0009', 'CS2001', '37', '', '42.25', '', '1,11,1,8,9,14', '2020-10-23 17:24:02'),
('D/BCE/19/0009', 'CS2009', '37', '', '42.25', '', '1,11,1,8,9,14', '2020-10-24 07:16:21'),
('D/BCE/19/0009', 'CS2011', '37', '42.25', '42.25', '42.25', '', '2020-10-22 18:47:30'),
('D/BCE/19/0009', 'CS2912', '37', '45', '45', '45', '', '2020-10-22 19:30:35'),
('D/BCE/19/0010', 'CS2001', '73', '', '39.25', '', '11,1,2,3,0,11', '2020-10-23 17:24:03'),
('D/BCE/19/0010', 'CS2009', '73', '', '39.25', '', '11,1,2,3,0,11', '2020-10-24 07:16:21'),
('D/BCE/19/0010', 'CS2011', '73', '39.25', '39.25', '39.25', '', '2020-10-22 18:47:30'),
('D/BCE/19/0010', 'CS2912', '73', '40.8', '39.25', '', '11,1,2,3,0,11', '2020-10-22 19:30:34'),
('D/BCE/19/0011', 'CS2001', '68', '', '57.5', '', '14,9,10,0,5,16', '2020-10-23 17:24:03'),
('D/BCE/19/0011', 'CS2009', '68', '', '57.5', '', '14,9,10,0,5,16', '2020-10-24 07:16:21'),
('D/BCE/19/0011', 'CS2011', '68', '57.5', '57.5', '57.5', '', '2020-10-22 18:47:30'),
('D/BCE/19/0011', 'CS2912', '68', '65.7', '57.5', '', '14,9,10,0,5,16', '2020-10-22 19:30:35'),
('D/BCE/19/0012', 'CS2001', '38', '', '31.25', '', '4,0,4,1,4,16', '2020-10-23 17:24:03'),
('D/BCE/19/0012', 'CS2009', '38', '', '31.25', '', '4,0,4,1,4,16', '2020-10-24 07:16:21'),
('D/BCE/19/0012', 'CS2011', '38', '31.25', '31.25', '31.25', '', '2020-10-22 18:47:30'),
('D/BCE/19/0012', 'CS2912', '38', '28.95', '31.25', '', '4,0,4,1,4,16', '2020-10-22 19:30:35'),
('D/BCE/19/0013', 'CS2001', '34', '', '33.25', '', '14,10,1,8,0,0', '2020-10-23 17:24:03'),
('D/BCE/19/0013', 'CS2009', '34', '', '33.25', '', '14,10,1,8,0,0', '2020-10-24 07:16:21'),
('D/BCE/19/0013', 'CS2011', '34', '33.25', '33.25', '33.25', '', '2020-10-22 18:47:30'),
('D/BCE/19/0013', 'CS2912', '34', '49.95', '33.25', '', '14,10,1,8,0,0', '2020-10-22 19:30:35'),
('D/BCS/19/0002', 'CS2001', '90', '', '57.75', '', '2,10,15,4,2,14', '2020-10-23 17:24:03'),
('D/BCS/19/0002', 'CS2009', '90', '', '57.75', '', '2,10,15,4,2,14', '2020-10-24 07:16:21'),
('D/BCS/19/0002', 'CS2011', '90', '57.75', '57.75', '57.75', '', '2020-10-22 18:47:30'),
('D/BCS/19/0002', 'CS2912', '90', '38.85', '57.75', '', '2,10,15,4,2,14', '2020-10-22 19:30:35'),
('D/BCS/19/0003', 'CS2001', '32', '', '47.75', '', '16,15,13,7,1,1', '2020-10-23 17:24:03'),
('D/BCS/19/0003', 'CS2009', '32', '', '47.75', '', '16,15,13,7,1,1', '2020-10-24 07:16:21'),
('D/BCS/19/0003', 'CS2011', '32', '47.75', '47.75', '47.75', '', '2020-10-22 18:47:30'),
('D/BCS/19/0003', 'CS2912', '32', '68.55', '47.75', '', '16,15,13,7,1,1', '2020-10-22 19:30:35'),
('D/BCS/19/0004', 'CS2001', '84', '', '45', '', '5,2,0,12,7,6', '2020-10-23 17:24:03'),
('D/BCS/19/0004', 'CS2009', '84', '', '45', '', '5,2,0,12,7,6', '2020-10-24 07:16:21'),
('D/BCS/19/0004', 'CS2011', '84', '45', '45', '45', '', '2020-10-22 18:47:30'),
('D/BCS/19/0004', 'CS2912', '84', '33', '45', '', '5,2,0,12,7,6', '2020-10-22 19:30:35'),
('D/BCS/19/0005', 'CS2001', '84', '', '58.5', '', '10,12,16,3,2,7', '2020-10-23 17:24:03'),
('D/BCS/19/0005', 'CS2009', '84', '', '58.5', '', '10,12,16,3,2,7', '2020-10-24 07:16:21'),
('D/BCS/19/0005', 'CS2011', '84', '58.5', '58.5', '58.5', '', '2020-10-22 18:47:30'),
('D/BCS/19/0005', 'CS2912', '84', '55.5', '58.5', '', '10,12,16,3,2,7', '2020-10-22 19:30:35'),
('D/BCS/19/0006', 'CS2001', '47', '', '56', '', '16,3,7,16,4,13', '2020-10-23 17:24:03'),
('D/BCS/19/0006', 'CS2009', '47', '', '56', '', '16,3,7,16,4,13', '2020-10-24 07:16:21'),
('D/BCS/19/0006', 'CS2011', '47', '56', '56', '56', '', '2020-10-22 18:47:30'),
('D/BCS/19/0006', 'CS2912', '47', '73.05', '56', '', '16,3,7,16,4,13', '2020-10-22 19:30:35'),
('D/BCS/19/0007', 'CS2001', '17', '', '32', '', '5,4,0,7,7,14', '2020-10-23 17:24:03'),
('D/BCS/19/0007', 'CS2009', '17', '', '32', '', '5,4,0,7,7,14', '2020-10-24 07:16:21'),
('D/BCS/19/0007', 'CS2011', '17', '32', '32', '32', '', '2020-10-22 18:47:30'),
('D/BCS/19/0007', 'CS2912', '17', '36.75', '32', '', '5,4,0,7,7,14', '2020-10-22 19:30:35'),
('D/BCS/19/0008', 'CS2001', '44', '', '42.5', '', '5,14,5,0,11,7', '2020-10-23 17:24:03'),
('D/BCS/19/0008', 'CS2009', '44', '', '42.5', '', '5,14,5,0,11,7', '2020-10-24 07:16:21'),
('D/BCS/19/0008', 'CS2011', '44', '42.5', '42.5', '42.5', '', '2020-10-22 18:47:30'),
('D/BCS/19/0008', 'CS2912', '44', '40.5', '42.5', '', '5,14,5,0,11,7', '2020-10-22 19:30:35'),
('D/BCS/19/0009', 'CS2001', '0', '', '30', '', '9,5,14,3,6,3', '2020-10-23 17:24:03'),
('D/BCS/19/0009', 'CS2009', '0', '', '30', '', '9,5,14,3,6,3', '2020-10-24 07:16:21'),
('D/BCS/19/0009', 'CS2011', '0', '30', '30', '30', '', '2020-10-22 18:47:30'),
('D/BCS/19/0009', 'CS2912', '0', '46.2', '30', '', '9,5,14,3,6,3', '2020-10-22 19:30:35'),
('D/BCS/19/0010', 'CS2001', '29', '', '29.75', '', '8,5,5,5,7,0', '2020-10-23 17:24:03'),
('D/BCS/19/0010', 'CS2009', '29', '', '29.75', '', '8,5,5,5,7,0', '2020-10-24 07:16:21'),
('D/BCS/19/0010', 'CS2011', '29', '29.75', '29.75', '29.75', '', '2020-10-22 18:47:30'),
('D/BCS/19/0010', 'CS2912', '29', '36.9', '29.75', '', '8,5,5,5,7,0', '2020-10-22 19:30:35'),
('D/BCS/19/0011', 'CS2001', '11', '', '33.5', '', '1,1,11,13,5,10', '2020-10-23 17:24:03'),
('D/BCS/19/0011', 'CS2009', '11', '', '33.5', '', '1,1,11,13,5,10', '2020-10-24 07:16:21'),
('D/BCS/19/0011', 'CS2011', '11', '33.5', '33.5', '33.5', '', '2020-10-22 18:47:30'),
('D/BCS/19/0011', 'CS2912', '11', '32.55', '33.5', '', '1,1,11,13,5,10', '2020-10-22 19:30:35'),
('D/BSE/19/0001', 'CS2001', '20', '', '49.25', '', '8,3,16,16,10,6', '2020-10-23 17:24:02'),
('D/BSE/19/0001', 'CS2009', '20', '', '49.25', '', '8,3,16,16,10,6', '2020-10-24 07:16:20'),
('D/BSE/19/0001', 'CS2011', '20', '49.25', '49.25', '49.25', '', '2020-10-22 18:47:29'),
('D/BSE/19/0001', 'CS2912', '20', '58.65', '49.25', '', '8,3,16,16,10,6', '2020-10-22 19:30:34'),
('D/BSE/19/0004', 'CS2001', '99', '', '63', '', '8,5,11,16,1,10', '2020-10-23 17:24:02'),
('D/BSE/19/0004', 'CS2009', '99', '', '63', '', '8,5,11,16,1,10', '2020-10-24 07:16:20'),
('D/BSE/19/0004', 'CS2011', '99', '63', '63', '63', '', '2020-10-22 18:47:29'),
('D/BSE/19/0004', 'CS2912', '99', '52.65', '63', '', '8,5,11,16,1,10', '2020-10-22 19:30:34'),
('D/BSE/19/0007', 'CS2001', '87', '', '51.75', '', '15,10,3,0,3,9', '2020-10-23 17:24:02'),
('D/BSE/19/0007', 'CS2009', '87', '', '51.75', '', '15,10,3,0,3,9', '2020-10-24 07:16:20'),
('D/BSE/19/0007', 'CS2011', '87', '51.75', '51.75', '51.75', '', '2020-10-22 18:47:29'),
('D/BSE/19/0007', 'CS2912', '87', '57', '51.75', '', '15,10,3,0,3,9', '2020-10-22 19:30:34'),
('D/BSE/19/0010', 'CS2001', '18', '', '42.75', '', '5,16,2,5,16,7', '2020-10-23 17:24:02'),
('D/BSE/19/0010', 'CS2009', '18', '', '42.75', '', '5,16,2,5,16,7', '2020-10-24 07:16:20'),
('D/BSE/19/0010', 'CS2011', '18', '42.75', '42.75', '42.75', '', '2020-10-22 18:47:29'),
('D/BSE/19/0010', 'CS2912', '18', '47.25', '42.75', '', '5,16,2,5,16,7', '2020-10-22 19:30:34'),
('D/BSE/19/0013', 'CS2001', '57', '', '39.75', '', '12,13,1,0,1,7', '2020-10-23 17:24:02'),
('D/BSE/19/0013', 'CS2009', '57', '', '39.75', '', '12,13,1,0,1,7', '2020-10-24 07:16:20'),
('D/BSE/19/0013', 'CS2011', '57', '39.75', '39.75', '39.75', '', '2020-10-22 18:47:29'),
('D/BSE/19/0013', 'CS2912', '57', '47.1', '39.75', '', '12,13,1,0,1,7', '2020-10-22 19:30:34'),
('D/BSE/19/0016', 'CS2001', '1', '', '28.75', '', '7,2,1,9,15,4', '2020-10-23 17:24:02'),
('D/BSE/19/0016', 'CS2009', '1', '', '28.75', '', '7,2,1,9,15,4', '2020-10-24 07:16:20'),
('D/BSE/19/0016', 'CS2011', '1', '28.75', '28.75', '28.75', '', '2020-10-22 18:47:29'),
('D/BSE/19/0016', 'CS2912', '1', '41.1', '28.75', '', '7,2,1,9,15,4', '2020-10-22 19:30:34'),
('D/BSE/19/0019', 'CS2001', '76', '', '62.5', '', '7,7,13,13,3,15', '2020-10-23 17:24:02'),
('D/BSE/19/0019', 'CS2009', '76', '', '62.5', '', '7,7,13,13,3,15', '2020-10-24 07:16:20'),
('D/BSE/19/0019', 'CS2011', '76', '62.5', '62.5', '62.5', '', '2020-10-22 18:47:29'),
('D/BSE/19/0019', 'CS2912', '76', '56.1', '62.5', '', '7,7,13,13,3,15', '2020-10-22 19:30:34'),
('D/BSE/19/0022', 'CS2001', '64', '', '61.75', '', '14,12,15,5,14,1', '2020-10-23 17:24:02'),
('D/BSE/19/0022', 'CS2009', '64', '', '61.75', '', '14,12,15,5,14,1', '2020-10-24 07:16:20'),
('D/BSE/19/0022', 'CS2011', '64', '61.75', '61.75', '61.75', '', '2020-10-22 18:47:29'),
('D/BSE/19/0022', 'CS2912', '64', '70.95', '61.75', '', '14,12,15,5,14,1', '2020-10-22 19:30:34'),
('D/BSE/19/0025', 'CS2001', '20', '', '53', '', '16,1,15,2,14,16', '2020-10-23 17:24:02'),
('D/BSE/19/0025', 'CS2009', '20', '', '53', '', '16,1,15,2,14,16', '2020-10-24 07:16:20'),
('D/BSE/19/0025', 'CS2011', '20', '53', '53', '53', '', '2020-10-22 18:47:29'),
('D/BSE/19/0025', 'CS2912', '20', '76.8', '53', '', '16,1,15,2,14,16', '2020-10-22 19:30:34'),
('D/BSE/19/0028', 'CS2001', '9', '', '44.25', '', '12,12,11,10,2,9', '2020-10-23 17:24:02'),
('D/BSE/19/0028', 'CS2009', '9', '', '44.25', '', '12,12,11,10,2,9', '2020-10-24 07:16:20'),
('D/BSE/19/0028', 'CS2011', '9', '44.25', '44.25', '44.25', '', '2020-10-22 18:47:29'),
('D/BSE/19/0028', 'CS2912', '9', '63.6', '44.25', '', '12,12,11,10,2,9', '2020-10-22 19:30:34'),
('D/BSE/19/0031', 'CS2001', '93', '', '39.75', '', '7,0,6,3,0,6', '2020-10-23 17:24:02'),
('D/BSE/19/0031', 'CS2009', '93', '', '39.75', '', '7,0,6,3,0,6', '2020-10-24 07:16:20'),
('D/BSE/19/0031', 'CS2011', '93', '39.75', '39.75', '39.75', '', '2020-10-22 18:47:29'),
('D/BSE/19/0031', 'CS2912', '93', '29.1', '39.75', '', '7,0,6,3,0,6', '2020-10-22 19:30:34'),
('D/BSE/19/0034', 'CS2001', '25', '', '45.25', '', '4,15,11,5,10,7', '2020-10-23 17:24:02'),
('D/BSE/19/0034', 'CS2009', '25', '', '45.25', '', '4,15,11,5,10,7', '2020-10-24 07:16:20'),
('D/BSE/19/0034', 'CS2011', '25', '45.25', '45.25', '45.25', '', '2020-10-22 18:47:29'),
('D/BSE/19/0034', 'CS2912', '25', '46.2', '45.25', '', '4,15,11,5,10,7', '2020-10-22 19:30:34'),
('D/BSE/19/0037', 'CS2001', '17', '', '44', '', '13,7,11,7,0,15', '2020-10-23 17:24:02'),
('D/BSE/19/0037', 'CS2009', '17', '', '44', '', '13,7,11,7,0,15', '2020-10-24 07:16:20'),
('D/BSE/19/0037', 'CS2011', '17', '44', '44', '44', '', '2020-10-22 18:47:29'),
('D/BSE/19/0037', 'CS2912', '17', '63.15', '44', '', '13,7,11,7,0,15', '2020-10-22 19:30:34'),
('D/BSE/19/0040', 'CS2001', '42', '', '51.75', '', '5,15,6,0,16,13', '2020-10-23 17:24:02'),
('D/BSE/19/0040', 'CS2009', '42', '', '51.75', '', '5,15,6,0,16,13', '2020-10-24 07:16:21'),
('D/BSE/19/0040', 'CS2011', '42', '51.75', '51.75', '51.75', '', '2020-10-22 18:47:30'),
('D/BSE/19/0040', 'CS2912', '42', '50.25', '51.75', '', '5,15,6,0,16,13', '2020-10-22 19:30:34'),
('D/BSE/19/0043', 'CS2001', '21', '', '42', '', '8,0,7,13,15,6', '2020-10-23 17:24:02'),
('D/BSE/19/0043', 'CS2009', '21', '', '42', '', '8,0,7,13,15,6', '2020-10-24 07:16:20'),
('D/BSE/19/0043', 'CS2011', '21', '42', '42', '42', '', '2020-10-22 18:47:29'),
('D/BSE/19/0043', 'CS2912', '21', '51.15', '42', '', '8,0,7,13,15,6', '2020-10-22 19:30:34'),
('D/BSE/19/0046', 'CS2001', '32', '', '45.5', '', '16,6,2,5,8,13', '2020-10-23 17:24:02'),
('D/BSE/19/0046', 'CS2009', '32', '', '45.5', '', '16,6,2,5,8,13', '2020-10-24 07:16:21'),
('D/BSE/19/0046', 'CS2011', '32', '45.5', '45.5', '45.5', '', '2020-10-22 18:47:30'),
('D/BSE/19/0046', 'CS2912', '32', '66.3', '45.5', '', '16,6,2,5,8,13', '2020-10-22 19:30:34'),
('D/BSE/19/0049', 'CS2001', '97', '', '65.5', '', '9,8,16,6,5,11', '2020-10-23 17:24:02'),
('D/BSE/19/0049', 'CS2009', '97', '', '65.5', '', '9,8,16,6,5,11', '2020-10-24 07:16:21'),
('D/BSE/19/0049', 'CS2011', '97', '65.5', '65.5', '65.5', '', '2020-10-22 18:47:30'),
('D/BSE/19/0049', 'CS2912', '97', '57.45', '65.5', '', '9,8,16,6,5,11', '2020-10-22 19:30:34'),
('D/BSE/19/0052', 'CS2001', '44', '', '53.75', '', '14,16,6,1,5,15', '2020-10-23 17:24:02'),
('D/BSE/19/0052', 'CS2009', '44', '', '53.75', '', '14,16,6,1,5,15', '2020-10-24 07:16:20'),
('D/BSE/19/0052', 'CS2011', '44', '53.75', '53.75', '53.75', '', '2020-10-22 18:47:30'),
('D/BSE/19/0052', 'CS2912', '44', '67.95', '53.75', '', '14,16,6,1,5,15', '2020-10-22 19:30:34'),
('D/BSE/19/0055', 'CS2001', '16', '', '26.5', '', '4,2,9,3,10,2', '2020-10-23 17:24:02'),
('D/BSE/19/0055', 'CS2009', '16', '', '26.5', '', '4,2,9,3,10,2', '2020-10-24 07:16:21'),
('D/BSE/19/0055', 'CS2011', '16', '26.5', '26.5', '26.5', '', '2020-10-22 18:47:30'),
('D/BSE/19/0055', 'CS2912', '16', '29.7', '26.5', '', '4,2,9,3,10,2', '2020-10-22 19:30:34'),
('D/BSE/19/0058', 'CS2001', '92', '', '55.25', '', '9,1,5,3,15,10', '2020-10-23 17:24:02'),
('D/BSE/19/0058', 'CS2009', '92', '', '55.25', '', '9,1,5,3,15,10', '2020-10-24 07:16:21'),
('D/BSE/19/0058', 'CS2011', '92', '55.25', '55.25', '55.25', '', '2020-10-22 18:47:30'),
('D/BSE/19/0058', 'CS2912', '92', '48.45', '55.25', '', '9,1,5,3,15,10', '2020-10-22 19:30:34'),
('D/BSE/19/0061', 'CS2001', '84', '', '47.25', '', '4,4,12,6,7,2', '2020-10-23 17:24:02'),
('D/BSE/19/0061', 'CS2009', '84', '', '47.25', '', '4,4,12,6,7,2', '2020-10-24 07:16:21'),
('D/BSE/19/0061', 'CS2011', '84', '47.25', '47.25', '47.25', '', '2020-10-22 18:47:30'),
('D/BSE/19/0061', 'CS2912', '84', '33.45', '47.25', '', '4,4,12,6,7,2', '2020-10-22 19:30:34'),
('D/BSE/19/0064', 'CS2001', '92', '', '68.75', '', '13,10,12,5,9,12', '2020-10-23 17:24:02'),
('D/BSE/19/0064', 'CS2009', '92', '', '68.75', '', '13,10,12,5,9,12', '2020-10-24 07:16:21'),
('D/BSE/19/0064', 'CS2011', '92', '68.75', '68.75', '68.75', '', '2020-10-22 18:47:30'),
('D/BSE/19/0064', 'CS2912', '92', '69.15', '68.75', '', '13,10,12,5,9,12', '2020-10-22 19:30:34'),
('D/BSE/19/0067', 'CS2001', '34', '', '34', '', '4,8,6,3,5,8', '2020-10-23 17:24:02'),
('D/BSE/19/0067', 'CS2009', '34', '', '34', '', '4,8,6,3,5,8', '2020-10-24 07:16:21'),
('D/BSE/19/0067', 'CS2011', '34', '34', '34', '34', '', '2020-10-22 18:47:30'),
('D/BSE/19/0067', 'CS2912', '34', '32.7', '34', '', '4,8,6,3,5,8', '2020-10-22 19:30:34'),
('D/BSE/19/0070', 'CS2001', '42', '', '56.25', '', '13,12,6,6,11,13', '2020-10-23 17:24:02'),
('D/BSE/19/0070', 'CS2009', '42', '', '56.25', '', '13,12,6,6,11,13', '2020-10-24 07:16:21'),
('D/BSE/19/0070', 'CS2011', '42', '56.25', '56.25', '56.25', '', '2020-10-22 18:47:30'),
('D/BSE/19/0070', 'CS2912', '42', '69.15', '56.25', '', '13,12,6,6,11,13', '2020-10-22 19:30:34'),
('D/BSE/19/0073', 'CS2001', '99', '', '48', '', '13,7,6,0,0,5', '2020-10-23 17:24:02'),
('D/BSE/19/0073', 'CS2009', '99', '', '48', '', '13,7,6,0,0,5', '2020-10-24 07:16:21'),
('D/BSE/19/0073', 'CS2011', '99', '48', '48', '48', '', '2020-10-22 18:47:30'),
('D/BSE/19/0073', 'CS2912', '99', '46.65', '48', '', '13,7,6,0,0,5', '2020-10-22 19:30:34'),
('D/BSE/19/0076', 'CS2001', '98', '', '47.75', '', '16,1,1,9,1,3', '2020-10-23 17:24:02'),
('D/BSE/19/0076', 'CS2009', '98', '', '47.75', '', '16,1,1,9,1,3', '2020-10-24 07:16:21'),
('D/BSE/19/0076', 'CS2011', '98', '47.75', '47.75', '47.75', '', '2020-10-22 18:47:30'),
('D/BSE/19/0076', 'CS2912', '98', '52.05', '47.75', '', '16,1,1,9,1,3', '2020-10-22 19:30:34'),
('D/BSE/19/0079', 'CS2001', '5', '', '29', '', '1,16,0,8,4,8', '2020-10-23 17:24:02'),
('D/BSE/19/0079', 'CS2009', '5', '', '29', '', '1,16,0,8,4,8', '2020-10-24 07:16:21'),
('D/BSE/19/0079', 'CS2011', '5', '29', '29', '29', '', '2020-10-22 18:47:30'),
('D/BSE/19/0079', 'CS2912', '5', '29.55', '29', '', '1,16,0,8,4,8', '2020-10-22 19:30:34'),
('D/BSE/19/0082', 'CS2001', '11', '', '34.25', '', '6,0,8,13,11,4', '2020-10-23 17:24:02'),
('D/BSE/19/0082', 'CS2009', '11', '', '34.25', '', '6,0,8,13,11,4', '2020-10-24 07:16:21'),
('D/BSE/19/0082', 'CS2011', '11', '34.25', '34.25', '34.25', '', '2020-10-22 18:47:30'),
('D/BSE/19/0082', 'CS2912', '11', '42.3', '34.25', '', '6,0,8,13,11,4', '2020-10-22 19:30:34'),
('D/BSE/19/0085', 'CS2001', '44', '', '44.75', '', '15,5,4,2,4,15', '2020-10-23 17:24:02'),
('D/BSE/19/0085', 'CS2009', '44', '', '44.75', '', '15,5,4,2,4,15', '2020-10-24 07:16:21'),
('D/BSE/19/0085', 'CS2011', '44', '44.75', '44.75', '44.75', '', '2020-10-22 18:47:30'),
('D/BSE/19/0085', 'CS2912', '44', '60.75', '44.75', '', '15,5,4,2,4,15', '2020-10-22 19:30:34');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `uid` varchar(30) NOT NULL,
  `mod_id` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`uid`, `mod_id`, `email`, `role`) VALUES
('ji6JL2yD70YnW5dCWdIKUKu3nQB2', 'CS2001', 'cgtharindi@gmail.com', 1),
('mJtVUbjnQGW8Fkvtmhdk3iqtj932', 'CS2009', 'aceghost360@gmail.com', 1),
('zcYZU4H0ozOAqFGmCK7eiD6apxI2', 'CS2009', 'psmdesilva@gmail.com', 2);

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

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`uid`, `std_id`, `std_name`, `std_email`, `std_phone`) VALUES
('1QeCFjUaSTfUjZruc45Au1vRnkw2', 'D/BSE/19/0004', 'WD More', 'wdamore@yahoo.com', '762992256'),
('TcIzBEaAqffecfqGhjRgFJlX9Og1', 'D/BCE/19/0003', 'Dummy Student', 'chamathsasanka82@gmail.com', '789456215');

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
('1QeCFjUaSTfUjZruc45Au1vRnkw2', 'WD MORE', 'wdamore@yahoo.com', '', '2020-10-23 15:43:13'),
('gaKETUsNigtROVmLoTMb', 'dummy silva', 'dummy_silva@dummy.com', '', '2020-10-23 15:43:13'),
('ji6JL2yD70YnW5dCWdIKUKu3nQB2', '', 'cgtharindi@gmail.com', '', '2020-10-23 15:43:13'),
('LiFFK1tjvZU90bYWf9WV506Tvx73', 'Pramudhi Perera', 'ppramudhi@gmail.com', 'https://lh3.googleusercontent.com/-IOq-WCXfoG0/AAAAAAAAAAI/A', '2020-10-23 15:43:13'),
('Ls5DlM7fntRwWwYffxbTeWAw1HI3', 'Chamath Wanigasooriya', 'chamathwanigasooriya@gmail.com', 'https://lh3.googleusercontent.com/a-/AOh14Gimey8V7t-lkpis_Lc', '2020-10-23 15:43:24'),
('mJtVUbjnQGW8Fkvtmhdk3iqtj932', '', 'aceghost360@gmail.com', '', '2020-10-23 15:43:13'),
('TcIzBEaAqffecfqGhjRgFJlX9Og1', 'Chamath Wanigasooriya', 'chamathsasanka82@gmail.com', 'https://lh3.googleusercontent.com/a-/AOh14GgnKEiQNczfx9G-tRw', '2020-10-23 15:43:13'),
('zcYZU4H0ozOAqFGmCK7eiD6apxI2', '', 'psmdesilva@gmail.com', '', '2020-10-23 15:43:13'),
('zZun0os4YkRStobl6BnYjdLDTgU2', '', 'ppramudhi@ymail.com', '', '2020-10-23 15:43:13');

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
