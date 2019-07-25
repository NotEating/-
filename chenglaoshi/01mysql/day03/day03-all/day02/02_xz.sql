#设置客户端连接服务器编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS xz;
#创建数据库，设置存储的编码
CREATE DATABASE xz CHARSET=UTF8;
#进入创建的数据库
USE xz;
#创建保存笔记本数据的表
CREATE TABLE laptop(
  lid INT,
  title VARCHAR(128),
  price DECIMAL(7,2),
  stockCount SMALLINT,
  shelfTime DATE,
  isIndex BOOL
);
#插入数据
INSERT INTO laptop VALUES
(1,'小米Air',3999,600,2018-12-1,TRUE),
(2,'苹果Pro',13999,128,'2017-10-1',FALSE),
(3,'戴尔燃7000',4999,200,'2019-1-1',1),
(4,'联想小新',4399,86,'2019-5-1',0);










