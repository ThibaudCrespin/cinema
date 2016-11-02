SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

CREATE DATABASE IF NOT EXISTS `projet_angular` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `projet_angular`;

DROP TABLE IF EXISTS `cinema`;
CREATE TABLE IF NOT EXISTS `cinema` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `adress` varchar(250) NOT NULL,
  `cp` varchar(50) NOT NULL,
  `ville` varchar(250) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

INSERT INTO `cinema` (`id`, `name`, `adress`, `cp`, `ville`, `latitude`, `longitude`) VALUES
(1, 'CGR Dragon', '8, Cours des Dames', '17000', 'La Rochelle', 46.1577, -1.15359),
(2, 'Méga CGR La Rochelle', 'ave Becquerel', '17000', 'La Rochelle', 46.1467, -1.15379),
(3, 'CGR Olympia', '54 rue Chaudrier', '17000', 'La Rochelle', 46.1626, -1.152),
(4, 'La Coursive Scène Nationale', '4, rue Saint-Jean-du-Perot', '17000', 'La Rochelle', 46.1567, -1.15462),
(5, 'Casino de Fouras', 'Place Bugeau', '17450', 'Fouras', 45.9899, -1.09799),
(6, 'La Maline', 'Le Mail', '17670', 'La Couarde-sur-Mer', 46.192, -1.42598),
(7, 'Le Goëland', '1 rue Général Leclerc', '85460', 'L'' Aiguillon-sur-Mer', 46.3338, -1.30502),
(8, 'Eldorado', '5, rue de la République', '17310', 'Saint-Pierre-d''Oléron', 45.9436, -1.30846);

DROP TABLE IF EXISTS `cinema_film`;
CREATE TABLE IF NOT EXISTS `cinema_film` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `id_cinema` int(8) NOT NULL,
  `id_film` int(8) NOT NULL,
  `id_horaire` int(8) NOT NULL,
  PRIMARY KEY (`id`,`id_cinema`,`id_film`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

INSERT INTO `cinema_film` (`id`, `id_cinema`, `id_film`, `id_horaire`) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 1, 2, 2),
(4, 2, 3, 2),
(5, 3, 2, 1),
(6, 3, 2, 2),
(7, 4, 1, 1),
(8, 4, 1, 2),
(9, 4, 2, 2),
(10, 4, 3, 3),
(11, 1, 3, 3),
(12, 1, 4, 4),
(13, 5, 1, 1),
(14, 5, 2, 4),
(15, 6, 5, 2),
(16, 6, 4, 1),
(17, 7, 2, 3),
(18, 7, 4, 3),
(19, 7, 5, 2),
(20, 8, 5, 2),
(21, 8, 5, 4),
(22, 8, 1, 2),
(23, 8, 2, 3);

DROP TABLE IF EXISTS `film`;
CREATE TABLE IF NOT EXISTS `film` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `titre` varchar(250) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

INSERT INTO `film` (`id`, `titre`, `description`) VALUES
(1, 'Le Dernier loup', '1969. Chen Zhen, un jeune étudiant originaire de Pékin, est envoyé en Mongolie-Intérieure afin d’éduquer une tribu de bergers nomades.'),
(2, 'Divergente 2 : l’insurrection', 'Dans un monde post-apocalyptique où la société a été réorganisée autour de 5 factions, Tris a mis à jour un complot mené par la faction dominante, les Erudits, dirigés par Janine. Abandonnant une ville à feu et à sang, à la recherche d’alliés, Tris et Four sont désormais traqués par les autorités. \r\n'),
(3, 'Un homme idéal', 'Mathieu, 25 ans, aspire depuis toujours à devenir un auteur reconnu. Un rêve qui lui semble inaccessible car malgré tous ses efforts, il n’a jamais réussi à être édité. En attendant, il gagne sa vie en travaillant chez son oncle qui dirige une société de déménagement…\r\n'),
(4, 'L''Art de la fugue', 'Antoine vit avec Adar, mais il rêve d’Alexis... Louis est amoureux de Mathilde alors il va épouser Julie... Gérard, qui n’aime qu’Hélène, tombera-t-il dans les bras d’Ariel ? Trois frères en pleine confusion... Comment, dès lors, retrouver un droit chemin ou échapper à ses responsabilités ? C’est là tout L’Art de la Fugue...\r\n'),
(5, 'Un Village presque parfait', '"Saint-Loin-la-Mauderne", un petit village frappé de plein fouet par la crise et la désertification.\r\nSon dernier espoir : relancer l''usine de fumage de saumon. Seul problème, les assurances exigent la présence d''un médecin à demeure.');

DROP TABLE IF EXISTS `horaire`;
CREATE TABLE IF NOT EXISTS `horaire` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `horaire` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO `horaire` (`id`, `horaire`) VALUES
(1, '16h - 18h'),
(2, '20h - 22h'),
(3, '22h - 00h'),
(4, '11h -- 13h');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
