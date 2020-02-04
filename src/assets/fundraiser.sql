-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2019 at 02:19 PM
-- Server version: 10.3.15-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fundraiser`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `cust_name` varchar(50) NOT NULL,
  `cust_email` varchar(45) NOT NULL,
  `cust_website` varchar(45) NOT NULL,
  `cust_subType` varchar(45) NOT NULL,
  `cust_contactPerson` varchar(45) NOT NULL,
  `cust_phone` varchar(45) NOT NULL,
  `cust_description` text NOT NULL,
  `cust_address` text NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `cust_name`, `cust_email`, `cust_website`, `cust_subType`, `cust_contactPerson`, `cust_phone`, `cust_description`, `cust_address`, `status`) VALUES
(1, 'sdsda', 'asda@asd.com', 'www.test.com', 'Normal', 'ada', '3243223', 'adsa', 'asdsa', 0),
(2, 'Test Subscriber', 'trdy34@email.com', 'www.test.com', 'Normal', 'Test Person', '02323232', 'asdad', 'asdaddassdfd', 1);

-- --------------------------------------------------------

--
-- Table structure for table `entity_types`
--

CREATE TABLE `entity_types` (
  `id` int(11) NOT NULL,
  `entity_Name` varchar(50) NOT NULL,
  `entity_Code` varchar(50) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `entity_types`
--

INSERT INTO `entity_types` (`id`, `entity_Name`, `entity_Code`, `status`) VALUES
(1, 'Platform', 'E1', 1),
(2, 'Subscriber', 'E2', 1),
(3, 'Donor', 'E3', 1);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `event_name` varchar(50) NOT NULL,
  `minimum_limit` varchar(50) NOT NULL,
  `sub_Type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `event_name`, `minimum_limit`, `sub_Type`) VALUES
(1, '', '', ''),
(2, 'Masjid something', '20000', 'Free'),
(3, 'Masjid something', '23333', 'T01'),
(4, 'Masjid something', '2333334', 'Basic');

-- --------------------------------------------------------

--
-- Table structure for table `menu_list`
--

CREATE TABLE `menu_list` (
  `id` int(11) NOT NULL,
  `menu_Name` varchar(50) NOT NULL,
  `menu_Code` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu_list`
--

INSERT INTO `menu_list` (`id`, `menu_Name`, `menu_Code`) VALUES
(1, 'Dashboard', 'dashboard'),
(2, 'Admin Settings', 'adminSettings');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(11) NOT NULL,
  `page_name` text NOT NULL,
  `entity_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `icon` varchar(100) NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `page_name`, `entity_id`, `role_id`, `icon`, `url`) VALUES
(1, '0', 12, 0, 'fa', '/addtest'),
(2, '0', 12, 0, 'Test', 'Normal'),
(3, 'Test', 12, 0, 'T1', 'Normal'),
(4, 'Thank', 0, 0, 'fa fa-check square', '/ThankYou');

-- --------------------------------------------------------

--
-- Table structure for table `role_types`
--

CREATE TABLE `role_types` (
  `id` int(11) NOT NULL,
  `role_Name` varchar(50) NOT NULL,
  `role_Code` varchar(50) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `entity_Type` varchar(50) NOT NULL,
  `menu_list` varchar(50) NOT NULL,
  `read` tinyint(1) NOT NULL,
  `writeRole` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role_types`
--

INSERT INTO `role_types` (`id`, `role_Name`, `role_Code`, `status`, `entity_Type`, `menu_list`, `read`, `writeRole`) VALUES
(1, 'Platform - Admin', 'T1', 1, 'E1', '2', 0, 0),
(2, 'Subscriber - Admin', 'T2', 1, 'E2', '2', 1, 1),
(3, 'Donor', 'T3', 1, 'E3', '2', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `subevent`
--

CREATE TABLE `subevent` (
  `id` int(11) NOT NULL,
  `event_name` varchar(120) NOT NULL,
  `event_code` varchar(50) NOT NULL,
  `entity_Type` int(11) NOT NULL,
  `event_amount` varchar(50) NOT NULL,
  `event_date` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subevent`
--

INSERT INTO `subevent` (`id`, `event_name`, `event_code`, `entity_Type`, `event_amount`, `event_date`) VALUES
(1, 'sdadaa', '32aa', 12, '232323', '2019-09-01');

-- --------------------------------------------------------

--
-- Table structure for table `sub_pages`
--

CREATE TABLE `sub_pages` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `url` text NOT NULL,
  `icon` varchar(100) NOT NULL,
  `entity_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `page_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sub_types`
--

CREATE TABLE `sub_types` (
  `id` int(11) NOT NULL,
  `sub_Name` varchar(50) NOT NULL,
  `sub_Code` varchar(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sub_types`
--

INSERT INTO `sub_types` (`id`, `sub_Name`, `sub_Code`, `status`) VALUES
(1, 'Basic - Info', 'Basic', 1),
(2, 'Silver', 'Silver', 1),
(3, 'Gold', 'Gold', 1),
(4, 'Platinum', 'Platinum', 1),
(6, 'Super', 'S2', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_login`
--

CREATE TABLE `tbl_login` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(30) NOT NULL,
  `role` varchar(11) NOT NULL DEFAULT '2',
  `status` int(11) NOT NULL,
  `enitity_type` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_login`
--

INSERT INTO `tbl_login` (`id`, `username`, `fname`, `lname`, `email`, `password`, `role`, `status`, `enitity_type`) VALUES
(3, 'AnasARasheed714', 'AnasA', 'Rasheed', 'anas.rasheed@corpnetconsulting.com', 'abcd1234', 'T1', 1, 'E1'),
(4, 'AnasRRasheed560', 'AnasR', 'Rasheed', 'anas.rasheed@corpnetconsulting.com', 'abcd23123', 'T2', 1, 'E2'),
(5, 'AnasRasheed144', 'Anas', 'Rasheed', 'anas@corpnet.com', 'abcd1234', 'T1', 1, 'E1'),
(6, 'AnasRasheed932', 'Anas', 'Rasheed', 'anas@corpnet.com', 'abcd1234', 'T1', 1, 'E1'),
(7, 'TestOne664', 'Test', 'One', 'donor@email.com', 'abcd1234', 'T3', 1, 'E3'),
(8, 'SyedAnas03', 'Anas', 'Rasheed', 'anas@trustmarq.com', 'abcd1234', 'T1', 1, 'E1'),
(9, 'subscriber03', 'Subscriber', 'Admin', 'subscriber@email.com', 'abcd1234', 'T2', 1, 'E2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `entity_types`
--
ALTER TABLE `entity_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_list`
--
ALTER TABLE `menu_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_types`
--
ALTER TABLE `role_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subevent`
--
ALTER TABLE `subevent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_pages`
--
ALTER TABLE `sub_pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_types`
--
ALTER TABLE `sub_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_login`
--
ALTER TABLE `tbl_login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `entity_types`
--
ALTER TABLE `entity_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `menu_list`
--
ALTER TABLE `menu_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `role_types`
--
ALTER TABLE `role_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subevent`
--
ALTER TABLE `subevent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sub_pages`
--
ALTER TABLE `sub_pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_types`
--
ALTER TABLE `sub_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_login`
--
ALTER TABLE `tbl_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
