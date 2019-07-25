#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS tedu;
#创建数据库，设置编码
CREATE DATABASE tedu CHARSET=UTF8;
#进入创建好的数据库
USE tedu;
#创建保存部门数据的表
CREATE TABLE dept(
  did SMALLINT,
  dname VARCHAR(8),
  empCount SMALLINT
);
#插入部门数据
INSERT INTO dept VALUES
(10,'研发部',3),
(20,'市场部',2),
(30,'运营部',2);
#创建保存员工数据的表
CREATE TABLE emp(
  eid INT,
  ename VARCHAR(8),
  sex BOOL,
  birthday DATE,
  salary DECIMAL(7,2) #99999.99
);
#插入员工数据
INSERT INTO emp VALUES
(1,'李逵',1,'1280-3-20',28000),
(2,'宋江',1,'1267-5-5',88888.88),
(3,'马云',1,'1964-6-6',100000),
(4,'杨燕',0,'1988-2-29',30000);