CREATE DATABASE  IF NOT EXISTS `InsuranceData` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `InsuranceData`;
-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: InsuranceData
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `InsuranceClaims`
--

DROP TABLE IF EXISTS `InsuranceClaims`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `InsuranceClaims` (
  `ClaimID` int NOT NULL,
  `InsuranceID` int NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `ExpenseDate` varchar(255) NOT NULL,
  `Amount` float NOT NULL,
  `Purpose` varchar(255) NOT NULL,
  `FollowUp` bit(1) NOT NULL,
  `PreviousClaimID` int DEFAULT NULL,
  `Status` varchar(20) NOT NULL,
  `LastEditedClaimDate` varchar(255) NOT NULL,
  PRIMARY KEY (`ClaimID`),
  KEY `InsuranceID_idx` (`InsuranceID`),
  CONSTRAINT `InsuranceID` FOREIGN KEY (`InsuranceID`) REFERENCES `InsurancePolicies` (`InsuranceID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `InsuranceClaims`
--

LOCK TABLES `InsuranceClaims` WRITE;
/*!40000 ALTER TABLE `InsuranceClaims` DISABLE KEYS */;
INSERT INTO `InsuranceClaims` VALUES (2010,1009,'Martin','Ong','2022-07-14T08:00:00+08:00',100,'Dentist',_binary '\0',NULL,'Approved','2022-07-15T12:22:45+08:00'),(2011,1008,'John','Tan','2022-08-15T08:00:00+08:00',100,'Outpatient Claim',_binary '\0',NULL,'Approved','2022-08-16T19:35:53+08:00'),(2012,1005,'Mary','Lee','2022-08-16T08:00:00+08:00',200,'Specialist Visit',_binary '\0',NULL,'Approved','2022-08-17T12:28:46+08:00'),(2013,1007,'Mary','Lee','2022-08-18T08:00:00+08:00',5000,'Car Repairs',_binary '\0',NULL,'Approved','2022-08-19T11:16:32+08:00'),(2014,1008,'John','Tan','2022-08-20T08:00:00+08:00',100,'Outpatient Claim',_binary '\0',NULL,'Approved','2022-08-29T16:42:51+08:00'),(2015,1009,'Martin','Ong','2022-09-02T08:00:00+08:00',100,'Outpatient Claim',_binary '\0',NULL,'Rejected','2022-09-03T10:30:00+08:00'),(2016,1008,'John','Tan','2022-09-04T08:00:00+08:00',100,'Outpatient Claim',_binary '\0',NULL,'Rejected','2022-09-05T13:25:29+08:00'),(2017,1005,'Mary','Lee','2022-10-08T08:00:00+08:00',200,'Specialist Visit Follow Up',_binary '',2013,'Approved','2022-10-09T13:08:24+08:00'),(2018,1011,'John','Tan','2022-10-10T08:00:00+08:00',3000,'Aircon Repair',_binary '\0',NULL,'Pending','2022-10-15T17:45:52+08:00'),(2019,1009,'Martin','Ong','2022-10-26T08:00:00+08:00',100,'Dentist',_binary '\0',NULL,'Approved','2022-10-28T13:08:24+08:00'),(2020,1009,'Martin','Ong','2023-01-03T08:00:00+08:00',100,'Outpatient Claim',_binary '\0',NULL,'Approved','2023-01-05T12:53:04+08:00'),(2021,1011,'John','Tan','2022-12-20T08:00:00+08:00',2000,'Engine Repair',_binary '\0',NULL,'Approved','2023-01-06T11:24:32+08:00'),(2022,1005,'Mary','Lee','2023-01-09T08:00:00+08:00',200,'Specialist Visit Follow Up',_binary '',2019,'Approved','2023-01-09T17:23:56+08:00'),(2023,1016,'Irene','Lim','2023-02-11T08:00:00+08:00',100,'Overseas Injury',_binary '\0',NULL,'Approved','2023-02-16T15:32:24+08:00'),(2024,1009,'Martin','Ong','2023-02-23T08:00:00+08:00',100,'Dentist',_binary '\0',NULL,'Pending','2023-02-25T17:33:58+08:00'),(2025,1015,'Sean','Chia','2023-02-28T08:00:00+08:00',10000,'Repairs Due to Fire From Neighbor',_binary '\0',NULL,'Pending','2023-03-01T10:00:00+08:00'),(2026,1009,'Martin','Ong','2023-03-10T08:00:00+08:00',100,'Outpatient Claim',_binary '\0',NULL,'Approved','2023-03-11T00:00:00+08:00'),(2027,1016,'Irene','Lim','2023-02-11T08:00:00+08:00',200,'Lost aggage',_binary '\0',NULL,'Pending','2023-02-25T17:39:42+08:00'),(2028,1016,'Irene','Lim','2023-02-28T08:00:00+08:00',50,'Overseas Injury Follow Up Treatment',_binary '',2023,'Pending','2023-02-28T17:33:58+08:00');
/*!40000 ALTER TABLE `InsuranceClaims` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `InsurancePolicies`
--

DROP TABLE IF EXISTS `InsurancePolicies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `InsurancePolicies` (
  `InsuranceID` int NOT NULL,
  `EmployeeID` int NOT NULL,
  `InsuranceType` varchar(100) NOT NULL,
  `PolicyStartDate` varchar(255) NOT NULL,
  `PolicyTerm` varchar(100) NOT NULL,
  `PolicyEndDate` varchar(255) NOT NULL,
  `ClaimLimit` float NOT NULL,
  `RemainingClaimLimit` float NOT NULL,
  PRIMARY KEY (`InsuranceID`),
  KEY `EmployeeID_idx` (`EmployeeID`),
  CONSTRAINT `EmployeeID` FOREIGN KEY (`EmployeeID`) REFERENCES `User` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `InsurancePolicies`
--

LOCK TABLES `InsurancePolicies` WRITE;
/*!40000 ALTER TABLE `InsurancePolicies` DISABLE KEYS */;
INSERT INTO `InsurancePolicies` VALUES (1005,58001002,'Personal Accident','2022-03-31T00:00:00+08:00','12 months','2023-03-31T00:00:00+08:00',1000,400),(1006,58001002,'Housing','2022-03-31T00:00:00+08:00','24 months','2024-03-31T00:00:00+08:00',50000,50000),(1007,58001002,'Car','2022-03-31T00:00:00+08:00','24 months','2024-03-31T00:00:00+08:00',25000,20000),(1008,58001003,'Personal Accident','2022-05-31T00:00:00+08:00','3 months','2022-08-31T00:00:00+08:00',1000,800),(1009,58001004,'Personal Accident','2022-05-31T00:00:00+08:00','12 months','2023-05-31T00:00:00+08:00',5000,4600),(1010,58001004,'Housing','2022-05-31T00:00:00+08:00','24 months','2024-05-31T00:00:00+08:00',50000,50000),(1011,58001003,'Car','2022-07-31T00:00:00+08:00','12 months','2023-07-31T00:00:00+08:00',25000,25000),(1012,58001004,'Car','2022-09-30T00:00:00+08:00','24 months','2024-09-30T00:00:00+08:00',25000,25000),(1013,58001001,'Housing','2022-11-30T00:00:00+08:00','24 months','2024-11-30T00:00:00+08:00',50000,50000),(1014,58001005,'Travel','2023-01-31T00:00:00+08:00','1 month','2023-02-28T00:00:00+08:00',1000,1000),(1015,58001005,'Housing','2023-01-31T00:00:00+08:00','24 months','2025-01-31T00:00:00+08:00',50000,50000),(1016,58001001,'Travel','2023-01-31T00:00:00+08:00','1 month','2023-02-28T00:00:00+08:00',1000,900);
/*!40000 ALTER TABLE `InsurancePolicies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `EmployeeID` int NOT NULL,
  `Password` varchar(20) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Age` int NOT NULL,
  PRIMARY KEY (`EmployeeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (58001001,'iLoveTT!23','Irene','Lim',27),(58001002,'DBSB#stB4nk','Mary','Lee',35),(58001003,'JoinSEED20@3','John','Tan',38),(58001004,'LiveM0reb$nk1ess','Martin','Ong',43),(58001005,'J4vaPyth0nSq!','Sean','Chia',52);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-01 16:33:58