-- phpMyAdmin SQL Dump
-- version 3.5.0
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 03, 2016 at 04:50 PM
-- Server version: 5.5.53
-- PHP Version: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `gangastik`
--

-- --------------------------------------------------------

--
-- Table structure for table `beneficios`
--

CREATE TABLE IF NOT EXISTS `beneficios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idcategoria` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `texto` text NOT NULL,
  `gangs` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `beneficios`
--

INSERT INTO `beneficios` (`id`, `idcategoria`, `nombre`, `texto`, `gangs`, `cantidad`, `imagen`) VALUES
(1, 0, 'Tappsi', 'Obtén un viaje gratis.....', 1500, 50, 'avatar1-1476373562.png');

-- --------------------------------------------------------

--
-- Table structure for table `categorias`
--

CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `imagen`) VALUES
(2, 'Accesorios', 'accesorios-1477329302.png'),
(3, 'Belleza', 'belleza-1477329502.png'),
(4, 'Bienestar', 'bienestar-1477329518.png'),
(5, 'Comida', 'comida-1477329198.png'),
(6, 'Deportes', 'deportes-1477329185.png'),
(7, 'Educación y lectura', 'educaciocn-1477329171.png'),
(8, 'Entretenimiento', 'entretenimiento-1477329152.png'),
(9, 'Electrodomésticos', 'electrodomesticos-1477329141.png'),
(10, 'Hogar', 'hogar-1477329126.png'),
(11, 'Infantil', 'infantil-1477329000.png'),
(12, 'Mascotas', 'mascotas-1477328981.png'),
(13, 'Salud', 'salud-1477328966.png'),
(14, 'Tecnología', 'tecnologia-1477328862.png'),
(15, 'Vehículos', 'vehiculos-1477328847.png'),
(16, 'Viajes', 'viajes-1477328826.png');

-- --------------------------------------------------------

--
-- Table structure for table `ciudades`
--

CREATE TABLE IF NOT EXISTS `ciudades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `ciudades`
--

INSERT INTO `ciudades` (`id`, `nombre`) VALUES
(1, 'Cali'),
(2, 'Cartagena'),
(3, 'Bogotá');

-- --------------------------------------------------------

--
-- Table structure for table `codigos_logs`
--

CREATE TABLE IF NOT EXISTS `codigos_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `codigo` varchar(10) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `contacto`
--

CREATE TABLE IF NOT EXISTS `contacto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `asunto` varchar(255) NOT NULL,
  `mensaje` text NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `contacto`
--

INSERT INTO `contacto` (`id`, `nombre`, `email`, `asunto`, `mensaje`, `fecha`) VALUES
(1, 'Diego Pedroza Rodriguez', 'diego.pedrozar@gmail.com', 'Contaco web', 'deseo saber como unirme a gangastik', '2016-10-13 10:27:50');

-- --------------------------------------------------------

--
-- Table structure for table `cron_logs`
--

CREATE TABLE IF NOT EXISTS `cron_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `log` text NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `marcas`
--

CREATE TABLE IF NOT EXISTS `marcas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `web` varchar(255) NOT NULL,
  `razon_social` varchar(255) NOT NULL,
  `nit` varchar(255) NOT NULL,
  `productos_promover` text NOT NULL,
  `aprobado` set('s','n','p') NOT NULL DEFAULT 'p',
  `patrocinador` set('s','n') NOT NULL DEFAULT 'n',
  `imagen_patrocinador` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `marcas`
--

INSERT INTO `marcas` (`id`, `nombre`, `apellido`, `email`, `imagen`, `telefono`, `direccion`, `web`, `razon_social`, `nit`, `productos_promover`, `aprobado`, `patrocinador`, `imagen_patrocinador`, `token`) VALUES
(1, 'Bosi', 'Bambino', 'angelica.verano@grancomunicaciones.com', 'logo-bosi-1476292718.png', '123456', 'call1 123 #23', '', 'Bosi', '123456', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod interdum mollis. Nulla sit amet ex metus. Nunc nec lectus elementum, tincidunt risus ac, tristique urna. Aenean placerat, mauris id varius blandit, ipsum massa consectetur sapien, nec volutpat ex justo et lorem. Vivamus maximus eros et est cursus consectetur. Ut et nisi vitae justo blandit tincidunt id vel diam. Morbi condimentum diam sit amet vulputate iaculis. Donec in sem magna. Maecenas sit amet nunc ut diam rutrum tempor et sed ex. Suspendisse ac sollicitudin sapien, sed malesuada dolor. Donec ut lacus at urna mattis blandit a id ipsum. Nulla suscipit tortor magna, at tristique augue posuere sit amet. Pellentesque metus nisl, aliquam sit amet mollis non, pulvinar eget lectus. Duis facilisis, mi id malesuada maximus, neque justo lobortis lectus, at fermentum quam est vel risus. Nunc tincidunt nisl dui, in congue metus rhoncus eu.', 's', 'n', '', ''),
(3, 'Reebok', 'Reebok International Limited', 'albertarias@grancomunicaciones.com', 'reebok-1476299017.png', '313 24 56', 'Cll 12 # 34 - 12', '', 'Reebok', '1234565', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod interdum mollis. Nulla sit amet ex metus. Nunc nec lectus elementum, tincidunt risus ac, tristique urna. Aenean placerat, mauris id varius blandit, ipsum massa consectetur sapien, nec volutpat ex justo et lorem. Vivamus maximus eros et est cursus consectetur. Ut et nisi vitae justo blandit tincidunt id vel diam. Morbi condimentum diam sit amet vulputate iaculis. Donec in sem magna. Maecenas sit amet nunc ut diam rutrum tempor et sed ex. Suspendisse ac sollicitudin sapien, sed malesuada dolor. Donec ut lacus at urna mattis blandit a id ipsum. Nulla suscipit tortor magna, at tristique augue posuere sit amet. Pellentesque metus nisl, aliquam sit amet mollis non, pulvinar eget lectus. Duis facilisis, mi id malesuada maximus, neque justo lobortis lectus, at fermentum quam est vel risus. Nunc tincidunt nisl dui, in congue metus rhoncus eu.', 's', 'n', '', ''),
(4, 'Mattel', 'Mattel', 'cesar@grancomunicaciones.com', 'mattel-logo-1476298520.png', '314 345 45', 'Cll 13 # 45 37', '', 'Mattel', '3456789', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod interdum mollis. Nulla sit amet ex metus. Nunc nec lectus elementum, tincidunt risus ac, tristique urna. Aenean placerat, mauris id varius blandit, ipsum massa consectetur sapien, nec volutpat ex justo et lorem. Vivamus maximus eros et est cursus consectetur. Ut et nisi vitae justo blandit tincidunt id vel diam. Morbi condimentum diam sit amet vulputate iaculis. Donec in sem magna. Maecenas sit amet nunc ut diam rutrum tempor et sed ex. Suspendisse ac sollicitudin sapien, sed malesuada dolor. Donec ut lacus at urna mattis blandit a id ipsum. Nulla suscipit tortor magna, at tristique augue posuere sit amet. Pellentesque metus nisl, aliquam sit amet mollis non, pulvinar eget lectus. Duis facilisis, mi id malesuada maximus, neque justo lobortis lectus, at fermentum quam est vel risus. Nunc tincidunt nisl dui, in congue metus rhoncus eu.', 's', 's', 'captivating-3d-home-videos-virtual-guide-to-build-home-10-1476375974.jpg', ''),
(5, 'Sony', 'Sony Corporation', 'cy1@misena.edu.co', 'logosony-1476308274.png', '3142345647', 'Cll 132 # 34 - 12', '', 'Sony', '123456789', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 's', 's', 'sony-world-1478034934.png', ''),
(6, 'Diego', 'Pedroza Rodriguez', 'diego.pedrozar@gmail.com', 'adidas-logo-png-image-1476373814.png', '3013687937', 'Cll 123 #45-20', 'www.adidas.com', 'Adidas', '987654321', 'Artículos deportivos', 's', 'n', '', ''),
(7, 'Falabella', 'Falabella', 'yohana.canon@grancomunicaciones.com', 'falabella-logo-1476890871.png', '3196675900', 'Cll 53 # 23 57', '', 'Falabella', '1234567890', 'Viajes, Belleza, Hogar, Vehículos', 's', 's', 'patrocinio-1478032011.png', ''),
(8, 'HOMECENTER', 'SODIMAC', 'yohanacp_07@yahoo.com', 'homecenter-1476908229.png', '312222222', 'Cll 26 # 90 87', '', 'Homecenter', '12345678907', 'Vehículos, Mascotas, hogar', 's', 's', 'homecenter1-1478040837.png', ''),
(9, 'Jeno''s', 'Pizza', 'veranoangelica@gmail.com', 'jenospizza-1476915017.png', '34225678', 'Cll 200 #7 20', '', 'Jeno''s Pizza', '12345678900', 'Comida', 's', 'n', '', ''),
(10, 'Tatiana', 'García', 'comercial@criterium.com.co', 'logo-new-balance-dian-hasan-branding-us-2-zpse6660b6d-1477489380.png', '3112137958', 'Calle 129b # 57a – 87', 'www.newbalance.com', 'New Balance', '1018402816', 'Artículos deportivos', 's', 'n', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `marcas_establecimiento`
--

CREATE TABLE IF NOT EXISTS `marcas_establecimiento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idmarca` int(11) NOT NULL,
  `idciudad` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `latitud` varchar(255) NOT NULL,
  `longitud` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `marcas_establecimiento`
--

INSERT INTO `marcas_establecimiento` (`id`, `idmarca`, `idciudad`, `nombre`, `direccion`, `telefono`, `latitud`, `longitud`, `imagen`) VALUES
(1, 1, 3, 'Bosi Unicentro', 'Cll 40 # 30 45', '1234 1234', '4.6305061', '-74.07706910000002', ''),
(2, 1, 1, 'Bosi la 14', 'Cll 14 23 5', '1234 5654', '3.4129658', '-76.52869240000001', 'bosi-establecimiento-1476293347.png'),
(3, 7, 1, 'Falabella CC. Pacific Mall', 'Calle 36N # 6A – 65', '+5723816373', '3.4114944', '-76.51604680000003', 'fallabella-cali-1476891750.png'),
(4, 7, 3, 'Falabella CC. Hayuelos', 'Cl. 20 #82 52', '12345432', '4.6621975', '-74.13039470000001', ''),
(5, 3, 3, 'Reebok CC. Santa Fé', 'Calle 183 # 45-03 local 1-118', '3142356787', '4.7605562', '-74.04660539999998', 'tienda-reebok-1476303392.png'),
(6, 3, 1, 'Reebok CC. Unicentro', 'Cra. 100 #5-169, La Playa, Cali', '2 4896055', '3.375303', '-76.5424764', 'reebok-cali-1476303691.png'),
(7, 5, 3, 'SONY STORE Calle 122', 'Calle 122 # 18C-04', '311 234 5647', '4.701391999999999', '-74.04699900000003', 'sony-cll-122-1476308939.png'),
(8, 5, 3, 'SONY STORE ANDINO', 'Carrera 11 82-51 CC. Andino Local 171', '3102980372', '4.666296054692907', '-74.05260673729862', 'sony-store-andino-1476309352.png'),
(9, 5, 3, 'SONY STORE GRAN ESTACIÓN', 'CC. Gran Estación Avenida Calle 26 Nº 62-48 Local 2-83', '311 234 0000', '4.6486889', '-74.10072000000002', 'gallery-img-1476312018.png'),
(10, 4, 3, 'Mattel Centro Comercial Bima', 'Autopista Norte - 232', '2365853', '4.8078352', '-74.03741009999999', 'cc-bima-1476917133.png'),
(11, 7, 2, 'Falabella CC. Mall Plaza', 'Cra. 13 No. 31-45 Chambacu', '324324324', '37.606998', '-0.9843458000000282', 'tienda-1476892525.png'),
(12, 4, 3, 'Mattel Juguetería', 'Local 4-101, I-autonorte #232', '4135546', '4.759438850325811', '-74.04482914835205', ''),
(13, 8, 3, 'Homecenter Cll. 26', 'Cll 26 # 90 87', '345345345', '4.67167465446577', '-74.11418034464111', ''),
(14, 8, 3, 'Homecenter Cll. 80', 'Cll. 80 # 68 56', '123 123 123', '4.684598787166612', '-74.07865804766845', 'homecenter-cll80-6-1476908645.png'),
(15, 9, 2, 'Jeno´s Pizza', 'CC. CARIBE PLAZA, local 214', '+57 5 6720798', '10.421985175216859', '-75.54047862176515', ''),
(16, 9, 3, 'CC. Titán Plaza', 'CC. Titán Plaza Piso 3', '+57 1 4259525', '4.69465013021779', '-74.08612531756592', 'jenos-titan-1476915864.png'),
(17, 7, 3, 'Falabella Centro Mayor', 'Autopista Sur # 38 A Sur', '300 6038727', '4.59158504779435', '-74.12394718891602', 'centro-mayor-1477089768.png');

-- --------------------------------------------------------

--
-- Table structure for table `marcas_usuarios`
--

CREATE TABLE IF NOT EXISTS `marcas_usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idmarca` int(11) NOT NULL,
  `idmarcaestablecimiento` int(11) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `marcas_usuarios`
--

INSERT INTO `marcas_usuarios` (`id`, `idmarca`, `idmarcaestablecimiento`, `usuario`, `password`) VALUES
(1, 1, 2, 'bosi.la14', 'ncn1MsFna06Yc'),
(2, 8, 13, 'yohana.canon@grancomunicaciones.com', 'ncP.UWk0BgXpA'),
(3, 1, 1, 'angelica.verano@grancomunicaciones.com', 'ncn1MsFna06Yc'),
(4, 7, 3, 'yohana.canon@grancomunicaciones.com', 'ncn1MsFna06Yc');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE IF NOT EXISTS `member` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `idmarca` int(11) NOT NULL,
  `user` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `perfil` set('ADMIN','TIENDA') NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `idmarca`, `user`, `password`, `perfil`, `imagen`, `token`) VALUES
(1, 0, '@dmin', 'ncn1MsFna06Yc', 'ADMIN', '', ''),
(11, 1, 'angelica.verano@grancomunicaciones.com', 'ncn1MsFna06Yc', 'TIENDA', 'logo-bosi-1476292718.png', ''),
(12, 4, 'cesar@grancomunicaciones.com', 'ncn1MsFna06Yc', 'TIENDA', 'mattel-logo-1476298520.png', ''),
(13, 3, 'albertarias@grancomunicaciones.com', 'ncn1MsFna06Yc', 'TIENDA', 'reebok-1476299017.png', ''),
(14, 5, 'cy1@misena.edu.co', 'ncn1MsFna06Yc', 'TIENDA', 'logosony-1476308274.png', ''),
(15, 6, 'diego.pedrozar@gmail.com', 'ncn1MsFna06Yc', 'TIENDA', 'adidas-logo-png-image-1476373814.png', ''),
(16, 7, 'yohana.canon@grancomunicaciones.com', 'ncn1MsFna06Yc', 'TIENDA', 'falabella-logo-1476890871.png', ''),
(17, 8, 'yohanacp_07@yahoo.com', 'ncn1MsFna06Yc', 'TIENDA', 'homecenter-1476908229.png', ''),
(18, 9, 'veranoangelica@gmail.com', 'ncn1MsFna06Yc', 'TIENDA', 'jenospizza-1476915017.png', ''),
(19, 10, 'comercial@criterium.com.co', 'ncn1MsFna06Yc', 'TIENDA', 'logo-new-balance-dian-hasan-branding-us-2-zpse6660b6d-1477489380.png', '');

-- --------------------------------------------------------

--
-- Table structure for table `misiones`
--

CREATE TABLE IF NOT EXISTS `misiones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` set('gangs','avatar','productos','patrocinios','beneficios') NOT NULL,
  `texto` text NOT NULL,
  `valor` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

CREATE TABLE IF NOT EXISTS `newsletter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `newsletter`
--

INSERT INTO `newsletter` (`id`, `iduser`, `email`, `fecha`) VALUES
(1, 3, 'diego.pedroza@grancomunicaciones.com', '2016-10-13 10:19:08'),
(2, 0, 'comercial@criterium.com.co', '2016-10-26 09:50:58');

-- --------------------------------------------------------

--
-- Table structure for table `palabras_clave`
--

CREATE TABLE IF NOT EXISTS `palabras_clave` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `palabra` varchar(20) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `palabras_clave`
--

INSERT INTO `palabras_clave` (`id`, `palabra`, `fecha`) VALUES
(1, 'HALLOWEEN', '2016-10-13 10:30:15'),
(2, 'AMOR Y AMISTAD', '2016-10-13 10:30:35');

-- --------------------------------------------------------

--
-- Table structure for table `preguntas_productos`
--

CREATE TABLE IF NOT EXISTS `preguntas_productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` set('texto','imagen') NOT NULL,
  `numopciones` set('2','4','6','8','10') NOT NULL,
  `tipo_seleccion` set('unica','multiple') NOT NULL,
  `pregunta` varchar(255) NOT NULL,
  `opcion1` varchar(255) NOT NULL,
  `opcion2` varchar(255) NOT NULL,
  `opcion3` varchar(255) NOT NULL,
  `opcion4` varchar(255) NOT NULL,
  `opcion5` varchar(255) NOT NULL,
  `opcion6` varchar(255) NOT NULL,
  `opcion7` varchar(255) NOT NULL,
  `opcion8` varchar(255) NOT NULL,
  `opcion9` varchar(255) NOT NULL,
  `opcion10` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=29 ;

--
-- Dumping data for table `preguntas_productos`
--

