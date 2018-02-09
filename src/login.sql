/*
Navicat MySQL Data Transfer

Source Server         : 1707
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : login

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 16:41:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `cage` varchar(255) NOT NULL,
  `cages` varchar(255) NOT NULL,
  `bnum` int(11) DEFAULT NULL,
  `imgurl` varchar(255) NOT NULL,
  `img1` varchar(255) NOT NULL,
  `img2` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `oprice` decimal(10,2) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `com` int(11) DEFAULT NULL,
  `manyi` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `zen` int(11) DEFAULT '0',
  `jian` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '康多乐', 'dog', '1', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('2', '康多乐', 'dog', '1', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('3', '康多乐', 'dog', '1', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('4', '康多乐', 'dog', '1', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('5', '康多乐', 'dog', '1', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('6', '康多乐', 'dog', '1', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('7', '康多乐', 'dog', '1', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('8', '康多乐', 'dog', '1', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('9', '没了多', 'dog', '2', '121212', './imgaes/g002.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '244.00', '339.00', '107', '304', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('10', '没了多', 'dog', '2', '121212', './imgaes/g002.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '244.00', '339.00', '107', '304', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('11', '没了多', 'dog', '2', '121212', './imgaes/g002.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '107', '304', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('12', '没了多', 'dog', '2', '121212', './imgaes/g002.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '107', '304', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('13', '没了多', 'dog', '2', '121212', './imgaes/g002.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '107', '304', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('14', '没了多', 'dog', '2', '121212', './imgaes/g002.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '107', '304', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('15', '没了多', 'dog', '2', '121212', './imgaes/g002.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '107', '1111', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('16', '没了多', 'dog', '2', '121212', './imgaes/g002.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '107', '1111', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('17', '没多少', 'dog', '3', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '107', '1111', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('18', '没多少', 'dog', '3', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '107', '1111', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('19', '没多少', 'dog', '3', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '1072', '1111', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('20', '没多少', 'dog', '3', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '1072', '1111', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('21', '没多少', 'dog', '3', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '1111', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('22', '没多少', 'dog', '3', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '1111', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('23', '没多少', 'dog', '3', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '1111', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('24', '没多少', 'dog', '3', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '1111', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('25', '没多少', 'dog', '3', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '3041', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('26', '多没多少', 'dog', '4', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '3041', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('27', '多没多少', 'dog', '4', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '3041', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('28', '多没多少', 'dog', '4', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1207', '3041', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('29', '多没多少', 'dog', '4', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '1244.00', '339.00', '1202', '3041', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('30', '多没多少', 'dog', '4', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '1244.00', '339.00', '1207', '3041', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('31', '多没多少', 'dog', '4', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '1244.00', '339.00', '1207', '3041', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('32', '多没多少', 'dog', '4', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '1244.00', '339.00', '1207', '3041', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('33', '多少', 'dog', '5', '121213', './imgaes/g005.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '1244.00', '339.00', '1207', '3041', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('34', '多少', 'dog', '5', '121213', './imgaes/g005.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '1244.00', '339.00', '1207', '1304', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('35', '多少', 'dog', '5', '121213', './imgaes/g005.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '1244.00', '339.00', '1207', '1304', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('36', '多少', 'dog', '5', '121213', './imgaes/g005.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '1244.00', '339.00', '1207', '1304', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('37', '多少', 'dog', '5', '121213', './imgaes/g005.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '1244.00', '339.00', '1207', '1304', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('38', '多没多少', 'dog', '6', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '3041', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('39', '多没多少', 'dog', '6', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1207', '3041', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('40', '多没多少', 'dog', '6', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '1244.00', '339.00', '1207', '3041', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('41', '多没多少', 'dog', '6', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '1244.00', '339.00', '1207', '3041', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('42', '多没多少', 'dog', '6', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '1244.00', '339.00', '1207', '3041', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('43', '多没多少', 'dog', '6', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '1244.00', '339.00', '1207', '3041', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('44', '没多少', 'dog', '7', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '1111', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('45', '没多少', 'dog', '7', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '1111', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('46', '没多少', 'dog', '7', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '1111', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('47', '没多少', 'dog', '7', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '1111', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('48', '没多少', 'dog', '7', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '3041', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('49', '多没多少', 'dog', '7', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '3041', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('50', '多没多少', 'dog', '7', '121213', './imgaes/g004.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '3041', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('51', '没了多', 'dog', '8', '121212', './imgaes/g002.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '107', '1111', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('52', '没了多', 'dog', '8', '121212', './imgaes/g002.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '107', '1111', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('53', '没多少', 'dog', '8', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '107', '1111', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('54', '没多少', 'dog', '8', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '107', '1111', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('55', '没多少', 'dog', '8', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '1072', '1111', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('56', '没多少', 'dog', '8', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2344.00', '339.00', '1072', '1111', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('57', '没多少', 'dog', '8', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '1111', '5', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('58', '康多乐', 'dog', '9', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('59', '康多乐', 'dog', '9', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('60', '康多乐', 'dog', '9', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('61', '康多乐', 'dog', '9', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('62', '康多乐', 'dog', '9', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('63', '康多乐', 'dog', '9', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('64', '没多少', 'dog', '10', '121213', './imgaes/g003.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '2244.00', '339.00', '1072', '1111', '5', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('65', '康多乐', 'dog', '10', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('66', '康多乐', 'dog', '10', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('67', '康多乐', 'dog', '10', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('68', '康多乐', 'dog', '10', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '1', '1');
INSERT INTO `goods` VALUES ('69', '康多乐', 'dog', '10', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '0', '0');
INSERT INTO `goods` VALUES ('70', '康多乐', 'dog', '10', '101202', './imgaes/g001.jpg', '../imgaes/g001.jpg,../imgaes/g002.jpg,../imgaes/g003.jpg,../imgaes/g004.jpg,../imgaes/g005.jpg', '../imgaes/bg001.jpg,../imgaes/bg002.jpg,../imgaes/bg003.jpg,../imgaes/bg004.jpg,../imgaes/bg005.jpg', '289.00', '339.00', '1076', '300', '3', '佩玛思特幼猫及怀孕母猫', '1', '1');

-- ----------------------------
-- Table structure for orderss
-- ----------------------------
DROP TABLE IF EXISTS `orderss`;
CREATE TABLE `orderss` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `goods` int(11) NOT NULL,
  `user` varchar(255) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `qty` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orderss
-- ----------------------------
INSERT INTO `orderss` VALUES ('52', '3', 'dy', '6');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `tel` varchar(255) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `gtime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('4', '13533273641', '96e79218965eb72c92a549dd5a330112', '2018-02-07 16:43:27');
INSERT INTO `users` VALUES ('5', '18826426472', '96e79218965eb72c92a549dd5a330112', '2018-02-07 16:55:55');
SET FOREIGN_KEY_CHECKS=1;
