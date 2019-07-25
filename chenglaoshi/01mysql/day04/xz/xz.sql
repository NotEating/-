#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS xz;
#创建数据库，设置编码
CREATE DATABASE xz CHARSET=UTF8;
#进入创建的数据库
USE xz;
#创建保存笔记本分类数据的表
CREATE TABLE laptop_family(
  fid SMALLINT PRIMARY KEY,
  fname VARCHAR(8),
  laptopCount INT
);
#插入数据
INSERT INTO laptop_family VALUES(10,'联想',2);
INSERT INTO laptop_family VALUES(20,'戴尔',2);
INSERT INTO laptop_family VALUES(30,'小米',3);
#创建保存笔记本数据的表
CREATE TABLE laptop(
  lid INT PRIMARY KEY,
  title VARCHAR(128),
  price DECIMAL(7,2),
  spec VARCHAR(32),
  detail VARCHAR(3000),
  shelfTime DATE,
  isOnsale BOOL,
  familyId SMALLINT
);
#插入数据
INSERT INTO laptop VALUES(1,'小米Air',3999,'游戏本','详情一','2018-12-1',1,30);
INSERT INTO laptop VALUES(2,'戴尔灵越1400',4299,'开发本','详情二','2019-1-1',1,20);
INSERT INTO laptop VALUES(3,'ThinkPadE470',3299,'开发本','详情三','2017-5-1',0,10);


