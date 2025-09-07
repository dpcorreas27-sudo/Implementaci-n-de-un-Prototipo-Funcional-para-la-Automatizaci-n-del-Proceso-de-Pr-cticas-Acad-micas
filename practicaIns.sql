-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: practicasins
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `docente`
--

DROP TABLE IF EXISTS `docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `docente` (
  `idDocente` int NOT NULL,
  `idUsuario` int DEFAULT NULL,
  `tipoContratacion` varchar(50) DEFAULT NULL,
  `salario` float DEFAULT NULL,
  PRIMARY KEY (`idDocente`),
  KEY `idUsuario` (`idUsuario`),
  CONSTRAINT `docente_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docente`
--

LOCK TABLES `docente` WRITE;
/*!40000 ALTER TABLE `docente` DISABLE KEYS */;
INSERT INTO `docente` VALUES (1,1,'Tiempo Completo',3500000),(2,2,'Tiempo Completo',3500000);
/*!40000 ALTER TABLE `docente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante`
--

DROP TABLE IF EXISTS `estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante` (
  `idEstudiante` int NOT NULL,
  `codigoEstudiante` int NOT NULL,
  `idUsuario` int DEFAULT NULL,
  `idPrograma` int DEFAULT NULL,
  PRIMARY KEY (`idEstudiante`),
  KEY `idUsuario` (`idUsuario`),
  KEY `idPrograma` (`idPrograma`),
  CONSTRAINT `estudiante_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`),
  CONSTRAINT `estudiante_ibfk_2` FOREIGN KEY (`idPrograma`) REFERENCES `programa` (`idPrograma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante`
--

LOCK TABLES `estudiante` WRITE;
/*!40000 ALTER TABLE `estudiante` DISABLE KEYS */;
INSERT INTO `estudiante` VALUES (1,20210101,2,1),(2,7022101,2,1);
/*!40000 ALTER TABLE `estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ofertapractica`
--

DROP TABLE IF EXISTS `ofertapractica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ofertapractica` (
  `idOfertaPractica` int NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `fechaPublicacion` datetime DEFAULT NULL,
  PRIMARY KEY (`idOfertaPractica`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ofertapractica`
--

LOCK TABLES `ofertapractica` WRITE;
/*!40000 ALTER TABLE `ofertapractica` DISABLE KEYS */;
INSERT INTO `ofertapractica` VALUES (1,'Unidad 3 – Taller Integrador','Proyecto de desarrollo en Java y Spring para sistema de gestión de Prácticas.','2025-09-07 10:00:00'),(2,'Desarrollo software Prácticas Académicas','Proyecto de desarrollo en Java y Spring para sistema de Prácticas Académicas.','2025-09-07 10:00:00');
/*!40000 ALTER TABLE `ofertapractica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `practica`
--

DROP TABLE IF EXISTS `practica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `practica` (
  `idPractica` int NOT NULL,
  `idEstudiante` int DEFAULT NULL,
  `idDocente` int DEFAULT NULL,
  `fechaInicio` datetime DEFAULT NULL,
  `fechaFin` datetime DEFAULT NULL,
  `estado` varchar(45) NOT NULL,
  `idOfertaPractica` int DEFAULT NULL,
  PRIMARY KEY (`idPractica`),
  KEY `idEstudiante` (`idEstudiante`),
  KEY `idDocente` (`idDocente`),
  KEY `idOfertaPractica` (`idOfertaPractica`),
  CONSTRAINT `practica_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `estudiante` (`idEstudiante`),
  CONSTRAINT `practica_ibfk_2` FOREIGN KEY (`idDocente`) REFERENCES `docente` (`idDocente`),
  CONSTRAINT `practica_ibfk_3` FOREIGN KEY (`idOfertaPractica`) REFERENCES `ofertapractica` (`idOfertaPractica`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `practica`
--

LOCK TABLES `practica` WRITE;
/*!40000 ALTER TABLE `practica` DISABLE KEYS */;
INSERT INTO `practica` VALUES (1,1,1,'2025-05-20 08:00:00','2025-11-20 18:00:00','Asignada',1);
/*!40000 ALTER TABLE `practica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programa`
--

DROP TABLE IF EXISTS `programa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programa` (
  `idPrograma` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `codigo` int NOT NULL,
  PRIMARY KEY (`idPrograma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programa`
--

LOCK TABLES `programa` WRITE;
/*!40000 ALTER TABLE `programa` DISABLE KEYS */;
INSERT INTO `programa` VALUES (1,'Ingeniería de Sistemas',1001);
/*!40000 ALTER TABLE `programa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL,
  `primerNombre` varchar(45) NOT NULL,
  `segundoNombre` varchar(45) DEFAULT NULL,
  `primerApellido` varchar(45) NOT NULL,
  `segundoApellido` varchar(45) DEFAULT NULL,
  `correo` varchar(60) NOT NULL,
  `contrasena` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Deisy','Paola','Correa','Sánchez','deisy.correa@email.com','clave123'),(2,'Cristopher','Alexandre','Restrepo','Correa','maria.lopez@email.com','password456');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'practicasins'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-26  6:18:21