INSERT INTO `preguntas_productos` (`id`, `tipo`, `numopciones`, `tipo_seleccion`, `pregunta`, `opcion1`, `opcion2`, `opcion3`, `opcion4`, `opcion5`, `opcion6`, `opcion7`, `opcion8`, `opcion9`, `opcion10`) VALUES
(1, 'texto', '6', 'unica', '¿Cual es tu comida favorita?', 'Italiana', 'Carne', 'Pescado', 'Vegetariana', 'Mariscos', 'Pollo', '', '', '', ''),
(2, 'texto', '4', 'unica', '¿Cuál de estas actividades te gusta más?', 'Comer', 'Bailar', 'Ir a cine', 'Caminar', '', '', '', '', '', ''),
(3, 'texto', '4', 'unica', '¿Que deporte te gusta más?', 'Fútbol', 'Baloncesto', 'Tenis', 'Ciclismo', '', '', '', '', '', ''),
(4, 'texto', '6', 'multiple', 'Cuando te hablan de ropa deportiva, ¿Cuales son las marcas que primero se te vienen a la cabeza?', 'Adidas', 'Nike', 'Reebok', 'Under Armour', 'Puma', 'Speedo', '', '', '', ''),
(5, 'texto', '4', 'unica', '¿Qué tipos de productos compras con mayor frecuencia?', 'Zapatos', 'Accesorios', 'Ropa', 'Ninguna de las anteriores', '', '', '', '', '', ''),
(6, 'texto', '4', 'unica', '¿Qué tipo de ropa prefieres?', 'Formal', 'Informal', 'Deportiva', 'Ninguna de las anteriores', '', '', '', '', '', ''),
(7, 'texto', '4', 'unica', '¿Con qué frecuencia comes fuera de casa?', 'Todos los días', '3 veces por semana', '1 vez por semana', 'Nunca', '', '', '', '', '', ''),
(8, 'texto', '4', 'unica', '¿Qué tipos de zapatos usas con mayor frecuencia?', 'Zapatos deportivos', 'Zapatos casuales', 'Botas', 'Zapatos elegantes', '', '', '', '', '', ''),
(9, 'texto', '4', 'unica', 'Cuántas veces al mes compras productos tecnológicos?', '3 veces al mes', '1 vez al mes', 'Sólo dos veces al año', 'Sólo cuando debo reemplazar algo por daño', '', '', '', '', '', ''),
(10, 'texto', '2', 'unica', '¿Viajas frecuentemente?', 'SI', 'NO', '', '', '', '', '', '', '', ''),
(11, 'texto', '6', 'multiple', '¿En qué categorías inviertes mayor parte de tu dinero?', 'Accesorios', 'Belleza', 'Comida', 'Deportes', 'Entretenimiento', 'Tecnología', '', '', '', ''),
(12, 'texto', '2', 'unica', '¿Compras productos de cuidado facial con frecuencia?', 'SI', 'NO', '', '', '', '', '', '', '', ''),
(13, 'texto', '4', 'unica', 'En tu decisión de compra de producto, consideras lo más importante:', 'Calidad', 'Garantía', 'Precio', 'Marca', '', '', '', '', '', ''),
(14, 'texto', '4', 'unica', '¿Cuántos libros lees al año?', 'No leo libros, sólo revistas/periódicos', '1', '2', '3 o más', '', '', '', '', '', ''),
(15, 'texto', '2', 'unica', 'Al comprar libros, ¿Cuáles prefieres?', 'e-books', 'Libros impresos', '', '', '', '', '', '', '', ''),
(16, 'texto', '2', 'unica', '¿Tienes mascotas?', 'SI', 'NO', '', '', '', '', '', '', '', ''),
(17, 'texto', '2', 'unica', '¿Cuánto dinero gastas al mes en productos de belleza?', 'Menos de $100.000', 'Más de $100.000', '', '', '', '', '', '', '', ''),
(18, 'texto', '4', 'unica', '¿Qué es lo más importante al comprar un vehículo?', 'Marca', 'Precio', 'Modelo', 'Servicios taller y piezas', '', '', '', '', '', ''),
(19, 'texto', '4', 'unica', 'Con tu hijo(a), ¿En qué inviertes más dinero ?', 'Ropa', 'Bienestar/Salud', 'Educación', 'Juguetes', '', '', '', '', '', ''),
(20, 'texto', '2', 'unica', '¿Te gustan los videojuegos?', 'SI', 'NO', '', '', '', '', '', '', '', ''),
(21, 'texto', '4', 'unica', '¿Cómo te definirías en relación a las tendencias de moda?', 'Todo un fashionist', 'Seguidor de tendencias', 'Creador de tendencias', '¿Moda?¿Qué es eso?', '', '', '', '', '', ''),
(22, 'texto', '2', 'unica', '¿Qué tipo de ropa prefieres?', 'Casual', 'Formal', '', '', '', '', '', '', '', ''),
(23, 'texto', '4', 'unica', '¿Cuánto tiempo dedicas a la hora de arreglarte?', 'No dedico tiempo en eso', 'Menos de 1 hora', '1 hora', 'Más de 1 hora', '', '', '', '', '', ''),
(24, 'texto', '2', 'unica', '¿Qué tanto te importan las marcas a la hora de comprar?', 'Mucho', 'Poco', '', '', '', '', '', '', '', ''),
(25, 'texto', '4', 'unica', '¿Con qué frecuencia cambias de auto?', 'Cada año', 'Cada 2 años', 'Cada 5 años', 'Hasta que mi auto no funcione', '', '', '', '', '', ''),
(26, 'texto', '4', 'unica', '¿Sigues algún régimen nutricional?', 'Si, hago una estricta dieta', 'Soy vegetariana/vegana', 'No, pero cuido mi alimentación', 'No, como lo que quiero', '', '', '', '', '', ''),
(27, 'texto', '2', 'unica', '¿Haces ejercicio regularmente?', 'SI', 'NO', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `preguntas_registro`
--

CREATE TABLE IF NOT EXISTS `preguntas_registro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orden` int(11) NOT NULL,
  `tipo` set('texto','imagen') NOT NULL,
  `numopciones` set('2','4','6','8','10') NOT NULL,
  `tipo_seleccion` set('unica','multiple') NOT NULL,
  `pregunta` varchar(255) NOT NULL,
  `opcion1` varchar(255) NOT NULL,
  `opcion2` varchar(255) NOT NULL,
  `opcion3` varchar(255) NOT NULL,
  `opcion4` varchar(255) NOT NULL,
  `opcion5` varchar(255) NOT NULL,
  `opcion6` varchar(255) NOT NULL,
  `opcion7` varchar(255) NOT NULL,
  `opcion8` varchar(255) NOT NULL,
  `opcion9` varchar(255) NOT NULL,
  `opcion10` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `preguntas_registro`
--

INSERT INTO `preguntas_registro` (`id`, `orden`, `tipo`, `numopciones`, `tipo_seleccion`, `pregunta`, `opcion1`, `opcion2`, `opcion3`, `opcion4`, `opcion5`, `opcion6`, `opcion7`, `opcion8`, `opcion9`, `opcion10`) VALUES
(1, 1, 'texto', '2', 'unica', '¿Cuál es tu género?', 'Masculino', 'Femenino', '', '', '', '', '', '', '', ''),
(2, 2, 'texto', '6', 'unica', '¿Cuál estás cursando o fue el último que cursaste?', 'Primaria', 'Bachillerato', 'Técnico', 'Tecnólogo', 'Universidad', 'Postgrado', '', '', '', ''),
(3, 4, 'texto', '4', 'unica', '¿Cómo está tu corazón?', 'Soltero(a)', 'Casado(a)', 'Separado(a)', 'Viudo(a)', '', '', '', '', '', ''),
(4, 5, 'texto', '4', 'unica', '¿Tienes hijos?', 'Ninguno', 'Uno', 'Dos', 'Tres o  más', '', '', '', '', '', ''),
(5, 3, 'texto', '10', 'multiple', '¿De cuáles categorías te gustaría ver productos?', 'Mascotas', 'Accesorios', 'Belleza', 'Deportes', 'Infantil', 'Comida', 'Entretenimiento', 'Viajes', 'Bienestar', 'Tecnología');

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idmarca` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `tipo_pago` set('precio','texto') NOT NULL,
  `precio_antes` bigint(20) NOT NULL,
  `precio_ahora` bigint(20) NOT NULL,
  `texto_pago` varchar(255) NOT NULL,
  `vencimiento` datetime NOT NULL,
  `cantidad` int(11) NOT NULL,
  `texto` text NOT NULL,
  `condiciones` text NOT NULL,
  `exclusivo` set('si','no') NOT NULL,
  `aprobado` set('s','n','p') NOT NULL DEFAULT 'p',
  `activo` set('si','no') NOT NULL DEFAULT 'no',
  `restantes` int(11) NOT NULL,
  `redimidos` int(11) NOT NULL DEFAULT '0',
  `edad_min` int(11) NOT NULL,
  `edad_max` int(11) NOT NULL,
  `idciudad` int(11) NOT NULL,
  `genero` set('Masculino','Femenino','Ambos') NOT NULL,
  `estado_civil` set('Soltero','Casado','Divorciado','Viudo') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=30 ;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `idmarca`, `nombre`, `tipo_pago`, `precio_antes`, `precio_ahora`, `texto_pago`, `vencimiento`, `cantidad`, `texto`, `condiciones`, `exclusivo`, `aprobado`, `activo`, `restantes`, `redimidos`, `edad_min`, `edad_max`, `idciudad`, `genero`, `estado_civil`) VALUES
(1, 1, 'Bosi Bolso Vinotinto', 'precio', 299900, 269900, '', '2016-11-04 00:00:00', 20, 'Bolso <span style="font-weight: bold;">Bosi</span> color Vinotinto en material Ecocuero', 'Lectus. Duis facilisis, mi id malesuada maximus, neque justo lobortis lectus, at fermentum quam est vel risus. Nunc tincidunt nisl dui, in congue metus rhoncus eu.', 'no', 's', 'si', 18, 2, 25, 30, 3, 'Femenino', ''),
(2, 1, 'Bosi Billetera', 'precio', 124900, 87900, '', '2016-11-15 00:00:00', 25, '<p style="text-align: justify; ">Billetera Bosi color negro/beige, elaborada en cuero, diseño con textura corrugada, finas costuras, franja café y logotipo dorado en la zona frontal. Posee compartimiento con cierre de cremallera, organizadores en su interior, largo de 19cm y ancho de 10cm. Producto nacional.</p>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labour.', 'no', 's', 'si', 19, 6, 20, 50, 3, 'Ambos', 'Soltero'),
(3, 1, 'Bota Alta', 'precio', 329900, 238900, '', '2016-12-01 00:00:00', 50, 'Bota Alta taupe <span style="font-weight: bold;">Bosi,</span> elaborada en cuero, caña de 35.5cm, collarín con 17.5cm de diámetro y tacón de 3.5cm. Cuenta con diseño casual de textura semi corrugada a un tono, revestimiento troquelado que genera contraste y finas costuras visibles. Tiene punta redonda, empeine moldeado, bordes reforzados, cierre cremallera y talón con contrafuerte. Forrada en textil y cuero con suela en TR.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labour.', 'no', 's', 'si', 50, 0, 25, 35, 1, 'Femenino', 'Soltero'),
(4, 1, 'Morral Bosi', 'precio', 198900, 269900, '', '2016-11-24 00:00:00', 41, '<p>Morral verde Bosi, elaborado en cuero, diseño casual de textura con efecto reptil a un tono, aplique alusivo a la marca que contrasta y finas costuras visibles. Tiene compartimiento amplio con forro en textil, organizadores, cierre cremallera, solapa con broche giratorio, correas de hombros graduables y bordes reforzados. Sus medidas son alto 33cm, ancho 29cm y fondo 10cm.<br></p>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labour.', 'no', 's', 'si', 41, 0, 25, 30, 1, 'Femenino', 'Viudo'),
(5, 1, 'Bolso Manos Libres', 'precio', 239900, 157900, '', '2016-12-02 00:00:00', 45, '<p>Bolso Manos Libres Café Bosi</p>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labour.', 'no', 's', 'si', 44, 1, 18, 36, 3, 'Ambos', 'Soltero'),
(6, 3, 'Buso Verde Reebok', 'precio', 129900, 90900, '', '2017-10-31 07:01:01', 15, 'Buso Verde Reebok Wor Plywrm Po', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'no', 's', 'si', 15, 0, 17, 30, 3, 'Femenino', 'Casado'),
(7, 3, 'Bolso Reebok', 'precio', 124900, 74900, '', '2016-12-02 00:00:00', 27, '<p>Bolso Reebok Se Women''s Tote color rosado, elaborado en nailon, diseño con finas costuras, logotipo de la marca y detalles en tono morado. Posee dos bolsillos frontales, compartimiento con cierre de imán y dos correas de hombro. Sus medidas son largo de 35 cm, ancho de 50 cm y fondo de 15 cm.</p><p>Producto importado.</p>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labour.', 'no', 's', 'si', 27, 0, 17, 32, 1, 'Femenino', ''),
(8, 3, 'Classic Sport Clean', 'precio', 249900, 190900, '', '2016-11-24 00:00:00', 30, 'Lifestyle Negro-Gris-Azul Reebok Classic Sport Clean', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labour.', 'si', 's', 'si', 29, 1, 17, 30, 3, 'Ambos', ''),
(9, 3, 'Spartan Gloves', 'precio', 99900, 56900, '', '2016-11-26 00:00:00', 60, '<p>Guantes de Entrenamiento Verde-Negro Reebok Spartan Gloves</p><p><br></p>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labour.', 'no', 's', 'si', 59, 1, 18, 25, 3, 'Masculino', 'Casado'),
(10, 7, 'Poltrona', 'precio', 1499900, 969900, '', '2016-12-17 00:00:00', 50, 'Disfruta del diseño moderno de la Poltrona Concept Tela de <span style="font-weight: bold;">Mica </span>mientras completas tu juego de sala. Podrás ubicarla en cualquier espacio y convertir el lugar en un sitio lleno de elegancia y modernidad.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labour.', 'no', 's', 'si', 50, 0, 23, 39, 3, 'Ambos', 'Viudo'),
(11, 5, 'Audífonos SONY Extra Bass', 'precio', 149900, 99900, '', '2017-01-07 00:00:00', 35, '<p>Audífonos SONY de diadema Extra Bass MDR-XB450 azules con manos libres<br></p>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'no', 's', 'si', 35, 0, 17, 35, 3, 'Masculino', 'Divorciado'),
(12, 5, 'Memoria USB 8GB', 'precio', 13900, 9900, '', '2016-10-29 00:00:00', 52, '<p>Memoria USB SONY Microvault 8GB Negro<br></p>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labour.', 'no', 's', 'si', 52, 0, 16, 30, 3, 'Ambos', ''),
(13, 5, 'Cámara Semiprofesional', 'precio', 1199000, 1099000, '', '2016-11-27 00:00:00', 28, 'Cámara Sony Semiprofesional H400 Negra, cuenta con un enorme zoom óptico de 63x y un sensor de imagen Super HAD CCD de 20,1 megapíxeles efectivos.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labour.', 'no', 's', 'si', 28, 0, 22, 37, 3, 'Femenino', 'Casado'),
(14, 7, 'Loción hidratante', 'precio', 105000, 82000, '', '2017-06-16 00:00:00', 10, 'Loción hidratante <span style="font-weight: bold;">&nbsp;</span>facial <span style="font-weight: bold;">Burt''s Bees</span> Ideal para pieles opacas, 100% natural, a &nbsp;base de jalea real. Con SPF 7.<div><div><br></div></div>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper nisl non metus viverra, porta sollicitudin nisl imperdiet. Nunc rhoncus sem odio, quis molestie dui tincidunt eget. Sed efficitur urna lacus, eu consequat lacus accumsan eu. Aliquam non semper nulla. Proin consectetur massa efficitur dolor pharetra, egestas tempus turpis tincidunt. Nulla tincidunt cursus eros, et condimentum elit tincidunt semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse gravida nisi sit amet nulla rhoncus, sed feugiat felis fermentum.&nbsp;', 'no', 's', 'si', 10, 0, 20, 32, 1, 'Ambos', 'Soltero'),
(15, 4, 'Cartuchera Azul', 'precio', 16900, 10900, '', '2017-12-28 12:30:00', 25, '<p style="text-align: justify; ">Cartuchera<span style="font-weight: bold;"> MATTEL </span>color azul, elaborada en poliéster y Pvc, diseño con estampado de Spiderman en la zona frontal, tiene finas costuras y logotipo. Posee compartimiento con cierre de cremallera y etiqueta posterior para datos personales. Sus medidas son 11 x 22 cm.</p><p style="text-align: justify; "><br></p>', 'Sit erat utinam oblique id, ipsum saperet docendi at mea. Usu id viderer nominati voluptatibus, vim discere repudiare at. Tota audire incorrupte nec eu. Virtute dolorum no per, eum ut quidam posidonium concludaturque. Has eu fuisset percipit constituam, no veri oblique intellegebat vim, per agam minimum ne. Usu in tamquam imperdiet ullamcorper.', 'si', 's', 'si', 25, 0, 6, 12, 3, 'Masculino', ''),
(16, 4, 'Muñeca Frozen', 'precio', 139900, 100, '', '2017-08-22 00:00:00', 13, 'Muñeca Frozen Elsa Canta En Español Disney', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labour.', 'no', 's', 'si', 12, 1, 26, 31, 3, 'Ambos', ''),
(17, 7, 'SmartTV LED 40', 'precio', 2299000, 1299000, '', '2017-09-28 00:00:00', 7, 'Un diseño curvo imponente y<span style="font-weight: bold;"> resolución Full HD</span> convertirán al <span style="font-weight: bold;">LED 40"</span> FHD SmartTV Curvo | UN40K6500 de<span style="font-weight: bold;"> Samsung</span> en el consentido del hogar.&nbsp;', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labour.', 'no', 's', 'si', 7, 0, 30, 40, 1, 'Ambos', ''),
(18, 7, 'Máquina Antiacné', 'precio', 405000, 398900, '', '2017-10-31 00:00:00', 14, 'Dale el mejor cuidado a tu piel con la <span style="font-weight: bold;">Máquina Antiacné</span> de <span style="font-weight: bold;">Silkn</span>. Es la herramienta perfecta para que controles y disminuyas el acné en tu piel. Su radiación de calor con una matriz de luz azul actúa sobre las bacterias debajo de la piel para tratar tus problemas de acné.&nbsp;', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac molestie dui. Praesent sodales nisi neque, id tincidunt eros dignissim ut. Duis vestibulum leo erat, finibus sodales sem aliquet sit amet. Pellentesque lacus magna, feugiat non tempor in, venenatis nec enim. Ut elit lectus, convallis eu tellus pharetra, dignissim vulputate libero. Donec bibendum lorem sodales lorem tempor consectetur. Nullam sodales a diam vel molestie. Nullam malesuada metus quis justo vulputate, at suscipit lacus laoreet. Pellentesque mollis augue nec blandit interdum. Proin laoreet nunc in ex pellentesque, vel fringilla magna rutrum. Morbi vel euismod sem.', 'no', 's', 'si', 10, 4, 18, 25, 0, 'Masculino', ''),
(19, 7, 'Bogotá- Cartagena', 'precio', 300000, 196200, '', '2017-02-11 00:00:00', 30, 'Vuelo Bogotá - Cartagena de Indias, válido para tiquetes aéreos por persona.', 'Sujetas a cambio y disponibilidad al momento de reservar. Cupos limitados.', 'no', 's', 'si', 26, 4, 18, 40, 3, 'Ambos', ''),
(20, 7, 'Cuaderno Holley', 'precio', 12900, 6900, '', '2016-12-03 00:00:00', 175, 'Holley<div>Cuaderno HY-01C</div>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labour.', 'si', 's', 'si', 174, 1, 27, 32, 0, 'Ambos', ''),
(22, 7, 'Máquina de Afeitar', 'precio', 180900, 169900, '', '2017-11-05 00:00:00', 17, 'Máquina de afeitar Rotary R3 Power Series de <span style="font-weight: bold;">Remington</span>. Permite que el cabezote sea ajustable por completo en cualquier ángulo para que se adapte a tu cara y así reducir la irritación.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&nbsp;', 'no', 's', 'si', 9, 8, 24, 35, 0, 'Masculino', ''),
(23, 8, 'Kit Carretera', 'texto', 0, 0, 'Por compras superiores a $100000 de la sección "Automóviles" lleva gratis este producto.', '2016-11-20 00:00:00', 16, 'Kit de emergencia para carros con 8 elementos: &nbsp;Extintor de 5 libras, botiquín de primeros auxilios, bolsa de gasolina, linterna sin pilas, 2 guantes de hilaza, 2 tacos plásticos y 2 señales de precaución.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;', 'no', 's', 'si', 16, 0, 35, 45, 3, 'Ambos', 'Casado'),
(24, 8, 'Amplificador de Sonido', 'precio', 420900, 399900, '', '2016-12-24 00:00:00', 15, 'Amplificador 4/3/2 canales / 80W x 4 marca <span style="font-weight: bold;">Pioneer.</span><div><br></div>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;', 'si', 's', 'si', 15, 0, 35, 50, 3, 'Masculino', 'Soltero'),
(25, 8, 'Casa para Perro', 'precio', 250900, 239900, '', '2016-12-07 00:00:00', 7, 'Casa plástica para perros medianos, es práctica de transportar. El mantenimiento es muy fácil y resistente a todo clima. Esta hecha con materiales especiales que repele malos olores. Medidas: 87 x 72 x 75 cm.<div><br></div>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;', 'no', 's', 'si', 6, 1, 21, 34, 3, 'Ambos', ''),
(26, 8, 'Gimnasio Gatos', 'precio', 66900, 56900, '', '2016-11-24 00:00:00', 33, 'Gimnasio Para Gato 38 cm Desarmable <span style="font-weight: bold;">Pet Center</span>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;', 'no', 's', 'si', 32, 1, 18, 30, 3, 'Ambos', ''),
(27, 9, 'Lasagna x 2', 'precio', 39900, 29900, '', '2016-12-09 00:00:00', 12, 'Comparte tiempo en tu hora de comer, lleva 2 Lasagna a un precio especial', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&nbsp;', 'no', 's', 'si', 12, 0, 18, 20, 0, 'Ambos', ''),
(28, 9, 'Malteada Jeno´s', 'texto', 0, 0, '2x1 En malteadas', '2016-12-31 00:00:00', 20, 'Disfruta de un encuentro en Jeno´s Pizza y aprovecha 2x1 en malteadas.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&nbsp;', 'no', 's', 'si', 17, 3, 18, 30, 0, 'Ambos', ''),
(29, 4, 'Speedtropolis', 'precio', 159900, 130900, '', '2017-03-11 00:00:00', 48, '<span style="font-weight: bold;">Hot Wheels</span> Track Builder <span style="font-weight: bold;">Speedtropolis,</span>&nbsp;Taller Pista Juego.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;', 'no', 's', 'si', 48, 0, 4, 8, 0, 'Masculino', '');

-- --------------------------------------------------------

--
-- Table structure for table `productos_calificacion`
--

CREATE TABLE IF NOT EXISTS `productos_calificacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idproducto` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `calificacion` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `productos_calificacion`
--

INSERT INTO `productos_calificacion` (`id`, `idproducto`, `iduser`, `calificacion`, `fecha`) VALUES
(1, 15, 1, 5, '2016-10-13 09:23:51'),
(2, 15, 3, 3, '2016-10-13 09:23:51'),
(3, 1, 1, 3, '2016-10-25 16:14:58'),
(4, 22, 1, 0, '2016-10-31 12:06:46'),
(5, 2, 1, 0, '2016-10-27 11:14:17'),
(6, 22, 18, 0, '2016-10-28 18:28:05'),
(7, 28, 24, 0, '2016-11-02 15:19:44'),
(8, 18, 1, 0, '2016-11-03 10:58:10'),
(9, 22, 4, 0, '2016-11-03 11:35:15'),
(10, 5, 1, 0, '2016-11-03 16:43:31');

-- --------------------------------------------------------

--
-- Table structure for table `productos_categorias`
--

CREATE TABLE IF NOT EXISTS `productos_categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idproducto` int(11) NOT NULL,
  `idcategoria` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=134 ;

--
-- Dumping data for table `productos_categorias`
--

INSERT INTO `productos_categorias` (`id`, `idproducto`, `idcategoria`) VALUES
(29, 8, 6),
(33, 4, 2),
(34, 13, 14),
(35, 3, 2),
(36, 5, 2),
(39, 7, 2),
(60, 10, 10),
(76, 23, 15),
(80, 26, 12),
(81, 27, 5),
(82, 27, 8),
(91, 14, 3),
(92, 14, 4),
(93, 17, 9),
(94, 17, 8),
(95, 17, 14),
(96, 15, 7),
(97, 15, 11),
(98, 29, 8),
(99, 29, 11),
(102, 18, 3),
(103, 18, 4),
(104, 18, 13),
(105, 6, 6),
(106, 22, 3),
(107, 22, 13),
(112, 28, 5),
(113, 28, 8),
(114, 24, 8),
(115, 24, 15),
(116, 11, 8),
(117, 11, 14),
(118, 9, 6),
(119, 19, 16),
(122, 12, 7),
(123, 12, 14),
(124, 16, 8),
(125, 16, 11),
(126, 20, 7),
(127, 20, 11),
(128, 25, 12),
(132, 2, 2),
(133, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `productos_comentarios`
--

CREATE TABLE IF NOT EXISTS `productos_comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idproducto` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `texto` text NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `productos_comentarios`
--

INSERT INTO `productos_comentarios` (`id`, `idproducto`, `iduser`, `texto`, `fecha`) VALUES
(1, 1, 1, 'Este es mi comentario', '2016-10-25 16:14:58'),
(2, 22, 1, 'Prueba de comentarios', '2016-10-31 12:06:46'),
(3, 2, 1, 'tyuio', '2016-10-27 11:14:17'),
(4, 22, 18, '', '2016-10-28 18:28:05'),
(5, 28, 24, 'Tan tan', '2016-11-02 15:19:44'),
(6, 18, 1, 'Calificación 1', '2016-11-03 10:58:10'),
(7, 22, 4, '', '2016-11-03 11:35:15'),
(8, 5, 1, 'Comentario del producto bolso manos libres', '2016-11-03 16:43:31');

-- --------------------------------------------------------

--
-- Table structure for table `productos_establecimiento`
--

CREATE TABLE IF NOT EXISTS `productos_establecimiento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idproducto` int(11) NOT NULL,
  `idmarcaestablecimiento` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=120 ;

--
-- Dumping data for table `productos_establecimiento`
--

INSERT INTO `productos_establecimiento` (`id`, `idproducto`, `idmarcaestablecimiento`) VALUES
(31, 8, 5),
(37, 4, 2),
(38, 13, 8),
(39, 13, 9),
(40, 3, 2),
(41, 5, 1),
(44, 7, 6),
(59, 10, 4),
(69, 23, 13),
(70, 23, 14),
(74, 26, 13),
(75, 27, 15),
(76, 27, 16),
(85, 14, 3),
(86, 14, 4),
(87, 17, 11),
(88, 15, 10),
(89, 29, 10),
(90, 29, 12),
(93, 18, 3),
(94, 18, 11),
(95, 6, 5),
(96, 22, 4),
(99, 28, 15),
(100, 28, 16),
(101, 24, 14),
(102, 11, 7),
(103, 11, 8),
(104, 9, 5),
(105, 19, 4),
(106, 19, 11),
(108, 12, 7),
(109, 12, 8),
(110, 16, 10),
(111, 16, 12),
(112, 20, 11),
(113, 25, 13),
(114, 25, 14),
(118, 2, 1),
(119, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `productos_imagen`
--

CREATE TABLE IF NOT EXISTS `productos_imagen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idproducto` int(11) NOT NULL,
  `orden` int(11) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=61 ;

--
-- Dumping data for table `productos_imagen`
--

INSERT INTO `productos_imagen` (`id`, `idproducto`, `orden`, `imagen`) VALUES
(1, 1, 1, 'bosi-bolso-rojo-600-1476293652.png'),
(2, 2, 1, 'bosi-billetera-1476293950.png'),
(3, 2, 2, 'bosi-billetera2-1476294344.png'),
(4, 3, 1, 'bota-alta-1476294388.png'),
(5, 3, 2, 'bota-alta2-1476294389.png'),
(6, 5, 1, 'bosi-masc-1476295297.png'),
(7, 5, 2, 'bosi-masc2-1476295299.png'),
(8, 5, 3, 'bosi-masc3-1476295318.png'),
(9, 4, 1, 'bosimorral-verde-1476295573.png'),
(10, 4, 2, 'bosimorralverde2-1476295573.png'),
(11, 1, 2, 'bolsorojo2-1476295740.png'),
(12, 6, 1, 'buso-verde-reebok-wor-plywrm-1476304575.png'),
(13, 6, 2, 'reebok-buso-2-1476304631.png'),
(14, 7, 2, 'reebok-1706-426831-3-zoom-1476304899.png'),
(15, 7, 1, 'bolsodeporte-1476304920.png'),
(16, 7, 3, 'reebok-bolso-3-1476305109.png'),
(17, 8, 1, 'reebok-5746-363877-1-zoom-1476305516.png'),
(18, 8, 2, 'reebok-5751-363877-2-zoom-1476305516.png'),
(19, 9, 1, 'reebok-guantes-1476305801.png'),
(20, 10, 1, 'mueble-falabella-1476896298.png'),
(21, 10, 2, 'sin-titulo-1476896455.png'),
(22, 11, 1, 'audifonos-1476309578.png'),
(23, 11, 2, 'audifonos2-1476309981.png'),
(24, 12, 1, 'usb-sony1-1476310597.png'),
(25, 12, 2, 'usb-sony2-1476310688.png'),
(26, 13, 1, 'camara-sony-1-1476311419.png'),
(27, 13, 3, 'camarasony2-1476311420.png'),
(28, 13, 2, 'camarasony3-1476312168.png'),
(31, 15, 2, 'cartuchera-infantil2-1476892658.png'),
(33, 15, 1, 'cartuchera-infantil-1476892594.png'),
(34, 16, 1, 'muneca1-1476893181.png'),
(35, 16, 2, 'muneca-frozen--1476894202.png'),
(36, 14, 1, 'burts-bees-locion-1476895841.png'),
(37, 17, 2, 'tv1-1476897338.png'),
(38, 17, 1, 'tv2-1476897800.png'),
(39, 17, 3, 'tv3-1476897800.png'),
(40, 19, 1, 'crtagena-de-indias-1476899962.png'),
(41, 19, 2, 'playa-blanca-cartagena-1-1476900097.png'),
(42, 18, 1, 'silkn-clear-9-1476905348.png'),
(43, 18, 2, '2290555-1-1476905876.png'),
(44, 20, 2, 'cuaderno2-1476906197.png'),
(45, 20, 1, 'cuaderno-holley-falabella-1476906198.png'),
(46, 14, 2, 'radiance-dyltn-spf-380-1476906345.png'),
(47, 23, 1, 'kit-de-carreteras-1476909548.png'),
(48, 24, 1, 'pioneer-1476910382.png'),
(49, 24, 2, 'pioneer2-1476910527.png'),
(50, 25, 1, 'casa-perro1-1476911493.png'),
(52, 25, 2, 'casa-para-perros2-1476911800.png'),
(53, 26, 1, 'gatos-1476912416.png'),
(54, 22, 1, 'maquinita1-1476912948.png'),
(55, 22, 2, 'maquina3-1476912948.png'),
(56, 22, 3, 'maquinita-1476912962.png'),
(57, 27, 1, 'lasagna-x2-1476916322.png'),
(58, 29, 1, 'hot-wheels-pista-juego-d-nq-np-606905-mco25094840869-102016-f-1476917274.png'),
(59, 29, 2, 'hot-wheels-taller-track-builder-speedtropolis-pista-juego-d-nq-np-562905-mco25094840870-102016-f-1476917274.png'),
(60, 28, 1, 'malteada-1476917529.png');

-- --------------------------------------------------------

--
-- Table structure for table `productos_patrocinados`
--

CREATE TABLE IF NOT EXISTS `productos_patrocinados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idmarca` int(11) NOT NULL,
  `idcategoria` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `tipo_pago` set('precio','texto') NOT NULL,
  `precio_antes` bigint(20) NOT NULL,
  `precio_ahora` bigint(20) NOT NULL,
  `texto_pago` varchar(255) NOT NULL,
  `vencimiento` datetime NOT NULL,
  `cantidad` int(11) NOT NULL,
  `texto` text NOT NULL,
  `condiciones` text NOT NULL,
  `exclusivo` set('si','no') NOT NULL,
  `aprobado` set('s','n','p') NOT NULL DEFAULT 'p',
  `activo` set('si','no') NOT NULL DEFAULT 'no',
  `restantes` int(11) NOT NULL,
  `redimidos` int(11) NOT NULL,
  `edad_min` int(11) NOT NULL,
  `edad_max` int(11) NOT NULL,
  `idciudad` int(11) NOT NULL,
  `genero` set('Masculino','Femenino','Ambos') NOT NULL,
  `estado_civil` set('Soltero','Casado','Divorciado','Viudo') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `productos_patrocinados`
--

INSERT INTO `productos_patrocinados` (`id`, `idmarca`, `idcategoria`, `nombre`, `tipo_pago`, `precio_antes`, `precio_ahora`, `texto_pago`, `vencimiento`, `cantidad`, `texto`, `condiciones`, `exclusivo`, `aprobado`, `activo`, `restantes`, `redimidos`, `edad_min`, `edad_max`, `idciudad`, `genero`, `estado_civil`) VALUES
(1, 7, 6, 'Mancuernas 1K', 'precio', 9990, 7990, '', '2017-11-06 00:00:00', 14, 'Mancuernas <span style="font-weight: bold;">Live Up&nbsp;</span>Softee Rosadas de 1kg. Material neopreno Alto: 6 cm, Largo: 21 cm, Ancho: 6 cm.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;', 'no', 's', 'si', 14, 0, 25, 30, 1, 'Femenino', ''),
(2, 8, 10, 'Colchón Ibiza Doble', 'precio', 1389900, 669900, '', '2018-10-20 00:00:00', 8, 'Pasa las mejores noches y recupérate de esos largos días de estudio y trabajo en el Colchón Doble Colchones El Dorado Ibiza con suficiente tamaño para que te acomodes como quieras gracias a sus medidas de 140x190 cm.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;', 'no', 's', 'si', 8, 0, 40, 50, 3, 'Ambos', 'Divorciado'),
(3, 8, 15, 'Hidrolavadora', 'precio', 569900, 499900, '', '2016-12-14 09:01:59', 30, 'Hidrolavadora <span style="font-weight: bold;">Karcher&nbsp;</span>1.500Psi 5 Lt/Min 1400W K.<div><br></div>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;', 'no', 's', 'si', 30, 0, 28, 38, 2, 'Masculino', 'Casado'),
(4, 8, 13, 'Silla Radar Infantil', 'precio', 54900, 44900, '', '2016-11-19 00:00:00', 25, 'Silla Radar Infantil Estampado Selva <span style="font-weight: bold;">Home Collection. </span>Para el almacenamiento de los muebles de exterior es importante que mientras no los estés usando, los cubras con los protectores disponibles para cada diseño, ya que los protege de los efectos dañinos del sol directo y la lluvia.<div><br></div>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;', 'no', 's', 'si', 8, 17, 17, 27, 0, 'Ambos', 'Soltero'),
(5, 1, 2, 'Cinturón Bosi', 'precio', 79900, 55900, '', '2016-12-22 04:58:00', 49, 'Cinturón <span style="font-weight: bold;">Bosi </span>color <span style="font-weight: bold;">negro</span>, elaborado en cuero. Diseño monocromático de textura lisa con tache pequeño contramarcado, revestimientos de refuerzo, costuras finas, cierre de hebilla plateada con pasador para ajustar y sus medidas son 106 x 3,5cm en la talla 32.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;', 'no', 's', 'si', 49, 0, 45, 65, 0, 'Masculino', 'Viudo'),
(6, 5, 8, 'Blu Ray', 'precio', 299000, 259000, '', '2017-01-06 00:00:00', 22, 'Blu Ray SONY BDP-S3500 con Wi-Fi Integrada.Disfruta de la conexión de Wi-Fi rápida y estable, incluso al transmitir en HD<div><br></div>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;', 'no', 's', 'si', 21, 1, 33, 43, 0, 'Ambos', ''),
(7, 8, 10, 'Lámpara techo', 'precio', 15900, 12900, '', '2017-11-05 23:59:59', 60, 'Lámpara techo blanca mermelada 60w<div>Casa Bonita</div>', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'no', 's', 'si', 59, 1, 20, 34, 3, 'Ambos', 'Soltero');

-- --------------------------------------------------------

--
-- Table structure for table `productos_patrocinados_calificacion`
--

CREATE TABLE IF NOT EXISTS `productos_patrocinados_calificacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idproducto` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `calificacion` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `productos_patrocinados_calificacion`
--

INSERT INTO `productos_patrocinados_calificacion` (`id`, `idproducto`, `iduser`, `calificacion`, `fecha`) VALUES
(1, 4, 1, 0, '2016-10-31 12:38:25');

-- --------------------------------------------------------

--
-- Table structure for table `productos_patrocinados_comentarios`
--

CREATE TABLE IF NOT EXISTS `productos_patrocinados_comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idproducto` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `texto` text NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `productos_patrocinados_comentarios`
--

INSERT INTO `productos_patrocinados_comentarios` (`id`, `idproducto`, `iduser`, `texto`, `fecha`) VALUES
(1, 4, 1, 'Calif', '2016-10-31 12:38:25');

-- --------------------------------------------------------

--
-- Table structure for table `productos_patrocinados_establecimiento`
--

CREATE TABLE IF NOT EXISTS `productos_patrocinados_establecimiento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idproducto` int(11) NOT NULL,
  `idmarcaestablecimiento` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `productos_patrocinados_establecimiento`
--

INSERT INTO `productos_patrocinados_establecimiento` (`id`, `idproducto`, `idmarcaestablecimiento`) VALUES
(5, 3, 0),
(6, 4, 14),
(7, 5, 0),
(8, 6, 8),
(9, 6, 7),
(11, 2, 14),
(12, 7, 0),
(13, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `productos_patrocinados_imagen`
--

CREATE TABLE IF NOT EXISTS `productos_patrocinados_imagen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idproducto` int(11) NOT NULL,
  `orden` int(11) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `productos_patrocinados_imagen`
--

INSERT INTO `productos_patrocinados_imagen` (`id`, `idproducto`, `orden`, `imagen`) VALUES
(1, 1, 1, 'mancuerna-patrocinada-1476991269.png'),
(2, 2, 1, 'colchon-hogar-1476993007.png'),
(3, 2, 2, 'colchon2-1476993155.png'),
(4, 4, 1, 'silla2-1476994415.png'),
(5, 4, 2, 'silla-infantil-1476994427.png'),
(6, 3, 1, 'hidro-1476994519.png'),
(7, 5, 1, 'bosi-cinturon-1476995610.png'),
(8, 5, 2, 'cinturon2-1476995612.png'),
(10, 7, 1, 'lampara-1477090840.png'),
(11, 6, 1, 'blu-1476996231.png'),
(12, 6, 2, 'blu2-1476996232.png');

-- --------------------------------------------------------

--
-- Table structure for table `productos_patrocinados_preguntas`
--

CREATE TABLE IF NOT EXISTS `productos_patrocinados_preguntas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orden` int(11) NOT NULL,
  `idproducto` int(11) NOT NULL,
  `idpregunta` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `productos_patrocinados_preguntas`
--

INSERT INTO `productos_patrocinados_preguntas` (`id`, `orden`, `idproducto`, `idpregunta`) VALUES
(1, 1, 4, 9),
(2, 2, 4, 19),
(3, 1, 3, 24),
(4, 2, 3, 26),
(5, 1, 5, 13),
(6, 2, 5, 23),
(7, 1, 6, 25),
(8, 2, 6, 27),
(9, 1, 7, 15),
(10, 2, 7, 5),
(11, 1, 1, 3),
(12, 2, 1, 17),
(13, 3, 1, 17),
(14, 4, 1, 10),
(15, 1, 2, 2),
(16, 2, 2, 26),
(17, 3, 2, 23);

-- --------------------------------------------------------

--
-- Table structure for table `productos_preguntas`
--

CREATE TABLE IF NOT EXISTS `productos_preguntas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orden` int(11) NOT NULL,
  `idproducto` int(11) NOT NULL,
  `idpregunta` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=87 ;

--
-- Dumping data for table `productos_preguntas`
--

INSERT INTO `productos_preguntas` (`id`, `orden`, `idproducto`, `idpregunta`) VALUES
(1, 1, 1, 2),
(3, 1, 2, 2),
(4, 2, 2, 4),
(5, 3, 2, 6),
(6, 1, 15, 19),
(7, 2, 15, 1),
(8, 1, 14, 2),
(9, 2, 14, 1),
(10, 3, 14, 9),
(11, 1, 12, 8),
(12, 2, 12, 9),
(13, 3, 12, 13),
(14, 1, 18, 5),
(15, 2, 18, 10),
(16, 3, 18, 27),
(17, 1, 24, 13),
(18, 2, 24, 14),
(19, 3, 24, 26),
(20, 1, 6, 3),
(21, 2, 6, 5),
(22, 1, 17, 4),
(23, 2, 17, 11),
(24, 3, 17, 16),
(25, 1, 19, 15),
(26, 2, 19, 5),
(27, 3, 19, 12),
(28, 2, 1, 23),
(29, 3, 1, 22),
(30, 1, 28, 24),
(31, 2, 28, 26),
(32, 3, 28, 7),
(33, 1, 29, 13),
(34, 2, 29, 19),
(35, 3, 29, 18),
(36, 1, 11, 14),
(37, 2, 11, 23),
(38, 3, 11, 27),
(39, 1, 22, 8),
(40, 2, 22, 11),
(41, 3, 22, 24),
(42, 1, 23, 25),
(43, 2, 23, 4),
(44, 3, 23, 3),
(45, 1, 4, 2),
(46, 2, 4, 22),
(47, 3, 4, 26),
(48, 3, 6, 16),
(49, 3, 15, 15),
(50, 1, 8, 11),
(51, 2, 8, 3),
(52, 3, 8, 17),
(53, 1, 16, 13),
(54, 2, 16, 14),
(55, 3, 16, 24),
(56, 4, 16, 26),
(57, 1, 26, 5),
(58, 2, 26, 26),
(59, 3, 26, 21),
(60, 1, 9, 15),
(61, 2, 9, 2),
(62, 3, 9, 3),
(63, 1, 13, 7),
(64, 2, 13, 11),
(65, 3, 13, 14),
(66, 1, 3, 20),
(67, 2, 3, 26),
(68, 3, 3, 10),
(69, 1, 5, 12),
(70, 2, 5, 2),
(71, 3, 5, 24),
(72, 1, 7, 2),
(73, 2, 7, 3),
(74, 3, 7, 24),
(75, 1, 20, 14),
(76, 2, 20, 17),
(77, 3, 20, 2),
(78, 1, 25, 2),
(79, 2, 25, 14),
(80, 3, 25, 26),
(81, 1, 27, 1),
(82, 2, 27, 20),
(83, 3, 27, 27),
(84, 1, 10, 26),
(85, 2, 10, 6),
(86, 3, 10, 27);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fid` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `documento` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nacimiento` date NOT NULL,
  `idciudad` int(11) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `gangs_obtenidos` int(11) NOT NULL DEFAULT '0',
  `gangs_gastados` int(11) NOT NULL DEFAULT '0',
  `idreferido` int(11) NOT NULL DEFAULT '-1',
  `token` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `fid`, `nombre`, `apellido`, `documento`, `email`, `password`, `nacimiento`, `idciudad`, `imagen`, `gangs_obtenidos`, `gangs_gastados`, `idreferido`, `token`) VALUES
(1, '', 'albert', 'arias', '1090447181', 'albertarias925@gmail.com', 'ncP.UWk0BgXpA', '1992-02-27', 3, '', 9572, 0, -1, ''),
(2, '', 'Yohana', 'Prueba', '', 'yohana.canon@grancomunicaciones.com', 'ncP.UWk0BgXpA', '1988-09-06', 3, '', 4000, 0, -1, ''),
(3, '', 'Prueba', 'Soltera no hijo', '1018429701', 'Cy1@misena.edu.co', 'ncP.UWk0BgXpA', '1988-10-07', 3, '', 14402, 0, -1, ''),
(4, '', 'Prueba viudo', 'Con Hijacali', '1018429702', 'yohanacp_07@yahoo.com', 'ncP.UWk0BgXpA', '1985-11-03', 1, '', 5699, 0, 3, '');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_beneficios`
--

CREATE TABLE IF NOT EXISTS `usuarios_beneficios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `idbeneficio` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_canastika`
--

CREATE TABLE IF NOT EXISTS `usuarios_canastika` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `tipo` set('Normal','Patrocinado') NOT NULL,
  `idproducto` int(11) NOT NULL,
  `codigo` varchar(10) NOT NULL,
  `fecha` datetime NOT NULL,
  `procesado` set('si','no') NOT NULL DEFAULT 'no',
  `proceso` set('','Eliminado','Redimido','Vencido') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `usuarios_canastika`
--

INSERT INTO `usuarios_canastika` (`id`, `iduser`, `tipo`, `idproducto`, `codigo`, `fecha`, `procesado`, `proceso`) VALUES
(1, 1, 'Normal', 18, '3753fc3', '2016-11-02 18:11:26', 'no', ''),
(2, 3, 'Normal', 19, 'fba0e96', '2016-11-02 18:23:49', 'si', 'Redimido'),
(3, 1, 'Normal', 18, 'ad80077', '2016-11-02 18:26:08', 'si', 'Redimido'),
(4, 3, 'Normal', 1, 'd100b99', '2016-11-02 18:45:49', 'si', 'Redimido'),
(5, 3, 'Normal', 20, '41f5763', '2016-11-03 09:31:49', 'si', 'Redimido'),
(6, 3, 'Normal', 1, '9d7cc02', '2016-11-03 09:32:03', 'si', 'Redimido'),
(7, 3, 'Normal', 16, '0f54f4a', '2016-11-03 09:38:17', 'si', 'Redimido'),
(8, 3, 'Normal', 25, '1da77f8', '2016-11-03 10:11:39', 'si', 'Redimido'),
(9, 1, 'Normal', 25, '9bf679e', '2016-11-03 11:07:23', 'no', ''),
(10, 4, 'Normal', 22, '90f2911', '2016-11-03 11:32:26', 'si', 'Redimido'),
(11, 4, 'Normal', 28, '02fea32', '2016-11-03 11:40:31', 'si', 'Redimido'),
(12, 4, 'Normal', 28, 'd890f12', '2016-11-03 12:02:20', 'no', ''),
(13, 4, 'Normal', 17, '98e9d85', '2016-11-03 15:42:10', 'no', ''),
(14, 4, 'Normal', 22, '1af1d60', '2016-11-03 15:42:41', 'no', ''),
(15, 1, 'Normal', 5, '6d300a5', '2016-11-03 16:22:40', 'si', 'Redimido'),
(16, 3, 'Normal', 1, '5b2c429', '2016-11-03 16:24:53', 'no', '');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_clics`
--

CREATE TABLE IF NOT EXISTS `usuarios_clics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `seccion` set('Avatar','Gangs','Categoria producto','Productos para ti','Menu home','Menu perfil','Menu patrocinadores','Menu terminos','Menu invita amigo','Menu contacto','Editar perfil','Patrocinio','Canastika','Canastika info','Canastika redimir','Canastika donde comprar','Tip como ganas mas','Info producto','Carro producto','Compartir producto','Producto comentarios','Carro detalle producto','Redencion punto de venta','Redencion casa','Beneficio usar gangs','Beneficio no usar gangs') NOT NULL,
  `iduser` int(11) NOT NULL,
  `idcategoria` int(11) NOT NULL,
  `idmarca` int(11) NOT NULL,
  `idproducto` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=991 ;

--
-- Dumping data for table `usuarios_clics`
--

INSERT INTO `usuarios_clics` (`id`, `seccion`, `iduser`, `idcategoria`, `idmarca`, `idproducto`, `fecha`) VALUES
(1, 'Menu home', 1, -1, -1, -1, '2016-11-02 16:49:07'),
(2, 'Menu perfil', 1, -1, -1, -1, '2016-11-02 16:52:07'),
(3, 'Editar perfil', 1, -1, -1, -1, '2016-11-02 16:52:17'),
(4, 'Menu home', 1, -1, -1, -1, '2016-11-02 16:52:46'),
(5, 'Gangs', 1, -1, -1, -1, '2016-11-02 16:52:57'),
(6, 'Menu home', 1, -1, -1, -1, '2016-11-02 16:53:11'),
(7, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 16:53:38'),
(8, 'Canastika', 1, -1, -1, -1, '2016-11-02 16:54:09'),
(9, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 16:54:11'),
(10, 'Menu home', 1, -1, -1, -1, '2016-11-02 16:54:22'),
(11, 'Categoria producto', 1, 3, -1, -1, '2016-11-02 16:54:24'),
(12, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 16:54:24'),
(13, 'Menu home', 1, -1, -1, -1, '2016-11-02 16:54:29'),
(14, 'Categoria producto', 1, 11, -1, -1, '2016-11-02 16:54:32'),
(15, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 16:54:32'),
(16, 'Menu home', 1, -1, -1, -1, '2016-11-02 16:54:35'),
(17, 'Menu home', 1, -1, -1, -1, '2016-11-02 16:55:06'),
(18, 'Gangs', 1, -1, -1, -1, '2016-11-02 16:55:10'),
(19, 'Menu home', 1, -1, -1, -1, '2016-11-02 16:55:14'),
(20, 'Avatar', 1, -1, -1, -1, '2016-11-02 16:55:15'),
(21, 'Menu perfil', 1, -1, -1, -1, '2016-11-02 16:55:23'),
(22, 'Editar perfil', 1, -1, -1, -1, '2016-11-02 16:55:26'),
(23, 'Menu invita amigo', 1, -1, -1, -1, '2016-11-02 16:55:41'),
(24, 'Menu contacto', 1, -1, -1, -1, '2016-11-02 16:55:54'),
(25, 'Menu invita amigo', 2, -1, -1, -1, '2016-11-02 16:55:57'),
(26, 'Menu home', 1, -1, -1, -1, '2016-11-02 16:55:58'),
(27, 'Canastika', 1, -1, -1, -1, '2016-11-02 16:55:59'),
(28, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 16:56:02'),
(29, 'Info producto', 1, -1, -1, -1, '2016-11-02 16:56:08'),
(30, 'Menu invita amigo', 2, -1, -1, -1, '2016-11-02 16:56:29'),
(31, 'Compartir producto', 1, -1, -1, -1, '2016-11-02 16:57:34'),
(32, 'Canastika', 1, -1, -1, -1, '2016-11-02 16:57:54'),
(33, 'Menu home', 1, -1, -1, -1, '2016-11-02 16:57:59'),
(34, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 16:58:01'),
(35, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 16:58:33'),
(36, 'Menu home', 2, -1, -1, -1, '2016-11-02 16:58:41'),
(37, 'Categoria producto', 2, 2, -1, -1, '2016-11-02 16:58:48'),
(38, 'Productos para ti', 2, -1, -1, -1, '2016-11-02 16:58:48'),
(39, 'Menu home', 2, -1, -1, -1, '2016-11-02 16:58:59'),
(40, 'Categoria producto', 2, 2, -1, -1, '2016-11-02 16:59:01'),
(41, 'Productos para ti', 2, -1, -1, -1, '2016-11-02 16:59:01'),
(42, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:02:05'),
(43, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:02:08'),
(44, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 17:02:08'),
(45, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:02:33'),
(46, 'Categoria producto', 3, 3, -1, -1, '2016-11-02 17:02:35'),
(47, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:02:35'),
(48, 'Canastika', 1, -1, -1, -1, '2016-11-02 17:02:50'),
(49, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 17:02:51'),
(50, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:06:59'),
(51, 'Categoria producto', 3, 14, -1, -1, '2016-11-02 17:07:05'),
(52, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:07:05'),
(53, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:08:09'),
(54, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 17:08:11'),
(55, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:08:11'),
(56, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:08:14'),
(57, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:08:25'),
(58, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:09:07'),
(59, 'Categoria producto', 3, 11, -1, -1, '2016-11-02 17:09:58'),
(60, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:09:58'),
(61, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:10:01'),
(62, 'Categoria producto', 3, 7, -1, -1, '2016-11-02 17:11:12'),
(63, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:11:12'),
(64, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:11:14'),
(65, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 17:11:15'),
(66, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:11:15'),
(67, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:11:50'),
(68, 'Categoria producto', 3, 5, -1, -1, '2016-11-02 17:11:56'),
(69, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:11:56'),
(70, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:11:58'),
(71, 'Categoria producto', 3, 4, -1, -1, '2016-11-02 17:12:01'),
(72, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:12:01'),
(73, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:12:03'),
(74, 'Categoria producto', 3, 6, -1, -1, '2016-11-02 17:12:06'),
(75, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:12:06'),
(76, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:12:08'),
(77, 'Categoria producto', 3, 7, -1, -1, '2016-11-02 17:12:10'),
(78, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:12:10'),
(79, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:12:11'),
(80, 'Categoria producto', 3, 8, -1, -1, '2016-11-02 17:12:16'),
(81, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:12:16'),
(82, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:12:18'),
(83, 'Categoria producto', 3, 9, -1, -1, '2016-11-02 17:12:22'),
(84, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:12:23'),
(85, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:12:23'),
(86, 'Categoria producto', 3, 10, -1, -1, '2016-11-02 17:12:28'),
(87, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:12:28'),
(88, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:12:30'),
(89, 'Categoria producto', 3, 11, -1, -1, '2016-11-02 17:12:33'),
(90, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:12:33'),
(91, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:12:35'),
(92, 'Categoria producto', 3, 12, -1, -1, '2016-11-02 17:12:42'),
(93, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:12:42'),
(94, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:12:48'),
(95, 'Categoria producto', 3, 13, -1, -1, '2016-11-02 17:12:52'),
(96, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:12:52'),
(97, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:12:53'),
(98, 'Categoria producto', 3, 14, -1, -1, '2016-11-02 17:12:58'),
(99, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:12:58'),
(100, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:13:00'),
(101, 'Categoria producto', 3, 15, -1, -1, '2016-11-02 17:13:04'),
(102, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:13:04'),
(103, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:13:05'),
(104, 'Categoria producto', 3, 16, -1, -1, '2016-11-02 17:13:09'),
(105, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:13:09'),
(106, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:13:12'),
(107, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 17:15:56'),
(108, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:15:56'),
(109, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:17:47'),
(110, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 17:17:48'),
(111, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:17:48'),
(112, 'Menu perfil', 3, -1, -1, -1, '2016-11-02 17:19:32'),
(113, 'Menu home', 1, -1, -1, -1, '2016-11-02 17:21:01'),
(114, 'Avatar', 1, -1, -1, -1, '2016-11-02 17:21:02'),
(115, 'Menu home', 1, -1, -1, -1, '2016-11-02 17:22:11'),
(116, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:26:45'),
(117, 'Menu perfil', 3, -1, -1, -1, '2016-11-02 17:27:47'),
(118, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:28:36'),
(119, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:28:38'),
(120, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 17:28:39'),
(121, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:28:43'),
(122, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 17:28:44'),
(123, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:28:44'),
(124, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:28:48'),
(125, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 17:28:51'),
(126, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:28:51'),
(127, 'Avatar', 1, -1, -1, -1, '2016-11-02 17:33:18'),
(128, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:35:56'),
(129, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 17:36:00'),
(130, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:36:00'),
(131, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:36:04'),
(132, 'Categoria producto', 3, 4, -1, -1, '2016-11-02 17:36:06'),
(133, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:36:06'),
(134, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:36:08'),
(135, 'Categoria producto', 3, 14, -1, -1, '2016-11-02 17:36:13'),
(136, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:36:13'),
(137, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:36:16'),
(138, 'Avatar', 1, -1, -1, -1, '2016-11-02 17:37:51'),
(139, 'Avatar', 1, -1, -1, -1, '2016-11-02 17:37:53'),
(140, 'Avatar', 1, -1, -1, -1, '2016-11-02 17:38:08'),
(141, 'Avatar', 1, -1, -1, -1, '2016-11-02 17:38:27'),
(142, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 17:38:34'),
(143, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:38:34'),
(144, 'Avatar', 1, -1, -1, -1, '2016-11-02 17:38:52'),
(145, 'Menu invita amigo', 1, -1, -1, -1, '2016-11-02 17:38:57'),
(146, 'Menu invita amigo', 1, -1, -1, -1, '2016-11-02 17:39:00'),
(147, 'Menu home', 1, -1, -1, -1, '2016-11-02 17:40:58'),
(148, 'Menu invita amigo', 1, -1, -1, -1, '2016-11-02 17:41:04'),
(149, 'Menu home', 1, -1, -1, -1, '2016-11-02 17:41:08'),
(150, 'Categoria producto', 1, 11, -1, -1, '2016-11-02 17:41:11'),
(151, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 17:41:11'),
(152, 'Menu home', 1, -1, -1, -1, '2016-11-02 17:41:16'),
(153, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 17:41:18'),
(154, 'Info producto', 1, -1, -1, -1, '2016-11-02 17:41:33'),
(155, 'Info producto', 1, -1, -1, -1, '2016-11-02 17:42:06'),
(156, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:42:17'),
(157, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 17:42:34'),
(158, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:42:34'),
(159, 'Menu home', 1, -1, -1, -1, '2016-11-02 17:42:39'),
(160, 'Canastika', 3, -1, -1, -1, '2016-11-02 17:42:42'),
(161, 'Categoria producto', 1, 16, -1, -1, '2016-11-02 17:42:44'),
(162, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 17:42:44'),
(163, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:42:44'),
(164, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 17:42:46'),
(165, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:42:46'),
(166, 'Info producto', 1, -1, -1, -1, '2016-11-02 17:42:54'),
(167, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:44:17'),
(168, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 17:44:19'),
(169, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:44:19'),
(170, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:47:05'),
(171, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:49:34'),
(172, 'Menu home', 3, -1, -1, -1, '2016-11-02 17:49:45'),
(173, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 17:49:46'),
(174, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:49:46'),
(175, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:53:01'),
(176, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:54:18'),
(177, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:54:36'),
(178, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 17:56:36'),
(179, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 18:05:42'),
(180, 'Avatar', 1, -1, -1, -1, '2016-11-02 18:08:15'),
(181, 'Menu home', 3, -1, -1, -1, '2016-11-02 18:10:13'),
(182, 'Menu home', 1, -1, -1, -1, '2016-11-02 18:10:15'),
(183, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 18:10:29'),
(184, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 18:10:29'),
(185, 'Categoria producto', 1, 2, -1, -1, '2016-11-02 18:10:30'),
(186, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 18:10:30'),
(187, 'Menu home', 1, -1, -1, -1, '2016-11-02 18:10:45'),
(188, 'Categoria producto', 1, 2, -1, -1, '2016-11-02 18:10:46'),
(189, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 18:10:46'),
(190, 'Menu home', 1, -1, -1, -1, '2016-11-02 18:10:48'),
(191, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 18:10:49'),
(192, 'Menu home', 1, -1, -1, -1, '2016-11-02 18:11:07'),
(193, 'Categoria producto', 1, 2, -1, -1, '2016-11-02 18:11:09'),
(194, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 18:11:09'),
(195, 'Menu home', 1, -1, -1, -1, '2016-11-02 18:11:11'),
(196, 'Categoria producto', 1, 2, -1, -1, '2016-11-02 18:11:12'),
(197, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 18:11:13'),
(198, 'Menu home', 1, -1, -1, -1, '2016-11-02 18:11:14'),
(199, 'Categoria producto', 1, 3, -1, -1, '2016-11-02 18:11:15'),
(200, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 18:11:15'),
(201, 'Canastika', 1, -1, -1, -1, '2016-11-02 18:11:27'),
(202, 'Avatar', 1, -1, -1, -1, '2016-11-02 18:14:27'),
(203, 'Menu home', 1, -1, -1, -1, '2016-11-02 18:14:59'),
(204, 'Categoria producto', 1, 3, -1, -1, '2016-11-02 18:15:02'),
(205, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 18:15:02'),
(206, 'Menu home', 3, -1, -1, -1, '2016-11-02 18:15:44'),
(207, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 18:15:47'),
(208, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 18:15:47'),
(209, 'Menu home', 3, -1, -1, -1, '2016-11-02 18:21:02'),
(210, 'Menu home', 3, -1, -1, -1, '2016-11-02 18:23:27'),
(211, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 18:23:32'),
(212, 'Canastika', 3, -1, -1, -1, '2016-11-02 18:23:51'),
(213, 'Canastika redimir', 3, -1, -1, -1, '2016-11-02 18:23:58'),
(214, 'Redencion punto de venta', 3, -1, -1, -1, '2016-11-02 18:24:03'),
(215, 'Menu home', 1, -1, -1, -1, '2016-11-02 18:25:59'),
(216, 'Categoria producto', 1, 3, -1, -1, '2016-11-02 18:26:00'),
(217, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 18:26:01'),
(218, 'Canastika', 1, -1, -1, -1, '2016-11-02 18:26:08'),
(219, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 18:26:12'),
(220, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 18:26:40'),
(221, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 18:28:37'),
(222, 'Menu home', 1, -1, -1, -1, '2016-11-02 18:35:44'),
(223, 'Menu home', 1, -1, -1, -1, '2016-11-02 18:37:14'),
(224, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 18:43:57'),
(225, 'Categoria producto', 1, 2, -1, -1, '2016-11-02 18:43:57'),
(226, 'Menu home', 3, -1, -1, -1, '2016-11-02 18:44:22'),
(227, 'Avatar', 3, -1, -1, -1, '2016-11-02 18:44:24'),
(228, 'Menu home', 3, -1, -1, -1, '2016-11-02 18:44:29'),
(229, 'Categoria producto', 3, 2, -1, -1, '2016-11-02 18:44:31'),
(230, 'Productos para ti', 3, -1, -1, -1, '2016-11-02 18:44:31'),
(231, 'Canastika', 3, -1, -1, -1, '2016-11-02 18:45:49'),
(232, 'Menu home', 1, -1, -1, -1, '2016-11-02 18:50:22'),
(233, 'Categoria producto', 1, 8, -1, -1, '2016-11-02 18:50:25'),
(234, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 18:50:25'),
(235, 'Canastika', 1, -1, -1, -1, '2016-11-02 18:50:28'),
(236, 'Canastika redimir', 1, -1, -1, -1, '2016-11-02 18:50:32'),
(237, 'Redencion casa', 1, -1, -1, -1, '2016-11-02 18:50:37'),
(238, 'Redencion punto de venta', 1, -1, -1, -1, '2016-11-02 18:50:42'),
(239, 'Redencion casa', 1, -1, -1, -1, '2016-11-02 18:51:31'),
(240, 'Redencion casa', 1, -1, -1, -1, '2016-11-02 18:52:19'),
(241, 'Canastika', 1, -1, -1, -1, '2016-11-02 18:53:07'),
(242, 'Menu perfil', 1, -1, -1, -1, '2016-11-02 18:53:43'),
(243, 'Menu home', 1, -1, -1, -1, '2016-11-02 18:53:45'),
(244, 'Gangs', 1, -1, -1, -1, '2016-11-02 18:53:47'),
(245, 'Menu perfil', 1, -1, -1, -1, '2016-11-02 18:53:51'),
(246, 'Editar perfil', 1, -1, -1, -1, '2016-11-02 18:53:54'),
(247, 'Menu home', 1, -1, -1, -1, '2016-11-02 18:54:05'),
(248, 'Categoria producto', 1, 16, -1, -1, '2016-11-02 18:54:08'),
(249, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 18:54:08'),
(250, 'Productos para ti', 1, -1, -1, -1, '2016-11-02 18:54:19'),
(251, 'Menu perfil', 1, -1, -1, -1, '2016-11-02 18:58:06'),
(252, 'Editar perfil', 1, -1, -1, -1, '2016-11-02 18:58:08'),
(253, 'Editar perfil', 1, -1, -1, -1, '2016-11-02 18:59:34'),
(254, 'Menu home', 1, -1, -1, -1, '2016-11-02 19:06:38'),
(255, 'Menu perfil', 1, -1, -1, -1, '2016-11-02 19:06:41'),
(256, 'Editar perfil', 1, -1, -1, -1, '2016-11-02 19:06:43'),
(257, 'Menu perfil', 1, -1, -1, -1, '2016-11-02 19:07:00'),
(258, 'Editar perfil', 1, -1, -1, -1, '2016-11-02 19:07:21'),
(259, 'Menu home', 3, -1, -1, -1, '2016-11-03 09:11:46'),
(260, 'Menu perfil', 3, -1, -1, -1, '2016-11-03 09:12:08'),
(261, 'Editar perfil', 3, -1, -1, -1, '2016-11-03 09:12:11'),
(262, 'Menu perfil', 3, -1, -1, -1, '2016-11-03 09:13:25'),
(263, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 09:14:31'),
(264, 'Menu home', 3, -1, -1, -1, '2016-11-03 09:15:01'),
(265, 'Categoria producto', 3, 2, -1, -1, '2016-11-03 09:15:03'),
(266, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 09:15:03'),
(267, 'Menu home', 3, -1, -1, -1, '2016-11-03 09:15:08'),
(268, 'Categoria producto', 3, 7, -1, -1, '2016-11-03 09:15:14'),
(269, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 09:15:14'),
(270, 'Menu home', 3, -1, -1, -1, '2016-11-03 09:15:16'),
(271, 'Categoria producto', 3, 4, -1, -1, '2016-11-03 09:15:17'),
(272, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 09:15:17'),
(273, 'Menu home', 3, -1, -1, -1, '2016-11-03 09:21:18'),
(274, 'Gangs', 3, -1, -1, -1, '2016-11-03 09:21:23'),
(275, 'Menu home', 3, -1, -1, -1, '2016-11-03 09:21:27'),
(276, 'Menu home', 3, -1, -1, -1, '2016-11-03 09:21:36'),
(277, 'Menu home', 3, -1, -1, -1, '2016-11-03 09:22:13'),
(278, 'Canastika', 3, -1, -1, -1, '2016-11-03 09:22:16'),
(279, 'Canastika redimir', 3, -1, -1, -1, '2016-11-03 09:22:44'),
(280, 'Redencion punto de venta', 3, -1, -1, -1, '2016-11-03 09:23:47'),
(281, 'Redencion punto de venta', 3, -1, -1, -1, '2016-11-03 09:24:16'),
(282, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 09:31:31'),
(283, 'Canastika', 3, -1, -1, -1, '2016-11-03 09:31:50'),
(284, 'Menu home', 3, -1, -1, -1, '2016-11-03 09:31:53'),
(285, 'Categoria producto', 3, 2, -1, -1, '2016-11-03 09:31:58'),
(286, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 09:31:58'),
(287, 'Canastika', 3, -1, -1, -1, '2016-11-03 09:32:03'),
(288, 'Canastika redimir', 3, -1, -1, -1, '2016-11-03 09:32:18'),
(289, 'Redencion casa', 3, -1, -1, -1, '2016-11-03 09:32:20'),
(290, 'Canastika', 3, -1, -1, -1, '2016-11-03 09:33:17'),
(291, 'Canastika redimir', 3, -1, -1, -1, '2016-11-03 09:33:43'),
(292, 'Redencion punto de venta', 3, -1, -1, -1, '2016-11-03 09:33:47'),
(293, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 09:38:11'),
(294, 'Canastika', 3, -1, -1, -1, '2016-11-03 09:38:17'),
(295, 'Menu home', 3, -1, -1, -1, '2016-11-03 09:40:02'),
(296, 'Categoria producto', 3, 2, -1, -1, '2016-11-03 09:40:04'),
(297, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 09:40:05'),
(298, 'Canastika', 3, -1, -1, -1, '2016-11-03 09:40:11'),
(299, 'Canastika', 3, -1, -1, -1, '2016-11-03 09:42:58'),
(300, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 09:43:11'),
(301, 'Canastika', 3, -1, -1, -1, '2016-11-03 09:43:15'),
(302, 'Menu home', 1, -1, -1, -1, '2016-11-03 09:46:22'),
(303, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 09:46:34'),
(304, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 09:46:37'),
(305, 'Menu home', 1, -1, -1, -1, '2016-11-03 09:46:40'),
(306, 'Categoria producto', 1, 2, -1, -1, '2016-11-03 09:46:41'),
(307, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 09:46:41'),
(308, 'Menu home', 1, -1, -1, -1, '2016-11-03 09:46:55'),
(309, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 09:46:59'),
(310, 'Menu home', 1, -1, -1, -1, '2016-11-03 09:50:22'),
(311, 'Avatar', 1, -1, -1, -1, '2016-11-03 09:50:24'),
(312, 'Menu home', 1, -1, -1, -1, '2016-11-03 09:51:27'),
(313, 'Avatar', 1, -1, -1, -1, '2016-11-03 09:51:28'),
(314, 'Menu home', 1, -1, -1, -1, '2016-11-03 09:51:39'),
(315, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 09:52:29'),
(316, 'Menu home', 1, -1, -1, -1, '2016-11-03 09:52:58'),
(317, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 09:52:59'),
(318, 'Menu home', 3, -1, -1, -1, '2016-11-03 09:53:23'),
(319, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 09:53:25'),
(320, 'Canastika', 3, -1, -1, -1, '2016-11-03 09:53:31'),
(321, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 09:54:52'),
(322, 'Canastika', 1, -1, -1, -1, '2016-11-03 09:54:54'),
(323, 'Canastika', 1, -1, -1, -1, '2016-11-03 09:57:49'),
(324, 'Menu contacto', 1, -1, -1, -1, '2016-11-03 09:59:10'),
(325, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:00:37'),
(326, 'Menu contacto', 1, -1, -1, -1, '2016-11-03 10:00:42'),
(327, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:01:14'),
(328, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:01:48'),
(329, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:01:55'),
(330, 'Avatar', 3, -1, -1, -1, '2016-11-03 10:01:57'),
(331, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:01:59'),
(332, 'Gangs', 1, -1, -1, -1, '2016-11-03 10:02:07'),
(333, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:02:10'),
(334, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:02:25'),
(335, 'Categoria producto', 3, 2, -1, -1, '2016-11-03 10:02:27'),
(336, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:02:27'),
(337, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:02:33'),
(338, 'Tip como ganas mas', 1, -1, -1, -1, '2016-11-03 10:02:48'),
(339, 'Canastika', 3, -1, -1, -1, '2016-11-03 10:04:05'),
(340, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:07:19'),
(341, 'Canastika', 3, -1, -1, -1, '2016-11-03 10:07:22'),
(342, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:09:19'),
(343, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:09:28'),
(344, 'Gangs', 1, -1, -1, -1, '2016-11-03 10:09:29'),
(345, 'Canastika', 1, -1, -1, -1, '2016-11-03 10:09:33'),
(346, 'Gangs', 1, -1, -1, -1, '2016-11-03 10:09:37'),
(347, 'Tip como ganas mas', 1, -1, -1, -1, '2016-11-03 10:09:58'),
(348, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:10:19'),
(349, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:10:31'),
(350, 'Categoria producto', 3, 10, -1, -1, '2016-11-03 10:10:40'),
(351, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:10:40'),
(352, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:10:50'),
(353, 'Categoria producto', 3, 3, -1, -1, '2016-11-03 10:10:53'),
(354, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:10:53'),
(355, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:10:54'),
(356, 'Categoria producto', 3, 4, -1, -1, '2016-11-03 10:10:56'),
(357, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:10:56'),
(358, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:10:57'),
(359, 'Categoria producto', 3, 4, -1, -1, '2016-11-03 10:10:59'),
(360, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:10:59'),
(361, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:11:00'),
(362, 'Categoria producto', 3, 5, -1, -1, '2016-11-03 10:11:02'),
(363, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:11:02'),
(364, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:11:04'),
(365, 'Categoria producto', 3, 5, -1, -1, '2016-11-03 10:11:05'),
(366, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:11:05'),
(367, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:11:06'),
(368, 'Categoria producto', 3, 6, -1, -1, '2016-11-03 10:11:09'),
(369, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:11:09'),
(370, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:11:12'),
(371, 'Categoria producto', 3, 7, -1, -1, '2016-11-03 10:11:14'),
(372, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:11:14'),
(373, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:11:20'),
(374, 'Categoria producto', 3, 14, -1, -1, '2016-11-03 10:11:23'),
(375, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:11:24'),
(376, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:11:25'),
(377, 'Categoria producto', 3, 12, -1, -1, '2016-11-03 10:11:33'),
(378, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:11:33'),
(379, 'Canastika', 3, -1, -1, -1, '2016-11-03 10:11:39'),
(380, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:11:43'),
(381, 'Canastika redimir', 3, -1, -1, -1, '2016-11-03 10:11:46'),
(382, 'Redencion punto de venta', 3, -1, -1, -1, '2016-11-03 10:11:57'),
(383, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:12:03'),
(384, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:17:52'),
(385, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:19:33'),
(386, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:20:55'),
(387, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:21:34'),
(388, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:22:33'),
(389, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:24:10'),
(390, 'Categoria producto', 3, 12, -1, -1, '2016-11-03 10:24:16'),
(391, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:24:16'),
(392, 'Info producto', 3, -1, -1, -1, '2016-11-03 10:24:19'),
(393, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:26:47'),
(394, 'Categoria producto', 3, 2, -1, -1, '2016-11-03 10:26:49'),
(395, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 10:26:49'),
(396, 'Info producto', 3, -1, -1, -1, '2016-11-03 10:26:52'),
(397, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:28:36'),
(398, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:28:44'),
(399, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:29:45'),
(400, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:29:46'),
(401, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:29:48'),
(402, 'Gangs', 3, -1, -1, -1, '2016-11-03 10:29:50'),
(403, 'Tip como ganas mas', 1, -1, -1, -1, '2016-11-03 10:29:57'),
(404, 'Gangs', 1, -1, -1, -1, '2016-11-03 10:29:59'),
(405, 'Tip como ganas mas', 3, -1, -1, -1, '2016-11-03 10:30:18'),
(406, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:30:28'),
(407, 'Gangs', 1, -1, -1, -1, '2016-11-03 10:30:53'),
(408, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:31:02'),
(409, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:31:04'),
(410, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:31:05'),
(411, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:31:07'),
(412, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:31:09'),
(413, 'Gangs', 1, -1, -1, -1, '2016-11-03 10:31:12'),
(414, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:31:22'),
(415, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:31:25'),
(416, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:31:32'),
(417, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:31:42'),
(418, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:31:50'),
(419, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:31:51'),
(420, 'Tip como ganas mas', 1, -1, -1, -1, '2016-11-03 10:32:00'),
(421, 'Gangs', 1, -1, -1, -1, '2016-11-03 10:32:01'),
(422, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:32:05'),
(423, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:32:23'),
(424, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:33:03'),
(425, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:34:10'),
(426, 'Gangs', 1, -1, -1, -1, '2016-11-03 10:34:12'),
(427, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:34:15'),
(428, 'Gangs', 1, -1, -1, -1, '2016-11-03 10:34:26'),
(429, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:34:29'),
(430, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:34:35'),
(431, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:34:47'),
(432, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:34:52'),
(433, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:34:54'),
(434, 'Tip como ganas mas', 1, -1, -1, -1, '2016-11-03 10:34:57'),
(435, 'Gangs', 1, -1, -1, -1, '2016-11-03 10:35:00'),
(436, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:35:02'),
(437, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:35:03'),
(438, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:35:08'),
(439, 'Menu home', 4, -1, -1, -1, '2016-11-03 10:37:04'),
(440, 'Gangs', 4, -1, -1, -1, '2016-11-03 10:37:13'),
(441, 'Tip como ganas mas', 4, -1, -1, -1, '2016-11-03 10:37:24'),
(442, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:37:52'),
(443, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:39:19'),
(444, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:39:22'),
(445, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:39:50'),
(446, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:39:59'),
(447, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:40:01'),
(448, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:40:14'),
(449, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:40:15'),
(450, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:40:18'),
(451, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:40:19'),
(452, 'Tip como ganas mas', 4, -1, -1, -1, '2016-11-03 10:43:30'),
(453, 'Menu home', 4, -1, -1, -1, '2016-11-03 10:43:39'),
(454, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 10:43:43'),
(455, 'Menu home', 4, -1, -1, -1, '2016-11-03 10:43:50'),
(456, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:44:20'),
(457, 'Gangs', 3, -1, -1, -1, '2016-11-03 10:44:23'),
(458, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:45:00'),
(459, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 10:45:03'),
(460, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 10:45:10'),
(461, 'Editar perfil', 1, -1, -1, -1, '2016-11-03 10:45:12'),
(462, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 10:45:15'),
(463, 'Menu contacto', 1, -1, -1, -1, '2016-11-03 10:45:37'),
(464, 'Menu invita amigo', 1, -1, -1, -1, '2016-11-03 10:45:39'),
(465, 'Menu invita amigo', 1, -1, -1, -1, '2016-11-03 10:45:46'),
(466, 'Menu contacto', 1, -1, -1, -1, '2016-11-03 10:45:51'),
(467, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 10:45:59'),
(468, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:46:01'),
(469, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:46:02'),
(470, 'Gangs', 0, -1, -1, -1, '2016-11-03 10:46:49'),
(471, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:47:58'),
(472, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:48:07'),
(473, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:48:08'),
(474, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:48:13'),
(475, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:48:14'),
(476, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:48:18'),
(477, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:48:23'),
(478, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:48:24'),
(479, 'Tip como ganas mas', 1, -1, -1, -1, '2016-11-03 10:48:27'),
(480, 'Gangs', 1, -1, -1, -1, '2016-11-03 10:48:28'),
(481, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:48:31'),
(482, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:48:34'),
(483, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:48:35'),
(484, 'Gangs', 1, -1, -1, -1, '2016-11-03 10:48:36'),
(485, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:48:38'),
(486, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 10:49:12'),
(487, 'Editar perfil', 1, -1, -1, -1, '2016-11-03 10:49:14'),
(488, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 10:49:56'),
(489, 'Editar perfil', 1, -1, -1, -1, '2016-11-03 10:50:00'),
(490, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 10:50:18'),
(491, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 10:50:42'),
(492, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 10:50:54'),
(493, 'Editar perfil', 1, -1, -1, -1, '2016-11-03 10:50:56'),
(494, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:51:05'),
(495, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 10:51:07'),
(496, 'Canastika', 1, -1, -1, -1, '2016-11-03 10:51:18'),
(497, 'Producto comentarios', 1, -1, -1, -1, '2016-11-03 10:51:37'),
(498, 'Canastika', 1, -1, -1, -1, '2016-11-03 10:51:57'),
(499, 'Canastika', 1, -1, -1, -1, '2016-11-03 10:52:03'),
(500, 'Producto comentarios', 1, -1, -1, -1, '2016-11-03 10:52:07'),
(501, 'Producto comentarios', 1, -1, -1, -1, '2016-11-03 10:52:52'),
(502, 'Canastika', 1, -1, -1, -1, '2016-11-03 10:52:52'),
(503, 'Producto comentarios', 1, -1, -1, -1, '2016-11-03 10:52:55'),
(504, 'Producto comentarios', 1, -1, -1, -1, '2016-11-03 10:53:52'),
(505, 'Canastika', 1, -1, -1, -1, '2016-11-03 10:53:52'),
(506, 'Producto comentarios', 1, -1, -1, -1, '2016-11-03 10:53:57'),
(507, 'Menu home', 3, -1, -1, -1, '2016-11-03 10:56:36'),
(508, 'Tip como ganas mas', 3, -1, -1, -1, '2016-11-03 10:57:15'),
(509, 'Gangs', 3, -1, -1, -1, '2016-11-03 10:57:31'),
(510, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:57:49'),
(511, 'Canastika', 1, -1, -1, -1, '2016-11-03 10:57:52'),
(512, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:57:53'),
(513, 'Avatar', 1, -1, -1, -1, '2016-11-03 10:57:55'),
(514, 'Gangs', 1, -1, -1, -1, '2016-11-03 10:57:56'),
(515, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:57:59'),
(516, 'Canastika', 1, -1, -1, -1, '2016-11-03 10:58:00'),
(517, 'Producto comentarios', 1, -1, -1, -1, '2016-11-03 10:58:04'),
(518, 'Gangs', 3, -1, -1, -1, '2016-11-03 10:58:05'),
(519, 'Canastika', 3, -1, -1, -1, '2016-11-03 10:58:08'),
(520, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:58:25'),
(521, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 10:58:27'),
(522, 'Info producto', 1, -1, -1, -1, '2016-11-03 10:58:40'),
(523, 'Canastika', 3, -1, -1, -1, '2016-11-03 10:58:54'),
(524, 'Menu home', 1, -1, -1, -1, '2016-11-03 10:59:40'),
(525, 'Categoria producto', 1, 3, -1, -1, '2016-11-03 10:59:41'),
(526, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 10:59:41'),
(527, 'Info producto', 1, -1, -1, -1, '2016-11-03 10:59:45'),
(528, 'Canastika', 3, -1, -1, -1, '2016-11-03 10:59:47'),
(529, 'Canastika redimir', 3, -1, -1, -1, '2016-11-03 10:59:50'),
(530, 'Canastika', 1, -1, -1, -1, '2016-11-03 11:00:11'),
(531, 'Canastika', 1, -1, -1, -1, '2016-11-03 11:00:47'),
(532, 'Canastika redimir', 1, -1, -1, -1, '2016-11-03 11:00:49'),
(533, 'Redencion casa', 1, -1, -1, -1, '2016-11-03 11:00:54'),
(534, 'Redencion casa', 1, -1, -1, -1, '2016-11-03 11:00:59'),
(535, 'Redencion punto de venta', 1, -1, -1, -1, '2016-11-03 11:01:02'),
(536, 'Menu home', 1, -1, -1, -1, '2016-11-03 11:01:13'),
(537, 'Categoria producto', 1, 7, -1, -1, '2016-11-03 11:01:16'),
(538, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:01:16'),
(539, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:01:38'),
(540, 'Canastika', 1, -1, -1, -1, '2016-11-03 11:01:50'),
(541, 'Menu home', 1, -1, -1, -1, '2016-11-03 11:01:53'),
(542, 'Menu home', 1, -1, -1, -1, '2016-11-03 11:03:01'),
(543, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:03:03'),
(544, 'Info producto', 1, -1, -1, -1, '2016-11-03 11:03:05'),
(545, 'Redencion punto de venta', 3, -1, -1, -1, '2016-11-03 11:04:28'),
(546, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:06:18'),
(547, 'Canastika', 1, -1, -1, -1, '2016-11-03 11:06:22'),
(548, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:06:24'),
(549, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 11:06:26'),
(550, 'Canastika', 1, -1, -1, -1, '2016-11-03 11:07:24'),
(551, 'Menu home', 1, -1, -1, -1, '2016-11-03 11:07:45'),
(552, 'Avatar', 1, -1, -1, -1, '2016-11-03 11:07:50'),
(553, 'Menu home', 1, -1, -1, -1, '2016-11-03 11:07:54'),
(554, 'Categoria producto', 1, 2, -1, -1, '2016-11-03 11:07:56'),
(555, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:07:56'),
(556, 'Menu perfil', 3, -1, -1, -1, '2016-11-03 11:09:45'),
(557, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 11:09:46'),
(558, 'Menu home', 1, -1, -1, -1, '2016-11-03 11:13:43'),
(559, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 11:13:45'),
(560, 'Editar perfil', 1, -1, -1, -1, '2016-11-03 11:13:49'),
(561, 'Menu invita amigo', 1, -1, -1, -1, '2016-11-03 11:13:52'),
(562, 'Menu invita amigo', 1, -1, -1, -1, '2016-11-03 11:14:10'),
(563, 'Menu invita amigo', 1, -1, -1, -1, '2016-11-03 11:14:17'),
(564, 'Menu home', 1, -1, -1, -1, '2016-11-03 11:14:47'),
(565, 'Menu invita amigo', 1, -1, -1, -1, '2016-11-03 11:14:51'),
(566, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 11:15:01'),
(567, 'Menu home', 1, -1, -1, -1, '2016-11-03 11:15:03'),
(568, 'Menu home', 1, -1, -1, -1, '2016-11-03 11:15:12'),
(569, 'Categoria producto', 1, 2, -1, -1, '2016-11-03 11:15:14'),
(570, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:15:14'),
(571, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:16:02'),
(572, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:17:40'),
(573, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:18:15'),
(574, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:20:30'),
(575, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:22:31'),
(576, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:22:46'),
(577, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:24:24'),
(578, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:27:43'),
(579, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:29:15'),
(580, 'Tip como ganas mas', 4, -1, -1, -1, '2016-11-03 11:29:24'),
(581, 'Gangs', 4, -1, -1, -1, '2016-11-03 11:29:31'),
(582, 'Tip como ganas mas', 4, -1, -1, -1, '2016-11-03 11:29:42'),
(583, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:29:44'),
(584, 'Avatar', 4, -1, -1, -1, '2016-11-03 11:29:45'),
(585, 'Gangs', 4, -1, -1, -1, '2016-11-03 11:30:42'),
(586, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:31:16'),
(587, 'Canastika', 4, -1, -1, -1, '2016-11-03 11:31:24'),
(588, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 11:31:36'),
(589, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:31:48'),
(590, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 11:31:49'),
(591, 'Canastika', 4, -1, -1, -1, '2016-11-03 11:32:26'),
(592, 'Canastika redimir', 4, -1, -1, -1, '2016-11-03 11:32:34'),
(593, 'Redencion punto de venta', 4, -1, -1, -1, '2016-11-03 11:32:51'),
(594, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 11:34:27'),
(595, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:34:33'),
(596, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:34:58'),
(597, 'Canastika', 4, -1, -1, -1, '2016-11-03 11:35:06'),
(598, 'Producto comentarios', 4, -1, -1, -1, '2016-11-03 11:35:10'),
(599, 'Canastika', 4, -1, -1, -1, '2016-11-03 11:35:21'),
(600, 'Canastika', 4, -1, -1, -1, '2016-11-03 11:35:32'),
(601, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 11:37:23'),
(602, 'Canastika', 4, -1, -1, -1, '2016-11-03 11:38:35'),
(603, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 11:39:05'),
(604, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:39:10'),
(605, 'Gangs', 4, -1, -1, -1, '2016-11-03 11:39:12'),
(606, 'Menu perfil', 4, -1, -1, -1, '2016-11-03 11:39:24'),
(607, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:40:02'),
(608, 'Gangs', 4, -1, -1, -1, '2016-11-03 11:40:04'),
(609, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:40:17'),
(610, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:40:23'),
(611, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 11:40:27'),
(612, 'Canastika', 4, -1, -1, -1, '2016-11-03 11:40:31'),
(613, 'Canastika redimir', 4, -1, -1, -1, '2016-11-03 11:40:57'),
(614, 'Redencion casa', 4, -1, -1, -1, '2016-11-03 11:41:06'),
(615, 'Canastika', 4, -1, -1, -1, '2016-11-03 11:41:46'),
(616, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:42:01'),
(617, 'Gangs', 4, -1, -1, -1, '2016-11-03 11:42:02'),
(618, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:42:07'),
(619, 'Menu contacto', 4, -1, -1, -1, '2016-11-03 11:42:14'),
(620, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 11:42:23'),
(621, 'Info producto', 4, -1, -1, -1, '2016-11-03 11:42:26'),
(622, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:42:36'),
(623, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 11:42:47'),
(624, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 11:42:51'),
(625, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:42:54'),
(626, 'Gangs', 4, -1, -1, -1, '2016-11-03 11:42:56'),
(627, 'Tip como ganas mas', 4, -1, -1, -1, '2016-11-03 11:43:12'),
(628, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:43:16'),
(629, 'Avatar', 4, -1, -1, -1, '2016-11-03 11:43:19'),
(630, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:43:23'),
(631, 'Avatar', 4, -1, -1, -1, '2016-11-03 11:43:25'),
(632, 'Gangs', 4, -1, -1, -1, '2016-11-03 11:43:32'),
(633, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:43:51'),
(634, 'Gangs', 4, -1, -1, -1, '2016-11-03 11:43:53'),
(635, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:44:20'),
(636, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:44:39'),
(637, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 11:46:51'),
(638, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:49:34'),
(639, 'Gangs', 4, -1, -1, -1, '2016-11-03 11:49:35'),
(640, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:55:30'),
(641, 'Gangs', 4, -1, -1, -1, '2016-11-03 11:55:31'),
(642, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:55:38'),
(643, 'Avatar', 4, -1, -1, -1, '2016-11-03 11:55:41'),
(644, 'Gangs', 4, -1, -1, -1, '2016-11-03 11:59:08'),
(645, 'Menu home', 4, -1, -1, -1, '2016-11-03 11:59:55'),
(646, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 11:59:59'),
(647, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 12:01:36'),
(648, 'Menu home', 4, -1, -1, -1, '2016-11-03 12:02:04'),
(649, 'Menu home', 4, -1, -1, -1, '2016-11-03 12:02:11'),
(650, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 12:02:12'),
(651, 'Canastika', 4, -1, -1, -1, '2016-11-03 12:02:21'),
(652, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 12:02:24'),
(653, 'Canastika redimir', 4, -1, -1, -1, '2016-11-03 12:02:35'),
(654, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 12:03:34'),
(655, 'Redencion punto de venta', 4, -1, -1, -1, '2016-11-03 12:03:36'),
(656, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 12:04:09'),
(657, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 12:05:06'),
(658, 'Menu home', 4, -1, -1, -1, '2016-11-03 12:05:35'),
(659, 'Gangs', 4, -1, -1, -1, '2016-11-03 12:05:36'),
(660, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 12:05:39'),
(661, 'Canastika', 4, -1, -1, -1, '2016-11-03 12:05:41'),
(662, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 12:08:49'),
(663, 'Categoria producto', 1, 2, -1, -1, '2016-11-03 12:20:52'),
(664, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 12:20:52'),
(665, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 12:20:56'),
(666, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 12:45:22'),
(667, 'Menu home', 4, -1, -1, -1, '2016-11-03 12:45:41'),
(668, 'Gangs', 4, -1, -1, -1, '2016-11-03 12:45:43'),
(669, 'Menu home', 4, -1, -1, -1, '2016-11-03 12:45:55'),
(670, 'Canastika', 1, -1, -1, -1, '2016-11-03 12:47:25'),
(671, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 12:47:52'),
(672, 'Menu perfil', 4, -1, -1, -1, '2016-11-03 12:52:20'),
(673, 'Editar perfil', 4, -1, -1, -1, '2016-11-03 12:52:25'),
(674, 'Menu perfil', 4, -1, -1, -1, '2016-11-03 12:53:24'),
(675, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 12:53:30'),
(676, 'Canastika', 4, -1, -1, -1, '2016-11-03 12:54:11'),
(677, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 13:34:15'),
(678, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 13:34:44'),
(679, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 13:35:28'),
(680, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 13:35:40'),
(681, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 13:38:44'),
(682, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 13:38:53'),
(683, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 13:40:01'),
(684, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 13:52:09'),
(685, 'Menu home', 1, -1, -1, -1, '2016-11-03 13:52:21'),
(686, 'Categoria producto', 1, 2, -1, -1, '2016-11-03 13:52:23'),
(687, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 13:52:23'),
(688, 'Menu home', 1, -1, -1, -1, '2016-11-03 13:52:25'),
(689, 'Categoria producto', 1, 4, -1, -1, '2016-11-03 13:52:27'),
(690, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 13:52:27'),
(691, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 13:52:34'),
(692, 'Menu home', 1, -1, -1, -1, '2016-11-03 13:52:45'),
(693, 'Categoria producto', 1, 6, -1, -1, '2016-11-03 13:52:47'),
(694, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 13:52:47'),
(695, 'Menu home', 1, -1, -1, -1, '2016-11-03 13:53:22'),
(696, 'Avatar', 1, -1, -1, -1, '2016-11-03 13:53:24'),
(697, 'Avatar', 1, -1, -1, -1, '2016-11-03 14:00:58'),
(698, 'Menu home', 1, -1, -1, -1, '2016-11-03 14:01:01'),
(699, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:01:05'),
(700, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:01:17'),
(701, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:01:30'),
(702, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:10:14'),
(703, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:14:41'),
(704, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:16:05'),
(705, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:16:33'),
(706, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:17:10'),
(707, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:17:16'),
(708, 'Menu home', 1, -1, -1, -1, '2016-11-03 14:17:35'),
(709, 'Categoria producto', 1, 8, -1, -1, '2016-11-03 14:17:39'),
(710, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:17:39'),
(711, 'Menu home', 1, -1, -1, -1, '2016-11-03 14:17:42'),
(712, 'Categoria producto', 1, 15, -1, -1, '2016-11-03 14:17:47'),
(713, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:17:47'),
(714, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:18:06'),
(715, 'Menu home', 1, -1, -1, -1, '2016-11-03 14:18:18'),
(716, 'Categoria producto', 1, 2, -1, -1, '2016-11-03 14:18:20'),
(717, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:18:20'),
(718, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:19:09'),
(719, 'Menu home', 1, -1, -1, -1, '2016-11-03 14:19:16'),
(720, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:19:17'),
(721, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:19:20'),
(722, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:19:48'),
(723, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:20:43'),
(724, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:27:11'),
(725, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:27:24'),
(726, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:29:35'),
(727, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:29:44'),
(728, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:29:57'),
(729, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:30:05'),
(730, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:30:08'),
(731, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:30:40'),
(732, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:31:00'),
(733, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:31:49'),
(734, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:33:17'),
(735, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:33:57'),
(736, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:37:14'),
(737, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:37:22'),
(738, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:38:43'),
(739, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:40:17'),
(740, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:41:19'),
(741, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:42:33'),
(742, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:48:33'),
(743, 'Info producto', 1, -1, -1, -1, '2016-11-03 14:48:44'),
(744, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:50:09'),
(745, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:50:34'),
(746, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:50:41'),
(747, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 14:51:14'),
(748, 'Menu home', 1, -1, -1, -1, '2016-11-03 14:51:35'),
(749, 'Gangs', 1, -1, -1, -1, '2016-11-03 14:52:35'),
(750, 'Menu home', 1, -1, -1, -1, '2016-11-03 14:52:37'),
(751, 'Avatar', 1, -1, -1, -1, '2016-11-03 14:52:38'),
(752, 'Menu home', 1, -1, -1, -1, '2016-11-03 14:52:43'),
(753, 'Avatar', 1, -1, -1, -1, '2016-11-03 14:54:32'),
(754, 'Menu home', 1, -1, -1, -1, '2016-11-03 14:55:15'),
(755, 'Menu home', 1, -1, -1, -1, '2016-11-03 14:55:54'),
(756, 'Menu home', 1, -1, -1, -1, '2016-11-03 14:56:50'),
(757, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 14:57:40'),
(758, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 14:57:48'),
(759, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:02:49'),
(760, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:03:12'),
(761, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:04:06'),
(762, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:07:02'),
(763, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:07:17'),
(764, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:08:03'),
(765, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:09:27'),
(766, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:09:49'),
(767, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:11:03'),
(768, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:11:34'),
(769, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:13:20'),
(770, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:13:25'),
(771, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:13:38'),
(772, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:15:52'),
(773, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:16:32'),
(774, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:16:45'),
(775, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:16:58'),
(776, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:17:05'),
(777, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:17:08'),
(778, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:17:09'),
(779, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:17:12'),
(780, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:19:10'),
(781, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 15:19:13'),
(782, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:19:21'),
(783, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:19:25'),
(784, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:20:15'),
(785, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:21:02'),
(786, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:21:12'),
(787, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:23:13'),
(788, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:23:17'),
(789, 'Avatar', 1, -1, -1, -1, '2016-11-03 15:23:18'),
(790, 'Gangs', 1, -1, -1, -1, '2016-11-03 15:23:23'),
(791, 'Avatar', 1, -1, -1, -1, '2016-11-03 15:23:27'),
(792, 'Menu invita amigo', 1, -1, -1, -1, '2016-11-03 15:23:32'),
(793, 'Menu contacto', 1, -1, -1, -1, '2016-11-03 15:23:38'),
(794, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:23:41'),
(795, 'Categoria producto', 1, 5, -1, -1, '2016-11-03 15:23:43'),
(796, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:23:43'),
(797, 'Info producto', 1, -1, -1, -1, '2016-11-03 15:23:47'),
(798, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:25:22'),
(799, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:25:23'),
(800, 'Info producto', 1, -1, -1, -1, '2016-11-03 15:25:37'),
(801, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:26:18'),
(802, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:26:19'),
(803, 'Info producto', 1, -1, -1, -1, '2016-11-03 15:26:29'),
(804, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:28:14'),
(805, 'Info producto', 1, -1, -1, -1, '2016-11-03 15:28:18'),
(806, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:31:05'),
(807, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:31:13'),
(808, 'Info producto', 1, -1, -1, -1, '2016-11-03 15:31:55'),
(809, 'Info producto', 1, -1, -1, -1, '2016-11-03 15:32:40'),
(810, 'Canastika', 1, -1, -1, -1, '2016-11-03 15:33:40'),
(811, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:33:49'),
(812, 'Canastika', 1, -1, -1, -1, '2016-11-03 15:34:07'),
(813, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:34:11'),
(814, 'Canastika', 1, -1, -1, -1, '2016-11-03 15:34:12'),
(815, 'Canastika redimir', 1, -1, -1, -1, '2016-11-03 15:34:30'),
(816, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:34:32'),
(817, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:35:01'),
(818, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:35:03'),
(819, 'Info producto', 1, -1, -1, -1, '2016-11-03 15:35:44'),
(820, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:37:13'),
(821, 'Info producto', 1, -1, -1, -1, '2016-11-03 15:37:16'),
(822, 'Menu home', 3, -1, -1, -1, '2016-11-03 15:37:26'),
(823, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 15:37:29'),
(824, 'Menu home', 4, -1, -1, -1, '2016-11-03 15:38:32'),
(825, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 15:38:33'),
(826, 'Info producto', 4, -1, -1, -1, '2016-11-03 15:38:38'),
(827, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:39:22'),
(828, 'Categoria producto', 1, 2, -1, -1, '2016-11-03 15:39:43'),
(829, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:39:43'),
(830, 'Info producto', 1, -1, -1, -1, '2016-11-03 15:39:45'),
(831, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:39:58'),
(832, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:40:00'),
(833, 'Info producto', 1, -1, -1, -1, '2016-11-03 15:40:21'),
(834, 'Canastika', 1, -1, -1, -1, '2016-11-03 15:41:45'),
(835, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 15:41:56'),
(836, 'Canastika', 4, -1, -1, -1, '2016-11-03 15:42:10'),
(837, 'Canastika', 1, -1, -1, -1, '2016-11-03 15:42:26'),
(838, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:42:26');
INSERT INTO `usuarios_clics` (`id`, `seccion`, `iduser`, `idcategoria`, `idmarca`, `idproducto`, `fecha`) VALUES
(839, 'Canastika', 4, -1, -1, -1, '2016-11-03 15:42:31'),
(840, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 15:42:35'),
(841, 'Canastika', 4, -1, -1, -1, '2016-11-03 15:42:43'),
(842, 'Canastika', 1, -1, -1, -1, '2016-11-03 15:43:18'),
(843, 'Canastika', 4, -1, -1, -1, '2016-11-03 15:43:19'),
(844, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 15:43:26'),
(845, 'Canastika', 4, -1, -1, -1, '2016-11-03 15:43:29'),
(846, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 15:43:31'),
(847, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:44:36'),
(848, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 15:45:05'),
(849, 'Menu invita amigo', 1, -1, -1, -1, '2016-11-03 15:45:09'),
(850, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:45:15'),
(851, 'Avatar', 1, -1, -1, -1, '2016-11-03 15:45:17'),
(852, 'Gangs', 1, -1, -1, -1, '2016-11-03 15:45:20'),
(853, 'Avatar', 1, -1, -1, -1, '2016-11-03 15:45:21'),
(854, 'Canastika', 1, -1, -1, -1, '2016-11-03 15:45:22'),
(855, 'Avatar', 1, -1, -1, -1, '2016-11-03 15:45:24'),
(856, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:45:26'),
(857, 'Gangs', 1, -1, -1, -1, '2016-11-03 15:45:48'),
(858, 'Canastika', 1, -1, -1, -1, '2016-11-03 15:45:51'),
(859, 'Producto comentarios', 1, -1, -1, -1, '2016-11-03 15:45:54'),
(860, 'Menu contacto', 1, -1, -1, -1, '2016-11-03 15:46:09'),
(861, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 15:46:13'),
(862, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:46:17'),
(863, 'Avatar', 1, -1, -1, -1, '2016-11-03 15:46:18'),
(864, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:46:26'),
(865, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:46:30'),
(866, 'Gangs', 1, -1, -1, -1, '2016-11-03 15:46:31'),
(867, 'Tip como ganas mas', 1, -1, -1, -1, '2016-11-03 15:46:33'),
(868, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:46:44'),
(869, 'Menu home', 4, -1, -1, -1, '2016-11-03 15:46:50'),
(870, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 15:47:01'),
(871, 'Info producto', 4, -1, -1, -1, '2016-11-03 15:47:09'),
(872, 'Menu home', 4, -1, -1, -1, '2016-11-03 15:47:12'),
(873, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 15:47:14'),
(874, 'Info producto', 4, -1, -1, -1, '2016-11-03 15:47:19'),
(875, 'Menu home', 4, -1, -1, -1, '2016-11-03 15:47:51'),
(876, 'Avatar', 4, -1, -1, -1, '2016-11-03 15:47:52'),
(877, 'Tip como ganas mas', 4, -1, -1, -1, '2016-11-03 15:48:01'),
(878, 'Gangs', 4, -1, -1, -1, '2016-11-03 15:48:04'),
(879, 'Gangs', 4, -1, -1, -1, '2016-11-03 15:48:08'),
(880, 'Canastika', 4, -1, -1, -1, '2016-11-03 15:48:09'),
(881, 'Menu home', 4, -1, -1, -1, '2016-11-03 15:48:18'),
(882, 'Categoria producto', 4, 3, -1, -1, '2016-11-03 15:48:19'),
(883, 'Productos para ti', 4, -1, -1, -1, '2016-11-03 15:48:19'),
(884, 'Menu home', 4, -1, -1, -1, '2016-11-03 15:48:26'),
(885, 'Menu invita amigo', 4, -1, -1, -1, '2016-11-03 15:48:34'),
(886, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:51:41'),
(887, 'Categoria producto', 1, 12, -1, -1, '2016-11-03 15:51:42'),
(888, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:51:42'),
(889, 'Menu home', 1, -1, -1, -1, '2016-11-03 15:51:47'),
(890, 'Categoria producto', 1, 11, -1, -1, '2016-11-03 15:51:49'),
(891, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 15:51:50'),
(892, 'Canastika', 1, -1, -1, -1, '2016-11-03 15:51:59'),
(893, 'Menu home', 3, -1, -1, -1, '2016-11-03 15:53:04'),
(894, 'Patrocinio', 3, -1, -1, -1, '2016-11-03 15:53:10'),
(895, 'Menu home', 3, -1, -1, -1, '2016-11-03 15:57:15'),
(896, 'Patrocinio', 3, -1, -1, -1, '2016-11-03 15:57:18'),
(897, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:01:02'),
(898, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:01:05'),
(899, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:01:21'),
(900, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:02:14'),
(901, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:02:16'),
(902, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 16:02:26'),
(903, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:02:29'),
(904, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:08:30'),
(905, 'Canastika', 1, -1, -1, -1, '2016-11-03 16:08:55'),
(906, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:09:04'),
(907, 'Menu home', 3, -1, -1, -1, '2016-11-03 16:09:13'),
(908, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 16:10:30'),
(909, 'Patrocinio', 1, -1, -1, -1, '2016-11-03 16:10:47'),
(910, 'Menu home', 3, -1, -1, -1, '2016-11-03 16:11:14'),
(911, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:12:20'),
(912, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:13:13'),
(913, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 16:15:52'),
(914, 'Editar perfil', 1, -1, -1, -1, '2016-11-03 16:15:54'),
(915, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 16:16:01'),
(916, 'Menu home', 4, -1, -1, -1, '2016-11-03 16:17:22'),
(917, 'Avatar', 4, -1, -1, -1, '2016-11-03 16:17:27'),
(918, 'Canastika', 4, -1, -1, -1, '2016-11-03 16:17:31'),
(919, 'Canastika redimir', 4, -1, -1, -1, '2016-11-03 16:17:33'),
(920, 'Menu home', 3, -1, -1, -1, '2016-11-03 16:19:11'),
(921, 'Categoria producto', 3, 2, -1, -1, '2016-11-03 16:19:11'),
(922, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 16:19:12'),
(923, 'Menu home', 3, -1, -1, -1, '2016-11-03 16:19:37'),
(924, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 16:19:39'),
(925, 'Menu home', 3, -1, -1, -1, '2016-11-03 16:20:00'),
(926, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 16:20:03'),
(927, 'Categoria producto', 3, 2, -1, -1, '2016-11-03 16:20:03'),
(928, 'Menu home', 3, -1, -1, -1, '2016-11-03 16:22:02'),
(929, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:22:14'),
(930, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:22:19'),
(931, 'Menu contacto', 3, -1, -1, -1, '2016-11-03 16:22:20'),
(932, 'Categoria producto', 1, 2, -1, -1, '2016-11-03 16:22:20'),
(933, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 16:22:21'),
(934, 'Menu home', 3, -1, -1, -1, '2016-11-03 16:22:24'),
(935, 'Gangs', 3, -1, -1, -1, '2016-11-03 16:22:26'),
(936, 'Tip como ganas mas', 3, -1, -1, -1, '2016-11-03 16:22:41'),
(937, 'Canastika', 1, -1, -1, -1, '2016-11-03 16:22:41'),
(938, 'Menu home', 3, -1, -1, -1, '2016-11-03 16:24:30'),
(939, 'Categoria producto', 3, 2, -1, -1, '2016-11-03 16:24:32'),
(940, 'Productos para ti', 3, -1, -1, -1, '2016-11-03 16:24:32'),
(941, 'Canastika', 3, -1, -1, -1, '2016-11-03 16:24:54'),
(942, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:28:02'),
(943, 'Avatar', 1, -1, -1, -1, '2016-11-03 16:28:03'),
(944, 'Canastika', 1, -1, -1, -1, '2016-11-03 16:28:15'),
(945, 'Canastika redimir', 1, -1, -1, -1, '2016-11-03 16:28:16'),
(946, 'Redencion punto de venta', 1, -1, -1, -1, '2016-11-03 16:28:22'),
(947, 'Canastika', 1, -1, -1, -1, '2016-11-03 16:29:15'),
(948, 'Canastika redimir', 1, -1, -1, -1, '2016-11-03 16:29:16'),
(949, 'Redencion punto de venta', 1, -1, -1, -1, '2016-11-03 16:29:19'),
(950, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 16:31:44'),
(951, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 16:32:07'),
(952, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 16:32:13'),
(953, 'Canastika', 1, -1, -1, -1, '2016-11-03 16:32:21'),
(954, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:34:45'),
(955, 'Avatar', 1, -1, -1, -1, '2016-11-03 16:34:54'),
(956, 'Avatar', 1, -1, -1, -1, '2016-11-03 16:35:06'),
(957, 'Gangs', 1, -1, -1, -1, '2016-11-03 16:35:16'),
(958, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:35:18'),
(959, 'Categoria producto', 1, 15, -1, -1, '2016-11-03 16:35:41'),
(960, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 16:35:42'),
(961, 'Menu perfil', 1, -1, -1, -1, '2016-11-03 16:35:44'),
(962, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:36:13'),
(963, 'Categoria producto', 1, 16, -1, -1, '2016-11-03 16:36:36'),
(964, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 16:36:36'),
(965, 'Info producto', 1, -1, -1, -1, '2016-11-03 16:36:39'),
(966, 'Canastika', 1, -1, -1, -1, '2016-11-03 16:37:43'),
(967, 'Menu home', 3, -1, -1, -1, '2016-11-03 16:38:19'),
(968, 'Gangs', 3, -1, -1, -1, '2016-11-03 16:38:39'),
(969, 'Canastika', 3, -1, -1, -1, '2016-11-03 16:38:42'),
(970, 'Menu perfil', 3, -1, -1, -1, '2016-11-03 16:38:46'),
(971, 'Menu home', 3, -1, -1, -1, '2016-11-03 16:38:48'),
(972, 'Avatar', 3, -1, -1, -1, '2016-11-03 16:38:50'),
(973, 'Menu perfil', 3, -1, -1, -1, '2016-11-03 16:39:50'),
(974, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:42:01'),
(975, 'Canastika', 1, -1, -1, -1, '2016-11-03 16:42:06'),
(976, 'Canastika', 1, -1, -1, -1, '2016-11-03 16:42:17'),
(977, 'Canastika', 1, -1, -1, -1, '2016-11-03 16:42:34'),
(978, 'Producto comentarios', 1, -1, -1, -1, '2016-11-03 16:42:37'),
(979, 'Canastika', 1, -1, -1, -1, '2016-11-03 16:43:37'),
(980, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:43:41'),
(981, 'Categoria producto', 1, 2, -1, -1, '2016-11-03 16:43:42'),
(982, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 16:43:42'),
(983, 'Info producto', 1, -1, -1, -1, '2016-11-03 16:43:45'),
(984, 'Menu home', 3, -1, -1, -1, '2016-11-03 16:44:06'),
(985, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:44:41'),
(986, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:44:43'),
(987, 'Menu home', 1, -1, -1, -1, '2016-11-03 16:45:09'),
(988, 'Menu contacto', 1, -1, -1, -1, '2016-11-03 16:45:17'),
(989, 'Menu contacto', 1, -1, -1, -1, '2016-11-03 16:45:51'),
(990, 'Productos para ti', 1, -1, -1, -1, '2016-11-03 16:46:12');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_gangs`
--

CREATE TABLE IF NOT EXISTS `usuarios_gangs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `tipo` set('inicio','preguntas','compartir','compra','referido') NOT NULL,
  `gangs` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `idreferido` int(11) NOT NULL DEFAULT '-1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `usuarios_gangs`
--

INSERT INTO `usuarios_gangs` (`id`, `iduser`, `tipo`, `gangs`, `fecha`, `idreferido`) VALUES
(1, 1, 'inicio', 2000, '2016-11-02 16:46:47', -1),
(2, 1, 'inicio', 2000, '2016-11-02 16:49:02', -1),
(3, 2, 'inicio', 2000, '2016-11-02 16:55:47', -1),
(4, 2, 'inicio', 2000, '2016-11-02 16:58:36', -1),
(5, 3, 'inicio', 2000, '2016-11-02 17:01:28', -1),
(6, 3, 'inicio', 2000, '2016-11-02 17:02:01', -1),
(7, 3, 'compra', 1962, '2016-11-02 18:24:40', -1),
(8, 1, 'compra', 3989, '2016-11-02 18:52:53', -1),
(9, 1, 'compra', 4, '2016-11-02 18:52:54', -1),
(10, 3, 'compra', 2699, '2016-11-03 09:29:55', -1),
(11, 3, 'compra', 2699, '2016-11-03 09:32:51', -1),
(12, 3, 'compra', 3, '2016-11-03 09:32:52', -1),
(13, 3, 'compra', 69, '2016-11-03 09:36:06', -1),
(14, 3, 'compra', 2399, '2016-11-03 10:12:15', -1),
(15, 4, 'inicio', 2000, '2016-11-03 10:36:06', -1),
(16, 3, 'referido', 200, '2016-11-03 10:36:06', 4),
(17, 4, 'inicio', 2000, '2016-11-03 10:36:59', -1),
(18, 3, 'referido', 200, '2016-11-03 10:36:59', 4),
(19, 3, 'compra', 1, '2016-11-03 11:04:45', -1),
(20, 4, 'compra', 1699, '2016-11-03 11:33:32', -1),
(21, 3, 'referido', 170, '2016-11-03 11:33:32', 4),
(22, 4, 'compra', 0, '2016-11-03 11:41:26', -1),
(23, 3, 'referido', 0, '2016-11-03 11:41:26', 4),
(24, 4, 'compra', 0, '2016-11-03 11:41:26', -1),
(25, 1, 'compra', 1579, '2016-11-03 16:30:39', -1);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_intro`
--

CREATE TABLE IF NOT EXISTS `usuarios_intro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `usuarios_intro`
--

INSERT INTO `usuarios_intro` (`id`, `iduser`, `fecha`) VALUES
(1, 1, '2016-11-02 16:49:02'),
(2, 2, '2016-11-02 16:58:36'),
(3, 3, '2016-11-02 17:02:01'),
(4, 4, '2016-11-03 10:36:59');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_invitaciones`
--

CREATE TABLE IF NOT EXISTS `usuarios_invitaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `usuarios_invitaciones`
--

INSERT INTO `usuarios_invitaciones` (`id`, `iduser`, `email`, `fecha`) VALUES
(1, 2, 'Angelica.verano@grancomunicaciones.com', '2016-11-02 16:57:47'),
(2, 3, 'yohanacp_07@yahoo.com', '2016-11-03 10:15:56');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_mail_tienda`
--

CREATE TABLE IF NOT EXISTS `usuarios_mail_tienda` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `idcanastika` int(11) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `usuarios_mail_tienda`
--

INSERT INTO `usuarios_mail_tienda` (`id`, `iduser`, `idcanastika`, `fecha`) VALUES
(1, 3, 2, '2016-11-02'),
(2, 1, 3, '2016-11-02'),
(3, 3, 4, '2016-11-03'),
(4, 3, 5, '2016-11-03'),
(5, 3, 8, '2016-11-03'),
(6, 1, 1, '2016-11-03'),
(7, 3, 7, '2016-11-03'),
(8, 4, 10, '2016-11-03'),
(9, 4, 12, '2016-11-03'),
(10, 1, 15, '2016-11-03');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_patrocinados`
--

CREATE TABLE IF NOT EXISTS `usuarios_patrocinados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `idmarca` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `usuarios_patrocinados`
--

INSERT INTO `usuarios_patrocinados` (`id`, `iduser`, `idmarca`) VALUES
(5, 3, 8),
(6, 1, 7),
(7, 3, 7),
(8, 1, 8),
(9, 1, 5),
(10, 3, 5),
(11, 1, 4),
(12, 3, 4);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_piezas_avatares`
--

CREATE TABLE IF NOT EXISTS `usuarios_piezas_avatares` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `idproducto` int(11) NOT NULL,
  `tipo` set('Normal','Patrocinado') NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `usuarios_piezas_avatares`
--

INSERT INTO `usuarios_piezas_avatares` (`id`, `iduser`, `idproducto`, `tipo`, `fecha`) VALUES
(16, 1, 5, 'Normal', '2016-11-03 16:30:39'),
(17, 1, 5, '', '2016-11-03 16:30:50');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_productos`
--

CREATE TABLE IF NOT EXISTS `usuarios_productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `idproducto` int(11) NOT NULL,
  `palabraclave` varchar(255) NOT NULL,
  `codigo` varchar(255) NOT NULL,
  `redencion` set('Tienda','Domicilio') NOT NULL,
  `idmarcaestablecimiento` int(11) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `com_direccion` varchar(255) NOT NULL,
  `idciudad` int(11) NOT NULL,
  `barrio` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `pago` set('Efectivo','Tarjeta') NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `usuarios_productos`
--

INSERT INTO `usuarios_productos` (`id`, `iduser`, `idproducto`, `palabraclave`, `codigo`, `redencion`, `idmarcaestablecimiento`, `direccion`, `com_direccion`, `idciudad`, `barrio`, `telefono`, `pago`, `fecha`) VALUES
(1, 3, 19, 'AMOR Y AMISTAD', 'fba0e96', 'Tienda', 0, '', '', 0, '', '', '', '2016-11-02 18:24:40'),
(3, 3, 1, 'AMOR Y AMISTAD', 'd100b99', 'Tienda', 0, '', '', 0, '', '', '', '2016-11-03 09:29:55'),
(4, 3, 1, 'AMOR Y AMISTAD', '9d7cc02', 'Domicilio', 0, 'Clke 4 56 76', '3', 1, '4', '213236236', 'Tarjeta', '2016-11-03 09:32:51'),
(5, 3, 20, 'AMOR Y AMISTAD', '41f5763', 'Tienda', 0, '', '', 0, '', '', '', '2016-11-03 09:36:06'),
(6, 3, 25, 'AMOR Y AMISTAD', '1da77f8', 'Tienda', 0, '', '', 0, '', '', '', '2016-11-03 10:12:15'),
(7, 3, 16, 'AMOR Y AMISTAD', '0f54f4a', 'Tienda', 0, '', '', 0, '', '', '', '2016-11-03 11:04:45'),
(8, 4, 22, 'AMOR Y AMISTAD', '90f2911', 'Tienda', 0, '', '', 0, '', '', '', '2016-11-03 11:33:32'),
(9, 4, 28, 'AMOR Y AMISTAD', '02fea32', 'Domicilio', 0, 'Call 2 56', '3', 1, 'Cal', '2508526', 'Tarjeta', '2016-11-03 11:41:26'),
(10, 1, 5, 'AMOR Y AMISTAD', '6d300a5', 'Tienda', 0, '', '', 0, '', '', '', '2016-11-03 16:30:39');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_productos_patrocinados`
--

CREATE TABLE IF NOT EXISTS `usuarios_productos_patrocinados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `idproducto` int(11) NOT NULL,
  `palabraclave` varchar(255) NOT NULL,
  `codigo` varchar(255) NOT NULL,
  `redencion` set('Tienda','Domicilio') NOT NULL,
  `idmarcaestablecimiento` int(11) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `com_direccion` varchar(255) NOT NULL,
  `idciudad` int(11) NOT NULL,
  `barrio` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `pago` set('Efectivo','Tarjeta') NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_respuestas_productos`
--

CREATE TABLE IF NOT EXISTS `usuarios_respuestas_productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `idpregunta` int(11) NOT NULL,
  `respuesta` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=34 ;

--
-- Dumping data for table `usuarios_respuestas_productos`
--

INSERT INTO `usuarios_respuestas_productos` (`id`, `iduser`, `idpregunta`, `respuesta`, `fecha`) VALUES
(28, 1, 12, 2, '2016-11-03 16:22:39'),
(29, 1, 2, 4, '2016-11-03 16:22:39'),
(30, 1, 24, 2, '2016-11-03 16:22:39'),
(31, 3, 2, 1, '2016-11-03 16:24:53'),
(32, 3, 23, 2, '2016-11-03 16:24:53'),
(33, 3, 22, 1, '2016-11-03 16:24:53');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_respuestas_registro`
--

CREATE TABLE IF NOT EXISTS `usuarios_respuestas_registro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `idpregunta` int(11) NOT NULL,
  `respuesta` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=59 ;

--
-- Dumping data for table `usuarios_respuestas_registro`
--

INSERT INTO `usuarios_respuestas_registro` (`id`, `iduser`, `idpregunta`, `respuesta`, `fecha`) VALUES
(1, 1, 1, 1, '2016-11-02 16:49:01'),
(2, 1, 2, 4, '2016-11-02 16:49:01'),
(3, 1, 5, 1, '2016-11-02 16:49:01'),
(4, 1, 5, 5, '2016-11-02 16:49:01'),
(5, 1, 5, 10, '2016-11-02 16:49:01'),
(6, 1, 3, 1, '2016-11-02 16:49:01'),
(7, 1, 4, 1, '2016-11-02 16:49:01'),
(8, 2, 1, 2, '2016-11-02 16:58:35'),
(9, 2, 2, 5, '2016-11-02 16:58:35'),
(10, 2, 5, 1, '2016-11-02 16:58:35'),
(11, 2, 5, 2, '2016-11-02 16:58:35'),
(12, 2, 5, 3, '2016-11-02 16:58:35'),
(13, 2, 5, 4, '2016-11-02 16:58:35'),
(14, 2, 5, 5, '2016-11-02 16:58:35'),
(15, 2, 5, 6, '2016-11-02 16:58:35'),
(16, 2, 5, 7, '2016-11-02 16:58:35'),
(17, 2, 5, 8, '2016-11-02 16:58:35'),
(18, 2, 5, 9, '2016-11-02 16:58:35'),
(19, 2, 5, 10, '2016-11-02 16:58:35'),
(20, 2, 3, 1, '2016-11-02 16:58:35'),
(21, 2, 4, 1, '2016-11-02 16:58:35'),
(22, 3, 1, 2, '2016-11-02 17:02:00'),
(23, 3, 2, 5, '2016-11-02 17:02:00'),
(24, 3, 5, 1, '2016-11-02 17:02:00'),
(25, 3, 5, 2, '2016-11-02 17:02:00'),
(26, 3, 5, 3, '2016-11-02 17:02:00'),
(27, 3, 5, 4, '2016-11-02 17:02:00'),
(28, 3, 5, 5, '2016-11-02 17:02:00'),
(29, 3, 5, 6, '2016-11-02 17:02:00'),
(30, 3, 5, 7, '2016-11-02 17:02:00'),
(31, 3, 5, 8, '2016-11-02 17:02:00'),
(32, 3, 5, 9, '2016-11-02 17:02:00'),
(33, 3, 5, 10, '2016-11-02 17:02:00'),
(34, 3, 3, 1, '2016-11-02 17:02:00'),
(35, 3, 4, 1, '2016-11-02 17:02:00'),
(36, 3, 1, 2, '2016-11-02 17:02:00'),
(37, 3, 2, 3, '2016-11-02 17:02:00'),
(38, 3, 5, 1, '2016-11-02 17:02:00'),
(39, 3, 5, 2, '2016-11-02 17:02:00'),
(40, 3, 5, 3, '2016-11-02 17:02:00'),
(41, 3, 5, 4, '2016-11-02 17:02:00'),
(42, 3, 5, 5, '2016-11-02 17:02:00'),
(43, 3, 5, 6, '2016-11-02 17:02:00'),
(44, 3, 5, 7, '2016-11-02 17:02:00'),
(45, 3, 5, 8, '2016-11-02 17:02:00'),
(46, 3, 5, 9, '2016-11-02 17:02:00'),
(47, 3, 5, 10, '2016-11-02 17:02:00'),
(48, 3, 3, 1, '2016-11-02 17:02:00'),
(49, 3, 4, 1, '2016-11-02 17:02:00'),
(50, 4, 1, 1, '2016-11-03 10:36:58'),
(51, 4, 2, 2, '2016-11-03 10:36:58'),
(52, 4, 5, 3, '2016-11-03 10:36:58'),
(53, 4, 5, 4, '2016-11-03 10:36:58'),
(54, 4, 5, 5, '2016-11-03 10:36:58'),
(55, 4, 5, 6, '2016-11-03 10:36:58'),
(56, 4, 5, 8, '2016-11-03 10:36:58'),
(57, 4, 3, 4, '2016-11-03 10:36:58'),
(58, 4, 4, 2, '2016-11-03 10:36:58');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_tips_avatar`
--

CREATE TABLE IF NOT EXISTS `usuarios_tips_avatar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_tips_gangs`
--

CREATE TABLE IF NOT EXISTS `usuarios_tips_gangs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
