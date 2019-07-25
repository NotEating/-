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
  fname VARCHAR(8) UNIQUE,
  laptopCount INT DEFAULT 1
);
#插入数据
INSERT INTO laptop_family VALUES(10,'联想',2);
INSERT INTO laptop_family VALUES(20,'戴尔',2);
INSERT INTO laptop_family VALUES(30,'小米',3);
INSERT INTO laptop_family VALUES(40,NULL,2);
INSERT INTO laptop_family VALUES(50,'神州',DEFAULT);
INSERT INTO laptop_family(fid,fname) VALUES(60,'荣耀');


#创建保存笔记本数据的表
CREATE TABLE laptop( 
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128) UNIQUE,
  price DECIMAL(7,2) NOT NULL DEFAULT 3000,
  spec VARCHAR(32),
  detail VARCHAR(3000),
  shelfTime DATE,
  isOnsale BOOL,
  familyId SMALLINT,
  FOREIGN KEY(familyId) REFERENCES laptop_family(fid)
);
#插入数据
INSERT INTO laptop VALUES(1,'小米Air',3999,'游戏本','详情一','2018-12-1',1,30);
INSERT INTO laptop VALUES(2,'戴尔灵越1400',4299,'开发本','详情二','2019-1-1',1,20);
INSERT INTO laptop VALUES(3,'ThinkPadE470',3299,'开发本','详情三','2017-5-1',0,10);
INSERT INTO laptop VALUES(4,'小米Pro',7299,'游戏本','详情四','2019-6-1',1,30);
INSERT INTO laptop VALUES(5,NULL,3799,'办公本','详情五','2018-1-1',0,10);
INSERT INTO laptop VALUES(6,NULL,8799,'测试本','详情六','2018-10-1',1,20);
INSERT INTO laptop VALUES(7,'戴尔燃7000',DEFAULT,'老年本',DEFAULT,'2019-2-1',1,20);
INSERT INTO laptop(lid,title) VALUES(8,'联想小新');
INSERT INTO laptop VALUES(14,'外星人',15899,'游戏本','详情九','2018-11-1',1,40);
INSERT INTO laptop(lid,title) VALUES(NULL,'神州1');





